// import React from "react";
// import { FaArrowRightLong } from "react-icons/fa6";

// const FlangeFacingMachine = () => {
//   return (
//     <div className="bg-black text-white" style={{ fontFamily: 'Poppins, sans-serif' }}>
//       {/* Header with white background */}
//       <div className="bg-white py-6">
//         <div className="flex items-center justify-center gap-2 text-black">
//           <span className="font-medium px-2">Bolt Tensioning Solutions</span>
//           <FaArrowRightLong className="w-4 h-4 ml-8 mr-8" />
//           <span className="font-medium">	Flange Facing Machines


// </span>
//         </div>
//       </div>

//       {/* Main content */}
//       <div className="max-w-[1100px] mx-auto w-full px-4 py-12">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
//           {/* Left Section */}
//           <div className="space-y-6">
//             {/* Title with Impact font */}
//             <div>
//               <h1 className="text-4xl px-10 text-center font-bold text-white mb-2" >
//                 	Flange Facing Machines



//               </h1>
//               <div className="w-120 rounded-2xl h-1 bg-red-600"></div>
//             </div>

//             {/* Description */}
//             <div className="space-y-4 text-body text-justify">
//               <p>
//                 The equipment performs precision in-line cut or simultaneous cut/bevel, single cut/bevel, counterbore
//  and flange facing operations, as well as weld end preparation on open ended pipe, ranging from 2 to 56
//  inches. O.D. (DN20-1400),on most wall thickness and material.
//                </p>
//             </div> 
//           </div>

//           {/* Right Section */}
//           <div className="space-y-6">
//             {/* Product Image */}
//             <div className="relative">
//               <div className="bg-white rounded-2xl p-6 border-t-12 border-r-12 border-red-600 shadow-[0_10px_30px_rgba(255,255,255,0.25)] hover:shadow-[0_10px_30px_rgba(208,26,26,0.6)] transition-shadow duration-300 // rounded-3xl // h-[400px] flex items-center justify-center">
//                 <img
//                   src="flangefacing.png"
//                   alt="Hydraulic Bolt Tensioner"
//                   className="w-full h-full object-contain"
//                 />
//               </div>
//             </div>

//             {/* Download Catalog Button */}
//             <div className="flex justify-center">
//               <button 
//                 className="text-red-600 px-8 py-3 rounded-2xl text-2xl font-bold hover:bg-red-700 hover:text-white transition-colors"
//                 style={{ backgroundColor: '#ffffff'}}
//               >
//                 Download Catalog
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FlangeFacingMachine;

