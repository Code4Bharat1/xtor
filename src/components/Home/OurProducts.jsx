"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight } from "lucide-react";

const OurProducts = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeCategory, setActiveCategory] = useState(null);
  const [boltingTab, setBoltingTab] = useState("torque-wrench"); // "torque-wrench" | "bolt-tensioner"

  // 4 Main Industry Categories
  const products = [
    {
      id: 0,
      src: "/product4.png",
      alt: "Insitu Machining",
      title: "Insitu Machining",
      categoryKey: "insitu-machining",
    },
    {
      id: 1,
      src: "/square_drive.png",
      alt: "Bolting Tools",
      title: "Bolting Tools",
      categoryKey: "bolting-tools",
    },
    {
      id: 2,
      src: "/images/accesories/jackscylinders.png",
      alt: "Hydraulic Equipment",
      title: "Hydraulic Equipment",
      categoryKey: "hydraulic-equipment",
    },
    {
      id: 3,
      src: "/images/Power-Pack/XEP7000.png",
      alt: "Hydraulic Torquing Power Pack",
      title: "Hydraulic Torquing Power Pack",
      categoryKey: "power-pack",
    },
  ];

  // Subtypes mapping for each of the 4 main categories
  const categorySubtypes = {
    "insitu-machining": {
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
    "hydraulic-equipment": {
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
    "power-pack": {
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
  };

  // Auto-rotate every 4s (Pauses when modal is open)
  useEffect(() => {
    if (activeCategory) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % products.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [products.length, activeCategory]);

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

  // Left, center, right images
  const getVisibleImages = () => {
    const left = (currentIndex - 1 + products.length) % products.length;
    const center = currentIndex;
    const right = (currentIndex + 1) % products.length;
    return [products[left], products[center], products[right]];
  };

  const handleCardClick = (product) => {
    setBoltingTab("torque-wrench");
    setActiveCategory(product);
  };

  return (
    <div>
      <section className="py-12 px-4 bg-black text-center text-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto">
          {/* Heading */}
          <div className="w-fit mx-auto mb-6">
            <motion.h2
              className="text-3xl sm:text-4xl md:text-5xl font-bold font-poppins text-white"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              OUR PRODUCTS
            </motion.h2>

            {/* Red underline */}
            <motion.div
              className="h-1 bg-red-600 w-full rounded-full mt-2"
              initial={{ scaleX: 0, opacity: 0 }}
              whileInView={{ scaleX: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
            />
          </div>

          {/* Subheading */}
          <motion.p
            className="text-body mb-12 max-w-2xl mx-auto font-poppins"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            We are the industry heads and produce the most reliable <br />
            and trendy solution you are looking for.
          </motion.p>

          {/* ======= PRODUCT SLIDER ======= */}
          <div className="relative w-full py-12 bg-black overflow-hidden">
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
              <div className="h-72 flex items-center justify-center">
                <motion.div layout className="flex items-center justify-center gap-6">
                  <AnimatePresence initial={false} mode="popLayout">
                    {getVisibleImages().map((product, index) => (
                      <motion.div
                        key={product.id}
                        layout
                        initial={{ opacity: 0, scale: 0.8, x: index === 0 ? -60 : 60 }}
                        animate={{ opacity: index === 1 ? 1 : 0.7, scale: index === 1 ? 1.1 : 0.9, x: 0 }}
                        exit={{ opacity: 0, scale: 0.8, x: -60 }}
                        transition={{ layout: { type: "spring", stiffness: 300, damping: 30 }, duration: 0.5 }}
                      >
                        {/* Click opens the category subtype modal */}
                        <div
                          onClick={() => handleCardClick(product)}
                          className="block cursor-pointer"
                        >
                          <motion.div
                            layout
                            className={`flex items-center justify-center rounded-2xl bg-red-600 border-red-500 hover:brightness-105 transition-all duration-300 ${index === 1 ? "w-80 h-60 shadow-2xl hover:scale-105" : "w-48 h-36 shadow-lg hover:scale-105"}`}
                          >
                            <motion.img
                              layout
                              src={product.src}
                              alt={product.alt}
                              className={`object-contain rounded-lg ${index === 1 ? "w-72 h-52" : "w-40 h-28"}`}
                            />
                          </motion.div>
                        </div>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </motion.div>
              </div>

              {/* Fixed height container for title (Clickable to open modal) */}
              <div className="h-16 flex items-center justify-center">
                <div
                  onClick={() => handleCardClick(products[currentIndex])}
                  className="cursor-pointer"
                >
                  <motion.h3
                    key={products[currentIndex].title}
                    className="inline-block bg-white text-black px-6 py-3 rounded-2xl text-2xl font-poppins font-semibold transition-all duration-500 shadow-md hover:bg-gray-100 hover:scale-105"
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
          </div>
          {/* ======= END PRODUCT SLIDER ======= */}

          {/* View More button with Link */}
          <motion.div
            className="mt-6 flex justify-center"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 1.5 }}
          >
            <Link
              href="/product"
              className="inline-block bg-white font-poppins text-md text-red-700 font-bold px-8 py-3 rounded-lg hover:bg-gray-100 transition-all duration-300 shadow-md hover:scale-105"
            >
              View More Products
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Subtypes Modal Popup */}
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

              {/* Bolting Tools Dual-Group Switch Tabs */}
              {categorySubtypes[activeCategory.categoryKey]?.isGrouped && (
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
                {(categorySubtypes[activeCategory.categoryKey]?.isGrouped
                  ? categorySubtypes[activeCategory.categoryKey].groups[boltingTab]?.items
                  : categorySubtypes[activeCategory.categoryKey]?.items
                )?.map((subtype) => (
                  <Link
                    key={subtype.id}
                    href={subtype.link}
                    onClick={() => setActiveCategory(null)}
                    className="group bg-zinc-900/90 hover:bg-zinc-900 border border-zinc-800 hover:border-red-600 rounded-2xl p-3 transition-all duration-300 flex flex-col justify-between hover:shadow-[0_6px_25px_rgba(220,38,38,0.25)]"
                  >
                    {/* High-contrast white container for product image */}
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

                    {/* Subtype Name & Direct Arrow */}
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

export default OurProducts;