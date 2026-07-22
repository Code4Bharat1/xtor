// import React from "react";
// import { FaArrowRightLong } from "react-icons/fa6";

// const HydraulicJack = () => {
//   return (
//     <div className="bg-black text-white" style={{ fontFamily: 'Poppins, sans-serif' }}>
//       {/* Header with white background */}
//       <div className="bg-white py-6">
//         <div className="flex items-center justify-center gap-2 text-black">
//           <span className="font-medium px-2">Bolt Tensioning Solutions</span>
//           <FaArrowRightLong className="w-4 h-4 ml-8 mr-8" />
//           <span className="font-medium">Jack/Cylinder


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
//                     Jack/Cylinder



//               </h1>
//               <div className="w-120 rounded-2xl h-1 bg-red-600"></div>
//             </div>

//             {/* Description */}
//            <div className="space-y-4 text-gray-200 text-2xl leading-relaxed text-justify">
//               <p>
//   XTORC's Cylinders operate with a maximum pressure of 700 Bar.<br />
//   With Single and Double Acting ranges.<br />
//   XTORC's Cylinders show versatility in operational requirements and fulfils the need of the user.<br />
//   All Single Acting Cylinders are spring return and Double Acting Cylinders are oil return.
// </p>
//             </div> 
//           </div>

//           {/* Right Section */}
//           <div className="space-y-6">
//             {/* Product Image */}
//             <div className="relative">
//               <div className="bg-white rounded-2xl p-6 border-t-12 border-r-12 border-red-600 shadow-[0_10px_30px_rgba(255,255,255,0.25)] hover:shadow-[0_10px_30px_rgba(208,26,26,0.6)] transition-shadow duration-300 // rounded-3xl // h-[400px] flex items-center justify-center">
//                 <img
//                   src="images/accesories/jackscylinders.png"
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

// export default HydraulicJack;

