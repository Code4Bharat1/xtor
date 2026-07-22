'use client'
import React, {useState} from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const BoltTorquing = () => {

  const [isExpanded, setIsExpanded] = useState(false);
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
          <span className="font-medium">Bolt Torquing & Tensioning</span>
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
                Bolt Torquing & Tensioning
              </h1>
              <div className="w-full rounded-2xl h-1 bg-red-600 mt-2"></div>
            </div>

            {/* Description */}
             <div className="space-y-4 text-body text-justify">
              <p>
                {isExpanded 
                ?`At XTORC, we specialize in providing high-precision controlled bolting services across a wide range of industries, including Oil & Gas, Infrastructure, Wind Energy, and more. Our expert team utilizes advanced tools and technology to ensure that every bolt is tightened to the exact specifications required, maintaining the integrity and safety of your operations. In sectors like Oil and Gas, Infrastructure, and Wind Energy, controlled bolting is crucial for preventing mechanical failures and ensuring the longevity of critical assets. Our services help avoid issues such as leaks, joint misalignments, and equipment malfunctions that can lead to costly downtime, safety hazards, and operational inefficiencies. With XTORC's controlled bolting services, you can rely on accurate torque, tension, and fastening for a variety of applications, including pressure vessels, pipelines, turbines, and structural installations. Our team works on-site, providing fast, reliable, and efficient solutions, ensuring that your equipment is securely assembled and functioning at its optimal performance. Choose XTORC for precision bolting services that enhance safety, efficiency, and reliability across all sectors.`
                :`At XTORC, we specialize in providing high-precision controlled bolting services across a wide range of industries, including Oil & Gas, Infrastructure, Wind Energy, and more. Our expert team utilizes advanced tools and technology to ensure that every bolt is tightened to the exact specifications required, maintaining the integrity and safety of your operations. In sectors like Oil and Gas, Infrastructure, and Wind Energy, controlled bolting is crucial for preventing mechanical failures and ensuring the longevity of critical assets. Our services help avoid issues such as leaks, joint misalignments, and equipment malfunctions that can lead to costly downtime, safety hazards, and operational inefficiencies. With XTORC's controlled bolting services, you can rely on accurate torque, tension, and fastening for a variety of applications, including pressure vessels, pipelines, turbines, and structural installations`}
                <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="text-red-500 fontsemibold text-lg pl-1"
                >
                  {isExpanded?"See Less ":"See More"}
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
        src="boltt.jpg"
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

export default BoltTorquing;
