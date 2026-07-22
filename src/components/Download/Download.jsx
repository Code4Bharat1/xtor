// "use client";
// import { motion } from "framer-motion";

// export default function DownloadSection() {
//   const containerVariants = {
//     hidden: {},
//     show: {
//       transition: {
//         staggerChildren: 0.3,
//       },
//     },
//   };

//   const itemVariants = {
//     hidden: { opacity: 0, y: 50 },
//     show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
//   };

//   return (
//     <motion.section
//       className="bg-black text-white py-10 px-6 text-center"
//       initial="hidden"
//       // whileInView="show"
//       // viewport={{ once: true }}
//       animate="show"
//       variants={containerVariants}
//     >
//       {/* Heading */}
//       <motion.h2
//         className="text-6xl font-base mb-4"
//         
//         variants={itemVariants}
//       >
//         Downloads
//       </motion.h2>

//       <motion.div
//         className="w-80 h-1 bg-red-600 mx-auto mb-8"
//         variants={itemVariants}
//       ></motion.div>

//       <motion.h3
//         className="text-4xl font-base mb-14"
//         
//         variants={itemVariants}
//       >
//         Download Our Product Catalog
//       </motion.h3>

//       {/* Buttons */}
//       <motion.div
//         className="flex flex-col sm:flex-row justify-center gap-14 mb-10"
//         variants={itemVariants}
//       >
//         <button className="bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-3 rounded-md transition">
//           Download Catalog
//         </button>
//       </motion.div>

//       {/* Description */}
//       <motion.p
//         className="max-w-3xl mx-auto text-sm sm:text-lg leading-relaxed text-gray-200 font-poppins text-justify"
//         variants={itemVariants}
//       >
//         Get detailed information about our products and services. Download our
//         comprehensive catalog to explore the full range of Xtorc’s industrial
//         tools and services, including specifications, features, and pricing.
//       </motion.p>
//     </motion.section>
//   );
// }




"use client";
import { motion } from "framer-motion";
import { FaFilePdf } from "react-icons/fa";

