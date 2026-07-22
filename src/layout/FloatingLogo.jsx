"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function FloatingLogo() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show the sticky logo after navbar scrolls out of view (~80px)
      if (window.scrollY > 80) {
        setShow(true);
      } else {
        setShow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <div className="fixed top-0 left-0 w-full z-[9999] pointer-events-none">
          <div className="w-11/12 mx-auto">
            <div className="max-w-[1100px] mx-auto w-full px-4 py-3">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="pointer-events-auto w-fit"
              >
                <Link href="/" className="flex items-center">
                  <img
                    src="/xtroc.png"
                    alt="Xtorc Sticky Logo"
                    className="h-10 w-auto"
                  />
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
}
