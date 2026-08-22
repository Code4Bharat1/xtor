"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Lock, Mail, Eye, EyeOff, ShieldCheck, ArrowRight, X, CheckCircle, AlertCircle } from "lucide-react";
import { api } from "@/services/apiClient";

export default function AdminLogin() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Auto-disappear error popup after 5 seconds
  useEffect(() => {
    if (errorMessage) {
      const timer = setTimeout(() => {
        setErrorMessage("");
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [errorMessage]);

  // Validate inputs before submitting
  const validateForm = () => {
    const cleanEmail = email.trim();
    if (!cleanEmail) {
      setErrorMessage("Please enter your admin email address.");
      return false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(cleanEmail)) {
      setErrorMessage("Please enter a valid email address (e.g. admin@xtorc.com).");
      return false;
    }
    if (!password) {
      setErrorMessage("Please enter your password.");
      return false;
    }
    return true;
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setErrorMessage("");

    // Perform client-side string validation
    if (!validateForm()) return;

    setIsLoading(true);

    try {
      // Real API Authentication against Express/MongoDB Backend
      const res = await api.post("/auth/login", {
        email: email.trim().toLowerCase(),
        password,
      });

      const token = res?.data?.token || res?.token;
      const admin = res?.data?.admin || res?.admin;

      if (!token) {
        setErrorMessage("Authentication failed: Server did not return a security token.");
        setIsLoading(false);
        return;
      }

      if (typeof window !== "undefined") {
        localStorage.setItem("xtorc_admin_auth", "true");
        localStorage.setItem("xtorc_admin_token", token);
        localStorage.setItem("xtorc_admin_user", JSON.stringify(admin || { email }));
      }

      router.push("/admin/testimonials");
    } catch (err) {
      // Gracefully handle backend error strings without throwing or logging to console
      const backendMessage = err?.message || "Incorrect email or password. Please try again.";
      setErrorMessage(backendMessage);
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center p-4 relative overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-red-600/15 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[350px] h-[350px] bg-amber-600/10 blur-[150px] rounded-full pointer-events-none" />

      {/* Compact Top-Right Auto-Dismissing Toast Notification (5s) */}
      <AnimatePresence>
        {errorMessage && (
          <motion.div
            initial={{ opacity: 0, y: -15, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -15, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 450, damping: 30 }}
            className="fixed top-6 right-4 sm:right-6 z-[200] max-w-[340px] w-[calc(100vw-2rem)] rounded-xl bg-zinc-950/95 backdrop-blur-xl border border-red-500/30 text-white shadow-[0_10px_30px_-5px_rgba(220,38,38,0.25),0_6px_15px_rgba(0,0,0,0.5)] overflow-hidden"
          >
            <div className="px-3.5 py-2.5 flex items-center gap-2.5">
              {/* Compact Glowing Icon Badge */}
              <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-red-500 to-red-700 flex items-center justify-center flex-shrink-0 shadow-sm border border-red-400/40">
                <AlertCircle className="w-4 h-4 text-white" />
              </div>

              {/* Content */}
              <div className="flex-1 text-left min-w-0 pr-1">
                <p className="text-xs text-zinc-200 font-medium leading-snug">
                  {errorMessage}
                </p>
              </div>

              {/* Close Button */}
              <button
                type="button"
                onClick={() => setErrorMessage("")}
                className="text-zinc-400 hover:text-white p-1 rounded-md hover:bg-zinc-800/60 transition-colors cursor-pointer flex-shrink-0"
                aria-label="Close notification"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Sleek 2px Progress Bar */}
            <div className="w-full h-[2px] bg-zinc-900 overflow-hidden">
              <motion.div
                initial={{ width: "100%" }}
                animate={{ width: "0%" }}
                transition={{ duration: 5, ease: "linear" }}
                className="h-full bg-gradient-to-r from-red-600 via-red-500 to-red-600 shadow-[0_0_6px_rgba(239,68,68,0.8)]"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0, y: 25, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="w-full max-w-md relative z-10"
      >
        {/* Glassmorphic Card */}
        <div className="bg-gradient-to-b from-zinc-900/90 to-zinc-950/95 border border-zinc-800 p-8 sm:p-10 rounded-3xl shadow-2xl backdrop-blur-2xl">
          <div className="text-center mb-8">
            <div className="flex justify-center mb-5">
              <img
                src="/xtroc.png"
                alt="XTORC Logo"
                className="h-12 w-auto object-contain"
              />
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">Admin</h1>
            <p className="text-xs text-zinc-400 mt-1 font-medium">Control Panel Access</p>
          </div>

          {/* Real Login Form */}
          <form onSubmit={handleLogin} className="space-y-5" noValidate>
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-zinc-400 mb-2">
                Admin Email
              </label>
              <div className="relative">
                <Mail className="w-5 h-5 text-zinc-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (errorMessage) setErrorMessage("");
                  }}
                  placeholder="Enter email"
                  className="w-full pl-11 pr-4 py-3 rounded-xl bg-zinc-900 border border-zinc-800 focus:border-red-500 focus:ring-2 focus:ring-red-500/20 text-white placeholder-zinc-500 text-sm outline-none transition"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-zinc-400 mb-2">
                Password
              </label>
              <div className="relative">
                <Lock className="w-5 h-5 text-zinc-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    if (errorMessage) setErrorMessage("");
                  }}
                  placeholder="••••••••"
                  className="w-full pl-11 pr-11 py-3 rounded-xl bg-zinc-900 border border-zinc-800 focus:border-red-500 focus:ring-2 focus:ring-red-500/20 text-white placeholder-zinc-500 text-sm outline-none transition"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-zinc-300 transition"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-bold text-sm py-3.5 rounded-xl shadow-lg shadow-red-600/30 transition-all flex items-center justify-center gap-2 cursor-pointer mt-2"
            >
              {isLoading ? (
                <>
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  <span>Logging in...</span>
                </>
              ) : (
                <>
                  <span>Login</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </form>
        </div>
      </motion.div>
    </div>
  );
}
