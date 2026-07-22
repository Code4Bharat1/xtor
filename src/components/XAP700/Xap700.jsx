// import React from "react";
// import { FaArrowRightLong } from "react-icons/fa6";

// const Xap700= () => {
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
//           <span className="font-medium">XAP700</span>
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
//                     XAP700




//               </h1>
//               <div className="rounded-2xl h-1 bg-red-600"></div>
//             </div>

//             {/* Description */}
//              <div className="space-y-4 text-body text-justify">
//               <p>
//                  Powered by a rotary air vane, 4HP motor(3,000RPM) Equipped with a
//  filter-lubricator assembly, air muffler, adjustable relief and 10" remote
//  controlled pendant on all models.
//  High performance two-stage pump provides higher cross-over
//  pressure for faster cycle times and tool operation; 55 cubic inches/
//  minute@10,000 PSI.

//               </p>
//             </div> 
//           </div>

//           {/* Right Section */}
//           <div className="space-y-6">
//             {/* Product Image */}
//             <div className="relative">
//               <div
//                 className="bg-white rounded-2xl p-6 border-t-12 border-r-12 border-red-600 shadow-[0_10px_30px_rgba(255,255,255,0.25)] hover:shadow-[0_10px_30px_rgba(208,26,26,0.6)] transition-shadow duration-300 // rounded-3xl // sm:h-[400px] h-[200px] flex items-center justify-center text-black">
//                 <img
//                   src="images/Power-Pack/XAP 700.png"
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

// export default Xap700;

import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const Xap700 = () => {
  // Data for the Technical Specification table from the image
  const techSpecs = [
    { label: "Model", value: "XAP-700" },
    { label: "Pressure 1st-2nd Stage Bar (PSI)", value: "70/700" },
    { label: "Flow Rate 1st-2nd Stage V/mm (g/min)", value: "7.9/0.9" },
    { label: "Motor", value: "Pneumatic" },
    { label: "RPM", value: "3000" },
    { label: "Reservoir Capacity Liter (Gallon)", value: "8.5 (2.24)" },
    { label: "Weight Kg (Lbs)", value: "36 (79)" },
  ];

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
          <span className="font-medium">XAP700</span>
        </div>
      </div>

      {/* Main content */}
      <div className="w-9/10 mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Section */}
          <div className="space-y-6">
            {/* Title with Impact font */}
            <div className="text-center">
              <h1
                className="text-4xl px-10 text-white mb-2 font-bold"
                
              >
                XAP700
              </h1>
              <p className="text-xl text-gray-300 mt-3">
                AIR OPERATED POWERPACK FOR HYDRAULIC TORQUE WRENCHES
              </p>
              <p className="text-lg text-gray-400 mt-1">
                700 Bar, TwoSpeed | 0.9/0.45 - 7.9/0.9cm OilFlow
              </p>
              <div className="rounded-2xl h-1 bg-red-600 mt-4 max-w-sm mx-auto"></div>
            </div>

            {/* Description */}
            <div className="space-y-4 text-xl text-gray-200 leading-relaxed pt-6 text-justify">
              <p>
                Powered by a rotary air vane, 4HP motor(3,000RPM). Equipped with
                a filter-lubricator assembly, air muffler, adjustable relief
                and 10" remote controlled pendant on all models. High
                performance two-stage pump provides higher cross-over pressure
                for faster cycle times and tool operation; 55 cubic inches/
                minute@10,000 PSI.
              </p>
            </div>
          </div>

          {/* Right Section */}
          <div className="space-y-6">
            {/* Product Image */}
            <div className="relative">
              <div
                className="bg-white rounded-2xl p-6 border-t-12 border-r-12 border-red-600 shadow-[0_10px_30px_rgba(255,255,255,0.25)] hover:shadow-[0_10px_30px_rgba(208,26,26,0.6)] transition-shadow duration-300 rounded-3xl sm:h-[400px] h-[200px] flex items-center justify-center text-black"
              >
                <img
                  src="images/Power-Pack/XAP 700.png"
                  alt="XAP 700 Air Operated Powerpack"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            {/* Download Catalog Button */}
            {/* <div className="flex justify-center">
              <button
                className="text-red-600 px-8 py-3 rounded-2xl text-2xl font-bold hover:bg-red-700 hover:text-white transition-colors"
                style={{ backgroundColor: "#ffffff" }}
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

        {/* --- Technical Specifications Table --- */}
        <div className="mt-20">
            <div className="border border-gray-600 rounded-lg overflow-x-auto no-scrollbar">
                <div className="bg-gray-800 py-4">
                    <h3 className="text-3xl text-white text-center" >
                        TECHNICAL SPECIFICATIONS
                    </h3>
                </div>
                <div className="divide-y divide-gray-700">
                    {techSpecs.map((spec, index) => (
                        <div key={index} className="grid grid-cols-2 bg-black hover:bg-gray-900 transition-colors">
                            <div className="p-4 text-lg md:text-xl font-medium text-gray-300 border-r border-gray-700">{spec.label}</div>
                            <div className="p-4 text-lg md:text-xl text-white text-right">{spec.value}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>

      </div>
    </div>
  );
};

export default Xap700;