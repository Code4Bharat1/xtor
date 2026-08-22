// import React from "react";
// import { FaArrowRightLong } from "react-icons/fa6";

// const MultiStageBolt = () => {
//   return (
//     <div className="bg-black text-white">
//       {/* Header with white background */}
//       <div className="bg-white py-6">
//         <div className="flex items-center justify-center gap-2 text-black">
//           <span className="font-medium px-2">Bolt Tensioning Solutions</span>
//           <FaArrowRightLong className="w-4 h-4 ml-8 mr-8" />
//           <span className="font-medium">Multi Stage Bolt Tensioners</span>
//         </div>
//       </div>

//       {/* Main content */}
//       <div className="max-w-[1100px] mx-auto w-full px-4 py-12">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-23 items-start">
//           {/* Left Section */}
//           <div className="space-y-6">
//             {/* Title */}
//             <div>
//               <h1 className="text-4xl font-bold text-white mb-2">
//                 Multi Stage Bolt Tensioners
//               </h1>
//               <div className="w-120 rounded-2xl h-1 bg-red-600"></div>
//             </div>

//             {/* Description */}
//             <div className="space-y-4 text-body text-justify">
//               <p>
//                 Engineered to meet the challenges of critical industrial bolting applications, Multi Stage Hydraulic Bolt Tensioners are ideal for environments requiring higher load capacities or tighter access than conventional tensioners can handle. Our XMT series units expand the range of solutions and provide effective tensioning end results.
//               </p>
//             </div>

//             {/* Bullet Points */}
//             <div className="space-y-3 text-gray-200">
//               <ul className="space-y-3">
//                 <li className="flex items-start gap-2">
//                   <span className="text-white  flex-shrink-0 p-3">•</span>
//                   <span>
//                     Delivering concentrated hydraulic tension directly along the stud axis, our XMT series eliminates the risk of twist-induced thread or galling damage.
//                   </span>
//                 </li>
//                 <li className="flex items-start gap-2">
//                   <span className="text-white  flex-shrink-0 p-3">•</span>
//                   <span>
//                     Achieve high repeatability and multi-bolt operations, shortening downtime through rapid tool reset translation which propels the piston back to start position instantly after pressure is released.
//                   </span>
//                 </li>
//                 <li className="flex items-start gap-2">
//                   <span className="text-white  flex-shrink-0 p-3">•</span>
//                   <span>
//                     Experience direct pressure-to-load translation and automated piston advancement that tightly regulates bolt elongation, ensuring every cycle yields a reliably uniform clamping force.
//                   </span>
//                 </li>
//                 <li className="flex items-start gap-2">
//                   <span className="text-white  flex-shrink-0 p-3">•</span>
//                   <span>
//                     Our high-precision machining and tightly controlled manufacturing tolerances delivers flawless tensioner to stud alignment ensuring pressure-stable and leak-free performance.
//                   </span>
//                 </li>
//                 <li className="flex items-start gap-2">
//                   <span className="text-white  flex-shrink-0 p-3">•</span>
//                   <span>
//                     Sealed load cells enclosing enhanced puller bars blocks out dust, moisture, and abrasive conditions ensuring reliable performance in harsh, vibration-prone environments.
//                   </span>
//                 </li>
//                 <li className="flex items-start gap-2">
//                   <span className="text-white  flex-shrink-0 p-3">•</span>
//                   <span>Suitable for Bolt sizing from 30 to 48 mm Dia.</span>
//                 </li>
//                 <li className="flex items-start gap-2">
//                   <span className="text-white  flex-shrink-0 p-3">•</span>
//                   <span>Max. Tensioning Load up to 1,231 KN.</span>
//                 </li>
//               </ul>
//             </div>
//           </div>

//           {/* Right Section */}
//           <div className="space-y-6">
//             {/* Product Image */}
//             <div className="relative">
//               <div className="bg-white rounded-2xl p-6 border-t-8 border-r-8 border-red-600 shadow-[0_10px_30px_rgba(255,255,255,0.25)] hover:shadow-[0_10px_30px_rgba(208,26,26,0.6)] transition-shadow duration-300 // rounded-3xl // h-[320px] flex items-center justify-center">
//                 <img
//                   src="multistagebolt.png"
//                   alt="Multi Stage Bolt Tensioner"
//                   className="w-full h-[19rem] object-contain "
//                 />
//               </div>
//             </div>

