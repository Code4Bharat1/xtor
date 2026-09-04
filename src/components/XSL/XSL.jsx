"use client";
import React from "react";
import { BsDot } from "react-icons/bs";
import { FaArrowRightLong } from "react-icons/fa6";

const XSL = () => {
  // 1. Technical Specifications Data from Page 12
  const mainSpecs = [
    {
      model: "XSL-2",
      hexMmMin: "19",
      hexMmMax: "60",
      hexInchMin: '7/8"',
      hexInchMax: '2.3/8"',
      minTorque: "293",
      maxTorque: "3,051",
      weight: "2.70",
    },
    {
      model: "XSL-4",
      hexMmMin: "46",
      hexMmMax: "80",
      hexInchMin: '1.13/16"',
      hexInchMax: '3.1/8"',
      minTorque: "608",
      maxTorque: "6,733",
      weight: "6.30",
    },
    {
      model: "XSL-8",
      hexMmMin: "60",
      hexMmMax: "90",
      hexInchMin: '2.3/8"',
      hexInchMax: '3.1/2"',
      minTorque: "1,192",
      maxTorque: "12,834",
      weight: "11.60",
    },
  ];

  // 2. Link Selection Data from Page 12 (Raw Data for 3 PowerHeads)
  const xth2Links = [
    { model: "XSL-2-19", inch: "—", mm: "19" },
    { model: "XSL-2-22", inch: "—", mm: "22" },
    { model: "XSL-2-22F", inch: "7/8\"", mm: "—" },
    { model: "XSL-2-24", inch: "—", mm: "24" },
    { model: "XSL-2-25F", inch: "1\"", mm: "—" },
    { model: "XSL-2-27", inch: "—", mm: "27" },
    { model: "XSL-2-27F", inch: "1.1/16\"", mm: "—" },
    { model: "XSL-2-30", inch: "—", mm: "30" },
    { model: "XSL-2-30F", inch: "1.3/16\"", mm: "—" },
    { model: "XSL-2-31F", inch: "1.1/4\"", mm: "—" },
    { model: "XSL-2-32", inch: "—", mm: "32" },
    { model: "XSL-2-33F", inch: "1-5/16\"", mm: "—" },
    { model: "XSL-2-34", inch: "—", mm: "34" },
    { model: "XSL-2-34F", inch: "1-3/8\"", mm: "—" },
    { model: "XSL-2-35", inch: "—", mm: "35" },
    { model: "XSL-2-36", inch: "—", mm: "36" },
    { model: "XSL-2-36F", inch: "1-7/16\"", mm: "—" },
    { model: "XSL-2-38", inch: "—", mm: "38" },
    { model: "XSL-2-38F", inch: "1-1/2\"", mm: "—" },
    { model: "XSL-2-39F", inch: "1-9/16\"", mm: "—" },
    { model: "XSL-2-41", inch: "—", mm: "41" },
    { model: "XSL-2-41F", inch: "1-5/8\"", mm: "—" },
    { model: "XSL-2-42F", inch: "1-11/16\"", mm: "—" },
    { model: "XSL-2-44F", inch: "1-3/4\"", mm: "—" },
    { model: "XSL-2-46", inch: "—", mm: "46" },
    { model: "XSL-2-46F", inch: "1-13/16\"", mm: "—" },
    { model: "XSL-2-50", inch: "—", mm: "50" },
    { model: "XSL-2-50F", inch: "2\"", mm: "—" },
    { model: "XSL-2-55", inch: "—", mm: "55" },
    { model: "XSL-2-55F", inch: "2.3-16\"", mm: "—" },
    { model: "XSL-2-60", inch: "—", mm: "60" },
    { model: "XSL-2-60F", inch: "2.3-8\"", mm: "—" },
  ];

  const xth4Links = [
    { model: "XSL-4-46", inch: "—", mm: "46" },
    { model: "XSL-4-46F", inch: "1-13/16\"", mm: "—" },
    { model: "XSL-4-50", inch: "—", mm: "50" },
    { model: "XSL-4-50F", inch: "2\"", mm: "—" },
    { model: "XSL-4-55", inch: "—", mm: "55" },
    { model: "XSL-4-55F", inch: "2.3-16\"", mm: "—" },
    { model: "XSL-4-60", inch: "—", mm: "60" },
    { model: "XSL-4-60F", inch: "2.3-8\"", mm: "—" },
    { model: "XSL-4-63F", inch: "2-1/2\"", mm: "—" },
    { model: "XSL-4-65", inch: "—", mm: "65" },
    { model: "XSL-4-65F", inch: "2-9/16\"", mm: "—" },
    { model: "XSL-4-66F", inch: "2-5/8\"", mm: "—" },
    { model: "XSL-4-68F", inch: "2-11/16\"", mm: "—" },
    { model: "XSL-4-69F", inch: "2-3/4\"", mm: "—" },
    { model: "XSL-4-70", inch: "—", mm: "70" },
    { model: "XSL-4-71F", inch: "2-13/16\"", mm: "—" },
    { model: "XSL-4-73F", inch: "2-7/8\"", mm: "—" },
    { model: "XSL-4-74F", inch: "2-15/16\"", mm: "—" },
    { model: "XSL-4-75", inch: "—", mm: "75" },
    { model: "XSL-4-76F", inch: "3\"", mm: "—" },
    { model: "XSL-4-77F", inch: "3-1/16\"", mm: "—" },
    { model: "XSL-4-79F", inch: "3-1/8\"", mm: "—" },
    { model: "XSL-4-80", inch: "—", mm: "80" },
  ];

  const xth8Links = [
    { model: "XSL-8-60", inch: "—", mm: "60" },
    { model: "XSL-8-60F", inch: "2.3-8\"", mm: "—" },
    { model: "XSL-8-63F", inch: "2-1/2\"", mm: "—" },
    { model: "XSL-8-65", inch: "—", mm: "65" },
    { model: "XSL-8-65F", inch: "2-9/16\"", mm: "—" },
    { model: "XSL-8-66F", inch: "2-5/8\"", mm: "—" },
    { model: "XSL-8-68F", inch: "2-11/16\"", mm: "—" },
    { model: "XSL-8-69F", inch: "2-3/4\"", mm: "—" },
    { model: "XSL-8-70", inch: "—", mm: "70" },
    { model: "XSL-8-71F", inch: "2-13/16\"", mm: "—" },
    { model: "XSL-8-73F", inch: "2-7/8\"", mm: "—" },
    { model: "XSL-8-74F", inch: "2-15/16\"", mm: "—" },
    { model: "XSL-8-75", inch: "—", mm: "75" },
    { model: "XSL-8-76F", inch: "3\"", mm: "—" },
    { model: "XSL-8-77F", inch: "3-1/16\"", mm: "—" },
    { model: "XSL-8-79F", inch: "3-1/8\"", mm: "—" },
    { model: "XSL-8-80", inch: "—", mm: "80" },
    { model: "XSL-8-80F", inch: "3-3/16\"", mm: "—" },
    { model: "XSL-8-82F", inch: "3-1/4\"", mm: "—" },
    { model: "XSL-8-84F", inch: "3-5/16\"", mm: "—" },
    { model: "XSL-8-85", inch: "—", mm: "85" },
    { model: "XSL-8-85F", inch: "3-3/8\"", mm: "—" },
    { model: "XSL-8-87F", inch: "3-7/16\"", mm: "—" },
    { model: "XSL-8-88F", inch: "3-1/2\"", mm: "—" },
    { model: "XSL-8-90", inch: "—", mm: "90" },
  ];

  // Combine link selection into unified rows matching Page 12 without internal scrollbars
  const maxLinkRows = Math.max(xth2Links.length, xth4Links.length, xth8Links.length);
  const unifiedLinkRows = Array.from({ length: maxLinkRows }, (_, i) => ({
    xth2: xth2Links[i] || null,
    xth4: xth4Links[i] || null,
    xth8: xth8Links[i] || null,
  }));

  // 4. Dimensional Data from Page 13
  const dimensionalGroups = [
    {
      powerHead: "XTH-2",
      torqueFtLbs: "214 – 2,217",
      torqueNm: "293 – 3,051",
      rows: [
        { hex: "36.51 (1-7/16\")", l: "135 (5.31)", h: "101 (3.97)", wl: "25.5 (1.00)", wt: "34.4 (1.35)", r: "8.9 (0.35)" },
        { hex: "31.75 (1-1/4\")", l: "135 (5.31)", h: "101 (3.97)", wl: "25.5 (1.00)", wt: "34.4 (1.35)", r: "8.9 (0.35)" },
        { hex: "46.03 (1-13/16\")", l: "135 (5.31)", h: "101 (3.97)", wl: "25.5 (1.00)", wt: "34.4 (1.35)", r: "8.9 (0.35)" },
        { hex: "41.28 (1-5/8\")", l: "135 (5.31)", h: "135 (5.31)", wl: "25.5 (1.00)", wt: "34.4 (1.35)", r: "8.9 (0.35)" },
        { hex: "50.8 (2\")", l: "139 (5.47)", h: "104 (4.09)", wl: "25.5 (1.00)", wt: "34.4 (1.35)", r: "8.9 (0.35)" },
        { hex: "55.58 (2-3/16\")", l: "137 (5.39)", h: "110 (4.33)", wl: "25.5 (1.00)", wt: "34.4 (1.35)", r: "8.9 (0.35)" },
        { hex: "60.33 (2-3/8\")", l: "137 (5.39)", h: "111 (4.37)", wl: "25.5 (1.00)", wt: "34.4 (1.35)", r: "8.9 (0.35)" },
      ],
    },
    {
      powerHead: "XTH-4",
      torqueFtLbs: "443 – 4,891",
      torqueNm: "608 – 6,733",
      rows: [
        { hex: "65.1 (2-9/16\")", l: "174 (6.85)", h: "142 (5.59)", wl: "28.7 (1.13)", wt: "49.5 (1.95)", r: "10.5 (0.41)" },
        { hex: "69.85 (2-3/4\")", l: "176 (6.93)", h: "142 (5.59)", wl: "28.7 (1.13)", wt: "49.5 (1.95)", r: "10.5 (0.41)" },
        { hex: "74.63 (2-15/16\")", l: "176 (6.93)", h: "142 (5.59)", wl: "28.7 (1.13)", wt: "49.5 (1.95)", r: "10.5 (0.41)" },
      ],
    },
    {
      powerHead: "XTH-8",
      torqueFtLbs: "867 – 9,323",
      torqueNm: "1,192 – 12,834",
      rows: [
        { hex: "53.98 (2-1/8\")", l: "216 (8.50)", h: "154 (6.06)", wl: "38 (1.49)", wt: "61.5 (2.42)", r: "13.35 (0.53)" },
        { hex: "79.38 (3-1/8\")", l: "216 (8.50)", h: "154 (6.06)", wl: "38 (1.49)", wt: "61.5 (2.42)", r: "14.45 (0.57)" },
      ],
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
          <span className="text-red-600 font-semibold">XSL Series (Ultra Slim)</span>
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
                  src="/images/xsl.png"
                  alt="XTORC XSL Series Direct Hex Type Hydraulic Torque Wrench"
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    e.currentTarget.src = "/product2.png";
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
                XSL SERIES DIRECT HEX TYPE HYDRAULIC TORQUE WRENCHES (ULTRA SLIM)
              </h1>
              <div className="w-full rounded-full h-1 bg-red-600"></div>
            </div>

            <div className="text-justify text-gray-300 text-xs sm:text-sm leading-relaxed space-y-3">
              <p>
                XTORC offers a series of Low - Profile Torque Wrenches which are crucial for applications in constricted spaces like Christmas Trees on BOP.
              </p>
              <p>
                A High-Performance Steel Alloy is used for several components including the Housing. This keeps the tool light, compact, and strong.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Key Specifications / Features */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pb-8">
        <div className="space-y-3">
          <h3 className="text-lg sm:text-xl font-semibold text-red-600">SPECIFICATIONS:</h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
            {[
              "360°×180° swivel for better degree of movement.",
              "Self-lubricating low Nickel Bronze for drive bush to protect body from wear.",
              "The reduced dimensions allow the tool to fit in tight spaces easily.",
              "A High-Performance Steel Alloy housing keeping the tool light, compact, and strong.",
              "Crucial direct-hex low-profile design engineered for BOP Christmas Trees and narrow clearances.",
              "High-repeatability bolting performance across industrial upstream, midstream, and subsea applications.",
            ].map((highlight, index) => (
              <li key={index} className="flex items-start text-gray-300 text-xs sm:text-sm">
                <BsDot className="text-red-600 w-5 h-5 flex-shrink-0 -mt-0.5" />
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* ======================================================== */}
      {/* 1st: FIRST TABLE — TECHNICAL SPECIFICATIONS (Page 12)   */}
      {/* ======================================================== */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-4">
        <h2 className="text-xl sm:text-2xl font-bold text-white mb-1.5 text-center">Technical Specifications</h2>
        <div className="rounded-full h-1 bg-red-600 mx-auto" style={{ maxWidth: "260px" }}></div>
      </div>

      <div className="w-full max-w-6xl mx-auto px-2 sm:px-4 pb-8 mt-4">
        <div className="w-full custom-table-scroll shadow-lg rounded-lg border border-white/20">
          <table className="w-full border-collapse min-w-[700px] text-xs">
            <thead>
              <tr className="bg-gray-800 text-white font-medium">
                <th rowSpan={2} className="py-2.5 px-3 text-center border border-white/20 bg-gray-700 font-semibold w-[14%]">
                  MODEL
                </th>
                <th colSpan={4} className="py-2 px-2 text-center border border-white/20 bg-gray-700/90 font-semibold">
                  HEX A/F
                </th>
                <th className="py-2 px-2 text-center border border-white/20 font-semibold w-[14%]">
                  Min Torque
                </th>
                <th className="py-2 px-2 text-center border border-white/20 font-semibold w-[14%]">
                  Max Torque
                </th>
                <th className="py-2 px-2 text-center border border-white/20 font-semibold w-[14%]">
                  Tool Weight
                </th>
              </tr>
              <tr className="bg-gray-800 text-white font-medium text-[11px]">
                <th className="py-1.5 px-2 text-center border border-white/20 bg-gray-700/70 font-semibold">mm min</th>
                <th className="py-1.5 px-2 text-center border border-white/20 bg-gray-700/70 font-semibold">mm max</th>
                <th className="py-1.5 px-2 text-center border border-white/20 bg-gray-700/70 font-semibold">Inch min</th>
                <th className="py-1.5 px-2 text-center border border-white/20 bg-gray-700/70 font-semibold">Inch max</th>
                <th className="py-1.5 px-2 text-center border border-white/20 font-semibold">N.m</th>
                <th className="py-1.5 px-2 text-center border border-white/20 font-semibold">N.m</th>
                <th className="py-1.5 px-2 text-center border border-white/20 font-semibold">Kg.</th>
              </tr>
            </thead>
            <tbody>
              {mainSpecs.map((spec, index) => (
                <tr key={index} className="leading-normal hover:bg-zinc-900/60 transition-colors">
                  <td className="py-2 px-3 text-center border border-white/20 bg-gray-700/80 font-bold text-white">
                    {spec.model}
                  </td>
                  <td className="py-2 px-2 text-center border border-white/20 bg-black/80 font-medium text-gray-200">
                    {spec.hexMmMin}
                  </td>
                  <td className="py-2 px-2 text-center border border-white/20 bg-black/80 font-medium text-gray-200">
                    {spec.hexMmMax}
                  </td>
                  <td className="py-2 px-2 text-center border border-white/20 bg-black/80 font-medium text-gray-200">
                    {spec.hexInchMin}
                  </td>
                  <td className="py-2 px-2 text-center border border-white/20 bg-black/80 font-medium text-gray-200">
                    {spec.hexInchMax}
                  </td>
                  <td className="py-2 px-2 text-center border border-white/20 bg-black/80 font-bold text-white">
                    {spec.minTorque}
                  </td>
                  <td className="py-2 px-2 text-center border border-white/20 bg-black/80 font-bold text-red-500">
                    {spec.maxTorque}
                  </td>
                  <td className="py-2 px-2 text-center border border-white/20 bg-black/80 font-medium text-gray-200">
                    {spec.weight}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* ======================================================== */}
      {/* 2nd: SECOND TABLE — XSL LINK SELECTION (WITHOUT SCROLLBAR) */}
      {/* ======================================================== */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-4">
        <h2 className="text-xl sm:text-2xl font-bold text-white mb-1.5 text-center">XSL Link Selection</h2>
        <div className="rounded-full h-1 bg-red-600 mx-auto" style={{ maxWidth: "230px" }}></div>
        <p className="text-center text-xs text-gray-400 mt-2">
          Direct hex link selection matrix across XTH-2, XTH-4, and XTH-8 power heads
        </p>
      </div>

      <div className="w-full max-w-6xl mx-auto px-2 sm:px-4 pb-10 mt-4">
        <div className="w-full custom-table-scroll shadow-lg rounded-lg border border-white/20">
          <table className="w-full border-collapse min-w-[780px] text-xs">
            <thead>
              {/* Group Headers */}
              <tr className="bg-gray-800 text-white font-medium">
                <th colSpan={3} className="py-2.5 px-2 text-center border border-white/20 bg-gray-700 font-bold text-sm text-white w-1/3">
                  XTH-2 Link
                </th>
                <th colSpan={3} className="py-2.5 px-2 text-center border border-white/20 bg-gray-700 font-bold text-sm text-white w-1/3">
                  XTH-4 Link
                </th>
                <th colSpan={3} className="py-2.5 px-2 text-center border border-white/20 bg-gray-700 font-bold text-sm text-white w-1/3">
                  XTH-8 Link
                </th>
              </tr>
              {/* Sub Columns */}
              <tr className="bg-gray-800 text-white font-semibold text-[11px]">
                {/* XTH-2 Sub-headers */}
                <th className="py-2 px-2 text-center border border-white/20 bg-gray-700/80 w-[14%]">Model</th>
                <th className="py-2 px-2 text-center border border-white/20 bg-gray-700/70 w-[10%]">Hex (Inch)</th>
                <th className="py-2 px-2 text-center border border-white/20 bg-gray-700/70 w-[9%]">Hex (mm)</th>

                {/* XTH-4 Sub-headers */}
                <th className="py-2 px-2 text-center border border-white/20 bg-gray-700/80 w-[14%]">Model</th>
                <th className="py-2 px-2 text-center border border-white/20 bg-gray-700/70 w-[10%]">Hex (Inch)</th>
                <th className="py-2 px-2 text-center border border-white/20 bg-gray-700/70 w-[9%]">Hex (mm)</th>

                {/* XTH-8 Sub-headers */}
                <th className="py-2 px-2 text-center border border-white/20 bg-gray-700/80 w-[14%]">Model</th>
                <th className="py-2 px-2 text-center border border-white/20 bg-gray-700/70 w-[10%]">Hex (Inch)</th>
                <th className="py-2 px-2 text-center border border-white/20 bg-gray-700/70 w-[9%]">Hex (mm)</th>
              </tr>
            </thead>
            <tbody>
              {unifiedLinkRows.map((row, index) => (
                <tr key={index} className="leading-normal hover:bg-zinc-900/60 transition-colors">
                  {/* XTH-2 Column Group */}
                  <td className="py-1.5 px-2 text-center border border-white/20 bg-gray-700/70 font-mono text-[11px] text-white">
                    {row.xth2 ? row.xth2.model : "—"}
                  </td>
                  <td className="py-1.5 px-2 text-center border border-white/20 bg-black/80 font-medium text-gray-200">
                    {row.xth2 ? row.xth2.inch : "—"}
                  </td>
                  <td className="py-1.5 px-2 text-center border border-white/20 bg-black/80 font-bold text-red-400">
                    {row.xth2 ? row.xth2.mm : "—"}
                  </td>

                  {/* XTH-4 Column Group */}
                  <td className="py-1.5 px-2 text-center border border-white/20 bg-gray-700/70 font-mono text-[11px] text-white">
                    {row.xth4 ? row.xth4.model : "—"}
                  </td>
                  <td className="py-1.5 px-2 text-center border border-white/20 bg-black/80 font-medium text-gray-200">
                    {row.xth4 ? row.xth4.inch : "—"}
                  </td>
                  <td className="py-1.5 px-2 text-center border border-white/20 bg-black/80 font-bold text-red-400">
                    {row.xth4 ? row.xth4.mm : "—"}
                  </td>

                  {/* XTH-8 Column Group */}
                  <td className="py-1.5 px-2 text-center border border-white/20 bg-gray-700/70 font-mono text-[11px] text-white">
                    {row.xth8 ? row.xth8.model : "—"}
                  </td>
                  <td className="py-1.5 px-2 text-center border border-white/20 bg-black/80 font-medium text-gray-200">
                    {row.xth8 ? row.xth8.inch : "—"}
                  </td>
                  <td className="py-1.5 px-2 text-center border border-white/20 bg-black/80 font-bold text-red-400">
                    {row.xth8 ? row.xth8.mm : "—"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* ======================================================== */}
      {/* 3rd: THIRD ITEM — PHOTO / ENGINEERING SCHEMATIC DIAGRAM  */}
      {/* ======================================================== */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-4">
        <h2 className="text-xl sm:text-2xl font-bold text-white mb-1.5 text-center">Engineering Drawing & Dimensions</h2>
        <div className="rounded-full h-1 bg-red-600 mx-auto" style={{ maxWidth: "340px" }}></div>
      </div>

      <div className="max-w-6xl mx-auto px-2 sm:px-4 pt-4 pb-6 flex justify-center">
        <div className="w-full max-w-2xl bg-zinc-950 border border-white/10 rounded-xl p-3 sm:p-4 overflow-hidden flex items-center justify-center shadow-xl">
          <img
            src="/images/BoltingTools/xsl-dimensions-diagram.jpg"
            alt="XSL Series Engineering Schematic Dimensions"
            className="w-auto max-w-full max-h-[220px] sm:max-h-[270px] object-contain rounded"
          />
        </div>
      </div>

      {/* ======================================================== */}
      {/* 4th: FOURTH ITEM — DIMENSIONAL DATA TABLE (Page 13)      */}
      {/* ======================================================== */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-4">
        <h2 className="text-xl sm:text-2xl font-bold text-white mb-1.5 text-center">Dimensional Data</h2>
        <div className="rounded-full h-1 bg-red-600 mx-auto" style={{ maxWidth: "220px" }}></div>
      </div>

      <div className="w-full max-w-6xl mx-auto px-2 sm:px-4 pb-2 mt-4">
        <div className="w-full custom-table-scroll shadow-lg rounded-lg border border-white/20">
          <table className="w-full border-collapse min-w-[780px] text-xs">
            <thead>
              <tr className="bg-gray-800 text-white font-medium">
                <th rowSpan={2} className="py-2 px-2 text-center border border-white/20 bg-gray-700 font-semibold w-[10%]">
                  PowerHead
                </th>
                <th colSpan={2} className="py-2 px-2 text-center border border-white/20 bg-gray-700/90 font-semibold w-[20%]">
                  Torque Range
                </th>
                <th rowSpan={2} className="py-2 px-2 text-center border border-white/20 font-semibold w-[15%]">
                  Hex Size<br /><span className="text-[10.5px] font-normal text-gray-300">mm (inch)</span>
                </th>
                <th rowSpan={2} className="py-2 px-2 text-center border border-white/20 font-semibold w-[11%]">
                  L<br /><span className="text-[10.5px] font-normal text-gray-300">mm (inch)</span>
                </th>
                <th rowSpan={2} className="py-2 px-2 text-center border border-white/20 font-semibold w-[11%]">
                  H<br /><span className="text-[10.5px] font-normal text-gray-300">mm (inch)</span>
                </th>
                <th rowSpan={2} className="py-2 px-2 text-center border border-white/20 font-semibold w-[11%]">
                  WL<br /><span className="text-[10.5px] font-normal text-gray-300">mm (inch)</span>
                </th>
                <th rowSpan={2} className="py-2 px-2 text-center border border-white/20 font-semibold w-[11%]">
                  WT<br /><span className="text-[10.5px] font-normal text-gray-300">mm (inch)</span>
                </th>
                <th rowSpan={2} className="py-2 px-2 text-center border border-white/20 font-semibold w-[11%]">
                  R (Nose Width)<br /><span className="text-[10.5px] font-normal text-gray-300">mm (inch)</span>
                </th>
              </tr>
              <tr className="bg-gray-800 text-white font-medium text-[11px]">
                <th className="py-1.5 px-2 text-center border border-white/20 bg-gray-700/70 font-semibold">Min</th>
                <th className="py-1.5 px-2 text-center border border-white/20 bg-gray-700/70 font-semibold">Max</th>
              </tr>
            </thead>
            <tbody>
              {dimensionalGroups.map((group, groupIndex) => (
                <React.Fragment key={groupIndex}>
                  {group.rows.map((row, rowIndex) => (
                    <tr key={`${groupIndex}-${rowIndex}`} className="leading-normal hover:bg-zinc-900/60 transition-colors">
                      {rowIndex === 0 && (
                        <>
                          <td
                            rowSpan={group.rows.length}
                            className="py-2 px-2 text-center border border-white/20 bg-gray-700/80 font-bold text-white align-middle"
                          >
                            {group.powerHead}
                          </td>
                          <td
                            rowSpan={group.rows.length}
                            className="py-2 px-2 text-center border border-white/20 bg-black/90 font-medium text-gray-200 align-middle border-r"
                          >
                            <div className="space-y-0.5">
                              <span className="block font-bold text-white">{group.torqueNm.split("–")[0].trim()} <span className="text-[10px] text-gray-400">Nm</span></span>
                              <span className="block text-[11px] text-gray-400">({group.torqueFtLbs.split("–")[0].trim()} Ft.Lbs)</span>
                            </div>
                          </td>
                          <td
                            rowSpan={group.rows.length}
                            className="py-2 px-2 text-center border border-white/20 bg-black/90 font-medium text-gray-200 align-middle border-r"
                          >
                            <div className="space-y-0.5">
                              <span className="block font-bold text-red-500">{group.torqueNm.split("–")[1].trim()} <span className="text-[10px] text-red-400">Nm</span></span>
                              <span className="block text-[11px] text-gray-400">({group.torqueFtLbs.split("–")[1].trim()} Ft.Lbs)</span>
                            </div>
                          </td>
                        </>
                      )}
                      <td className="py-1.5 px-2 text-center border border-white/20 bg-black/80 font-medium text-white">
                        {row.hex}
                      </td>
                      <td className="py-1.5 px-2 text-center border border-white/20 bg-black/80 font-normal text-gray-200">
                        {row.l}
                      </td>
                      <td className="py-1.5 px-2 text-center border border-white/20 bg-black/80 font-normal text-gray-200">
                        {row.h}
                      </td>
                      <td className="py-1.5 px-2 text-center border border-white/20 bg-black/80 font-normal text-gray-200">
                        {row.wl}
                      </td>
                      <td className="py-1.5 px-2 text-center border border-white/20 bg-black/80 font-normal text-gray-200">
                        {row.wt}
                      </td>
                      <td className="py-1.5 px-2 text-center border border-white/20 bg-black/80 font-semibold text-red-400">
                        {row.r}
                      </td>
                    </tr>
                  ))}
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Catalog Note */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pb-12">
        <p className="text-gray-400 text-xs italic text-center sm:text-left mt-2">
          * Note: Dimensions are subject to change. For Higher Torque Values we can provide you with Customized Solutions.
        </p>
      </div>
    </div>
  );
};

export default XSL;