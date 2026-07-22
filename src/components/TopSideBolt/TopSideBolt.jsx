// import React from "react";
// import { BsDot } from "react-icons/bs";
// import { FaArrowRightLong } from "react-icons/fa6";

// const TopSideBolt = () => {
//   return (
//     <div className="bg-black text-white">
//       {/* Header with white background */}
//       <div className="bg-white py-6">
//         <div className="flex flex-wrap items-center justify-center gap-4 text-black text-center">
//           <span className="font-medium">Specialized Tools</span>
//           <FaArrowRightLong className="w-4 h-4 mx-4" />
//           <span className="font-medium">Top Side Bolt Tensioner
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
//                   src="product5.png"
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
//                 Top Side Bolt Tensioner

//               </h1>
//               <div className="w-28 sm:w-40 md:w-60 h-1 bg-red-600 rounded-2xl"></div>
//             </div>

//             {/* Description */}
//              <div className="text-body text-justify">
//               <p>
//                 A Top Side Bolt Tensioner is a hydraulic tool designed to apply controlled tension to bolts and studs from the top side of the joint. It uses hydraulic pressure to elongate the bolt, allowing the nut to be easily rotated down by hand without frictional losses. This ensures accurate preload, uniform tightening, and minimal risk of bolt fatigue or over-torque.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TopSideBolt;

