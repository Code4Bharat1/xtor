"use client";
import Image from "next/image";
import { useState } from "react";
import { Mail, MapPinned, Phone } from "lucide-react";
import { motion } from "framer-motion";
import ContactSection from "./form";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    company: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", form);
    alert("Your query has been submitted!");
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const container = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.3 } },
  };

  return (
    <div className="overflow-x-hidden bg-black text-white min-h-screen relative">
      {/* ✅ LEFT SECTION (Why to choose Xtroc) */}
      <motion.div
        className="w-9/10 mx-auto px-4 py-12 relative"
        initial="hidden"
        animate="visible"
        variants={container}
      >
        {/* Heading */}
        <div className="w-fit md:ml-5 mb-6">
          <motion.h2
            className="heading-main mb-0 text-white"
            variants={fadeInUp}
          >
            Contact Us
          </motion.h2>
          <div className="w-full h-1.5 bg-red-600 rounded-full mt-2"></div>
        </div>

        {/* Left Content Div */}
        <motion.div
          className="flex-1 text-justify px-2 md:px-0 md:ml-5"
          variants={fadeInUp}
        >
          <h3
            className="heading-sub mb-6 md:mb-8 text-center md:text-left mt-4 text-white"
          >
            Get in Touch
          </h3>
        </motion.div>

        {/* Full width text below */}
        <motion.div variants={fadeInUp} className="mt-8 md:ml-5 md:max-w-[55%]">
          <p className="text-body text-justify">
            Need expert advice or tailored solutions? We’re here to provide
            expert advice, tailored solutions, and unmatched customer support.
            Contact us today to learn more about our products and services or to
            request a personalized quote.
          </p>
        </motion.div>
      </motion.div>

      {/* ✅ RIGHT SIDE CARD (Top-Right Fixed) */}
      <motion.div
        className="hidden md:block absolute top-[140px] right-0 w-[450px]"
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
      >
        <div
          className="bg-gray-900 p-6 rounded-4xl border-2 border-white shadow-lg hover:shadow-red-600/40 hover:shadow-xl transition-all duration-300 w-full"
        >
          <div className="space-y-4 px-5 text-sm sm:text-base md:text-lg">
            <p className="flex items-start gap-2">
              <MapPinned className="text-red-600 flex-shrink-0 mt-1" />
              <span className="text-justify hyphens-auto leading-tight">
                B-Wing 3rd Floor Office No.35, Plot No C-39A, TTC Industrial Area, MIDC Industrial Area, Pawne, Navi Mumbai, Maharashtra 400710
              </span>
            </p>
            <p className="flex items-center gap-2">
              <Mail className="text-red-600" /> Enquiry@xtorcind.com
            </p>
            <p className="flex items-center gap-2">
              <Phone className="text-red-600" /> +91-9619561695 / 8108810057
            </p>
          </div>
        </div>
      </motion.div>

      {/* Contact Form */}
      <motion.div
        className="px-4"
        initial="hidden"
        animate="visible"
        variants={container}
      >
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-16 mb-6 mt-8">
          <motion.div
            className="w-16 md:w-24 h-2 bg-red-600 rounded-full"
            variants={fadeInUp}
          ></motion.div>
          <motion.h2
            className="text-white heading-sub text-center"

            variants={fadeInUp}
          >
            Contact Us
          </motion.h2>
          <motion.div
            className="w-16 md:w-24 h-2 bg-red-600 rounded-full"
            variants={fadeInUp}
          ></motion.div>
        </div>
        <ContactSection />
      </motion.div>

      {/* Map Section */}
      <motion.div
        className="mt-8 px-4 flex items-center justify-center"
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
      >
        <div className="w-full md:w-[900px] h-[250px] sm:h-[300px] md:h-[500px] rounded-xl overflow-hidden">
          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15080.905330298856!2d73.0073362!3d19.0977243!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c11f4122adab%3A0xbbf10ca80ffcb57f!2sTTC%20Industrial%20Area%2C%20MIDC%20Industrial%20Area%2C%20Pawne%2C%20Navi%20Mumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1757759284480!5m2!1sen!2sin"
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
