// import React from "react";
// import { FaArrowRightLong } from "react-icons/fa6";

// const Xep700= () => {
//   return (
//     <div
//       className="bg-black text-white"
//       style={{ fontFamily: "Poppins, sans-serif" }}
//     >
//       {/* Header with white background */}
//       <div className="bg-white py-6">
//         <div className="flex items-center justify-center gap-2 text-black">
//           <span className="font-medium px-2">Bolt Tensioning Solutions</span>
//           <FaArrowRightLong className="w-4 h-4 ml-8 mr-8" />
//           <span className="font-medium">XEP 700</span>
//         </div>
//       </div>

//       {/* Main content */}
//       <div className="max-w-[1100px] mx-auto w-full px-4 py-12">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
//           {/* Left Section */}
//           <div className="space-y-6">
//             {/* Title with Impact font */}
//             <div>
//               <h1 className="text-2xl sm:text-3xl lg:text-4xl px-10 text-center font-bold text-white mb-2" >
//                     XEP 700




//               </h1>
//               <div className="rounded-2xl h-1 bg-red-600"></div>
//             </div>

//             {/* Description */}
//  <div className="space-y-4 text-body text-justify">
//                Hydraulic Pump with Three Phase Electric Motor
//  ATEX Certified Version CE Ex li 2 G K T3
//  ATEX Zone-2 Class T3 Gas Group IIA<br/>
//  • Three Phase Electric Motor 1.1 kW 440V <br/>
//  • Axial-piston pump mod<br/>
//  • 3/2 solenoid valve 24DC and inversion valve
//  Weight
//  Kg (Lbs)
//  36 (79)<br/>
//  • Oil flow 9.4 Litres/min @ 0-70 Bar (2.48 g/min@1015 PSI) and
//  0.9 Litres/min @ 700 Bar (0.23 g/min@ 10000 PSI)<br/>
//  • Pressure regulator on P Line to set the torque value
//  Adjustable Relief Valve on return line
//  Pressure Gauge DN 100 range 0-1000 Bar (14500 PSI)<br/>
//  • Reservoir Capacity 10 Litres (2.64 Gallon)<br/>
//  • Recommended Hydraulic Oil ISO 32 and above Also available 
// in Air Operated Type (PAE-ATEX)<br/>
//  • The pump includes remote control and electric box

//             </div> 
//           </div>

//           {/* Right Section */}
//           <div className="space-y-6">
//             {/* Product Image */}
//             <div className="relative">
//               <div
//                 className="bg-white rounded-2xl p-6 border-t-12 border-r-12 border-red-600 shadow-[0_10px_30px_rgba(255,255,255,0.25)] hover:shadow-[0_10px_30px_rgba(208,26,26,0.6)] transition-shadow duration-300 // rounded-3xl // sm:h-[400px] h-[200px] flex items-center justify-center text-black">
//                 <img
//                   src="images/Power-Pack/XEP700.png"
//                   alt=" image Not provided"
//                   className="w-full h-full object-contain"
//                 />
//               </div>
//             </div>

//             {/* Download Catalog Button */}
//             <div className="flex justify-center">
//               <button
//                 className="text-red-600 px-8 py-3 rounded-2xl text-2xl font-bold hover:bg-red-700 hover:text-white transition-colors"
//                 style={{ backgroundColor: "#ffffff" }}
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

// export default Xep700;





// import React from "react";
// import { FaArrowRightLong } from "react-icons/fa6";

// const Xep700= () => {
//   // Data for the Technical Specification table
//   const techSpecs = [
//     { label: "Model No.", value: "XEP-700" },
//     { label: "Power Rating Flow Rate", value: "1.5 KW" },
//     { label: "Maximum Pressure", value: "700Bar/10,000 PSI" },
//     { label: "Flow Rate", value: (
//       <>
//         9.7LPM @ 70Bar<br />
//         0.97LPM @ 700 Bar
//       </>
//     )},
//     { label: "Capacity", value: "6 Ltr./2 Gallon" },
//   ];

//   return (
//     <div
//       className="bg-black text-white"
//       style={{ fontFamily: "Poppins, sans-serif" }}
//     >
//       {/* Header with white background */}
//       <div className="bg-white py-6">
//         <div className="flex items-center justify-center gap-2 text-black">
//           <span className="font-medium px-2">Bolt Tensioning Solutions</span>
//           <FaArrowRightLong className="w-4 h-4 ml-8 mr-8" />
//           <span className="font-medium">XEP 700</span>
//         </div>
//       </div>

