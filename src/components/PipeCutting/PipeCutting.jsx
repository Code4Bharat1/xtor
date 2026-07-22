// import React from "react";
// import { FaArrowRightLong } from "react-icons/fa6";

// const PipeCutting = () => {

//    const machineData = [
//     { model: "XTCB-6", machineIdMm: "184", machineIdInch: "7.24", machineOdMm: "304", machineOdInch: "11.97", mountingRangeMm: "52-152", mountingRangeInch: "2-6", ringWeightWo: "10", ringWeightWith: "27.4" },
//     { model: "XTCB-8", machineIdMm: "238", machineIdInch: "9.37", machineOdMm: "358", machineOdInch: "14.09", mountingRangeMm: "51-203", mountingRangeInch: "2-8", ringWeightWo: "12.26", ringWeightWith: "30.2" },
//     { model: "XTCB-10", machineIdMm: "292", machineIdInch: "11.50", machineOdMm: "412", machineOdInch: "16.22", mountingRangeMm: "102-254", mountingRangeInch: "4-10", ringWeightWo: "14.23", ringWeightWith: "33.1" },
//     { model: "XTCB-12", machineIdMm: "343", machineIdInch: "13.50", machineOdMm: "463", machineOdInch: "18.23", mountingRangeMm: "152-305", mountingRangeInch: "6-12", ringWeightWo: "17", ringWeightWith: "36.5" },
//     { model: "XTCB-14", machineIdMm: "373", machineIdInch: "14.69", machineOdMm: "493", machineOdInch: "19.41", mountingRangeMm: "203-356", mountingRangeInch: "8-14", ringWeightWo: "18.28", ringWeightWith: "38" },
//     { model: "XTCB-16", machineIdMm: "424", machineIdInch: "16.69", machineOdMm: "544", machineOdInch: "21.42", mountingRangeMm: "254-406", mountingRangeInch: "10-16", ringWeightWo: "19.77", ringWeightWith: "41" },
//     { model: "XTCB-18", machineIdMm: "480", machineIdInch: "18.90", machineOdMm: "600", machineOdInch: "23.62", mountingRangeMm: "305-457", mountingRangeInch: "12-18", ringWeightWo: "22.94", ringWeightWith: "44.5" },
//     { model: "XTCB-20", machineIdMm: "528", machineIdInch: "20.79", machineOdMm: "648", machineOdInch: "25.51", mountingRangeMm: "356-508", mountingRangeInch: "14-20", ringWeightWo: "24.81", ringWeightWith: "46.4" },
//     { model: "XTCB-22", machineIdMm: "576", machineIdInch: "22.68", machineOdMm: "696", machineOdInch: "27.40", mountingRangeMm: "406-559", mountingRangeInch: "16-22", ringWeightWo: "26.59", ringWeightWith: "52.6" },
//     { model: "XTCB-24", machineIdMm: "636", machineIdInch: "25.04", machineOdMm: "756", machineOdInch: "29.76", mountingRangeMm: "457-610", mountingRangeInch: "18-24", ringWeightWo: "29.27", ringWeightWith: "55.3" },
//     { model: "XTCB-26", machineIdMm: "687", machineIdInch: "27.05", machineOdMm: "861", machineOdInch: "33.90", mountingRangeMm: "508-660", mountingRangeInch: "20-26", ringWeightWo: "72", ringWeightWith: "117" },
//     { model: "XTCB-28", machineIdMm: "739", machineIdInch: "29.09", machineOdMm: "913", machineOdInch: "35.94", mountingRangeMm: "559-711", mountingRangeInch: "22-28", ringWeightWo: "82.5", ringWeightWith: "120.3" },
//     { model: "XTCB-30", machineIdMm: "799", machineIdInch: "31.46", machineOdMm: "973", machineOdInch: "38.31", mountingRangeMm: "610-762", mountingRangeInch: "24-30", ringWeightWo: "83", ringWeightWith: "126.3" },
//     { model: "XTCB-34", machineIdMm: "926", machineIdInch: "36.46", machineOdMm: "1100", machineOdInch: "43.31", mountingRangeMm: "711-864", mountingRangeInch: "28-34", ringWeightWo: "98.3", ringWeightWith: "142.2" },
//     { model: "XTCB-36", machineIdMm: "956", machineIdInch: "37.64", machineOdMm: "1130", machineOdInch: "44.49", mountingRangeMm: "762-914", mountingRangeInch: "30-36", ringWeightWo: "95.6", ringWeightWith: "143.7" },
//     { model: "XTCB-42", machineIdMm: "1106", machineIdInch: "43.54", machineOdMm: "1280", machineOdInch: "50.39", mountingRangeMm: "914-1067", mountingRangeInch: "36-42", ringWeightWo: "109.6", ringWeightWith: "164.2" },
//     { model: "XTCB-48", machineIdMm: "1256", machineIdInch: "49.75", machineOdMm: "1430", machineOdInch: "56.30", mountingRangeMm: "1067-1219", mountingRangeInch: "42-48", ringWeightWo: "126", ringWeightWith: "178.6" },
//     { model: "XTCB-56", machineIdMm: "1475", machineIdInch: "58.07", machineOdMm: "1649", machineOdInch: "64.92", mountingRangeMm: "1219-1422", mountingRangeInch: "48-56", ringWeightWo: "147.2", ringWeightWith: "217.6" },
//   ];

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
//           <span className="font-medium">Pipe Cutting Machine XTCB Series</span>
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
//                 Pipe Cutting Machine XTCB Series
//               </h1>
//               <div className=" rounded-2xl h-1 bg-red-600"></div>
//             </div>

