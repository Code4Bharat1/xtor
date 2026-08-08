// import React from "react";
// import { FaArrowRightLong } from "react-icons/fa6";

// const Xep1500= () => {
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
//           <span className="font-medium">XEP 1500</span>
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
//                     XEP 1500




//               </h1>
//               <div className="rounded-2xl h-1 bg-red-600"></div>
//             </div>

//             {/* Description */}
//      <div className="space-y-4 text-body text-justify">
//               <p>
//                 HYDRAULIC BOLT TENSIONERS<br/>
//  • XEP1500/XAP1500 HYDRAULIC<br/>
//  • POWER PACK FOR BOLT
//   TENSIONERS  <br/>
// • ACCESORIES<br/>

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
//                   src="images/Power-Pack/XEP1500.png"
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
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const Xep1500 = () => {
  return (
    <div
      className="bg-black text-white"
      style={{ fontFamily: "Poppins, sans-serif" }}
    >
      {/* Header with white background */}
      <div className="bg-white py-6">
        <div className="flex flex-wrap items-center justify-center gap-4 text-black text-center">
          <span className="font-medium">Bolt Tensioning Solutions</span>
          <FaArrowRightLong className="w-4 h-4 mx-4" />
          <span className="font-medium">XEP 1500</span>
        </div>
      </div>

      {/* Main Hero Content (Top 2-Column Grid) */}
      <div className="w-9/10 mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Section: Title & Features List */}
          <div className="space-y-6">
            <div className="w-fit">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-2 leading-tight">
                XEP 1500<br />
                ULTRA HIGH PRESSURE ELECTRIC PUMP FOR TENSIONING APPLICATIONS
              </h1>
              <div className="w-full rounded-2xl h-1 bg-red-600 mt-2"></div>
            </div>

            <div className="space-y-3 text-body text-justify">
              <ul className="space-y-3 text-base text-gray-200">
                <li className="flex items-start gap-2">
                  <span className="text-red-600 font-bold">•</span>
                  <span>Two Stage piston pump, compact, robust and reliable.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 font-bold">•</span>
                  <span>1.1 kW electric motor, powerful, big flow.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 font-bold">•</span>
                  <span>Safety and easy operating control line.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 font-bold">•</span>
                  <span>When pressure is under the set pressure (1 Bar / 14.5 psi), pressure switch starts automatically and raises it to the set value.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 font-bold">•</span>
                  <span>Single and double acting available — suitable for various operations.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 font-bold">•</span>
                  <span>High performance radiator ensures continuous operation.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Section: Product Image & Download Button */}
          <div className="space-y-6 flex flex-col items-center">
            <div className="relative w-full flex justify-center">
              <div className="bg-white rounded-2xl p-6 border-t-[12px] border-r-[12px] border-red-600 shadow-[0_10px_30px_rgba(255,255,255,0.25)] hover:shadow-[0_10px_30px_rgba(208,26,26,0.6)] transition-shadow duration-300 rounded-3xl h-[280px] sm:h-[350px] md:h-[400px] w-full max-w-[500px] flex items-center justify-center">
                <img
                  src="/images/Power-Pack/xep1500.png"
                  alt="XEP 1500 Ultra High Pressure Electric Pump"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            <div className="flex justify-center w-full">
              <a
                href="/XTORC BROCHURE.pdf"
                download
                className="bg-white text-red-600 px-8 py-3 rounded-2xl text-xl sm:text-2xl font-bold border-2 border-red-600 hover:bg-red-700 hover:text-white transition-all duration-300"
              >
                Download Catalog
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section: Full-Width Specifications Section */}
      <div className="w-9/10 mx-auto px-4 py-12">
        <div className="mb-8">
          <h2 className="text-2xl sm:text-4xl text-center text-white mb-2 font-bold uppercase tracking-wide">
            XEP 1500 Series Specifications
          </h2>
          <div className="w-full max-w-[400px] rounded-2xl h-1 bg-red-600 mx-auto mt-2"></div>
        </div>

        <div className="border border-gray-600 rounded-lg overflow-hidden shadow-xl">
          <div className="overflow-x-auto">
            <table className="min-w-full min-w-max border-collapse">
              <thead className="bg-gray-800 text-sm sm:text-base">
                <tr className="text-red-500">
                  <th className="p-4 text-center border-r border-gray-700">Model</th>
                  <th className="p-4 text-center border-r border-gray-700">Reservoir (L)</th>
                  <th className="p-4 text-center border-r border-gray-700">Motor (KW)</th>
                  <th className="p-4 text-center border-r border-gray-700">Supply *</th>
                  <th className="p-4 text-center border-r border-gray-700">Max. Working Pressure</th>
                  <th className="p-4 text-center border-r border-gray-700">Size (mm)</th>
                  <th className="p-4 text-center border-r border-gray-700">Control Line (m)</th>
                  <th className="p-4 text-center border-r border-gray-700">Output Flow (L/min)</th>
                  <th className="p-4 text-center border-r border-gray-700">Weight (kg)</th>
                  <th className="p-4 text-center">Mode of Action</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-black text-center text-sm sm:text-base border-t border-gray-700">
                  <td className="p-4 font-medium text-gray-300 border-r border-gray-700">XEP 1500</td>
                  <td rowSpan={2} className="p-4 text-white border-r border-gray-700 align-middle">7.6</td>
                  <td rowSpan={2} className="p-4 text-white border-r border-gray-700 align-middle">1.1</td>
                  <td rowSpan={2} className="p-4 text-white border-r border-gray-700 align-middle">220V/50Hz/single phase</td>
                  <td rowSpan={2} className="p-4 text-white border-r border-gray-700 align-middle">2000 bar/ <br />29000 psi</td>
                  <td rowSpan={2} className="p-4 text-white border-r border-gray-700 align-middle">375x300x410</td>
                  <td rowSpan={2} className="p-4 text-white border-r border-gray-700 align-middle">6</td>
                  <td rowSpan={2} className="p-4 text-white border-r border-gray-700 align-middle">
                    2@ <br /> 50 bar/725 psi <br /> 0.3@ <br /> 2000 bar/29000 psi
                  </td>
                  <td rowSpan={2} className="p-4 text-white border-r border-gray-700 align-middle">20</td>
                  <td className="p-4 text-white">Single Acting</td>
                </tr>
                <tr className="bg-black text-center text-sm sm:text-base border-t border-gray-700">
                  <td className="p-4 font-medium text-gray-300 border-r border-gray-700">XEP 1500D</td>
                  <td className="p-4 text-white">Double Acting</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="bg-gray-800 p-3 text-left text-xs sm:text-sm text-gray-400">
            *Supply: Voltage and frequency can be demanded by customer
          </div>
        </div>
      </div>
    </div>
  );
};

export default Xep1500;
