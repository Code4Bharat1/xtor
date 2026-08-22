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
        <div className="flex flex-col md:flex-row gap-10 items-start justify-between">

          {/* Left Side Content (Heading + Tagline + Paragraph) */}
          <motion.div variants={fadeInUp} className="flex-1 text-justify">
            <div className="w-fit mb-6">
              <h2
                className="heading-main mb-0"
              >
                Products
              </h2>
              <div className="w-full h-1.5 bg-red-600 rounded-full mt-2"></div>
            </div>

            <h3
              className="heading-sub mb-6"
            >
              Precision Tools for Your <br /> Toughest Challenges
            </h3>

            {/* Paragraph */}
            <p
              className="text-body mt-8"
            >
              At XTORC, we provide cutting-edge solutions designed to meet the
              demands of modern industries. From bolting systems to cold cutting
              tools, our products are engineered for precision, safety, and
              efficiency.
              <br />
              <br />
              Whether you need hydraulic torque wrenches, bolt tensioning
              solutions, or in-situ machining tools, we are your trusted partner
              for delivering innovative, industry-ready tools that perform under
              the most challenging conditions.
            </p>
          </motion.div>

          {/* Right Side Card */}
          <motion.div
            variants={fadeInUp}
            className="w-full md:w-[360px] flex-shrink-0"
          >
            <div className="bg-gray-900 py-6 px-4 rounded-4xl border-2 border-white shadow-lg hover:shadow-red-600/40 hover:shadow-xl transition-all duration-300 w-full text-center">
              <h4 className="text-xl sm:text-3xl font-semibold mb-2 text-white">
                Optimized &
              </h4>
              <h4 className="text-xl sm:text-3xl font-semibold mb-4 text-white">
                Industry-Ready
              </h4>
              <h4 className="text-xl sm:text-3xl font-semibold text-white">
                Solutions
              </h4>
            </div>
          </motion.div>

        </div>
      </motion.div>
    </div>
  );
};

export default Product;
