'use client'
import React from "react";
import { motion } from "framer-motion";

// Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3, // delay for each child
    },
  },
};

function Services() {
  return (
    <div className="bg-black flex items-start justify-center pt-16 px-8">
      <motion.div
        className="max-w-2xl mx-auto text-center"
        variants={container}
        initial="hidden"
        animate="visible"  // changed from whileInView
      >
        {/* Service Heading */}
        <motion.h1
          variants={fadeInUp}
          className="text-white text-6xl font-impact mb-4"
        >
          Service
        </motion.h1>

        {/* Red Border Line */}
        <motion.div
          variants={fadeInUp}
          className="w-96 h-1 mx-auto mb-8 rounded-2xl"
          style={{ backgroundColor: "#D01A1A" }}
        ></motion.div>

        {/* Main Description Text */}
        <motion.h2
          variants={fadeInUp}
          className="text-white text-5xl font-impact mb-8 leading-tight"
        >
          "Comprehensive Industrial Services
          with The Right Tools"
        </motion.h2>

        {/* CTA Button */}
        <motion.button
          variants={fadeInUp}
          className="text-white text-lg font-semibold px-8 py-3 rounded-xl hover:opacity-90 transition-opacity"
          style={{ backgroundColor: "#FF0000" }}
        >
          Discover Our Services
        </motion.button>

        {/* Bottom Description Text */}
        <motion.p
          variants={fadeInUp}
          className="text-white text-lg leading-relaxed max-w-lg mx-auto mt-6 text-justify"
        >
          At Xtorc, we offer end-to-end solutions tailored to industrial
          requirements.
        </motion.p>
      </motion.div>
    </div>
  );
}

export default Services;
