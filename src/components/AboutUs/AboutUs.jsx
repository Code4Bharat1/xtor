"use client";
import React from "react";
import { motion } from "framer-motion";

// Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 40 }, // start slightly below
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

// Container variant for stagger
const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3, // delay between children
    },
  },
};

const AboutSection = () => {
  return (
    <div className="bg-black text-white">
      <motion.div
        className="w-9/10 mx-auto px-4"
        variants={container}
        initial="hidden"
        animate="visible" // changed from whileInView
      >
        {/* First Section - Single Column Layout */}
        <div className="max-w-[1000px] mx-auto mb-12 lg:mb-16">
          {/* About Us Header */}
          <motion.div variants={fadeInUp} className="mb-6 lg:mb-8 mt-4 lg:mt-8 w-fit">
            <h2 className="heading-main mb-4">
              About Us
            </h2>
            <div
              className="w-full h-1.5 bg-[#D01A1A] rounded-lg"
            ></div>
          </motion.div>

          {/* Engineering Excellence Title */}
          <motion.h3
            variants={fadeInUp}
            className="heading-sub mb-6 leading-tight"
          >
            Engineering Excellence, Driven by Experience
          </motion.h3>

          {/* First Paragraph (Chronological order: Founded first) */}
          <motion.p
            variants={fadeInUp}
            className="text-body w-full mb-6 text-justify"
          >
            Xtorc was founded with a vision to provide world-class industrial tools
            and services tailored to modern challenges. With over a decade of
            industry expertise, we're redefining how industries achieve
            precision, efficiency, and safety. Our journey has been fueled by
            a commitment to quality and innovation, backed by ISO 9001:15000,
            CE, and ATEX certifications.
          </motion.p>

          {/* Second Paragraph */}
          <motion.p
            variants={fadeInUp}
            className="text-body w-full mb-6 text-justify"
          >
            At Xtorc, we believe in creating value that extends beyond
            products. Our WIN-WIN-WIN philosophy ensures that our customers
            win, our employees thrive, and our entrepreneurs succeed.
          </motion.p>
        </div>

        {/* Cool Facts Section */}
        <motion.div variants={container} className="flex flex-col lg:flex-row items-start gap-4 lg:gap-12">
          {/* Left Side - Some Cool Facts */}
          <div className="flex-1 flex flex-col items-start gap-2">
            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4 w-full"
            >
              <h3 className="heading-main">
                Some Cool Facts
              </h3>
              <div
                className="w-full sm:w-40 lg:w-80 h-1.5 rounded-lg mt-2 sm:mt-0 bg-[#D01A1A]"
              ></div>
            </motion.div>

            <motion.h4
              variants={fadeInUp}
              className="heading-sub mt-2"
              style={{ color: "#D01A1A" }}
            >
              Numbers Speak For Themselves
            </motion.h4>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default AboutSection;
