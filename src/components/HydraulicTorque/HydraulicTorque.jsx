import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const HydraulicTorque = () => {
  return (
    <div className="bg-black text-white" style={{ fontFamily: 'Poppins, sans-serif' }}>
      {/* Header with white background */}
      <div className="bg-white py-6">
        <div className="flex items-center justify-center gap-2 text-black">
          <span className="font-medium pl-2">Bolt Tensioning Solutions</span>
          <FaArrowRightLong className="w-4 h-4 ml-8 mr-8" />
          <span className="font-medium">Hydraulic Torque Wrenches


</span>
        </div>
      </div>

      {/* Main content */}
      <div className="w-9/10 mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Section */}
          <div className="space-y-6">
            {/* Title with Impact font */}
            <div className="w-fit">
              <h1 className="text-4xl py-10 font-bold text-white">
                Hydraulic Torque Wrenches
              </h1>
              <div className="w-full rounded-2xl h-1 bg-red-600 mt-2"></div>
            </div>


            {/* <div className="flex justify-center py-10">
              <button 
                className="text-red-600 px-8 py-3 rounded-2xl text-2xl font-bold transition-colors"
                style={{ backgroundColor: '#ffffff'}}
              >
                Download Catalog
              </button>
            </div> */}
      <div className="flex justify-center w-full">
              <a
                href="XTORC BROCHURE.pdf"
                download
                className="bg-white text-red-600 px-8 py-3 rounded-2xl text-2xl font-bold border-2 border-red-600 hover:bg-red-700 hover:text-white transition-all duration-300"
              >
                Download Catalog
              </a>
            </div>
            
          </div>

          {/* Right Section */}
          <div className="space-y-6">
            {/* Product Image */}
            <div className="relative">
              <div className="bg-white rounded-2xl p-6 border-t-12 border-r-12 border-red-600 shadow-[0_10px_30px_rgba(255,255,255,0.25)] hover:shadow-[0_10px_30px_rgba(208,26,26,0.6)] transition-shadow duration-300 rounded-3xl h-[400px] flex items-center justify-center">
                <img
                  src="hydraulictorque.png"
                  alt="Hydraulic Torque Wrenches"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

          </div>
        </div>
      </div>
     
<div className="bg-black  py-12 px-6">
  {/* Heading */}
  <h1
    className="text-4xl md:text-6xl font-bold text-red-600 text-left mb-12 xl:px-15"
    
  >
    Hydraulic Wrenches
  </h1>

  {/* Product Cards Container */}
  <div className="w-9/10 mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
    {/* Card 1 + Button */}
    <div className="flex flex-col">
      <div className="bg-white flex flex-col items-center p-6 shadow-lg">
        <img
          src="square_drive.png"
          alt="square_drive"
          className="w-full h-72 object-contain"
        />
        <p className="mt-6 text-black font-bold text-2xl text-center">
          XTORC SQUARE DRIVE <br /> HYDRAULIC TORQUE WRENCHES
        </p>
      </div>
      <button className=" bg-red-600  text-white font-impact text-2xl md:text-5xl py-3 px-6 w-full">
        LEARN MORE
      </button>
    </div>

    {/* Card 2 + Button */}
    <div className="flex flex-col">
      <div className="bg-white flex flex-col items-center p-6 shadow-lg">
        <img
          src="low_profile.png"
          alt="low_profile"
          className="w-full h-72 object-contain"
        />
        <p className="mt-6 text-black font-bold text-2xl  text-center">
          XTORC LOW PROFILE HYDRAULIC <br /> TORQUE WRENCHES
        </p>
      </div>
      <button className=" bg-red-600  text-white text-2xl md:text-5xl font-impact py-3 px-6 w-full">
        LEARN MORE
      </button>
    </div>
  </div>
</div>



    </div>
  );
};

export default HydraulicTorque;