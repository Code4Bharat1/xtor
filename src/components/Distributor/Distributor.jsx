'use client';
import React from "react";
import { motion } from "framer-motion";
import { Globe, MapPin, Building2, Mail } from "lucide-react";

// Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

function DistributorPage() {
  const regions = [
    {
      name: "Europe",
      countries: [
        { name: "Netherlands" },
      ],
    },
    {
      name: "Africa",
      countries: [
        { name: "Algeria" },
        { name: "Egypt" },
        { name: "Angola" },
        { name: "Nigeria" },
        { name: "Mozambique" },
      ],
    },
    {
      name: "Central Asia",
      countries: [
        { name: "Kazakhstan" },
        { name: "Uzbekistan" },
      ],
    },
    {
      name: "Southeast Asia",
      countries: [
        {
          name: "Thailand",
          distributor: {
            company: "AON SUPPLY COMPANY LIMITED",
            address: "31/34, RAT NIYOM, NOEN PHRA, MUANG, RAYONG 21000",
          },
        },
        { name: "Singapore" },
        { name: "Philippines" },
      ],
    },
    {
      name: "Oceania",
      countries: [
        { name: "Australia" },
      ],
    },
    {
      name: "South America",
      countries: [
        {
          name: "Colombia",
          distributor: {
            company: "Tool Supply SAS",
            address: "Carrera 15 #106-32, Office 606, Bogotá DC, Colombia",
            email: "",
          },
        },
        {
          name: "Peru",
          distributor: {
            company: "Corporación Tresnak del Perú S.A.C",
            address: "Tambo Real Street No. 133-137, Urb. Ariosto Matellini Avenue, Chorrillos, Peru",
            email: "",
          },
        },
      ],
    },
  ];

  return (
    <div className="bg-black text-white" style={{ fontFamily: "Poppins, sans-serif" }}>
      {/* Top section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-6 text-center">
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
        >
          {/* Service Heading */}
          <motion.div variants={fadeInUp} className="w-fit mx-auto flex flex-col items-center mb-8">
            <h1 className="heading-main mb-0 text-white">
              Distributor
            </h1>
            <div className="w-full h-1 bg-[#D01A1A] mt-2 rounded-2xl"></div>
          </motion.div>

          {/* Main Description Text */}
          <motion.h2
            variants={fadeInUp}
            className="text-lg sm:text-xl md:text-2xl font-semibold text-red-500 mb-6 leading-tight px-4"
          >
            &ldquo;Expand Your Reach. Become a Distributor.&rdquo;
          </motion.h2>

          {/* Bottom Description Paragraph */}
          <motion.p
            variants={fadeInUp}
            className="text-gray-200 text-lg md:text-xl leading-relaxed w-full max-w-4xl mx-auto mt-4 text-justify px-4"
          >
            Be part of our journey as we grow. At Xtorc, we&apos;re building strong partnerships with passionate distributors who believe in innovation and long-term impact.
            <br /><br />
            As an early partner, you&apos;ll gain access to new markets, priority support, and the chance to shape the future of our distribution network right from the start.
          </motion.p>
        </motion.div>
      </div>

      {/* Global Distributors Section — Dark theme synced */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10 w-fit"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            Our Global Distributors
          </h2>
          <div className="w-full h-1 bg-red-600 rounded-2xl mt-2"></div>
        </motion.div>

        {/* Region Cards Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
          style={{ gridAutoRows: '1fr' }}
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {regions.map((region, regionIdx) => (
            <motion.div
              key={regionIdx}
              variants={cardVariant}
              whileHover={{
                scale: 1.04,
                y: -8,
                boxShadow: "0 20px 60px rgba(220, 38, 38, 0.25), 0 0 40px rgba(220, 38, 38, 0.1)",
                transition: { duration: 0.3, ease: "easeOut" },
              }}
              whileTap={{ scale: 0.98 }}
              className="relative bg-zinc-900/80 border border-zinc-700/60 rounded-xl p-4 sm:p-5 cursor-pointer group overflow-hidden"
            >
              {/* Animated gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-red-600/0 via-red-600/0 to-red-600/0 group-hover:from-red-600/5 group-hover:via-transparent group-hover:to-red-900/10 transition-all duration-500 rounded-xl pointer-events-none" />
              
              {/* Animated top border accent */}
              <div className="absolute top-0 left-0 w-0 h-[2px] bg-gradient-to-r from-red-500 to-red-700 group-hover:w-full transition-all duration-500 ease-out rounded-t-xl" />

              {/* Region Header */}
              <div className="relative flex items-center gap-2.5 mb-3">
                <div className="p-1.5 rounded-lg bg-red-500/10 group-hover:bg-red-500/20 transition-colors duration-300">
                  <Globe className="w-5 h-5 text-red-500 group-hover:text-red-400 transition-colors duration-300" />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-red-50 transition-colors duration-300">
                  {region.name}
                </h3>
              </div>

              {/* Countries List */}
              <div className="relative space-y-1.5">
                {region.countries.map((country, countryIdx) => (
                  <div key={countryIdx} className="border-l-2 border-red-500/40 group-hover:border-red-500 pl-3 transition-colors duration-300">
                    {/* Country Name */}
                    <div className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-gray-500 group-hover:text-red-400 flex-shrink-0 transition-colors duration-300" />
                      <span className="font-semibold text-gray-300 group-hover:text-white text-sm transition-colors duration-300">
                        {country.name}
                      </span>
                    </div>

                    {/* Distributor Details (compact) */}
                    {country.distributor && (
                      <div className="ml-5 mt-0.5 space-y-0.5">
                        <div className="flex items-center gap-1">
                          <Building2 className="w-3 h-3 text-gray-500 flex-shrink-0" />
                          <span className="text-xs font-semibold text-gray-400">
                            {country.distributor.company}
                          </span>
                        </div>
                        <p className="text-[11px] text-gray-500 ml-4 leading-tight">
                          {country.distributor.address}
                        </p>
                        {country.distributor.email && (
                          <div className="flex items-center gap-1 ml-4">
                            <Mail className="w-3 h-3 text-red-500 flex-shrink-0" />
                            <a
                              href={`mailto:${country.distributor.email}`}
                              className="text-[11px] text-red-400 hover:text-red-300 hover:underline transition-colors"
                            >
                              {country.distributor.email}
                            </a>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center text-gray-500 text-sm sm:text-base mt-12"
        >
          Serving customers across multiple continents with trusted distribution partners
        </motion.p>
      </div>
    </div>
  );
}

export default DistributorPage;
