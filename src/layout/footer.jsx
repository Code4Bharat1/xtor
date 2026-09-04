"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { MapPin, Mail, Phone, X, ArrowRight } from "lucide-react";
import {
  FaAngleDoubleRight,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

// Subtypes dictionary for each main category in the footer
const footerProductSubtypes = {
  "insitu-machining": {
    title: "Insitu Machining",
    isGrouped: false,
    items: [
      {
        id: "pipe-cutting",
        name: "Pipe Cutting Machine (XTCB)",
        link: "/pipeCutting",
        img: "/product4.png",
      },
      {
        id: "id-bevelling",
        name: "ID Bevelling Machine",
        link: "/bevellingmachine",
        img: "/images/Insitumachinning/bevelling.png",
      },
      {
        id: "flange-facing",
        name: "Flange Facing Machine",
        link: "/flangefacing",
        img: "/flangefacing.png",
      },
    ],
  },
  "bolting-tools": {
    title: "Bolting Tools",
    isGrouped: true,
    groups: {
      "torque-wrench": {
        label: "Hydraulic Torque Wrench",
        items: [
          {
            id: "square-drive",
            name: "Square Drive",
            link: "/squaredrive",
            img: "/square_drive.png",
          },
          {
            id: "xfr",
            name: "XFR Series",
            link: "/xfr",
            img: "/images/xfr.png",
            fallbackImg: "/square_drive.png",
          },
          {
            id: "hex-drive",
            name: "Hex Drive",
            link: "/hexdrive",
            img: "/product2.png",
          },
          {
            id: "xsl",
            name: "XSL Series",
            link: "/xsl",
            img: "/images/xsl.png",
            fallbackImg: "/product2.png",
          },
        ],
      },
      "bolt-tensioner": {
        label: "Bolt Tensioners",
        items: [
          {
            id: "topside-tensioner",
            name: "Top Side Bolt Tensioner",
            link: "/topsidebolt",
            img: "/product5.png",
          },
          {
            id: "spring-return-tensioner",
            name: "Spring Return Bolt Tensioner",
            link: "/springreturnbolt",
            img: "/Springreturnbolt.png",
          },
          {
            id: "multi-stage-tensioner",
            name: "Multi Stage Bolt Tensioner",
            link: "/multistagebolt",
            img: "/multistagebolt.png",
          },
          {
            id: "subsea-tensioner",
            name: "Subsea Bolt Tensioner",
            link: "/subseabolt",
            img: "/subsea.png",
          },
        ],
      },
    },
  },
  "power-pack": {
    title: "Hydraulic Power Pack",
    isGrouped: false,
    items: [
      {
        id: "xep700",
        name: "XEP700 Electric Power Pack",
        link: "/xep700",
        img: "/images/Power-Pack/XEP700.png",
      },
      {
        id: "xap700",
        name: "XAP 700 Pneumatic Power Pack",
        link: "/xap700",
        img: "/images/Power-Pack/XAP 700.png",
      },
      {
        id: "xep1500",
        name: "XEP1500 Electric Power Pack",
        link: "/xep1500",
        img: "/images/Power-Pack/xep1500.png",
      },
      {
        id: "xap1500",
        name: "XAP1500 Pneumatic Power Pack",
        link: "/xap1500",
        img: "/images/Power-Pack/XAP1500.png",
      },
    ],
  },
  accessories: {
    title: "Accessories",
    isGrouped: false,
    items: [
      {
        id: "jacks",
        name: "Hydraulic Jacks / Cylinders",
        link: "/hydraulicjack",
        img: "/images/accesories/jackscylinders.png",
      },
      {
        id: "handpump",
        name: "Hand Pumps",
        link: "/handPumps",
        img: "/images/accesories/handpump.png",
      },
      {
        id: "flange-spreaders",
        name: "Flange Spreaders",
        link: "/FlangeSpreaders",
        img: "/images/accesories/flangespreaders.png",
      },
      {
        id: "nut-splitters",
        name: "Nut Splitters",
        link: "/hydralicnut",
        img: "/nut_spilitter.png",
      },
    ],
  },
  "sockets-reducers": {
    title: "Sockets & Reducers",
    isGrouped: false,
    items: [
      {
        id: "sockets",
        name: "Sockets",
        link: "/socket",
        img: "/images/impact-sockets/Sockets.png",
      },
      {
        id: "reducers",
        name: "Reducers",
        link: "/reducer",
        img: "/images/impact-sockets/Reducers.png",
      },
    ],
  },
};

const Footer = () => {
  const [activeCategoryKey, setActiveCategoryKey] = useState(null);
  const [boltingTab, setBoltingTab] = useState("torque-wrench");

  // Close modal on Escape key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setActiveCategoryKey(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const handleOpenCategory = (key) => {
    setBoltingTab("torque-wrench");
    setActiveCategoryKey(key);
  };

  const currentCategoryData = activeCategoryKey
    ? footerProductSubtypes[activeCategoryKey]
    : null;

  return (
    <footer className="bg-black text-white font-[var(--font-poppins)] relative">
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
                <a
                  href="https://facebook.com/xtorcind"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 bg-gray-900 rounded-full flex items-center justify-center transition-transform hover:scale-110 hover:bg-blue-600 text-white"
                  aria-label="Facebook"
                >
                  <FaFacebook className="w-5 h-5" />
                </a>
                <a
                  href="https://instagram.com/xtorcind"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 bg-gray-900 rounded-full flex items-center justify-center transition-transform hover:scale-110 hover:bg-pink-600 text-white"
                  aria-label="Instagram"
                >
                  <FaInstagram className="w-5 h-5" />
                </a>
                <a
                  href="https://linkedin.com/company/xtorcind"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 bg-gray-900 rounded-full flex items-center justify-center transition-transform hover:scale-110 hover:bg-blue-700 text-white"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin className="w-5 h-5" />
                </a>
                <a
                  href="https://x.com/xtorcind"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 bg-gray-900 rounded-full flex items-center justify-center transition-transform hover:scale-110 hover:bg-gray-800 text-white"
                  aria-label="X (Twitter)"
                >
                  <FaTwitter className="w-5 h-5" />
                </a>
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
              ].map((item, idx) => (
                <div key={idx} className="flex items-center space-x-3">
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

          {/* 5 Main Product Categories in Footer (Click opens subtypes popup) */}
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
                { name: "Insitu Machining", key: "insitu-machining" },
                { name: "Bolting Tools", key: "bolting-tools" },
                { name: "Hydraulic Power Pack", key: "power-pack" },
                { name: "Accessories", key: "accessories" },
                { name: "Sockets & Reducers", key: "sockets-reducers" },
              ].map((item, idx) => (
                <div key={idx} className="flex items-center space-x-3">
                  <FaAngleDoubleRight className="text-red-500 text-xl flex-shrink-0 mt-0.5" />
                  <button
                    onClick={() => handleOpenCategory(item.key)}
                    className="text-xs sm:text-sm hover:text-red-400 transition-colors text-left font-medium cursor-pointer"
                  >
                    {item.name}
                  </button>
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

      {/* Subtypes Interactive Modal Popup */}
      <AnimatePresence>
        {activeCategoryKey && currentCategoryData && (
          <div className="fixed inset-0 z-[10000] flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveCategoryKey(null)}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm"
            />

            {/* Modal Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.2 }}
              className="relative bg-zinc-950 border border-zinc-800 rounded-3xl p-6 sm:p-7 max-w-2xl w-full shadow-[0_20px_60px_-15px_rgba(208,26,26,0.35)] z-10 overflow-hidden text-left"
            >
              {/* Header */}
              <div className="flex items-start justify-between pb-4 border-b border-zinc-800">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-600 animate-pulse"></span>
                    <span className="text-xs font-semibold uppercase tracking-wider text-red-500">
                      Explore Product Subtypes
                    </span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white font-poppins">
                    {currentCategoryData.title}
                  </h3>
                </div>
                <button
                  onClick={() => setActiveCategoryKey(null)}
                  className="text-gray-400 hover:text-white p-2 rounded-full hover:bg-zinc-800 transition-colors"
                  aria-label="Close modal"
                >
                  <X size={24} />
                </button>
              </div>

              {/* Bolting Tools Dual-Group Switch Tabs */}
              {currentCategoryData.isGrouped && (
                <div className="flex items-center gap-2 mt-4 p-1 bg-zinc-900 border border-zinc-800 rounded-xl">
                  <button
                    onClick={() => setBoltingTab("torque-wrench")}
                    className={`flex-1 py-2 px-3 rounded-lg text-xs sm:text-sm font-semibold transition-all ${
                      boltingTab === "torque-wrench"
                        ? "bg-red-600 text-white shadow-md"
                        : "text-gray-400 hover:text-white"
                    }`}
                  >
                    Hydraulic Torque Wrench (4)
                  </button>
                  <button
                    onClick={() => setBoltingTab("bolt-tensioner")}
                    className={`flex-1 py-2 px-3 rounded-lg text-xs sm:text-sm font-semibold transition-all ${
                      boltingTab === "bolt-tensioner"
                        ? "bg-red-600 text-white shadow-md"
                        : "text-gray-400 hover:text-white"
                    }`}
                  >
                    Bolt Tensioners (4)
                  </button>
                </div>
              )}

              {/* Subtypes Product Image Cards Grid */}
              <div className="grid grid-cols-2 gap-3.5 mt-5 max-h-[65vh] overflow-y-auto pr-1">
                {(currentCategoryData.isGrouped
                  ? currentCategoryData.groups[boltingTab]?.items
                  : currentCategoryData.items
                )?.map((subtype) => (
                  <Link
                    key={subtype.id}
                    href={subtype.link}
                    onClick={() => setActiveCategoryKey(null)}
                    className="group bg-zinc-900/90 hover:bg-zinc-900 border border-zinc-800 hover:border-red-600 rounded-2xl p-3 transition-all duration-300 flex flex-col justify-between hover:shadow-[0_6px_25px_rgba(220,38,38,0.25)]"
                  >
                    {/* White showcase container for product image */}
                    <div className="w-full h-24 sm:h-28 bg-white rounded-xl p-2 flex items-center justify-center overflow-hidden mb-2.5 border border-zinc-700/50 shadow-sm group-hover:border-red-500/50 transition-colors">
                      <img
                        src={subtype.img}
                        alt={subtype.name}
                        className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                        onError={(e) => {
                          if (subtype.fallbackImg) {
                            e.currentTarget.src = subtype.fallbackImg;
                          }
                        }}
                      />
                    </div>

                    {/* Subtype Name & Arrow */}
                    <div className="w-full flex items-center justify-between px-1">
                      <h4 className="text-xs sm:text-sm font-bold text-white group-hover:text-red-500 transition-colors truncate">
                        {subtype.name}
                      </h4>
                      <ArrowRight className="w-3.5 h-3.5 text-gray-500 group-hover:text-red-500 group-hover:translate-x-1 transition-all flex-shrink-0 ml-1.5" />
                    </div>
                  </Link>
                ))}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </footer>
  );
};

export default Footer;