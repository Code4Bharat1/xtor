"use client";
import { motion } from "framer-motion";

export default function CareersSection() {
  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <motion.section
      className="bg-black text-white py-10 px-6 text-center"
      initial="hidden"
      animate="show"
      variants={containerVariants}
    >
      <div className="w-9/10 mx-auto">
      {/* Heading */}
      <div className="w-fit mx-auto flex flex-col items-center mb-8">
        <motion.h2
          className="heading-main mb-0"
          variants={itemVariants}
        >
          Join Us
        </motion.h2>
        <div className="w-full h-1 bg-red-600 rounded-full mt-2"></div>
      </div>

      <motion.h3
        className="heading-sub mb-14"
        
        variants={itemVariants}
      >
        Be Part of Our Growth Story
      </motion.h3>

      {/* Buttons */}
      <motion.div
        className="flex flex-col sm:flex-row justify-center gap-10 mb-10"
        variants={itemVariants}
      >
        {/* <button className="bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-3 rounded-md transition md:w-auto">
          View Open Positions
        </button> */}
        <button className="bg-red-300 w-85 hover:bg-red-400 text-black font-semibold md:px-6 py-3 rounded-md transition md:w-50" >
          Apply Now
        </button>
      </motion.div>

      {/* Description */}
      <motion.p
        className="text-body text-justify"
        variants={itemVariants}
      >
        Xtorc is a growing startup driven by innovation, collaboration, and
        excellence. With strong industry expertise, we’re seeking passionate
        individuals—experienced or fresh—to join us in redefining industrial
        solutions. Explore roles in engineering, sales, and operations, and help
        shape the future of industrial tools and services.
      </motion.p>
      </div>
    </motion.section>
  );
}
