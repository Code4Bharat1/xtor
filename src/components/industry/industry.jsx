"use client";
import { motion } from "framer-motion";

// Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

// Container variant for stagger
const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.3 } },
};

export default function IndustryPage() {
  return (
    <div className="overflow-x-hidden bg-black text-white pb-20 relative">
      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        <div className="flex justify-center">
          {/* ✅ HEADER CONTENT */}
          <motion.div variants={fadeInUp} className="max-w-3xl text-center flex flex-col items-center">
            <div className="w-fit mx-auto mb-6">
              <h2 className="heading-main mb-0">
                Industries We Serve
              </h2>
              <div className="w-full h-1.5 bg-red-600 rounded-full mt-2"></div>
            </div>

            <h3 className="heading-sub mt-2 mb-6 text-center">
              Custom Solutions for Diverse Industries
            </h3>
            <p className="text-body max-w-2xl mx-auto text-center">
              We are the industry heads and produce the most reliable and trendy solutions you are looking for.
            </p>
          </motion.div>
        </div>
      </motion.div>

      {/* ✅ INDUSTRIES LIST SECTION */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex items-center justify-center mt-10"
      >
        <h2 className="text-white text-2xl sm:text-3xl md:text-4xl font-normal font-poppins mx-8 text-center">
          Industries <span className="text-red-600">We Serve</span> Include:
        </h2>
      </motion.div>
    </div>
  );
}
