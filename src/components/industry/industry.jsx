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
    <div className="overflow-x-hidden bg-black text-white pb-20 relative ">
      {/* ✅ LEFT SIDE CONTENT */}
      <motion.div
        className="w-9/10 mx-auto px-4 py-12 text-left"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        <div className="w-fit mx-auto md:mx-0 flex flex-col items-center md:items-start mb-6">
          <motion.h2
            variants={fadeInUp}
            className="text-white text-3xl sm:text-4xl md:text-5xl font-bold font-poppins mb-0"
          >
            Industries We Serve
          </motion.h2>
          <div className="w-full h-1.5 bg-red-600 rounded-full mt-2"></div>
        </div>

        <motion.div variants={fadeInUp} className="flex-1 text-left">
          <h3 className="text-white text-2xl sm:text-3xl md:text-4xl font-normal font-poppins mt-4 mb-6 md:mb-8 text-center md:text-left">
            Custom Solutions for <br />
            Diverse Industries
          </h3>
          <p className="text-body mt-8 text-center md:text-left">
            We are the industry heads and produce the most <br />
            reliable and trendy solutions you are looking for.
          </p>
        </motion.div>
      </motion.div>

      {/* ✅ RIGHT SIDE CARD RESPONSIVE */}
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
        className="
          w-full px-2 mt-6
          md:w-[360px] md:absolute md:top-6 md:right-12 md:mt-0 lg:right-16
          z-10
        "
      >
        <div className="bg-gray-900 py-6 rounded-4xl border-2 border-white shadow-lg hover:shadow-red-600/40 hover:shadow-xl transition-all duration-300 w-full h-auto text-center">
          <p className="text-white text-center text-2xl sm:text-3xl font-semibold leading-relaxed">
            Our tools and <br />
            services cater to a <br /> variety of industrial <br />
            needs.
          </p>
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
