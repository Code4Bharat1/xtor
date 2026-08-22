// import React from "react";
// import { BsDot } from "react-icons/bs";
// import { FaArrowRightLong } from "react-icons/fa6";

// const SquareDrive = () => {
//   return (
//     <div className="bg-black text-white">
//       {/* Header with white background */}
//       <div className="bg-white py-6">
//         <div className="flex flex-wrap items-center justify-center gap-4 text-black text-center">
//           <span className="font-medium">Specialized Tools</span>
//           <FaArrowRightLong className="w-4 h-4 mx-4" />
//           <span className="font-medium">Square Drive - XTS Series
// </span>
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
//                   src="images/BoltingTools/squaredrive.png"
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
//                 Square Drive - XTS Series

//               </h1>
//               <div className="w-28 sm:w-40 md:w-110 h-1 bg-red-600 rounded-2xl"></div>
//             </div>

//             {/* Description */}
//              <div className="text-body p-2 sm:p-4">
//               <p>
//                 The range of Imperial Impact Sockets with square drives is from 3/4" to 2.1/2" and the across flat
//  sizes go up to 6.7/8". The Metric Impact Sockets offer 56 models with square drives ranging from
//  3/4" to 2.1/2" and across flat sizes up to 145mm
//               </p>
//             </div> 
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SquareDrive;






// import React from "react";
// import { BsDot } from "react-icons/bs";
// import { FaArrowRightLong } from "react-icons/fa6";

// const SquareDrive = () => {
//   // Data extracted from the FIRST image (Specifications)
//   const specTableData = {
//     headers: ["", "Unit", "XTS-07", "XTS-1", "XTS-3", "XTS-5", "XTS-8", "XTS-10", "XTS-20", "XTS-25", "XTS-35", "XTS-50"],
//     rows: [
//       { label: "Sq. Drive", unit: "inch", values: ["3/4\"", "3/4\"", "1\"", "1.1/2\"", "1.1/2\"", "1.1/2\"", "2.1/2\"", "2.1/2\"", "2.1/2\"", "2.1/2\""] },
//       { label: "Min. Torque", unit: "Nm", values: ["112", "172", "450", "740", "1078", "1450", "2719", "3472", "4866", "6925"] },
//       { label: "Max. Torque", unit: "Nm", values: ["1120", "1731", "4500", "7380", "10780", "14508", "27197", "34725", "48666", "69247"] },
//       { label: "Bolt Size", unit: "mm", values: ["14-30", "16-36", "22-48", "27-56", "30-64", "36-72", "42-90", "48-100", "64-120", "72-125"] },
//       { label: "Weight", unit: "Kg", values: ["1.8", "2.5", "4.9", "9.5", "10.8", "14.7", "26", "35", "50", "65"] },
//     ],
//   };

