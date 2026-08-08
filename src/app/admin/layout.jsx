"use client";
import React, { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

export default function AdminLayout({ children }) {
  const pathname = usePathname();
  const router = useRouter();
  const isLoginPage = pathname === "/admin/login";

  // Check initial state synchronously to avoid flicker
  const [isAuth, setIsAuth] = useState(() => {
    if (typeof window !== "undefined") {
      const auth = localStorage.getItem("xtorc_admin_auth");
      const token = localStorage.getItem("xtorc_admin_token");
      return auth === "true" && Boolean(token);
    }
    return false;
  });

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const auth = localStorage.getItem("xtorc_admin_auth");
      const token = localStorage.getItem("xtorc_admin_token");
      const valid = auth === "true" && Boolean(token);
      setIsAuth(valid);

      if (valid && isLoginPage) {
        router.push("/admin/testimonials");
      } else if (!valid && !isLoginPage) {
        router.push("/admin/login");
      }
      setIsLoading(false);
    }
  }, [pathname, isLoginPage, router]);

  if (isLoginPage) {
    return (
      <AnimatePresence mode="wait">
        <motion.div
          key="admin-login"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    );
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="flex flex-col items-center gap-3">
          <div className="w-8 h-8 border-2 border-red-600 border-t-transparent rounded-full animate-spin" />
          <span className="text-xs text-zinc-400 font-medium tracking-wide">Loading Dashboard...</span>
        </div>
      </div>
    );
  }

  if (!isAuth) {
    return null;
  }

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -6 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}

