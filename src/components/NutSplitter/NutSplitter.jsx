import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const NutSplitter = () => {
  return (
    <div
      className="bg-black text-white"
      style={{ fontFamily: "Poppins, sans-serif" }}
    >
      {/* Header with white background */}
      <div className="bg-white py-6">
        <div className="flex items-center justify-center gap-2 text-black">
          <span className="font-medium px-2">Hydraulic Accessories & Tools</span>
          <FaArrowRightLong className="w-4 h-4 ml-8 mr-8" />
          <span className="font-medium">Nut Splitter</span>
        </div>
      </div>

      {/* Main content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Section */}
          <div className="space-y-6">
            {/* Title with Impact font */}
            <div className="w-fit">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-2">
                Nut Splitter
              </h1>
              <div className="w-full rounded-2xl h-1 bg-red-600 mt-2"></div>
            </div>

            {/* Description */}
            <div className="space-y-4 text-gray-200 text-xl leading-relaxed text-justify">
              <p>
                <strong>XTORC Light Weight Hydraulic Nut Splitters</strong> are specially engineered for rapid, spark-free removal of seized, corroded, or damaged nuts without damaging bolt threads.
              </p>
              <p>
                Suitable for hexagonal nut sizes ranging from 0.37&quot; to 2.95&quot; (M6 to M75), our compact cutter head geometry allows easy access into tight, confined flanges and piping assemblies.
              </p>
              <p>
                Fitted with high-strength specially hardened tool-steel cutting chisels, XTORC nut splitters deliver fast, clean cuts through the toughest high-grade industrial nuts in seconds.
              </p>
            </div>
          </div>

          {/* Right Section */}
          <div className="space-y-6">
            {/* Product Image */}
            <div className="relative">
              <div
                className="bg-white rounded-2xl p-6 border-t-12 border-r-12 border-red-600 shadow-[0_10px_30px_rgba(255,255,255,0.25)] hover:shadow-[0_10px_30px_rgba(208,26,26,0.6)] transition-shadow duration-300 rounded-3xl sm:h-[400px] h-[200px] flex items-center justify-center text-black">
                <img
                  src="/nut_spilitter.png"
                  alt="XTORC Hydraulic Nut Splitter"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            {/* Download Catalog Button */}
            <div className="flex justify-center w-full">
              <a
                href="/XTORC BROCHURE.pdf"
                download
                className="bg-white text-red-600 px-8 py-3 rounded-2xl text-2xl font-bold border-2 border-red-600 hover:bg-red-700 hover:text-white transition-all duration-300 inline-block text-center shadow-lg"
              >
                Download Catalog
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NutSplitter;