export default function DownloadSection() {
  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  // Example PDF files (replace with real links)
  const pdfFiles = [
    {
      title: "XTORC BROCHURE",
      //description: "Comprehensive catalog with all product specifications.",
      file: "XTORC BROCHURE.pdf",
    },
    {
      title: "XTORC IN-SITU MACHINES BROCHURE",
      //description: "Detailed brochure for our torque tool solutions.",
      file: "XTORC IN-SITU MACHINES BROCHURE.pdf",
    },
    {
      title: "XTORC WIND CATALOG",
      //description: "Step-by-step guide for maintenance and support services.",
      file: "XTORC WIND CATALOG.pdf",
    },
  ];

  return (
    <motion.section
      className="bg-black text-white pt-16 pb-14 px-6 text-center"
      initial="hidden"
      animate="show"
      variants={containerVariants}
    >
      <div className="w-9/10 mx-auto">
      {/* Heading */}
      <div className="w-fit mx-auto flex flex-col items-center mb-8">
        <motion.h2
          className="heading-main mb-0"
          variants={itemVariants}
        >
          Downloads
        </motion.h2>
        <div className="w-full h-1 bg-red-600 rounded-full mt-2"></div>
      </div>

      <motion.h3
        className="heading-sub mb-14"
        
        variants={itemVariants}
      >
        Download Our Product Documents
      </motion.h3>

      {/* Download Cards */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-items-center gap-8"
        variants={itemVariants}
      >
        {pdfFiles.map((pdf, index) => (
          <motion.div
            key={index}
            className="bg-gray-900 border border-gray-700 rounded-2xl shadow-lg p-6 w-full max-w-[320px] text-left flex flex-col justify-between hover:shadow-red-600/40 transition-shadow"
            variants={itemVariants}
          >
            <div>
              <FaFilePdf className="text-red-600 text-5xl mb-4" />
              <h4 className="text-2xl font-semibold mb-4">{pdf.title}</h4>
              {pdf.description && (
                <p className="text-gray-300 text-sm mb-6">{pdf.description}</p>
              )}
            </div>
            <a
              href={pdf.file}
              download
              className="bg-red-600 hover:bg-red-700 text-white font-semibold text-center py-2 rounded-md transition-colors"
            >
              Download PDF
            </a>
          </motion.div>
        ))}
      </motion.div>

      {/* Description */}
      <motion.p
        className="text-body text-justify mt-16"
        variants={itemVariants}
      >
        Get detailed information about our products and services. Download our
        comprehensive catalogs and manuals to explore Xtorc’s full range of
        industrial tools, specifications, and maintenance details.
      </motion.p>
      </div>
    </motion.section>
  );
}



// "use client";
// import { motion } from "framer-motion";
// import { FaFilePdf } from "react-icons/fa";
// import { Document, Page, pdfjs } from "react-pdf";
// import { useState } from "react";

// // ✅ Proper PDF.js worker path for Next.js
// pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

// export default function DownloadSection() {
//   const containerVariants = {
//     hidden: {},
//     show: {
//       transition: { staggerChildren: 0.3 },
//     },
//   };

//   const itemVariants = {
//     hidden: { opacity: 0, y: 50 },
//     show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
//   };

//   // ✅ Example PDF files (make sure they are in /public)
//   const pdfFiles = [
//     {
//       title: "XTORC BROCHURE",
//       file: "/XTORC BROCHURE.pdf",
//     },
//     {
//       title: "XTORC IN-SITU MACHINES BROCHURE",
//       file: "/XTORC IN-SITU MACHINES BROCHURE.pdf",
//     },
//     {
//       title: "XTORC WIND CATALOG",
//       file: "/XTORC WIND CATALOG.pdf",
//     },
//   ];

//   return (
//     <motion.section
//       className="bg-black text-white py-14 px-6 text-center"
//       initial="hidden"
//       animate="show"
//       variants={containerVariants}
//     >
//       {/* Heading */}
//       <motion.h2
//         className="text-5xl sm:text-6xl font-base mb-4"
//         
//         variants={itemVariants}
//       >
//         Downloads
//       </motion.h2>

//       <motion.div
//         className="w-40 sm:w-80 h-1 bg-red-600 mx-auto mb-10"
//         variants={itemVariants}
//       ></motion.div>

//       <motion.h3
//         className="text-2xl sm:text-4xl font-base mb-14"
//         
//         variants={itemVariants}
//       >
//         Download Our Product Documents
//       </motion.h3>

//       {/* Cards Grid */}
//       <motion.div
//         className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center"
//         variants={itemVariants}
//       >
//         {pdfFiles.map((pdf, index) => (
//           <motion.div
//             key={index}
//             className="bg-gray-900 border border-gray-700 rounded-2xl shadow-lg p-6 w-72 sm:w-80 text-justify flex flex-col justify-between hover:shadow-red-600/40 transition-shadow"
//             variants={itemVariants}
//           >
//             {/* PDF Preview */}
//             <div className="bg-gray-800 rounded-lg mb-4 flex items-center justify-center  ">
//               <Document file={pdf.file}>
//                 <Page pageNumber={1} width={260} />
//               </Document>
//             </div>

//             {/* File Info */}
//             <div>
//               <FaFilePdf className="text-red-600 text-5xl mb-4" />
//               <h4 className="text-2xl font-semibold mb-2">{pdf.title}</h4>
//             </div>

//             {/* Download Button */}
//             <a
//               href={pdf.file}
//               download
//               className="bg-red-600 hover:bg-red-700 text-white font-semibold text-center py-2 rounded-md transition-colors mt-6"
//             >
//               Download PDF
//             </a>
//           </motion.div>
//         ))}
//       </motion.div>

//       {/* Description */}
//       <motion.p
//         className="max-w-3xl mx-auto mt-16 text-sm sm:text-lg leading-relaxed text-gray-200 font-poppins text-justify"
//         variants={itemVariants}
//       >
//         Get detailed information about our products and services. Download our
//         comprehensive catalogs and manuals to explore Xtorc’s full range of
//         industrial tools, specifications, and maintenance details.
//       </motion.p>
//     </motion.section>
//   );
// }
