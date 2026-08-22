import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const ManualTorque = () => {
  return (
    <div
      className="bg-black text-white"
      style={{ fontFamily: "Poppins, sans-serif" }}
    >
      {/* Header with white background */}
      <div className="bg-white py-6">
        <div className="flex items-center justify-center gap-2 text-black">
          <span className="font-medium px-2">Torque Tightening Solutions</span>
          <FaArrowRightLong className="w-4 h-4 ml-8 mr-8" />
          <span className="font-medium">Manual Torque Wrenches</span>
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
                Manual Torque Wrenches
              </h1>
              <div className="w-full rounded-2xl h-1 bg-red-600 mt-2"></div>
            </div>

            {/* Description */}
            <div className="space-y-4 text-body text-justify text-gray-200 leading-relaxed text-base sm:text-lg">
              <p>
                <strong>XTORC Manual Torque Wrenches</strong> are engineered for precision torque application, exceptional durability, and ergonomic operator comfort across a wide range of industrial tightening and maintenance operations.
              </p>
              <p>
                Equipped with a high-accuracy internal click mechanism, calibrated dual scales (Nm / ft-lbs), and positive locking collars, our manual wrenches provide unmistakable audible and tactile feedback when target torque is achieved — eliminating over-torquing and protecting critical fasteners from thread stripping or fatigue.
              </p>
              <p>
                Manufactured from premium forged alloy steel with corrosion-resistant finishes, XTORC manual torque wrenches are ideal for workshops, plant assembly, wind energy, pipeline maintenance, and general mechanical servicing.
              </p>
            </div>
          </div>

          {/* Right Section */}
          <div className="space-y-6">
            {/* Product Image */}
            <div className="relative">
              <div
                className="bg-white rounded-2xl p-6 border-t-12 border-r-12 border-red-600 shadow-[0_10px_30px_rgba(255,255,255,0.25)] hover:shadow-[0_10px_30px_rgba(208,26,26,0.6)] transition-shadow duration-300 rounded-3xl h-[400px] flex items-center justify-center"
              >
                <img
                  src="/manualtorque.png"
                  alt="XTORC Manual Torque Wrenches"
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

export default ManualTorque;
