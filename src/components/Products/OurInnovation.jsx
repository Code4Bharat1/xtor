// 'use client'
// import React from 'react';
// import { motion } from 'framer-motion';
// import Link from 'next/link';

// const productVariants = {
//   hidden: (direction) => ({
//     opacity: 0,
//     x: direction === "left" ? -100 : 100,
//   }),
//   visible: {
//     opacity: 1,
//     x: 0,
//     transition: { duration: 0.8, ease: "easeOut" }
//   },
// };

// const products = [
//   {
//     id: 1,
//     title: "Hydraulic Torque Wrenches",
//     img: "images/BoltingTools/squaredrive.png",
//     desc: "Designed for precision and durability, our hydraulic torque wrenches are ideal for heavy-duty applications across multiple industries, ensuring accurate and efficient tightening or loosening of bolts.",
//     link: "/squaredrive"
//   },
//   {
//     id: 2,
//     title: "Pipe Cutting & Beveling Machines",
//     img: "product4.png",
//     desc: "Engineered for precision and safety...",
//     link: "/pipeCutting"
//   },
//   {
//     id: 3,
//     title: "Bolt Tensioning Solutions",
//     img: "hydraulicbolttensioners.png",
//     desc: "Experience unmatched reliability with our advanced multi-stud and hydraulic bolt tensioners, paired with electric and pneumatic powerpacks for superior performance under demanding conditions.",
//     link: "/topsidebolt"
//   },
//   {
//     id: 4,
//     title: "Hydraulic Equipment",
//     img: "product3.png",
//     desc: "From hydrotest pumps to hydraulic jacks, our robust equipment offers versatility and reliability to support a range of industrial applications.",
//     link: "/hydraulicjack"
//   }
// ];

// const Innovations = () => {
//   return (
//     <div className="bg-black min-h-screen p-8">
//       {/* Header Section */}
//       <motion.div
//         initial={{ opacity: 0, y: 50 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8, ease: "easeOut" }}
//         viewport={{ once: true, amount: 0.3 }}
//         className="mb-12"
//       >
//         <div className="flex items-center mb-4">
//           <h1 className="text-white text-4xl font-bold mr-4 ml-20">
//             Our Innovations
//           </h1>
//           <div className="h-1 bg-red-600 w-10"></div>
//         </div>
//         <h2
//           className="text-2xl font-semibold ml-20"
//           style={{ color: '#D01A1A' }}
//         >
//           Industry Focused Products!
//         </h2>
//       </motion.div>

//       {/* Products Grid */}
//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-[1100px] mx-auto w-full px-4">
//         {products.map((product, i) => {
//           const direction = i % 2 === 0 ? "left" : "right";
//           return (
//             <motion.div
//               key={product.id}
//               className="flex flex-col items-center gap-6"
//               variants={productVariants}
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: true, amount: 0.2 }}
//               custom={direction}
//             >
//               {/* Product Image with Link */}
//               <Link href={product.link} className="relative group">
//                 <img
//                   src={product.img}
//                   alt={product.title}
//                   className={`object-cover bg-gray-200 rounded 
//                     h-65 w-65 md:h-80 md:w-80 lg:h-[500px] lg:w-[500px]
//                     ${product.id === 2 ? "rotate-[-90deg]" : ""}`}
//                   onError={(e) => e.target.src = '/placeholder.png'} // fallback image
//                 />

//                 <div className="absolute top-0 right-0 w-11 h-full bg-red-600 flex items-center justify-center transition-all duration-300 group-hover:bg-red-700">
//                   <span className="text-white text-xs font-bold transform -rotate-90 whitespace-nowrap md:text-xl">
//                     {product.title}
//                   </span>
//                 </div>
//               </Link>

//               {/* Text Section */}
//               <div className="flex-1 text-center">
//                 <h3 className="text-3xl font-bold mb-2" style={{ color: '#D01A1A' }}>
//                   {product.title}
//                 </h3>
//                 <p className="text-white text-medium leading-relaxed break-words text-justify">
//                   {product.desc}
//                 </p>
//               </div>
//             </motion.div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default Innovations;
'use client'
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const productVariants = {
  hidden: (direction) => ({
    opacity: 0,
    x: direction === "left" ? -100 : 100,
  }),
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" }
  },
};