import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const BoltTensionersPage = () => {
  // Data for the XST Series Spring Return Bolt Tensioner (now the second table)
  const xstTableData = {
    rows: [
      {
        model: "XST 1",
        maxLoad: "160 (16.31)",
        hydArea: "10 (1.56)",
        dimA: "66 (2.59)",
        weight: "1.4 (3.08)",
        bolts: [
          { impSize: '3/4"', impModel: 'XST2-1', metSize: 'M20', metModel: 'XST1-3', dimB: '93 (3.66)', dimC: '', clearance: '136 (5.35)' },
        ],
      },
      {
        model: "XST 2",
        maxLoad: "280 (28.55)",
        hydArea: "18.67 (2.89)",
        dimA: "87 (3.42)",
        weight: "2.7 (5.95)",
        bolts: [
          { impSize: '1"', impModel: 'XST2-1', metSize: 'M24', metModel: 'XST2-3', dimB: '117 (4.60)', dimC: '68 (2.67)', clearance: '175 (6.88)' },
          { impSize: '1"', impModel: 'XST3-1', metSize: 'M24', metModel: 'XST3-5', dimB: '', dimC: '', clearance: '' },
        ],
      },
      {
        model: "XST 3",
        maxLoad: "450 (45.88)",
        hydArea: "30.01 (4.65)",
        dimA: "103 (4.05)",
        weight: "4.1 (9.03)",
        bolts: [
          { impSize: '1-1/8"', impModel: 'XST3-2', metSize: 'M30', metModel: 'XST3-7', dimB: '117 (4.60)', dimC: '80 (3.14)', clearance: '80 (3.14)' },
          { impSize: '', impModel: '', metSize: '', metModel: '', dimB: '120 (4.72)', dimC: '84 (3.30)', clearance: '84 (3.30)' },
          { impSize: '1-3/8"', impModel: 'XST3-4', metSize: 'M36', metModel: 'XST3-9', dimB: '123 (4.84)', dimC: '89 (3.50)', clearance: '89 (3.50)' },
          { impSize: '', impModel: '', metSize: '', metModel: '', dimB: '126 (4.96)', dimC: '88 (3.46)', clearance: '88 (3.46)' },
        ],
      },
      {
        model: "XST 4",
        maxLoad: "660 (67.30)",
        hydArea: "44.01 (6.82)",
        dimA: "118 (4.64)",
        weight: "5.4 (11.9)",
        bolts: [
          { impSize: '1-3/8"', impModel: 'XST4-2', metSize: 'M36', metModel: 'XST4-6', dimB: '123 (4.84)', dimC: '96 (6.77)', clearance: '96 (6.77)' },
          { impSize: '', impModel: '', metSize: '', metModel: '', dimB: '126 (4.96)', dimC: '96 (3.77)', clearance: '96 (3.77)' },
          { impSize: '1-5/8"', impModel: 'XST4-4', metSize: 'M42', metModel: 'XST4-8', dimB: '130 (8.11)', dimC: '105 (4.13)', clearance: '105 (4.13)' },
          { impSize: '', impModel: '', metSize: '', metModel: '', dimB: '133 (5.23)', dimC: '112 (4.40)', clearance: '112 (4.40)' },
        ],
      },
      {
        model: "XST 5",
        maxLoad: "1000 (101.97)",
        hydArea: "66.68 (10.33)",
        dimA: "140.5 (5.53)",
        weight: "8.4 (18.51)",
        bolts: [
          { impSize: '1-5/8"', impModel: 'XST5-2', metSize: 'M42', metModel: 'XST5-7', dimB: '132 (5.19)', dimC: '114 (4.48)', clearance: '114 (4.48)' },
          { impSize: '', impModel: '', metSize: '', metModel: '', dimB: '135 (5.31)', dimC: '118 (4.64)', clearance: '118 (4.64)' },
          { impSize: '1-7/8"', impModel: 'XST5-4', metSize: 'M48', metModel: 'XST5-9', dimB: '139 (5.47)', dimC: '114 (4.48)', clearance: '114 (4.48)' },
          { impSize: '', impModel: '', metSize: '', metModel: '', dimB: '142 (5.59)', dimC: '120 (4.72)', clearance: '120 (4.72)' },
          { impSize: '2"', impModel: 'XST6-1', metSize: 'M52', metModel: 'XST6-5', dimB: '145 (5.70)', dimC: '120 (4.72)', clearance: '120 (4.72)' },
        ],
      },
      {
        model: "XST 6",
        maxLoad: "1500 (152.95)",
        hydArea: "100.03 (15.50)",
        dimA: "175.5 (6.90)",
        weight: "13.8 (30.42)",
        bolts: [
            { impSize: '', impModel: '', metSize: 'M60', metModel: 'XST6-7', dimB: '148 (5.82)', dimC: '138 (5.43)', clearance: '259 (10.19)' },
            { impSize: '', impModel: '', metSize: '', metModel: '', dimB: '154 (6.06)', dimC: '138 (5.43)', clearance: '259 (10.19)' },
            { impSize: '2-3/4"', impModel: 'XST6-4', metSize: 'M68', metModel: 'XST6-9', dimB: '161 (6.33)', dimC: '153 (6.02)', clearance: '272 (10.70)' },
            { impSize: '', impModel: '', metSize: '', metModel: '', dimB: '167 (6.57)', dimC: '156 (6.14)', clearance: '284 (11.18)' },
        ],
      },
      {
        model: "XST 7",
        maxLoad: "2500 (254.92)",
        hydArea: "166.71 (25.84)",
        dimA: "219 (8.62)",
        weight: "23 (50.70)",
        bolts: [
            { impSize: '3"', impModel: 'XST6-1', metSize: 'M76', metModel: 'XST7-6', dimB: '167 (6.57)', dimC: '157 (6.18)', clearance: '294 (11.57)' },
            { impSize: '', impModel: '', metSize: '', metModel: '', dimB: '171 (6.73)', dimC: '158 (6.22)', clearance: '307 (12.08)' },
            { impSize: '3-1/4"', impModel: 'XST67-3', metSize: 'M85', metModel: 'XST7-8', dimB: '180 (7.08)', dimC: '190 (7.48)', clearance: '310 (12.20)' },
            { impSize: '', impModel: '', metSize: '', metModel: '', dimB: '186 (7.32)', dimC: '190 (7.48)', clearance: '320 (12.59)' },
            { impSize: '', impModel: '', metSize: '', metModel: '', dimB: '180 (7.08)', dimC: '205 (8.07)', clearance: '332 (13.07)' },
        ],
      },
      {
        model: "XST 8",
        maxLoad: "3200 (326.30)",
        hydArea: "213.39 (33.07)",
        dimA: "252 (9.92)",
        weight: "32 (70.54)",
        bolts: [
            { impSize: '3-1/4"', impModel: 'XST 8-1', metSize: 'M90', metModel: 'XST 8-4', dimB: '186 (7.32)', dimC: '200 (7.87)', clearance: '339 (13.34)' },
            { impSize: '', impModel: '', metSize: '', metModel: '', dimB: '186 (7.32)', dimC: '200 (7.87)', clearance: '346 (13.62)' },
            { impSize: '3-3/4"', impModel: 'XST 8-2', metSize: 'M100', metModel: 'XST8-6', dimB: '192 (7.55)', dimC: '200 (7.87)', clearance: '352 (13.85)' },
            { impSize: '', impModel: '', metSize: '', metModel: '', dimB: '199 (7.83)', dimC: '210 (8.26)', clearance: '364 (14.33)' },
        ],
      },
    ],
  };

  // Data for the XBT Top Side Bolt Tensioner (now the first table)
  const xbtTableData = {
    rows: [
      {
        model: "XBT-3",
        bolt: ["M16", "M18", "M20", "M22", "M24"],
        size: ["", '3/4"', "", '7/8"', '1"'],
        cyl: "234.2",
        area: "15.7",
        dim: ["75", "32.5", "168", "90", "62", "47-51"],
        weight: "3",
      },
      {
        model: "XBT-5",
        bolt: ["M27", "M30", "M33", "M36"],
        size: ['1-1/8"', "", '1-1/4"', '1-3/8"'],
        cyl: "498.2",
        area: "33",
        dim: ["102", "47", "187", "106", "60", "65-71"],
        weight: "5.50",
      },
      {
        model: "XBT-9",
        bolt: ["M39", "M42", "M45", "M48"],
        size: ['1-1/2"', '1-5/8"', '1-3/4"', '1-7/8"'],
        cyl: "896.8",
        area: "59.7",
        dim: ["136", "61", "208", "120", "60", "86-93"],
        weight: "10",
      },
      {
        model: "XBT-13",
        bolt: ["M52", "M56", "M60"],
        size: ['2"', '2-1/4"', ''],
        cyl: "1245.0",
        area: "83",
        dim: ["160", "73", "231", "135", "62", "106-114"],
        weight: "16",
      },
      {
        model: "XBT-19",
        bolt: ["M64", "M68", "M72", "M76"],
        size: ['2-1/2"', "", '2-3/4"', '3"'],
        cyl: "1843.3",
        area: "123",
        dim: ["193", "86.5", "254", "150", "62", "129-135"],
        weight: "22",
      },
      {
        model: "XBT-27",
        bolt: ["M80", "M85", "M90", "M95"],
        size: ["", '3-1/4"', '3-1/2"', '3-3/4"'],
        cyl: "2640.5",
        area: "176",
        dim: ["233", "110", "286", "180", "73", "155-167"],
        weight: "24",
      },
      {
        model: "XBT-44",
        bolt: ["M100", "M110", "M120", "M125"],
        size: ['4"', "", '4-3/4"', ''],
        cyl: "4335.0",
        area: "289",
        dim: ["314", "121-140", "304-338", "181-197", "37-40", "210-233"],
        weight: "85",
      },
      {
        model: "XBT-54",
        bolt: ["M120", "M130", "M140"],
        size: ['4-3/4"', '5-1/4"', '5-1/2"'],
        cyl: "5404.0",
        area: "360",
        dim: ["344", "131-161", "354-388", "202-216", "42-47", "243-275"],
        weight: "125",
      },
    ],
  };

  return (
    <div className="bg-black text-white" style={{ fontFamily: 'Poppins, sans-serif' }}>
      {/* Header with white background */}
      <div className="bg-white py-6">
        <div className="flex flex-wrap items-center justify-center gap-4 text-black text-center">
          <span className="font-medium">Specialized Tools</span>
          <FaArrowRightLong className="w-4 h-4 mx-4" />
          <span className="font-medium">Bolt Tensioners</span>
        </div>
      </div>

      {/* Main content */}
      <div className="w-9/10 mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20 items-start">
          {/* Left Section */}
          <div className="space-y-6 flex flex-col items-center lg:items-start">
            {/* Product Image */}
            <div className="relative w-full flex justify-center">
              <div
                className="bg-white rounded-2xl p-6 border-t-[12px] border-r-[12px] border-red-600 shadow-[0_10px_30px_rgba(255,255,255,0.25)] hover:shadow-[0_10px_30px_rgba(208,26,26,0.6)] transition-shadow duration-300 rounded-3xl h-[250px] sm:h-[300px] md:h-[400px] w-full max-w-[500px] flex items-center justify-center"
              >
                <img
                  src="product5.png"
                  alt="Bolt Tensioner"
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
                Hydraulic Bolt Tensioners
              </h1>
              <div className="w-full rounded-2xl h-1 bg-red-600 mt-2"></div>
            </div>

            {/* Description */}
            <div className="text-2xl sm:text-lg md:text-2xl p-2 sm:p-1 font-base text-gray-200 leading-relaxed space-y-1 text-justify">
               <p className="text-body text-justify">
                A <strong>Top-Side Bolt Tensioner</strong> is designed to apply controlled tension from the top side of a joint. It ensures accurate preload and uniform tightening without frictional losses by elongating the bolt before the nut is secured.
              </p>
            </div>
          </div>
        </div>
      </div>

             <div className="w-11/12 mx-auto">
  <img
     src="Topsidebolttensionerblueprint.png"
     alt="Topsidebolttensionerblueprint"
     className="mx-auto mb-10 object-contain w-full"
  />
</div>

      
      {/* --- XBT SERIES: Technical Specifications Section --- */}
      <div className="w-9/10 mx-auto  px-4 py-12">
        <div className="mb-10">
            <h2 className="text-4xl text-center text-white mb-2" >
              TOP-SIDE BOLT TENSIONER
            </h2>
            
            <div className="w-100 rounded-2xl h-1 bg-red-600 mx-auto mt-2" style={{ maxWidth: '400px' }}></div>
        </div>

        <div className="border border-gray-600 rounded-lg overflow-x-auto no-scrollbar">
          <div className="overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            <table className="min-w-full min-w-max">
              <thead className="bg-gray-800 text-xl">
                <tr>
                  <th rowSpan="2" className="p-4 text-center border-r border-gray-700">Model</th>
                  <th colSpan="2" className="p-4 text-center border-r border-gray-700 text-red-500">Bolt Size</th>
                  <th colSpan="2" className="p-4 text-center border-r border-gray-700 text-red-500">Cylinder</th>
                  <th colSpan="6" className="p-4 text-center border-r border-gray-700 text-red-500">Dimension</th>
                  <th rowSpan="2" className="p-4 text-center">Weight</th>
                </tr>
                <tr className="font-medium text-gray-300">
                  <th className="p-3 font-medium text-center border-t border-r border-gray-700">Metric</th>
                  <th className="p-3 font-medium text-center border-t border-r border-gray-700">Inch</th>
                  <th className="p-3 font-medium text-center border-t border-r border-gray-700">KN</th>
                  <th className="p-3 font-medium text-center border-t border-r border-gray-700">Cm²</th>
                  <th className="p-3 font-medium text-center border-t border-r border-gray-700">A (mm)</th>
                  <th className="p-3 font-medium text-center border-t border-r border-gray-700">B (mm)</th>
                  <th className="p-3 font-medium text-center border-t border-r border-gray-700">C (mm)</th>
                  <th className="p-3 font-medium text-center border-t border-r border-gray-700">D (mm)</th>
                  <th className="p-3 font-medium text-center border-t border-r border-gray-700">E (mm)</th>
                  <th className="p-3 font-medium text-center border-t border-r border-gray-700">F (mm)</th>
                </tr>
              </thead>
              <tbody>
                {xbtTableData.rows.map((row, rowIndex) => (
                  <React.Fragment key={`xbt-${rowIndex}`}>
                    {row.bolt.map((bolt, boltIndex) => (
                      <tr key={`xbt-${rowIndex}-${boltIndex}`} className="bg-black text-center text-lg border-t border-gray-700">
                        {boltIndex === 0 && (
                          <td rowSpan={row.bolt.length} className="p-4 font-medium text-gray-300 border-r border-gray-700 align-middle">
                            {row.model}
                          </td>
                        )}
                        <td className="p-4 text-white border-r border-gray-700">{bolt}</td>
                        <td className="p-4 text-white border-r border-gray-700">{row.size[boltIndex]}</td>
                        {boltIndex === 0 && (
                          <>
                            <td rowSpan={row.bolt.length} className="p-4 text-white border-r border-gray-700 align-middle">{row.cyl}</td>
                            <td rowSpan={row.bolt.length} className="p-4 text-white border-r border-gray-700 align-middle">{row.area}</td>
                            {row.dim.map((dimValue, dimIndex) => (
                              <td key={dimIndex} rowSpan={row.bolt.length} className="p-4 text-white border-r border-gray-700 align-middle">
                                {dimValue}
                              </td>
                            ))}
                            <td rowSpan={row.bolt.length} className="p-4 font-medium text-gray-300 align-middle">
                              {row.weight}
                            </td>
                          </>
                        )}
                      </tr>
                    ))}
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default BoltTensionersPage;