"use client";
import React from "react";
import { BsDot } from "react-icons/bs";
import { FaArrowRightLong } from "react-icons/fa6";

const XFR = () => {
  // Technical Specifications Data
  const specTableData = {
    headers: ["", "Unit", "XFR-07", "XFR-1", "XFR-3", "XFR-5", "XFR-8", "XFR-10", "XFR-20", "XFR-25"],
    rows: [
      { label: "Sq. Drive", unit: "inch", values: ['3/4"', '3/4"', '1"', '1.1/2"', '1.1/2"', '1.1/2"', '2.1/2"', '2.1/2"'] },
      { label: "Min. Torque", unit: "Nm", values: ["120", "180", "460", "760", "1100", "1480", "2750", "3500"] },
      { label: "Max. Torque", unit: "Nm", values: ["1180", "1820", "4600", "7550", "10950", "14800", "27800", "35200"] },
      { label: "Bolt Size", unit: "mm", values: ["14-30", "16-36", "22-48", "27-56", "30-64", "36-72", "42-90", "48-100"] },
      { label: "Weight", unit: "Kg", values: ["1.9", "2.6", "5.1", "9.7", "11.2", "15.0", "26.5", "35.8"] },
    ],
  };

  // Dimensional Data
  const dimTableData = {
    headers: ["", "Unit", "XFR-07", "XFR-1", "XFR-3", "XFR-5", "XFR-8", "XFR-10", "XFR-20", "XFR-25"],
    rows: [
      { label: "Body Length (L1)", unit: "mm", values: ["112", "146", "180", "215", "225", "248", "308", "325"] },
      { label: "Body Length (L1)", unit: "inch", values: ["4.41", "5.75", "7.09", "8.46", "8.86", "9.76", "12.13", "12.80"] },
      { label: "Overall Length (L2)", unit: "mm", values: ["142", "176", "230", "278", "295", "320", "388", "406"] },
      { label: "Overall Length (L2)", unit: "inch", values: ["5.59", "6.93", "9.06", "10.94", "11.61", "12.60", "15.28", "15.98"] },
      { label: "Tool Width (H1)", unit: "mm", values: ["44", "54", "71", "84", "94", "104", "115", "122"] },
      { label: "Tool Width (H1)", unit: "inch", values: ["1.73", "2.13", "2.80", "3.31", "3.70", "4.09", "4.53", "4.80"] },
      { label: "Overall Width (H2)", unit: "mm", values: ["66", "77", "96", "130", "136", "144", "185", "202"] },
      { label: "Overall Width (H2)", unit: "inch", values: ["2.60", "3.03", "3.78", "5.12", "5.35", "5.67", "7.28", "7.95"] },
      { label: "Tool Height (H3)", unit: "mm", values: ["79", "97", "117", "151", "169", "184", "222", "248"] },
      { label: "Tool Height (H3)", unit: "inch", values: ["3.11", "3.82", "4.61", "5.94", "6.65", "7.24", "8.74", "9.76"] },
      { label: "Overall Height (H4)", unit: "mm", values: ["110", "138", "178", "201", "219", "234", "272", "299"] },
      { label: "Overall Height (H4)", unit: "inch", values: ["4.33", "5.43", "7.01", "7.91", "8.62", "9.21", "10.71", "11.77"] },
      { label: "Tool Radius Around Bolt (R1)", unit: "mm", values: ["22", "27", "35", "40", "48", "52", "60", "67"] },
      { label: "Tool Radius Around Bolt (R1)", unit: "inch", values: ["0.87", "1.06", "1.38", "1.57", "1.89", "2.05", "2.36", "2.64"] },
      { label: "Reaction Reach (R2)", unit: "mm", values: ["70", "87", "113", "142", "155", "156", "188", "201"] },
      { label: "Reaction Reach (R2)", unit: "inch", values: ["2.76", "3.43", "4.45", "5.59", "6.10", "6.14", "7.40", "7.91"] },
    ],
  };

  const renderTable = (data) => (
    <div className="w-full max-w-6xl mx-auto px-2 sm:px-4 pb-6 overflow-x-auto mt-2">
      <div className="w-full shadow-lg rounded-lg overflow-hidden border border-white/20">
        <table className="w-full border-collapse min-w-[780px] text-xs">
          <thead>
            <tr className="bg-gray-800 text-white font-medium">
              {data.headers.map((header, index) => (
                <th
                  key={index}
                  className={`py-2 px-1 text-center border-l border-r border-t border-white/20 break-words leading-tight 
                          ${index === 0 ? "bg-gray-700 w-[16%] font-semibold text-left px-2" : index === 1 ? "bg-gray-700 w-[6%] font-semibold" : "w-[8.5%]"}`}
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.rows.map((row, rowIndex) => (
              <tr key={rowIndex} className="leading-normal hover:bg-zinc-900/60 transition-colors">
                <td
                  className={`py-1.5 px-2 text-left border-t border-b border-l border-white/20 
                                bg-gray-700/80 font-semibold break-words 
                                ${row.unit === "mm" ? "border-b-0" : "border-b"}`}
                >
                  {row.label}
                </td>
                <td
                  className="py-1.5 px-1 text-center border-t border-b border-l border-r border-white/20 
                                bg-gray-700/80 font-semibold break-words"
                >
                  {row.unit}
                </td>
                {row.values.map((value, colIndex) => (
                  <td
                    key={colIndex}
                    className="py-1.5 px-1 text-center border-t border-b border-r border-white/20 
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
      {/* Compact Breadcrumbs */}
      <div className="bg-white py-3">
        <div className="flex flex-wrap items-center justify-center gap-2 text-black text-center text-xs sm:text-sm font-medium">
          <span>Specialized Tools</span>
          <FaArrowRightLong className="w-3 h-3 mx-2 text-red-600" />
          <span>Hydraulic Torque Wrench</span>
          <FaArrowRightLong className="w-3 h-3 mx-2 text-red-600" />
          <span className="text-red-600 font-semibold">XFR Series</span>
        </div>
      </div>

      {/* Main Hero & Showcase (Compact Size) */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-center">
          {/* Left Section - Compact Showcase Card */}
          <div className="space-y-4 flex flex-col items-center">
            <div className="relative w-full flex justify-center">
              <div className="bg-white rounded-2xl p-4 border-t-[8px] border-r-[8px] border-red-600 shadow-[0_8px_25px_rgba(255,255,255,0.12)] hover:shadow-[0_8px_25px_rgba(208,26,26,0.35)] transition-shadow duration-300 h-[190px] sm:h-[230px] md:h-[280px] w-full max-w-[360px] flex items-center justify-center">
                <img
                  src="/images/xfr.png"
                  alt="XTORC XFR Series Hydraulic Torque Wrench"
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    e.currentTarget.src = "/square_drive.png";
                  }}
                />
              </div>
            </div>

            {/* Catalog Download Only (Request Quote Removed) */}
            <div className="flex justify-center w-full">
              <a
                href="/XTORC BROCHURE.pdf"
                download
                className="bg-white text-red-600 px-6 py-2.5 rounded-xl text-sm sm:text-base font-semibold border-2 border-red-600 hover:bg-red-700 hover:text-white transition-all duration-300 shadow"
              >
                Download Catalog
              </a>
            </div>
          </div>

          {/* Right Section - Overview */}
          <div className="space-y-4">
            <div className="w-fit">
              <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-1.5">
                XFR Series - Hydraulic Torque Wrench
              </h1>
              <div className="w-full rounded-full h-1 bg-red-600"></div>
            </div>

            <div className="text-justify text-gray-300 text-xs sm:text-sm leading-relaxed space-y-2.5">
              <p>
                The XTORC XFR Series is engineered for fast-cycle, heavy-duty industrial bolting where high repeatability and rugged dependability are essential. Featuring an advanced rapid-reaction drive mechanism and precision torque output, the XFR delivers exceptional speed without compromising torque accuracy.
              </p>
              <p>
                Crafted from aerospace-grade high-strength alloy, the XFR wrench combines exceptional torsional rigidity with lightweight ergonomics. Its advanced multi-axis 360° × 180° uni-swivel design guarantees unrestricted hose positioning in the most confined industrial environments.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Key Highlights (Compact) */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pb-8">
        <div className="space-y-3">
          <h3 className="text-lg sm:text-xl font-semibold text-red-600">Key Highlights:</h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
            {[
              "Fast-reaction drive system engineered for rapid industrial bolting cycles",
              "Aerospace-grade high-strength alloy body providing maximum durability at reduced weight",
              "360° × 180° multi-axis uni-swivel for unhindered hose positioning in tight workspaces",
              "Integrated anti-reverse pawl mechanism guaranteeing positive click ratcheting",
              "Torque output accuracy certified within ±3% repeatability across full pressure range",
              "High-pressure safety seals rated up to 700 bar (10,000 PSI) with zero leakage",
              "Universal square drive compatibility with all industrial standard impact sockets",
              "Quick-release reaction arm with 360° multi-position locking capability",
            ].map((highlight, index) => (
              <li key={index} className="flex items-start text-gray-300 text-xs sm:text-sm">
                <BsDot className="text-red-600 w-5 h-5 flex-shrink-0 -mt-0.5" />
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Table 1: Technical Specifications */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-4">
        <h2 className="text-xl sm:text-2xl font-bold text-white mb-1.5 text-center">Technical Specifications</h2>
        <div className="rounded-full h-1 bg-red-600 mx-auto" style={{ maxWidth: "260px" }}></div>
      </div>
      {renderTable(specTableData)}

      {/* Table 2: Dimensional Data */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-6 pb-8">
        <h2 className="text-xl sm:text-2xl font-bold text-white mb-1.5 text-center">Dimensional Data</h2>
        <div className="rounded-full h-1 bg-red-600 mx-auto" style={{ maxWidth: "220px" }}></div>
      </div>
      {renderTable(dimTableData)}
    </div>
  );
};

export default XFR;