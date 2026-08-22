// // import React from "react";
// // import { BsDot } from "react-icons/bs";
// // import { FaArrowRightLong } from "react-icons/fa6";

// // const HandPumps = () => {
// //   return (
// //     <div className="bg-black text-white">
// //       {/* Header with white background */}
// //       <div className="bg-white py-6">
// //         <div className="flex flex-wrap items-center justify-center gap-4 text-black text-center">
// //           <span className="font-medium">Specialized Tools</span>
// //           <FaArrowRightLong className="w-4 h-4 mx-4" />
// //           <span className="font-medium">Hex Drive - XTH Series</span>
// //         </div>
// //       </div>

// //       {/* Main content */}
// //       <div className="max-w-[1100px] mx-auto w-full px-4 py-12">
// //         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20 items-start">
// //           {/* Left Section */}
// //           <div className="space-y-6 flex flex-col items-center lg:items-start">
// //             {/* Product Image */}
// //             <div className="relative w-full flex justify-center">
// //               <div
// //                 className="bg-white rounded-2xl p-6 border-t-[12px] border-r-[12px] border-red-600 shadow-[0_10px_30px_rgba(255,255,255,0.25)] hover:shadow-[0_10px_30px_rgba(208,26,26,0.6)] transition-shadow duration-300 // // rounded-3xl // // h-[250px] sm:h-[300px] md:h-[400px] w-full max-w-[500px] flex items-center justify-center"
// //               >
// //                 <img
// //                   src="product2.png"
// //                   alt="Hydraulic Nut Splitter"
// //                   className="w-full h-full object-contain"
// //                 />
// //               </div>
// //             </div>

// //             {/* Download Catalog Button */}
// //             <div className="flex justify-center lg:justify-start lg:ml-30">
// //               <button className="bg-white text-red-600 px-6 sm:px-8 py-2 sm:py-3 text-lg sm:text-2xl rounded-2xl font-bold ">
// //                 Download Catalog
// //               </button>
// //             </div>
// //           </div>

// //           {/* Right Section */}
// //           <div className="space-y-6">
// //             {/* Title */}
// //             <div>
// //               <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2">
// //                 Hex Drive - XTH Series
// //               </h1>
// //               <div className="w-28 sm:w-40 md:w-110 h-1 bg-red-600 rounded-2xl"></div>
// //             </div>

// //             {/* Description */}
// //            <div className="text-body text-justify">
// //               <p>
// //                 • Compact design with longer arm improves the reliability
// //  More accurate and easier to use, since the wrench directly
// //  operates on the nuts. <br/>

// //  • 360x160 degree swivel or 360x360 degree swivel allows
// //  the wrench to operate freely in confined areas
// //               </p>
// //             </div> 
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default HandPumps;








// import React from "react";
// import { BsDot } from "react-icons/bs";
// import { FaArrowRightLong } from "react-icons/fa6";

// const HandPumps = () => {
//   // Data extracted from the image for XTH Series Direct Hex Type Hydraulic Torque Wrenches
//   const tableData = {
//     headers: ["","Units", "XTH-2", "", "XTH-4", "", "XTH-8", "", "XTH-14", "", "XTH-32", ""],
//     // The structure needs to handle the merged cells in the headers for XTH-2, XTH-4, etc.
//     // In the HTML/JSX, we will use 'colspan' for the table header to visually merge the cells.
//     // The data rows are structured to align with the columns created by the headers.
//     rows: [
//       { label: "Min. Torque", unit: "NM", values: ["293", "305", "608", "673", "1192", "1283", "2222", "5026", "5351"] },
//       { label: "Max. Torque", unit: "NM", values: ["2943", "3051", "6092", "6733", "11926", "12834", "22225", "50258", "53512"] },
//       { label: "Min. Torque", unit: "FT.LBS", values: ["214", "221", "443", "489", "867", "932", "1615", "3652", "3888"] },
//       { label: "Max. Torque", unit: "FT.LBS", values: ["2137", "2217", "4426", "4891", "8863", "9323", "16147", "36511", "38875"] },
//       { label: "Across Flat", unit: "MM", values: ["19-55", "55-60", "34-65", "70-80", "46-95", "100-105", "50-117", "110-155", "160-180"] },
//       { label: "Across Flat", unit: "INC", values: ["3/4-2.3/16", "2.3/16-2.3/8", "1.5/16-2.9/16", "2.3/4-3.1/8", "1.13/16-3.3/4", "3.7/8-4.1/8", "2-4.1/2", "4.1/4-6.1/8", "6.1/8-7.1/16"] },
//       { label: "Weight", unit: "KG", values: ["1.5", "1.5", "3.2", "3.2", "5.3", "5.3", "9.8", "15", "15"] },
//       { label: "Drive Unit", unit: "LBS", values: ["3.3", "3.3", "7", "7", "11.6", "11.6", "21.6", "33", "33"] },
//       { label: "Weight", unit: "KG", values: ["1.7", "1.85", "4.1", "4.2", "8.7", "8.8", "11.5", "32", "35"] },
//       { label: "Ratchet Unit", unit: "LBS", values: ["3.7", "4", "9", "9.2", "19", "19.4", "25", "70", "77"] },
//     ],
//   };

