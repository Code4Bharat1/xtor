"use client";
import { useState } from "react";
import { Mail, MapPinned, Phone } from "lucide-react";
import { motion } from "framer-motion";
import ContactSection from "./form";

export default function ContactPage() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const container = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15 } },
  };

  return (
    <div className="overflow-hidden bg-black text-white min-h-screen relative">
      {/* HERO SECTION (Left Text + Right Contact Box) */}
      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col md:flex-row items-start justify-between gap-8 md:gap-12"
        initial="hidden"
        animate="visible"
        variants={container}
      >
        {/* Left Section */}
        <div className="flex-1 max-w-full md:max-w-[55%]">
          {/* Heading */}
          <motion.div variants={fadeInUp} className="w-fit mb-6">
            <h2 className="heading-main mb-0 text-white">
              Contact Us
            </h2>
            <div className="w-full h-1.5 bg-red-600 rounded-full mt-2"></div>
          </motion.div>

          {/* Left Subtitle */}
          <motion.div variants={fadeInUp}>
            <h3 className="heading-sub mb-4 mt-2 text-white">
              Get in Touch
            </h3>
          </motion.div>

          {/* Left Description */}
          <motion.div variants={fadeInUp} className="mt-4">
            <p className="text-body text-justify">
              Need expert advice or tailored solutions? We’re here to provide
              expert advice, tailored solutions, and unmatched customer support.
              Contact us today to learn more about our products and services or to
              request a personalized quote.
            </p>
          </motion.div>
        </div>

        {/* Right Side Card */}
        <motion.div
          className="w-full md:w-[380px] lg:w-[450px] flex-shrink-0"
          variants={fadeInUp}
        >
          <div className="bg-zinc-900/90 p-6 sm:p-7 rounded-3xl border border-zinc-700/60 shadow-xl hover:shadow-red-600/30 hover:border-red-500/50 transition-all duration-300 w-full">
            <div className="space-y-4 text-sm sm:text-base md:text-base text-gray-200">
              <p className="flex items-start gap-3">
                <MapPinned className="text-red-600 flex-shrink-0 mt-1 w-5 h-5" />
                <span className="leading-relaxed">
                  B-Wing 3rd Floor Office No.35, Plot No C-39A, TTC Industrial Area, MIDC Industrial Area, Pawne, Navi Mumbai, Maharashtra 400710
                </span>
              </p>
              <p className="flex items-center gap-3">
                <Mail className="text-red-600 flex-shrink-0 w-5 h-5" />
                <a href="mailto:Enquiry@xtorcind.com" className="hover:text-red-400 transition-colors">
                  Enquiry@xtorcind.com
                </a>
              </p>
              <p className="flex items-center gap-3">
                <Phone className="text-red-600 flex-shrink-0 w-5 h-5" />
                <a href="tel:+919619561695" className="hover:text-red-400 transition-colors">
                  +91-9619561695 / 8108810057
                </a>
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Contact Form Section */}
      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8"
        initial="hidden"
        animate="visible"
        variants={container}
      >
        <div className="w-fit mx-auto flex flex-col items-center mb-8">
          <motion.h2
            className="heading-main mb-0 text-white text-center"
            variants={fadeInUp}
          >
            Send Us a Message
          </motion.h2>
          <div className="w-full h-1.5 bg-red-600 rounded-full mt-2"></div>
        </div>
        <ContactSection />
      </motion.div>

      {/* Map Section */}
      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-4 mb-16"
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
      >
        <div className="w-full h-[280px] sm:h-[350px] md:h-[450px] rounded-3xl overflow-hidden border border-zinc-800 shadow-2xl">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15080.905330298856!2d73.0073362!3d19.0977243!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c11f4122adab%3A0xbbf10ca80ffcb57f!2sTTC%20Industrial%20Area%2C%20MIDC%20Industrial%20Area%2C%20Pawne%2C%20Navi%20Mumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1757759284480!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </motion.div>
    </div>
  );
}
