"use client";
import React, { createContext, useContext, useState, useCallback, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, X } from "lucide-react";

const ToastContext = createContext(null);

export function useToast() {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("useToast must be used within a ToastProvider");
  }
  return context;
}

// Single Toast Item with shrinking countdown line and pause-on-hover
function ToastItem({ toast, onDismiss }) {
  const { id, type, title, message, duration = 4500 } = toast;
  const isSuccess = type === "success";
  const [progress, setProgress] = useState(100);
  const [isPaused, setIsPaused] = useState(false);
  const remainingTimeRef = useRef(duration);
  const startTimeRef = useRef(null);

  useEffect(() => {
    if (isPaused) return;

    startTimeRef.current = Date.now();
    const initialRemaining = remainingTimeRef.current;

    const interval = setInterval(() => {
      const elapsed = Date.now() - startTimeRef.current;
      const left = Math.max(0, initialRemaining - elapsed);
      remainingTimeRef.current = left;

      setProgress((left / duration) * 100);

      if (left <= 0) {
        clearInterval(interval);
        setTimeout(() => {
          onDismiss(id);
        }, 0);
      }
    }, 25);

    return () => clearInterval(interval);
  }, [isPaused, duration, id, onDismiss]);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: -20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, x: 60, scale: 0.95 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      className="relative overflow-hidden bg-white text-gray-900 rounded-2xl shadow-[0_15px_35px_rgba(0,0,0,0.35)] border border-gray-100 flex flex-col w-[330px] sm:w-[380px] pointer-events-auto select-none"
    >
      {/* Shrinking Top Timer Line ("line get minimum and get disapper") */}
      <div className="w-full h-1 bg-gray-100 overflow-hidden">
        <div
          style={{ width: `${progress}%` }}
          className={`h-full transition-all duration-[25ms] ease-linear ${
            isSuccess ? "bg-[#22c55e]" : "bg-[#ef4444]"
          }`}
        />
      </div>

      {/* Content Row */}
      <div className="flex items-start gap-3 p-3.5 sm:p-4 w-full">
        {/* Circular Badge Icon */}
        <div
          className={`w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 shadow-sm ${
            isSuccess ? "bg-[#22c55e]" : "bg-[#ef4444]"
          }`}
        >
          {isSuccess ? (
            <Check className="w-4 h-4 sm:w-5 sm:h-5 text-white stroke-[3]" />
          ) : (
            <X className="w-4 h-4 sm:w-5 sm:h-5 text-white stroke-[3]" />
          )}
        </div>

        {/* Text Content */}
        <div className="flex-1 min-w-0 pr-1">
          <h4 className="font-bold text-gray-900 text-sm sm:text-base leading-snug">
            {title || (isSuccess ? "Success" : "Error")}
          </h4>
          {message && (
            <p className="text-gray-600 text-xs sm:text-sm mt-0.5 leading-relaxed break-words">
              {message}
            </p>
          )}
        </div>

        {/* Close Button */}
        <button
          type="button"
          onClick={() => onDismiss(id)}
          aria-label="Close notification"
          className="text-gray-400 hover:text-gray-700 p-1 rounded-lg hover:bg-gray-100 transition-colors flex-shrink-0 cursor-pointer"
        >
          <X className="w-4 h-4 stroke-[2.5]" />
        </button>
      </div>
    </motion.div>
  );
}

export function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([]);

  const dismissToast = useCallback((id) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  const addToast = useCallback((type, title, message, duration = 4500) => {
    const id = `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
    const newToast = { id, type, title, message, duration };
    setToasts((prev) => [...prev, newToast]);
    return id;
  }, []);

  const toast = {
    success: (titleOrMessage, message, duration) => {
      if (message !== undefined) {
        return addToast("success", titleOrMessage, message, duration);
      }
      return addToast("success", "Success", titleOrMessage, duration);
    },
    error: (titleOrMessage, message, duration) => {
      if (message !== undefined) {
        return addToast("error", titleOrMessage, message, duration);
      }
      return addToast("error", "Error", titleOrMessage, duration);
    },
    dismiss: dismissToast,
  };

  return (
    <ToastContext.Provider value={toast}>
      {children}
      {/* Toast Fixed Viewport Container */}
      <div className="fixed top-5 right-4 sm:right-6 z-[999999] flex flex-col gap-3 pointer-events-none max-w-[calc(100vw-2rem)]">
        <AnimatePresence mode="sync">
          {toasts.map((t) => (
            <ToastItem key={t.id} toast={t} onDismiss={dismissToast} />
          ))}
        </AnimatePresence>
      </div>
    </ToastContext.Provider>
  );
}

export default ToastProvider;