//   // Data extracted from the SECOND image (Dimensions)
//   const dimTableData = {
//     headers: ["", "Unit", "XTS-07", "XTS-1", "XTS-3", "XTS-5", "XTS-8", "XTS-10", "XTS-20", "XTS-25", "XTS-35", "XTS-50"],
//     rows: [
//       { label: "Body Length (L1)", unit: "mm", values: ["110", "144.5", "178", "213", "222", "246", "305", "321", "371", "376"] },
//       { label: "Body Length (L1)", unit: "inch", values: ["4.33", "5.69", "7.0", "8.38", "8.74", "9.69", "12.0", "12.6", "14.6", "14.8"] },
//       { label: "Overall Length (L2)", unit: "mm", values: ["139", "173", "228", "274.5", "292", "317", "383", "401", "465", "528"] },
//       { label: "Overall Length (L2)", unit: "inch", values: ["5.47", "6.81", "8.98", "10.80", "11.49", "12.48", "15.08", "15.78", "18.3", "20.78"] },
//       { label: "Tool Width (H1)", unit: "mm", values: ["42", "52", "69.5", "82.5", "92", "102", "112.5", "120", "137", "162"] },
//       { label: "Tool Width (H1)", unit: "inch", values: ["1.65", "2.04", "2.74", "3.24", "3.62", "4.01", "4.43", "4.72", "5.39", "6.14"] },
//       { label: "Overall Width (H2)", unit: "mm", values: ["65", "75", "94", "128.5", "134", "142", "183", "200", "216", "226"] },
//       { label: "Overall Width (H2)", unit: "inch", values: ["2.55", "2.95", "3.7", "5.06", "5.2", "5.6", "7.2", "7.87", "8.5", "8.9"] },
//       { label: "Tool Height (H3)", unit: "mm", values: ["77", "95.5", "115", "149", "167", "182", "220", "246", "282", "291"] },
//       { label: "Tool Height (H3)", unit: "inch", values: ["3.03", "3.76", "4.53", "5.87", "6.57", "7.16", "8.33", "9.68", "11.1", "11.5"] },
//       { label: "Overall Height (H4)", unit: "mm", values: ["108", "136", "176", "199", "217", "232", "270", "297", "332", "226"] },
//       { label: "Overall Height (H4)", unit: "inch", values: ["4.25", "5.35", "6.93", "7.83", "8.54", "9.13", "10.62", "11.69", "13.07", "12.83"] },
//       { label: "Tool Radius Around Bolt (R1)", unit: "mm", values: ["21", "26.3", "34.5", "39", "47", "51", "59", "66", "77", "78.8"] },
//       { label: "Tool Radius Around Bolt (R1)", unit: "inch", values: ["0.82", "1.03", "1.36", "1.53", "1.85", "2", "2.32", "2.59", "3.03", "3.1"] },
//       { label: "Reaction Reach (R2)", unit: "mm", values: ["68", "85", "111.5", "140", "153", "154", "186", "199", "241", "295"] },
//       { label: "Reaction Reach (R2)", unit: "inch", values: ["2.67", "3.35", "4.39", "5.51", "6.02", "6.06", "7.32", "7.83", "9.48", "11.6"] },
//     ],
//   };

//   const renderTable = (data) => (
//     <div className="max-w-[1100px] mx-auto w-full px-4 pb-12 overflow-x-auto mt-4">
//       <div className="inline-block min-w-full">
//         <div className="shadow-lg">
//           <table className="min-w-full border-collapse min-w-max">
//             <thead>
//               <tr className="bg-gray-800 text-sm sm:text-base font-medium">
//                 {data.headers.map((header, index) => (
//                   <th 
//                     key={index} 
//                     className={`py-3 px-2 sm:px-4 text-center border-l border-r border-t border-white/50 
//                                ${index === 0 ? 'bg-gray-700 text-lg font-semibold' : ''}`}
//                   >
//                     {header}
//                   </th>
//                 ))}
//               </tr>
//             </thead>
//             <tbody>
//               {data.rows.map((row, rowIndex) => (
//                 <tr key={rowIndex} className="text-sm sm:text-base">
//                   {/* Label Column */}
//                   <td className={`py-2 px-2 sm:px-4 text-justify border-t border-b border-l border-white/50 
//                                    bg-gray-700 font-semibold w-1/5 whitespace-nowrap 
//                                    ${row.unit === 'mm' ? 'border-b-0' : 'border-b'}`} // Styling for alternating units
//                   >
//                     {row.label}
//                   </td>
//                   {/* Unit Column */}
//                   <td className="py-2 px-2 sm:px-4 text-center border-t border-b border-l border-r border-white/50 
//                                    bg-gray-700 font-semibold whitespace-nowrap">
//                     {row.unit}
//                   </td>
//                   {/* Value Columns */}
//                   {row.values.map((value, colIndex) => (
//                     <td 
//                       key={colIndex} 
//                       className={`py-2 px-2 sm:px-4 text-center border-t border-b border-r border-white/50 
//                                   bg-black/80 font-normal whitespace-nowrap`}
//                     >
//                       {value}
//                     </td>
//                   ))}
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );

