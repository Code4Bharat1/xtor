"use client";
import React, { useState, useRef, useEffect } from "react";
import { X, Send, Paperclip, Smile, Bot, User, MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const ChatBoat = () => {
  const [open, setOpen] = useState(false);
  const [chatStarted, setChatStarted] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  // Auto-scroll to bottom of chat
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = { role: "user", content: input };
    const newMessages = [...messages, userMessage];

    setMessages(newMessages);
    setInput("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: newMessages })
      });

      const data = await response.json();

      if (response.ok) {
        setMessages((prev) => [...prev, data]);
      } else {
        setMessages((prev) => [...prev, { role: "assistant", content: `Error: ${data.error}` }]);
      }
    } catch (error) {
      console.error("Chat error:", error);
      setMessages((prev) => [...prev, { role: "assistant", content: "Something went wrong. Please try again." }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      {/* Floating Chat Icon (Pinned to left screen edge) */}
      <img
        src="/chatboat.png"
        alt="chat_boat"
        className="fixed bottom-20 left-0 z-[9999] w-20 h-48 object-cover cursor-pointer hover:brightness-110 transition-all duration-300 drop-shadow-[5px_0_15px_rgba(0,0,0,0.1)]"
        onClick={() => setOpen(!open)}
      />

      {/* Chat Window */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.2 }}
            className="fixed md:bottom-10 md:left-24 bottom-20 left-4 z-[10000] h-[520px] max-h-[80vh] w-[380px] max-w-[calc(100vw-2rem)] bg-[#F8F9FA] rounded-2xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.3)] flex flex-col border border-gray-200 overflow-hidden"
          >
            {/* Premium Header */}
            <div className="bg-gradient-to-r from-[#D01A1A] to-red-700 h-18 px-4 flex items-center justify-between text-white shrink-0 shadow-md z-10 relative">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30">
                    <Bot size={24} className="text-white" />
                  </div>
                  <span className="absolute bottom-0 right-0 w-3 h-3 bg-[#10B981] border-2 border-red-700 rounded-full"></span>
                </div>
                <div>
                  <p className="text-lg font-bold leading-tight font-poppins">XTORC Assistant</p>
                  <span className="text-xs text-white/80 font-medium">We reply immediately</span>
                </div>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="p-1.5 hover:bg-white/20 rounded-full transition-colors duration-200"
              >
                <X size={20} />
              </button>
            </div>

            {/* Chat Body */}
            <div className="flex-1 flex flex-col p-4 overflow-hidden relative">
              {/* Background Pattern (subtle) */}
              <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: "radial-gradient(#000 1px, transparent 1px)", backgroundSize: "16px 16px" }}></div>

              {!chatStarted ? (
                <div className="flex-1 flex flex-col items-center justify-center z-10">
                  <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mb-6 shadow-inner">
                    <MessageCircle size={40} className="text-[#D01A1A]" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2 font-poppins text-center">Need Expert Advice?</h3>
                  <p className="text-sm text-gray-500 text-center mb-8 px-4 leading-relaxed">
                    Chat with our AI assistant to learn about our hydraulic torque tools, services, or request a quote.
                  </p>
                  <button
                    className="group bg-[#D01A1A] rounded-full w-[85%] h-12 flex items-center justify-center gap-2 cursor-pointer shadow-lg hover:shadow-red-500/30 hover:-translate-y-0.5 transition-all duration-300"
                    onClick={() => setChatStarted(true)}
                  >
                    <span className="text-white font-semibold font-poppins">Start Conversation</span>
                    <Send size={18} className="text-white transform group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              ) : (
                <>
                  {/* Messages Scroll Area */}
                  <div className="flex-1 overflow-y-auto mb-2 space-y-5 pr-2 z-10 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent">
                    {messages.length === 0 && (
                      <div className="flex flex-col items-center justify-center h-full opacity-50">
                        <Bot size={48} className="text-gray-400 mb-2" />
                        <p className="text-gray-500 text-sm font-medium">How can we help you today?</p>
                      </div>
                    )}

                    {messages.map((msg, index) => (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ duration: 0.2 }}
                        key={index}
                        className={`flex gap-2.5 ${msg.role === "user" ? "flex-row-reverse" : "flex-row"}`}
                      >
                        {/* Avatar */}
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 shadow-sm ${msg.role === 'user' ? 'bg-gradient-to-br from-gray-200 to-gray-300' : 'bg-gradient-to-br from-[#D01A1A] to-red-800'}`}>
                          {msg.role === 'user' ? <User size={16} className="text-gray-700" /> : <Bot size={16} className="text-white" />}
                        </div>

                        {/* Message Bubble */}
                        <div
                          className={`max-w-[85%] whitespace-pre-wrap break-words px-4 py-2.5 text-[15px] leading-relaxed shadow-sm font-poppins ${msg.role === "user"
                              ? "bg-[#D01A1A] text-white rounded-2xl rounded-tr-sm"
                              : "bg-white border border-gray-100 text-gray-800 rounded-2xl rounded-tl-sm"
                            }`}
                        >
                          {msg.content}
                        </div>
                      </motion.div>
                    ))}

                    {/* Loading indicator */}
                    {isLoading && (
                      <motion.div
                        initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                        className="flex justify-start gap-2.5"
                      >
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#D01A1A] to-red-800 flex items-center justify-center shrink-0 shadow-sm">
                          <Bot size={16} className="text-white" />
                        </div>
                        <div className="bg-white border border-gray-100 text-gray-500 rounded-2xl rounded-tl-sm px-4 py-3.5 shadow-sm flex items-center gap-1.5">
                          <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></span>
                          <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
                          <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
                        </div>
                      </motion.div>
                    )}
                    <div ref={messagesEndRef} className="h-1" />
                  </div>

                  {/* Enhanced Input Area */}
                  <div className="flex items-center gap-2 bg-white rounded-full shadow-[0_2px_10px_rgba(0,0,0,0.05)] border border-gray-200 p-1.5 shrink-0 z-10 mt-2">
                    <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors rounded-full hover:bg-gray-50">
                      <Smile size={20} />
                    </button>
                    <input
                      type="text"
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      onKeyDown={handleKeyDown}
                      placeholder="Type a message..."
                      className="flex-1 min-w-0 text-[15px] font-poppins bg-transparent text-gray-800 outline-none px-1 placeholder-gray-400"
                    />
                    <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors rounded-full hover:bg-gray-50">
                      <Paperclip size={20} />
                    </button>
                    <button
                      onClick={handleSend}
                      disabled={!input.trim() || isLoading}
                      className="bg-[#D01A1A] text-white p-2.5 rounded-full disabled:opacity-50 hover:bg-red-700 transition-all shadow-md flex items-center justify-center"
                    >
                      <Send size={16} className="ml-0.5" />
                    </button>
                  </div>
                </>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatBoat;
