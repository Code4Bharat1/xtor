// import React from "react";
// import { BsDot } from "react-icons/bs";
// import { FaArrowRightLong } from "react-icons/fa6";

// const HandPumps = () => {
//   return (
//     <div className="bg-black text-white">
//       {/* Header with white background */}
//       <div className="bg-white py-6">
//         <div className="flex flex-wrap items-center justify-center gap-4 text-black text-center">
//           <span className="font-medium">Specialized Tools</span>
//           <FaArrowRightLong className="w-4 h-4 mx-4" />
//           <span className="font-medium">Hand Pumps & Hoses</span>
//         </div>
//       </div>

//       {/* Main content */}
//       <div className="max-w-[1100px] mx-auto w-full px-4 py-12">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20 items-start">
//           {/* Left Section */}
//           <div className="space-y-6 flex flex-col items-center lg:items-start">
//             {/* Product Image */}
//             <div className="relative w-full flex justify-center">
//               <div
//                 className="bg-white rounded-2xl p-6 border-t-[12px] border-r-[12px] border-red-600 shadow-[0_10px_30px_rgba(255,255,255,0.25)] hover:shadow-[0_10px_30px_rgba(208,26,26,0.6)] transition-shadow duration-300 // rounded-3xl // h-[250px] sm:h-[300px] md:h-[400px] w-full max-w-[500px] flex items-center justify-center"
//               >
//                 <img
//                   src="images/accesories/handpump.png"
//                   alt="Hydraulic Nut Splitter"
//                   className="w-full h-full object-contain"
//                 />
//               </div>
//             </div>

//             {/* Download Catalog Button */}
//             <div className="flex justify-center lg:justify-start lg:ml-30">
//               <button className="bg-white text-red-600 px-6 sm:px-8 py-2 sm:py-3 text-lg sm:text-2xl rounded-2xl font-bold ">
//                 Download Catalog
//               </button>
//             </div>
//           </div>

//           {/* Right Section */}
//           <div className="space-y-6">
//             {/* Title */}
//             <div>
//               <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2">
//                 Hand Pumps & Hoses
//               </h1>
//               <div className="w-28 sm:w-40 md:w-60 h-1 bg-red-600 rounded-2xl"></div>
//             </div>

//             {/* Description */}
//             <div className="text-body text-justify">
//               <p>
//                 Model No.: XHP-1500 Maximum Working Pressure: 1600 Bar Tanks Size:
//                 1.8 / 2.4 Ltr. The XTORC Two-Stage Hand Pumps come with Standard
//                 Pressure Gauge; this gives the user precise and safe control over
//                 the work carried out. The gauge is directly mounted onto the pump
//                 and is well protected by the specially designed pump lever. - Return
//                 connections on all pumps - Robust design - Aluminum Tank - Easy and
//                 simple maintenance
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HandPumps;

import React from "react";
import { BsDot } from "react-icons/bs";
import { FaArrowRightLong } from "react-icons/fa6";

