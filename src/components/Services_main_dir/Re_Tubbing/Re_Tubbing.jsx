'use client'
import React,{useState} from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const ReTubbing = () => {
  const [isExpanded, setIsExpanded]= useState(false);
  return (
    <div
      className="bg-black text-white"
      style={{ fontFamily: "Poppins, sans-serif" }}
    >
      {/* Header with white background */}
      <div className="bg-white py-6">
        <div className="flex items-center justify-center gap-2 text-black">
          <span className="font-medium px-2">Industrial On-Site Services</span>
          <FaArrowRightLong className="w-4 h-4 ml-8 mr-8" />
          <span className="font-medium">Re-Tubing of Boilers & Heat Exchangers</span>
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
                Re-Tubing of Boilers & Heat Exchangers
              </h1>
              <div className="w-full rounded-2xl h-1 bg-red-600 mt-2"></div>
            </div>

            {/* Description */}
            <div className="space-y-4 text-body text-justify">
              <p>
                {isExpanded ?
                `XTORC specializes in comprehensive on-site Re-Tubing services for Boilers, Shell & Tube Heat Exchangers, Condensers, Fin Fans, and Coolers. Our certified technicians utilize advanced tube extraction, tube bundle pulling, high-pressure tube expansion, facing, and hydro-testing equipment to restore optimal thermal efficiency and mechanical integrity. In high-demand industries such as Oil & Gas, Power Generation, Petrochemicals, and Manufacturing, tube degradation, fouling, and leaks can severely compromise production efficiency and safety. XTORC's turnkey re-tubing solutions cover partial or complete retubing, tube sheet refurbishment, internal inspection, and precision hydraulic torque and tension rolling, ensuring minimal plant downtime and extended asset lifespan. Trust XTORC for dependable, compliant, and precision-engineered retubing solutions tailored to demanding industrial turnaround and shutdown schedules.`
              :
                `XTORC specializes in comprehensive on-site Re-Tubing services for Boilers, Shell & Tube Heat Exchangers, Condensers, Fin Fans, and Coolers. Our certified technicians utilize advanced tube extraction, tube bundle pulling, high-pressure tube expansion, facing, and hydro-testing equipment to restore optimal thermal efficiency and mechanical integrity. In high-demand industries such as Oil & Gas, Power Generation, Petrochemicals, and Manufacturing, tube degradation, fouling, and leaks can severely compromise production efficiency and safety.`}
                
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="text-red-500 font-semibold pl-1 hover:underline cursor-pointer"
              >
                {isExpanded ? 'Read Less' : 'Read More'}
              </button>
              </p>
            </div>
          </div>

          {/* Right Section */}
          <div className="space-y-6">
            {/* Product Image */}
            <div className="relative flex justify-center">
              <div
                className="bg-white rounded-2xl p-2 border-t-12 border-r-12 border-red-600 shadow-[0_10px_30px_rgba(255,255,255,0.25)] hover:shadow-[0_10px_30px_rgba(208,26,26,0.6)] transition-shadow duration-300 rounded-3xl w-full md:w-[550px] max-w-[500px] h-[350px] sm:h-[420px] flex items-center justify-center overflow-hidden"
              >
                <img
                  src="re_tubing.png"
                  alt="Re-Tubing of Boilers & Heat Exchangers"
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
            </div>

            {/* Download Catalog Button */}
            <div className="flex justify-center w-full">
              <a
                href="/XTORC BROCHURE.pdf"
                download="XTORC_BROCHURE.pdf"
                className="bg-white text-red-600 px-6 sm:px-8 py-2 sm:py-3 rounded-2xl text-lg sm:text-2xl font-bold hover:bg-red-700 hover:text-white transition-colors cursor-pointer"
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

export default ReTubbing;