import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const HydraulicJack = () => {
  // Data for the Single-Acting Hollow Hydraulic Cylinder table (First table)
  const hollowTableData = [
    { capacity: '13 (125)', stroke: 42, model: 'SAHH 130-42', oil: 76, colH: 130, extH: 172, outD: 76, cylD: 55, pluD: 35.5, weight: 3.4 },
    { capacity: '13 (125)', stroke: 76, model: 'SAHH 130-76', oil: 138, colH: 184, extH: 260, outD: 76, cylD: 55, pluD: 35.5, weight: 5.2 },
    { capacity: '20 (215)', stroke: 49, model: 'SAHH 200-49', oil: 174, colH: 162, extH: 211, outD: 101, cylD: 77, pluD: 54.5, weight: 8.2 },
    { capacity: '20 (215)', stroke: 155, model: 'SAHH 200-155', oil: 550, colH: 306, extH: 461, outD: 101, cylD: 77, pluD: 54.5, weight: 15 },
    { capacity: '30 (326)', stroke: 64, model: 'SAHH 300-64', oil: 307, colH: 180, extH: 244, outD: 115, cylD: 90, pluD: 64.5, weight: 11.5 },
    { capacity: '30 (326)', stroke: 155, model: 'SAHH 300-155', oil: 744, colH: 330, extH: 485, outD: 115, cylD: 90, pluD: 64.5, weight: 21.5 },
    { capacity: '60 (576)', stroke: 76, model: 'SAHH 600-76', oil: 640, colH: 247, extH: 323, outD: 159, cylD: 125, pluD: 94.5, weight: 28.2 },
    { capacity: '60 (576)', stroke: 153, model: 'SAHH 600-153', oil: 1278, colH: 323, extH: 476, outD: 159, cylD: 125, pluD: 94.5, weight: 35.5 },
    { capacity: '95 (931)', stroke: 76, model: 'SAHH 1000-76', oil: 1028, colH: 254, extH: 330, outD: 212, cylD: 165, pluD: 125, weight: 63.5 },
  ];
  
  // Data for the SINGLE ACTING HYDRAULIC CYLINDERS table (Second table)
  const singleActingTableData = [
    { capacity: '5 (45)', stroke: 25, model: 'SAH 5-25', oil: 18, colH: 110, extH: 135, outD: 40, cylD: 30, pluD: 25, weight: 1 },
    { capacity: '5 (45)', stroke: 76, model: 'SAH 5-76', oil: 54, colH: 165, extH: 241, outD: 40, cylD: 30, pluD: 25, weight: 1.6 },
    { capacity: '5 (45)', stroke: 127, model: 'SAH 5-127', oil: 90, colH: 215, extH: 342, outD: 40, cylD: 30, pluD: 25, weight: 2 },
    { capacity: '5 (45)', stroke: 177, model: 'SAH 5-177', oil: 125, colH: 273, extH: 450, outD: 40, cylD: 30, pluD: 25, weight: 2.6 },
    { capacity: '5 (45)', stroke: 232, model: 'SAH 5-232', oil: 164, colH: 323, extH: 555, outD: 40, cylD: 30, pluD: 25, weight: 3.1 },
    { capacity: '10 (101)', stroke: 54, model: 'SAH 10-54', oil: 86, colH: 121, extH: 175, outD: 59, cylD: 45, pluD: 35, weight: 2.3 },
    { capacity: '10 (101)', stroke: 105, model: 'SAH 10-105', oil: 187, colH: 171, extH: 276, outD: 59, cylD: 45, pluD: 35, weight: 3 },
    { capacity: '10 (101)', stroke: 156, model: 'SAH 10-156', oil: 248, colH: 247, extH: 403, outD: 59, cylD: 45, pluD: 35, weight: 4.1 },
    { capacity: '10 (101)', stroke: 203, model: 'SAH 10-203', oil: 323, colH: 298, extH: 501, outD: 59, cylD: 45, pluD: 35, weight: 5.8 },
    { capacity: '10 (101)', stroke: 257, model: 'SAH 10-257', oil: 409, colH: 349, extH: 606, outD: 59, cylD: 45, pluD: 35, weight: 6.6 },
    { capacity: '10 (101)', stroke: 304, model: 'SAH 10-304', oil: 483, colH: 400, extH: 707, outD: 59, cylD: 45, pluD: 35, weight: 7.5 },
    { capacity: '10 (101)', stroke: 356, model: 'SAH 10-356', oil: 566, colH: 450, extH: 806, outD: 59, cylD: 45, pluD: 35, weight: 8.3 },
    { capacity: '15 (142)', stroke: 25, model: 'SAH 15-25', oil: 53, colH: 124, extH: 149, outD: 70, cylD: 52, pluD: 42, weight: 3.5 },
    { capacity: '15 (142)', stroke: 51, model: 'SAH 15-51', oil: 108, colH: 149, extH: 200, outD: 70, cylD: 52, pluD: 42, weight: 4 },
    { capacity: '15 (142)', stroke: 101, model: 'SAH 15-101', oil: 214, colH: 200, extH: 301, outD: 70, cylD: 52, pluD: 42, weight: 5 },
    { capacity: '15 (142)', stroke: 152, model: 'SAH 15-152', oil: 323, colH: 271, extH: 423, outD: 70, cylD: 52, pluD: 42, weight: 7 },
    { capacity: '15 (142)', stroke: 203, model: 'SAH 15-203', oil: 431, colH: 322, extH: 525, outD: 70, cylD: 52, pluD: 42, weight: 8 },
    { capacity: '15 (142)', stroke: 254, model: 'SAH 15-254', oil: 539, colH: 373, extH: 627, outD: 70, cylD: 52, pluD: 42, weight: 9 },
    { capacity: '15 (142)', stroke: 305, model: 'SAH 15-305', oil: 647, colH: 423, extH: 728, outD: 70, cylD: 52, pluD: 42, weight: 10 },
    { capacity: '15 (142)', stroke: 356, model: 'SAH 15-356', oil: 756, colH: 474, extH: 830, outD: 70, cylD: 52, pluD: 42, weight: 11 },
    { capacity: '25 (232)', stroke: 26, model: 'SAH 25-26', oil: 86, colH: 139, extH: 165, outD: 85, cylD: 65, pluD: 56, weight: 6 },
    { capacity: '25 (232)', stroke: 50, model: 'SAH 25-50', oil: 166, colH: 165, extH: 215, outD: 85, cylD: 65, pluD: 56, weight: 7 },
    { capacity: '25 (232)', stroke: 102, model: 'SAH 25-102', oil: 338, colH: 215, extH: 317, outD: 85, cylD: 65, pluD: 56, weight: 8 },
    { capacity: '25 (232)', stroke: 158, model: 'SAH 25-158', oil: 524, colH: 273, extH: 431, outD: 85, cylD: 65, pluD: 56, weight: 10 },
    { capacity: '25 (232)', stroke: 210, model: 'SAH 25-210', oil: 696, colH: 323, extH: 533, outD: 85, cylD: 65, pluD: 56, weight: 12 },
    { capacity: '25 (232)', stroke: 261, model: 'SAH 25-261', oil: 866, colH: 374, extH: 635, outD: 85, cylD: 65, pluD: 56, weight: 14 },
    { capacity: '25 (232)', stroke: 311, model: 'SAH 25-311', oil: 1031, colH: 425, extH: 736, outD: 85, cylD: 65, pluD: 56, weight: 15 },
    { capacity: '25 (232)', stroke: 362, model: 'SAH 25-362', oil: 1201, colH: 476, extH: 838, outD: 85, cylD: 65, pluD: 56, weight: 17 },
    { capacity: '30 (295)', stroke: 50, model: 'SAH 30-50', oil: 209, colH: 228, extH: 278, outD: 101, cylD: 73, pluD: 60, weight: 13 },
    { capacity: '30 (295)', stroke: 100, model: 'SAH 30-100', oil: 418, colH: 278, extH: 378, outD: 101, cylD: 73, pluD: 60, weight: 16 },
    { capacity: '30 (295)', stroke: 209, model: 'SAH 30-209', oil: 874, colH: 387, extH: 596, outD: 101, cylD: 73, pluD: 60, weight: 19 },
    { capacity: '30 (295)', stroke: 300, model: 'SAH 30-300', oil: 1255, colH: 478, extH: 778, outD: 101, cylD: 73, pluD: 60, weight: 27 },
    { capacity: '50 (468)', stroke: 51, model: 'SAH 50-51', oil: 361, colH: 176, extH: 206, outD: 127, cylD: 95, pluD: 80, weight: 19 },
    { capacity: '50 (468)', stroke: 101, model: 'SAH 50-101', oil: 716, colH: 227, extH: 307, outD: 127, cylD: 95, pluD: 80, weight: 23 },
    { capacity: '50 (468)', stroke: 159, model: 'SAH 50-159', oil: 1126, colH: 282, extH: 422, outD: 127, cylD: 95, pluD: 80, weight: 27 },
    { capacity: '50 (468)', stroke: 337, model: 'SAH 50-337', oil: 2388, colH: 460, extH: 797, outD: 127, cylD: 95, pluD: 80, weight: 37 },
    { capacity: '75 (718)', stroke: 156, model: 'SAH 75-156', oil: 1620, colH: 285, extH: 441, outD: 150, cylD: 115, pluD: 100, weight: 33 },
    { capacity: '75 (718)', stroke: 333, model: 'SAH 75-333', oil: 3457, colH: 492, extH: 825, outD: 150, cylD: 115, pluD: 100, weight: 54 },
    { capacity: '95 (933)', stroke: 168, model: 'SAH 100-168', oil: 2229, colH: 357, extH: 525, outD: 177, cylD: 130, pluD: 120, weight: 59 },
    { capacity: '95 (933)', stroke: 260, model: 'SAH 100-260', oil: 3449, colH: 449, extH: 709, outD: 177, cylD: 130, pluD: 120, weight: 72 },
  ];

  // Data for the SINGLE ACTING HIGH TONNAGE HYDRAULIC CYLINDER table (Third table)
  const highTonnageTableData = [
    { ton: 50, stroke: 50, model: 'STH 50-50', effectiveArea: 78.5, oilCapacity: 392, collapsedHeight: 188, extendHeight: 238, outsideDia: 140, cylinderBoreDia: 100, plungerDia: 70, baseToAdvancePort: 41, weight: 21.5 },
    { ton: 50, stroke: 100, model: 'STH 50-100', effectiveArea: 78.5, oilCapacity: 784, collapsedHeight: 238, extendHeight: 338, outsideDia: 140, cylinderBoreDia: 100, plungerDia: 70, baseToAdvancePort: 41, weight: 26 },
    { ton: 50, stroke: 150, model: 'STH 50-150', effectiveArea: 78.5, oilCapacity: 1176, collapsedHeight: 288, extendHeight: 438, outsideDia: 140, cylinderBoreDia: 100, plungerDia: 70, baseToAdvancePort: 41, weight: 31 },
    { ton: 50, stroke: 200, model: 'STH 50-200', effectiveArea: 78.5, oilCapacity: 1568, collapsedHeight: 338, extendHeight: 538, outsideDia: 140, cylinderBoreDia: 100, plungerDia: 70, baseToAdvancePort: 41, weight: 35 },
    { ton: 50, stroke: 300, model: 'STH 50-300', effectiveArea: 78.5, oilCapacity: 2352, collapsedHeight: 438, extendHeight: 738, outsideDia: 140, cylinderBoreDia: 100, plungerDia: 70, baseToAdvancePort: 41, weight: 44 },
    { ton: 100, stroke: 50, model: 'STH 100-50', effectiveArea: 153.9, oilCapacity: 770, collapsedHeight: 216, extendHeight: 266, outsideDia: 180, cylinderBoreDia: 140, plungerDia: 100, baseToAdvancePort: 54, weight: 42 },
    { ton: 100, stroke: 100, model: 'STH 100-100', effectiveArea: 153.9, oilCapacity: 1540, collapsedHeight: 266, extendHeight: 366, outsideDia: 180, cylinderBoreDia: 140, plungerDia: 100, baseToAdvancePort: 54, weight: 49 },
    { ton: 100, stroke: 150, model: 'STH 100-150', effectiveArea: 153.9, oilCapacity: 2310, collapsedHeight: 316, extendHeight: 466, outsideDia: 180, cylinderBoreDia: 140, plungerDia: 100, baseToAdvancePort: 54, weight: 56 },
    { ton: 100, stroke: 200, model: 'STH 100-200', effectiveArea: 153.9, oilCapacity: 3080, collapsedHeight: 366, extendHeight: 566, outsideDia: 180, cylinderBoreDia: 140, plungerDia: 100, baseToAdvancePort: 54, weight: 63 },
    { ton: 100, stroke: 300, model: 'STH 100-300', effectiveArea: 153.9, oilCapacity: 4620, collapsedHeight: 466, extendHeight: 766, outsideDia: 180, cylinderBoreDia: 140, plungerDia: 100, baseToAdvancePort: 54, weight: 70 },
    { ton: 150, stroke: 50, model: 'STH 150-50', effectiveArea: 201, oilCapacity: 1005, collapsedHeight: 224, extendHeight: 274, outsideDia: 210, cylinderBoreDia: 160, plungerDia: 112, baseToAdvancePort: 58, weight: 44 },
    { ton: 150, stroke: 100, model: 'STH 150-100', effectiveArea: 201, oilCapacity: 2010, collapsedHeight: 274, extendHeight: 374, outsideDia: 210, cylinderBoreDia: 160, plungerDia: 112, baseToAdvancePort: 58, weight: 57 },
    { ton: 150, stroke: 150, model: 'STH 150-150', effectiveArea: 201, oilCapacity: 3015, collapsedHeight: 324, extendHeight: 474, outsideDia: 210, cylinderBoreDia: 160, plungerDia: 112, baseToAdvancePort: 58, weight: 70 },
    { ton: 150, stroke: 200, model: 'STH 150-200', effectiveArea: 201, oilCapacity: 4020, collapsedHeight: 374, extendHeight: 574, outsideDia: 210, cylinderBoreDia: 160, plungerDia: 112, baseToAdvancePort: 58, weight: 83 },
    { ton: 150, stroke: 300, model: 'STH 150-300', effectiveArea: 201, oilCapacity: 6030, collapsedHeight: 474, extendHeight: 774, outsideDia: 210, cylinderBoreDia: 160, plungerDia: 112, baseToAdvancePort: 58, weight: 109 },
    { ton: 200, stroke: 50, model: 'STH 200-50', effectiveArea: 314, oilCapacity: 1570, collapsedHeight: 248, extendHeight: 298, outsideDia: 250, cylinderBoreDia: 200, plungerDia: 150, baseToAdvancePort: 64, weight: 84 },
    { ton: 200, stroke: 150, model: 'STH 200-150', effectiveArea: 314, oilCapacity: 4712, collapsedHeight: 348, extendHeight: 498, outsideDia: 250, cylinderBoreDia: 200, plungerDia: 150, baseToAdvancePort: 64, weight: 118 },
    { ton: 200, stroke: 300, model: 'STH 200-300', effectiveArea: 314, oilCapacity: 9423, collapsedHeight: 498, extendHeight: 798, outsideDia: 250, cylinderBoreDia: 200, plungerDia: 150, baseToAdvancePort: 64, weight: 152 },
    { ton: 320, stroke: 50, model: 'STH 300-50', effectiveArea: 490.6, oilCapacity: 2453, collapsedHeight: 277, extendHeight: 327, outsideDia: 315, cylinderBoreDia: 250, plungerDia: 180, baseToAdvancePort: 74, weight: 155 },
    { ton: 320, stroke: 150, model: 'STH 300-150', effectiveArea: 490.6, oilCapacity: 7359, collapsedHeight: 377, extendHeight: 527, outsideDia: 315, cylinderBoreDia: 250, plungerDia: 180, baseToAdvancePort: 74, weight: 195 },
    { ton: 320, stroke: 300, model: 'STH 300-300', effectiveArea: 490.6, oilCapacity: 14718, collapsedHeight: 527, extendHeight: 827, outsideDia: 315, cylinderBoreDia: 250, plungerDia: 180, baseToAdvancePort: 74, weight: 255 },
    { ton: 400, stroke: 50, model: 'STH 400-50', effectiveArea: 572.3, oilCapacity: 2861, collapsedHeight: 305, extendHeight: 355, outsideDia: 355, cylinderBoreDia: 270, plungerDia: 220, baseToAdvancePort: 83, weight: 240 },
    { ton: 400, stroke: 150, model: 'STH 400-150', effectiveArea: 572.3, oilCapacity: 8583, collapsedHeight: 405, extendHeight: 555, outsideDia: 355, cylinderBoreDia: 270, plungerDia: 220, baseToAdvancePort: 83, weight: 310 },
    { ton: 400, stroke: 300, model: 'STH 400-300', effectiveArea: 572.3, oilCapacity: 17169, collapsedHeight: 555, extendHeight: 855, outsideDia: 355, cylinderBoreDia: 270, plungerDia: 220, baseToAdvancePort: 83, weight: 410 },
    { ton: 500, stroke: 50, model: 'STH 500-50', effectiveArea: 803.8, oilCapacity: 4019, collapsedHeight: 325, extendHeight: 375, outsideDia: 395, cylinderBoreDia: 320, plungerDia: 250, baseToAdvancePort: 93, weight: 265 },
    { ton: 500, stroke: 150, model: 'STH 500-150', effectiveArea: 803.8, oilCapacity: 12057, collapsedHeight: 425, extendHeight: 575, outsideDia: 395, cylinderBoreDia: 320, plungerDia: 250, baseToAdvancePort: 93, weight: 353 },
    { ton: 500, stroke: 300, model: 'STH 500-300', effectiveArea: 803.8, oilCapacity: 24114, collapsedHeight: 575, extendHeight: 875, outsideDia: 395, cylinderBoreDia: 320, plungerDia: 250, baseToAdvancePort: 93, weight: 455 },
    { ton: 630, stroke: 50, model: 'STH 600-50', effectiveArea: 1017.4, oilCapacity: 5087, collapsedHeight: 386, extendHeight: 436, outsideDia: 450, cylinderBoreDia: 360, plungerDia: 280, baseToAdvancePort: 115, weight: 487 },
    { ton: 630, stroke: 150, model: 'STH 600-150', effectiveArea: 1017.4, oilCapacity: 15261, collapsedHeight: 486, extendHeight: 636, outsideDia: 450, cylinderBoreDia: 360, plungerDia: 280, baseToAdvancePort: 115, weight: 579 },
    { ton: 630, stroke: 300, model: 'STH 600-300', effectiveArea: 1017.4, oilCapacity: 30522, collapsedHeight: 638, extendHeight: 938, outsideDia: 450, cylinderBoreDia: 360, plungerDia: 280, baseToAdvancePort: 115, weight: 717 },
    { ton: 800, stroke: 50, model: 'STH 800-50', effectiveArea: 1256, oilCapacity: 6280, collapsedHeight: 427, extendHeight: 477, outsideDia: 550, cylinderBoreDia: 400, plungerDia: 320, baseToAdvancePort: 113, weight: 712 },
    { ton: 800, stroke: 150, model: 'STH 800-150', effectiveArea: 1256, oilCapacity: 18840, collapsedHeight: 527, extendHeight: 677, outsideDia: 550, cylinderBoreDia: 400, plungerDia: 320, baseToAdvancePort: 113, weight: 860 },
    { ton: 800, stroke: 300, model: 'STH 800-300', effectiveArea: 1256, oilCapacity: 37698, collapsedHeight: 677, extendHeight: 977, outsideDia: 550, cylinderBoreDia: 400, plungerDia: 320, baseToAdvancePort: 113, weight: 1082 },
  ];

  // Data for the SINGLE ACTING LOW PROFILE LOCK-NUT HYDRAULIC CYLINDER table (Fourth table)
  const lowProfileTableData = [
    { capacityTon: '60 (606)', stroke: 50, model: 'SLLH 60-50', oilCapacity: 432, collapsedHeight: 125, extendedHeight: 175, outsideDia: 140, cylinderBoreDia: 106, plungerDiaThread: 'Tr104x4', baseToAdvancePort: 19, saddleDia: 96, saddleProtrusionFromPiston: 6, saddleMaxTiltAngle: 5, plungerDia: 28, weight: 15 },
    { capacityTon: '100 (1027)', stroke: 50, model: 'SLLH 100-50', oilCapacity: 734, collapsedHeight: 137, extendedHeight: 187, outsideDia: 180, cylinderBoreDia: 137, plungerDiaThread: 'Tr136x6', baseToAdvancePort: 21, saddleDia: 126, saddleProtrusionFromPiston: 8, saddleMaxTiltAngle: 5, plungerDia: 31, weight: 27 },
    { capacityTon: '160 (1619)', stroke: 50, model: 'SLLH 160-50', oilCapacity: 1040, collapsedHeight: 148, extendedHeight: 193, outsideDia: 224, cylinderBoreDia: 172, plungerDiaThread: 'Tr171x8', baseToAdvancePort: 27, saddleDia: 160, saddleProtrusionFromPiston: 9, saddleMaxTiltAngle: 5, plungerDia: 40, weight: 45.5 },
    { capacityTon: '200 (1999)', stroke: 45, model: 'SLLH 200-45', oilCapacity: 1285, collapsedHeight: 155, extendedHeight: 200, outsideDia: 245, cylinderBoreDia: 190.7, plungerDiaThread: 'Tr190x6', baseToAdvancePort: 30, saddleDia: 180, saddleProtrusionFromPiston: 10, saddleMaxTiltAngle: 5, plungerDia: 43, weight: 57 },
    { capacityTon: '260 (2560)', stroke: 50, model: 'SLLH 250-50', oilCapacity: 1695, collapsedHeight: 159, extendedHeight: 204, outsideDia: 275, cylinderBoreDia: 216, plungerDiaThread: 'Tr215x6', baseToAdvancePort: 32, saddleDia: 200, saddleProtrusionFromPiston: 11, saddleMaxTiltAngle: 5, plungerDia: 44, weight: 74 },
    { capacityTon: '400 (3916)', stroke: 50, model: 'SLLH 400-50', oilCapacity: 2517, collapsedHeight: 178, extendedHeight: 223, outsideDia: 350, cylinderBoreDia: 270, plungerDiaThread: 'Tr266x8', baseToAdvancePort: 41, saddleDia: 251, saddleProtrusionFromPiston: 11, saddleMaxTiltAngle: 4, plungerDia: 55, weight: 134 },
    { capacityTon: '520 (5114)', stroke: 50, model: 'SLLH 500-50', oilCapacity: 3287, collapsedHeight: 192, extendedHeight: 237, outsideDia: 400, cylinderBoreDia: 305, plungerDiaThread: 'Tr304x6', baseToAdvancePort: 48, saddleDia: 289, saddleProtrusionFromPiston: 10, saddleMaxTiltAngle: 3, plungerDia: 62, weight: 188 },
  ];

// Data for the NEW Single Acting Low Profile Hydraulic Cylinder table (Fifth table) based on the provided image
  const lowProfileHydraulicTableData = [
    { ton: '10 (101)', stroke: 38, model: 'SLH 10-38', oilCapacity: 60, collapsedHeight: 88, extendedHeight: 126, outsideDia: 78, cylinderBoreDia: 45, plungerDiaThread: 35, baseToAdvancePort: 23, saddleProtrusionFromPlunger: 2, saddleMaxTiltAngle: null, plungerToMountingHole: null, weight: 4 },
    { ton: '20 (201)', stroke: 45, model: 'SLH 20-45', oilCapacity: 140, collapsedHeight: 97, extendedHeight: 142, outsideDia: 96, cylinderBoreDia: 63, plungerDiaThread: 50, baseToAdvancePort: 23, saddleProtrusionFromPlunger: 2, saddleMaxTiltAngle: null, plungerToMountingHole: null, weight: 6.9 },
    { ton: '30 (295)', stroke: 64, model: 'SLH 30-64', oilCapacity: 290, collapsedHeight: 117, extendedHeight: 181, outsideDia: 109, cylinderBoreDia: 76, plungerDiaThread: 60, baseToAdvancePort: 23, saddleProtrusionFromPlunger: 2, saddleMaxTiltAngle: null, plungerToMountingHole: null, weight: 9.8 },
    { ton: '50 (435)', stroke: 60, model: 'SLH 50-60', oilCapacity: 471, collapsedHeight: 120, extendedHeight: 180, outsideDia: 233, cylinderBoreDia: 200, plungerDiaThread: 80, baseToAdvancePort: 24, saddleProtrusionFromPlunger: 2, saddleMaxTiltAngle: null, plungerToMountingHole: null, weight: 13.3 },
    { ton: '75 (718)', stroke: 50, model: 'SLH 75-50', oilCapacity: 584, collapsedHeight: 116, extendedHeight: 166, outsideDia: 157, cylinderBoreDia: 122, plungerDiaThread: 100, baseToAdvancePort: 21, saddleProtrusionFromPlunger: 2, saddleMaxTiltAngle: null, plungerToMountingHole: null, weight: null },
    { ton: '100 (887)', stroke: 57, model: 'SLH 100-57', oilCapacity: 877, collapsedHeight: 141, extendedHeight: 198, outsideDia: 176, cylinderBoreDia: 140, plungerDiaThread: 112, baseToAdvancePort: 31, saddleProtrusionFromPlunger: 2, saddleMaxTiltAngle: null, plungerToMountingHole: null, weight: 24.5 },
    { ton: '150 (1386)', stroke: 51, model: 'SLH 150-51', oilCapacity: 1184, collapsedHeight: 141, extendedHeight: 192, outsideDia: 215, cylinderBoreDia: 172, plungerDiaThread: 145, baseToAdvancePort: 28, saddleProtrusionFromPlunger: 2, saddleMaxTiltAngle: null, plungerToMountingHole: null, weight: 42 },
    { ton: '150 (1386)', stroke: 80, model: 'SLH 150-80', oilCapacity: 1860, collapsedHeight: 170, extendedHeight: 250, outsideDia: 215, cylinderBoreDia: 172, plungerDiaThread: 145, baseToAdvancePort: 28, saddleProtrusionFromPlunger: 2, saddleMaxTiltAngle: null, plungerToMountingHole: null, weight: 50 },
  ];

  // Data for the SINGLE ACTING LOW FLAT HYDRAULIC CYLINDER table (Sixth table)
  const lowFlatHydraulicTableData = [
    { capacity: '10 (101)', stroke: 11, model: 'SLFH 10-11', oilCapacity: 18, collapsedHeight: 44, extendedHeight: 55, outsideDia: '83x60', cylinderBoreDia: 45, plungerDiaThread: 35, baseToAdvancePort: 23, saddleProtrusionFromPlunger: 1, saddleMaxTiltAngle: 31.5, plungerToMountingHole: 34, weight: 1.4 },
    { capacity: '20 (201)', stroke: 12, model: 'SLFH 20-12', oilCapacity: 37, collapsedHeight: 52, extendedHeight: 64, outsideDia: '102x80', cylinderBoreDia: 63, plungerDiaThread: 50, baseToAdvancePort: 23, saddleProtrusionFromPlunger: 1, saddleMaxTiltAngle: 41, plungerToMountingHole: 39, weight: 2.2 },
    { capacity: '30 (295)', stroke: 13, model: 'SLFH 30-13', oilCapacity: 59, collapsedHeight: 58, extendedHeight: 71, outsideDia: '117x97', cylinderBoreDia: 76, plungerDiaThread: 60, baseToAdvancePort: 23, saddleProtrusionFromPlunger: 1, saddleMaxTiltAngle: 48.5, plungerToMountingHole: 47, weight: 4.2 },
    { capacity: '50 (435)', stroke: 16, model: 'SLFH 50-16', oilCapacity: 125, collapsedHeight: 67, extendedHeight: 83, outsideDia: '150x125', cylinderBoreDia: 100, plungerDiaThread: 80, baseToAdvancePort: 23, saddleProtrusionFromPlunger: 1, saddleMaxTiltAngle: 63, plungerToMountingHole: 60, weight: 7.4 },
    { capacity: '75 (718)', stroke: 16, model: 'SLFH 75-16', oilCapacity: 187, collapsedHeight: 79, extendedHeight: 96, outsideDia: '177x152', cylinderBoreDia: 122, plungerDiaThread: 100, baseToAdvancePort: 23, saddleProtrusionFromPlunger: 1, saddleMaxTiltAngle: 76.5, plungerToMountingHole: 73, weight: 12.7 },
    { capacity: '100 (887)', stroke: 16, model: 'SLFH 100-16', oilCapacity: 246, collapsedHeight: 87, extendedHeight: 103, outsideDia: '203x179', cylinderBoreDia: 140, plungerDiaThread: 112, baseToAdvancePort: 23, saddleProtrusionFromPlunger: 1, saddleMaxTiltAngle: 89.5, plungerToMountingHole: 84, weight: 15.5 },
    { capacity: '150 (1386)', stroke: 16, model: 'SLFH 150-16', oilCapacity: 371, collapsedHeight: 95, extendedHeight: 111, outsideDia: '236x212', cylinderBoreDia: 172, plungerDiaThread: 145, baseToAdvancePort: 23, saddleProtrusionFromPlunger: 1, saddleMaxTiltAngle: 106, plungerToMountingHole: 92, weight: 28.7 },
  ];

  // Data for the NEWLY ADDED: DOUBLE ACTING HOLLOW HYDRAULIC CYLINDER table (Seventh table)
  const doubleActingHollowTableData = [
    { ton: 30, stroke: 178, model: 'DHH 300-178', maxCylAdvance: 326, maxCylRetract: 210, oilAdvance: 855, oilRetract: 550, collapsedHeight: 330, extendedHeight: 508, outsideDia: 115, cylinderBoreDia: 90, plungerDia: 64.5, weight: 21 },
    { ton: 30, stroke: 258, model: 'DHH 300-258', maxCylAdvance: 326, maxCylRetract: 210, oilAdvance: 1240, oilRetract: 798, collapsedHeight: 431, extendedHeight: 689, outsideDia: 115, cylinderBoreDia: 90, plungerDia: 64.5, weight: 27 },
    { ton: 60, stroke: 89, model: 'DHH 600-89', maxCylAdvance: 576, maxCylRetract: 360, oilAdvance: 749, oilRetract: 468, collapsedHeight: 247, extendedHeight: 336, outsideDia: 159, cylinderBoreDia: 125, plungerDia: 94.5, weight: 28 },
    { ton: 60, stroke: 166, model: 'DHH 600-166', maxCylAdvance: 576, maxCylRetract: 360, oilAdvance: 1398, oilRetract: 873, collapsedHeight: 323, extendedHeight: 489, outsideDia: 159, cylinderBoreDia: 125, plungerDia: 94.5, weight: 35 },
    { ton: 60, stroke: 257, model: 'DHH 600-257', maxCylAdvance: 576, maxCylRetract: 360, oilAdvance: 2146, oilRetract: 1352, collapsedHeight: 438, extendedHeight: 695, outsideDia: 159, cylinderBoreDia: 125, plungerDia: 94.5, weight: 45 },
    { ton: 95, stroke: 38, model: 'DHH 1000-38', maxCylAdvance: 931, maxCylRetract: 627, oilAdvance: 517, oilRetract: 345, collapsedHeight: 165, extendedHeight: 203, outsideDia: 212, cylinderBoreDia: 165, plungerDia: 125, weight: 33 },
    { ton: 95, stroke: 76, model: 'DHH 1000-76', maxCylAdvance: 931, maxCylRetract: 627, oilAdvance: 1028, oilRetract: 692, collapsedHeight: 254, extendedHeight: 330, outsideDia: 212, cylinderBoreDia: 165, plungerDia: 125, weight: 61 },
    { ton: 95, stroke: 153, model: 'DHH 1000-153', maxCylAdvance: 931, maxCylRetract: 627, oilAdvance: 2070, oilRetract: 1394, collapsedHeight: 342, extendedHeight: 495, outsideDia: 212, cylinderBoreDia: 165, plungerDia: 125, weight: 79 },
    { ton: 95, stroke: 257, model: 'DHH 1000-257', maxCylAdvance: 931, maxCylRetract: 627, oilAdvance: 3477, oilRetract: 2341, collapsedHeight: 460, extendedHeight: 717, outsideDia: 212, cylinderBoreDia: 165, plungerDia: 125, weight: 106 },
    { ton: 145, stroke: 203, model: 'DHH 1500-203', maxCylAdvance: 1429, maxCylRetract: 749, oilAdvance: 4191, oilRetract: 2198, collapsedHeight: 359, extendedHeight: 562, outsideDia: 247, cylinderBoreDia: 190.5, plungerDia: 150, weight: 111 },
  ];

  // Data for the NEW DOUBLE ACTING HIGH TONNAGE HYDRAULIC CYLINDER table (Eighth table)
  const doubleActingHighTonnageTableData = [
    { ton: 50, stroke: 50, model: 'DHT50-50', capAdvance: 500, capRetract: 255, oilAdvance: 392, oilRetract: 200, colH: 188, extH: 238, outD: 140, boreD: 100, plungerD: 70, weight: 21.5 },
    { ton: 50, stroke: 100, model: 'DHT50-100', capAdvance: 500, capRetract: 255, oilAdvance: 784, oilRetract: 400, colH: 238, extH: 338, outD: 140, boreD: 100, plungerD: 70, weight: 26 },
    { ton: 50, stroke: 150, model: 'DHT50-150', capAdvance: 500, capRetract: 255, oilAdvance: 1176, oilRetract: 600, colH: 288, extH: 438, outD: 140, boreD: 100, plungerD: 70, weight: 31 },
    { ton: 50, stroke: 200, model: 'DHT50-200', capAdvance: 500, capRetract: 255, oilAdvance: 1568, oilRetract: 800, colH: 338, extH: 538, outD: 140, boreD: 100, plungerD: 70, weight: 35 },
    { ton: 50, stroke: 300, model: 'DHT50-300', capAdvance: 500, capRetract: 255, oilAdvance: 2352, oilRetract: 1200, colH: 438, extH: 738, outD: 140, boreD: 100, plungerD: 70, weight: 44 },
    { ton: 100, stroke: 50, model: 'DHT100-50', capAdvance: 1000, capRetract: 490, oilAdvance: 770, oilRetract: 377, colH: 216, extH: 266, outD: 180, boreD: 140, plungerD: 100, weight: 42 },
    { ton: 100, stroke: 100, model: 'DHT100-100', capAdvance: 1000, capRetract: 490, oilAdvance: 1540, oilRetract: 754, colH: 266, extH: 366, outD: 180, boreD: 140, plungerD: 100, weight: 49 },
    { ton: 100, stroke: 150, model: 'DHT100-150', capAdvance: 1000, capRetract: 490, oilAdvance: 2310, oilRetract: 1131, colH: 316, extH: 466, outD: 180, boreD: 140, plungerD: 100, weight: 56 },
    { ton: 100, stroke: 200, model: 'DHT100-200', capAdvance: 1000, capRetract: 490, oilAdvance: 3080, oilRetract: 1508, colH: 366, extH: 566, outD: 180, boreD: 140, plungerD: 100, weight: 63 },
    { ton: 100, stroke: 300, model: 'DHT100-300', capAdvance: 1000, capRetract: 490, oilAdvance: 4620, oilRetract: 2262, colH: 466, extH: 766, outD: 180, boreD: 140, plungerD: 100, weight: 70 },
    { ton: 150, stroke: 50, model: 'DHT150-50', capAdvance: 1390, capRetract: 709, oilAdvance: 1005, oilRetract: 512, colH: 224, extH: 274, outD: 210, boreD: 160, plungerD: 112, weight: 44 },
    { ton: 150, stroke: 100, model: 'DHT150-100', capAdvance: 1390, capRetract: 709, oilAdvance: 2010, oilRetract: 1025, colH: 274, extH: 374, outD: 210, boreD: 160, plungerD: 112, weight: 57 },
    { ton: 150, stroke: 150, model: 'DHT150-150', capAdvance: 1390, capRetract: 709, oilAdvance: 3015, oilRetract: 1537, colH: 324, extH: 474, outD: 210, boreD: 160, plungerD: 112, weight: 70 },
    { ton: 150, stroke: 200, model: 'DHT150-200', capAdvance: 1390, capRetract: 709, oilAdvance: 4020, oilRetract: 2050, colH: 374, extH: 574, outD: 210, boreD: 160, plungerD: 112, weight: 83 },
    { ton: 150, stroke: 300, model: 'DHT150-300', capAdvance: 1390, capRetract: 709, oilAdvance: 6030, oilRetract: 3075, colH: 474, extH: 774, outD: 210, boreD: 160, plungerD: 112, weight: 109 },
    { ton: 200, stroke: 100, model: 'DHT200-100', capAdvance: 2000, capRetract: 875, oilAdvance: 3141, oilRetract: 1374, colH: 296, extH: 396, outD: 250, boreD: 200, plungerD: 150, weight: 109 },
    { ton: 200, stroke: 150, model: 'DHT200-150', capAdvance: 2000, capRetract: 875, oilAdvance: 4712, oilRetract: 2061, colH: 346, extH: 496, outD: 250, boreD: 200, plungerD: 150, weight: 121 },
    { ton: 200, stroke: 200, model: 'DHT200-200', capAdvance: 2000, capRetract: 875, oilAdvance: 6282, oilRetract: 2748, colH: 396, extH: 596, outD: 250, boreD: 200, plungerD: 150, weight: 132 },
    { ton: 200, stroke: 300, model: 'DHT200-300', capAdvance: 2000, capRetract: 875, oilAdvance: 9423, oilRetract: 4122, colH: 496, extH: 796, outD: 250, boreD: 200, plungerD: 150, weight: 155 },
    { ton: 300, stroke: 100, model: 'DHT300-100', capAdvance: 3193, capRetract: 1537, oilAdvance: 4906, oilRetract: 2363, colH: 327, extH: 427, outD: 315, boreD: 250, plungerD: 180, weight: 180 },
    { ton: 300, stroke: 200, model: 'DHT300-200', capAdvance: 3193, capRetract: 1537, oilAdvance: 9812, oilRetract: 4726, colH: 427, extH: 627, outD: 315, boreD: 250, plungerD: 180, weight: 220 },
    { ton: 300, stroke: 300, model: 'DHT300-300', capAdvance: 3193, capRetract: 1537, oilAdvance: 14718, oilRetract: 7089, colH: 527, extH: 827, outD: 315, boreD: 250, plungerD: 180, weight: 260 },
    { ton: 400, stroke: 100, model: 'DHT400-100', capAdvance: 3919, capRetract: 1317, oilAdvance: 5723, oilRetract: 1924, colH: 355, extH: 455, outD: 355, boreD: 270, plungerD: 220, weight: 255 },
    { ton: 400, stroke: 200, model: 'DHT400-200', capAdvance: 3919, capRetract: 1317, oilAdvance: 11446, oilRetract: 3848, colH: 455, extH: 655, outD: 355, boreD: 270, plungerD: 220, weight: 310 },
    { ton: 400, stroke: 300, model: 'DHT400-300', capAdvance: 3919, capRetract: 1317, oilAdvance: 17169, oilRetract: 5772, colH: 555, extH: 855, outD: 355, boreD: 270, plungerD: 220, weight: 375 },
    { ton: 500, stroke: 100, model: 'DHT500-100', capAdvance: 5000, capRetract: 1948, oilAdvance: 8038, oilRetract: 3133, colH: 375, extH: 475, outD: 395, boreD: 320, plungerD: 250, weight: 326 },
    { ton: 500, stroke: 200, model: 'DHT500-200', capAdvance: 5000, capRetract: 1948, oilAdvance: 16076, oilRetract: 6266, colH: 475, extH: 675, outD: 395, boreD: 320, plungerD: 250, weight: 394 },
    { ton: 500, stroke: 300, model: 'DHT500-300', capAdvance: 5000, capRetract: 1948, oilAdvance: 24114, oilRetract: 9399, colH: 575, extH: 875, outD: 395, boreD: 320, plungerD: 250, weight: 462 },
    { ton: 600, stroke: 100, model: 'DHT600-100', capAdvance: 6300, capRetract: 2488, oilAdvance: 10174, oilRetract: 4019, colH: 436, extH: 536, outD: 450, boreD: 360, plungerD: 280, weight: 542 },
    { ton: 600, stroke: 200, model: 'DHT600-200', capAdvance: 6300, capRetract: 2488, oilAdvance: 20348, oilRetract: 8038, colH: 536, extH: 736, outD: 450, boreD: 360, plungerD: 280, weight: 634 },
    { ton: 600, stroke: 300, model: 'DHT600-300', capAdvance: 6300, capRetract: 2488, oilAdvance: 30522, oilRetract: 12057, colH: 636, extH: 936, outD: 450, boreD: 360, plungerD: 280, weight: 726 },
    { ton: 800, stroke: 100, model: 'DHT800-100', capAdvance: 8000, capRetract: 2880, oilAdvance: 12566, oilRetract: 4522, colH: 477, extH: 577, outD: 550, boreD: 400, plungerD: 320, weight: 796 },
    { ton: 800, stroke: 200, model: 'DHT800-200', capAdvance: 8000, capRetract: 2880, oilAdvance: 25132, oilRetract: 9044, colH: 577, extH: 777, outD: 550, boreD: 400, plungerD: 320, weight: 944 },
    { ton: 800, stroke: 300, model: 'DHT800-300', capAdvance: 8000, capRetract: 2880, oilAdvance: 37698, oilRetract: 13566, colH: 677, extH: 977, outD: 550, boreD: 400, plungerD: 320, weight: 1092 },
  ];

  const hollowCapacitySpans = {};
  hollowTableData.forEach(row => {
    hollowCapacitySpans[row.capacity] = (hollowCapacitySpans[row.capacity] || 0) + 1;
  });

  const singleActingCapacitySpans = {};
  singleActingTableData.forEach(row => {
    singleActingCapacitySpans[row.capacity] = (singleActingCapacitySpans[row.capacity] || 0) + 1;
  });

  const highTonnageCapacitySpans = {};
  highTonnageTableData.forEach(row => {
    highTonnageCapacitySpans[row.ton] = (highTonnageCapacitySpans[row.ton] || 0) + 1;
  });

   const lowProfileCapacitySpans = {};
  lowProfileTableData.forEach(row => {
    lowProfileCapacitySpans[row.capacityTon] = (lowProfileCapacitySpans[row.capacityTon] || 0) + 1;
  });

  const lowProfileHydraulicCapacitySpans = {};
  lowProfileHydraulicTableData.forEach(row => {
    lowProfileHydraulicCapacitySpans[row.ton] = (lowProfileHydraulicCapacitySpans[row.ton] || 0) + 1;
  });

  const lowFlatHydraulicCapacitySpans = {};
  lowFlatHydraulicTableData.forEach(row => {
    lowFlatHydraulicCapacitySpans[row.capacity] = (lowFlatHydraulicCapacitySpans[row.capacity] || 0) + 1;
  });

  const doubleActingHollowCapacitySpans = {};
  doubleActingHollowTableData.forEach(row => {
    doubleActingHollowCapacitySpans[row.ton] = (doubleActingHollowCapacitySpans[row.ton] || 0) + 1;
  });

  const doubleActingHighTonnageCapacitySpans = {};
  doubleActingHighTonnageTableData.forEach(row => {
    doubleActingHighTonnageCapacitySpans[row.ton] = (doubleActingHighTonnageCapacitySpans[row.ton] || 0) + 1;
  });



  let lastHollowCapacity = null;
  let lastSingleActingCapacity = null;
  let lastHighTonnageCapacity = null;
  let lastLowProfileCapacity = null;
  let lastLowProfileHydraulicCapacity = null;
  let lastLowFlatHydraulicCapacity = null;
  let lastDoubleActingHollowCapacity = null;
  let lastDoubleActingHighTonnageCapacity = null;

  return (
    <div className="bg-black text-white" style={{ fontFamily: 'Poppins, sans-serif' }}>
      {/* Header with white background */}
      <div className="bg-white py-6">
        <div className="flex items-center justify-center gap-2 text-black">
          <span className="font-medium px-2">Bolt Tensioning Solutions</span>
          <FaArrowRightLong className="w-4 h-4 ml-8 mr-8" />
          <span className="font-medium">Jack/Cylinder</span>
        </div>
      </div>

      {/* Main content */}
      <div className="w-9/10 mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Section */}
          <div className="space-y-6">
            {/* Title with Impact font */}
            <div className="w-fit">
              <h1 className="text-4xl text-white mb-2 font-bold">
                Jack/Cylinder
              </h1>
              <div className="w-full rounded-2xl h-1 bg-red-600 mt-2"></div>
            </div>

            {/* Description */}
           <div className="space-y-4 text-gray-200 text-2xl leading-relaxed text-justify">
              <p>
                XTORC's Cylinders operate with a maximum pressure of 700 Bar.
                With Single and Double Acting ranges, XTORC's Cylinders show versatility in operational requirements and fulfill the need of the user. All Single Acting Cylinders are spring return and Double Acting Cylinders are oil return.
              </p>
            </div> 
          </div>

          {/* Right Section */}
          <div className="space-y-6">
            {/* Product Image */}
            <div className="relative">
              <div className="bg-white rounded-2xl p-6 border-t-12 border-r-12 border-red-600 shadow-[0_10px_30px_rgba(255,255,255,0.25)] hover:shadow-[0_10px_30px_rgba(208,26,26,0.6)] transition-shadow duration-300 rounded-3xl h-[400px] flex items-center justify-center">
                <img
                  src="images/accesories/jackscylinders.png"
                  alt="XTORC Hydraulic Jacks and Cylinders"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            {/* Download Catalog Button */}
            {/* <div className="flex justify-center">
              <button 
                className="bg-white text-red-600 px-8 py-3 rounded-2xl text-2xl font-bold hover:bg-red-700 hover:text-white transition-colors"
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

      {/* --- SINGLE-ACTING HOLLOW HYDRAULIC CYLINDER TABLE --- */}
      <div className="w-9/10 mx-auto px-4 py-12">
        <div className="mb-10 text-center">
            <h2 className="text-4xl text-white mb-2" >
              SINGLE-ACTING HOLLOW HYDRAULIC CYLINDER
            </h2>
            <div className="w-160 rounded-2xl h-1 bg-red-600 mx-auto mt-2" style={{ maxWidth: "800px" }}></div>
        </div>
        <div className="border border-gray-600 rounded-lg overflow-x-auto no-scrollbar">
            <div className="overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            <table className="min-w-full min-w-max">
                <thead className="bg-gray-800 text-base">
                <tr>
                    <th className="p-3 text-center border-r border-gray-700">Cylinder Capacity <br/> ton (kN)</th>
                    <th className="p-3 text-center border-r border-gray-700">Stroke (mm)</th>
                    <th className="p-3 text-center border-r border-gray-700">Model Number</th>
                    <th className="p-3 text-center border-r border-gray-700">Oil Capacity (cm³)</th>
                    <th className="p-3 text-center border-r border-gray-700">Collapsed Height <br/> A (mm)</th>
                    <th className="p-3 text-center border-r border-gray-700">Extend Height <br/> B (mm)</th>
                    <th className="p-3 text-center border-r border-gray-700">Outside Dia. <br/> C (mm)</th>
                    <th className="p-3 text-center border-r border-gray-700">Cylinder Bore Dia. <br/> D (mm)</th>
                    <th className="p-3 text-center border-r border-gray-700">Plunger Dia. (Thread) <br/> E (mm)</th>
                    <th className="p-3 text-center">Weight (Kg)</th>
                </tr>
                </thead>
                <tbody>
                {hollowTableData.map((row, index) => {
                  const showCapacityCell = row.capacity !== lastHollowCapacity;
                  if (showCapacityCell) {
                    lastHollowCapacity = row.capacity;
                  }
                  return (
                    <tr key={index} className="bg-black text-center text-base border-t border-gray-700">
                        {showCapacityCell && (
                           <td rowSpan={hollowCapacitySpans[row.capacity]} className="p-2 font-medium text-gray-300 border-r border-gray-700 align-middle">
                            {row.capacity}
                           </td>
                        )}
                        <td className="p-2 text-white border-r border-gray-700">{row.stroke}</td>
                        <td className="p-2 font-medium text-gray-300 border-r border-gray-700">{row.model}</td>
                        <td className="p-2 text-white border-r border-gray-700">{row.oil}</td>
                        <td className="p-2 text-white border-r border-gray-700">{row.colH}</td>
                        <td className="p-2 text-white border-r border-gray-700">{row.extH}</td>
                        <td className="p-2 text-white border-r border-gray-700">{row.outD}</td>
                        <td className="p-2 text-white border-r border-gray-700">{row.cylD}</td>
                        <td className="p-2 text-white border-r border-gray-700">{row.pluD}</td>
                        <td className="p-2 text-white">{row.weight}</td>
                    </tr>
                  );
                })}
                </tbody>
            </table>
            </div>
        </div>
      </div>

      {/* --- SINGLE ACTING HYDRAULIC CYLINDERS TABLE --- */}
      <div className="w-9/10 mx-auto px-4 py-12">
        <div className="mb-10 text-center">
            <h2 className="text-4xl text-white mb-2" >
              SINGLE ACTING HYDRAULIC CYLINDERS
            </h2>
            <div className="w-140 rounded-2xl h-1 bg-red-600 mx-auto mt-2" style={{ maxWidth: "800px" }}></div>
        </div>
        <div className="border border-gray-600 rounded-lg overflow-x-auto no-scrollbar">
            <div className="overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            <table className="min-w-full min-w-max">
                <thead className="bg-gray-800 text-base">
                <tr>
                    <th className="p-3 text-center border-r border-gray-700">Cylinder Capacity <br/> ton (kN)</th>
                    <th className="p-3 text-center border-r border-gray-700">Stroke (mm)</th>
                    <th className="p-3 text-center border-r border-gray-700">Model Number</th>
                    <th className="p-3 text-center border-r border-gray-700">Oil Capacity (cm³)</th>
                    <th className="p-3 text-center border-r border-gray-700">Collapsed Height <br/> A (mm)</th>
                    <th className="p-3 text-center border-r border-gray-700">Extend Height <br/> B (mm)</th>
                    <th className="p-3 text-center border-r border-gray-700">Outside Dia. <br/> C (mm)</th>
                    <th className="p-3 text-center border-r border-gray-700">Cylinder Bore Dia. <br/> D (mm)</th>
                    <th className="p-3 text-center border-r border-gray-700">Plunger Dia. (Thread) <br/> E (mm)</th>
                    <th className="p-3 text-center">Weight (Kg)</th>
                </tr>
                </thead>
                <tbody>
                {singleActingTableData.map((row, index) => {
                  const showCapacityCell = row.capacity !== lastSingleActingCapacity;
                  if (showCapacityCell) {
                    lastSingleActingCapacity = row.capacity;
                  }
                  return (
                    <tr key={index} className="bg-black text-center text-base border-t border-gray-700">
                        {showCapacityCell && (
                           <td rowSpan={singleActingCapacitySpans[row.capacity]} className="p-2 font-medium text-gray-300 border-r border-gray-700 align-middle">
                            {row.capacity}
                           </td>
                        )}
                        <td className="p-2 text-white border-r border-gray-700">{row.stroke}</td>
                        <td className="p-3 font-medium text-gray-300 border-r border-gray-700">{row.model}</td>
                        <td className="p-2 text-white border-r border-gray-700">{row.oil}</td>
                        <td className="p-2 text-white border-r border-gray-700">{row.colH}</td>
                        <td className="p-2 text-white border-r border-gray-700">{row.extH}</td>
                        <td className="p-2 text-white border-r border-gray-700">{row.outD}</td>
                        <td className="p-2 text-white border-r border-gray-700">{row.cylD}</td>
                        <td className="p-2 text-white border-r border-gray-700">{row.pluD}</td>
                        <td className="p-2 text-white">{row.weight}</td>
                    </tr>
                  );
                })}
                </tbody>
            </table>
            </div>
        </div>
      </div>

      {/* --- SINGLE ACTING HIGH TONNAGE HYDRAULIC CYLINDER TABLE --- */}
      <div className="w-9/10 mx-auto px-4 py-12">
        <div className="mb-10 text-center">
            <h2 className="text-4xl text-white mb-2" >
              SINGLE ACTING HIGH TONNAGE HYDRAULIC CYLINDER
            </h2>
            <div className="w-180 rounded-2xl h-1 bg-red-600 mx-auto mt-2" style={{ maxWidth: "800px" }}></div>
        </div>
        <div className="border border-gray-600 rounded-lg overflow-x-auto no-scrollbar">
            <div className="overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            <table className="min-w-full min-w-max">
                <thead className="bg-gray-800 text-base">
                <tr>
                    <th className="p-3 text-center border-r border-gray-700">ton</th>
                    <th className="p-3 text-center border-r border-gray-700">Stroke <br/> (mm)</th>
                    <th className="p-3 text-center border-r border-gray-700">Model <br/> Number</th>
                    <th className="p-3 text-center border-r border-gray-700">Cylinder Effective <br/> Area (cm³)</th>
                    <th className="p-3 text-center border-r border-gray-700">Oil Capacity <br/> (cm³)</th>
                    <th className="p-3 text-center border-r border-gray-700">Collapsed Height <br/> (mm)</th>
                    <th className="p-3 text-center border-r border-gray-700">Extend Height <br/> (mm)</th>
                    <th className="p-3 text-center border-r border-gray-700">Outside Dia. <br/> (mm)</th>
                    <th className="p-3 text-center border-r border-gray-700">Cylinder Bore Dia. <br/> (mm)</th>
                    <th className="p-3 text-center border-r border-gray-700">Plunger Dia. <br/> (mm)</th>
                    <th className="p-3 text-center border-r border-gray-700">Base to Advance <br/> Port (mm)</th>
                    <th className="p-3 text-center">Weight <br/> (Kg)</th>
                </tr>
                </thead>
                <tbody>
                {highTonnageTableData.map((row, index) => {
                  const showTonCell = row.ton !== lastHighTonnageCapacity;
                  if (showTonCell) {
                    lastHighTonnageCapacity = row.ton;
                  }
                  return (
                    <tr key={index} className="bg-black text-center text-base border-t border-gray-700">
                        {showTonCell && (
                           <td rowSpan={highTonnageCapacitySpans[row.ton]} className="p-2 font-medium text-gray-300 border-r border-gray-700 align-middle">
                            {row.ton}
                           </td>
                        )}
                        <td className="p-2 text-white border-r border-gray-700">{row.stroke}</td>
                        <td className="p-3 font-medium text-gray-300 border-r border-gray-700">{row.model}</td>
                        <td className="p-2 text-white border-r border-gray-700">{row.effectiveArea}</td>
                        <td className="p-2 text-white border-r border-gray-700">{row.oilCapacity}</td>
                        <td className="p-2 text-white border-r border-gray-700">{row.collapsedHeight}</td>
                        <td className="p-2 text-white border-r border-gray-700">{row.extendHeight}</td>
                        <td className="p-2 text-white border-r border-gray-700">{row.outsideDia}</td>
                        <td className="p-2 text-white border-r border-gray-700">{row.cylinderBoreDia}</td>
                        <td className="p-2 text-white border-r border-gray-700">{row.plungerDia}</td>
                        <td className="p-2 text-white border-r border-gray-700">{row.baseToAdvancePort}</td>
                        <td className="p-2 text-white">{row.weight}</td>
                    </tr>
                  );
                })}
                </tbody>
            </table>
            </div>
        </div>
      </div>

      {/* --- SINGLE ACTING LOW PROFILE LOCK-NUT HYDRAULIC CYLINDER TABLE --- */}
      <div className="w-9/10 mx-auto px-4 py-12">
        <div className="mb-10 text-center">
            <h2 className="text-4xl text-white mb-2" >
              SINGLE ACTING LOW PROFILE LOCK-NUT HYDRAULIC CYLINDER
            </h2>
            <div className="w-200 rounded-2xl h-1 bg-red-600 mx-auto mt-2" style={{ maxWidth: "800px" }}></div>
        </div>
        <div className="border border-gray-600 rounded-lg overflow-x-auto no-scrollbar">
            <div className="overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            <table className="min-w-full min-w-max">
                <thead className="bg-gray-800 text-sm">
                <tr>
                    <th className="p-2 text-center border-r border-gray-700">Cylinder Capacity <br/> ton (kN)</th>
                    <th className="p-2 text-center border-r border-gray-700">Stroke <br/> (mm)</th>
                    <th className="p-2 text-center border-r border-gray-700">Model Number</th>
                    <th className="p-2 text-center border-r border-gray-700">Oil Capacity <br/> (cm³)</th>
                    <th className="p-2 text-center border-r border-gray-700">Collapsed Height (mm) <br/> A</th>
                    <th className="p-2 text-center border-r border-gray-700">Extended Height (mm) <br/> B</th>
                    <th className="p-2 text-center border-r border-gray-700">Outside Dia. (mm) <br/> C</th>
                    <th className="p-2 text-center border-r border-gray-700">Cylinder Bore Dia. (mm) <br/> D</th>
                    <th className="p-2 text-center border-r border-gray-700">Plunger Dia. (Thread) <br/> E</th>
                    <th className="p-2 text-center border-r border-gray-700">Base to Advance port <br/> F</th>
                    <th className="p-2 text-center border-r border-gray-700">Saddle Dia. (mm) <br/> H</th>
                    <th className="p-2 text-center border-r border-gray-700">Saddle Protrusion from piston (mm) <br/> J</th>
                    <th className="p-2 text-center border-r border-gray-700">Saddle Max. tilt angle <br/> R</th>
                    <th className="p-2 text-center border-r border-gray-700">Plunger Dia. (mm)</th>
                    <th className="p-2 text-center">Weight <br/> (Kg)</th>
                </tr>
                </thead>
                <tbody>
                {lowProfileTableData.map((row, index) => {
                  const showCapacityCell = row.capacityTon !== lastLowProfileCapacity;
                  if (showCapacityCell) {
                    lastLowProfileCapacity = row.capacityTon;
                  }
                  return (
                    <tr key={index} className="bg-black text-center text-medium border-t border-gray-700">
                        {showCapacityCell && (
                           <td rowSpan={lowProfileCapacitySpans[row.capacityTon]} className="p-2 font-medium text-gray-300 border-r border-gray-700 align-middle">
                            {row.capacityTon}
                           </td>
                        )}
                        <td className="p-2 text-white border-r border-gray-700">{row.stroke}</td>
                        <td className="p-3 font-medium text-gray-300 border-r border-gray-700">{row.model}</td>
                        <td className="p-2 text-white border-r border-gray-700">{row.oilCapacity}</td>
                        <td className="p-2 text-white border-r border-gray-700">{row.collapsedHeight}</td>
                        <td className="p-2 text-white border-r border-gray-700">{row.extendedHeight}</td>
                        <td className="p-2 text-white border-r border-gray-700">{row.outsideDia}</td>
                        <td className="p-2 text-white border-r border-gray-700">{row.cylinderBoreDia}</td>
                        <td className="p-2 text-white border-r border-gray-700">{row.plungerDiaThread}</td>
                        <td className="p-2 text-white border-r border-gray-700">{row.baseToAdvancePort}</td>
                        <td className="p-2 text-white border-r border-gray-700">{row.saddleDia}</td>
                        <td className="p-2 text-white border-r border-gray-700">{row.saddleProtrusionFromPiston}</td>
                        <td className="p-2 text-white border-r border-gray-700">{row.saddleMaxTiltAngle}</td>
                        <td className="p-2 text-white border-r border-gray-700">{row.plungerDia}</td>
                        <td className="p-2 text-white">{row.weight}</td>
                    </tr>
                  );
                })}
                </tbody>
            </table>
            </div>
        </div>
      </div>

     {/* --- SINGLE ACTING LOW PROFILE HYDRAULIC CYLINDER TABLE --- */}
      <div className="w-9/10 mx-auto px-4 py-12">
        <div className="mb-10 text-center">
            <h2 className="text-4xl text-white mb-2" >
              SINGLE ACTING LOW PROFILE HYDRAULIC CYLINDER
            </h2>
            <div className="w-180 rounded-2xl h-1 bg-red-600 mx-auto mt-2" style={{ maxWidth: "800px" }}></div>
        </div>
        <div className="border border-gray-600 rounded-lg overflow-x-auto no-scrollbar">
            <div className="overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            <table className="min-w-full min-w-max">
                <thead className="bg-gray-800 text-sm">
                <tr>
                    <th className="p-2 text-center border-r border-gray-700">Cylinder Capacity <br/> ton (kN)</th>
                    <th className="p-2 text-center border-r border-gray-700">Stroke <br/> (mm)</th>
                    <th className="p-2 text-center border-r border-gray-700">Model Number</th>
                    <th className="p-2 text-center border-r border-gray-700">Oil Capacity <br/> (cm³)</th>
                    <th className="p-2 text-center border-r border-gray-700">Collapsed Height (mm) <br/> A</th>
                    <th className="p-2 text-center border-r border-gray-700">Extended Height (mm) <br/> B</th>
                    <th className="p-2 text-center border-r border-gray-700">Outside Dia. (mm) <br/> C</th>
                    <th className="p-2 text-center border-r border-gray-700">Cylinder Bore Dia. (mm) <br/> D</th>
                    <th className="p-2 text-center border-r border-gray-700">Plunger Dia. (Thread) <br/> E</th>
                    <th className="p-2 text-center border-r border-gray-700">Base to Advance <br/> port <br/> F</th>
                    <th className="p-2 text-center border-r border-gray-700">Saddle Protrusion <br/> from plgr <br/> (mm) <br/> J</th>
                    <th className="p-2 text-center border-r border-gray-700">Saddle Max. tilt <br/> angle <br/> M</th>
                    <th className="p-2 text-center border-r border-gray-700">Plunger to <br/> mounting hole <br/> (") <br/> N</th>
                    <th className="p-2 text-center">Weight <br/> (Kg)</th>
                </tr>
                </thead>
                <tbody>
                {lowProfileHydraulicTableData.map((row, index) => {
                  const showTonCell = row.ton !== lastLowProfileHydraulicCapacity;
                  if (showTonCell) {
                    lastLowProfileHydraulicCapacity = row.ton;
                  }
                  return (
                    <tr key={index} className="bg-black text-center text-medium border-t border-gray-700">
                        {showTonCell && (
                           <td rowSpan={lowProfileHydraulicCapacitySpans[row.ton]} className="p-2 font-medium text-gray-300 border-r border-gray-700 align-middle">
                            {row.ton}
                           </td>
                        )}
                        <td className="p-2 text-white border-r border-gray-700">{row.stroke}</td>
                        <td className="p-3 font-medium text-gray-300 border-r border-gray-700">{row.model}</td>
                        <td className="p-2 text-white border-r border-gray-700">{row.oilCapacity}</td>
                        <td className="p-2 text-white border-r border-gray-700">{row.collapsedHeight}</td>
                        <td className="p-2 text-white border-r border-gray-700">{row.extendedHeight}</td>
                        <td className="p-2 text-white border-r border-gray-700">{row.outsideDia}</td>
                        <td className="p-2 text-white border-r border-gray-700">{row.cylinderBoreDia}</td>
                        <td className="p-2 text-white border-r border-gray-700">{row.plungerDiaThread}</td>
                        <td className="p-2 text-white border-r border-gray-700">{row.baseToAdvancePort}</td>
                        <td className="p-2 text-white border-r border-gray-700">{row.saddleProtrusionFromPlunger}</td>
                        <td className="p-2 text-white border-r border-gray-700">{row.saddleMaxTiltAngle}</td>
                        <td className="p-2 text-white border-r border-gray-700">{row.plungerToMountingHole === null ? '-' : row.plungerToMountingHole}</td>
                        <td className="p-2 text-white">{row.weight}</td>
                    </tr>
                  );
                })}
                </tbody>
            </table>
            </div>
        </div>
      </div>


      {/* --- NEWLY ADDED: SINGLE ACTING LOW FLAT HYDRAULIC CYLINDER TABLE --- */}
      <div className="w-9/10 mx-auto px-4 py-12">
        <div className="mb-10 text-center">
            <h2 className="text-4xl text-white mb-2" >
              SINGLE ACTING LOW FLAT HYDRAULIC CYLINDER
            </h2>
            <div className="w-160 rounded-2xl h-1 bg-red-600 mx-auto mt-2" style={{ maxWidth: "800px" }}></div>
        </div>
        <div className="border border-gray-600 rounded-lg overflow-x-auto no-scrollbar">
            <div className="overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            <table className="max-w-full min-w-max">
                <thead className="bg-gray-800 text-sm">
                <tr>
                    <th className="p-2 text-center border-r border-gray-700" rowSpan="2">Cylinder Capacity <br/> ton (kN)</th>
                    <th className="p-2 text-center border-r border-gray-700" rowSpan="2">Stroke <br/> (mm)</th>
                    <th className="p-2 text-center border-r border-gray-700" rowSpan="2">Model Number</th>
                    <th className="p-2 text-center border-r border-gray-700" rowSpan="2">Oil Capacity <br/> (cm³)</th>
                </tr>
                <tr>
                    <th className="p-2 text-center border-r border-gray-700">Collapsed Height <br/> A <br/> (mm)</th>
                    <th className="p-2 text-center border-r border-gray-700">Extended Height <br/> B <br/> (mm)</th>
                    <th className="p-2 text-center border-r border-gray-700">Outside Dia. <br/> C <br/> (mm)</th>
                    <th className="p-2 text-center border-r border-gray-700">Cylinder Bore Dia. <br/> D <br/> (mm)</th>
                    <th className="p-2 text-center border-r border-gray-700">Plunger Dia. <br/> (Thread) <br/> E <br/> (mm)</th>
                    <th className="p-2 text-center border-r border-gray-700">Base to <br/> Advance <br/> port <br/> F <br/> (mm)</th>
                    <th className="p-2 text-center border-r border-gray-700">Saddle <br/> Protrusion <br/> from plgr <br/> J <br/> (mm)</th>
                    <th className="p-2 text-center border-r border-gray-700">Saddle <br/> Max. tilt <br/> angle <br/> M <br/> (")</th>
                    <th className="p-2 text-center border-r border-gray-700">Plunger to <br/> mounting <br/> hole <br/> N <br/> (mm)</th>
                    <th className="p-2 text-center">Weight <br/> (Kg)</th>
                </tr>
                </thead>
                <tbody>
                {lowFlatHydraulicTableData.map((row, index) => {
                  const showCapacityCell = row.capacity !== lastLowFlatHydraulicCapacity;
                  if (showCapacityCell) {
                    lastLowFlatHydraulicCapacity = row.capacity;
                  }
                  return (
                    <tr key={index} className="bg-black text-center text-medium border-t border-gray-700">
                        {showCapacityCell && (
                           <td rowSpan={lowFlatHydraulicCapacitySpans[row.capacity]} className="p-2 font-medium text-gray-300 border-r border-gray-700 align-middle">
                            {row.capacity}
                           </td>
                        )}
                        <td className="p-2 text-white border-r border-gray-700">{row.stroke}</td>
                        <td className="p-3 font-medium text-gray-300 border-r border-gray-700">{row.model}</td>
                        <td className="p-2 text-white border-r border-gray-700">{row.oilCapacity}</td>
                        <td className="p-2 text-white border-r border-gray-700">{row.collapsedHeight}</td>
                        <td className="p-2 text-white border-r border-gray-700">{row.extendedHeight}</td>
                        <td className="p-2 text-white border-r border-gray-700">{row.outsideDia}</td>
                        <td className="p-2 text-white border-r border-gray-700">{row.cylinderBoreDia}</td>
                        <td className="p-2 text-white border-r border-gray-700">{row.plungerDiaThread}</td>
                        <td className="p-2 text-white border-r border-gray-700">{row.baseToAdvancePort}</td>
                        <td className="p-2 text-white border-r border-gray-700">{row.saddleProtrusionFromPlunger}</td>
                        <td className="p-2 text-white border-r border-gray-700">{row.saddleMaxTiltAngle}</td>
                        <td className="p-2 text-white border-r border-gray-700">{row.plungerToMountingHole}</td>
                        <td className="p-2 text-white">{row.weight}</td>
                    </tr>
                  );
                })}
                </tbody>
            </table>
            </div>
        </div>
      </div>


      {/* --- NEWLY ADDED: DOUBLE ACTING HOLLOW HYDRAULIC CYLINDER TABLE --- */}
      <div className="w-9/10 mx-auto px-4 py-12">
        <div className="mb-10 text-center">
            <h2 className="text-4xl text-white mb-2" >
              DOUBLE ACTING HOLLOW HYDRAULIC CYLINDER
            </h2>
            <div className="w-160 rounded-2xl h-1 bg-red-600 mx-auto mt-2" style={{ maxWidth: "800px" }}></div>
        </div>
        <div className="border border-gray-600 rounded-lg overflow-x-auto no-scrollbar">
            <div className="overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            <table className="min-w-full min-w-max">
                <thead className="bg-gray-800 text-small">
                <tr>
                    <th className="p-2 text-center border-r border-gray-700" rowSpan="2">Cylinder Capacity <br/> ton (kN)</th>
                    <th className="p-2 text-center border-r border-gray-700" rowSpan="2">Stroke <br/> (mm)</th>
                    <th className="p-2 text-center border-r border-gray-700" rowSpan="2">Model Number</th>
                    <th className="p-2 text-center border-r border-gray-700" colSpan="2">Max. Cylinder <br/> Capacity (kN)</th>
                    <th className="p-2 text-center border-r border-gray-700" colSpan="2">Oil Capacity <br/> (cm³)</th>
                    <th className="p-2 text-center border-r border-gray-700" rowSpan="2">Collapsed Height <br/> A <br/> (mm)</th>
                    <th className="p-2 text-center border-r border-gray-700" rowSpan="2">Extended Height <br/> B <br/> (mm)</th>
                    <th className="p-2 text-center border-r border-gray-700" rowSpan="2">Outside Dia. <br/> C <br/> (mm)</th>
                    <th className="p-2 text-center border-r border-gray-700" rowSpan="2">Cylinder <br/> Bore Dia. <br/> D <br/> (mm)</th>
                    <th className="p-2 text-center border-r border-gray-700" rowSpan="2">Plunger <br/> Dia. <br/> (Thread) <br/> E <br/> (mm)</th>
                    <th className="p-2 text-center" rowSpan="2">Weight <br/> (Kg)</th>
                </tr>
                <tr>
                    <th className="p-2 text-center border-r border-gray-700">Advance</th>
                    <th className="p-2 text-center border-r border-gray-700">Retract</th>
                    <th className="p-2 text-center border-r border-gray-700">Advance</th>
                    <th className="p-2 text-center border-r border-gray-700">Retract</th>
                </tr>
                </thead>
                <tbody>
                {doubleActingHollowTableData.map((row, index) => {
                  const showTonCell = row.ton !== lastDoubleActingHollowCapacity;
                  if (showTonCell) {
                    lastDoubleActingHollowCapacity = row.ton;
                  }
                  return (
                    <tr key={index} className="bg-black text-center text-medium border-t border-gray-700">
                        {showTonCell && (
                           <td rowSpan={doubleActingHollowCapacitySpans[row.ton]} className="p-2 font-medium text-gray-300 border-r border-gray-700 align-middle">
                            {row.ton}
                           </td>
                        )}
                        <td className="p-2 text-white border-r border-gray-700">{row.stroke}</td>
                        <td className="p-3 font-medium text-gray-300 border-r border-gray-700">{row.model}</td>
                        <td className="p-2 text-white border-r border-gray-700">{row.maxCylAdvance}</td>
                        <td className="p-2 text-white border-r border-gray-700">{row.maxCylRetract}</td>
                        <td className="p-2 text-white border-r border-gray-700">{row.oilAdvance}</td>
                        <td className="p-2 text-white border-r border-gray-700">{row.oilRetract}</td>
                        <td className="p-2 text-white border-r border-gray-700">{row.collapsedHeight}</td>
                        <td className="p-2 text-white border-r border-gray-700">{row.extendedHeight}</td>
                        <td className="p-2 text-white border-r border-gray-700">{row.outsideDia}</td>
                        <td className="p-2 text-white border-r border-gray-700">{row.cylinderBoreDia}</td>
                        <td className="p-2 text-white border-r border-gray-700">{row.plungerDia}</td>
                        <td className="p-2 text-white">{row.weight}</td>
                    </tr>
                  );
                })}
                </tbody>
            </table>
            </div>
        </div>
      </div>

      {/* --- NEWLY ADDED: DOUBLE ACTING HOLLOW HYDRAULIC CYLINDER TABLE --- */}
      <div className="w-9/10 mx-auto px-4 py-12">
        <div className="mb-10 text-center">
            <h2 className="text-4xl text-white mb-2" >
              DOUBLE ACTING HOLLOW HYDRAULIC CYLINDER
            </h2>
            <div className="w-160 rounded-2xl h-1 bg-red-600 mx-auto mt-2" style={{ maxWidth: "800px" }}></div>
        </div>
        <div className="border border-gray-600 rounded-lg overflow-x-auto no-scrollbar">
            <div className="overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            <table className="min-w-full min-w-max">
                <thead className="bg-gray-800 text-medim">
                <tr>
                    <th className="p-2 text-center border-r border-gray-700" rowSpan="2">Cylinder Capacity <br/> ton (kN)</th>
                    <th className="p-2 text-center border-r border-gray-700" rowSpan="2">Stroke <br/> (mm)</th>
                    <th className="p-2 text-center border-r border-gray-700" rowSpan="2">Model Number</th>
                    <th className="p-2 text-center border-r border-gray-700" colSpan="2">Max. Cylinder <br/> Capacity (kN)</th>
                    <th className="p-2 text-center border-r border-gray-700" colSpan="2">Oil Capacity <br/> (cm³)</th>
                    <th className="p-2 text-center border-r border-gray-700" rowSpan="2">Collapsed Height <br/> A <br/> (mm)</th>
                    <th className="p-2 text-center border-r border-gray-700" rowSpan="2">Extended Height <br/> B <br/> (mm)</th>
                    <th className="p-2 text-center border-r border-gray-700" rowSpan="2">Outside Dia. <br/> C <br/> (mm)</th>
                    <th className="p-2 text-center border-r border-gray-700" rowSpan="2">Cylinder <br/> Bore Dia. <br/> D <br/> (mm)</th>
                    <th className="p-2 text-center border-r border-gray-700" rowSpan="2">Plunger <br/> Dia. <br/> (Thread) <br/> E <br/> (mm)</th>
                    <th className="p-2 text-center" rowSpan="2">Weight <br/> (Kg)</th>
                </tr>
                <tr>
                    <th className="p-2 text-center border-r border-gray-700">Advance</th>
                    <th className="p-2 text-center border-r border-gray-700">Retract</th>
                    <th className="p-2 text-center border-r border-gray-700">Advance</th>
                    <th className="p-2 text-center border-r border-gray-700">Retract</th>
                </tr>
                </thead>
                <tbody>
                {doubleActingHollowTableData.map((row, index) => {
                  const showTonCell = row.ton !== lastDoubleActingHollowCapacity;
                  if (showTonCell) {
                    lastDoubleActingHollowCapacity = row.ton;
                  }
                  return (
                    <tr key={index} className="bg-black text-center text-sm border-t border-gray-700">
                        {showTonCell && (
                           <td rowSpan={doubleActingHollowCapacitySpans[row.ton]} className="p-2 font-medium text-gray-300 border-r border-gray-700 align-middle">
                            {row.ton}
                           </td>
                        )}
                        <td className="p-2 text-white border-r border-gray-700">{row.stroke}</td>
                        <td className="p-3 font-medium text-gray-300 border-r border-gray-700">{row.model}</td>
                        <td className="p-2 text-white border-r border-gray-700">{row.maxCylAdvance}</td>
                        <td className="p-2 text-white border-r border-gray-700">{row.maxCylRetract}</td>
                        <td className="p-2 text-white border-r border-gray-700">{row.oilAdvance}</td>
                        <td className="p-2 text-white border-r border-gray-700">{row.oilRetract}</td>
                        <td className="p-2 text-white border-r border-gray-700">{row.collapsedHeight}</td>
                        <td className="p-2 text-white border-r border-gray-700">{row.extendedHeight}</td>
                        <td className="p-2 text-white border-r border-gray-700">{row.outsideDia}</td>
                        <td className="p-2 text-white border-r border-gray-700">{row.cylinderBoreDia}</td>
                        <td className="p-2 text-white border-r border-gray-700">{row.plungerDia}</td>
                        <td className="p-2 text-white">{row.weight}</td>
                    </tr>
                  );
                })}
                </tbody>
            </table>
            </div>
        </div>
      </div>


      {/* --- NEWLY ADDED: DOUBLE ACTING HIGH TONNAGE HYDRAULIC CYLINDER TABLE --- */}
      <div className="w-9/10 mx-auto px-4 py-12">
        <div className="mb-10 text-center">
            <h2 className="text-4xl text-white mb-2" >
              DOUBLE ACTING HIGH TONNAGE HYDRAULIC CYLINDER
            </h2>
            <div className="w-190 rounded-2xl h-1 bg-red-600 mx-auto mt-2" style={{ maxWidth: "800px" }}></div>
        </div>
        <div className="border border-gray-600 rounded-lg overflow-x-auto no-scrollbar">
            {/* Removed overflow-x-auto and min-w-full */}
            <div>
            <table className="w-full min-w-max">
                <thead className="bg-gray-800 text-medium">
                <tr>
                    <th className="p-2 text-center border-r border-gray-700" rowSpan="2">Cylinder Capacity <br/> ton (kN)</th>
                    <th className="p-2 text-center border-r border-gray-700" rowSpan="2">Stroke <br/> (mm)</th>
                    <th className="p-2 text-center border-r border-gray-700" rowSpan="2">Model Number</th>
                    <th className="p-2 text-center border-r border-gray-700" colSpan="2">Max. Cylinder <br/> Capacity (kN)</th>
                    <th className="p-2 text-center border-r border-gray-700" colSpan="2">Oil Capacity <br/> (cm³)</th>
                    <th className="p-2 text-center border-r border-gray-700" rowSpan="2">Collapsed Height <br/> A <br/> (mm)</th>
                    <th className="p-2 text-center border-r border-gray-700" rowSpan="2">Extended Height <br/> B <br/> (mm)</th>
                    <th className="p-2 text-center border-r border-gray-700" rowSpan="2">Outside Dia. <br/> C <br/> (mm)</th>
                    <th className="p-2 text-center border-r border-gray-700" rowSpan="2">Cylinder <br/> Bore Dia. <br/> D <br/> (mm)</th>
                    <th className="p-2 text-center border-r border-gray-700" rowSpan="2">Plunger <br/> Dia. <br/> (Thread) <br/> E <br/> (mm)</th>
                    <th className="p-2 text-center" rowSpan="2">Weight <br/> (Kg)</th>
                </tr>
                <tr>
                    <th className="p-2 text-center border-r border-gray-700">Advance</th>
                    <th className="p-2 text-center border-r border-gray-700">Retract</th>
                    <th className="p-2 text-center border-r border-gray-700">Advance</th>
                    <th className="p-2 text-center border-r border-gray-700">Retract</th>
                </tr>
                </thead>
                <tbody>
                {doubleActingHighTonnageTableData.map((row, index) => {
                  const showTonCell = row.ton !== lastDoubleActingHighTonnageCapacity;
                  if (showTonCell) {
                    lastDoubleActingHighTonnageCapacity = row.ton;
                  }
                  return (
                    <tr key={index} className="bg-black text-center text-medium border-t border-gray-700"> {/* Smallest text */}
                        {showTonCell && (
                           <td rowSpan={doubleActingHighTonnageCapacitySpans[row.ton]} className="p-1 font-medium text-gray-300 border-r border-gray-700 align-middle"> {/* Less padding */}
                            {row.ton}
                           </td>
                        )}
                        <td className="p-1 text-white border-r border-gray-700">{row.stroke}</td>
                        <td className="p-3 font-medium text-gray-300 border-r border-gray-700">{row.model}</td>
                        <td className="p-1 text-white border-r border-gray-700">{row.capAdvance}</td>
                        <td className="p-1 text-white border-r border-gray-700">{row.capRetract}</td>
                        <td className="p-1 text-white border-r border-gray-700">{row.oilAdvance}</td>
                        <td className="p-1 text-white border-r border-gray-700">{row.oilRetract}</td>
                        <td className="p-1 text-white border-r border-gray-700">{row.colH}</td>
                        <td className="p-1 text-white border-r border-gray-700">{row.extH}</td>
                        <td className="p-1 text-white border-r border-gray-700">{row.outD}</td>
                        <td className="p-1 text-white border-r border-gray-700">{row.boreD}</td>
                        <td className="p-1 text-white border-r border-gray-700">{row.plungerD}</td>
                        <td className="p-1 text-white">{row.weight}</td>
                    </tr>
                  );
                })}
                </tbody>
            </table>
            </div>
        </div>
      </div>
    </div>
  );
};

export default HydraulicJack;