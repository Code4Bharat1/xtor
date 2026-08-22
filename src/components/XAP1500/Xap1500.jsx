// import React from "react";
// import { FaArrowRightLong } from "react-icons/fa6";

// const Xap1500= () => {
//   return (
//     <div
//       className="bg-black text-white"
//       style={{ fontFamily: "Poppins, sans-serif" }}
//     >
//       {/* Header with white background */}
//       <div className="bg-white py-6">
//         <div className="flex items-center justify-center gap-2 text-black">
//           <span className="font-medium px-2">Bolt Tensioning Solutions</span>
//           <FaArrowRightLong className="w-4 h-4 ml-8 mr-8" />
//           <span className="font-medium">XAP 1500</span>
//         </div>
//       </div>

//       {/* Main content */}
//       <div className="max-w-[1100px] mx-auto w-full px-4 py-12">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
//           {/* Left Section */}
//           <div className="space-y-6">
//             {/* Title with Impact font */}
//             <div>
//               <h1 className="text-2xl sm:text-3xl lg:text-4xl px-10 text-center font-bold text-white mb-2" >
//                     XAP 1500




//               </h1>
//               <div className="rounded-2xl h-1 bg-red-600"></div>
//             </div>

//             {/* Description */}
//             <div className="space-y-4 text-gray-200 text-2xl leading-relaxed text-justify">
//               <p> The Air Operated Pumps are designed
//  considering the safety,</p>
//  <p className="text-red-500"> Model No.: XAP 1500</p>
// <p>
//  reliability and maximum operator comfort.
//  All the pressure connections are facing
//  away from operator.
//  Consumption of Free Air 800 Litres per
//  minute (28 Standard cubic feet per minute)
//  Air Pressure Required 4 - 7 Bar (60 
// 100 psi) Finish Pressure Gauge Dual
//  Scale 0 - 2000 Bar (0-29000 psi)
//  Working Pressure 1500 Bar</p>
//             </div> 
//           </div>

//           {/* Right Section */}
//           <div className="space-y-6">
//             {/* Product Image */}
//             <div className="relative">
//               <div
//                 className="bg-white rounded-2xl p-6 border-t-12 border-r-12 border-red-600 shadow-[0_10px_30px_rgba(255,255,255,0.25)] hover:shadow-[0_10px_30px_rgba(208,26,26,0.6)] transition-shadow duration-300 // rounded-3xl // sm:h-[400px] h-[200px] flex items-center justify-center text-black">
//                 <img
//                   src="images/Power-Pack/XAP1500.png"
//                   alt=" image Not provided"
//                   className="w-full h-full object-contain"
//                 />
//               </div>
//             </div>

//             {/* Download Catalog Button */}
//             <div className="flex justify-center">
//               <button
//                 className="text-red-600 px-8 py-3 rounded-2xl text-2xl font-bold hover:bg-red-700 hover:text-white transition-colors"
//                 style={{ backgroundColor: "#ffffff" }}
//               >
//                 Download Catalog
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Xap1500;


import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const Xap1500 = () => {
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
          <span className="font-medium">XAP 1500</span>
        </div>
      </div>

      {/* --- XAP 1500 Air-Operated Pump Section --- */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Section */}
          <div className="space-y-6">
            {/* Title with Impact font */}
            <div className="w-fit">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl text-white mb-2 font-bold">
                XAP 1500
              </h1>
              <div className="w-full rounded-2xl h-1 bg-red-600 mt-2"></div>
            </div>

            {/* Description */}
            <div className="space-y-4 text-gray-200 text-xl leading-relaxed text-justify">
              <p>The Air Operated Pumps are designed considering the safety, reliability and maximum operator comfort. All the pressure connections are facing away from operator.</p>
              <p className="text-red-500 font-semibold">Model No.: XAP 1500</p>
              <ul className="list-disc list-inside">
                <li>Consumption of Free Air: 800 Litres per minute (28 Standard cubic feet per minute)</li>
                <li>Air Pressure Required: 4 - 7 Bar (60 - 100 psi)</li>
                <li>Finish Pressure Gauge: Dual Scale 0 - 2000 Bar (0-29000 psi)</li>
                <li>Working Pressure: 1500 Bar</li>
              </ul>
            </div>
          </div>

          {/* Right Section */}
          <div className="space-y-6">
            {/* Product Image */}
            <div className="relative">
              <div
                className="bg-white rounded-2xl p-6 border-t-12 border-r-12 border-red-600 shadow-[0_10px_30px_rgba(255,255,255,0.25)] hover:shadow-[0_10px_30px_rgba(208,26,26,0.6)] transition-shadow duration-300 rounded-3xl sm:h-[400px] h-[200px] flex items-center justify-center text-black">
                <img
                  src="images/Power-Pack/XAP1500.png"
                  alt="XAP 1500 Air Operated Pump"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            {/* Download Catalog Button */}
            {/* <div className="flex justify-center">
              <button
                className="bg-white text-red-600 px-8 py-3 rounded-2xl text-2xl font-bold hover:bg-red-700 hover:text-white transition-colors"
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
        </div>
      </div>

    </div>
  );
};

export default Xap1500;