//   return (
//     <div className="bg-black text-white">
//       {/* Header with white background */}
//       <div className="bg-white py-6">
//         <div className="flex flex-wrap items-center justify-center gap-4 text-black text-center">
//           <span className="font-medium">Specialized Tools</span>
//           <FaArrowRightLong className="w-4 h-4 mx-4" />
//           <span className="font-medium">Square Drive - XTS Series</span>
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
//                   src="images/BoltingTools/squaredrive.png"
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
//                 Square Drive - XTS Series
//               </h1>
//               <div className="w-28 sm:w-40 md:w-110 h-1 bg-red-600 rounded-2xl"></div>
//             </div>

//             {/* Description */}
//             <div className="text-body p-2 sm:p-4">
//               <p>
//                 The range of Imperial Impact Sockets with square drives is from 3/4" to 2.1/2" and the across flat
//                 sizes go up to 6.7/8". The Metric Impact Sockets offer 56 models with square drives ranging from
//                 3/4" to 2.1/2" and across flat sizes up to 145mm
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* ------------------------------------------------------------- */}

//       <div className="max-w-[1100px] mx-auto w-full px-4 pt-6">
//         <h2 className="text-3xl font-bold text-white mb-2 text-center  ">Technical Specifications</h2>
//            <div className="rounded-2xl  h-1 bg-red-600 mx-auto" style={{ maxWidth: "350px" }}></div>
//       </div>

//       {/* Table 1: Specifications (from previous request) */}
//       {renderTable(specTableData)}

//       {/* ------------------------------------------------------------- */}

//              <img
//                   src="Sqauredriveblueprint.png"
//                   alt="Square Drive Blueprint"
//                   className="w-[500px] h-[450px] mx-auto mb-10 object-contain"
//                 />

//       <div className="max-w-[1100px] mx-auto w-full px-4 pt-6">
//         <h2 className="text-3xl font-bold text-white mb-2 text-center">Dimensional Data</h2>
//            <div className="rounded-2xl h-1 bg-red-600 mx-auto" style={{ maxWidth: "300px" }}></div>
//       </div>



//       {/* Table 2: Dimensional Data (from new image) */}
//       {renderTable(dimTableData)}

//       {/* ------------------------------------------------------------- */}
//     </div>
//   );
// };

// export default SquareDrive;

import React from "react";
import { BsDot } from "react-icons/bs";
import { FaArrowRightLong } from "react-icons/fa6";

