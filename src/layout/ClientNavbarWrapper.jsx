"use client";
import React, { useEffect } from "react";
import { usePathname } from "next/navigation";
import Navbar from "./Navbar";
import { motion } from "framer-motion";

export default function ClientNavbarWrapper({ children }) {
  const pathname = usePathname();
  const isAdmin = pathname?.startsWith("/admin");

  useEffect(() => {
    const hasSeenSplash = sessionStorage.getItem("hasSeenSplash");
    const splashEl = document.getElementById("initial-splash-overlay");

    if (hasSeenSplash) {
      if (splashEl) splashEl.style.display = "none";
      document.documentElement.classList.add("splash-hidden");
    } else {
      // First visit: Show splash for 1.5s then fade out smoothly
      const timer = setTimeout(() => {
        if (splashEl) {
          splashEl.style.opacity = "0";
          splashEl.style.visibility = "hidden";
          setTimeout(() => {
            splashEl.style.display = "none";
            document.documentElement.classList.add("splash-hidden");
            sessionStorage.setItem("hasSeenSplash", "true");
          }, 600);
        } else {
          sessionStorage.setItem("hasSeenSplash", "true");
        }
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  if (isAdmin) {
    return <>{children}</>;
  }

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <Navbar />
      </motion.div>
      <div className="w-full overflow-x-hidden">
        {children}
      </div>
    </>
  );
}