//             {/* Description */}
//              <div className="space-y-4 text-body text-justify">
//               <p>The Split Frame Machine is ideal for all types of pipe cutting, beveling and end preparation
// operations.The split frame design allows the machine to split in half at the frame and mount around the
// OD of the in-line pipe or fittings for strong, stable clamping.</p>
//  <br /> <p>The equipment performs precision in-line cut or simultaneous cut/bevel, single cut/bevel, counterbore
// and flange facing operations, as well as weld end preparation on open ended pipe, ranging from 2 to 56
// inches. O.D. (DN20-1400),on most wall thickness and material.</p>
//             </div> 
//           </div>

//           {/* Right Section */}
//           <div className="space-y-6">
//             {/* Product Image */}
//             <div className="relative">
//               <div className="bg-white rounded-2xl p-6 border-t-12 border-r-12 border-red-600 shadow-[0_10px_30px_rgba(255,255,255,0.25)] hover:shadow-[0_10px_30px_rgba(208,26,26,0.6)] transition-shadow duration-300 // rounded-3xl // h-[300px] sm:h-[400px] flex items-center justify-center">
//                 <img
//                   src="/product4.png"
//                   alt="Hydraulic Bolt Tensioner"
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
//  <h2 className="text-xl sm:text-2xl font-bold text-red-600 mb-4 ml-50 ">Above 56 inches can be supplied on request.</h2>
//         <div className="lg:col-span-2 bg-black p-6 rounded-lg mx-auto w-1/2">
//             <h2 className="text-xl sm:text-2xl font-bold text-red-600 mb-6">DRIVE SPECIFICATIONS:</h2>
//             <ul className="space-y-4 text-base sm:text-lg text-grey-200">
//               <li><span className="font-semibold text-red-500">Drive Options:</span><br />Pneumatic, Hydraulic & Electric</li>
//               <li><span className="font-semibold text-red-500">Air Requirement:</span><br />90 CFM @ 0.6/0.7Mpa</li>
//               <li><span className="font-semibold text-red-500">Hydraulic Requirement:</span><br />2-60L per min. @ 12.5Mpa</li>
//               <li><span className="font-semibold text-red-500">Electric Requirement:</span><br />220-240V 1PH 50/60HZ</li>
//               <li><span className="font-semibold text-red-500">Feed Rate:</span><br />Fixed@0.08mm per revolution</li>
//             </ul>
//           </div>

