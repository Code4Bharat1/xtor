'use client'
import React, {useState} from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const HotTaping = () => {
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
          <span className="font-medium">Hot-Tapping & Line Stopple</span>
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
                Hot-Tapping & Line Stopple
              </h1>
              <div className="w-full rounded-2xl h-1 bg-red-600 mt-2"></div>
            </div>

            {/* Description */}
            <div className="space-y-4 text-body text-justify">
              <p>
                {isExpanded 
                ?
                 `XTORC provides expert on-site Hot Tapping services, offering a full suite of solutions that includes the supply of equipment, split tees, and other essential accessories for a range of critical applications. Hot tapping is a specialized procedure that allows for the safe and efficient installation of branches, fittings, or valves onto existing pipelines and pressure vessels without shutting down the active system. This service is crucial for industries such as Oil and Gas, petrochemicals, and utilities, where downtime can result in significant operational losses and safety risks. The nature of hot tapping with an active line makes it a highly technical and critical job. Ensuring the integrity of the pipeline and the safety of personnel while performing the tap is paramount. XTORC's experienced team utilizes state-of-the-art equipment and follows strict safety protocols to perform hot tapping on pressurized lines with minimal risk. Our services ensure that pipelines can continue to operate without disruption while necessary modifications or connections are being made. With XTORC's Hot Tapping services, we supply everything needed for the job, including split tees, valves, fittings, and all associated accessories. Our team ensures seamless integration of new systems with the existing infrastructure, providing a safe, efficient solution that minimizes downtime and ensures ongoing operational efficiency. Hot tapping with an active line demands precision, and with XTORC's expertise, you can trust that each tap will be completed to the highest safety and quality standards. Choose XTORC for reliable, safe, and efficient hot tapping solutions that allow your operations to continue uninterrupted, while meeting the demands of critical infrastructure and pipeline projects.`
                :
                `XTORC provides expert on-site Hot Tapping services, offering a full suite of solutions that includes the supply of equipment, split tees, and other essential accessories for a range of critical applications. Hot tapping is a specialized procedure that allows for the safe and efficient installation of branches, fittings, or valves onto existing pipelines and pressure vessels without shutting down the active system. This service is crucial for industries such as Oil and Gas, petrochemicals, and utilities, where downtime can result in significant operational losses and safety risks. The nature of hot tapping with an active line makes it a highly technical and critical job. Ensuring the integrity of the pipeline and the safety of personnel while performing the tap is paramount. XTORC's experienced team utilizes state-of-the-art equipment and follows strict safety protocols to perform hot tapping on pressurized lines with minimal risk. Our services ensure that pipelines can continue to operate without disruption while necessary modifications or connections are being made.`}
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
        src="tap.jpg"
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

export default HotTaping;