//       {/* Main content */}
//       <div className="max-w-[1100px] mx-auto w-full px-4 py-12">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
//           {/* Left Section */}
//           <div className="space-y-6">
//             {/* Title with Impact font */}
//             <div>
//               <h1 className="text-2xl sm:text-3xl lg:text-4xl px-10 text-center font-bold text-white mb-2" >
//                 XEP 700
//               </h1>
//               <div className="rounded-2xl h-1 bg-red-600"></div>
//             </div>

//             {/* Description */}
//             <div className="space-y-4 text-body text-justify">
//               <p>
//                 Hydraulic Pump with Three Phase Electric Motor
//                 <br />
//                 ATEX Certified Version CE Ex li 2 G K T3
//                 <br />
//                 ATEX Zone-2 Class T3 Gas Group IIA
//               </p>
//               <ul>
//                 <li><span className="font-semibold text-red-600">•</span> Three Phase Electric Motor 1.1 kW 440V</li>
//                 <li><span className="font-semibold text-red-600">•</span> Axial-piston pump mod</li>
//                 <li><span className="font-semibold text-red-600">•</span> 3/2 solenoid valve 24DC and inversion valve</li>
//               </ul>
//               <p>Weight: Kg (Lbs) 36 (79)</p>
//               <ul>
//                 <li><span className="font-semibold text-red-600">•</span> Oil flow 9.4 Litres/min @ 0-70 Bar (2.48 g/min@1015 PSI) and 0.9 Litres/min @ 700 Bar (0.23 g/min@ 10000 PSI)</li>
//                 <li><span className="font-semibold text-red-600">•</span> Pressure regulator on P Line to set the torque value</li>
//                 <li><span className="font-semibold text-red-600">•</span> Adjustable Relief Valve on return line</li>
//                 <li><span className="font-semibold text-red-600">•</span> Pressure Gauge DN 100 range 0-1000 Bar (14500 PSI)</li>
//                 <li><span className="font-semibold text-red-600">•</span> Reservoir Capacity 10 Litres (2.64 Gallon)</li>
//                 <li><span className="font-semibold text-red-600">•</span> Recommended Hydraulic Oil ISO 32 and above Also available in Air Operated Type (PAE-ATEX)</li>
//                 <li><span className="font-semibold text-red-600">•</span> The pump includes remote control and electric box</li>
//               </ul>
//             </div>
//           </div>

//           {/* Right Section */}
//           <div className="space-y-6">
//             {/* Product Image */}
//             <div className="relative">
//               <div
//                 className="bg-white rounded-2xl p-6 border-t-12 border-r-12 border-red-600 shadow-[0_10px_30px_rgba(255,255,255,0.25)] hover:shadow-[0_10px_30px_rgba(208,26,26,0.6)] transition-shadow duration-300 // rounded-3xl // sm:h-[400px] h-[200px] flex items-center justify-center text-black">
//                 <img
//                   src="images/Power-Pack/XEP700.png"
//                   alt="XEP 700"
//                   className="w-full h-full object-contain"
//                 />
//               </div>
//             </div>

//             {/* Download Catalog Button */}
//             <div className="flex justify-center">
//               <button
//                 className="text-red-600 px-8 py-3 rounded-2xl text-2xl font-bold hover:bg-red-700 hover:text-white transition-colors"
//                 style={{ backgroundColor: "#ffffff" }}
//               >
//                 Download Catalog
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* ------------------------------------------------------------- */}

//       {/* NEW SECTION: Safety Features & Technical Specs */}
//       <div className="max-w-[1100px] mx-auto w-full px-4 py-12">
//         <h2 className="text-xl font-bold text-red-600 mb-6">EQUIPPED WITH SAFETY FEATURES</h2>
//         <p className="text-sm text-white mb-6">NOTE: Also available as Conventional Electric Power pack. Pump will be supplied with Remote Control Pendant</p>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           {/* With Auto Cycle Section */}
//           <div className="flex flex-col items-center text-center">
//             <h3 className="font-bold text-white mb-4">With Auto Cycle</h3>
//             <div className="bg-white p-2 rounded-lg mb-4">
//               <img src="images/auto-cycle.png" alt="With Auto Cycle" className="w-full max-w-xs" />
//             </div>
//             <div className="text-sm text-gray-300 text-justify w-full">
//               <h4 className="font-semibold text-white mb-2">Fully Automatic Power Pack</h4>
//               <ul className="list-none space-y-2">
//                 <li>• Faster and reliable in operations.</li>
//                 <li>• High repeatability of the bolting process without pressing the button again and again.</li>
//               </ul>
//             </div>
//           </div>