const HandPumps = () => {
  // Data for the hand pump specifications table
  const tableData = [
    { oilCapacity: 655, model: "HH 7-0.7", p1: 25, p2: 700, o1: 15, o2: 2.6, hf: 300, d1: 520, d2: 133, d3: 119, adapter: 'NPT 3/8"', weight: 5.3 },
    { oilCapacity: 1440, model: "HH 7-1", p1: 25, p2: 700, o1: 32, o2: 2.5, hf: 300, d1: 577, d2: 120, d3: 170, adapter: 'NPT 3/8"', weight: 6.3 },
    { oilCapacity: 2200, model: "HH 7-2", p1: 25, p2: 700, o1: 16, o2: 2.5, hf: 300, d1: 539, d2: 146, d3: 170, adapter: 'NPT 3/8"', weight: 8 },
    { oilCapacity: 3240, model: "HH 7-3", p1: 25, p2: 700, o1: 32, o2: 2.5, hf: 300, d1: 582, d2: 200, d3: 170, adapter: 'NPT 3/8"', weight: 10 },
    { oilCapacity: 5860, model: "HH 7-4", p1: 25, p2: 700, o1: 32, o2: 2.5, hf: 300, d1: 667, d2: 250, d3: 172, adapter: 'NPT 3/8"', weight: 14.5 },
    { oilCapacity: 7500, model: "HH 7-8", p1: 14, p2: 700, o1: 126, o2: 4.8, hf: 300, d1: 742, d2: 308, d3: 270, adapter: 'NPT 3/8"', weight: 27 },
    { oilCapacity: 1440, model: "HH 16-1", p1: 15, p2: 1600, o1: 32, o2: 2.5, hf: 375, d1: 577, d2: 120, d3: 170, adapter: 'G1/4"', weight: 6.3 },
    { oilCapacity: 3240, model: "HH 16-3", p1: 15, p2: 1600, o1: 32, o2: 2.5, hf: 375, d1: 577, d2: 140, d3: 190, adapter: 'G1/4"', weight: 10 },
  ];

  return (
    <div className="bg-black text-white" style={{ fontFamily: "Poppins, sans-serif" }}>
      {/* Header with white background */}
      <div className="bg-white py-6">
        <div className="flex flex-wrap items-center justify-center gap-4 text-black text-center">
          <span className="font-medium">Specialized Tools</span>
          <FaArrowRightLong className="w-4 h-4 mx-4" />
          <span className="font-medium">Hand Pumps & Hoses</span>
        </div>
      </div>

      {/* Main content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20 items-start">
          {/* Left Section */}
          <div className="space-y-6 flex flex-col items-center lg:items-start">
            {/* Product Image */}
            <div className="relative w-full flex justify-center">
              <div
                className="bg-white rounded-2xl p-6 border-t-[12px] border-r-[12px] border-red-600 shadow-[0_10px_30px_rgba(255,255,255,0.25)] hover:shadow-[0_10px_30px_rgba(208,26,26,0.6)] transition-shadow duration-300 rounded-3xl h-[250px] sm:h-[300px] md:h-[400px] w-full max-w-[500px] flex items-center justify-center"
              >
                <img
                  src="images/accesories/handpump.png"
                  alt="XTORC Hand Pump"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            {/* Download Catalog Button */}
            {/* <div className="flex justify-center lg:justify-start lg:ml-30">
              <button className="bg-white text-red-600 px-6 sm:px-8 py-2 sm:py-3 text-lg sm:text-2xl rounded-2xl font-bold ">
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
            {/* Title */}
            <div className="w-fit">
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2">
                Hand Pumps & Hoses
              </h1>
              <div className="w-full rounded-2xl h-1 bg-red-600 mt-2"></div>
            </div>

            {/* Description */}
            <div className="text-base sm:text-lg md:text-xl p-2 sm:p-4 font-base text-gray-200 leading-relaxed space-y-4 text-justify">
              <p>
                <span className="font-bold">Model No.: XHP-1500</span><br />
                <span className="font-bold">Maximum Working Pressure:</span> 1600 Bar<br />
                <span className="font-bold">Tanks Size:</span> 1.8 / 2.4 Ltr.
              </p>
              <p>
                The XTORC Two-Stage Hand Pumps come with a Standard Pressure Gauge; this gives the user precise and safe control over the work carried out. The gauge is directly mounted onto the pump and is well protected by the specially designed pump lever.
              </p>
              <ul className="space-y-1">
                <li className="flex items-start gap-2"><span className="text-red-500 font-bold flex-shrink-0 pt-1">•</span>Return connections on all pumps</li>
                <li className="flex items-start gap-2"><span className="text-red-500 font-bold flex-shrink-0 pt-1">•</span>Robust design</li>
                <li className="flex items-start gap-2"><span className="text-red-500 font-bold flex-shrink-0 pt-1">•</span>Aluminum Tank</li>
                <li className="flex items-start gap-2"><span className="text-red-500 font-bold flex-shrink-0 pt-1">•</span>Easy and simple maintenance</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* --- Technical Specifications Table --- */}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-10 text-center">
          <h2 className="text-4xl text-white mb-2" >
            Technical Specifications
          </h2>
          <div className="w-100 rounded-2xl h-1 bg-red-600 mx-auto mt-2" style={{ maxWidth: "600px" }}></div>
        </div>
        <div className="border border-gray-600 rounded-xl overflow-hidden shadow-2xl w-full max-w-7xl mx-auto">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse min-w-[850px] text-xs sm:text-sm">
              <thead className="bg-gray-800 text-white">
                <tr className="leading-tight font-bold text-xs sm:text-sm">
                  <th rowSpan="2" className="py-3 px-2 text-center border-r border-gray-700 align-middle w-[8%]">Pump Type</th>
                  <th rowSpan="2" className="py-3 px-2 text-center border-r border-gray-700 align-middle w-[9%]">Usable Oil <br /> (cm³)</th>
                  <th rowSpan="2" className="py-3 px-2 text-center border-r border-gray-700 align-middle w-[10%]">Model</th>
                  <th colSpan="2" className="py-3 px-2 text-center border-r border-gray-700 text-red-500 w-[14%]">Pressure (Bar)</th>
                  <th colSpan="2" className="py-3 px-2 text-center border-r border-gray-700 text-red-500 w-[14%]">Volume/Stroke (cm³)</th>
                  <th rowSpan="2" className="py-3 px-2 text-center border-r border-gray-700 align-middle w-[8%]">Handle Force (N)</th>
                  <th colSpan="3" className="py-3 px-2 text-center border-r border-gray-700 text-red-500 w-[18%]">Dimensions (mm)</th>
                  <th rowSpan="2" className="py-3 px-2 text-center border-r border-gray-700 align-middle w-[11%]">Output Adapter</th>
                  <th rowSpan="2" className="py-3 px-2 text-center align-middle w-[8%]">Weight (Kg)</th>
                </tr>
                <tr className="font-medium text-gray-300 leading-tight text-[11px] sm:text-xs">
                  <th className="py-2 px-1.5 font-medium text-center border-t border-r border-gray-700">1st</th>
                  <th className="py-2 px-1.5 font-medium text-center border-t border-r border-gray-700">2nd</th>
                  <th className="py-2 px-1.5 font-medium text-center border-t border-r border-gray-700">1st</th>
                  <th className="py-2 px-1.5 font-medium text-center border-t border-r border-gray-700">2nd</th>
                  <th className="py-2 px-1.5 font-medium text-center border-t border-r border-gray-700">L</th>
                  <th className="py-2 px-1.5 font-medium text-center border-t border-r border-gray-700">W</th>
                  <th className="py-2 px-1.5 font-medium text-center border-t border-r border-gray-700">H</th>
                </tr>
              </thead>
              <tbody>
                {tableData.map((row, index) => (
                  <tr key={row.model} className="bg-black hover:bg-zinc-900/60 transition-colors text-center border-t border-gray-700 leading-normal">
                    {index === 0 && <td rowSpan={tableData.length} className="py-2.5 px-2 font-medium text-gray-300 border-r border-gray-700 align-middle break-words">Double Speed</td>}
                    <td className="py-2.5 px-1.5 text-white border-r border-gray-700 break-words">{row.oilCapacity}</td>
                    <td className="py-2.5 px-2 font-medium text-red-400 border-r border-gray-700 break-words">{row.model}</td>
                    <td className="py-2.5 px-1.5 text-white border-r border-gray-700 break-words">{row.p1}</td>
                    <td className="py-2.5 px-1.5 text-white border-r border-gray-700 break-words">{row.p2}</td>
                    <td className="py-2.5 px-1.5 text-white border-r border-gray-700 break-words">{row.o1}</td>
                    <td className="py-2.5 px-1.5 text-white border-r border-gray-700 break-words">{row.o2}</td>
                    {index === 0 && <td rowSpan={6} className="py-2.5 px-1.5 text-white border-r border-gray-700 align-middle break-words">300</td>}
                    {index === 6 && <td rowSpan={2} className="py-2.5 px-1.5 text-white border-r border-gray-700 align-middle break-words">375</td>}
                    <td className="py-2.5 px-1.5 text-white border-r border-gray-700 break-words">{row.d1}</td>
                    <td className="py-2.5 px-1.5 text-white border-r border-gray-700 break-words">{row.d2}</td>
                    <td className="py-2.5 px-1.5 text-white border-r border-gray-700 break-words">{row.d3}</td>
                    {index === 0 && <td rowSpan={6} className="py-2.5 px-1.5 text-white border-r border-gray-700 align-middle break-words">NPT 3/8"</td>}
                    {index === 6 && <td rowSpan={2} className="py-2.5 px-1.5 text-white border-r border-gray-700 align-middle break-words">G1/4"</td>}
                    <td className="py-2.5 px-1.5 text-white break-words">{row.weight}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HandPumps;