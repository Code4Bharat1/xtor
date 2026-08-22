import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const HydroTestPumps = () => {
  return (
    <div className="bg-black text-white" style={{ fontFamily: 'Poppins, sans-serif' }}>
      {/* Header with white background */}
      <div className="bg-white py-6">
        <div className="flex items-center justify-center gap-2 text-black">
          <span className="font-medium px-2">Pressure Testing Equipment</span>
          <FaArrowRightLong className="w-4 h-4 ml-8 mr-8" />
          <span className="font-medium">Hydrotest Pumps</span>
        </div>
      </div>

      {/* Main content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Section */}
          <div className="space-y-6">
            {/* Title with Impact font */}
            <div className="w-fit">
              <h1 className="text-4xl font-bold text-white mb-2">
                Hydrotest Pumps
              </h1>
              <div className="w-full rounded-2xl h-1 bg-red-600 mt-2"></div>
            </div>

            {/* Description */}
            <div className="space-y-4 text-body text-justify text-gray-200 leading-relaxed text-base sm:text-lg">
              <p>
                <strong>XTORC Hydrostatic Test Pumps</strong> are high-performance, precision testing systems designed for pressure-testing pipelines, pressure vessels, valves, tubing, boiler tubes, and hydraulic installations.
              </p>
              <p>
                Capable of generating ultra-high hydraulic pressures with pinpoint accuracy and stability, our pumps are equipped with calibrated dual-scale pressure gauges, isolation needle valves, and pressure-holding safety relief circuits.
              </p>
              <p>
                Available in pneumatic, electric, and manual configurations, XTORC hydrotest units ensure rapid pressure buildup, dependable long-term pressure hold tests, and leak-free joint verification for plants, refineries, and offshore installations.
              </p>
            </div>
          </div>

          {/* Right Section */}
          <div className="space-y-6">
            {/* Product Image */}
            <div className="relative">
              <div className="bg-white rounded-2xl p-6 border-t-12 border-r-12 border-red-600 shadow-[0_10px_30px_rgba(255,255,255,0.25)] hover:shadow-[0_10px_30px_rgba(208,26,26,0.6)] transition-shadow duration-300 rounded-3xl h-[400px] flex items-center justify-center">
                <img
                  src="/hydrotest.png"
                  alt="XTORC Hydrotest Pumps"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

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

export default HydroTestPumps;