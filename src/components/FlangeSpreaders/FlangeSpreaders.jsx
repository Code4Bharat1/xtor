import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { BsCheckCircleFill } from "react-icons/bs";

const FlangeSpreaders = () => {
  return (
    <div className="bg-black text-white min-h-screen" style={{ fontFamily: "Poppins, sans-serif" }}>
      {/* Top Header / Breadcrumbs */}
      <div className="bg-white py-6 shadow-md">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap items-center justify-center gap-3 text-black text-center">
          <span className="font-semibold text-sm sm:text-base">Specialized Tools</span>
          <FaArrowRightLong className="w-4 h-4 text-red-600" />
          <span className="font-bold text-sm sm:text-base text-red-600">Flange Spreaders</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-20">
        
        {/* ========================================================================= */}
        {/* --- SECTION 1: HYDRAULIC VERTICAL LIFTING WEDGE (XVWL) --- */}
        {/* ========================================================================= */}
        <section className="space-y-12">
          {/* Main Hero: Product Image & Overview */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Column: Product Image & Download CTA */}
            <div className="lg:col-span-5 flex flex-col items-center space-y-6">
              <div className="bg-white rounded-3xl p-6 border-t-[12px] border-r-[12px] border-red-600 shadow-[0_10px_30px_rgba(255,255,255,0.15)] hover:shadow-[0_10px_30px_rgba(208,26,26,0.5)] transition-all duration-300 w-full max-w-[450px] h-[300px] sm:h-[360px] flex items-center justify-center">
                <img
                  src="images/accesories/flangespreaders.png"
                  alt="Hydraulic Vertical Lifting Wedge"
                  className="w-full h-full object-contain"
                />
              </div>

              <a
                href="XTORC BROCHURE.pdf"
                download
                className="bg-white text-red-600 px-8 py-3 rounded-2xl text-xl font-bold border-2 border-red-600 hover:bg-red-600 hover:text-white transition-all duration-300 shadow-lg text-center"
              >
                Download Catalog
              </a>
            </div>

            {/* Right Column: Title, Description & Features */}
            <div className="lg:col-span-7 space-y-6">
              <div className="w-fit">
                <span className="text-red-500 font-semibold text-sm tracking-wider uppercase">
                  Vertical Lifting Wedge • XVWL Series
                </span>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-1">
                  Flange Spreaders
                </h1>
                <div className="w-full h-1 bg-red-600 rounded-2xl mt-2"></div>
              </div>

              <p className="text-gray-300 text-base sm:text-lg leading-relaxed text-justify">
                The <strong className="text-white">XTORC Hydraulic Vertical Lifting Wedge XVWL</strong> has been developed as an easy-to-use and cost-effective solution for heavy lifting where minimum clearance is available. It lifts objects vertically where an access gap of <strong className="text-red-400">3/8&quot; (9.5mm)</strong> or more is available, delivering a secure and rapid lifting force of <strong className="text-red-400">16 Tons</strong> per tool.
              </p>

              {/* Special Features */}
              <div className="bg-zinc-900/70 border border-zinc-800 rounded-2xl p-6 shadow-inner space-y-4">
                <h2 className="text-xl font-bold text-red-500 flex items-center gap-2">
                  Special Features
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm sm:text-base text-gray-200">
                  <div className="flex items-start gap-2.5">
                    <BsCheckCircleFill className="w-4 h-4 text-red-500 flex-shrink-0 mt-1" />
                    <span>Access gap of only 3/8&quot; (9.5mm) needed.</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <BsCheckCircleFill className="w-4 h-4 text-red-500 flex-shrink-0 mt-1" />
                    <span>3/4&quot; (19.0mm) vertical lift from each step.</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <BsCheckCircleFill className="w-4 h-4 text-red-500 flex-shrink-0 mt-1" />
                    <span>Max. height of 50mm on 4th step.</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <BsCheckCircleFill className="w-4 h-4 text-red-500 flex-shrink-0 mt-1" />
                    <span>Automatic spring return retraction.</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <BsCheckCircleFill className="w-4 h-4 text-red-500 flex-shrink-0 mt-1" />
                    <span>Interlocking first step ensures safe hold.</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <BsCheckCircleFill className="w-4 h-4 text-red-500 flex-shrink-0 mt-1" />
                    <span>No slippage — lifts in straight vertical plane.</span>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Blueprint Diagram Card */}
          <div className="bg-zinc-900/60 border border-zinc-800 rounded-3xl p-6 sm:p-8 shadow-xl max-w-5xl mx-auto flex flex-col items-center">
            <h3 className="text-lg sm:text-xl font-bold text-gray-200 mb-6 text-center">
              Operating Clearance & Stepped Wedge Profile
            </h3>
            <img
              src="Flangespreaders.png"
              alt="Flange Spreaders Blueprint"
              className="max-h-[320px] w-auto object-contain mx-auto drop-shadow-md"
            />
          </div>

          {/* XVWL Kit Options */}
          <div className="space-y-8 pt-4">
            <div className="text-center w-fit mx-auto">
              <h3 className="text-2xl sm:text-3xl font-bold text-white">
                XVWL Kit Options
              </h3>
              <div className="w-full h-1 bg-red-600 rounded-2xl mt-2"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              
              {/* Mini Kit */}
              <div className="bg-zinc-900/80 border border-zinc-700/60 hover:border-red-600/50 rounded-2xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 shadow-xl space-y-6">
                <div>
                  <h4 className="text-xl sm:text-2xl font-bold text-red-500 mb-4 border-b border-zinc-800 pb-2">
                    MINI KIT
                  </h4>
                  <ul className="space-y-2.5 text-gray-300 text-sm sm:text-base">
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 font-bold">•</span>
                      <span>1 x Hydraulic Vertical Lifting Wedge Assembly</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 font-bold">•</span>
                      <span>1 x Safety Block</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 font-bold">•</span>
                      <span>1 x Stepped Block</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 font-bold">•</span>
                      <span>1 x Instruction Manual</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-black/50 border border-zinc-800/80 rounded-xl p-4 flex items-center justify-center h-[200px]">
                  <img
                    src="KitOptionfs.png"
                    alt="Mini Kit"
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
              </div>

              {/* Standard Kit */}
              <div className="bg-zinc-900/80 border border-zinc-700/60 hover:border-red-600/50 rounded-2xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 shadow-xl space-y-6">
                <div>
                  <h4 className="text-xl sm:text-2xl font-bold text-red-500 mb-4 border-b border-zinc-800 pb-2">
                    STANDARD KIT
                  </h4>
                  <ul className="space-y-2.5 text-gray-300 text-sm sm:text-base">
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 font-bold">•</span>
                      <span>1 x Hydraulic Vertical Lifting Wedge Assembly</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 font-bold">•</span>
                      <span>1 x 10,000 psi (700 Bar) Two Stage Hydraulic Hand Pump</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 font-bold">•</span>
                      <span>1 x 10,000 psi (700 Bar) Hydraulic Hose (6 ft)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 font-bold">•</span>
                      <span>1 x Safety Block &amp; 1 x Stepped Block</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 font-bold">•</span>
                      <span>1 x Instruction Manual &amp; 1 x Carry Case</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-black/50 border border-zinc-800/80 rounded-xl p-4 flex items-center justify-center h-[200px]">
                  <img
                    src="StandardkitFlangespreaders.png"
                    alt="Standard Kit"
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* --- SECTION 2: HYDRAULIC SPREADING WEDGE (XWFS) --- */}
        {/* ========================================================================= */}
        <section className="space-y-12 pt-10 border-t border-zinc-800">
          
          {/* Section Header */}
          <div className="text-center w-fit mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
              HYDRAULIC SPREADING WEDGE (XWFS)
            </h2>
            <div className="w-full h-1 bg-red-600 rounded-2xl mt-2"></div>
          </div>

          {/* Overview & Main Tool Image Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Column: Info & Special Features */}
            <div className="lg:col-span-7 space-y-6">
              <p className="text-gray-300 text-base sm:text-lg leading-relaxed text-justify">
                The <strong className="text-white">XTORC Spreading Wedge (XWFS)</strong> is engineered as a lightweight, robust, and cost-effective solution for flange spreading, pipe joint separation, and maintenance operations where minimal access clearance is available.
              </p>

              <div className="bg-zinc-900/70 border border-zinc-800 rounded-2xl p-6 shadow-inner space-y-4">
                <h3 className="text-xl font-bold text-red-500">Special Features:</h3>
                <div className="space-y-3 text-sm sm:text-base text-gray-200">
                  <div className="flex items-start gap-2.5">
                    <BsCheckCircleFill className="w-4 h-4 text-red-500 flex-shrink-0 mt-1" />
                    <span>Only requires an access gap of 1/4&quot; (6mm).</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <BsCheckCircleFill className="w-4 h-4 text-red-500 flex-shrink-0 mt-1" />
                    <span>Robust lightweight tool — just 7.2 kg (16 lbs).</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <BsCheckCircleFill className="w-4 h-4 text-red-500 flex-shrink-0 mt-1" />
                    <span>10,000 psi (700 Bar) generates 14.0 Tons spreading force.</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <BsCheckCircleFill className="w-4 h-4 text-red-500 flex-shrink-0 mt-1" />
                    <span>Automatic Spring Return for fast cycling.</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <BsCheckCircleFill className="w-4 h-4 text-red-500 flex-shrink-0 mt-1" />
                    <span>Locking at first step ensures no slippage and maximum safety.</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Spreading Wedge Image Card */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="bg-white rounded-3xl p-6 border-t-[12px] border-r-[12px] border-red-600 shadow-[0_10px_30px_rgba(255,255,255,0.15)] hover:shadow-[0_10px_30px_rgba(208,26,26,0.5)] transition-all duration-300 w-full max-w-[450px] h-[300px] sm:h-[360px] flex items-center justify-center">
                <img
                  src="flangespreaderswedge.png"
                  alt="Hydraulic Spreading Wedge"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

          </div>

          {/* Kit Options Section for XWFS */}
          <div className="space-y-8 pt-6">
            <div className="text-center w-fit mx-auto">
              <h3 className="text-2xl sm:text-3xl font-bold text-white">
                XWFS Kit Options
              </h3>
              <div className="w-full h-1 bg-red-600 rounded-2xl mt-2"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              
              {/* 1. Mini Kit */}
              <div className="bg-zinc-900/80 border border-zinc-700/60 hover:border-red-600/50 rounded-2xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 shadow-xl space-y-6">
                <div>
                  <h4 className="text-xl sm:text-2xl font-bold text-red-500 mb-4 border-b border-zinc-800 pb-2">
                    MINI KIT
                  </h4>
                  <ul className="space-y-2.5 text-gray-300 text-sm sm:text-base">
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 font-bold">•</span>
                      <span>1 x Hydraulic Spreading Wedge Assembly</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 font-bold">•</span>
                      <span>1 x Safety Block</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 font-bold">•</span>
                      <span>1 x Instruction Manual</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 font-bold">•</span>
                      <span>1 x Carry Case</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-black/50 border border-zinc-800/80 rounded-xl p-4 flex items-center justify-center h-[200px]">
                  <img
                    src="Kitoptionfshydraulicspreaders.png"
                    alt="Mini Kit"
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
              </div>

              {/* 2. Stepped Block Accessory */}
              <div className="bg-zinc-900/80 border border-zinc-700/60 hover:border-red-600/50 rounded-2xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 shadow-xl space-y-6">
                <div>
                  <h4 className="text-xl sm:text-2xl font-bold text-red-500 mb-4 border-b border-zinc-800 pb-2">
                    STEPPED BLOCK ACCESSORY
                  </h4>
                  <ul className="space-y-2.5 text-gray-300 text-sm sm:text-base">
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 font-bold">•</span>
                      <span>2 x Stepped Block</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 font-bold">•</span>
                      <span>2 x CSK M6 x 12mm Countersunk Screws</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-black/50 border border-zinc-800/80 rounded-xl p-4 flex items-center justify-center h-[200px]">
                  <img
                    src="Steppedblockaccessoryfs.png"
                    alt="Stepped Block Accessory"
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
              </div>

              {/* 3. Standard Kit */}
              <div className="bg-zinc-900/80 border border-zinc-700/60 hover:border-red-600/50 rounded-2xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 shadow-xl space-y-6">
                <div>
                  <h4 className="text-xl sm:text-2xl font-bold text-red-500 mb-4 border-b border-zinc-800 pb-2">
                    STANDARD KIT
                  </h4>
                  <ul className="space-y-2.5 text-gray-300 text-sm sm:text-base">
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 font-bold">•</span>
                      <span>1 x Hydraulic Spreading Wedge Assembly</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 font-bold">•</span>
                      <span>1 x 10,000 psi (700 Bar) Two Stage Hydraulic Hand Pump</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 font-bold">•</span>
                      <span>1 x 10,000 psi (700 Bar) Hydraulic Hose</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 font-bold">•</span>
                      <span>1 x Safety Block, Instruction Manual &amp; Carry Case</span>
                    </li>
                    <li className="flex items-start gap-2 font-semibold text-red-400">
                      <span className="text-red-500 font-bold">•</span>
                      <span>Gross Weight: 17 kg</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-black/50 border border-zinc-800/80 rounded-xl p-4 flex items-center justify-center h-[200px]">
                  <img
                    src="StandardkitFlangespreaders.png"
                    alt="Standard Kit"
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
              </div>

              {/* 4. Maxi Kit */}
              <div className="bg-zinc-900/80 border border-zinc-700/60 hover:border-red-600/50 rounded-2xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 shadow-xl space-y-6">
                <div>
                  <h4 className="text-xl sm:text-2xl font-bold text-red-500 mb-4 border-b border-zinc-800 pb-2">
                    MAXI KIT
                  </h4>
                  <ul className="space-y-2.5 text-gray-300 text-sm sm:text-base">
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 font-bold">•</span>
                      <span>2 x Hydraulic Spreading Wedge Assembly</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 font-bold">•</span>
                      <span>1 x 10,000 psi (700 Bar) Two Stage Hydraulic Hand Pump</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 font-bold">•</span>
                      <span>2 x 10,000 psi (700 Bar) Hydraulic Hoses</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 font-bold">•</span>
                      <span>2 x Safety Block &amp; 1 x 10,000 psi Twin Valve Manifold</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 font-bold">•</span>
                      <span>1 x Instruction Manual &amp; 1 x Carry Case</span>
                    </li>
                    <li className="flex items-start gap-2 font-semibold text-red-400">
                      <span className="text-red-500 font-bold">•</span>
                      <span>Gross Weight: 28 kg</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-black/50 border border-zinc-800/80 rounded-xl p-4 flex items-center justify-center h-[200px]">
                  <img
                    src="Maxkitfs.png"
                    alt="Maxi Kit"
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
              </div>

            </div>
          </div>
        </section>

      </div>
    </div>
  );
};

export default FlangeSpreaders;