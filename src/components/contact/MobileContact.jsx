"use client";
import Image from "next/image";
import { useState } from "react";
import { Mail, MapPinned, Phone } from "lucide-react";
import { motion } from "framer-motion";
import ContactSection from "./form";

export default function MobileContactPage() {
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

  return (
    <div className="overflow-x-hidden bg-black text-white min-h-screen">
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
      >
        <h2
          className="text-4xl sm:text-5xl md:text-7xl mb-6 text-center md:text-justify"
          
        >
          Contact Us
        </h2>
        <div className="h-1.5 mb-6 bg-red-600 rounded-full mx-auto md:mx-0 w-32 md:w-40"></div>

        {/* Left + Right Section */}
        <div className="flex flex-col md:flex-row justify-between gap-8 relative">
          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="flex-1 text-justify"
          >
            <h3
              className="text-3xl sm:text-4xl md:text-5xl mb-6 md:mb-8 text-center md:text-justify mt-4"
              
            >
              Get in Touch with{" "}
              <span className="inline-block align-middle">
                <Image
                  src="/xtroc.png"
                  width={200}
                  height={80}
                  alt="Xtroc Logo"
                  className="h-auto w-auto max-w-[180px] sm:max-w-[220px]"
                />
              </span>
            </h3>
            <div className="mt-6">
              <p
                className="text-base sm:text-lg md:text-xl font-light leading-relaxed text-justify"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                Need expert advice or tailored solutions? We’re here to provide
                expert advice, tailored solutions, and unmatched customer
                support. Contact us today to learn more about our products and
                services or to request a personalized quote.
              </p>
            </div>
          </motion.div>

          {/* Right Side Card */}
          <div className="flex-1 md:flex-none md:w-[500px] lg:w-[600px] relative">
            <div
              className="bg-gray-900 p-6 rounded-3xl border-2 border-white shadow-lg hover:shadow-red-600/40 hover:shadow-xl transition-all duration-300 w-full h-auto"
            >
              <div className="space-y-6 text-sm sm:text-base md:text-lg lg:text-xl">
                <p className="flex items-start gap-2">
                  <MapPinned className="text-red-600 flex-shrink-0" /> B-Wing 3rd Floor Office No.35, Plot
                  No C-39A, TTC Industrial
                  <br /> Area, MIDC Industrial Area, Pawne,
                  <br /> Navi Mumbai, Maharashtra 400710
                </p>
                <p className="flex items-center gap-2">
                  <Mail className="text-red-600" /> Enquiry@xtorcind.com
                </p>
                <p className="flex items-center gap-2">
                  <Phone className="text-red-600" /> +91-9619561695 / 8108810057
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Contact Form Title */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="px-4"
      >
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-16 mb-6 mt-8">
          <div className="w-16 md:w-24 h-2 bg-red-600 rounded-full"></div>
          <h2
            className="text-white text-3xl sm:text-4xl md:text-6xl text-center"
            
          >
            Contact Us
          </h2>
          <div className="w-16 md:w-24 h-2 bg-red-600 rounded-full"></div>
        </div>
        <ContactSection />
      </motion.div>

      {/* Map Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="mt-8 px-4 flex items-center justify-center"
      >
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 h-[220px] sm:h-[300px] md:h-[400px] lg:h-[500px] rounded-xl overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.7979768111245!2d72.8778437752053!3d19.072617982131263!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c9d250f21f0d%3A0xdb46fbfa10678856!2sNexcore%20Alliance%20LLP!5e0!3m2!1sen!2sin!4v1756550911980!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </motion.div>
    </div>
  );
}