//   // Helper function to render the table
//   const renderTable = (data) => (
//     <div className="max-w-[1100px] mx-auto w-full px-4 pb-12">
//       <div className="inline-block min-w-full">
//         <div className="shadow-lg border border-white/50"> {/* Added main border */}
//           <table className="min-w-full border-collapse min-w-max">
//             <thead>
//               {/* This row handles the merged cell headers (XTH-2, XTH-4, etc.) */}
//               <tr className="bg-red-700 text-lg font-bold">
//                 <th rowSpan="2" className="py-3 px-2 sm:px-4 text-center border-r border-white/50 bg-gray-700">
//                   {data.headers[0]}
//                 </th>
//                 <th rowSpan="2" className="py-3 px-2 sm:px-4 text-center border-r border-white/50 bg-gray-700">
//                   {data.headers[1]}
//                 </th>
//                 <th colSpan="2" className="py-3 px-2 sm:px-4 text-center border-r border-l border-white/50">
//                   XTH-2
//                 </th>
//                 <th colSpan="2" className="py-3 px-2 sm:px-4 text-center border-r border-white/50">
//                   XTH-4
//                 </th>
//                 <th colSpan="2" className="py-3 px-2 sm:px-4 text-center border-r border-white/50">
//                   XTH-8
//                 </th>
//                 <th colSpan="1" className="py-3 px-2 sm:px-4 text-center border-r border-white/50">
//                   XTH-14
//                 </th>
//                 <th colSpan="2" className="py-3 px-2 sm:px-4 text-center">
//                   XTH-32
//                 </th>
//               </tr>
//             </thead>
//             <tbody>
//               {data.rows.map((row, rowIndex) => (
//                 <tr key={rowIndex} className="text-sm sm:text-base">
//                   {/* Label Column */}
//                   <td className="py-2 px-2 sm:px-4 text-justify border-t border-b border-l border-r border-white/50 
//                                    bg-gray-700 font-semibold whitespace-nowrap">
//                     {row.label}
//                   </td>
//                   {/* Unit Column */}
//                   <td className="py-2 px-2 sm:px-4 text-center border-t border-b border-r border-white/50 
//                                    bg-gray-700 font-semibold whitespace-nowrap">
//                     {row.unit}
//                   </td>
//                   {/* Value Columns - Dynamically map 9 values across 9 columns */}
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
//           <span className="font-medium">Hex Drive - XTH Series</span>
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
//                   src="product2.png"
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
//                 Hex Drive - XTH Series
//               </h1>
//               <div className="w-28 sm:w-40 md:w-110 h-1 bg-red-600 rounded-2xl"></div>
//             </div>

//             {/* Description */}
//             <div className="text-body text-justify">
//               <p>
//                 • Compact design with longer arm improves the reliability.
//                 <br />
//                 • More accurate and easier to use, since the wrench directly operates on the nuts. <br />
//                 • 360x160 degree swivel or 360x360 degree swivel allows the wrench to operate freely in confined areas.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* ------------------------------------------------------------- */}

//       <div className="max-w-[1100px] mx-auto w-full px-4 pt-6">
//         <h2 className="text-2xl font-bold text-red-600 mb-4">XTH SERIES DIRECT HEX TYPE
// HYDRAULIC TORQUE WRENCHES</h2>
//       </div>

//       {/* Data Sheet Table (Same UI) */}
//       {renderTable(tableData)}

//       {/* ------------------------------------------------------------- */}
//     </div>
//   );
// };

