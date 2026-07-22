// import React from "react";
// // import { ChevronRight } from 'lucide-react';
// import { BsDot } from "react-icons/bs";
// import { FaArrowRightLong } from "react-icons/fa6";

// const HydraulicNut = () => {
//   return (
//     <div className="bg-black text-white">
//       {/* Header with white background */}
//       <div className="bg-white py-6">
//         <div className="flex items-center justify-center gap-4 text-black">
//           <span className="font-medium">Specialized Tools</span>
//           <FaArrowRightLong className="w-4 h-4 ml-8 mr-8" />
//           <span className="font-medium">Hydraulic Nut Splitters</span>
//         </div>
//       </div>

//       {/* Main content */}
//       <div className="max-w-[1100px] mx-auto w-full px-4 py-12">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-23 items-start">
//           {/* Left Section */}
//           <div className="space-y-6">
//             {/* Product Image */}
//             <div className="relative">
//               <div
//                 className="bg-white rounded-2xl p-6 border-t-8 border-r-8 border-red-600 shadow-[0_10px_30px_rgba(255,255,255,0.25)] hover:shadow-[0_10px_30px_rgba(208,26,26,0.6)] transition-shadow duration-300 // rounded-3xl // h-[320px] flex items-center justify-center"
//               >
//                 <img
//                   src="nut_spilitter.png"
//                   alt="Hydraulic Nut Splitter"
//                   className="w-[25rem] h-auto object-contain "
//                 />
//               </div>
//             </div>

//             {/* Download Catalog Button */}
//             <div className="flex justify-center">
//               <button className="bg-white text-red-600 px-8 py-3 text-2xl rounded-2xl font-bold transition-colors">
//                 Download Catalog
//               </button>
//             </div>
//           </div>

//           {/* Right Section */}
//           <div className="space-y-6">
//             {/* Title */}
//             <div>
//               <h1 className="text-4xl font-bold text-white mb-2">
//                 Hydraulic Nut Splitters
//               </h1>
//               <div className="w-120 rounded-2xl h-1 bg-red-600"></div>
//             </div>

//             {/* Description */}
//             <div className="space-y-4 text-body text-justify">
//               <p>
//                 XTORC's Light Weight Hydraulic Nut Splitters are used in
//                 applications that involve corrosion; it can be used to remove
//                 corroded or seized nuts fast and safely. The light weight option
//                 helps the user to apply the product to lower sized bolts.
//               </p>
//               <p>
//                 XTORC's offers Weight Hydraulic Nut Splitters for a range of Hex
//                 size 0.37" to 2.95". Our product is designed for operator
//                 comfort that fits tight spaces and it cuts through the hardest
//                 of nuts.
//               </p>
//             </div>

//             {/* Application Section */}
//             <div className="space-y-4">
//               <h2 className="text-3xl font-bold text-red-600">Application:</h2>

//               <ul className="space-y-2 text-gray-200">
//                 <li className="flex items-start gap-2">
//                   <span className="text-white mb-2">•</span>
//                   <span>
//                     The fast, sure and safe method to cut and remove seized
//                     nuts
//                   </span>
//                 </li>
//                 <li className="flex items-start gap-2">
//                   <span className="text-white mb-2">•</span>
//                   <span>Compact and ergonomic angled head design</span>
//                 </li>
//                 <li className="flex items-start gap-2">
//                   <span className="text-white mb-2">•</span>
//                   <span>Heavy duty cutting tool, can be re-ground</span>
//                 </li>
//                 <li className="flex items-start gap-2">
//                   <span className="text-white mb-2">•</span>
//                   <span>Designed for Operator comfort Fits tight spaces Removes corroded nuts faster Removes frozen nuts safely Cuts through the hardest nuts</span>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HydraulicNut;