//             {/* Download Catalog Button */}
//             <div className="flex justify-center">
//               <button 
//                 className="text-red-600 px-8 py-3 rounded-2xl text-2xl font-bold hover:bg-red-700 transition-colors"
//                 style={{ backgroundColor: '#ffffff'}}
//               >
//                 Download Catalog
//               </button>
//             </div>

//             {/* Features Section */}
//             <div className="space-y-4">
//               <h2 className="text-3xl font-bold" style={{ color: '#D01A1A' }}>
//                 Features:
//               </h2>

//               <ul className="space-y-2 text-gray-200">
//                 <li className="flex items-start gap-2">
//                   <span className="text-white flex-shrink mb-2 pl-3">•</span>
//                   <span className="ml-2">Working Pressure 1500Bar / 21755 psi</span>
//                 </li>
//                 <li className="flex items-start gap-2">
//                   <span className="text-white flex-shrink mb-2 pl-3">•</span>
//                   <span className="ml-2">Fast, simple, accurate, reliable and ideal tightening and bolting tool for Wind</span>
//                 </li>
//                 <li className="flex items-start gap-2">
//                   <span className="text-white flex-shrink mb-2 pl-3">•</span>
//                   <span className="ml-2">Turbine Small, compact, can impart large tensioning load</span>
//                 </li>
//                 <li className="flex items-start gap-2">
//                   <span className="text-white flex-shrink mb-2 pl-3">•</span>
//                   <span className="ml-2">Durable composite material seal kit</span>
//                 </li>
//                 <li className="flex items-start gap-2">
//                   <span className="text-white flex-shrink mb-2 pl-3">•</span>
//                   <span className="ml-2">Clear over stroke alarming mark</span>
//                 </li>
//                 <li className="flex items-start gap-2">
//                   <span className="text-white flex-shrink mb-2 pl-3">•</span>
//                   <span className="ml-2">Optional gear drive allows the user rotate the nut quickly</span>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MultiStageBolt;

