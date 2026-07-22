// import React from "react";
// import { FaArrowRightLong } from "react-icons/fa6";

// const Socket = () => {
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
//           <span className="font-medium">Socket</span>
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
//                     Socket




//               </h1>
//               <div className="rounded-2xl h-1 bg-red-600"></div>
//             </div>

//             {/* Description */}
//              <div className="space-y-4 text-body text-justify">
//               <p>
//                   The range of Imperial Impact Sockets with square drives is from 3/4" to 2.1/2" and the across flat
//  sizes go up to 6.7/8". The Metric Impact Sockets  offer 56 models with square drives ranging from
//  3/4" to 2.1/2" and across flat sizes up to 145mm.
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
//                   src="images/impact-sockets/Sockets.png"
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

// export default Socket;

import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const Socket = () => {
  // Corrected data from both table images
  const tableData = [
    // Table 1 data (3/4" and 1" drive)
    { model: "XTIS7524", drive: '3/4"', nutAfInch: "", nutAfMm: 24, d1: 40, d2: 44, s: 46, t: 21, l: 90 },
    { model: "XTIS7527", drive: '3/4"', nutAfInch: "", nutAfMm: 27, d1: 41, d2: 44, s: 48, t: 23, l: 90 },
    { model: "XTIS7527F", drive: '3/4"', nutAfInch: "1.1/16", nutAfMm: "", d1: 41, d2: 44, s: 48, t: 23, l: 90 },
    { model: "XTIS7530", drive: '3/4"', nutAfInch: "", nutAfMm: 30, d1: 44, d2: 44, s: 52, t: 24, l: 90 },
    { model: "XTIS7531F", drive: '3/4"', nutAfInch: "1.1/4", nutAfMm: "", d1: 49, d2: 44, s: 52, t: 24, l: 90 },
    { model: "XTIS7532", drive: '3/4"', nutAfInch: "", nutAfMm: 32, d1: 49, d2: 44, s: 52, t: 26, l: 90 },
    { model: "XTIS7536", drive: '3/4"', nutAfInch: "", nutAfMm: 36, d1: 52, d2: 44, s: 55, t: 28, l: 90 },
    { model: "XTIS7536F", drive: '3/4"', nutAfInch: "1.7/16", nutAfMm: "", d1: 52, d2: 44, s: 56, t: 28, l: 90 },
    { model: "XTIS7541", drive: '3/4"', nutAfInch: "", nutAfMm: 41, d1: 57, d2: 44, s: 59, t: 36, l: 90 },
    { model: "XTIS7541F", drive: '3/4"', nutAfInch: "1.5/8", nutAfMm: "", d1: 57, d2: 44, s: 59, t: 36, l: 90 },
    { model: "XTIS7546", drive: '3/4"', nutAfInch: "", nutAfMm: 46, d1: 67, d2: 44, s: 64, t: 37, l: 90 },
    { model: "XTIS7546F", drive: '3/4"', nutAfInch: "1.13/16", nutAfMm: "", d1: 67, d2: 44, s: 64, t: 36, l: 90 },
    { model: "XTIS7550", drive: '3/4"', nutAfInch: "", nutAfMm: 50, d1: 70, d2: 54, s: 67, t: 39, l: 90 },
    { model: "XTIS7551F", drive: '3/4"', nutAfInch: "2", nutAfMm: "", d1: 73, d2: 54, s: 67, t: 39, l: 90 },
    { model: "XTIS7555", drive: '3/4"', nutAfInch: "", nutAfMm: 55, d1: 78, d2: 54, s: 71, t: 41, l: 94 },
    { model: "XTIS755F", drive: '3/4"', nutAfInch: "2.3/16", nutAfMm: "", d1: 78, d2: 54, s: 71, t: 41, l: 94 },
    { model: "XTIS7560", drive: '3/4"', nutAfInch: "", nutAfMm: 60, d1: 82, d2: 52, s: 75, t: 45, l: 98 },
    { model: "XTIS7560F", drive: '3/4"', nutAfInch: "2.3/8", nutAfMm: "", d1: 82, d2: 54, s: 75, t: 45, l: 98 },
    
    // 1" drive from table 1
    { model: "XTIS124", drive: '1"', nutAfInch: "", nutAfMm: 24, d1: 42, d2: 54, s: 55, t: 21, l: 100 },
    { model: "XTIS127", drive: '1"', nutAfInch: "", nutAfMm: 27, d1: 46, d2: 54, s: 55, t: 23, l: 100 },
    { model: "XTIS127F", drive: '1"', nutAfInch: "1.1/16", nutAfMm: "", d1: 46, d2: 54, s: 55, t: 23, l: 100 },
    { model: "XTIS130", drive: '1"', nutAfInch: "", nutAfMm: 30, d1: 50, d2: 54, s: 57, t: 24, l: 100 },
    { model: "XTIS131F", drive: '1"', nutAfInch: "1.1/4", nutAfMm: "", d1: 51, d2: 54, s: 57, t: 24, l: 100 },
    { model: "XTIS132", drive: '1"', nutAfInch: "", nutAfMm: 32, d1: 51, d2: 54, s: 57, t: 26, l: 100 },
    { model: "XTIS136", drive: '1"', nutAfInch: "", nutAfMm: 36, d1: 54, d2: 54, s: 60, t: 28, l: 100 },
    { model: "XTIS136F", drive: '1"', nutAfInch: "1.7/16", nutAfMm: "", d1: 54, d2: 54, s: 60, t: 28, l: 100 },
    { model: "XTIS141", drive: '1"', nutAfInch: "", nutAfMm: 41, d1: 63, d2: 54, s: 64, t: 36, l: 100 },
    { model: "XTIS141F", drive: '1"', nutAfInch: "1.5/8", nutAfMm: "", d1: 63, d2: 54, s: 64, t: 36, l: 100 },
    { model: "XTIS146", drive: '1"', nutAfInch: "", nutAfMm: 46, d1: 70, d2: 54, s: 69, t: 36, l: 100 },
    { model: "XTIS146F", drive: '1"', nutAfInch: "1.13/16", nutAfMm: "", d1: 70, d2: 54, s: 69, t: 36, l: 100 },
    { model: "XTIS150", drive: '1"', nutAfInch: "", nutAfMm: 50, d1: 73, d2: 54, s: 72, t: 36, l: 100 },
    { model: "XTIS151F", drive: '1"', nutAfInch: "2", nutAfMm: "", d1: 73, d2: 54, s: 72, t: 39, l: 100 },
    { model: "XTIS155", drive: '1"', nutAfInch: "", nutAfMm: 55, d1: 82, d2: 54, s: 76, t: 41, l: 105 },
    { model: "XTIS155F", drive: '1"', nutAfInch: "2.3/16", nutAfMm: "", d1: 82, d2: 54, s: 80, t: 41, l: 105 },
    { model: "XTIS160", drive: '1"', nutAfInch: "", nutAfMm: 60, d1: 86, d2: 54, s: 82, t: 45, l: 112 },
    { model: "XTIS160F", drive: '1"', nutAfInch: "2.3/8", nutAfMm: "", d1: 88, d2: 54, s: 85, t: 45, l: 112 },
    { model: "XTIS165", drive: '1"', nutAfInch: "", nutAfMm: 65, d1: 92, d2: 54, s: 85, t: 46, l: 118 },
    { model: "XTIS165F", drive: '1"', nutAfInch: "2.9/16", nutAfMm: "", d1: 92, d2: 54, s: 85, t: 46, l: 118 },
    { model: "XTIS170", drive: '1"', nutAfInch: "", nutAfMm: 70, d1: 96, d2: 54, s: 88, t: 50, l: 124 },
    { model: "XTIS170F", drive: '1"', nutAfInch: "2.3/4", nutAfMm: "", d1: 96, d2: 54, s: 88, t: 50, l: 124 },
    { model: "XTIS175", drive: '1"', nutAfInch: "", nutAfMm: 75, d1: 100, d2: 86, s: 92, t: 57, l: 124 },
    { model: "XTIS175F", drive: '1"', nutAfInch: "2.15/16", nutAfMm: "", d1: 100, d2: 86, s: 92, t: 57, l: 124 },
    { model: "XTIS179F", drive: '1"', nutAfInch: "3.18", nutAfMm: "", d1: 105, d2: 86, s: 97, t: 57, l: 124 },
    { model: "XTIS180", drive: '1"', nutAfInch: "", nutAfMm: 80, d1: 105, d2: 86, s: 97, t: 62, l: 132 },
    { model: "XTIS185", drive: '1"', nutAfInch: "", nutAfMm: 85, d1: 115, d2: 86, s: 100, t: 62, l: 132 },
    { model: "XTIS188F", drive: '1"', nutAfInch: "3.1/2", nutAfMm: "", d1: 121, d2: 86, s: 104, t: 62, l: 140 },
    { model: "XTIS190", drive: '1"', nutAfInch: "", nutAfMm: 90, d1: 127, d2: 86, s: 104, t: 62, l: 140 },
    { model: "XTIS195", drive: '1"', nutAfInch: "", nutAfMm: 95, d1: 135, d2: 86, s: 106, t: 62, l: 140 },
    { model: "XTIS197F", drive: '1"', nutAfInch: "3.7/8", nutAfMm: "", d1: 135, d2: 86, s: 112, t: 62, l: 143 },

    // Table 2 data (1" and larger drives)
    { model: "XTIS1100", drive: '1"', nutAfInch: "", nutAfMm: 100, d1: 135, d2: 86, s: 112, t: 62, l: 143 },
    
    // 1.1/2" drive from table 2
    { model: "XTIS1536", drive: '1.1/2"', nutAfInch: "", nutAfMm: 36, d1: 64, d2: 86, s: 80, t: 28, l: 130 },
    { model: "XTIS1541", drive: '1.1/2"', nutAfInch: "", nutAfMm: 41, d1: 69, d2: 86, s: 83, t: 32, l: 130 },
    { model: "XTIS1546", drive: '1.1/2"', nutAfInch: "", nutAfMm: 46, d1: 76, d2: 86, s: 86, t: 36, l: 130 },
    { model: "XTIS1546F", drive: '1.1/2"', nutAfInch: "1.13/16", nutAfMm: "", d1: 76, d2: 86, s: 86, t: 36, l: 130 },
    { model: "XTIS1550", drive: '1.1/2"', nutAfInch: "", nutAfMm: 50, d1: 81, d2: 86, s: 90, t: 39, l: 130 },
    { model: "XTIS1550F", drive: '1.1/2"', nutAfInch: "2", nutAfMm: "", d1: 81, d2: 86, s: 90, t: 39, l: 130 },
    { model: "XTIS1555", drive: '1.1/2"', nutAfInch: "", nutAfMm: 55, d1: 88, d2: 86, s: 95, t: 41, l: 140 },
    { model: "XTIS1555F", drive: '1.1/2"', nutAfInch: "2.3/16", nutAfMm: "", d1: 88, d2: 86, s: 95, t: 41, l: 140 },
    { model: "XTIS1560", drive: '1.1/2"', nutAfInch: "", nutAfMm: 60, d1: 96, d2: 86, s: 98, t: 45, l: 140 },
    { model: "XTIS1560F", drive: '1.1/2"', nutAfInch: "2.3/8", nutAfMm: "", d1: 96, d2: 86, s: 98, t: 45, l: 140 },
    { model: "XTIS1565", drive: '1.1/2"', nutAfInch: "", nutAfMm: 65, d1: 102, d2: 86, s: 102, t: 46, l: 140 },
    { model: "XTIS1565F", drive: '1.1/2"', nutAfInch: "2.9/16", nutAfMm: "", d1: 102, d2: 86, s: 102, t: 46, l: 140 },
    { model: "XTIS1570", drive: '1.1/2"', nutAfInch: "", nutAfMm: 70, d1: 108, d2: 86, s: 102, t: 50, l: 150 },
    { model: "XTIS1570F", drive: '1.1/2"', nutAfInch: "2.3/4", nutAfMm: "", d1: 108, d2: 86, s: 102, t: 50, l: 150 },
    { model: "XTIS1575", drive: '1.1/2"', nutAfInch: "", nutAfMm: 75, d1: 116, d2: 86, s: 108, t: 57, l: 150 },
    { model: "XTIS1575F", drive: '1.1/2"', nutAfInch: "2.15/16", nutAfMm: "", d1: 116, d2: 86, s: 108, t: 57, l: 150 },
    { model: "XTIS1580", drive: '1.1/2"', nutAfInch: "", nutAfMm: 80, d1: 120, d2: 86, s: 110, t: 62, l: 150 },
    { model: "XTIS1580F", drive: '1.1/2"', nutAfInch: "3.1/8", nutAfMm: "", d1: 120, d2: 86, s: 110, t: 62, l: 150 },
    { model: "XTIS1585", drive: '1.1/2"', nutAfInch: "", nutAfMm: 85, d1: 130, d2: 86, s: 115, t: 62, l: 170 },
    { model: "XTIS1590", drive: '1.1/2"', nutAfInch: "", nutAfMm: 90, d1: 135, d2: 125, s: 118, t: 65, l: 170 },
    { model: "XTIS1590F", drive: '1.1/2"', nutAfInch: "3.1/2", nutAfMm: "", d1: 135, d2: 125, s: 118, t: 65, l: 170 },
    { model: "XTIS1595", drive: '1.1/2"', nutAfInch: "", nutAfMm: 95, d1: 140, d2: 125, s: 118, t: 65, l: 170 },
    { model: "XTIS15100", drive: '1.1/2"', nutAfInch: "", nutAfMm: 100, d1: 148, d2: 125, s: 128, t: 75, l: 190 },
    { model: "XTIS15100F", drive: '1.1/2"', nutAfInch: "3.7/8", nutAfMm: "", d1: 148, d2: 125, s: 128, t: 75, l: 190 },
    { model: "XTIS15105", drive: '1.1/2"', nutAfInch: "", nutAfMm: 105, d1: 155, d2: 125, s: 133, t: 80, l: 190 },
    { model: "XTIS15105F", drive: '1.1/2"', nutAfInch: "4.1/4", nutAfMm: "", d1: 155, d2: 125, s: 133, t: 80, l: 190 },
    { model: "XTIS15110", drive: '1.1/2"', nutAfInch: "", nutAfMm: 110, d1: 161, d2: 150, s: 138, t: 85, l: 200 },
    { model: "XTIS15115", drive: '1.1/2"', nutAfInch: "", nutAfMm: 115, d1: 161, d2: 150, s: 143, t: 94, l: 200 },
    { model: "XTIS15115F", drive: '1.1/2"', nutAfInch: "4.5/8", nutAfMm: "", d1: 175, d2: 150, s: 149, t: 94, l: 200 },
    
    // 2.1/2" drive from table 2
    { model: "XTIS2580", drive: '2.1/2"', nutAfInch: "", nutAfMm: 80, d1: 135, d2: 125, s: 140, t: 62, l: 190 },
    { model: "XTIS2580F", drive: '2.1/2"', nutAfInch: "3.1/8", nutAfMm: "", d1: 135, d2: 125, s: 140, t: 62, l: 190 },
    { model: "XTIS2585", drive: '2.1/2"', nutAfInch: "", nutAfMm: 85, d1: 140, d2: 125, s: 140, t: 62, l: 190 },
    { model: "XTIS2590", drive: '2.1/2"', nutAfInch: "", nutAfMm: 90, d1: 145, d2: 125, s: 140, t: 65, l: 190 },
    { model: "XTIS2595", drive: '2.1/2"', nutAfInch: "", nutAfMm: 95, d1: 155, d2: 125, s: 150, t: 70, l: 190 },
    { model: "XTIS2595F", drive: '2.1/2"', nutAfInch: "3.7/8", nutAfMm: "", d1: 155, d2: 125, s: 150, t: 70, l: 190 },
    { model: "XTIS25100", drive: '2.1/2"', nutAfInch: "", nutAfMm: 100, d1: 160, d2: 125, s: 150, t: 76, l: 200 },
    { model: "XTIS25105", drive: '2.1/2"', nutAfInch: "", nutAfMm: 105, d1: 165, d2: 125, s: 160, t: 80, l: 200 },
    { model: "XTIS25110", drive: '2.1/2"', nutAfInch: "", nutAfMm: 110, d1: 174, d2: 150, s: 160, t: 85, l: 210 },
    { model: "XTIS25115", drive: '2.1/2"', nutAfInch: "", nutAfMm: 115, d1: 180, d2: 150, s: 170, t: 90, l: 210 },
    { model: "XTIS25115F", drive: '2.1/2"', nutAfInch: "4.1/2", nutAfMm: "", d1: 180, d2: 150, s: 170, t: 90, l: 210 },
    { model: "XTIS25125F", drive: '2.1/2"', nutAfInch: "5", nutAfMm: "", d1: 195, d2: 150, s: 175, t: 98, l: 220 },
    { model: "XTIS25130", drive: '2.1/2"', nutAfInch: "", nutAfMm: 130, d1: 195, d2: 150, s: 175, t: 98, l: 220 },
    { model: "XTIS25135F", drive: '2.1/2"', nutAfInch: "5.3/8", nutAfMm: "", d1: 205, d2: 150, s: 180, t: 102, l: 220 },
    { model: "XTIS25145", drive: '2.1/2"', nutAfInch: "", nutAfMm: 145, d1: 220, d2: 150, s: 180, t: 105, l: 230 },
    { model: "XTIS25145F", drive: '2.1/2"', nutAfInch: "5.3/4", nutAfMm: "", d1: 220, d2: 150, s: 180, t: 105, l: 230 },
    { model: "XTIS25155F", drive: '2.1/2"', nutAfInch: "6.1/8", nutAfMm: "", d1: 230, d2: 180, s: 190, t: 110, l: 250 },
    { model: "XTIS25165F", drive: '2.1/2"', nutAfInch: "6.1/2", nutAfMm: "", d1: 240, d2: 180, s: 200, t: 120, l: "-" },
    { model: "XTIS25175F", drive: '2.1/2"', nutAfInch: "6.1/8", nutAfMm: "", d1: 255, d2: 180, s: 200, t: 120, l: "-" },
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
          <span className="font-medium">Socket</span>
        </div>
      </div>

      {/* Main content */}
      <div className="w-9/10 mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Section */}
          <div className="space-y-6">
            {/* Title with Impact font */}
            <div className="w-fit">
              <h1 className="text-4xl text-white mb-2 font-bold">
                Impact Sockets
              </h1>
              <div className="w-full rounded-2xl h-1 bg-red-600 mt-2"></div>
            </div>

            {/* Description */}
            <div className="space-y-4 text-body text-justify">
              <p>
                The range of Imperial Impact Sockets with square drives is from 3/4" to 2.1/2" and the across flat
                sizes go up to 6.1/8". The Metric Impact Sockets offer comprehensive models with square drives ranging from
                3/4" to 2.1/2" and across flat sizes up to 145mm.
              </p>
            </div>
          </div>

          {/* Right Section */}
          <div className="space-y-6">
            {/* Product Image */}
            <div className="relative">
              <div
                className="bg-white rounded-2xl p-6 border-t-12 border-r-12 border-red-600 shadow-[0_10px_30px_rgba(255,255,255,0.25)] hover:shadow-[0_10px_30px_rgba(208,26,26,0.6)] transition-shadow duration-300 rounded-3xl sm:h-[400px] h-[300px] flex items-center justify-center text-black">
                <img
                  src="images/impact-sockets/Sockets.png"
                  alt="Impact Sockets"
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

      {/* --- Technical Specifications Table --- */}
<div className="flex justify-center">
 <img
                  src="Impactsocketimage1.png"
                  alt="Hydraulic Nut Splitter"
                  className="w-[400px] h-[350px] mx-auto mb-10 object-contain"
                />

                       <img
                  src="Impactsocketimage2.png"
                  alt="Hydraulic Nut Splitter"
                  className="w-[400px] h-[350px] mx-auto mb-10 object-contain"
                />
</div>
            
      <div className="w-9/10 mx-auto px-4 py-12">
        <div className="mb-10 text-center">
          <h2 className="text-4xl text-white mb-2" >
            Technical Specifications
          </h2>
          <div className="w-100 rounded-2xl h-1 bg-red-600 mx-auto mt-2" style={{ maxWidth: "600px" }}></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* First Half of the Table */}
          <div className="border border-gray-600 rounded-lg overflow-x-auto no-scrollbar">
            <table className="w-full text-small min-w-max">
              <thead className="bg-gray-800">
                <tr>
                  <th className="p-8 text-center border-r border-gray-700">Model</th>
                  <th className="p-2 text-center border-r border-gray-700">Square Drive</th>
                  <th className="p-2 text-center border-r border-gray-700">Nut A/F Inch</th>
                  <th className="p-2 text-center border-r border-gray-700">Nut A/F mm</th>
                  <th className="p-2 text-center border-r border-gray-700">D1</th>
                  <th className="p-2 text-center border-r border-gray-700">D2</th>
                  <th className="p-2 text-center border-r border-gray-700">S</th>
                  <th className="p-2 text-center border-r border-gray-700">T</th>
                  <th className="p-2 text-center">L</th>
                </tr>
              </thead>
              <tbody>
                {tableData.slice(0, Math.ceil(tableData.length / 2)).map((row, index) => (
                  <tr key={index} className="bg-black border-t border-gray-700">
                    <td className="p-2 text-center border-r border-gray-700 font-medium text-gray-300">{row.model}</td>
                    <td className="p-2 text-center border-r border-gray-700">{row.drive}</td>
                    <td className="p-2 text-center border-r border-gray-700">{row.nutAfInch || '-'}</td>
                    <td className="p-2 text-center border-r border-gray-700">{row.nutAfMm || '-'}</td>
                    <td className="p-2 text-center border-r border-gray-700">{row.d1}</td>
                    <td className="p-2 text-center border-r border-gray-700">{row.d2}</td>
                    <td className="p-2 text-center border-r border-gray-700">{row.s}</td>
                    <td className="p-2 text-center border-r border-gray-700">{row.t}</td>
                    <td className="p-2 text-center">{row.l}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Second Half of the Table */}
          <div className="border border-gray-600 rounded-lg overflow-x-auto no-scrollbar">
            <table className="w-full text-small min-w-max">
              <thead className="bg-gray-800">
                <tr>
                  <th className="p-2 text-center border-r border-gray-700">Model</th>
                  <th className="p-2 text-center border-r border-gray-700">Square Drive</th>
                  <th className="p-2 text-center border-r border-gray-700">Nut A/F Inch</th>
                  <th className="p-2 text-center border-r border-gray-700">Nut A/F mm</th>
                  <th className="p-2 text-center border-r border-gray-700">D1</th>
                  <th className="p-2 text-center border-r border-gray-700">D2</th>
                  <th className="p-2 text-center border-r border-gray-700">S</th>
                  <th className="p-2 text-center border-r border-gray-700">T</th>
                  <th className="p-2 text-center">L</th>
                </tr>
              </thead>
              <tbody>
                {tableData.slice(Math.ceil(tableData.length / 2)).map((row, index) => (
                  <tr key={index} className="bg-black border-t border-gray-700">
                    <td className="p-2 text-center border-r border-gray-700 font-medium text-gray-300">{row.model}</td>
                    <td className="p-2 text-center border-r border-gray-700">{row.drive}</td>
                    <td className="p-2 text-center border-r border-gray-700">{row.nutAfInch || '-'}</td>
                    <td className="p-2 text-center border-r border-gray-700">{row.nutAfMm || '-'}</td>
                    <td className="p-2 text-center border-r border-gray-700">{row.d1}</td>
                    <td className="p-2 text-center border-r border-gray-700">{row.d2}</td>
                    <td className="p-2 text-center border-r border-gray-700">{row.s}</td>
                    <td className="p-2 text-center border-r border-gray-700">{row.t}</td>
                    <td className="p-2 text-center">{row.l}</td>
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

export default Socket;