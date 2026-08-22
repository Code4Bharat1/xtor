import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const CasingCutter = () => {
  return (
    <div
      className="bg-black text-white"
      style={{ fontFamily: "Poppins, sans-serif" }}
    >
      {/* Header with white background */}
      <div className="bg-white py-6">
        <div className="flex items-center justify-center gap-2 text-black">
          <span className="font-medium px-2">In-Situ Machining Solutions</span>
          <FaArrowRightLong className="w-4 h-4 ml-8 mr-8" />
          <span className="font-medium">Casing Cutters</span>
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
                Casing Cutters
              </h1>
              <div className="w-full rounded-2xl h-1 bg-red-600 mt-2"></div>
            </div>

            {/* Description */}
            <div className="space-y-4 text-body text-justify text-gray-200 leading-relaxed text-base sm:text-lg">
              <p>
                <strong>XTORC Casing Cutters</strong> are heavy-duty, precision in-situ machining tools designed for fast, safe, and accurate severance of casing, conductor pipes, and wellheads in demanding environments.
              </p>
              <p>
                Engineered for maximum rigidity and high operational stability, our casing cutters execute clean, cold-cut severing without heat-affected zones, spark hazards, or metallurgical degradation. They are widely used across offshore decommissioning, well intervention, top-hole drilling, and subsea well abandonment projects.
              </p>
              <p>
                Featuring robust hydraulic drive units, modular mounting, and high-strength tool steel blades, XTORC casing cutters guarantee maximum cutting speed, extended blade life, and seamless operation even in tight workspace constraints.
              </p>
            </div>
          </div>

          {/* Right Section */}
          <div className="space-y-6">
            {/* Product Image */}
            <div className="relative">
              <div
                className="bg-white rounded-2xl p-6 border-t-12 border-r-12 border-red-600 shadow-[0_10px_30px_rgba(255,255,255,0.25)] hover:shadow-[0_10px_30px_rgba(208,26,26,0.6)] transition-shadow duration-300 rounded-3xl sm:h-[400px] h-[200px] flex items-center justify-center">
                <img
                  src="/casecutter.png"
                  alt="XTORC Casing Cutters"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            {/* Download Catalog Button */}
            <div className="flex justify-center w-full">
              <a
                href="/XTORC IN-SITU MACHINES BROCHURE.pdf"
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

export default CasingCutter;