import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const HydraulicNut = () => {

  // Data for the NEW XNSL Series table
  const xnslTableData = [
    { model: "XNSL-5", hex: '0.37"-0.75" (10-19)', thread: 'M6-M12', a: '1.57" (40)', b: '2.04" (52)', c: '0.31" (8)', d: '0.79" (20)', e: '5.11" (130)', f: '1.18" (30)', weight: '2 (1)', chisel: 'TNSC-5' },
    { model: "XNSL-10", hex: '0.75"-0.94" (19-24)', thread: 'M12-M16', a: '2.12" (54)', b: '2.64" (67)', c: '0.47" (12)', d: '0.94" (24)', e: '6.41" (163)', f: '1.41" (41)', weight: '4 (2)', chisel: 'TNSC-10' },
    { model: "XNSL-15", hex: '0.94"-1.26" (24-32)', thread: 'M16-M22', a: '2.52" (64)', b: '3.11" (79)', c: '0.51" (13)', d: '1.18" (30)', e: '7.36" (187)', f: '2.04" (52)', weight: '6 (3)', chisel: 'TNSC-15' },
    { model: "XNSL-20", hex: '1.26"-1.61" (32-41)', thread: 'M22-M27', a: '3.07" (78)', b: '3.70" (94)', c: '0.78" (20)', d: '1.46" (37)', e: '8.62" (219)', f: '2.72" (69)', weight: '10 (4.5)', chisel: 'TNSC-20' },
    { model: "XNSL-35", hex: '1.61"-1.97" (41-50)', thread: 'M27-M33', a: '3.74" (95)', b: '4.45" (113)', c: '0.83" (21)', d: '1.77" (45)', e: '10.43" (265)', f: '3.07" (78)', weight: '21 (9.6)', chisel: 'TNSC-35' },
    { model: "XNSL-50", hex: '1.97"-2.36" (50-60)', thread: 'M33-M39', a: '4.17" (106)', b: '5.04" (128)', c: '0.98" (25)', d: '2.12" (54)', e: '11.69" (297)', f: '3.58" (91)', weight: '29 (13)', chisel: 'TNSC-50' },
    { model: "XNSL-90", hex: '2.36"-2.95" (60-75)', thread: 'M39-M48', a: '6.14" (156)', b: '7.28" (185)', c: '1.06" (27)', d: '2.95" (75)', e: '14.05" (357)', f: '4.33" (110)', weight: '75 (34)', chisel: 'TNSC-90' },
  ];

  // Data for the existing XNSH Series table
  const xnshTableData = [
    { model: "XNSH 105", studIn: '7/16"-7/8"', studMm: '11-22', nutIn: '5/8"-17/16"', nutMm: '16-36', a: '11" (271)', b: '1.05" (38)', c: '1.49" (38)', d: '4.13" (105)', e: '60', f: '0.39" (10)', weight: '20 (9)' },
    { model: "XNSH 200", studIn: '7/8"-11/4"', studMm: '22-31', nutIn: '15/16"-2"', nutMm: '33-50', a: '11.29" (287)', b: '1.05" (38)', c: '2.12" (54)', d: '4.25" (108)', e: '45', f: '0.51" (13)', weight: '21 (10)' },
    { model: "XNSH 204", studIn: '11/4"-11/2"', studMm: '32-38', nutIn: '17/8"-23/8"', nutMm: '47-60', a: '15.16" (385)', b: '2 1/4" (57)', c: '2.52" (64)', d: '6.45" (164)', e: '30', f: '0.55" (14)', weight: '71 (32)' },
    { model: "XNSH 210", studIn: '13/8"-13/4"', studMm: '39-44', nutIn: '21/16"-23/4"', nutMm: '52-70', a: '16.10" (398)', b: '2 1/4" (57)', c: '2.87" (73)', d: '6.45" (164)', e: '30', f: '0.70" (18)', weight: '72 (33)' },
    { model: "XNSH 308", studIn: '1.3/4"-2.1/4"', studMm: '45-57', nutIn: '2.5/8"-3.1/2"', nutMm: '70-89', a: '17.75" (460)', b: '3" (77.8)', c: '3.89" (99)', d: '8.42" (214)', e: '30', f: '0.75" (19)', weight: '158 (72)' },
    { model: "XNSH 314", studIn: '2"-2.1/2"', studMm: '50-64', nutIn: '3.1/8"-3.7/8"', nutMm: '79-98', a: '18" (488)', b: '3.12" (79.4)', c: '4.25" (108)', d: '8.42" (214)', e: '30', f: '0.86" (22.2)', weight: '163 (74)' },
    { model: "XNSH 404", studIn: '2.1/2"-2.3/4"', studMm: '64-70', nutIn: '3.3/4"-4.1/4"', nutMm: '95-108', a: '22.75" (579)', b: '3.75" (95.3)', c: '4.64" (118)', d: '9.88" (251)', e: '60', f: '1.14" (28.6)', weight: '251 (114)' },
    { model: "XNSH 500", studIn: '3"-3.1/4"', studMm: '76-83', nutIn: '4.1/2"-5"', nutMm: '114-127', a: '18" (488)', b: '4.12" (104.8)', c: '5.37" (137)', d: '9.88" (251)', e: '60', f: '1.14" (28.6)', weight: '256 (116)' },
    { model: "XNSH 506", studIn: '3.1/4"-3.1/2"', studMm: '83-89', nutIn: '4.7/8"-5.3/8"', nutMm: '124-136', a: '23.5" (598)', b: '4.12" (104.8)', c: '5.86" (149)', d: '9.88" (251)', e: '60', f: '1.14" (28.6)', weight: '262 (119)' },
  ];

  return (
    <div className="bg-black text-white" style={{ fontFamily: "Poppins, sans-serif" }}>
      {/* Header with white background */}
      <div className="bg-white py-6">
        <div className="flex items-center justify-center gap-4 text-black">
          <span className="font-medium">Specialized Tools</span>
          <FaArrowRightLong className="w-4 h-4 ml-8 mr-8" />
          <span className="font-medium">Hydraulic Nut Splitters</span>
        </div>
      </div>

      {/* Main content */}
      <div className="w-9/10 mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Section */}
          <div className="space-y-6">
            {/* Product Image */}
            <div className="relative">
              <div
                className="bg-white rounded-2xl p-6 border-t-8 border-r-8 border-red-600 shadow-[0_10px_30px_rgba(255,255,255,0.25)] hover:shadow-[0_10px_30px_rgba(208,26,26,0.6)] transition-shadow duration-300 rounded-3xl h-[320px] flex items-center justify-center"
              >
                <img
                  src="nut_spilitter.png"
                  alt="Hydraulic Nut Splitter"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            {/* Download Catalog Button */}
            {/* <div className="flex justify-center">
              <button className="bg-white text-red-600 px-8 py-3 text-2xl rounded-2xl font-bold transition-colors">
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
              <h1 className="text-4xl font-bold text-white mb-2">
                Hydraulic Nut Splitters
              </h1>
              <div className="w-full rounded-2xl h-1 bg-red-600 mt-2"></div>
            </div>

            {/* Description */}
            <div className="space-y-4 text-gray-200 text-lg leading-relaxed text-justify">
              <p>
                XTORC's Light Weight Hydraulic Nut Splitters are used in applications that involve corrosion; it can be used to remove corroded or seized nuts fast and safely. The light weight option helps the user to apply the product to lower sized bolts.
              </p>
              <p>
                XTORC's offers Weight Hydraulic Nut Splitters for a range of Hex size 0.37" to 2.95". Our product is designed for operator comfort that fits tight spaces and it cuts through the hardest of nuts.
              </p>
            </div>

            {/* Application Section */}
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-red-600">Application:</h2>
              <ul className="space-y-2 text-gray-200 text-lg">
                <li className="flex items-start gap-2">
                  <span className="text-red-500 font-bold flex-shrink-0 pt-1">•</span>
                  <span>The fast, sure and safe method to cut and remove seized nuts</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 font-bold flex-shrink-0 pt-1">•</span>
                  <span>Compact and ergonomic angled head design</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 font-bold flex-shrink-0 pt-1">•</span>
                  <span>Heavy duty cutting tool, can be re-ground</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 font-bold flex-shrink-0 pt-1">•</span>
                  <span>Designed for Operator comfort, fits tight spaces, removes corroded or frozen nuts faster and safely, and cuts through the hardest of nuts.</span>
                </li>
              </ul>
            </div>

            {/* Supplied With Section */}
            <div className="space-y-4 pt-4">
                <h2 className="text-3xl font-bold text-red-600">Nut Splitter is supplied complete with:</h2>
                <ul className="space-y-2 text-gray-200 text-lg">
                    <li className="flex items-start gap-2">
                        <span className="text-red-500 font-bold flex-shrink-0 pt-1">•</span>
                        <span>Hydraulic Cylinder</span>
                    </li>
                    <li className="flex items-start gap-2">
                        <span className="text-red-500 font-bold flex-shrink-0 pt-1">•</span>
                        <span>Housing</span>
                    </li>
                    <li className="flex items-start gap-2">
                        <span className="text-red-500 font-bold flex-shrink-0 pt-1">•</span>
                        <span>Chisel</span>
                    </li>
                    <li className="flex items-start gap-2">
                        <span className="text-red-500 font-bold flex-shrink-0 pt-1">•</span>
                        <span>Set of Allen Keys Spacer Set</span>
                    </li>
                    <li className="flex items-start gap-2">
                        <span className="text-red-500 font-bold flex-shrink-0 pt-1">•</span>
                        <span>Packed in a Rugged Steel Tool Box</span>
                    </li>
                </ul>
            </div>
          </div>
        </div>
      </div>

      {/* --- XNSL SERIES TABLE --- */}

             <img
                  src="NutsplittersTable1blueprint.png"
                  alt="Hydraulic Nut Splitter"
                  className="w-[400px] h-[350px] mx-auto mb-10 object-contain"
                />
      <div className="w-9/10 mx-auto px-4 py-12">
        <div className="mb-10 text-center">
            <h2 className="text-4xl text-white mb-2" >
              Technical Specifications - XNSL Series
            </h2>
            <div className="w-150 rounded-2xl h-1 bg-red-600 mx-auto mt-2" style={{ maxWidth: "600px" }}></div>
        </div>
        <div className="border border-gray-600 rounded-lg overflow-x-auto no-scrollbar">
            <div className="overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            <table className="min-w-full min-w-max">
                <thead className="bg-gray-800 text-base">
                <tr>
                    <th rowSpan="2" className="p-3 text-center border-r border-gray-700 align-middle">Model</th>
                    <th colSpan="2" className="p-3 text-center border-r border-gray-700 text-red-500">Hex Size</th>
                    <th colSpan="2" className="p-3 text-center border-r border-gray-700 text-red-500">Thread Size</th>
                    <th rowSpan="2" className="p-3 text-center border-r border-gray-700 align-middle">A <br/> in(mm)</th>
                    <th rowSpan="2" className="p-3 text-center border-r border-gray-700 align-middle">B <br/> in(mm)</th>
                    <th rowSpan="2" className="p-3 text-center border-r border-gray-700 align-middle">C <br/> in(mm)</th>
                    <th rowSpan="2" className="p-3 text-center border-r border-gray-700 align-middle">D <br/> in(mm)</th>
                    <th rowSpan="2" className="p-3 text-center border-r border-gray-700 align-middle">E <br/> in(mm)</th>
                    <th rowSpan="2" className="p-3 text-center border-r border-gray-700 align-middle">F <br/> in(mm)</th>
                    <th rowSpan="2" className="p-3 text-center border-r border-gray-700 align-middle">Weight <br/> lbs(kg)</th>
                    <th rowSpan="2" className="p-3 text-center align-middle">Replacement Chisel Model Nos.</th>
                </tr>
                <tr className="font-medium text-gray-300">
                    <th className="p-2 font-medium text-center border-t border-r border-gray-700">in</th>
                    <th className="p-2 font-medium text-center border-t border-r border-gray-700">mm</th>
                    <th className="p-2 font-medium text-center border-t border-r border-gray-700"></th>
                    <th className="p-2 font-medium text-center border-t border-r border-gray-700"></th>
                </tr>
                </thead>
                <tbody>
                {xnslTableData.map((row, index) => (
                    <tr key={index} className="bg-black text-center text-base border-t border-gray-700">
                        <td className="p-5 font-medium text-gray-300 border-r border-gray-700">{row.model}</td>
                        <td colSpan="2" className="p-2 text-white border-r border-gray-700">{row.hex}</td>
                        <td colSpan="2" className="p-2 text-white border-r border-gray-700">{row.thread}</td>
                        <td className="p-2 text-white border-r border-gray-700">{row.a}</td>
                        <td className="p-2 text-white border-r border-gray-700">{row.b}</td>
                        <td className="p-2 text-white border-r border-gray-700">{row.c}</td>
                        <td className="p-2 text-white border-r border-gray-700">{row.d}</td>
                        <td className="p-2 text-white border-r border-gray-700">{row.e}</td>
                        <td className="p-2 text-white border-r border-gray-700">{row.f}</td>
                        <td className="p-2 text-white border-r border-gray-700">{row.weight}</td>
                        <td className="p-2 text-white">{row.chisel}</td>
                    </tr>
                ))}
                </tbody>
            </table>
            </div>
             <div className="bg-gray-800 p-3 text-center text-gray-400">
                Higher capacity and customized solutions on request. Specifications are subject to change due to continual improvement.
            </div>
        </div>
      </div>

      {/* --- XNSH SERIES TABLE --- */}
                   <img
                  src="NutsplittersTable2blueprint.png"
                  alt="Hydraulic Nut Splitter"
                  className="w-[400px] h-[350px] mx-auto mb-10 object-contain"
                />
      <div className="w-9/10 mx-auto px-4 py-12">
        <div className="mb-10 text-center">
            <h2 className="text-4xl text-white mb-2" >
              Technical Specifications - XNSH Series
            </h2>
            <div className="w-150 rounded-2xl h-1 bg-red-600 mx-auto mt-2" style={{ maxWidth: "600px" }}></div>
        </div>
        <div className="border border-gray-600 rounded-lg overflow-x-auto no-scrollbar">
            <div className="overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            <table className="min-w-full min-w-max">
                <thead className="bg-gray-800 text-base">
                <tr>
                    <th rowSpan="2" className="p-3 text-center border-r border-gray-700 align-middle">Model</th>
                    <th colSpan="2" className="p-3 text-center border-r border-gray-700 text-red-500">Stud Diameter</th>
                    <th colSpan="2" className="p-3 text-center border-r border-gray-700 text-red-500">Nut A/F</th>
                    <th rowSpan="2" className="p-3 text-center border-r border-gray-700 align-middle">A <br/> in(mm)</th>
                    <th rowSpan="2" className="p-3 text-center border-r border-gray-700 align-middle">B <br/> in(mm)</th>
                    <th rowSpan="2" className="p-3 text-center border-r border-gray-700 align-middle">C <br/> in(mm)</th>
                    <th rowSpan="2" className="p-3 text-center border-r border-gray-700 align-middle">D <br/> in(mm)</th>
                    <th rowSpan="2" className="p-3 text-center border-r border-gray-700 align-middle">E <br/> in(mm)</th>
                    <th rowSpan="2" className="p-3 text-center border-r border-gray-700 align-middle">F <br/> in(mm)</th>
                    <th rowSpan="2" className="p-3 text-center align-middle">Weight <br/> lbs(kg)</th>
                </tr>
                <tr className="font-medium text-gray-300">
                    <th className="p-2 font-medium text-center border-t border-r border-gray-700">in</th>
                    <th className="p-2 font-medium text-center border-t border-r border-gray-700">mm</th>
                    <th className="p-2 font-medium text-center border-t border-r border-gray-700">in</th>
                    <th className="p-2 font-medium text-center border-t border-r border-gray-700">mm</th>
                </tr>
                </thead>
                <tbody>
                {xnshTableData.map((row, index) => (
                    <tr key={index} className="bg-black text-center text-base border-t border-gray-700">
                    <td className="p-5 font-medium text-gray-300 border-r border-gray-700">{row.model}</td>
                    <td className="p-2 text-white border-r border-gray-700">{row.studIn}</td>
                    <td className="p-2 text-white border-r border-gray-700">{row.studMm}</td>
                    <td className="p-2 text-white border-r border-gray-700">{row.nutIn}</td>
                    <td className="p-2 text-white border-r border-gray-700">{row.nutMm}</td>
                    <td className="p-2 text-white border-r border-gray-700">{row.a}</td>
                    <td className="p-2 text-white border-r border-gray-700">{row.b}</td>
                    <td className="p-2 text-white border-r border-gray-700">{row.c}</td>
                    <td className="p-2 text-white border-r border-gray-700">{row.d}</td>
                    <td className="p-2 text-white border-r border-gray-700">{row.e}</td>
                    <td className="p-2 text-white border-r border-gray-700">{row.f}</td>
                    <td className="p-2 text-white">{row.weight}</td>
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

export default HydraulicNut;