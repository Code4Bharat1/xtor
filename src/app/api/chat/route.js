import { NextResponse } from 'next/server';
import { GoogleGenAI } from '@google/genai';

export async function POST(request) {
  try {
    const { messages } = await request.json();

    if (!process.env.GEMINI_API_KEY) {
      return NextResponse.json(
        { error: 'GEMINI_API_KEY is not configured.' },
        { status: 500 }
      );
    }

    // Initialize the new @google/genai SDK client
    const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

    // Ensure there are messages
    if (!messages || !Array.isArray(messages) || messages.length === 0) {
      return NextResponse.json({ error: 'No messages provided' }, { status: 400 });
    }

    // Extract the latest user message
    const latestMessage = messages[messages.length - 1].content;

    // Convert previous messages to the history format expected by the SDK
    const history = messages.slice(0, -1).map((msg) => ({
      role: msg.role === 'assistant' ? 'model' : 'user',
      parts: [{ text: msg.content }],
    }));

    const systemPrompt = `You are a helpful customer support agent for XTORC Bolting Tools.
    XTORC specializes in industrial tools like Hydraulic Torque Wrenches, Bolt Tensioning Solutions, Cold Cutting Machines, and On-site Machining Equipment.
    Your job is to assist users with questions ONLY related to XTORC, its products, services, or industrial bolting/machining.
    If a user asks a general question unrelated to XTORC (such as definitions of random words, coding help, or general trivia), politely decline and steer the conversation back to XTORC tools and services.
    Be professional, concise, and helpful.`;

    // Generate response using a chat session
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      config: {
        systemInstruction: systemPrompt,
      },
      contents: [
        ...history,
        {
          role: 'user',
          parts: [{ text: latestMessage }]
        }
      ]
    });

    const aiMessage = response.text || "I'm sorry, I couldn't generate a response.";

    return NextResponse.json({
      role: 'assistant',
      content: aiMessage
    });

  } catch (error) {
    console.error('Error in chat API:', error);
    return NextResponse.json(
      { error: 'Failed to process chat request' },
      { status: 500 }
    );
  }
}
