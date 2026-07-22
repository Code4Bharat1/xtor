'use client'
import React, {useState} from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const WaterJet = () => {
  const [isExpanded, setIsExpanded] =useState(false);
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
          <span className="font-medium">Water Jet Cutting</span>
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
                Water Jet Cutting
              </h1>
              <div className="w-full rounded-2xl h-1 bg-red-600 mt-2"></div>
            </div>

            {/* Description */}
            <div className="space-y-4 text-body text-justify">
              <p>
                {isExpanded ?`XTORC provides high-precision on-site Waterjet cutting services for a wide variety of applications, including manhole creation in vessels, vessel demolition, and more. Our advanced Waterjet technology uses ultra-high-pressure water to cut through materials with unparalleled accuracy, making it the ideal solution for tasks that require clean, precise cuts without heat or distortion. In critical industries such as Oil and Gas, petrochemical, and heavy industry, Waterjet cutting plays a crucial role in maintaining safety and efficiency during operations. For tasks like manhole creation in vessels, our Waterjet services provide an exact cut that minimizes material damage and structural compromise. When it comes to vessel demolition, Waterjet cutting ensures controlled, efficient removal of material, reducing the risk of sparks, heat damage, or harmful emissions that might occur with traditional cutting methods. Our on-site Waterjet services are highly versatile, capable of cutting through a wide range of materials such as steel, stainless steel, concrete, and more, all while ensuring minimal disruption to the surrounding structure. This makes Waterjet cutting a preferred method for maintenance, modification, and demolition projects, especially in sensitive environments where precision is vital. With XTORC's Waterjet services, you can expect safe, efficient, and environmentally friendly cutting solutions that are critical for maintaining the integrity and longevity of your assets. Our expertise in Waterjet cutting ensures that your projects, whether vessel modifications, manhole installations, or demolition, are executed with the highest level of precision and care.` 
                :
                 `XTORC provides high-precision on-site Waterjet cutting services for a wide variety of applications, including manhole creation in vessels, vessel demolition, and more. Our advanced Waterjet technology uses ultra-high-pressure water to cut through materials with unparalleled accuracy, making it the ideal solution for tasks that require clean, precise cuts without heat or distortion. In critical industries such as Oil and Gas, petrochemical, and heavy industry, Waterjet cutting plays a crucial role in maintaining safety and efficiency during operations. For tasks like manhole creation in vessels, our Waterjet services provide an exact cut that minimizes material damage and structural compromise. When it comes to vessel demolition, Waterjet cutting ensures controlled, efficient removal of material, reducing the risk of sparks, heat damage, or harmful emissions that might occur with traditional cutting methods. `}
               <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-red-500 font-semibold pl-1"
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
        src="wjet.jpg"
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

export default WaterJet;
