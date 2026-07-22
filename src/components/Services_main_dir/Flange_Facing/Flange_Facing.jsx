'use client'
import React, {useState} from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const FlangeFacing = () => {
  const [isExpanded, setIsExpanded] = useState(false)
  return (
    <div
      className="bg-black text-white"
      style={{ fontFamily: "Poppins, sans-serif" }}
    >
      {/* Header with white background */}
      <div className="bg-white py-6">
        <div className="flex items-center justify-center gap-2 text-black">
          <span className="font-medium px-2">Bolt Tensioning Solutions</span>
          <FaArrowRightLong className="w-4 h-4 ml-8 mr-8" />
          <span className="font-medium">Flange Facing</span>
        </div>
      </div>

      {/* Main content */}
      <div className="w-9/10 mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Section */}
          <div className="space-y-6">
            {/* Title with Impact font */}
            <div className="w-fit">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-2">
                Flange Facing
              </h1>
              <div className="w-full rounded-2xl h-1 bg-red-600 mt-2"></div>
            </div>

            {/* Description */}
            <div className="space-y-4 text-body text-justify">
              <p>
                {isExpanded ?`XTORC specializes in high-precision on-site Flange Facing and Serration services, catering to a wide range of flange material grades and sizes. Our advanced equipment and experienced technicians ensure that each flange is accurately faced and serrated to meet the specific requirements of your project, ensuring optimal performance and safety in critical applications. Flange facing is a crucial process that involves machining the surface of the flange to create a smooth, flat, and even surface for a secure gasket seal. This is essential for preventing leaks, ensuring a tight seal, and maintaining pressure integrity in systems such as pipelines, pressure vessels, and reactors. Additionally, serration on the flange face creates grooves that enhance the gasket's sealing performance, especially in high-pressure or high-temperature environments, making it an essential step for industries such as Oil & Gas, Petrochemical, Power Generation, and more. No matter the material – be it carbon steel, stainless steel, or other alloys – XTORC's flange facing and serration services are designed to meet the stringent requirements of various industrial applications. Our on-site capabilities ensure minimal downtime and provide a fast, reliable, and cost-effective solution for flange preparation. The importance of proper flange facing and serration cannot be overstated. Inadequate preparation can lead to leaks, equipment failure, or safety hazards. XTORC's services guarantee that your flanges are properly machined for a perfect seal, ensuring the reliability and efficiency of your systems and extending the lifespan of your equipment. Choose XTORC for accurate and professional flange facing and serration services that enhance the performance, safety, and longevity of your industrial systems.` 
                :`XTORC specializes in high-precision on-site Flange Facing and Serration services, catering to a wide range of flange material grades and sizes. Our advanced equipment and experienced technicians ensure that each flange is accurately faced and serrated to meet the specific requirements of your project, ensuring optimal performance and safety in critical applications. Flange facing is a crucial process that involves machining the surface of the flange to create a smooth, flat, and even surface for a secure gasket seal. This is essential for preventing leaks, ensuring a tight seal, and maintaining pressure integrity in systems such as pipelines, pressure vessels, and reactors. Additionally, serration on the flange face creates grooves that enhance the gasket's sealing performance, especially in high-pressure or high-temperature environments, making it an essential step for industries such as Oil & Gas, Petrochemical, Power Generation, and more.`}

              <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-red-500 font-semibold pl-1 "
              >
                {isExpanded ?'Read Less' :'Read More'}

              </button>
              </p>
            </div>
          </div>

          {/* Right Section */}
                   <div className="space-y-6">
  {/* Product Image */}
  <div className="relative flex justify-center">
    <div
      className="bg-white rounded-2xl p-2 border-t-12 border-r-12 border-red-600 shadow-[0_10px_30px_rgba(255,255,255,0.25)] hover:shadow-[0_10px_30px_rgba(208,26,26,0.6)] transition-shadow duration-300 rounded-3xl w-full md:w-[550px] max-w-[500px] h-[400px] sm:h-[500px] md:h-[500px] flex items-center justify-center"
    >
      <img
        src="facing.jpg"
        alt="Hydraulic Bolt Tensioner"
        className="w-[500px] h-full"
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

export default FlangeFacing;