const products = [
  {
    id: 1,
    title: "Hydraulic Torque Wrenches",
    img: "images/BoltingTools/squaredrive.png",
    desc: "Designed for precision and durability, our hydraulic torque wrenches are ideal for heavy-duty applications across multiple industries, ensuring accurate and efficient tightening or loosening of bolts.",
    link: "/squaredrive",
    imgHeight: "h-[500px]",
    imgWidth: "w-[500px]",
    imgRotation: "" // No rotation
  },
  {
    id: 2,
    title: "Pipe Cutting & Beveling Machines",
    img: "product4.png",
    desc: "Engineered for precision and safety...",
    link: "/pipeCutting",
    imgHeight: "h-[500px]",
    imgWidth: "w-[500px]",
    imgRotation: "rotate-[-360deg]" // Keep this one rotated
  },
  {
    id: 3,
    title: "Bolt Tensioning Solutions",
    img: "product5.png",
    desc: "Experience unmatched reliability with our advanced multi-stud and hydraulic bolt tensioners, paired with electric and pneumatic powerpacks for superior performance under demanding conditions.",
    link: "/topsidebolt",
    imgHeight: "h-[500px]",
    imgWidth: "w-[500px]",
    imgRotation: "" // No rotation
  },
  {
    id: 4,
    title: "Hydraulic Equipment",
    img: "product3.png",
    desc: "From hydrotest pumps to hydraulic jacks, our robust equipment offers versatility and reliability to support a range of industrial applications.",
    link: "/hydraulicjack",
    imgHeight: "h-[500px]",
    imgWidth: "w-[500px]",
    imgRotation: "" // No rotation
  }
];

const Innovations = () => {
  return (
    <div className="bg-black min-h-screen py-12">
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12"
      >
        <div className="flex items-center mb-4">
          <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold font-poppins mr-4">
            Our Innovations
          </h1>
          <div className="h-1 bg-red-600 w-10"></div>
        </div>
        <h2
          className="text-xl sm:text-2xl font-semibold font-poppins"
          style={{ color: '#D01A1A' }}
        >
          Industry Focused Products!
        </h2>
      </motion.div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {products.map((product, i) => {
          const direction = i % 2 === 0 ? "left" : "right";
          return (
            <motion.div
              key={product.id}
              className="flex flex-col items-center gap-6"
              variants={productVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              custom={direction}
            >
              {/* Product Image with Link */}
              <Link href={product.link} className="relative group block rounded-2xl overflow-hidden shadow-[0_10px_30px_rgba(255,255,255,0.25)] hover:shadow-[0_10px_30px_rgba(208,26,26,0.6)] transition-shadow duration-300">
                <img
                  src={product.img}
                  alt={product.title}
                  // Apply dynamic height, width, and rotation
                  className={`object-cover bg-gray-200 rounded
                    ${product.imgHeight} ${product.imgWidth}
                    ${product.imgRotation}`} // Apply rotation class here
                  onError={(e) => e.target.src = '/placeholder.png'} // fallback image
                />

                {/* Side Bar Text (Not Rotated) */}
                <div className="absolute top-0 right-0 w-11 h-full bg-red-600 flex items-center justify-center transition-all duration-300 group-hover:bg-red-700">
                  <span className="text-white text-xs font-bold transform -rotate-90 whitespace-nowrap md:text-xl">
                    {product.title}
                  </span>
                </div>
              </Link>

              {/* Text Section (Not Rotated) */}
              <div className="flex-1 text-center">
                <h3 className="text-3xl font-bold mb-2" style={{ color: '#D01A1A' }}>
                  {product.title}
                </h3>
                <p className="text-white text-medium leading-relaxed break-words text-justify">
                  {product.desc}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Innovations;