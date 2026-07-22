"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const OurProducts = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const products = [
    { id: 0, src: "/SquareDrive.png", alt: "Product 1", title: "Hydraulic Torque Wrenches" },
    { id: 1, src: "/product2.png", alt: "Product 2", title: "Hex Drive" },
    { id: 2, src: "/product3.png", alt: "Product 3", title: "Hydraulic Equipment" },
    { id: 3, src: "/product4.png", alt: "Product 4", title: "Pipe Cutting & Beveling Machines" },
  ];

  // Auto-rotate every 1.5s
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % products.length);
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  // Left, center, right images
  const getVisibleImages = () => {
    const left = (currentIndex - 1 + products.length) % products.length;
    const center = currentIndex;
    const right = (currentIndex + 1) % products.length;
    return [products[left], products[center], products[right]];
  };

  const visibleImages = getVisibleImages();

  return (
    <div className="min-h-screen bg-black text-white">
      <section className="py-12 px-4">
        <div className="w-11/12 mx-auto w-full px-4 text-center">
          <div className="w-fit mx-auto flex flex-col items-center mb-8">
            <motion.h2
              className="heading-main font-base mb-0"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Our Products
            </motion.h2>

            {/* Red center line */}
            <motion.div
              className="w-full h-1 bg-red-600 mt-2 rounded-full"
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            />
          </div>

          {/* Description */}
          <motion.p
            className="text-body mb-12 max-w-2xl mx-auto font-poppins"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            We are the industry heads and produce the most reliable <br />
            and trendy solution you are looking for.
          </motion.p>

          {/* ======= PRODUCT SLIDER ======= */}
          <div className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] py-12 bg-black">
            {/* Background shape */}
            <div className="absolute inset-0 w-full">
              <div
                className="w-full h-[500px]"
                style={{
                  clipPath:
                    "polygon(0 0, 50% 10%, 100% 0, 100% 100%, 50% 90%, 0 100%)",
                  backgroundColor: "#1B1B1B",
                }}
              />
            </div>

            {/* Images with fixed height container */}
            <div className="relative flex flex-col items-center justify-center mt-10">
              {/* Fixed height container for images */}
              <div className="h-64 flex items-center justify-center mb-8">
                <motion.div
                  className="flex justify-center items-center gap-8"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1 }}
                >
                  <AnimatePresence mode="popLayout">
                    {visibleImages.map((product, index) => (
                      <motion.div
                        layout
                        key={product.id}
                        initial={{ opacity: 0, scale: 0.8, x: 60 }}
                        animate={{ opacity: index === 1 ? 1 : 0.7, scale: index === 1 ? 1.1 : 0.9, x: 0 }}
                        exit={{ opacity: 0, scale: 0.8, x: -60 }}
                        transition={{ layout: { type: "spring", stiffness: 300, damping: 30 }, duration: 0.5 }}
                      >
                        <motion.div
                          layout
                          className={`flex items-center justify-center rounded-2xl bg-red-600 border-red-500 ${index === 1 ? "w-80 h-60 shadow-2xl" : "w-48 h-36 shadow-lg"}`}
                        >
                          <motion.img
                            layout
                            src={product.src}
                            alt={product.alt}
                            className={`object-contain rounded-lg ${index === 1 ? "w-92 h-62" : "w-40 h-28"}`}
                          />
                        </motion.div>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </motion.div>
              </div>

              {/* Fixed height container for title */}
              <div className="h-16 flex items-center justify-center">
                <motion.h3
                  key={products[currentIndex].title}
                  className="inline-block bg-white text-black px-6 py-3 rounded-2xl text-2xl font-poppins font-semibold transition-all duration-500 shadow-md"
                  style={{ fontFamily: "Poppins, sans-serif" }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                  {products[currentIndex].title}
                </motion.h3>
              </div>
            </div>
          </div>
          {/* ======= END PRODUCT SLIDER ======= */}

          {/* View More button - now will stay fixed */}
          <motion.div
            className="mt-6"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 1.5 }}
          >
            <button className="bg-white font-poppins text-md text-red-700 font-bold px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors shadow-md">
              View More Products
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default OurProducts;