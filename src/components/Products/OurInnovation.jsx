"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { X, ArrowRight } from "lucide-react";

const productVariants = {
  hidden: (direction) => ({
    opacity: 0,
    x: direction === "left" ? -100 : 100,
  }),
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const products = [
  {
    id: 1,
    title: "Hydraulic Torque Wrenches",
    img: "/images/BoltingTools/squaredrive.png",
    desc: "Designed for precision and durability, our hydraulic torque wrenches are ideal for heavy-duty applications across multiple industries, ensuring accurate and efficient tightening or loosening of bolts.",
    imgHeight: "h-[500px]",
    imgWidth: "w-[500px]",
    imgRotation: "",
  },
  {
    id: 2,
    title: "Pipe Cutting & Beveling Machines",
    img: "/product4.png",
    desc: "Engineered for precision and safety, providing cold cutting and weld preparation for pipelines of diverse diameters and wall thicknesses.",
    imgHeight: "h-[500px]",
    imgWidth: "w-[500px]",
    imgRotation: "",
  },
  {
    id: 3,
    title: "Bolt Tensioning Solutions",
    img: "/product5.png",
    desc: "Experience unmatched reliability with our advanced multi-stud and hydraulic bolt tensioners, paired with electric and pneumatic powerpacks for superior performance under demanding conditions.",
    imgHeight: "h-[500px]",
    imgWidth: "w-[500px]",
    imgRotation: "",
  },
  {
    id: 4,
    title: "Hydraulic Equipment",
    img: "/images/accesories/jackscylinders.png",
    desc: "From hydrotest pumps to hydraulic jacks, our robust equipment offers versatility and reliability to support a range of industrial applications.",
    imgHeight: "h-[500px]",
    imgWidth: "w-[500px]",
    imgRotation: "",
  },
];

// Subtypes with product images (No 2-line text)
const productSubtypes = {
  1: [
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
  2: [
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
  3: [
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
  4: [
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
};

const Innovations = () => {
  const [activeCategory, setActiveCategory] = useState(null);

  // Close modal on Escape key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setActiveCategory(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div className="bg-black min-h-screen py-12 relative">
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12"
      >
        <div className="flex items-center mb-4">
          <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold font-poppins mr-4">
            Our Innovations
          </h1>
          <div className="h-1 bg-red-600 w-10"></div>
        </div>
        <h2
          className="text-xl sm:text-2xl font-semibold font-poppins"
          style={{ color: "#D01A1A" }}
        >
          Industry Focused Products!
        </h2>
      </motion.div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {products.map((product, i) => {
          const direction = i % 2 === 0 ? "left" : "right";
          return (
            <motion.div
              key={product.id}
              className="flex flex-col items-center gap-6"
              variants={productVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              custom={direction}
            >
              {/* Product Image - Clicking opens the modal popup */}
              <div
                onClick={() => setActiveCategory(product)}
                className="relative group w-full max-w-[500px] aspect-square rounded-2xl overflow-hidden bg-white shadow-[0_10px_30px_rgba(255,255,255,0.25)] hover:shadow-[0_10px_30px_rgba(208,26,26,0.6)] transition-all duration-300 cursor-pointer flex items-center justify-center"
              >
                {/* Showcase area with clearance padding so image is not cropped or covered by red sidebar */}
                <div className="w-full h-full p-6 pr-16 sm:pr-20 flex items-center justify-center">
                  <img
                    src={product.img}
                    alt={product.title}
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => (e.target.src = "/placeholder.png")}
                  />
                </div>

                {/* Subtle Hover Overlay Hint */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-10 pointer-events-none">
                  <span className="bg-red-600/90 text-white font-semibold text-sm sm:text-base px-5 py-2.5 rounded-full shadow-lg backdrop-blur-sm transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    View Subtypes &rarr;
                  </span>
                </div>

                {/* Side Bar Text */}
                <div className="absolute top-0 right-0 w-11 sm:w-12 h-full bg-red-600 flex items-center justify-center transition-all duration-300 group-hover:bg-red-700 z-20">
                  <span className="text-white text-xs font-bold transform -rotate-90 whitespace-nowrap md:text-xl">
                    {product.title}
                  </span>
                </div>
              </div>

              {/* Text Section - Also clickable to open modal */}
              <div
                onClick={() => setActiveCategory(product)}
                className="flex-1 text-center cursor-pointer group"
              >
                <h3
                  className="text-2xl sm:text-3xl font-bold mb-2 group-hover:underline transition-all"
                  style={{ color: "#D01A1A" }}
                >
                  {product.title}
                </h3>
                <p className="text-white text-medium leading-relaxed break-words text-justify">
                  {product.desc}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Subtypes Modal Popup (with Product Images instead of 2-line text) */}
      <AnimatePresence>
        {activeCategory && (
          <div className="fixed inset-0 z-[10000] flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveCategory(null)}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm"
            />

            {/* Modal Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.2 }}
              className="relative bg-zinc-950 border border-zinc-800 rounded-3xl p-6 sm:p-7 max-w-2xl w-full shadow-[0_20px_60px_-15px_rgba(208,26,26,0.35)] z-10 overflow-hidden"
            >
              {/* Header */}
              <div className="flex items-start justify-between pb-4 border-b border-zinc-800">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-600 animate-pulse"></span>
                    <span className="text-xs font-semibold uppercase tracking-wider text-red-500">
                      Select Subtype / Series
                    </span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white font-poppins">
                    {activeCategory.title}
                  </h3>
                </div>
                <button
                  onClick={() => setActiveCategory(null)}
                  className="text-gray-400 hover:text-white p-2 rounded-full hover:bg-zinc-800 transition-colors"
                  aria-label="Close modal"
                >
                  <X size={24} />
                </button>
              </div>

              {/* Subtypes Grid with Images */}
              <div className="grid grid-cols-2 gap-3.5 mt-5 max-h-[70vh] overflow-y-auto pr-1">
                {productSubtypes[activeCategory.id]?.map((subtype) => (
                  <Link
                    key={subtype.id}
                    href={subtype.link}
                    onClick={() => setActiveCategory(null)}
                    className="group bg-zinc-900/90 hover:bg-zinc-900 border border-zinc-800 hover:border-red-600 rounded-2xl p-3 transition-all duration-300 flex flex-col justify-between hover:shadow-[0_6px_25px_rgba(220,38,38,0.25)]"
                  >
                    {/* White showcase box for product photo */}
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
    </div>
  );
};

export default Innovations;