import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const FlangeFacingMachine = () => {
  // Data for the XTFF40 Flange Facer (kept for context)
  const xtff40TechnicalDetails = [
    { label: "Facing Diameter Range", value: "150-1000mm (6-40\")" },
    { label: "I.D Clamp Range", value: "145- 860mm (6-34\")" },
    { label: "Min Swing Diameter", value: "79.0 mm" },
    { label: "Tool Post Stroke", value: "100(4\")" },
    { label: "Tool Post Swivel Angle", value: "+ / - 30°" },
    { label: "R.P.M", value: "0-35" },
    { label: "Drive Power Unit - Pneumatic", value: "2. 2Hp (1.7k w)" },
    { label: "Air Consumption / Supply Required", value: "1.93m³/min" },
    { label: "Machine Weight (less base unit)", value: "128Kg" },
    { label: "Shipping Weight", value: "145Kg" },
  ];

  const xtff40FeedRates = {
    in: [
      { gear: 1, rate: "0.128" },
      { gear: 2, rate: "0.251" },
      { gear: 3, rate: "0.591" },
    ],
    out: [
      { gear: 1, rate: "0.151" },
      { gear: 2, rate: "0.292" },
      { gear: 3, rate: "0.691" },
    ],
    upDown: [
      { gear: 1, rate: "0.03" },
      { gear: 2, rate: "0.06" },
      { gear: 3, rate: "0.15" },
    ],
  };

  // Data for the XTFF60 Flange Facer (kept for context)
  const xtff60TechnicalDetails = [
    { label: "Facing Diameter Range", value: "500-1650mm (20-65\")" },
    { label: "I.D Clamp Range", value: "500-1500 mm(20-59\")" },
    { label: "Min Swing Diameter", value: "1750mm" },
    { label: "Tool Post Stroke", value: "80(2\")" },
    { label: "Tool Post Swivel Angle", value: "+ / - 30°" },
    { label: "R.P.M", value: "0-35 3." },
    { label: "Drive Power Unit - Pneumatic", value: "5Hp (2.7 k w)" },
    { label: "Air Consumption / Supply Required", value: "2.69m³/min" },
    { label: "Machine Weight (less base unit)", value: "550Kg" },
    { label: "Shipping Weight", value: "680Kg" },
  ];

  const xtff60FeedRates = {
    in: [
      { gear: 1, rate: "0.128" },
      { gear: 2, rate: "0.251" },
      { gear: 3, rate: "0.591" },
    ],
    out: [
      { gear: 1, rate: "0.151" },
      { gear: 2, rate: "0.292" },
      { gear: 3, rate: "0.691" },
    ],
    upDown: [
      { gear: 1, rate: "0.03" },
      { gear: 2, rate: "0.06" },
      { gear: 3, rate: "0.15" },
    ],
  };

  // Data for the NEW XTFF80 Flange Facer (kept for context)
  const xtff80TechnicalDetails = [
    { label: "Facing Diameter Range", value: "762-2032mm (30-80\")" },
    { label: "I.D Clamp Range", value: "762-1804mm(30-71\")" },
    { label: "Min Swing Diameter", value: "1610mm" },
    { label: "Tool Post Stroke", value: "50(2\")" },
    { label: "Tool Post Swivel Angle", value: "+ / - 30°" },
    { label: "R.P.M", value: "0-42" },
    { label: "Drive Power Unit - Pneumatic", value: "4Hp(3kw)" },
    { label: "Air Consumption / Supply Required", value: "2.69m³/min" },
    { label: "Machine Weight (less base unit)", value: "350Kg" },
    { label: "Shipping Weight", value: "720Kg" },
  ];

  const xtff80FeedRates = {
    in: [
      { gear: 1, rate: "0.128" },
      { gear: 2, rate: "0.251" },
      { gear: 3, rate: "0.591" },
    ],
    out: [
      { gear: 1, rate: "0.151" },
      { gear: 2, rate: "0.292" },
      { gear: 3, rate: "0.691" },
    ],
    upDown: [
      { gear: 1, rate: "0.03" },
      { gear: 2, rate: "0.06" },
      { gear: 3, rate: "0.15" },
    ],
  };

  // Data for the XTFF120 Flange Facer (Derived from image_ee6f63.jpg)
  const xtff120TechnicalDetails = [
    { label: "Facing Diameter Range", value: "1150-3050mm (45-120\")" },
    { label: "I.D Clamp Range", value: "1060-2800mm (42-110\")" },
    { label: "Min Swing Diameter", value: "2133mm (84\")" },
    { label: "Tool Post Stroke", value: "102 (4\")" },
    { label: "Radial Slide Stroke", value: "711 (28\")" },
    { label: "Tool Post Swivel Angle", value: "+ / - 30°" },
    { label: "R.P.M", value: "0-9" },
    { label: "Drive Power Unit - Pneumatic (Standard)", value: "4Hp (3kw)" },
    { label: "Drive Power Unit - Hydraulic (option)", value: "15HP (11kw)" },
    { label: "Air Consumption / Supply Required", value: "2.69m³/min" },
    { label: "Hydraulic requirements", value: "30L/min" },
    { label: "Machine Weight", value: "1650Kg" },
    { label: "Shipping Weight", value: "2450Kg" },
  ];

  const xtff120FeedRates = {
    in: [
      { gear: 1, rate: "0.128" },
      { gear: 2, rate: "0.251" },
      { gear: 3, rate: "0.591" },
    ],
    out: [
      { gear: 1, rate: "0.151" },
      { gear: 2, rate: "0.292" },
      { gear: 3, rate: "0.691" },
    ],
    upDown: [
      { gear: 1, rate: "0.03" },
      { gear: 2, rate: "0.06" },
      { gear: 3, rate: "0.15" },
    ],
  };

  // Combined description/features text for XTFF120 (as a single block)
  // Replaced bullet-point structure with paragraph breaks (<br>) for the requested continuous text style.
  const xtff120CombinedDescription = `XTORC Flange Facing machine is designed for on-site machining with lightweight capabilities and high accuracy consideration, it Adopts ascendant Processing technology to make sure the best accurateness and high efficiency. It's widely used for petroleum, Chemical industry, electric plant, ship building, wind power, energy, defense etc. 

Large, industrial grade, high precision rotary bearings provide stable, smooth motion output throughout the entire machine facing range, it can easily handle challenging flange repair applications to meet or restore the demanding requirements of the manufacturer.

Flange facing machine adopt independent design of quick model parts, therefore, it's fast to mount it and machining. An experienced operator will finish the mounting processing within an hour according the rightful operating process. Pneumatic & hydraulic drive options available, it can achieve cuts up to a maximum depth of 2mm (0.079") on flanges without bolt holes or 0.5mm (0.02") with holes.

Tube sheet mounting kit adds a mounted way for heat exchanger repair. Milling head and distributor hoses for rotary milling. Back facing kit available for heat exchanger flange back faces in one setup.`;


  return (
    <div className="bg-black text-white" style={{ fontFamily: 'Poppins, sans-serif' }}>
      {/* Header with white background */}
      <div className="bg-white py-6">
        <div className="flex items-center justify-center gap-2 text-black">
          <span className="font-medium px-2">Bolt Tensioning Solutions</span>
          <FaArrowRightLong className="w-4 h-4 ml-8 mr-8" />
          <span className="font-medium">Flange Facing Machines</span>
        </div>
      </div>

      {/* Main content */}
      <div className="w-9/10 mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Section (Introductory Text) */}
          <div className="space-y-6">
            {/* Title with Impact font */}
            <div className="w-fit">
              <h1 className="text-4xl font-bold text-white mb-2">
                Flange Facing Machines
              </h1>
              <div className="w-full rounded-2xl h-1 bg-red-600 mt-2"></div>
            </div>

            {/* Description */}
            <div className="space-y-4 text-body text-justify">
              <p>
                The equipment performs precision in-line cut or simultaneous cut/bevel, single cut/bevel, counterbore
                and flange facing operations, as well as weld end preparation on open ended pipe, ranging from 2 to 56
                inches. O.D. (DN20-1400), on most wall thickness and material.
              </p>
            </div>
          </div>

          {/* Right Section (Image/Download) */}
          <div className="space-y-6">
            <div className="relative">
              <div className="bg-white rounded-2xl p-6 border-t-12 border-r-12 border-red-600 shadow-[0_10px_30px_rgba(255,255,255,0.25)] hover:shadow-[0_10px_30px_rgba(208,26,26,0.6)] transition-shadow duration-300 rounded-3xl h-[400px] flex items-center justify-center">
                <img
                  src="flangefacing.png"
                  alt="Flange Facing Machine"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            {/* <div className="flex justify-center">
              <button
                className="text-red-600 px-8 py-3 rounded-2xl text-2xl font-bold hover:bg-red-700 hover:text-white transition-colors"
                style={{ backgroundColor: '#ffffff' }}
              >
                Download Catalog
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

        {/* --- XTFF24 Flange Facer Details --- */}
        <div className="mt-20">
          <div>
            <h2 className="text-4xl text-center text-white mb-2" >
              XTFF24 FLANGE FACER
            </h2>
            <div className="w-120 rounded-2xl h-1 bg-red-600 mx-auto" style={{ maxWidth: '400px' }}></div>
          </div>
          <p className="mt-8 text-body text-center">
            The XTFF24 Flange Facer is a versatile machine that allows you to face, bevel, and turn pipe, valve, and pump flanges with ease, delivering machine shop accuracy. Its three-piece mounting system makes setup and alignment quick and simple, allowing a single operator to begin machining in just a few minutes.
          </p>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="space-y-2">
              <h3 className="text-2xl font-bold text-red-600">SUPERIOR MACHINING</h3>
              <p className="text-lg text-gray-300">
                It can perform flat face, continuous groove facing feeds, RTJ groove cutting, and more.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-2xl font-bold text-red-600">LIGHTWEIGHT & PRECISE BODY</h3>
              <p className="text-lg text-gray-300">
                A modular design using high-intensity materials and advanced processing technology ensures the highest accuracy.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-2xl font-bold text-red-600">BASE ASSEMBLY</h3>
              <p className="text-lg text-gray-300">
                Equipped with three high-strength alloy steel mounting bases with threaded inserts and adjustable feet to enable perfect leveling and centering on any flange from 50mm (2") to 610mm (24") in diameter.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-2xl font-bold text-red-600">QUICK SET UP</h3>
              <p className="text-lg text-gray-300">
                The machine adopts an independent design of quick model parts, making it fast to mount and begin machining. An experienced operator can complete the setup within an hour.
              </p>
            </div>
            <div className="space-y-2 md:col-span-2">
              <h3 className="text-2xl font-bold text-red-600">DRIVE POWER UNIT</h3>
              <p className="text-lg text-gray-300">
                Powered by a 0.8KW (1.2HP) Pneumatic motor or a 0.75KW Servo motor. It achieves cuts up to a maximum depth of 2mm (0.079") on flanges without bolt holes or 0.5mm (0.02") with holes. It can achieve a flatness better than 0.02mm at 558mm (22") diameter.
              </p>
            </div>
          </div>

          <div className="mt-20">
            <div className="border border-gray-600 rounded-lg overflow-x-auto no-scrollbar">
              <div className="bg-gray-800 py-4">
                <h3 className="text-3xl text-white text-center mb-2" >TECHNICAL DETAILS (XTFF24)</h3>
              </div>
              <div className="divide-y divide-gray-700">
                {[
                  { label: "Facing Diameter Range", value: "50-610mm (2-24\")" },
                  { label: "I.D Clamp Range", value: "50-610mm (2-24\")" },
                  { label: "Min Swing Diameter", value: "515mm" },
                  { label: "Tool Post Stroke", value: "50 (2\")" },
                  { label: "Tool Post Swivel Angle", value: "+ / - 30°" },
                  { label: "R.P.M", value: "0-42" },
                  { label: "Drive Power Unit - Pneumatic", value: "1. 2Hp (0.8 Kw)" },
                  { label: "Air Consumption / Supply Required", value: "1.2m³/min" },
                  { label: "Drive Power Unit - Electric", value: "1HP (0.75kw)" },
                  { label: "Electric Requirements", value: "Single phase, 110V/230V, 50/60HZ" },
                  { label: "Machine Weight", value: "45Kg" },
                ].map((item, index) => (
                  <div key={index} className="grid grid-cols-2 bg-black hover:bg-gray-900 transition-colors">
                    <div className="p-4 text-xl font-medium text-gray-300 border-r border-gray-700">{item.label}</div>
                    <div className="p-4 text-xl text-white text-right">{item.value}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="border border-gray-600 rounded-lg overflow-x-auto no-scrollbar mt-10">
              <div className="bg-gray-800 py-4">
                <h3 className="text-3xl text-white text-center mb-2" >FEED RATES (XTFF24)</h3>
              </div>
              <div className="divide-y divide-gray-700">
                {[
                  { label: "Facing Feed (1.75mm Pitch Feed Screw)", value: "0.10/0.41mm" },
                  { label: "Facing Feed (3mm Pitch Feed Screw)", value: "0.18/0.71mm" },
                ].map((item, index) => (
                  <div key={index} className="grid grid-cols-2 bg-black hover:bg-gray-900 transition-colors">
                    <div className="p-4 text-xl font-medium text-gray-300 border-r border-gray-700">{item.label}</div>
                    <div className="p-4 text-xl text-white text-right">{item.value}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        {/* --- XTFF40 Flange Facer Details --- */}
        <div className="mt-20">
          <div>
            <h2 className="text-4xl text-center text-white mb-2" >
              XTFF40 FLANGE FACER
            </h2>
            <div className="w-120 rounded-2xl h-1 bg-red-600 mx-auto" style={{ maxWidth: '400px' }}></div>
          </div>

          <p className="mt-8 text-body text-center">
            The XTFF40 Flange Facer is a versatile flange facing machine that allows you to face, bevel, and turn pipe, valve, and pump flanges with ease, delivering machine shop accuracy. The two-piece mounting system makes setup and alignment of this machine quick and easy. It allows one operator to easily set up the machine and begin machining in just a few minutes.
          </p>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="space-y-2">
              <h3 className="text-2xl font-bold text-red-600">SUPERIOR MACHINING</h3>
              <p className="text-lg text-gray-300">
                It can cut "O" Ring grooves, RTJ and other V grooves, standard and compact flange facings, weld preparations, etc.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-2xl font-bold text-red-600">LIGHTWEIGHT & PRECISE BODY</h3>
              <p className="text-lg text-gray-300">
                Modular structural design, high-intensity of material and processing technology, which makes sure the accuracy of processing.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-2xl font-bold text-red-600">BASE ASSEMBLY</h3>
              <p className="text-lg text-gray-300">
                Equipped with two pieces high strength mounting base unit with steel threaded inserts, and adjustable feet enable the machine to be installed perfectly level and central in any flange from 150mm (6") to 860mm (34") in diameter.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-2xl font-bold text-red-600">QUICK SET UP</h3>
              <p className="text-lg text-gray-300">
                Flange facing machine adopt independent design of quick model parts, therefore, it's fast to mount it and machining. An experienced operator will finish the mounting processing within an hour according the rightful operating process.
              </p>
            </div>
            <div className="space-y-2 md:col-span-2">
              <h3 className="text-2xl font-bold text-red-600">DRIVE POWER UNIT</h3>
              <p className="text-lg text-gray-300">
                The machine is driven by a 1.7KW (2.2HP) Pneumatic motor, it can achieve cuts up to a maximum depth of 2mm (0.079") on flanges without bolt holes or 0.2mm with holes and can achieve a flatness better than 0.02mm at 762mm (30") diameter.
              </p>
            </div>
          </div>

          <div className="mt-20">
            <div className="border border-gray-600 rounded-lg overflow-x-auto no-scrollbar">
              <div className="bg-gray-800 py-4">
                <h3 className="text-3xl text-white text-center mb-2" >TECHNICAL DETAILS (XTFF40)</h3>
              </div>
              <div className="divide-y divide-gray-700">
                {xtff40TechnicalDetails.map((item, index) => (
                  <div key={index} className="grid grid-cols-2 bg-black hover:bg-gray-900 transition-colors">
                    <div className="p-4 text-xl font-medium text-gray-300 border-r border-gray-700">{item.label}</div>
                    <div className="p-4 text-xl text-white text-right">{item.value}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="border border-gray-600 rounded-lg overflow-x-auto no-scrollbar mt-10">
              <div className="bg-gray-800 py-4">
                <h3 className="text-3xl text-white text-center mb-2" >FEED RATES (XTFF40)</h3>
              </div>
              <div className="grid grid-cols-3 divide-x divide-gray-700 bg-gray-900 text-lg font-bold">
                <div className="p-3 text-center text-red-600">IN (mm/rev)</div>
                <div className="p-3 text-center text-red-600">OUT (mm/rev)</div>
                <div className="p-3 text-center text-red-600">UP/DOWN (mm/rev)</div>
              </div>
              {Array.from({ length: 3 }).map((_, index) => (
                <div key={index} className="grid grid-cols-3 divide-x divide-gray-700 bg-black hover:bg-gray-900 transition-colors">
                  <div className="grid grid-cols-2 divide-x divide-gray-700">
                    <div className="p-4 text-lg font-medium text-gray-300 text-center">Gear {xtff40FeedRates.in[index].gear}</div>
                    <div className="p-4 text-lg text-white text-right">{xtff40FeedRates.in[index].rate}</div>
                  </div>
                  <div className="grid grid-cols-2 divide-x divide-gray-700">
                    <div className="p-4 text-lg font-medium text-gray-300 text-center">Gear {xtff40FeedRates.out[index].gear}</div>
                    <div className="p-4 text-lg text-white text-right">{xtff40FeedRates.out[index].rate}</div>
                  </div>
                  <div className="grid grid-cols-2 divide-x divide-gray-700">
                    <div className="p-4 text-lg font-medium text-gray-300 text-center">Gear {xtff40FeedRates.upDown[index].gear}</div>
                    <div className="p-4 text-lg text-white text-right">{xtff40FeedRates.upDown[index].rate}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* --- XTFF60 FLANGE FACER Details --- */}
        <div className="mt-20">
          <div>
            <h2 className="text-4xl text-center text-white mb-2" >
              XTFF60 FLANGE FACER
            </h2>
            <div className="w-120 rounded-2xl h-1 bg-red-600 mx-auto" style={{ maxWidth: '400px' }}></div>
          </div>

          <p className="mt-8 text-body text-center">
            The XTFF60 Flange Facer is designed with a reinforced center spindle and a rotating cutter arm for achieving stronger stability during cutting.
          </p>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="space-y-2">
              <h3 className="text-2xl font-bold text-red-600">SUPERIOR MACHINING</h3>
              <p className="text-lg text-gray-300">
                It can achieve working without mounting base unit, typical applications for on-site machining of heat exchanger, blind flange, and so on. This provides users with the flexibility to make more cuts including cut "O" Ring grooves, RTJ and other V grooves, standard and compact flange facings, weld preparations, and other surfaces.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-2xl font-bold text-red-600">PRECISE BODY</h3>
              <p className="text-lg text-gray-300">
                Precision machined dovetail ways and adjustable Turret coated gibes provide smooth accurate travel, and can give machine shop accuracy.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-2xl font-bold text-red-600">BASE ASSEMBLY</h3>
              <p className="text-lg text-gray-300">
                Equipped with two pieces high strength mounting base unit with steel threaded inserts, and adjustable feet enable the machine to be installed perfectly level and central in any flange from 500mm to 1650mm in diameter.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-2xl font-bold text-red-600">DRIVE POWER UNIT</h3>
              <p className="text-lg text-gray-300">
                The machine is driven by a 3.5HP pneumatic motor. It can achieve cuts up to a maximum depth of 2mm (0.079") on flanges without bolt holes or 0.5mm (0.02") with holes.
              </p>
            </div>
          </div>

          <div className="mt-20">
            <div className="border border-gray-600 rounded-lg overflow-x-auto no-scrollbar">
              <div className="bg-gray-800 py-4">
                <h3 className="text-3xl text-white text-center mb-2" >TECHNICAL DETAILS (XTFF60)</h3>
              </div>
              <div className="divide-y divide-gray-700">
                {xtff60TechnicalDetails.map((item, index) => (
                  <div key={index} className="grid grid-cols-2 bg-black hover:bg-gray-900 transition-colors">
                    <div className="p-4 text-xl font-medium text-gray-300 border-r border-gray-700">{item.label}</div>
                    <div className="p-4 text-xl text-white text-right">{item.value}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="border border-gray-600 rounded-lg overflow-x-auto no-scrollbar mt-10">
              <div className="bg-gray-800 py-4">
                <h3 className="text-3xl text-white text-center mb-2" >FEED RATES (XTFF60)</h3>
              </div>
              <div className="grid grid-cols-3 divide-x divide-gray-700 bg-gray-900 text-lg font-bold">
                <div className="p-3 text-center text-red-600">IN (mm/rev)</div>
                <div className="p-3 text-center text-red-600">OUT (mm/rev)</div>
                <div className="p-3 text-center text-red-600">UP/DOWN (mm/rev)</div>
              </div>
              {Array.from({ length: 3 }).map((_, index) => (
                <div key={index} className="grid grid-cols-3 divide-x divide-gray-700 bg-black hover:bg-gray-900 transition-colors">
                  <div className="grid grid-cols-2 divide-x divide-gray-700">
                    <div className="p-4 text-lg font-medium text-gray-300 text-center">Gear {xtff60FeedRates.in[index].gear}</div>
                    <div className="p-4 text-lg text-white text-right">{xtff60FeedRates.in[index].rate}</div>
                  </div>
                  <div className="grid grid-cols-2 divide-x divide-gray-700">
                    <div className="p-4 text-lg font-medium text-gray-300 text-center">Gear {xtff60FeedRates.out[index].gear}</div>
                    <div className="p-4 text-lg text-white text-right">{xtff60FeedRates.out[index].rate}</div>
                  </div>
                  <div className="grid grid-cols-2 divide-x divide-gray-700">
                    <div className="p-4 text-lg font-medium text-gray-300 text-center">Gear {xtff60FeedRates.upDown[index].gear}</div>
                    <div className="p-4 text-lg text-white text-right">{xtff60FeedRates.upDown[index].rate}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* --- XTFF80 FLANGE FACER Details --- */}
        <div className="mt-20">
          <div>
            <h2 className="text-4xl text-center text-white mb-2" >
              XTFF80 FLANGE FACER
            </h2>
            <div className="w-120 rounded-2xl h-1 bg-red-600 mx-auto" style={{ maxWidth: '400px' }}></div>
          </div>

          <p className="mt-8 text-body text-center">
            The XTFF80 Flange Facer is designed with light and high precision consideration of different countries. It adopts ascendant Processing technology to make sure the best accurateness and high efficiency. It's widely used for petroleum, chemical industry, electric plant, ship rebuilding.
          </p>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="space-y-2">
              <h3 className="text-2xl font-bold text-red-600">SUPERIOR MACHINING</h3>
              <p className="text-lg text-gray-300">
                It can achieve working without mounting base unit, typical applications for on-site machining of heat exchanger, blind flange, and so on. This provides users with the flexibility to make more cuts including chamfers, O-ring grooves, RTJ grooves, lens rings, beveling, and other surfaces.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-2xl font-bold text-red-600">LIGHTWEIGHT & PRECISE BODY</h3>
              <p className="text-lg text-gray-300">
                Modular structural design, high-intensity of material with Processing technology, which makes sure the accuracy of processing.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-2xl font-bold text-red-600">QUICK SET UP</h3>
              <p className="text-lg text-gray-300">
                Flange facing machine adopt independent design of quick model parts, therefore, it's fast to mount it and machining. An experienced operator will finish the mounting processing within an hour according the rightful operating process.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-2xl font-bold text-red-600">DRIVE UNIT</h3>
              <p className="text-lg text-gray-300">
                The machine is driven by a 4HP pneumatic motor. It can achieve cuts up to a maximum depth of 2mm (0.079") on flanges without bolt holes or 0.5mm (0.02") with holes.
              </p>
            </div>
          </div>

          <div className="mt-20">
            <div className="border border-gray-600 rounded-lg overflow-x-auto no-scrollbar">
              <div className="bg-gray-800 py-4">
                <h3 className="text-3xl text-white text-center mb-2" >TECHNICAL DETAILS (XTFF80)</h3>
              </div>
              <div className="divide-y divide-gray-700">
                {xtff80TechnicalDetails.map((item, index) => (
                  <div key={index} className="grid grid-cols-2 bg-black hover:bg-gray-900 transition-colors">
                    <div className="p-4 text-xl font-medium text-gray-300 border-r border-gray-700">{item.label}</div>
                    <div className="p-4 text-xl text-white text-right">{item.value}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="border border-gray-600 rounded-lg overflow-x-auto no-scrollbar mt-10">
              <div className="bg-gray-800 py-4">
                <h3 className="text-3xl text-white text-center mb-2" >FEED RATES (XTFF80)</h3>
              </div>
              <div className="grid grid-cols-3 divide-x divide-gray-700 bg-gray-900 text-lg font-bold">
                <div className="p-3 text-center text-red-600">IN (mm/rev)</div>
                <div className="p-3 text-center text-red-600">OUT (mm/rev)</div>
                <div className="p-3 text-center text-red-600">UP/DOWN (mm/rev)</div>
              </div>
              {Array.from({ length: 3 }).map((_, index) => (
                <div key={index} className="grid grid-cols-3 divide-x divide-gray-700 bg-black hover:bg-gray-900 transition-colors">
                  <div className="grid grid-cols-2 divide-x divide-gray-700">
                    <div className="p-4 text-lg font-medium text-gray-300 text-center">Gear {xtff80FeedRates.in[index].gear}</div>
                    <div className="p-4 text-lg text-white text-right">{xtff80FeedRates.in[index].rate}</div>
                  </div>
                  <div className="grid grid-cols-2 divide-x divide-gray-700">
                    <div className="p-4 text-lg font-medium text-gray-300 text-center">Gear {xtff80FeedRates.out[index].gear}</div>
                    <div className="p-4 text-lg text-white text-right">{xtff80FeedRates.out[index].rate}</div>
                  </div>
                  <div className="grid grid-cols-2 divide-x divide-gray-700">
                    <div className="p-4 text-lg font-medium text-gray-300 text-center">Gear {xtff80FeedRates.upDown[index].gear}</div>
                    <div className="p-4 text-lg text-white text-right">{xtff80FeedRates.upDown[index].rate}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* ==================================================================================== */}
        {/* --- XTFF120 FLANGE FACER (MODIFIED TO SINGLE TEXT BLOCK) --- */}
        {/* ==================================================================================== */}
        <div className="mt-20">
          {/* Section Title */}
          <div>
            <h2 className="text-4xl text-center text-white mb-2" >
              XTFF120 FLANGE FACER
            </h2>
            <div className="w-120 rounded-2xl h-1 bg-red-600 mx-auto" style={{ maxWidth: '400px' }}></div>
          </div>

          {/* Combined Description/Features Block (NO POINTS, NO IMAGE) */}
          <div className="mt-8 text-xl text-gray-200 leading-relaxed text-justify text-justify">
            <p dangerouslySetInnerHTML={{ __html: xtff120CombinedDescription }} className="whitespace-pre-wrap"></p>
          </div>

          {/* Technical Details and Feed Rates Table (from image_ee6f63.jpg) */}
          <div className="mt-20">
            {/* Technical Details Table */}
            <div className="border border-gray-600 rounded-lg overflow-x-auto no-scrollbar">
              <div className="bg-gray-800 py-4">
                <h3 className="text-3xl text-white text-center mb-2" >TECHNICAL DETAILS (XTFF120)</h3>
              </div>
              <div className="divide-y divide-gray-700">
                {xtff120TechnicalDetails.map((item, index) => (
                  <div key={index} className="grid grid-cols-2 bg-black hover:bg-gray-900 transition-colors">
                    <div className="p-4 text-xl font-medium text-gray-300 border-r border-gray-700">{item.label}</div>
                    <div className="p-4 text-xl text-white text-right">{item.value}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Feed Rates Table */}
            <div className="border border-gray-600 rounded-lg overflow-x-auto no-scrollbar mt-10">
              <div className="bg-gray-800 py-4">
                <h3 className="text-3xl text-white text-center mb-2" >FEED RATES (XTFF120)</h3>
              </div>
              <div className="grid grid-cols-3 divide-x divide-gray-700 bg-gray-900 text-lg font-bold">
                <div className="p-3 text-center text-red-600">IN (mm/rev)</div>
                <div className="p-3 text-center text-red-600">OUT (mm/rev)</div>
                <div className="p-3 text-center text-red-600">UP/DOWN (mm/rev)</div>
              </div>
              {Array.from({ length: 3 }).map((_, index) => (
                <div key={index} className="grid grid-cols-3 divide-x divide-gray-700 bg-black hover:bg-gray-900 transition-colors">
                  <div className="grid grid-cols-2 divide-x divide-gray-700">
                    <div className="p-4 text-lg font-medium text-gray-300 text-center">Gear {xtff120FeedRates.in[index].gear}</div>
                    <div className="p-4 text-lg text-white text-right">{xtff120FeedRates.in[index].rate}</div>
                  </div>
                  <div className="grid grid-cols-2 divide-x divide-gray-700">
                    <div className="p-4 text-lg font-medium text-gray-300 text-center">Gear {xtff120FeedRates.out[index].gear}</div>
                    <div className="p-4 text-lg text-white text-right">{xtff120FeedRates.out[index].rate}</div>
                  </div>
                  <div className="grid grid-cols-2 divide-x divide-gray-700">
                    <div className="p-4 text-lg font-medium text-gray-300 text-center">Gear {xtff120FeedRates.upDown[index].gear}</div>
                    <div className="p-4 text-lg text-white text-right">{xtff120FeedRates.upDown[index].rate}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* End of XTFF120 section */}
        {/* ==================================================================================== */}

{/* --- XTFF178 CIRCULAR MILL --- */}
{/* ==================================================================================== */}
<div className="mt-20">
  {/* Section Title */}
  <div>
    <h2
      className="text-4xl text-center text-white mb-2"
      
    >
      XTFF178 CIRCULAR MILL
    </h2>
    <div
      className="w-120 rounded-2xl h-1 bg-red-600 mx-auto"
      style={{ maxWidth: "400px" }}
    ></div>
  </div>

  {/* Description */}
  <div className="mt-8 text-xl text-gray-200 leading-relaxed text-justify space-y-4 text-justify">
    <p>
      XTFF178 Circular Mills is designed for machining of large flanges, wind turbine rotor blades,
      and wind turbine tower flanges. Crane pedestals and heavy construction and mining.
    </p>

    <h3 className="text-2xl font-bold text-red-600 mt-6">
      PRECISE BEARING &amp; STEADY MAIN BODY
    </h3>
    <p>
      Provide the most powerful guarantee for machining using precise bearing &amp; steady main
      body, equipped with adjustment leg and jacking leg, various sizes of feet. Easy and fast to
      install on site.
    </p>

    <h3 className="text-2xl font-bold text-red-600 mt-6">SMOOTH CUTTING</h3>
    <p>
      All feed of milling spindle head adopt precision machined dovetail ways and adjustable Turcite-B
      coated gibes provide smooth accurate travel.
    </p>

    <h3 className="text-2xl font-bold text-red-600 mt-6">ROTARY UNION</h3>
    <p>
      Solve the problem of oil hosing winding using rotary joints when the machine is rotating.
    </p>

    <h3 className="text-2xl font-bold text-red-600 mt-6">DRIVE UNIT</h3>
    <p>
      The machine is driven by (2) 3.5HP hydraulic motors to effectively eliminate the gap of gears
      and ensure smooth cutting. Hydraulic power provides the greatest possibility for cutting. It
      can achieve cuts up to a maximum depth of 2mm on flanges.
    </p>
  </div>

  {/* Technical Details */}
  <div className="mt-20">
    <div className="border border-gray-600 rounded-lg overflow-x-auto no-scrollbar">
      <div className="bg-gray-800 py-4">
        <h3
          className="text-3xl text-white text-center mb-2"
          
        >
          TECHNICAL DETAILS (XTFF178)
        </h3>
      </div>

      <div className="divide-y divide-gray-700">
        {[
          { label: "Facing Diameter Range", value: "2000-4500mm (78-178\")" },
          { label: "I.D Clamp Range", value: "0-4300mm (75-169\")" },
          { label: "Rotation RPM", value: "0-3" },
          { label: "Rotation Drive Unit - Hydraulic", value: "(2) × 3.5HP (2.6kW)" },
          { label: "Spindle Head Slide Stroke Spindle", value: "1000mm (39\")" },
          { label: "Head Stroke", value: "250mm (10\")" },
          { label: "Spindle Head Taper", value: "NT50" },
          { label: "Spindle Drive Power Unit - Hydraulic", value: "25HP (18.5kW)" },
          { label: "Machine Weight", value: "4450Kg" },
          { label: "Shipping Weight", value: "6220Kg" },
        ].map((item, index) => (
          <div
            key={index}
            className="grid grid-cols-2 bg-black hover:bg-gray-900 transition-colors"
          >
            <div className="p-4 text-xl font-medium text-gray-300 border-r border-gray-700">
              {item.label}
            </div>
            <div className="p-4 text-xl text-white text-right">{item.value}</div>
          </div>
        ))}
      </div>
    </div>
  </div>
</div>
{/* End of XTFF178 Section */}
{/* --- XTFM12M MINI FLANGE FACER --- */}
<div className="mt-20">
  <div>
    <h2 className="text-4xl text-center text-white mb-2" >
      XTFM12M MINI FLANGE FACER
    </h2>
    <div className="w-120 rounded-2xl h-1 bg-red-600 mx-auto" style={{ maxWidth: '400px' }}></div>
  </div>

  {/* Description */}
  <div className="mt-8 text-body text-center max-w-4xl mx-auto space-y-4">
    <p>
      Our TTFM12M Mini flange facer, easy working flange facing repair, easy to operate.
    </p>
    <p>
      Allows any technician to recondition RF/FF and other gasket settings in situ, the internal diameter that can be clamped is 25.4mm to 254mm.
      Due to clamping and machining range, the Mini facer is a very efficient tool for service or repair workshop
      but also for piping construction companies and vessel manufacturers.
    </p>
  </div>

  {/* Technical Details */}
  <div className="mt-20">
    <div className="border border-gray-600 rounded-lg overflow-x-auto no-scrollbar">
      <div className="bg-gray-800 py-4">
        <h3 className="text-3xl text-white text-center mb-2" >
          TECHNICAL DETAILS (XTFM12M)
        </h3>
      </div>

      <div className="divide-y divide-gray-700">
        {[
          { label: "Min facing diameter", value: "25.4mm" },
          { label: "Max facing diameter", value: "350mm" },
          { label: "Tool post travel", value: "70mm" },
        ].map((item, index) => (
          <div
            key={index}
            className="grid grid-cols-2 bg-black hover:bg-gray-900 transition-colors"
          >
            <div className="p-4 text-xl font-medium text-gray-300 border-r border-gray-700">
              {item.label}
            </div>
            <div className="p-4 text-xl text-white text-right">{item.value}</div>
          </div>
        ))}
      </div>
    </div>

    {/* Ultra-Portable Section */}
    <div className="border border-gray-600 rounded-lg overflow-x-auto no-scrollbar mt-10">
      <div className="bg-gray-800 py-4">
        <h3 className="text-3xl text-white text-center mb-2" >
          ULTRA-PORTABLE
        </h3>
      </div>

      <div className="divide-y divide-gray-700">
        {[
          { label: "Machine weight", value: "7 KG" },
          { label: "Packing total", value: "11 KG" },
        ].map((item, index) => (
          <div
            key={index}
            className="grid grid-cols-2 bg-black hover:bg-gray-900 transition-colors"
          >
            <div className="p-4 text-xl font-medium text-gray-300 border-r border-gray-700">
              {item.label}
            </div>
            <div className="p-4 text-xl text-white text-right">{item.value}</div>
          </div>
        ))}
      </div>
    </div>
  </div>
</div>
{/* End of XTFM12M Section */}


        
      </div>
    </div>
  );
};

export default FlangeFacingMachine;