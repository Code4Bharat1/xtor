"use client";
import { motion } from "framer-motion";

const SplashScreen = () => {
  return (
    <motion.div
      key="splash"
      className="flex items-center justify-center h-screen w-screen bg-black z-[9999] fixed top-0 left-0"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.6 }}
    >
      <motion.img
        src="/XTORC_LOGO.png"
        alt="Splash Logo"
        className="w-[300px] sm:w-[420px] md:w-[540px] lg:w-[640px] max-w-[90vw] h-auto object-contain drop-shadow-[0_10px_30px_rgba(208,26,26,0.3)]"
        initial={{ scale: 0.9, opacity: 0.8 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      />
    </motion.div>
  );
};

export default SplashScreen;

