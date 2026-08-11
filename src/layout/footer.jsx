"use client";
import React from "react";
import { MapPin, Mail, Phone } from "lucide-react";
import { FaAngleDoubleRight, FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";
import { motion } from "framer-motion";


const Footer = () => {
  return (
    <footer className="bg-black text-white font-[var(--font-poppins)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 sm:pt-24 pb-8 sm:pb-10 lg:pb-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo & About */}
          <div className="space-y-4">
            <div className="w-48 sm:w-64 mt-[-70px] sm:mt-[-85px] -mb-16 sm:-mb-20 -ml-3">
              <img
                src="/XTORC_LOGO.png"
                alt="Xtorc Logo"
                className="w-full h-auto object-contain"
              />
            </div>

            <p className="text-sm sm:text-base leading-relaxed max-w-xs">
              Xtorc was founded with a vision to provide world-class industrial
              tools and services tailored to modern challenges.
            </p>

            {/* Social Media Icons */}
            <div className="flex items-center">
              <div className="flex space-x-3">
                {/* Facebook */}
                <a
                  href="https://facebook.com/xtorcind"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 bg-gray-900 rounded-full flex items-center justify-center transition-transform hover:scale-110 hover:bg-blue-600 text-white"
                  aria-label="Facebook"
                >
                  <FaFacebook className="w-5 h-5" />
                </a>

                {/* Instagram */}
                <a
                  href="https://instagram.com/xtorcind"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 bg-gray-900 rounded-full flex items-center justify-center transition-transform hover:scale-110 hover:bg-pink-600 text-white"
                  aria-label="Instagram"
                >
                  <FaInstagram className="w-5 h-5" />
                </a>

                {/* LinkedIn */}
                <a
                  href="https://linkedin.com/company/xtorcind"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 bg-gray-900 rounded-full flex items-center justify-center transition-transform hover:scale-110 hover:bg-blue-700 text-white"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin className="w-5 h-5" />
                </a>

                {/* X / Twitter */}
                <a
                  href="https://x.com/xtorcind"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 bg-gray-900 rounded-full flex items-center justify-center transition-transform hover:scale-110 hover:bg-gray-800 text-white"
                  aria-label="X (Twitter)"
                >
                  <FaTwitter className="w-5 h-5" />
                </a>

                {/* YouTube */}
                <a
                  href="https://youtube.com/@xtorcind"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 bg-gray-900 rounded-full flex items-center justify-center transition-transform hover:scale-110 hover:bg-red-600 text-white"
                  aria-label="YouTube"
                >
                  <FaYoutube className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Company Links */}
          <div className="pl-5 md:pl-20 flex flex-col">
            <h3 className="text-2xl font-semibold relative w-fit pb-1 mb-4">
              Company
              <span className="absolute left-0 bottom-0 w-full h-[2px] flex">
                <span className="w-1/2 h-full bg-white"></span>
                <motion.span
                  className="w-1/2 h-full bg-red-600"
                  initial={{ width: "0%" }}
                  whileInView={{ width: "50%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 1 }}
                />
              </span>
            </h3>
            <div className="space-y-3">
              {[
                { name: "Home", path: "/" },
                { name: "About us", path: "/aboutus" },
                { name: "Products", path: "/product" },
                { name: "Download", path: "/download" },

                // { name: "Services", path: "/services" },
              ].map((item, idx) => (
                <div key={idx} className="flex items-center space-x-2">
                  <FaAngleDoubleRight className="text-red-500 text-xl flex-shrink-0" />
                  <a
                    href={item.path}
                    className="text-xs sm:text-sm hover:text-gray-300 transition-colors"
                  >
                    {item.name}
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Products */}
          <div className="flex flex-col">
            <h3 className="text-2xl font-semibold relative w-fit pb-1 mb-4">
              Products
              <span className="absolute left-0 bottom-0 w-full h-[2px] flex">
                <span className="w-1/2 h-full bg-white"></span>
                <motion.span
                  className="w-1/2 h-full bg-red-600"
                  initial={{ width: "0%" }}
                  whileInView={{ width: "50%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 1 }}
                />
              </span>
            </h3>
            <div className="space-y-3">
              {[
                { name: "Hydraulic Torque Wrenches", path: "/hydraulictorque" },
                { name: "Bolt Tensioning Solutions", path: "/multistagebolt" },
                { name: "Hydraulic Equipment", path: "/handPumps" },
                { name: "Pipe Cutting & Beveling Machines", path: "/pipeCutting" }
              ].map((item, idx) => (
                <div key={idx} className="flex items-start space-x-3">
                  <FaAngleDoubleRight className="text-red-500 text-xl flex-shrink-0 mt-0.5" />
                  <a
                    href={item.path}
                    className="text-xs sm:text-sm hover:text-gray-300 transition-colors"
                  >
                    {item.name}
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div className="flex flex-col">
            <h3 className="text-2xl font-semibold relative w-fit pb-1 mb-4">
              Contact
              <span className="absolute left-0 bottom-0 w-full h-[2px] flex">
                <span className="w-1/2 h-full bg-white"></span>
                <motion.span
                  className="w-1/2 h-full bg-red-600"
                  initial={{ width: "0%" }}
                  whileInView={{ width: "50%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 1 }}
                />
              </span>
            </h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-1">
                <MapPin className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                <p className="text-xs sm:text-sm leading-tight text-justify hyphens-auto">
                  B-Wing 3rd Floor Office No.35, Plot No C-39A, TTC Industrial Area, MIDC Industrial
                  Area, Pawne, Navi Mumbai, Maharashtra 400710
                </p>
              </div>
              <div className="flex items-start space-x-1">
                <Mail className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                <a
                  href="mailto:enquiry@xtorcind.com"
                  className="text-xs sm:text-sm hover:text-gray-300 transition-colors break-all"
                >
                  enquiry@xtorcind.com
                </a>
              </div>
              <div className="flex items-start space-x-1">
                <Phone className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                <a
                  href="tel:+919619561695"
                  className="text-xs sm:text-sm hover:text-gray-300 transition-colors whitespace-nowrap"
                >
                  +91-9619561695 / 8108810057
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-white py-2">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
          <p className="text-center text-black text-xs sm:text-sm">
            ©2025 | Developed by{" "}
            <span className="text-red-600 font-medium">Code4Bharat</span> | All
            Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