//           {/* Without Auto Cycle Section */}
//           <div className="flex flex-col items-center text-center">
//             <h3 className="font-bold text-white mb-4">Without Auto Cycle</h3>
//             <div className="bg-white p-2 rounded-lg mb-4">
//               <img src="images/without-auto-cycle.png" alt="Without Auto Cycle" className="w-full max-w-xs" />
//             </div>
//           </div>

//           {/* Technical Specification Table Section */}
//           <div className="col-span-1">
//             <h3 className="font-bold text-white mb-4">TECHNICAL SPECIFICATION:</h3>
//             <div className="border border-white/50 w-full shadow-lg">
//               <table className="w-full border-collapse min-w-max">
//                 <tbody>
//                   {techSpecs.map((spec, index) => (
//                     <tr key={index}>
//                       <td className="p-3 border-b border-r border-white/50 bg-gray-800 text-sm md:text-base font-medium">
//                         {spec.label}
//                       </td>
//                       <td className="p-3 border-b border-white/50 bg-black/80 text-center text-sm md:text-base">
//                         {spec.value}
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           </div>
//         </div>
//       </div>

//     </div>
//   );
// };

// export default Xep700;


import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const Xep700 = () => {
  // Data for the Technical Specification table
  const techSpecs = [
    { label: "Model No.", value: "XEP-700" },
    { label: "Power Rating Flow Rate", value: "1.5 KW" },
    { label: "Maximum Pressure", value: "700Bar/10,000 PSI" },
    {
      label: "Flow Rate",
      value: (
        <>
          9.7LPM @ 70Bar
          <br />
          0.97LPM @ 700 Bar
        </>
      ),
    },
    { label: "Capacity", value: "6 Ltr./2 Gallon" },
  ];

  return (
    <div
      className="bg-black text-white"
      style={{ fontFamily: "Poppins, sans-serif" }}
    >
      {/* Header with white background */}
      <div className="bg-white py-6">
        <div className="flex items-center justify-center gap-2 text-black">
          <span className="font-medium px-2">Bolt Tensioning Solutions</span>
          <FaArrowRightLong className="w-4 h-4 ml-8 mr-8" />
          <span className="font-medium">XEP 700</span>
        </div>
      </div>

      {/* Main content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Section */}
          <div className="space-y-6">
            {/* Title with Impact font */}
            <div className="w-fit">
              <h1 className="text-4xl font-bold text-white mb-2">
                XEP 700
              </h1>
              <div className="w-full rounded-2xl h-1 bg-red-600 mt-2"></div>
            </div>

            {/* Description (Existing) */}
            <div className="space-y-4 text-body text-justify">
              <p>
                Hydraulic Pump with Three Phase Electric Motor
                <br />
                ATEX Certified Version CE Ex li 2 G K T3
                <br />
                ATEX Zone-2 Class T3 Gas Group IIA
              </p>
              <ul>
                <li>
                  <span className="font-semibold text-red-600">•</span> Three
                  Phase Electric Motor 1.1 kW 440V
                </li>
                <li>
                  <span className="font-semibold text-red-600">•</span>{" "}
                  Axial-piston pump mod
                </li>
                <li>
                  <span className="font-semibold text-red-600">•</span> 3/2
                  solenoid valve 24DC and inversion valve
                </li>
              </ul>
              <p>Weight: Kg (Lbs) 36 (79)</p>
              <ul>
                <li>
                  <span className="font-semibold text-red-600">•</span> Oil flow
                  9.4 Litres/min @ 0-70 Bar (2.48 g/min@1015 PSI) and 0.9
                  Litres/min @ 700 Bar (0.23 g/min@ 10000 PSI)
                </li>
                <li>
                  <span className="font-semibold text-red-600">•</span>{" "}
                  Pressure regulator on P Line to set the torque value
                </li>
                <li>
                  <span className="font-semibold text-red-600">•</span>{" "}
                  Adjustable Relief Valve on return line
                </li>
                <li>
                  <span className="font-semibold text-red-600">•</span>{" "}
                  Pressure Gauge DN 100 range 0-1000 Bar (14500 PSI)
                </li>
                <li>
                  <span className="font-semibold text-red-600">•</span>{" "}
                  Reservoir Capacity 10 Litres (2.64 Gallon)
                </li>
                <li>
                  <span className="font-semibold text-red-600">•</span>{" "}
                  Recommended Hydraulic Oil ISO 32 and above Also available in
                  Air Operated Type (PAE-ATEX)
                </li>
                <li>
                  <span className="font-semibold text-red-600">•</span> The
                  pump includes remote control and electric box
                </li>
              </ul>
            </div>
          </div>

          {/* Right Section (Existing) */}
          <div className="space-y-6">
            {/* Product Image */}
            <div className="relative">
              <div
                className="bg-white rounded-2xl p-6 border-t-12 border-r-12 border-red-600 shadow-[0_10px_30px_rgba(255,255,255,0.25)] hover:shadow-[0_10px_30px_rgba(208,26,26,0.6)] transition-shadow duration-300 rounded-3xl sm:h-[400px] h-[200px] flex items-center justify-center text-black"
              >
                <img
                  src="images/Power-Pack/XEP700.png"
                  alt="XEP 700"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            {/* Download Catalog Button */}
            {/* <div className="flex justify-center">
              <button
                className="text-red-600 px-8 py-3 rounded-2xl text-2xl font-bold hover:bg-red-700 hover:text-white transition-colors"
                style={{ backgroundColor: "#ffffff" }}
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
          </div>
        </div>
      </div>

      {/* --- NEW SECTION: Safety Features & Technical Specs (RESTYLED) --- */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div>
          <h2 className="text-4xl text-center text-white mb-2" >
            EQUIPPED WITH SAFETY FEATURES
          </h2>
          <div className="w-120 rounded-2xl h-1 bg-red-600 mx-auto" style={{ maxWidth: '500px' }}></div>
        </div>
        <p className="mt-8 text-body text-center">
          NOTE: Also available as Conventional Electric Power pack. Pump will be supplied with Remote Control Pendant
        </p>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column: Features */}
          <div className="space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-center">
              <div>


              </div>
              <div>


              </div>
            </div>

            <div className="space-y-6 text-xl text-gray-300">
              <div>
                <h4 className="text-2xl font-bold text-red-600 mb-2">Fully Automatic Power Pack</h4>
                <ul className="list-disc list-inside space-y-1">
                  <li>Faster and reliable in operations.</li>
                  <li>High repeatability of the bolting process without pressing the button again and again.</li>
                </ul>
              </div>
              <div>
                <h4 className="text-2xl font-bold text-red-600 mb-2">Temperature Management</h4>
                <p>In-built heat exchanger to cool the system.</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>The unique concept of the high-speed cooling and heat exchanger optimizes cooling for Continuous operation.</li>
                  <li>Power pack switches off automatically if temperature rises above 80°C.</li>
                </ul>
              </div>
              <div>
                <h4 className="text-2xl font-bold text-red-600 mb-2">Oil immersed Motor</h4>
                <ul className="list-disc list-inside space-y-1">
                  <li>Noiseless and vibration free operations Effective temperature equalisation by cooling.</li>
                  <li>motor, pump & oil at the same time.</li>
                </ul>
              </div>
              <div>
                <h4 className="text-2xl font-bold text-red-600 mb-2">PLC Controlled System</h4>
                <p>Effectively controlled operations of power packs. If the power pack remains idle continuously more than 3 minutes, it gets switched off automatically.</p>
              </div>
            </div>
          </div>

          {/* Right Column: Technical Specification Table (Restyled) */}
          <div>
            <div className="border border-gray-600 rounded-lg overflow-hidden shadow-xl">
              <div className="bg-gray-800 py-2">
                <h3 className="text-lg sm:text-xl font-bold text-white text-center" >TECHNICAL SPECIFICATION</h3>
              </div>
              <div className="divide-y divide-gray-700 text-xs sm:text-sm">
                {techSpecs.map((spec, index) => (
                  <div key={index} className="grid grid-cols-2 bg-black hover:bg-gray-900 transition-colors leading-tight">
                    <div className="py-1.5 sm:py-2 px-3 font-medium text-gray-300 border-r border-gray-700">{spec.label}</div>
                    <div className="py-1.5 sm:py-2 px-3 text-white text-right">{spec.value}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Xep700;