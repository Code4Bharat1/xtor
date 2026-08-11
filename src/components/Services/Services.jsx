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
    <div
      className="bg-black flex items-start justify-center pt-10 sm:pt-14 px-4 sm:px-8"
      style={{ fontFamily: "Poppins, sans-serif" }}
    >
      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        {/* Service Heading */}
        <div className="w-fit mx-auto mb-6">
          <motion.h1
            variants={fadeInUp}
            className="heading-main mb-2 text-center"
          >
            Our Services
          </motion.h1>

          {/* Red Border Line */}
          <motion.div
            variants={fadeInUp}
            className="w-full h-1.5 rounded-full bg-red-600"
          ></motion.div>
        </div>

        {/* Main Description Subheading */}
        <motion.h2
          variants={fadeInUp}
          className="heading-sub mb-6 leading-snug"
        >
          "Comprehensive Industrial Services with The Right Tools"
        </motion.h2>

        {/* CTA Button */}
        <motion.button
          variants={fadeInUp}
          className="bg-red-600 text-white text-sm sm:text-base font-bold px-7 py-2.5 rounded-xl hover:bg-red-700 transition-colors shadow-lg shadow-red-600/20 cursor-pointer mb-6"
        >
          Discover Our Services
        </motion.button>

        {/* Bottom Description Text */}
        <motion.p
          variants={fadeInUp}
          className="text-body max-w-xl mx-auto text-center opacity-90"
        >
          At Xtorc, we offer end-to-end solutions tailored to demanding industrial requirements worldwide.
        </motion.p>
      </motion.div>
    </div>
  );
}

export default Services;
