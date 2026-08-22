import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const SpringReturnBolt = () => {
  // Data for the XST Series Spring Return Bolt Tensioner table
  const tableData = [
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
        { impSize: '1"', impModel: 'XST3-1', metSize: 'M24', metModel: 'XST3-5', dimB: '', dimC: '', clearance: '' }, // Data seems incomplete in image for second row
      ],
    },
    {
      model: "XST 3",
      maxLoad: "450 (45.88)",
      hydArea: "30.01 (4.65)",
      dimA: "103 (4.05)",
      weight: "4.1 (9.03)",
      bolts: [
        { impSize: '1-1/8"', impModel: 'XST3-2', metSize: 'M30', metModel: 'XST3-7', dimB: '117 (4.60)', dimC: '80 (3.14)', clearance: '80 (3.14)' }, // Clearance seems duplicated from Dim C?
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
        { impSize: '1-3/8"', impModel: 'XST4-2', metSize: 'M36', metModel: 'XST4-6', dimB: '123 (4.84)', dimC: '96 (6.77)', clearance: '96 (6.77)' }, // Clearance matches Dim C
        { impSize: '', impModel: '', metSize: '', metModel: '', dimB: '126 (4.96)', dimC: '96 (3.77)', clearance: '96 (3.77)' }, // Clearance matches Dim C again
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
        { impSize: '1-7/8"*', impModel: 'XST5-4', metSize: 'M48', metModel: 'XST5-9', dimB: '139 (5.47)', dimC: '114 (4.48)', clearance: '114 (4.48)' }, // Note the asterisk in the image
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
        { impSize: '', impModel: '', metSize: '', metModel: '', dimB: '186 (7.32)', dimC: '190 (7.48)', clearance: '320 (12.59)' }, // Image seems to show 186/190/320 for this line
        { impSize: '', impModel: '', metSize: '', metModel: '', dimB: '180 (7.08)', dimC: '205 (8.07)', clearance: '332 (13.07)' }, // Image seems to show 180/205/332 for this line
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
  ];

  return (
    <div className="bg-black text-white" style={{ fontFamily: 'Poppins, sans-serif' }}>
      {/* Header with white background */}
      <div className="bg-white py-6">
        <div className="flex flex-wrap items-center justify-center gap-4 text-black text-center">
          <span className="font-medium">Specialized Tools</span>
          <FaArrowRightLong className="w-4 h-4 mx-4" />
          <span className="font-medium">Spring Return Hydraulic Bolt Tensioner</span>
        </div>
      </div>

      {/* Main content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20 items-start">
          {/* Left Section */}
          <div className="space-y-6 flex flex-col items-center lg:items-start">
            {/* Product Image Placeholder */}
            <div className="relative w-full flex justify-center">
              <div
                className="bg-white rounded-2xl p-6 border-t-[12px] border-r-[12px] border-red-600 shadow-[0_10px_30px_rgba(255,255,255,0.25)] hover:shadow-[0_10px_30px_rgba(208,26,26,0.6)] transition-shadow duration-300 rounded-3xl h-[250px] sm:h-[300px] md:h-[400px] w-full max-w-[500px] flex items-center justify-center text-gray-500"
              >
                {/* Replace with your image */}
                <img
                  src="Springreturnbolt.png"
                  alt="Springreturnbolt"
                  className="w-[400px] h-[350px] object-contain"
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
                Spring Return Bolt Tensioner
              </h1>
              <div className="w-full rounded-2xl h-1 bg-red-600 mt-2"></div>
            </div>

            {/* Description */}
            <div className="text-body text-justify">
              <p>
                A <strong>Spring Return Bolt Tensioner</strong> is a hydraulic tool designed for fast and reliable bolt tightening. It uses hydraulic pressure to stretch the bolt, and an integrated spring mechanism automatically retracts the piston after the operation. This ensures <strong>rapid, safe, and efficient tensioning</strong>, making it ideal for critical applications where speed and accuracy are essential.
              </p>
            </div>
          </div>
        </div>
      </div>


      <img
        src="Springreturnhydraulicboltblueprint.png"
        alt="Springreturnhydraulicboltblueprint"
        className="w-[400px] h-[350px] mx-auto object-contain"
      />

      {/* --- Technical Specifications Section --- */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-10 text-center">
          <h2 className="text-4xl text-white mb-2 font-bold" >
            Spring Return Hydraulic Bolt Tensioner
          </h2>
          <p className="text-2xl sm:text-3xl text-gray-300 font-semibold" >XST SERIES</p>
          <div className="w-160 rounded-2xl h-1 bg-red-600 mx-auto mt-2" style={{ maxWidth: '600px' }}></div>
        </div>

        {/* Data Sheet Table */}
        <div className="border border-gray-600 rounded-xl overflow-hidden shadow-2xl w-full max-w-6xl mx-auto">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-xs sm:text-sm">
              <thead className="bg-gray-800 text-white">
                <tr className="leading-tight font-bold text-xs sm:text-sm">
                  <th rowSpan="2" className="py-3 px-2 text-center border-r border-gray-700 w-[8%]">Model</th>
                  <th colSpan="4" className="py-3 px-2 text-center border-r border-gray-700 text-red-500 w-[36%]">BOLT SIZE</th>
                  <th rowSpan="2" className="py-3 px-2 text-center border-r border-gray-700 w-[9%]">Max. Load <br /> KN (Ton)</th>
                  <th rowSpan="2" className="py-3 px-2 text-center border-r border-gray-700 w-[9%]">Hyd. Area <br /> cm² (in²)</th>
                  <th rowSpan="2" className="py-3 px-2 text-center border-r border-gray-700 w-[7%]">A <br /> mm (in)</th>
                  <th rowSpan="2" className="py-3 px-2 text-center border-r border-gray-700 w-[7%]">B <br /> mm (in)</th>
                  <th rowSpan="2" className="py-3 px-2 text-center border-r border-gray-700 w-[7%]">C <br /> mm (in)</th>
                  <th rowSpan="2" className="py-3 px-2 text-center border-r border-gray-700 w-[9%]">Clearance <br /> Dmm (in)</th>
                  <th rowSpan="2" className="py-3 px-2 text-center w-[8%]">Weight <br /> Kg (lbs)</th>
                </tr>
                <tr className="font-medium text-gray-300 leading-tight text-[11px] sm:text-xs">
                  <th className="py-2 px-1.5 font-medium text-center border-t border-r border-gray-700">Imperial</th>
                  <th className="py-2 px-1.5 font-medium text-center border-t border-r border-gray-700">Model</th>
                  <th className="py-2 px-1.5 font-medium text-center border-t border-r border-gray-700">Metric</th>
                  <th className="py-2 px-1.5 font-medium text-center border-t border-r border-gray-700">Model</th>
                </tr>
              </thead>
              <tbody>
                {tableData.map((row, rowIndex) => (
                  <React.Fragment key={rowIndex}>
                    {row.bolts.map((bolt, boltIndex) => (
                      <tr key={`${rowIndex}-${boltIndex}`} className="bg-black hover:bg-zinc-900/60 transition-colors text-center border-t border-gray-700 leading-normal">
                        {boltIndex === 0 && (
                          <td rowSpan={row.bolts.length} className="py-2.5 px-2 font-medium text-red-400 border-r border-gray-700 align-middle break-words">
                            {row.model}
                          </td>
                        )}
                        <td className="py-2 px-1.5 text-white border-r border-gray-700 break-words">{bolt.impSize || '-'}</td>
                        <td className="py-2 px-1.5 text-white border-r border-gray-700 break-words">{bolt.impModel || '-'}</td>
                        <td className="py-2 px-1.5 text-white border-r border-gray-700 break-words">{bolt.metSize || '-'}</td>
                        <td className="py-2 px-1.5 text-white border-r border-gray-700 break-words">{bolt.metModel || '-'}</td>

                        {boltIndex === 0 && (
                          <>
                            <td rowSpan={row.bolts.length} className="py-2.5 px-2 text-white border-r border-gray-700 align-middle break-words">{row.maxLoad}</td>
                            <td rowSpan={row.bolts.length} className="py-2.5 px-2 text-white border-r border-gray-700 align-middle break-words">{row.hydArea}</td>
                            <td rowSpan={row.bolts.length} className="py-2.5 px-2 text-white border-r border-gray-700 align-middle break-words">{row.dimA}</td>
                          </>
                        )}
                        <td className="py-2 px-1.5 text-white border-r border-gray-700 break-words">{bolt.dimB}</td>
                        <td className="py-2 px-1.5 text-white border-r border-gray-700 break-words">{bolt.dimC}</td>
                        <td className="py-2 px-1.5 text-white border-r border-gray-700 break-words">{bolt.clearance}</td>
                        {boltIndex === 0 && (
                          <td rowSpan={row.bolts.length} className="py-2.5 px-2 font-medium text-gray-300 align-middle break-words">
                            {row.weight}
                          </td>
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

export default SpringReturnBolt;