//         <div className="max-w-[1100px] mx-auto w-full px-4 py-8">
//         {/* Main Grid Container for Table and Drive Specifications */}
//         <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
//           {/* Left Section: XTCB Series Machine Range Table */}
//           <div className="lg:col-span-3">
//             <h2 className="text-xl sm:text-2xl font-bold text-red-600 mb-4 ml-2">XTCB Series Machine Range:</h2>
//             <div className="overflow-x-auto shadow-lg rounded-lg border border-gray-700">
//               <table className="min-w-full divide-y divide-gray-700 min-w-max">
//                 <thead className="bg-gray-800 text-white">
//                   <tr>
//                     <th className="py-2 px-1 sm:px-2 text-xs font-semibold uppercase tracking-wider text-center" rowSpan="2">Model</th>
//                     <th className="py-2 px-1 sm:px-2 text-xs font-semibold uppercase tracking-wider text-center" colSpan="2">Machine ID</th>
//                     <th className="py-2 px-1 sm:px-2 text-xs font-semibold uppercase tracking-wider text-center" colSpan="2">Machine OD</th>
//                     <th className="py-2 px-1 sm:px-2 text-xs font-semibold uppercase tracking-wider text-center" colSpan="2">Mounting Range</th>
//                     <th className="py-2 px-1 sm:px-2 text-xs font-semibold uppercase tracking-wider text-center" colSpan="2">Ring Weight (Kg)</th>
//                   </tr>
//                   <tr>
//                     <th className="py-1 px-1 text-xs font-medium uppercase text-center bg-gray-700 border-l border-r border-gray-600">mm</th>
//                     <th className="py-1 px-1 text-xs font-medium uppercase text-center bg-gray-700 border-r border-gray-600">Inch</th>
//                     <th className="py-1 px-1 text-xs font-medium uppercase text-center bg-gray-700 border-r border-gray-600">mm</th>
//                     <th className="py-1 px-1 text-xs font-medium uppercase text-center bg-gray-700 border-r border-gray-600">Inch</th>
//                     <th className="py-1 px-1 text-xs font-medium uppercase text-center bg-gray-700 border-r border-gray-600">mm</th>
//                     <th className="py-1 px-1 text-xs font-medium uppercase text-center bg-gray-700 border-r border-gray-600">Inch</th>
//                     <th className="py-1 px-1 text-xs font-medium uppercase text-center bg-gray-700 border-r border-gray-600">W/O Accessories</th>
//                     <th className="py-1 px-1 text-xs font-medium uppercase text-center bg-gray-700">With Accessories</th>
//                   </tr>
//                 </thead>
//                 <tbody className="bg-gray-900 divide-y divide-gray-700 text-gray-300">
//                   {machineData.map((item, index) => (
//                     <tr key={item.model} className={index % 2 === 0 ? 'bg-gray-900' : 'bg-gray-900'}>
//                       <td className="py-2 px-1 sm:px-2 whitespace-nowrap text-xs font-medium text-center text-red-400">{item.model}</td>
//                       <td className="py-2 px-1 whitespace-nowrap text-xs text-center border-l border-gray-700">{item.machineIdMm}</td>
//                       <td className="py-2 px-1 whitespace-nowrap text-xs text-center">{item.machineIdInch}</td>
//                       <td className="py-2 px-1 whitespace-nowrap text-xs text-center border-l border-gray-700">{item.machineOdMm}</td>
//                       <td className="py-2 px-1 whitespace-nowrap text-xs text-center">{item.machineOdInch}</td>
//                       <td className="py-2 px-1 whitespace-nowrap text-xs text-center border-l border-gray-700">{item.mountingRangeMm}</td>
//                       <td className="py-2 px-1 whitespace-nowrap text-xs text-center">{item.mountingRangeInch}</td>
//                       <td className="py-2 px-1 whitespace-nowrap text-xs text-center font-semibold border-l border-gray-700">{item.ringWeightWo}</td>
//                       <td className="py-2 px-1 whitespace-nowrap text-xs text-center font-semibold">{item.ringWeightWith}</td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           </div>

//           {/* Right Section: Drive Specifications */}

//         </div>
//       </div>
//     </div>
//   );
// };

// export default PipeCutting;







