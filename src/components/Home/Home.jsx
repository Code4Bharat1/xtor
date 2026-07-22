"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

const Home = () => {
  const router = useRouter();
  const products = [
    { id: 0, src: "/SquareDrive.png", alt: "Product 1" },
    { id: 1, src: "/product5.png", alt: "Product 2" },
    { id: 2, src: "/product2.png", alt: "Product 3" },
    { id: 3, src: "/product4.png", alt: "Product 4" },
    { id: 4, src: "/product3.png", alt: "Product 4" },
    // { id: 5, src: "/product6.png", alt: "Product 4" },
  ];

  const [currentProductIndex, setCurrentProductIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentProductIndex(
        (prevIndex) => (prevIndex + 1) % products.length
      );
    }, 2000);

    return () => clearInterval(interval);
  }, [products.length]);

  // Parent container for staggered animation
  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.4, // delay between child animations
      },
    },
  };

  // Each child item animation
  const item = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <div className="bg-black text-white">
      {/* Hero Section */}
      <div className="bg-black px-4 sm:px-6 md:px-8 py-8">
        <div className="w-11/12 mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">

            {/* Left side - Product Image */}
            <motion.div
              className="w-full md:w-1/3 flex justify-center"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="relative w-3/4 sm:w-2/3 md:w-full max-w-md h-[250px] md:h-[350px] flex items-center justify-center">
                <img
                  src={products[currentProductIndex].src}
                  alt={products[currentProductIndex].alt}
                  className="max-w-[80%] max-h-[85%] object-contain transition-opacity duration-500"
                  key={currentProductIndex}
                />
              </div>
            </motion.div>

            {/* Right side - staggered text */}
            <motion.div
              className="w-full md:w-2/3 text-center md:text-right md:pl-4"
              variants={container}
              initial="hidden"
              animate="show" // animate immediately on page load
            >
              <motion.h1
                className="text-2xl sm:text-3xl md:text-4xl font-bold font-poppins mb-4 text-center md:text-right"
                variants={item}
              >
                <span className="text-red-500">XTORC Bolting Tools</span>
              </motion.h1>

              <motion.h2
                className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-semibold font-poppins text-white mb-8 text-center md:text-right"
                variants={item}
              >
                <span className="inline-block">Unmatched Quality |</span>{" "}
                <span className="inline-block">Unbeatable Prices</span>
              </motion.h2>

              <motion.p
                className="text-body font-poppins mb-8 text-justify"
                variants={item}
              >
                Welcome to Xtorc, where precision meets innovation. With over 10 years of expertise, we offer top-tier hydraulic torque wrenches,
                cold cutting machines, and on-site services, all backed by ISO
                9001:15000, CE, and ATEX certifications.
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row items-center justify-center md:justify-end gap-4 "
                variants={item}
              >
                <button className="relative bg-red-500 hover:bg-red-600 text-white px-6 sm:px-8 py-3 rounded-lg font-semibold transition-colors w-full sm:w-auto"
                  onClick={() => {
                    router.push("/contact")
                  }}>
                  Contact Us
                </button>
                <button className="bg-white hover:bg-gray-100 text-black px-6 sm:px-8 py-3 rounded-lg font-semibold transition-colors flex flex-col sm:flex-row items-center gap-2 w-full sm:w-auto"
                  onClick={() => {
                    router.push("/product")
                  }}>
                  <span>Explore Products</span>
                </button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
