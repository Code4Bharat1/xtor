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

function DistributorPage() {
  return (
    <div className="bg-black flex items-start justify-center pt-16 px-8">
      <motion.div
        className="w-9/10 mx-auto text-center"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        {/* Service Heading */}
        <div className="w-fit mx-auto flex flex-col items-center mb-8">
          <motion.h1
            variants={fadeInUp}
            className="heading-main"
          >
            Distributor
          </motion.h1>
          <div className="w-full h-1 bg-[#D01A1A] mt-2 rounded-2xl"></div>
        </div>

        {/* Main Description Text */}
        <motion.h2
          variants={fadeInUp}
          className="heading-sub mb-8 leading-tight px-4"
        >
          "Expand Your Reach. Become a Distributor."
        </motion.h2>

        {/* Bottom Description Text */}
        <motion.p
          variants={fadeInUp}
          className="text-body w-full mx-auto mt-6 text-justify px-4"
        >
          Be part of our journey as we grow. At Xtorc, we’re building strong partnerships with passionate distributors who believe in innovation and long-term impact.  
          <br />
          <br />
          As an early partner, you’ll gain access to new markets, priority support, and the chance to shape the future of our distribution network right from the start.
        </motion.p>
      </motion.div>
    </div>
  );
}

export default DistributorPage;
