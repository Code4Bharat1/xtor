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
          <span className="font-medium px-2">Bolt Tensioning Solutions</span>
          <FaArrowRightLong className="w-4 h-4 ml-8 mr-8" />
          <span className="font-medium">Re-Tubbing of Boilers & Heat Exchangers</span>
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
                Re-Tubbing of Boilers & Heat Exchangers
              </h1>
              <div className="w-full rounded-2xl h-1 bg-red-600 mt-2"></div>
            </div>

            {/* Description */}
            <div className="space-y-4 text-body text-justify">
              <p>
                {isExpanded ?
                `XTORC offers professional Hydraulic Tools Calibration services to ensure the precision and reliability of your torquing and tensioning equipment. Calibration is essential to maintain the accuracy of hydraulic tools, which play a crucial role in tightening and securing bolts in a wide range of industries, including Oil and Gas, Infrastructure, and Manufacturing. Proper calibration of hydraulic tools is vital for ensuring the correct torque and tension is applied during operations. Even minor discrepancies in calibration can lead to over-tightening or under-tightening, resulting in equipment failure, leaks, or safety hazards. XTORC's calibration services ensure that your hydraulic tools consistently deliver precise performance, preventing costly mistakes and enhancing the safety and efficiency of your projects. Our expert team uses advanced equipment and techniques to calibrate your tools to meet industry standards, ensuring optimal accuracy for every use. Whether you are working on critical bolting operations, machinery maintenance, or structural installations, having properly calibrated tools is crucial to achieving the right fastening strength and minimizing operational risks. With XTORC's Hydraulic Tools Calibration services, you can trust that your equipment will perform to its highest potential, providing accurate and reliable results every time. Keep your projects on track and ensure the safety and integrity of your operations with our precise calibration solutions.`
              :
              `XTORC offers professional Hydraulic Tools Calibration services to ensure the precision and reliability of your torquing and tensioning equipment. Calibration is essential to maintain the accuracy of hydraulic tools, which play a crucial role in tightening and securing bolts in a wide range of industries, including Oil and Gas, Infrastructure, and Manufacturing. Proper calibration of hydraulic tools is vital for ensuring the correct torque and tension is applied during operations. Even minor discrepancies in calibration can lead to over-tightening or under-tightening, resulting in equipment failure, leaks, or safety hazards. XTORC's calibration services ensure that your hydraulic tools consistently deliver precise performance, preventing costly mistakes and enhancing the safety and efficiency of your projects.`}
                
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
        src="callib.avif"
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

export default ReTubbing;