import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const PipeCutting = () => {

  const machineData = [
    { model: "XTCB-6", machineIdMm: "184", machineIdInch: "7.24", machineOdMm: "304", machineOdInch: "11.97", mountingRangeMm: "52-152", mountingRangeInch: "2-6", ringWeightWo: "10", ringWeightWith: "27.4" },
    { model: "XTCB-8", machineIdMm: "238", machineIdInch: "9.37", machineOdMm: "358", machineOdInch: "14.09", mountingRangeMm: "51-203", mountingRangeInch: "2-8", ringWeightWo: "12.26", ringWeightWith: "30.2" },
    { model: "XTCB-10", machineIdMm: "292", machineIdInch: "11.50", machineOdMm: "412", machineOdInch: "16.22", mountingRangeMm: "102-254", mountingRangeInch: "4-10", ringWeightWo: "14.23", ringWeightWith: "33.1" },
    { model: "XTCB-12", machineIdMm: "343", machineIdInch: "13.50", machineOdMm: "463", machineOdInch: "18.23", mountingRangeMm: "152-305", mountingRangeInch: "6-12", ringWeightWo: "17", ringWeightWith: "36.5" },
    { model: "XTCB-14", machineIdMm: "373", machineIdInch: "14.69", machineOdMm: "493", machineOdInch: "19.41", mountingRangeMm: "203-356", mountingRangeInch: "8-14", ringWeightWo: "18.28", ringWeightWith: "38" },
    { model: "XTCB-16", machineIdMm: "424", machineIdInch: "16.69", machineOdMm: "544", machineOdInch: "21.42", mountingRangeMm: "254-406", mountingRangeInch: "10-16", ringWeightWo: "19.77", ringWeightWith: "41" },
    { model: "XTCB-18", machineIdMm: "480", machineIdInch: "18.90", machineOdMm: "600", machineOdInch: "23.62", mountingRangeMm: "305-457", mountingRangeInch: "12-18", ringWeightWo: "22.94", ringWeightWith: "44.5" },
    { model: "XTCB-20", machineIdMm: "528", machineIdInch: "20.79", machineOdMm: "648", machineOdInch: "25.51", mountingRangeMm: "356-508", mountingRangeInch: "14-20", ringWeightWo: "24.81", ringWeightWith: "46.4" },
    { model: "XTCB-22", machineIdMm: "576", machineIdInch: "22.68", machineOdMm: "696", machineOdInch: "27.40", mountingRangeMm: "406-559", mountingRangeInch: "16-22", ringWeightWo: "26.59", ringWeightWith: "52.6" },
    { model: "XTCB-24", machineIdMm: "636", machineIdInch: "25.04", machineOdMm: "756", machineOdInch: "29.76", mountingRangeMm: "457-610", mountingRangeInch: "18-24", ringWeightWo: "29.27", ringWeightWith: "55.3" },
    { model: "XTCB-26", machineIdMm: "687", machineIdInch: "27.05", machineOdMm: "861", machineOdInch: "33.90", mountingRangeMm: "508-660", mountingRangeInch: "20-26", ringWeightWo: "72", ringWeightWith: "117" },
    { model: "XTCB-28", machineIdMm: "739", machineIdInch: "29.09", machineOdMm: "913", machineOdInch: "35.94", mountingRangeMm: "559-711", mountingRangeInch: "22-28", ringWeightWo: "82.5", ringWeightWith: "120.3" },
    { model: "XTCB-30", machineIdMm: "799", machineIdInch: "31.46", machineOdMm: "973", machineOdInch: "38.31", mountingRangeMm: "610-762", mountingRangeInch: "24-30", ringWeightWo: "83", ringWeightWith: "126.3" },
    { model: "XTCB-34", machineIdMm: "926", machineIdInch: "36.46", machineOdMm: "1100", machineOdInch: "43.31", mountingRangeMm: "711-864", mountingRangeInch: "28-34", ringWeightWo: "98.3", ringWeightWith: "142.2" },
    { model: "XTCB-36", machineIdMm: "956", machineIdInch: "37.64", machineOdMm: "1130", machineOdInch: "44.49", mountingRangeMm: "762-914", mountingRangeInch: "30-36", ringWeightWo: "95.6", ringWeightWith: "143.7" },
    { model: "XTCB-42", machineIdMm: "1106", machineIdInch: "43.54", machineOdMm: "1280", machineOdInch: "50.39", mountingRangeMm: "914-1067", mountingRangeInch: "36-42", ringWeightWo: "109.6", ringWeightWith: "164.2" },
    { model: "XTCB-48", machineIdMm: "1256", machineIdInch: "49.75", machineOdMm: "1430", machineOdInch: "56.30", mountingRangeMm: "1067-1219", mountingRangeInch: "42-48", ringWeightWo: "126", ringWeightWith: "178.6" },
    { model: "XTCB-56", machineIdMm: "1475", machineIdInch: "58.07", machineOdMm: "1649", machineOdInch: "64.92", mountingRangeMm: "1219-1422", mountingRangeInch: "48-56", ringWeightWo: "147.2", ringWeightWith: "217.6" },
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
          <span className="font-medium">Pipe Cutting Machine XTCB Series</span>
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
                Pipe Cutting Machine XTCB Series
              </h1>
              <div className="w-full rounded-2xl h-1 bg-red-600 mt-2"></div>
            </div>

            {/* Description */}
            <div className="space-y-4 text-body text-justify">
              <p>The Split Frame Machine is ideal for all types of pipe cutting, beveling and end preparation
                operations. The split frame design allows the machine to split in half at the frame and mount around the
                OD of the in-line pipe or fittings for strong, stable clamping.</p>
              <br /> <p>The equipment performs precision in-line cut or simultaneous cut/bevel, single cut/bevel, counterbore
                and flange facing operations, as well as weld end preparation on open ended pipe, ranging from 2 to 56
                inches O.D. (DN20-1400), on most wall thickness and material.</p>
            </div>
          </div>

          {/* Right Section */}
          <div className="space-y-6">
            {/* Product Image */}
            <div className="relative">
              <div className="bg-white rounded-2xl p-6 border-t-12 border-r-12 border-red-600 shadow-[0_10px_30px_rgba(255,255,255,0.25)] hover:shadow-[0_10px_30px_rgba(208,26,26,0.6)] transition-shadow duration-300 rounded-3xl h-[300px] sm:h-[400px] flex items-center justify-center">
                <img
                  src="/product4.png"
                  alt="Pipe Cutting Machine XTCB Series"
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
                <a
              href="XTORC BROCHURE.pdf"
              download
              // className="bg-red-600 hover:bg-red-700 text-white font-semibold text-center py-2 rounded-md transition-colors"
            >
              Download Catalog
            </a>
               </button>
             </div> */}

            <div className="flex justify-center">
              <a
                href="XTORC IN-SITU MACHINES BROCHURE.pdf"
                download
                className="bg-white text-red-600 px-8 py-3 rounded-2xl text-2xl font-bold border-2 border-red-600 hover:bg-red-700 hover:text-white transition-all duration-300"
              >
                Download Catalog
              </a>
            </div>

          </div>
        </div>
      </div>

      <h2 className="text-xl sm:text-2xl font-bold text-red-600 mb-4 ml-10 text-center">Above 56 inches can be supplied on request.</h2>

      <div className="w-9/10 mx-auto px-4 py-8 px-6">
        {/* Drive Specifications (Now placed above the table) */}
        {/* <div className="bg-black p-6 rounded-lg mb-8 border border-gray-700 max-w-lg mx-auto"> 
           <h2 className="text-xl sm:text-2xl font-bold text-red-600 mb-6 text-center">DRIVE SPECIFICATIONS:</h2>
           <ul className="space-y-4 text-base sm:text-lg text-gray-300">
             <li><span className="font-semibold text-red-500">Drive Options:</span><br />Pneumatic, Hydraulic & Electric</li>
             <li><span className="font-semibold text-red-500">Air Requirement:</span><br />90 CFM @ 0.6/0.7Mpa</li>
             <li><span className="font-semibold text-red-500">Hydraulic Requirement:</span><br />2-60L per min. @ 12.5Mpa</li>
           </ul>
            <ul className="space-y-4 text-base sm:text-lg text-gray-300">
             <li><span className="font-semibold text-red-500">Electric Requirement:</span><br />220-240V 1PH 50/60HZ</li>
             <li><span className="font-semibold text-red-500">Feed Rate:</span><br />Fixed @ 0.08mm per revolution</li>
           </ul>
         </div> */}

        <div className="bg-black p-6 rounded-lg mb-8 border border-gray-700 max-w-3xl mx-auto">
          <h2 className="text-xl sm:text-2xl font-bold text-red-600 mb-6 text-center">DRIVE SPECIFICATIONS:</h2>

          {/* Flex container for side-by-side lists */}
          <div className="flex flex-col sm:flex-row justify-center sm:justify-around gap-8">

            {/* Left List */}
            <ul className="space-y-4 text-base sm:text-lg text-gray-300 sm:w-1/2">
              <li><span className="font-semibold text-red-500">Drive Options:</span><br />Pneumatic, Hydraulic & Electric</li>
              <li><span className="font-semibold text-red-500">Air Requirement:</span><br />90 CFM @ 0.6/0.7Mpa</li>
              <li><span className="font-semibold text-red-500">Hydraulic Requirement:</span><br />2-60L per min. @ 12.5Mpa</li>
            </ul>

            {/* Right List */}
            <ul className="space-y-4 text-base sm:text-lg text-gray-300 sm:w-1/2">
              <li><span className="font-semibold text-red-500">Electric Requirement:</span><br />220-240V 1PH 50/60HZ</li>
              <li><span className="font-semibold text-red-500">Feed Rate:</span><br />Fixed @ 0.08mm per revolution</li>
            </ul>

          </div>
        </div>





        <div className="px-4 sm:px-6 lg:px-12 py-12">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-white text-center mb-2">
              XTCB Series Machine Range:
            </h2>


            <div className="rounded-2xl h-1 bg-red-600 mx-auto" style={{ maxWidth: "400px" }}></div>

            <div className="overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] shadow-lg rounded-lg border border-gray-600 mt-8">
              <table className="min-w-full divide-y divide-gray-700 border-collapse min-w-max">
                <thead className="bg-gray-800 text-medium text-white">
                  <tr>
                    <th className="py-2 px-1 sm:px-2 text-xl font-semibold uppercase tracking-wider text-center border-r border-gray-700" rowSpan="2">Model</th>
                    <th className="py-2 px-1 sm:px-2 text-xl font-semibold uppercase tracking-wider text-center border-r border-gray-700" colSpan="2">Machine ID</th>
                    <th className="py-2 px-1 sm:px-2 text-xl font-semibold uppercase tracking-wider text-center border-r border-gray-700" colSpan="2">Machine OD</th>
                    <th className="py-2 px-1 sm:px-2 text-xl font-semibold uppercase tracking-wider text-center border-r border-gray-700" colSpan="2">Mounting Range</th>
                    <th className="py-2 px-1 sm:px-2 text-xl font-semibold uppercase tracking-wider text-center" colSpan="2">Ring Weight (Kg)</th>
                  </tr>
                  <tr>
                    <th className="py-1 px-1 text-xl font-medium uppercase text-center bg-gray-700 border-l border-r border-gray-700 text-white">mm</th>
                    <th className="py-1 px-1 text-xl font-medium uppercase text-center bg-gray-700 border-r border-gray-700 text-white">Inch</th>
                    <th className="py-1 px-1 text-xl font-medium uppercase text-center bg-gray-700 border-r border-gray-700 text-white">mm</th>
                    <th className="py-1 px-1 text-xl font-medium uppercase text-center bg-gray-700 border-r border-gray-700 text-white">Inch</th>
                    <th className="py-1 px-1 text-xl font-medium uppercase text-center bg-gray-700 border-r border-gray-700 text-white">mm</th>
                    <th className="py-1 px-1 text-xl font-medium uppercase text-center bg-gray-700 border-r border-gray-700 text-white">Inch</th>
                    <th className="py-1 px-1 text-xl font-medium uppercase text-center bg-gray-700 border-r border-gray-700 text-white">W/O Accessories</th>
                    <th className="py-1 px-1 text-xl font-medium uppercase text-center bg-gray-700 text-white">With Accessories</th>
                  </tr>
                </thead>

                <tbody className="bg-black divide-y divide-gray-700 text-gray-300">
                  {machineData.map((item, index) => (

                    <tr key={item.model} className="bg-black border-t border-gray-700">
                      <td className="py-2 px-1 sm:px-2 whitespace-nowrap text-xl font-medium text-center text-red-400 border-r border-gray-700">{item.model}</td>
                      <td className="py-2 px-1 whitespace-nowrap text-xl text-center border-r border-gray-700 text-white">{item.machineIdMm}</td>
                      <td className="py-2 px-1 whitespace-nowrap text-xl text-center border-r border-gray-700 text-white">{item.machineIdInch}</td>
                      <td className="py-2 px-1 whitespace-nowrap text-xl text-center border-r border-gray-700 text-white">{item.machineOdMm}</td>
                      <td className="py-2 px-1 whitespace-nowrap text-xl text-center border-r border-gray-700 text-white">{item.machineOdInch}</td>
                      <td className="py-2 px-1 whitespace-nowrap text-xl text-center border-r border-gray-700 text-white">{item.mountingRangeMm}</td>
                      <td className="py-2 px-1 whitespace-nowrap text-xl text-center border-r border-gray-700 text-white">{item.mountingRangeInch}</td>
                      <td className="py-2 px-1 whitespace-nowrap text-xl text-center font-semibold border-r border-gray-700 text-gray-300">{item.ringWeightWo}</td>
                      <td className="py-2 px-1 whitespace-nowrap text-xl text-center font-semibold text-gray-300">{item.ringWeightWith}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PipeCutting;