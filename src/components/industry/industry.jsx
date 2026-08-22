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
        <div className="flex flex-col md:flex-row gap-10 items-start justify-between">
          {/* ✅ LEFT SIDE CONTENT */}
          <motion.div variants={fadeInUp} className="flex-1 text-left">
            <div className="w-fit mb-6">
              <h2 className="heading-main mb-0">
                Industries We Serve
              </h2>
              <div className="w-full h-1.5 bg-red-600 rounded-full mt-2"></div>
            </div>

            <h3 className="heading-sub mt-4 mb-6 md:mb-8">
              Custom Solutions for <br />
              Diverse Industries
            </h3>
            <p className="text-body mt-8">
              We are the industry heads and produce the most <br />
              reliable and trendy solutions you are looking for.
            </p>
          </motion.div>

          {/* ✅ RIGHT SIDE CARD RESPONSIVE */}
          <motion.div
            variants={fadeInUp}
            className="w-full md:w-[360px] flex-shrink-0"
          >
            <div className="bg-gray-900 py-6 px-4 rounded-4xl border-2 border-white shadow-lg hover:shadow-red-600/40 hover:shadow-xl transition-all duration-300 w-full text-center">
              <p className="text-white text-center text-2xl sm:text-3xl font-semibold leading-relaxed">
                Our tools and <br />
                services cater to a <br /> variety of industrial <br />
                needs.
              </p>
            </div>
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