import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const MultiStageBoltTensioner = () => {
  // Data for the XMT Series table from the image
  const tableData = [
    { model: 'XMT-M30', boltMM: 'M30', boltIN: '1-1/8', minThread: 62, maxThread: 69, stroke: 7, distance: 66, load: 464, diameter: 73, height: 276 },
    { model: 'XMT-M33', boltMM: 'M33', boltIN: '1-1/4', minThread: 66, maxThread: 73, stroke: 9, distance: 72, load: 583, diameter: 78, height: 295 },
    { model: 'XMT-M36', boltMM: 'M36', boltIN: '1-3/8', minThread: 75, maxThread: 82, stroke: 9, distance: 77, load: 677, diameter: 84, height: 326 },
    { model: 'XMT-M39', boltMM: 'M39', boltIN: '1-1/2', minThread: 78, maxThread: 88, stroke: 10, distance: 83, load: 805, diameter: 90, height: 360 },
    { model: 'XMT-M42', boltMM: 'M42', boltIN: '1-5/8', minThread: 83, maxThread: 91, stroke: 10, distance: 89, load: 926, diameter: 96, height: 357 },
    { model: 'XMT-M45', boltMM: 'M45', boltIN: '1-3/4', minThread: 87, maxThread: 96, stroke: 10, distance: 96, load: 1091, diameter: 105, height: 371 },
    { model: 'XMT-M48', boltMM: 'M48', boltIN: '1-7/8', minThread: 93, maxThread: 102, stroke: 10, distance: 102, load: 1231, diameter: 110, height: 387 },
  ];

  return (
    <div className="bg-black text-white" style={{ fontFamily: 'Poppins, sans-serif' }}>
      {/* Header with white background */}
      <div className="bg-white py-6">
        <div className="flex items-center justify-center gap-2 text-black">
          <span className="font-medium px-2">Bolt Tensioning Solutions</span>
          <FaArrowRightLong className="w-4 h-4 ml-8 mr-8" />
          <span className="font-medium">Multi Stage Bolt Tensioners</span>
        </div>
      </div>

      {/* Main content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-12 items-start">
          {/* Left Section */}
          <div className="space-y-6">
            {/* Title */}
            <div className="w-fit">
              <h1 className="text-4xl font-bold text-white mb-2">
                Multi Stage Bolt Tensioners
              </h1>
              <div className="w-full rounded-2xl h-1 bg-red-600 mt-2"></div>
            </div>

            {/* Description */}
            <div className="space-y-4 text-body text-justify">
              <p>
                Engineered to meet the challenges of critical industrial bolting applications, Multi Stage Hydraulic Bolt Tensioners are ideal for environments requiring higher load capacities or tighter access than conventional tensioners can handle. Our XMT series units expand the range of solutions and provide effective tensioning end results.
              </p>
            </div>

            {/* Bullet Points */}
            <div className="space-y-3 text-gray-200 text-xl">
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span className="text-red-500 font-bold flex-shrink-0 pt-1">•</span>
                  <span>Delivering concentrated hydraulic tension directly along the stud axis, our XMT series eliminates the risk of twist-induced thread or galling damage.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 font-bold flex-shrink-0 pt-1">•</span>
                  <span>Achieve high repeatability and multi-bolt operations, shortening downtime through rapid tool reset translation which propels the piston back to start position instantly after pressure is released.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 font-bold flex-shrink-0 pt-1">•</span>
                  <span>Experience direct pressure-to-load translation and automated piston advancement that tightly regulates bolt elongation, ensuring every cycle yields a reliably uniform clamping force.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 font-bold flex-shrink-0 pt-1">•</span>
                  <span>Our high-precision machining and tightly controlled manufacturing tolerances delivers flawless tensioner to stud alignment ensuring pressure-stable and leak-free performance.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 font-bold flex-shrink-0 pt-1">•</span>
                  <span>Sealed load cells enclosing enhanced puller bars blocks out dust, moisture, and abrasive conditions ensuring reliable performance in harsh, vibration-prone environments.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 font-bold flex-shrink-0 pt-1">•</span>
                  <span>Suitable for Bolt sizing from 30 to 48 mm Dia.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 font-bold flex-shrink-0 pt-1">•</span>
                  <span>Max. Tensioning Load up to 1,231 KN.</span>
                </li>
                <div className="space-y-4 text-body text-justify">
                  {/* <p>
                To meet electricity generation targets Wind Turbines must be installed rapidly and these structures require a strong foundation, it is a task which requires a tool that can be relied upon repeatedly.
              </p> */}
                </div>
              </ul>
            </div>
          </div>

          {/* Right Section */}
          <div className="space-y-8">
            {/* Product Image */}
            <div className="relative">
              <div className="bg-white rounded-2xl p-6 border-t-8 border-r-8 border-red-600 shadow-[0_10px_30px_rgba(255,255,255,0.25)] hover:shadow-[0_10px_30px_rgba(208,26,26,0.6)] transition-shadow duration-300 rounded-3xl h-[350px] flex items-center justify-center">
                <img
                  src="multistagebolt.png"
                  alt="Multi Stage Bolt Tensioner"
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

            {/* Features Section (from Image 1) */}
            <div className="space-y-4">
              <h2 className="text-3xl font-bold" style={{ color: '#D01A1A' }}>
                Features:
              </h2>

              <ul className="space-y-2 text-gray-200 text-xl">
                <li className="flex items-start gap-2">
                  <span className="text-red-500 font-bold flex-shrink-0 pt-1">•</span>
                  <span>Working Pressure 1500Bar / 21755 psi</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 font-bold flex-shrink-0 pt-1">•</span>
                  <span>Fast, simple, accurate, reliable and ideal tightening and bolting tool for Wind Turbine</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 font-bold flex-shrink-0 pt-1">•</span>
                  <span>Small, compact, can impart large tensioning load</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 font-bold flex-shrink-0 pt-1">•</span>
                  <span>Durable composite material seal kit</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 font-bold flex-shrink-0 pt-1">•</span>
                  <span>Clear over stroke alarming mark</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 font-bold flex-shrink-0 pt-1">•</span>
                  <span>Optional gear drive allows the user rotate the nut quickly</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>


      {/* --- Technical Specifications Section --- */}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        <div className="mb-10 text-center mt-10">
          <h2 className="text-4xl text-white mb-2" >
            XMT SERIES SPECIFICATIONS
          </h2>
          <div className="w-120 rounded-2xl h-1 bg-red-600 mx-auto mt-2 " style={{ maxWidth: '400px' }}></div>
        </div>

        <div className="border border-gray-600 rounded-xl overflow-hidden shadow-2xl w-full max-w-7xl mx-auto">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse min-w-[800px] text-xs sm:text-sm">
              <thead className="bg-gray-800 text-white">
                <tr className="leading-tight font-bold text-xs sm:text-sm">
                  <th rowSpan="2" className="py-3 px-2 text-center border-r border-gray-700 w-[10%]">Model</th>
                  <th colSpan="2" className="py-3 px-2 text-center border-r border-gray-700 text-red-500 w-[16%]">Bolt Diameter</th>
                  <th rowSpan="2" className="py-3 px-2 text-center border-r border-gray-700 w-[11%]">Min. Thread <br /> (mm)</th>
                  <th rowSpan="2" className="py-3 px-2 text-center border-r border-gray-700 w-[11%]">Max. Thread <br /> (mm)</th>
                  <th rowSpan="2" className="py-3 px-2 text-center border-r border-gray-700 w-[10%]">Stroke <br /> (mm)</th>
                  <th rowSpan="2" className="py-3 px-2 text-center border-r border-gray-700 w-[10%]">Bolt Dist. <br /> (mm)</th>
                  <th rowSpan="2" className="py-3 px-2 text-center border-r border-gray-700 w-[10%]">Max. Load <br /> (KN)</th>
                  <th rowSpan="2" className="py-3 px-2 text-center border-r border-gray-700 w-[11%]">Outline Dia. <br /> (mm)</th>
                  <th rowSpan="2" className="py-3 px-2 text-center w-[11%]">Min. Height <br /> (mm)</th>
                </tr>
                <tr className="font-medium text-gray-300 leading-tight text-[11px] sm:text-xs">
                  <th className="py-2 px-1.5 text-center border-t border-r border-gray-700">(mm)</th>
                  <th className="py-2 px-1.5 text-center border-t border-r border-gray-700">(in)</th>
                </tr>
              </thead>
              <tbody>
                {tableData.map((row, index) => (
                  <tr key={index} className="bg-black hover:bg-zinc-900/60 transition-colors text-center border-t border-gray-700 leading-normal">
                    <td className="py-2.5 px-2 font-medium text-red-400 border-r border-gray-700 break-words">{row.model}</td>
                    <td className="py-2.5 px-2 text-white border-r border-gray-700 break-words">{row.boltMM}</td>
                    <td className="py-2.5 px-2 text-white border-r border-gray-700 break-words">{row.boltIN}</td>
                    <td className="py-2.5 px-2 text-white border-r border-gray-700 break-words">{row.minThread}</td>
                    <td className="py-2.5 px-2 text-white border-r border-gray-700 break-words">{row.maxThread}</td>
                    <td className="py-2.5 px-2 text-white border-r border-gray-700 break-words">{row.stroke}</td>
                    <td className="py-2.5 px-2 text-white border-r border-gray-700 break-words">{row.distance}</td>
                    <td className="py-2.5 px-2 text-white border-r border-gray-700 break-words">{row.load}</td>
                    <td className="py-2.5 px-2 text-white border-r border-gray-700 break-words">{row.diameter}</td>
                    <td className="py-2.5 px-2 text-white break-words">{row.height}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="bg-gray-800 p-2 text-center text-[10px] sm:text-xs text-gray-400">
            Note: Dimensions are subject to change.
          </div>
        </div>
      </div>
    </div>
  );
};

export default MultiStageBoltTensioner;