"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaFilePdf } from "react-icons/fa";
import { Download, Loader2 } from "lucide-react";

export default function DownloadSection() {
  const [downloading, setDownloading] = useState({});

  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const pdfFiles = [
    {
      title: "XTORC BROCHURE",
      description: "Comprehensive product specifications, features, and capabilities across our full industrial tool range.",
      file: "/XTORC_BROCHURE.pdf",
      fileName: "XTORC_BROCHURE.pdf",
    },
    {
      title: "XTORC IN-SITU MACHINES BROCHURE",
      description: "Detailed brochure for our in-situ pipe cutting, beveling, and flange facing machines.",
      file: "/XTORC_IN-SITU_MACHINES_BROCHURE.pdf",
      fileName: "XTORC_IN-SITU_MACHINES_BROCHURE.pdf",
    },
    {
      title: "XTORC WIND CATALOG",
      description: "Specialized wind energy bolting tools, tensioners, and turbine application solutions.",
      file: "/XTORC_WIND_CATALOG.pdf",
      fileName: "XTORC_WIND_CATALOG.pdf",
    },
  ];

  // Direct forced download function to bypass browser PDF preview & caching
  const handleDownload = async (e, fileUrl, fileName) => {
    e.preventDefault();
    try {
      setDownloading((prev) => ({ ...prev, [fileName]: true }));
      // Append cache-buster to guarantee browser fetches the freshest file
      const fetchUrl = `${fileUrl}?t=${Date.now()}`;
      const response = await fetch(fetchUrl, { cache: "no-store" });
      if (!response.ok) throw new Error("Failed to fetch file");
      const blob = await response.blob();
      const blobUrl = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = blobUrl;
      link.download = fileName;
      document.body.appendChild(link);
      link.click();
      link.remove();
      window.URL.revokeObjectURL(blobUrl);
    } catch (error) {
      console.warn("Direct blob download fallback:", error);
      // Fallback: standard link download
      const link = document.createElement("a");
      link.href = fileUrl;
      link.download = fileName;
      document.body.appendChild(link);
      link.click();
      link.remove();
    } finally {
      setDownloading((prev) => ({ ...prev, [fileName]: false }));
    }
  };

  return (
    <motion.section
      className="bg-black text-white py-12 lg:py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
      initial="hidden"
      animate="show"
      variants={containerVariants}
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div variants={itemVariants} className="w-fit mx-auto flex flex-col items-center mb-6">
          <h2 className="heading-main mb-0 text-white text-center">
            Downloads
          </h2>
          <div className="w-full h-1.5 bg-red-600 rounded-full mt-2"></div>
        </motion.div>

        <motion.h3
          className="heading-sub mb-10 sm:mb-12 text-center text-gray-200"
          variants={itemVariants}
        >
          Download Our Product Documents
        </motion.h3>

        {/* Download Cards Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto"
          variants={itemVariants}
        >
          {pdfFiles.map((pdf, index) => (
            <motion.div
              key={index}
              className="bg-zinc-900/90 border border-zinc-700/60 rounded-2xl shadow-xl p-6 sm:p-7 text-left flex flex-col justify-between hover:shadow-red-600/30 hover:border-red-500/50 transition-all duration-300 group"
              variants={itemVariants}
            >
              <div>
                <div className="w-14 h-14 rounded-xl bg-red-600/10 border border-red-500/30 flex items-center justify-center mb-5 group-hover:scale-105 transition-transform duration-300">
                  <FaFilePdf className="text-red-500 text-3xl" />
                </div>
                <h4 className="text-xl sm:text-2xl font-bold font-poppins text-white mb-3 leading-snug">
                  {pdf.title}
                </h4>
                {pdf.description && (
                  <p className="text-zinc-400 text-sm leading-relaxed mb-6 font-poppins">
                    {pdf.description}
                  </p>
                )}
              </div>
              <a
                href={pdf.file}
                download={pdf.fileName}
                onClick={(e) => handleDownload(e, pdf.file, pdf.fileName)}
                className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-semibold text-sm sm:text-base py-3 px-6 rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-red-600/20 transition-all duration-300 mt-2 cursor-pointer select-none"
              >
                {downloading[pdf.fileName] ? (
                  <Loader2 className="w-4 h-4 animate-spin" />
                ) : (
                  <Download className="w-4 h-4" />
                )}
                <span>
                  {downloading[pdf.fileName] ? "Downloading..." : "Download PDF"}
                </span>
              </a>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Description */}
        <motion.div
          className="max-w-3xl mx-auto mt-14 sm:mt-16 text-center"
          variants={itemVariants}
        >
          <p className="text-body text-zinc-300 leading-relaxed">
            Get detailed information about our products and services. Download our
            comprehensive catalogs and manuals to explore Xtorc’s full range of
            industrial tools, specifications, and maintenance details.
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
}