const SquareDrive = () => {
  // Data extracted from the FIRST image (Specifications)
  const specTableData = {
    headers: ["", "Unit", "XTS-07", "XTS-1", "XTS-3", "XTS-5", "XTS-8", "XTS-10", "XTS-20", "XTS-25", "XTS-35", "XTS-50"],
    rows: [
      { label: "Sq. Drive", unit: "inch", values: ["3/4\"", "3/4\"", "1\"", "1.1/2\"", "1.1/2\"", "1.1/2\"", "2.1/2\"", "2.1/2\"", "2.1/2\"", "2.1/2\""] },
      { label: "Min. Torque", unit: "Nm", values: ["112", "172", "450", "740", "1078", "1450", "2719", "3472", "4866", "6925"] },
      { label: "Max. Torque", unit: "Nm", values: ["1120", "1731", "4500", "7380", "10780", "14508", "27197", "34725", "48666", "69247"] },
      { label: "Bolt Size", unit: "mm", values: ["14-30", "16-36", "22-48", "27-56", "30-64", "36-72", "42-90", "48-100", "64-120", "72-125"] },
      { label: "Weight", unit: "Kg", values: ["1.8", "2.5", "4.9", "9.5", "10.8", "14.7", "26", "35", "50", "65"] },
    ],
  };

  // Data extracted from the SECOND image (Dimensions)
  const dimTableData = {
    headers: ["", "Unit", "XTS-07", "XTS-1", "XTS-3", "XTS-5", "XTS-8", "XTS-10", "XTS-20", "XTS-25", "XTS-35", "XTS-50"],
    rows: [
      { label: "Body Length (L1)", unit: "mm", values: ["110", "144.5", "178", "213", "222", "246", "305", "321", "371", "376"] },
      { label: "Body Length (L1)", unit: "inch", values: ["4.33", "5.69", "7.0", "8.38", "8.74", "9.69", "12.0", "12.6", "14.6", "14.8"] },
      { label: "Overall Length (L2)", unit: "mm", values: ["139", "173", "228", "274.5", "292", "317", "383", "401", "465", "528"] },
      { label: "Overall Length (L2)", unit: "inch", values: ["5.47", "6.81", "8.98", "10.80", "11.49", "12.48", "15.08", "15.78", "18.3", "20.78"] },
      { label: "Tool Width (H1)", unit: "mm", values: ["42", "52", "69.5", "82.5", "92", "102", "112.5", "120", "137", "162"] },
      { label: "Tool Width (H1)", unit: "inch", values: ["1.65", "2.04", "2.74", "3.24", "3.62", "4.01", "4.43", "4.72", "5.39", "6.14"] },
      { label: "Overall Width (H2)", unit: "mm", values: ["65", "75", "94", "128.5", "134", "142", "183", "200", "216", "226"] },
      { label: "Overall Width (H2)", unit: "inch", values: ["2.55", "2.95", "3.7", "5.06", "5.2", "5.6", "7.2", "7.87", "8.5", "8.9"] },
      { label: "Tool Height (H3)", unit: "mm", values: ["77", "95.5", "115", "149", "167", "182", "220", "246", "282", "291"] },
      { label: "Tool Height (H3)", unit: "inch", values: ["3.03", "3.76", "4.53", "5.87", "6.57", "7.16", "8.33", "9.68", "11.1", "11.5"] },
      { label: "Overall Height (H4)", unit: "mm", values: ["108", "136", "176", "199", "217", "232", "270", "297", "332", "226"] },
      { label: "Overall Height (H4)", unit: "inch", values: ["4.25", "5.35", "6.93", "7.83", "8.54", "9.13", "10.62", "11.69", "13.07", "12.83"] },
      { label: "Tool Radius Around Bolt (R1)", unit: "mm", values: ["21", "26.3", "34.5", "39", "47", "51", "59", "66", "77", "78.8"] },
      { label: "Tool Radius Around Bolt (R1)", unit: "inch", values: ["0.82", "1.03", "1.36", "1.53", "1.85", "2", "2.32", "2.59", "3.03", "3.1"] },
      { label: "Reaction Reach (R2)", unit: "mm", values: ["68", "85", "111.5", "140", "153", "154", "186", "199", "241", "295"] },
      { label: "Reaction Reach (R2)", unit: "inch", values: ["2.67", "3.35", "4.39", "5.51", "6.02", "6.06", "7.32", "7.83", "9.48", "11.6"] },
    ],
  };

  const renderTable = (data) => (
    <div className="w-full max-w-7xl mx-auto px-2 sm:px-4 pb-6 overflow-x-auto mt-2">
      <div className="w-full shadow-2xl rounded-xl overflow-hidden border border-white/30">
        <table className="w-full border-collapse min-w-[850px] text-xs sm:text-sm">
          <thead>
            <tr className="bg-gray-800 text-white font-medium">
              {data.headers.map((header, index) => (
                <th
                  key={index}
                  className={`py-2.5 px-1 text-center border-l border-r border-t border-white/30 break-words leading-tight 
                          ${index === 0 ? 'bg-gray-700 w-[15%] font-semibold text-left px-2' : index === 1 ? 'bg-gray-700 w-[5%] font-semibold' : 'w-[8%]'}`}
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.rows.map((row, rowIndex) => (
              <tr key={rowIndex} className="leading-normal hover:bg-zinc-900/60 transition-colors">
                {/* Label Column */}
                <td className={`py-2 px-2 text-left border-t border-b border-l border-white/30 
                                bg-gray-700/80 font-semibold break-words 
                                ${row.unit === 'mm' ? 'border-b-0' : 'border-b'}`} // Styling for alternating units
                >
                  {row.label}
                </td>
                {/* Unit Column */}
                <td className="py-2 px-1 text-center border-t border-b border-l border-r border-white/30 
                                bg-gray-700/80 font-semibold break-words">
                  {row.unit}
                </td>
                {/* Value Columns */}
                {row.values.map((value, colIndex) => (
                  <td
                    key={colIndex}
                    className="py-2 px-1 text-center border-t border-b border-r border-white/30 
                                bg-black/80 font-normal text-white break-words"
                  >
                    {value}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  return (
    <div className="bg-black text-white">
      {/* Header with white background */}
      <div className="bg-white py-6">
        <div className="flex flex-wrap items-center justify-center gap-4 text-black text-center">
          <span className="font-medium">Specialized Tools</span>
          <FaArrowRightLong className="w-4 h-4 mx-4" />
          <span className="font-medium">Square Drive - XTS Series</span>
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
                  src="/square_drive.png"
                  alt="Hydraulic Nut Splitter"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

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
                Square Drive - XTS Series
              </h1>
              <div className="w-full rounded-2xl h-1 bg-red-600 mt-2"></div>
            </div>

            {/* Description */}
            <div className="text-body text-justify">
              <p>
                The XTORC XTS Series is precision-engineered to deliver unmatched performance in the most demanding bolting environments. Designed for reliability, accuracy, and ease of use, the XTS Series ensures consistent torque output across every application — whether in wind, oil & gas, power generation, or heavy engineering industries.
                Crafted from high-strength aerospace-grade alloy, the XTS wrench combines superior durability with lightweight handling. Its advanced hydraulic mechanism and leak-free swivel design ensure smooth, efficient, and safe operation even under extreme conditions.
              </p>

            </div>
          </div>
        </div>
      </div>

      {/* --- ADDED XTORC DESCRIPTION & HIGHLIGHTS --- */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">

          {/* Right column for highlights */}
          <div className="space-y-4">
            <h3 className="text-medium sm:text-3xl font-semibold text-red-600">Key Highlights:</h3>
            <ul className="space-y-3  text-2xl">
              {[
                "Compatible with all standard impact sockets — no special attachments required",
                "Aerospace-grade alloy body for exceptional strength and fatigue resistance",
                "Dual-direction torque application for both tightening and loosening operations",
                "360° × 180° hose swivel design for maximum accessibility in confined spaces",
                "Precision-engineered seals ensure zero oil leaks and long service life",
                "Delivers torque up to 70,000 Nm with ±3% repeatability",
              ].map((highlight, index) => (
                <li key={index} className="flex items-start text-gray-200 text-base sm:text-lg">
                  <BsDot className="text-red-600 w-6 h-6 flex-shrink-0 mt-0.5" />
                  <span className="text-body">{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      {/* ------------------------------------------- */}

      {/* ------------------------------------------------------------- */}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <h2 className="text-3xl font-bold text-white mb-2 text-center  ">Technical Specifications</h2>
        <div className="rounded-2xl  h-1 bg-red-600 mx-auto" style={{ maxWidth: "350px" }}></div>
      </div>

      {/* Table 1: Specifications (from previous request) */}
      {renderTable(specTableData)}

      {/* ------------------------------------------------------------- */}

      <img
        src="Sqauredriveblueprint.png"
        alt="Square Drive Blueprint"
        className="w-[500px] h-[450px] mx-auto mb-10 object-contain"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <h2 className="text-3xl font-bold text-white mb-2 text-center">Dimensional Data</h2>
        <div className="rounded-2xl h-1 bg-red-600 mx-auto" style={{ maxWidth: "300px" }}></div>
      </div>

      {/* Table 2: Dimensional Data (from new image) */}
      {renderTable(dimTableData)}

      {/* ------------------------------------------------------------- */}
    </div>
  );
};

export default SquareDrive;