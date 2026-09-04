"use client";
import React from "react";
import { BsDot } from "react-icons/bs";
import { FaArrowRightLong } from "react-icons/fa6";

const XSL = () => {
  // Technical Specifications Data for XSL Slim Line
  const specTableData = {
    headers: ["", "Unit", "XSL-2", "XSL-4", "XSL-8", "XSL-14", "XSL-16", "XSL-20", "XSL-30"],
    rows: [
      { label: "Hex Range (Metric)", unit: "mm", values: ["19-60", "30-80", "50-100", "65-115", "75-130", "80-145", "95-175"] },
      { label: "Hex Range (Imperial)", unit: "inch", values: ['3/4"-2.3/8"', '1.1/4"-3.1/8"', '2"-3.7/8"', '2.1/2"-4.1/2"', '3"-5.1/8"', '3.1/8"-5.3/4"', '3.3/4"-6.7/8"'] },
      { label: "Min. Torque", unit: "Nm", values: ["240", "580", "1100", "1950", "2380", "2850", "4200"] },
      { label: "Max. Torque", unit: "Nm", values: ["2400", "5850", "11200", "19600", "24000", "28800", "42500"] },
      { label: "Max. Torque", unit: "Ft-lbs", values: ["1770", "4315", "8260", "14455", "17700", "21240", "31345"] },
      { label: "Power Head Weight", unit: "Kg", values: ["1.4", "2.3", "4.2", "7.8", "9.2", "11.5", "16.8"] },
    ],
  };

  // Dimensional Data for XSL Slim Line
  const dimTableData = {
    headers: ["", "Unit", "XSL-2", "XSL-4", "XSL-8", "XSL-14", "XSL-16", "XSL-20", "XSL-30"],
    rows: [
      { label: "Cylinder Length (L1)", unit: "mm", values: ["192", "248", "302", "364", "388", "425", "482"] },
      { label: "Overall Length (L2)", unit: "mm", values: ["250", "312", "378", "445", "472", "515", "585"] },
      { label: "Cylinder Height (H1)", unit: "mm", values: ["102", "136", "170", "205", "220", "238", "272"] },
      { label: "Link Height (H2)", unit: "mm", values: ["98", "132", "165", "198", "212", "230", "264"] },
      { label: "Overall Width (W)", unit: "mm", values: ["32", "42", "53", "64", "70", "78", "92"] },
      { label: "Min. Nose Radius (R)", unit: "mm", values: ["26", "35", "47", "58", "64", "71", "84"] },
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
                          ${index === 0 ? "bg-gray-700 w-[18%] font-semibold text-left px-2" : index === 1 ? "bg-gray-700 w-[6%] font-semibold" : "w-[9%]"}`}
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.rows.map((row, rowIndex) => (
              <tr key={rowIndex} className="leading-normal hover:bg-zinc-900/60 transition-colors">
                <td className="py-1.5 px-2 text-left border-t border-b border-l border-white/20 bg-gray-700/80 font-semibold break-words">
                  {row.label}
                </td>
                <td className="py-1.5 px-1 text-center border-t border-b border-l border-r border-white/20 bg-gray-700/80 font-semibold break-words">
                  {row.unit}
                </td>
                {row.values.map((value, colIndex) => (
                  <td
                    key={colIndex}
                    className="py-1.5 px-1 text-center border-t border-b border-r border-white/20 bg-black/80 font-normal text-white break-words"
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
          <span className="text-red-600 font-semibold">XSL Series</span>
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
                  src="/images/xsl.png"
                  alt="XTORC XSL Series Hydraulic Torque Wrench"
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    e.currentTarget.src = "/product2.png";
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
                XSL Series - Slim Line Hydraulic Torque Wrench
              </h1>
              <div className="w-full rounded-full h-1 bg-red-600"></div>
            </div>

            <div className="text-justify text-gray-300 text-xs sm:text-sm leading-relaxed space-y-2.5">
              <p>
                The XTORC XSL Series is an ultra-slim line, low-profile hydraulic torque wrench engineered specifically for extremely tight bolting clearances where standard tools cannot fit. Designed with an ultra-compact nose radius and interchangeable ratchet links, the XSL provides maximum torque delivery on narrow flange connections, pipeline valves, heat exchangers, and restricted casing bolts.
              </p>
              <p>
                Built using forged aircraft-grade alloy steel, the XSL delivers optimum strength-to-weight performance. Its modular design allows quick field interchangeability of hex links across a comprehensive spectrum of nut sizes without disassembling the power drive cylinder.
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
              "Ultra-low profile slim nose radius for maximum accessibility in narrow clearance flanges",
              "Direct hex drive mechanism eliminates side-load stress and socket slippage",
              "Interchangeable hex ratchet links covering broad imperial and metric nut sizes",
              "Manufactured from high-strength forged alloy steel and aircraft-grade aluminum",
              "360° × 360° multi-directional swivel manifold for effortless hose management",
              "Repeatable torque accuracy within ±3% certified across the entire operational range",
              "Quick-disconnect link pins for rapid on-site hex changes without special tooling",
              "In-line cylinder reaction point reducing internal wear and maximizing tool longevity",
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

export default XSL;