// export default HandPumps;



import React from "react";
import { BsDot } from "react-icons/bs";
import { FaArrowRightLong } from "react-icons/fa6";

const HexDrive = () => {
  // Data from the FIRST image (Technical Specifications) - Kept from the last step
  const specTableData = {
    headers: ["", "Units", "XTH-2", "", "XTH-4", "", "XTH-8", "", "XTH-14", "", "XTH-32", ""],
    rows: [
      { label: "Min. Torque", unit: "NM", values: ["293", "305", "608", "673", "1192", "1283", "2222", "5026", "5351"] },
      { label: "Max. Torque", unit: "NM", values: ["2943", "3051", "6092", "6733", "11926", "12834", "22225", "50258", "53512"] },
      { label: "Min. Torque", unit: "FT.LBS", values: ["214", "221", "443", "489", "867", "932", "1615", "3652", "3888"] },
      { label: "Max. Torque", unit: "FT.LBS", values: ["2137", "2217", "4426", "4891", "8863", "9323", "16147", "36511", "38875"] },
      { label: "Across Flat", unit: "MM", values: ["19-55", "55-60", "34-65", "70-80", "46-95", "100-105", "50-117", "110-155", "160-180"] },
      { label: "Across Flat", unit: "INC", values: ["3/4-2.3/16", "2.3/16-2.3/8", "1.5/16-2.9/16", "2.3/4-3.1/8", "1.13/16-3.3/4", "3.7/8-4.1/8", "2-4.1/2", "4.1/4-6.1/8", "6.1/8-7.1/16"] },
      { label: "Weight", unit: "KG", values: ["1.5", "1.5", "3.2", "3.2", "5.3", "5.3", "9.8", "15", "15"] },
      { label: "Drive Unit", unit: "LBS", values: ["3.3", "3.3", "7", "7", "11.6", "11.6", "21.6", "33", "33"] },
      { label: "Weight", unit: "KG", values: ["1.7", "1.85", "4.1", "4.2", "8.7", "8.8", "11.5", "32", "35"] },
      { label: "Ratchet Unit", unit: "LBS", values: ["3.7", "4", "9", "9.2", "19", "19.4", "25", "70", "77"] },
    ],
  };

  // Data from the SECOND image (Dimensional Data) - NEWLY ADDED
  const dimTableData = {
    headers: ["", "Units", "XTH-2", "", "XTH-4", "", "XTH-8", "", "XTH-14", "", "XTH-32", ""],
    rows: [
      { label: "Overall Length (L)", unit: "mm", values: ["179", "183", "223", "223", "287", "287", "350", "435", "447"] },
      { label: "Overall Length (L)", unit: "Inch", values: ["7.04", "7.2", "8.7", "8.7", "11.29", "11.29", "13.77", "17.12", "17.59"] },
      { label: "(H1)", unit: "mm", values: ["142", "142", "184", "184", "209", "209", "240", "320", "320"] },
      { label: "(H1)", unit: "Inch", values: ["5.59", "5.59", "7.24", "7.24", "8.22", "8.22", "9.4", "12.59", "12.59"] },
      { label: "(H2)", unit: "mm", values: ["109.5", "109.5", "143.5", "143.5", "185", "185", "205", "290", "290"] },
      { label: "(H2)", unit: "Inch", values: ["4.31", "4.31", "5.64", "5.64", "7.28", "7.28", "8.07", "11.41", "11.41"] },
      { label: "Width at Link (W1)", unit: "mm", values: ["32.2", "32.2", "40.6", "40.6", "52.5", "52.5", "63", "83", "83"] },
      { label: "Width at Link (W1)", unit: "Inch", values: ["1.26", "1.26", "1.59", "1.59", "2.06", "2.06", "2.48", "3.26", "3.26"] },
      { label: "Width at Cylinder (W2)", unit: "mm", values: ["34.4", "34.4", "49.5", "49.5", "61.5", "61.5", "81", "93", "93"] },
      { label: "Width at Cylinder (W2)", unit: "Inch", values: ["1.35", "1.35", "1.94", "1.94", "2.42", "2.42", "3.18", "3.66", "3.66"] },
      { label: "Nose Radius (R)", unit: "mm", values: ["22-43", "43-46", "33-55", "55-60", "42-76", "76-81", "52-92", "90-116", "116-128"] },
      { label: "R Min", unit: "mm", values: ["9.5", "10.5", "13.52", "13.7", "18", "18", "2", "25.7", "25.7"] },
      { label: "R Max", unit: "mm", values: ["12.2", "10.75", "17", "17", "20", "20", "25.5", "27.5", "27.5"] },
    ],
  };

  // Helper function to render the table (reused from the previous step)
  const renderTable = (data, isDimTable = false) => (
    <div className="w-full max-w-7xl mx-auto px-2 sm:px-4 pb-6 overflow-x-auto mt-2">
      <div className="w-full shadow-2xl rounded-xl overflow-hidden border border-white/30">
        <table className="w-full border-collapse min-w-[850px] text-xs sm:text-sm">
          <thead>
            {/* Table Headers: Uses colSpan to merge cells for XTH-2, XTH-4, etc. */}
            <tr className="bg-red-700 text-white font-bold leading-tight">
              {/* The first two columns (Label and Unit) */}
              <th className="py-2.5 px-1 sm:px-2 text-left border-r border-white/30 bg-gray-700 w-[18%] sm:w-[16%]">
                {data.headers[0]}
              </th>
              <th className="py-2.5 px-1 text-center border-r border-white/30 bg-gray-700 w-[7%] sm:w-[6%]">
                {data.headers[1]}
              </th>
              {/* Product Model Headers */}
              <th colSpan="2" className="py-2.5 px-1 text-center border-r border-l border-white/30 w-[17%]">
                XTH-2
              </th>
              <th colSpan="2" className="py-2.5 px-1 text-center border-r border-white/30 w-[17%]">
                XTH-4
              </th>
              <th colSpan="2" className="py-2.5 px-1 text-center border-r border-white/30 w-[17%]">
                XTH-8
              </th>
              <th colSpan="1" className="py-2.5 px-1 text-center border-r border-white/30 w-[9%]">
                XTH-14
              </th>
              <th colSpan="2" className="py-2.5 px-1 text-center w-[18%]">
                XTH-32
              </th>
            </tr>
          </thead>
          <tbody>
            {data.rows.map((row, rowIndex) => (
              <tr key={rowIndex} className="leading-normal hover:bg-zinc-900/60 transition-colors">
                {/* Label Column */}
                <td className="py-2 px-2 text-left border-t border-b border-l border-r border-white/30 
                                 bg-gray-700/80 font-semibold break-words">
                  {row.label}
                </td>
                {/* Unit Column */}
                <td className="py-2 px-1 text-center border-t border-b border-l border-r border-white/30 
                                 bg-gray-700/80 font-semibold break-words">
                  {row.unit}
                </td>
                {/* Value Columns - Dynamically map values across the necessary columns */}
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
          <span className="font-medium">Hex Drive - XTH Series</span>
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
                  src="product2.png"
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
                Hex Drive - XTH Series
              </h1>
              <div className="w-full rounded-2xl h-1 bg-red-600 mt-2"></div>
            </div>

            {/* Description */}
            <div className="text-body text-justify">
              <p>
                • Compact design with longer arm improves the reliability.
                <br />
                • More accurate and easier to use, since the wrench directly operates on the nuts. <br />
                • 360x160 degree swivel or 360x360 degree swivel allows the wrench to operate freely in confined areas.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ------------------------------------------------------------- */}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <h2 className="text-3xl font-bold text-white-600 mb-4 text-center">XTH Series Technical Specifications</h2>
        <div className=" sm:w-40 md:w-130 h-1 bg-red-600 rounded-2xl mb-5 mx-auto "></div>

      </div>

      {/* Table 1: Technical Specifications */}
      {renderTable(specTableData)}

      {/* ------------------------------------------------------------- */}
      <img
        src="Hexdriveblueprint.png"
        alt="Hexdriveblueprint"
        className="w-[400px] h-[350px] mx-auto mb-10 object-contain"
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <h2 className="text-3xl font-bold text-white-600 mb-4 text-center">XTH Series Dimensional Data</h2>
        <div className=" sm:w-40 md:w-110 h-1 bg-red-600 rounded-2xl mb-5 mx-auto "></div>

      </div>

      {/* Table 2: Dimensional Data (NEWLY ADDED) */}
      {renderTable(dimTableData, true)}

      {/* ------------------------------------------------------------- */}
    </div>
  );
};

export default HexDrive;