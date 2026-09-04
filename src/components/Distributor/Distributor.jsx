'use client';
import React from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import DistributorForm from "./DistributorForm";

// Dynamically import map component with SSR disabled to guarantee Leaflet runs client-side only
const GlobalDistributorMap = dynamic(
  () => import("./GlobalDistributorMap"),
  {
    ssr: false,
    loading: () => (
      <div className="w-full max-w-4xl mx-auto h-[290px] sm:h-[330px] md:h-[360px] rounded-xl bg-zinc-950 border border-zinc-800 flex flex-col items-center justify-center text-gray-400 shadow-2xl">
        <div className="w-8 h-8 border-2 border-red-600 border-t-transparent rounded-full animate-spin mb-3"></div>
        <p className="text-sm font-medium text-gray-300">Loading Interactive World Map...</p>
      </div>
    ),
  }
);

// Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

function DistributorPage() {
  return (
    <div className="bg-black text-white" style={{ fontFamily: "Poppins, sans-serif" }}>
      {/* Top Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-6 text-center">
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
        >
          {/* Service Heading */}
          <motion.div variants={fadeInUp} className="w-fit mx-auto flex flex-col items-center mb-8">
            <h1 className="heading-main mb-0 text-white">
              Distributor
            </h1>
            <div className="w-full h-1 bg-[#D01A1A] mt-2 rounded-2xl"></div>
          </motion.div>

          {/* Main Description Text */}
          <motion.h2
            variants={fadeInUp}
            className="text-lg sm:text-xl md:text-2xl font-semibold text-red-500 mb-6 leading-tight px-4"
          >
            &ldquo;Expand Your Reach. Become a Distributor.&rdquo;
          </motion.h2>

          {/* Bottom Description Paragraph */}
          <motion.p
            variants={fadeInUp}
            className="text-gray-200 text-lg md:text-xl leading-relaxed w-full max-w-4xl mx-auto mt-4 text-justify px-4"
          >
            Be part of our journey as we grow. At Xtorc, we&apos;re building strong partnerships with passionate distributors who believe in innovation and long-term impact.
            <br /><br />
            As an early partner, you&apos;ll gain access to new markets, priority support, and the chance to shape the future of our distribution network right from the start.
          </motion.p>
        </motion.div>
      </div>

      {/* Become a Distributor Application Form Section */}
      <DistributorForm />

      {/* Global Distributors Map Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-8 w-fit"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            Our Global Distributors
          </h2>
          <div className="w-full h-1 bg-red-600 rounded-2xl mt-2"></div>
        </motion.div>

        {/* Interactive World Map */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="w-full"
        >
          <GlobalDistributorMap />
        </motion.div>

        {/* Bottom Tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center text-gray-500 text-sm sm:text-base mt-8"
        >
          Serving customers across multiple continents with trusted distribution partners
        </motion.p>
      </div>
    </div>
  );
}

export default DistributorPage;