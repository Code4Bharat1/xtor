"use client";
import React from "react";
import { BsDot } from "react-icons/bs";
import { FaArrowRightLong } from "react-icons/fa6";

const XFR = () => {
  // Master Technical Specifications & Dimensional Data from Catalog
  const xfrData = [
    {
      model: "XFR-0.7",
      drive: "3/4\"",
      torqueNm: "153 – 1,040",
      torqueFtLbs: "113 – 767",
      weightKg: "1",
      weightLbs: "3.1",
      r: "25",
      l: "105.2",
      h: "106.9",
      w: "45.3",
    },
    {
      model: "XFR-1",
      drive: "3/4\"",
      torqueNm: "266 – 1,741",
      torqueFtLbs: "196 – 1,284",
      weightKg: "2",
      weightLbs: "4.5",
      r: "28.6",
      l: "127.9",
      h: "124.9",
      w: "55.2",
    },
    {
      model: "XFR-3",
      drive: "1\"",
      torqueNm: "623 – 4,181",
      torqueFtLbs: "460 – 3,084",
      weightKg: "4",
      weightLbs: "9.45",
      r: "38.1",
      l: "165.9",
      h: "160.2",
      w: "73.7",
    },
    {
      model: "XFR-5",
      drive: "1.1/2\"",
      torqueNm: "1,090 – 7,267",
      torqueFtLbs: "804 – 5,360",
      weightKg: "7",
      weightLbs: "15.6",
      r: "47.2",
      l: "199.5",
      h: "188.2",
      w: "85.9",
    },
    {
      model: "XFR-8",
      drive: "1.1/2\"",
      torqueNm: "1,559 – 10,521",
      torqueFtLbs: "1,150 – 7,760",
      weightKg: "9",
      weightLbs: "20.75",
      r: "52.5",
      l: "224.2",
      h: "212.7",
      w: "98",
    },
    {
      model: "XFR-10",
      drive: "1.1/2\"",
      torqueNm: "2,440 – 15,921",
      torqueFtLbs: "1,800 – 11,743",
      weightKg: "13",
      weightLbs: "29.2",
      r: "60.3",
      l: "252",
      h: "236",
      w: "110.5",
    },
    {
      model: "XFR-20",
      drive: "2.1/2\"",
      torqueNm: "3,742 – 24,256",
      torqueFtLbs: "2,760 – 17,890",
      weightKg: "22",
      weightLbs: "47.7",
      r: "66",
      l: "295.7",
      h: "260.6",
      w: "128.8",
    },
    {
      model: "XFR-35",
      drive: "2.1/2\"",
      torqueNm: "6,650 – 43,156",
      torqueFtLbs: "4,905 – 31,830",
      weightKg: "38",
      weightLbs: "82.75",
      r: "81",
      l: "363.4",
      h: "313.2",
      w: "165.4",
    },
  ];

  return (
    <div className="bg-black text-white">
      {/* Compact Breadcrumbs */}
      <div className="bg-white py-3">
        <div className="flex flex-wrap items-center justify-center gap-2 text-black text-center text-xs sm:text-sm font-medium">
          <span>Specialized Tools</span>
          <FaArrowRightLong className="w-3 h-3 mx-2 text-red-600" />
          <span>Hydraulic Torque Wrench</span>
          <FaArrowRightLong className="w-3 h-3 mx-2 text-red-600" />
          <span className="text-red-600 font-semibold">XFR Series (Front Reaction Arm)</span>
        </div>
      </div>

      {/* Main Hero & Showcase */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-center">
          {/* Left Section - Product Image Card */}
          <div className="space-y-4 flex flex-col items-center">
            <div className="relative w-full flex justify-center">
              <div className="bg-white rounded-2xl p-4 border-t-[8px] border-r-[8px] border-red-600 shadow-[0_8px_25px_rgba(255,255,255,0.12)] hover:shadow-[0_8px_25px_rgba(208,26,26,0.35)] transition-shadow duration-300 h-[210px] sm:h-[250px] md:h-[300px] w-full max-w-[380px] flex items-center justify-center">
                <img
                  src="/images/xfr.png"
                  alt="XTORC XFR Series Front Reaction Arm Square Drive Hydraulic Torque Wrench"
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    e.currentTarget.src = "/square_drive.png";
                  }}
                />
              </div>
            </div>

            {/* Catalog Download Button */}
            <div className="flex justify-center w-full">
              <a
                href="/XTORC_BROCHURE.pdf"
                download="XTORC_BROCHURE.pdf"
                className="bg-white text-red-600 px-6 py-2.5 rounded-xl text-sm sm:text-base font-semibold border-2 border-red-600 hover:bg-red-700 hover:text-white transition-all duration-300 shadow"
              >
                Download Catalog
              </a>
            </div>
          </div>

          {/* Right Section - Overview */}
          <div className="space-y-4">
            <div className="w-fit">
              <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-1.5 leading-snug">
                XFR SERIES FRONT REACTION ARM SQUARE DRIVE HYDRAULIC TORQUE WRENCHES
              </h1>
              <div className="w-full rounded-full h-1 bg-red-600"></div>
            </div>

            <div className="text-justify text-gray-300 text-xs sm:text-sm leading-relaxed space-y-3">
              <p>
                This hydraulic torque wrench is the ideal choice for you to deal with a variety of large bolting challenges. The innovative reaction drive technology effectively avoids the risk of torsion associated with conventional spanners and ensures safe operation.
              </p>
              <p>
                The wide torque range and flexible configuration options allow you to work across a variety of industrial applications, providing rugged dependability, fast bolting cycles, and repeatable torque precision.
              </p>
            </div>

            {/* Mini Spec Badges from Catalog */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-2">
              <div className="bg-zinc-900 border border-white/15 p-2 rounded-lg text-center">
                <span className="block text-[10.5px] text-gray-400 uppercase font-medium">Max Torque</span>
                <span className="text-xs sm:text-sm font-bold text-red-500">43,156 Nm</span>
              </div>
              <div className="bg-zinc-900 border border-white/15 p-2 rounded-lg text-center">
                <span className="block text-[10.5px] text-gray-400 uppercase font-medium">Drive Range</span>
                <span className="text-xs sm:text-sm font-bold text-white">3/4" – 2.1/2"</span>
              </div>
              <div className="bg-zinc-900 border border-white/15 p-2 rounded-lg text-center">
                <span className="block text-[10.5px] text-gray-400 uppercase font-medium">Accuracy</span>
                <span className="text-xs sm:text-sm font-bold text-white">± 3%</span>
              </div>
              <div className="bg-zinc-900 border border-white/15 p-2 rounded-lg text-center">
                <span className="block text-[10.5px] text-gray-400 uppercase font-medium">Max Pressure</span>
                <span className="text-xs sm:text-sm font-bold text-white">700 bar</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Key Features from Catalog */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pb-8">
        <div className="space-y-3">
          <h3 className="text-lg sm:text-xl font-semibold text-red-600">Features:</h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
            {[
              "700 bar maximum working pressure.",
              "360 degree Reaction Arm — Easy to work in any position.",
              "Consistent torque value output with accuracy up to ±3%.",
              "This hydraulic torque wrench is the ideal choice for you to deal with a variety of large bolting challenges.",
              "The innovative reaction drive technology effectively avoids the risk of torsion associated with conventional spanners and ensures safe operation.",
              "The wide torque range and flexible configuration options allow you to work in a variety of applications.",
            ].map((feature, index) => (
              <li key={index} className="flex items-start text-gray-300 text-xs sm:text-sm">
                <BsDot className="text-red-600 w-5 h-5 flex-shrink-0 -mt-0.5" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* ======================================================== */}
      {/* 1st: MASTER TECHNICAL SPECIFICATIONS TABLE (From Catalog) */}
      {/* ======================================================== */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-4">
        <h2 className="text-xl sm:text-2xl font-bold text-white mb-1.5 text-center">Technical Specifications</h2>
        <div className="rounded-full h-1 bg-red-600 mx-auto" style={{ maxWidth: "260px" }}></div>
      </div>

      <div className="w-full max-w-6xl mx-auto px-2 sm:px-4 pb-8 mt-4">
        <div className="w-full custom-table-scroll shadow-lg rounded-lg border border-white/20">
          <table className="w-full border-collapse min-w-[780px] text-xs">
            <thead>
              <tr className="bg-gray-800 text-white font-medium">
                <th rowSpan={2} className="py-2.5 px-3 text-center border border-white/20 bg-gray-700 font-semibold w-[13%]">
                  Model Number
                </th>
                <th rowSpan={2} className="py-2.5 px-2 text-center border border-white/20 bg-gray-700 font-semibold w-[10%]">
                  Drive (inch)
                </th>
                <th colSpan={2} className="py-2 px-2 text-center border border-white/20 bg-gray-700/90 font-semibold w-[28%]">
                  Torque
                </th>
                <th colSpan={2} className="py-2 px-2 text-center border border-white/20 bg-gray-700/90 font-semibold w-[18%]">
                  Weight
                </th>
                <th colSpan={4} className="py-2 px-2 text-center border border-white/20 bg-gray-700/90 font-semibold w-[31%]">
                  Dimensions (mm)
                </th>
              </tr>
              <tr className="bg-gray-800 text-white font-medium text-[11px]">
                <th className="py-1.5 px-2 text-center border border-white/20 bg-gray-700/70 font-semibold">(Nm)</th>
                <th className="py-1.5 px-2 text-center border border-white/20 bg-gray-700/70 font-semibold">Ft.lbs</th>
                <th className="py-1.5 px-2 text-center border border-white/20 bg-gray-700/70 font-semibold">KG</th>
                <th className="py-1.5 px-2 text-center border border-white/20 bg-gray-700/70 font-semibold">Lbs.</th>
                <th className="py-1.5 px-2 text-center border border-white/20 bg-gray-700/70 font-semibold">R</th>
                <th className="py-1.5 px-2 text-center border border-white/20 bg-gray-700/70 font-semibold">L</th>
                <th className="py-1.5 px-2 text-center border border-white/20 bg-gray-700/70 font-semibold">H</th>
                <th className="py-1.5 px-2 text-center border border-white/20 bg-gray-700/70 font-semibold">W</th>
              </tr>
            </thead>
            <tbody>
              {xfrData.map((row, index) => (
                <tr key={index} className="leading-normal hover:bg-zinc-900/60 transition-colors">
                  <td className="py-2 px-3 text-center border border-white/20 bg-gray-700/80 font-bold text-white font-mono">
                    {row.model}
                  </td>
                  <td className="py-2 px-2 text-center border border-white/20 bg-black/80 font-medium text-gray-200">
                    {row.drive}
                  </td>
                  <td className="py-2 px-2 text-center border border-white/20 bg-black/80 font-bold text-red-500">
                    {row.torqueNm}
                  </td>
                  <td className="py-2 px-2 text-center border border-white/20 bg-black/80 font-medium text-gray-300">
                    {row.torqueFtLbs}
                  </td>
                  <td className="py-2 px-2 text-center border border-white/20 bg-black/80 font-semibold text-white">
                    {row.weightKg}
                  </td>
                  <td className="py-2 px-2 text-center border border-white/20 bg-black/80 font-medium text-gray-400">
                    {row.weightLbs}
                  </td>
                  <td className="py-2 px-2 text-center border border-white/20 bg-black/80 font-normal text-gray-200">
                    {row.r}
                  </td>
                  <td className="py-2 px-2 text-center border border-white/20 bg-black/80 font-normal text-gray-200">
                    {row.l}
                  </td>
                  <td className="py-2 px-2 text-center border border-white/20 bg-black/80 font-normal text-gray-200">
                    {row.h}
                  </td>
                  <td className="py-2 px-2 text-center border border-white/20 bg-black/80 font-normal text-gray-200">
                    {row.w}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* ======================================================== */}
      {/* 2nd: PHOTO / ENGINEERING SCHEMATIC DIAGRAM               */}
      {/* ======================================================== */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-4">
        <h2 className="text-xl sm:text-2xl font-bold text-white mb-1.5 text-center">Engineering Drawing & Dimensions</h2>
        <div className="rounded-full h-1 bg-red-600 mx-auto" style={{ maxWidth: "340px" }}></div>
        <p className="text-center text-xs text-gray-400 mt-2">
          Schematic diagram displaying critical clearance dimensions: Nose Radius (R), Length (L), Height (H), and Width (W)
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-2 sm:px-4 pt-4 pb-6 flex justify-center">
        <div className="w-full max-w-2xl bg-zinc-950 border border-white/10 rounded-xl p-3 sm:p-4 overflow-hidden flex items-center justify-center shadow-xl">
          <img
            src="/images/BoltingTools/xfr-dimensions-diagram.jpg"
            alt="XFR Series Engineering Drawing Schematic Dimensions (R, L, H, W)"
            className="w-auto max-w-full max-h-[220px] sm:max-h-[270px] object-contain rounded"
          />
        </div>
      </div>

      {/* ======================================================== */}
      {/* 3rd: DIMENSIONAL SPECIFICATIONS BREAKDOWN TABLE           */}
      {/* ======================================================== */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-4">
        <h2 className="text-xl sm:text-2xl font-bold text-white mb-1.5 text-center">Dimensional Data (mm)</h2>
        <div className="rounded-full h-1 bg-red-600 mx-auto" style={{ maxWidth: "240px" }}></div>
      </div>

      <div className="w-full max-w-6xl mx-auto px-2 sm:px-4 pb-12 mt-4">
        <div className="w-full custom-table-scroll shadow-lg rounded-lg border border-white/20">
          <table className="w-full border-collapse min-w-[700px] text-xs">
            <thead>
              <tr className="bg-gray-800 text-white font-medium">
                <th className="py-2.5 px-3 text-center border border-white/20 bg-gray-700 font-semibold w-[16%]">
                  Model
                </th>
                <th className="py-2.5 px-2 text-center border border-white/20 bg-gray-700 font-semibold w-[14%]">
                  Square Drive
                </th>
                <th className="py-2.5 px-2 text-center border border-white/20 font-semibold w-[17.5%]">
                  R (Radius mm)
                </th>
                <th className="py-2.5 px-2 text-center border border-white/20 font-semibold w-[17.5%]">
                  L (Length mm)
                </th>
                <th className="py-2.5 px-2 text-center border border-white/20 font-semibold w-[17.5%]">
                  H (Height mm)
                </th>
                <th className="py-2.5 px-2 text-center border border-white/20 font-semibold w-[17.5%]">
                  W (Width mm)
                </th>
              </tr>
            </thead>
            <tbody>
              {xfrData.map((row, index) => (
                <tr key={index} className="leading-normal hover:bg-zinc-900/60 transition-colors">
                  <td className="py-2 px-3 text-center border border-white/20 bg-gray-700/80 font-bold text-white font-mono">
                    {row.model}
                  </td>
                  <td className="py-2 px-2 text-center border border-white/20 bg-black/80 font-medium text-gray-200">
                    {row.drive}
                  </td>
                  <td className="py-2 px-2 text-center border border-white/20 bg-black/80 font-bold text-red-400">
                    {row.r} mm
                  </td>
                  <td className="py-2 px-2 text-center border border-white/20 bg-black/80 font-normal text-gray-200">
                    {row.l} mm
                  </td>
                  <td className="py-2 px-2 text-center border border-white/20 bg-black/80 font-normal text-gray-200">
                    {row.h} mm
                  </td>
                  <td className="py-2 px-2 text-center border border-white/20 bg-black/80 font-normal text-gray-200">
                    {row.w} mm
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default XFR;