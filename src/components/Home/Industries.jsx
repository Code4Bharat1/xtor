"use client";
import React from "react";
import { motion } from "framer-motion";

const Industries = () => {
  const industries = [
    {
      image: "/oil.png",
      title: "Oil and Gas",
      alt: "Oil and Gas Industry",
      hoverText:
        "Delivering high-precision tools for high-pressure operations.",
    },
    {
      image: "/turbine.png",
      title: "Turbine and Engineering Construction",
      alt: "Turbine and Engineering",
      hoverText: "Innovative solutions for heavy duty projects.",
    },
    {
      image: "/power.png",
      title: "Power Plants",
      alt: "Power Plants",
      hoverText:
        "Providing reliable maintenance solutions to ensure seamless functionality.",
    },
    {
      image: "/petrochemical.png",
      title: "Petrochemical and Fertilizer",
      alt: "Petrochemical and Fertilizer",
      hoverText: "Offering robust tools for safe and efficient operations.",
    },
  ];

  return (
    <div>
      <section className=" bg-black py-12 px-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Title with Borders */}
          <div className="flex items-center justify-center mb-4">
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              whileInView={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="flex-1 h-1 rounded-2xl bg-red-600 origin-right"
            ></motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, amount: 0.3 }}
              className="heading-main mx-8 text-white"
            >
              Our Contributions
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              whileInView={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="flex-1 h-1 rounded-2xl bg-red-600 origin-left"
            ></motion.div>
          </div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true, amount: 0.3 }}
            className="heading-sub text-center mb-12 font-poppins"
            style={{ color: "#D01A1A" }}
          >
            Industries We Serve!
          </motion.p>

          {/* Industry Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.3 }}
                viewport={{ once: true, amount: 0.2 }}
                className="text-center text-white"
              >
                <div
                  className={`relative group overflow-hidden rounded-2xl transition-all duration-300 ${index % 2 === 0
                      ? "hover:shadow-[-15px_15px_25px_-5px_rgba(220,38,38,0.4)]"
                      : "hover:shadow-[15px_15px_25px_-5px_rgba(220,38,38,0.4)]"
                    }`}
                >
                  <motion.img
                    src={industry.image}
                    alt={industry.alt}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: index * 0.3 }}
                    viewport={{ once: true }}
                    className="w-full h-64 object-cover transition-all duration-500 group-hover:scale-110"
                  />
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center p-6 group">
                    {/* Background overlay */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-25 transition-opacity duration-500 bg-[#B40000]" />

                    {/* Text */}
                    <p className="relative text-lg font-semibold text-center leading-relaxed text-transparent group-hover:text-white transition-colors duration-500">
                      {industry.hoverText}
                    </p>
                  </div>
                </div>
                <motion.h3
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.3 + 0.2 }}
                  viewport={{ once: true }}
                  className="text-xl font-semibold mt-4"
                >
                  {industry.title}
                </motion.h3>
              </motion.div>
            ))}
          </div>

          {/* Bottom Text */}
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true, amount: 0.3 }}
            className="heading-sub text-center mb-8 text-white"
          >
            The only place where you'll get the perfect solution for all your
            industry needs.
          </motion.p>

          {/* Red Border */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            viewport={{ once: true }}
            className="w-full h-0.5 bg-red-600 mb-6"
          ></motion.div>
        </div>
      </section>
    </div>
  );
};

export default Industries;
