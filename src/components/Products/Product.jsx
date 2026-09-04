"use client";
import React from "react";
import { motion } from "framer-motion";

// Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

// Container variant for stagger
const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const Product = () => {
  return (
    <div className="bg-black relative overflow-hidden">
      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 bg-black relative"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        <div className="flex justify-center">
          {/* Header Content (Heading + Tagline + Paragraph) */}
          <motion.div variants={fadeInUp} className="w-full max-w-6xl text-center flex flex-col items-center">
            <div className="w-fit mx-auto mb-6">
              <h2
                className="heading-main mb-0"
              >
                Products
              </h2>
              <div className="w-full h-1.5 bg-red-600 rounded-full mt-2"></div>
            </div>

            <h3
              className="heading-sub mb-6 text-center"
            >
              Precision Tools for Your Toughest Challenges
            </h3>

            {/* Paragraphs */}
            <div className="space-y-4 max-w-5xl mx-auto text-justify">
              <p className="text-body text-justify leading-relaxed">
                At XTORC, we provide cutting-edge solutions designed to meet the
                demands of modern industries. From bolting systems to cold cutting
                tools, our products are engineered for precision, safety, and
                efficiency.
              </p>
              <p className="text-body text-justify leading-relaxed">
                Whether you need hydraulic torque wrenches, bolt tensioning
                solutions, or in-situ machining tools, we are your trusted partner
                for delivering innovative, industry-ready tools that perform under
                the most challenging conditions.
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Product;
