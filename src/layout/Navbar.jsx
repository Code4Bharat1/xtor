// "use client";
// import React, { useState, useRef, useEffect } from "react";
// import { useRouter } from "next/navigation";
// import Link from "next/link";
// import { ChevronDown, Rotate3D } from "lucide-react";
// import { usePathname } from "next/navigation";
// import { BsDash } from "react-icons/bs";
// import { FaAngleDoubleRight } from "react-icons/fa";

// const Navbar = () => {
//   const [activeChildMenu, setActiveChildMenu] = useState([]);


//   const [isProductsOpen, setIsProductsOpen] = useState(false);
//   const [activeSubmenu, setActiveSubmenu] = useState(null);
//   const [selectedProduct, setSelectedProduct] = useState(null);
//   const router = useRouter();
//   const pathname = usePathname();
//   const serviceRef = useRef(null);
//   const productRef = useRef(null);

//   const closeProductDropdown = () => {
//   setIsProductsOpen(false);
//   setActiveSubmenu(null);
//   setSelectedProduct(null);
//   setActiveChildMenu([]);
// };

// // Function to close all service dropdowns
// const closeServiceDropdown = () => {
//   setIsServicesOpen(false);
//   setSelectedService(null);
// };

//   // Subcategories + images
//   const categories = {
//     "insitu-machinning": [
//       {
//         id: "pipe-cutting",
//         name: "Pipe Cutting Machine XTCB Series",
//         img: "product4.png",
//         path: "pipeCutting",
//         width: 500,
//         height: 400
//       },
//       {
//         id: "id-bevelling",
//         name: "ID Bevelling Machine",
//         img: "images/Insitumachinning/bevelling.png",
//         path: "bevellingmachine",
//       },
//       {
//         id: "flange-facing",
//         name: "Flange Facing Machine",
//         img: "flangefacing.png",
//         path: "flangefacing",
//       },
//     ],
//     "bolting-tools": [
//   {
//     id: "hydraulic-torque",   // 👇 must match child key
//     name: "Hydraulic Torque Wrench",
//     img: "hydraulictorque.png",
//     path: "hydraulictorque",
//   },
//   {
//     id: "bolt-tensioner",     // 👇 must match child key
//     name: "Bolt Tensioners",
//     img: "hydraulictorque.png",
//     path: "hydraulictorque",
//   },
// ],

// // ✅ children of hydraulic-torque
// "hydraulic-torque": [
//   { id: "square-drive", name: "Square Drive" ,img:"images/BoltingTools/squaredrive.png",path:"squaredrive"},
//   { id: "hex-drive", name: "Hex Drive",img:"product2.png",path:"hexdrive" }

// ],

// // ✅ children of bolt-tensioner
// "bolt-tensioner": [
//   { id: "topside-tensioner", name: "Top Side Bolt Tensioner", img:"product5.png",path: "topsidebolt" },
//   { id: "multi-stage-tensioner", name: "Multi Stage Bolt Tensioner",img:"multistagebolt.png", path: "multistagebolt" },
//   { id: "subsea-tensioner", name: "Subsea Bolt Tensioner", img:"subsea.png",path: "subseabolt" },
// ],

//     // "bolt-tensioner": [
//     //   {
//     //     id: "topside-tensioner",
//     //     name: "Top Side Bolt Tensioner",
//     //     img: null,
//     //     path: "topsidebolt",
//     //   },
//     //   {
//     //     id: "multi-stage-tensioner",
//     //     name: "Multi Stage Bolt Tensioner",
//     //     img: null,
//     //     path: "multistagebolt",
//     //   },
//     //   {
//     //     id: "subsea-tensioner",
//     //     name: "Subsea Bolt Tensioner",
//     //     img: null,
//     //     path: "subseabolt",
//     //   },
//     // ],
//     "hydraulic-powerpack": [
//       {
//         id: "xep700",
//         name: "XEP700",
//         img: "images/Power-Pack/XEP700.png",
//         path: "xep700",
//       },
//       {
//         id: "xap700",
//         name: "XAP 700",
//         img: "images/Power-Pack/XAP 700.png",
//         path: "xap700",
//       },
//       { id: "xep1500", name: "XEP1500", img: "images/Power-Pack/xep1500.png", path: "xep1500" },
//       {
//         id: "xap1500",
//         name: "XAP1500",
//         img: "images/Power-Pack/XAP1500.png",
//         path: "xap1500",
//       },
//     ],
//     accesories: [
//       {
//         id: "jacks",
//         name: "Jacks / Cylinders",
//         img: "images/accesories/jackscylinders.png",
//         path: "hydraulicjack",
//       },
//       {
//         id: "handpump",
//         name: "Handpump",
//         img: "images/accesories/handpump.png",
//         path: "handPumps",
//       },
//       {
//         id: "flange-spreaders",
//         name: "Flange Spreaders",
//         img: "images/accesories/flangespreaders.png",
//         path: "FlangeSpreaders",
//       },
//       {
//         id: "nut-splitters",
//         name: "Nut Splitters",
//         img: "nut_spilitter.png",
//         path: "hydralicnut",

//         width: 600,
//         height: 400
//       },
//     ],
//     "impact-sockets": [
//       {
//         id: "sockets",
//         name: "Sockets",
//         img: "images/impact-sockets/Sockets.png",
//         path: "socket",
//       },
//       {
//         id: "reducers",
//         name: "Reducers",
//         img: "images/impact-sockets/Reducers.png",
//         path: "reducer",
//       },
//     ],
//   };

//   const [isServicesOpen, setIsServicesOpen] = useState(false);
//   const [selectedService, setSelectedService] = useState(null);

//   const servicesList = [
//     {
//       id: "bolt-torquing",
//       name: "Bolt Torquing & Tensioning",
//       img: "boltt.jpg",
//       path: "bolttorquing",
//       width: 400,
//       height: 390,
//     },
//     {
//       id: "cold-cutting",
//       name: "Cold Cutting & Beveling",
//       img: "pipeCold.jpg",
//       path: "coldcutting",
//       width: 400,
//       height: 390,
//     },
//     {
//       id: "flange-facing",
//       name: "Flange Facing",
//       img: "facing.jpg",
//       path: "flangefacingservice",
//       width: 400,
//       height: 390,
//     },

//     {
//       id: "hot-tapping",
//       name: "Hot-Tapping & Line Stopple",
//       img: "tap.jpg",
//       path: "hottapping",
//       width: 400,
//       height: 391,
//     },
//     {
//       id: "re-tubing",
//       name: "Calibration",
//       img: "callib.avif",
//       path: "retubbing",
//       width: 400,
//       height: 300,
//     },
//     {
//       id: "water-jet",
//       name: "Water Jet Cutting",
//       img: "wjet.jpg",
//       path: "waterjet",
//       width: 400,
//       height: 400,      
//     },

//   ];

//   useEffect(() => {
//     function handleClickOutside(event) {
//       // Close Products dropdown if click is outside it
//       if (
//         productRef.current &&
//         !productRef.current.contains(event.target)
//       ) {
//         setIsProductsOpen(false);
//         setActiveSubmenu(null);
//         setSelectedProduct(null);
//       }

//       // Close Services dropdown if click is outside it
//       if (
//         serviceRef.current &&
//         !serviceRef.current.contains(event.target)
//       ) {
//         setIsServicesOpen(false);
//         setSelectedService(null);
//       }
//     }

//     document.addEventListener("mousedown", handleClickOutside);
//     return () =>
//       document.removeEventListener("mousedown", handleClickOutside);
//   }, []);

//   return (
//     <nav className="bg-black text-white lg:px-5 xl:px-25  2xl:px-10 md:py-3 w-full hidden md:flex md:justify-center">
//       <div className="">
//         <div className="flex items-center h-12 lg:gap-6 xl:gap-16 2xl:gap-20">
//           {/* Logo */}
//           <div className="flex items-center">
//             <Link href="/" className="flex items-center">
//               <img src="/xtroc.png" alt="Xtroc Logo" className="h-10 w-auto" />
//             </Link>
//           </div>

//           {/* Navigation Links */}
//           <div className="hidden md:flex flex-wrap items-center md:gap-x-3 lg:gap-x-6 xl:gap-x-8 2xl:gap-x-10 gap-y-2">
//             <Link
//               href="/aboutus"
//               className={`text-white font-bold text-base transition-colors duration-200 hover:border-b-2 hover:border-red-500 ${
//                 pathname === "/aboutus" ? "border-b-2 border-red-500" : ""
//               }`}
//             >
//               About us
//             </Link>

//             {/* Products Dropdown */}
//             <div className="relative">
//               <div className="flex items-center">
//                 <a
//                   href="/product"
//                   className={`text-white font-bold text-base transition-colors duration-200 hover:border-b-2 hover:border-red-500 ${
//                     pathname === "/product" ? "border-b-2 border-red-500" : ""
//                   }`}
//                 >
//                   Products
//                 </a>
//                 <button
//                   type="button"
//                   onClick={(e) => {
//                     e.preventDefault();
//                     setIsProductsOpen((prev) => !prev);
//                     setActiveSubmenu(null);
//                     setSelectedProduct(null);
//                   }}
//                   className="ml-1"
//                 >
//                   <ChevronDown className="h-4 w-4 text-white" />
//                 </button>
//               </div>

//               {isProductsOpen && (
//                 <div
//                   className={`absolute top-full mt-6 bg-white border border-gray-200 shadow-lg z-100 h-[550px] xl:ml-[-300] md:ml-[-200] rounded-bl-2xl rounded-br-2xl flex transition-all duration-300 ${
//                     selectedProduct
//                       ? "md:w-[800px] lg:w-[1000px] xl:w-[1100]"
//                       : activeSubmenu
//                       ? "w-[650px]"
//                       : "w-[300px]"
//                   }`}
//                   ref={productRef}
//                 >
//                   {/* Main Categories */}
//                   <div className="flex font-bold flex-col h-full w-[300px]">
//                     <button

//                       onClick={() => setActiveSubmenu("insitu-machinning")}
//                       className={`flex items-center w-full flex-1 px-4 text-base text-gray-800 text-left ${
//                         activeSubmenu === "insitu-machinning"
//                           ? "bg-[#D9D9D9]"
//                           : "hover:bg-[#D9D9D9]"
//                       }`}
//                     >
//                       <FaAngleDoubleRight className="text-red-500 text-xl  flex-shrink-0 md:mr-4" />
//                       Insitu Machinning
//                     </button>

//                     <button
//                       onClick={() => setActiveSubmenu("bolting-tools")}
//                       className={`flex items-center w-full flex-1 px-4 text-base text-gray-800 text-left ${
//                         activeSubmenu === "bolting-tools"
//                           ? "bg-[#D9D9D9]"
//                           : "hover:bg-[#D9D9D9]"
//                       }`}
//                     >
//                       <FaAngleDoubleRight className="text-red-500 text-xl  flex-shrink-0 md:mr-4" />
//                       Bolting Tools
//                     </button>

//                     {/* <button
//                       onClick={() => setActiveSubmenu("bolt-tensioner")}
//                       className={`flex items-center w-full flex-1 px-4 text-base text-gray-800 text-left ${
//                         activeSubmenu === "bolt-tensioner"
//                           ? "bg-[#D9D9D9]"
//                           : "hover:bg-[#D9D9D9]"
//                       }`}
//                     >
//                       <FaAngleDoubleRight className="text-red-500 text-xl  flex-shrink-0 md:mr-4" />
//                       Bolt Tensioner
//                     </button> */}

//                     <button
//                       onClick={() => setActiveSubmenu("hydraulic-powerpack")}
//                       className={`flex items-center w-full flex-1 px-4 text-base text-gray-800 text-left ${
//                         activeSubmenu === "hydraulic-powerpack"
//                           ? "bg-[#D9D9D9]"
//                           : "hover:bg-[#D9D9D9]"
//                       }`}
//                     >
//                       <FaAngleDoubleRight className="text-red-500 text-xl  flex-shrink-0 md:mr-4" />
//                       Hydraulic Torquing Power Pack
//                     </button>

//                     <button
//                       onClick={() => setActiveSubmenu("accesories")}
//                       className={`flex items-center w-full flex-1 px-4 text-base text-gray-800 text-left ${
//                         activeSubmenu === "accesories"
//                           ? "bg-[#D9D9D9]"
//                           : "hover:bg-[#D9D9D9]"
//                       }`}
//                     >
//                       <FaAngleDoubleRight className="text-red-500 text-xl  flex-shrink-0 md:mr-4" />
//                       Accesories
//                     </button>

//                     <button
//                       onClick={() => setActiveSubmenu("impact-sockets")}
//                       className={`flex items-center w-full flex-1 px-4 text-base text-gray-800 text-left ${
//                         activeSubmenu === "impact-sockets"
//                           ? "bg-[#D9D9D9] rounded-bl-2xl"
//                           : "hover:bg-[#D9D9D9]"
//                       }`}
//                     >
//                       <FaAngleDoubleRight className="text-red-500 text-xl  flex-shrink-0 md:mr-4" />
//                       Sockets & Reducers
//                     </button>
//                   </div>

//                   {/* Subcategories */}
//                {/* Subcategories */}
// {activeSubmenu && (
//   <div className="w-[350px] gap-10 text-gray-800 h-full font-bold flex flex-col border-l border-gray-200 bg-gray-50">
//     {categories[activeSubmenu].map((item) => (
//       <div key={item.id} className="flex flex-col">
//         <button
//   onClick={() => {
//     if (categories[item.id]) {
//       setActiveChildMenu((prev) =>
//         prev.includes(item.id)
//           ? prev.filter((id) => id !== item.id)
//           : [...prev, item.id]
//       );
//       setSelectedProduct(null);
//     } else {
//       setSelectedProduct(item);
//     }
//   }}
//   className="flex items-center gap-2 text-left py-2 px-4 hover:bg-gray-100"
// >
//   <BsDash className="text-red-500 w-5 h-5" />
//   <span>{item.name}</span>
// </button>


//         {/* Child Submenu */}
//        {activeChildMenu.includes(item.id) && categories[item.id] && (

//           <div className="ml-8  flex flex-col text-gray-500 text-md gap-10 mt-10">
//             {categories[item.id].map((child) => (
//               <button
//                 key={child.id}
//                 onClick={() => setSelectedProduct(child)}
//                 className={`text-left py-1 px-2 ${
//                   selectedProduct?.id === child.id
//                     ? "text-red-500 font-semibold"
//                     : "hover:text-red-500"
//                 }`}
//               >
//                 {child.name}
//               </button>
//             ))}
//           </div>
//         )}
//       </div>
//     ))}
//   </div>
// )}


//                   {/* Image Preview */}
//                   {selectedProduct && (
//                     <div className="w-[600px] flex items-center justify-center h-full border-l border-gray-200 rounded-br-2xl bg-white">
//                       <div className="px-2">
//                         {selectedProduct.img ? (
//                           <img
//                             src={selectedProduct.img}
//                             alt={selectedProduct.name}
//                             className="object-cover rounded-md cursor-pointer hover:opacity-90 transition"
//                             style={{
//                               width: `${selectedProduct.width || 400}px`,
//                               height: `${selectedProduct.height || 400}px`,
//                             }}
//                             onClick={() => {
//   closeProductDropdown();
//   router.push(selectedProduct.path);
// }}
//                           />
//                         ) : (
//                           <div
//                             className="flex items-center justify-center text-gray-500"
//                             style={{
//                               width: `${selectedProduct.width || 400}px`,
//                               height: `${selectedProduct.height || 300}px`,
//                             }}
//                             onClick={() => {
//   closeProductDropdown();
//   router.push(selectedProduct.path);
// }}
//                           >
//                             Image not provided
//                           </div>
//                         )}
//                         <div
//                           className="text-red-500 font-bold text-base text-center capitalize mt-2 cursor-pointer"
//                           onClick={() => router.push(selectedProduct.path)}
//                         >
//                           {selectedProduct.name}
//                         </div>
//                       </div>
//                     </div>
//                   )}
//                 </div>
//               )}
//             </div>

//             {/* Services Dropdown */}
//             <div className="relative">
//               <button
//                 type="button"
//                 onClick={() => {
//                   setIsServicesOpen((prev) => !prev);
//                   setSelectedService(null);
//                 }}
//                 className="flex items-center text-white font-bold text-base transition-colors duration-200 hover:border-b-2 hover:border-red-500"
//               >
//                 Services
//                 <ChevronDown className="h-4 w-4 text-white ml-1" />
//               </button>

//               {isServicesOpen && (
//                 <div
//                   ref={serviceRef}
//                   className={`absolute top-full mt-6 bg-white border border-gray-200 shadow-lg z-100 h-[500px] rounded-bl-2xl rounded-br-2xl flex ml-[-300] transition-all duration-300`}
//                   style={{
//                     width: selectedService ? `${selectedService.width + 400}px` : "300px"
//                   }}
//                 >
//                   {/* Service list */}
//                   <div className="flex flex-col h-full w-[300px] font-bold">
//                     {servicesList.map((svc) => (
//                       <button
//                         key={svc.id}
//                         onClick={() => setSelectedService(svc)}
//                         className={`flex items-center w-full flex-1 px-4 text-base text-gray-800 text-left ${
//                           selectedService?.id === svc.id
//                             ? "bg-[#D9D9D9] rounded-bl-xl"
//                             : "hover:bg-[#D9D9D9] rounded-bl-xl"
//                         }`}
//                       >
//                         <BsDash className="w-7 text-red-500 h-10" />
//                         {svc.name}
//                       </button>
//                     ))}
//                   </div>

//                   {/* Image preview appears only when clicked */}
//                   {selectedService && (
//                     <div className="w-[500px] flex flex-col items-center justify-center h-full border-l border-gray-200 bg-white rounded-br-2xl">
//                       {/* Image Section - Fixed container */}
//                       <div className="flex-1 flex items-center justify-center px-4">
//                         {selectedService.img ? (
//                           <img
//                             src={selectedService.img}
//                             alt={selectedService.name}
//                             className="object-contain cursor-pointer hover:opacity-90 transition rounded-md"
//                             style={{
//                               width: `${selectedService.width}px`,
//                               height: `${selectedService.height}px`,
//                             }}
//                             onClick={() => {
//   closeServiceDropdown();
//   router.push(selectedService.path);
// }}
//                           />
//                         ) : (
//                           <div
//                             className="flex items-center justify-center text-gray-500 cursor-pointer border border-gray-300 rounded-md"
//                             style={{
//                               width: `${selectedService.width}px`,
//                               height: `${selectedService.height}px`,
//                             }}
//                             onClick={() => {
//   closeServiceDropdown();
//   router.push(selectedService.path);
// }}
//                           >
//                             Image not provided
//                           </div>
//                         )}
//                       </div>

//                       {/* Text Section - Fixed height */}
//                       <div className="h-16 flex items-center justify-center px-4 w-full">
//                         <div
//                           className="text-red-500 font-bold text-lg text-center capitalize cursor-pointer hover:text-red-600 transition"
//                           onClick={() => router.push(selectedService.path)}
//                         >
//                           {selectedService.name}
//                         </div>
//                       </div>
//                     </div>
//                   )}
//                 </div>
//               )}
//             </div>

//             <Link
//               href="/distributor"
//               className={`text-white hover:border-b-2 border-red-500 transition-colors duration-200 text-[12px] font-bold ${
//                 pathname === "/distributor" ? "border-b-2 border-red-500" : ""
//               }`}
//             >
//               Distributor
//             </Link>
//             <Link
//               href="/industry"
//               className={`text-white hover:border-b-2 border-red-500 transition-colors duration-200 text-[12px] font-bold ${
//                 pathname === "/industry" ? "border-b-2 border-red-500" : ""
//               }`}
//             >
//               Industries
//             </Link>
//             <Link
//               href="/contact"
//               className={`text-white hover:border-b-2 border-red-500 transition-colors duration-200 text-[12px] font-bold ${
//                 pathname === "/contact" ? "border-b-2 border-red-500" : ""
//               }`}
//             >
//               Contact us
//             </Link>
//             <Link
//               href="/joinus"
//               className={`text-white hover:border-b-2 border-red-500 transition-colors duration-200 text-[12px] font-bold ${
//                 pathname === "/joinus" ? "border-b-2 border-red-500" : ""
//               }`}
//             >
//               Join us
//             </Link>
//             <Link
//               href="/download"
//               className={`hidden lg:block text-white hover:border-b-2 border-red-500 transition-colors duration-200 text-[12px] font-bold ${
//                 pathname === "/download" ? "border-b-2 border-red-500" : ""
//               }`}
//             >
//               Downloads
//             </Link>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

'use client'
import React, { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { usePathname } from "next/navigation";
import { BsDash } from "react-icons/bs";
import { FaAngleDoubleRight } from "react-icons/fa";

const Navbar = () => {
  const [activeChildMenu, setActiveChildMenu] = useState([]);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  const router = useRouter();
  const pathname = usePathname();
  const serviceRef = useRef(null);
  const productRef = useRef(null);

  const closeProductDropdown = () => {
    setIsProductsOpen(false);
    setActiveSubmenu(null);
    setSelectedProduct(null);
    setActiveChildMenu([]);
  };

  const closeServiceDropdown = () => {
    setIsServicesOpen(false);
    setSelectedService(null);
  };

  // Subcategories + images (Ensure paths are correct)
  const categories = {
    "insitu-machinning": [
      { id: "pipe-cutting", name: "Pipe Cutting Machine XTCB Series", img: "/product4.png", path: "/pipeCutting", width: 500, height: 400 },
      { id: "id-bevelling", name: "ID Bevelling Machine", img: "/images/Insitumachinning/bevelling.png", path: "/bevellingmachine" },
      { id: "flange-facing", name: "Flange Facing Machine", img: "/flangefacing.png", path: "/flangefacing" },
    ],
    "bolting-tools": [
      { id: "hydraulic-torque", name: "Hydraulic Torque Wrench", img: "/hydraulictorque.png", path: "/hydraulictorque" },
      { id: "bolt-tensioner", name: "Bolt Tensioners", img: "/product5.png", path: "/hydraulicbolttensioners" },
    ],
    "hydraulic-torque": [
      { id: "square-drive", name: "Square Drive", img: "/images/BoltingTools/squaredrive.png", path: "/squaredrive", width: 420, height: 380 },
      { id: "hex-drive", name: "Hex Drive", img: "/product2.png", path: "/hexdrive", width: 400, height: 400 }
    ],
    "bolt-tensioner": [
      { id: "topside-tensioner", name: "Top Side Bolt Tensioner", img: "/product5.png", path: "/topsidebolt", width: 350, height: 400 },
      { id: "spring-return-tensioner", name: "Spring Return Bolt Tensioner", img: "/Springreturnbolt.png", path: "/springreturnbolt", width: 350, height: 400 },
      { id: "multi-stage-tensioner", name: "Multi Stage Bolt Tensioner", img: "/multistagebolt.png", path: "/multistagebolt", width: 400, height: 350 },
      { id: "subsea-tensioner", name: "Subsea Bolt Tensioner", img: "/subsea.png", path: "/subseabolt", width: 380, height: 400 },
    ],
    "hydraulic-powerpack": [
      { id: "xep700", name: "XEP700", img: "/images/Power-Pack/XEP700.png", path: "/xep700" },
      { id: "xap700", name: "XAP 700", img: "/images/Power-Pack/XAP 700.png", path: "/xap700" },
      { id: "xep1500", name: "XEP1500", img: "/images/Power-Pack/xep1500.png", path: "/xep1500" },
      { id: "xap1500", name: "XAP1500", img: "/images/Power-Pack/XAP1500.png", path: "/xap1500" },
    ],
    accesories: [
      { id: "jacks", name: "Jacks / Cylinders", img: "/images/accesories/jackscylinders.png", path: "/hydraulicjack" },
      { id: "handpump", name: "Handpump", img: "/images/accesories/handpump.png", path: "/handPumps" },
      { id: "flange-spreaders", name: "Flange Spreaders", img: "/images/accesories/flangespreaders.png", path: "/FlangeSpreaders" },
      { id: "nut-splitters", name: "Nut Splitters", img: "/nut_spilitter.png", path: "/hydralicnut", width: 400, height: 300 },
    ],
    "impact-sockets": [
      { id: "sockets", name: "Sockets", img: "/images/impact-sockets/Sockets.png", path: "/socket" },
      { id: "reducers", name: "Reducers", img: "/images/impact-sockets/Reducers.png", path: "/reducer" },
    ],
  };

  const servicesList = [
    { id: "bolt-torquing", name: "Bolt Torquing & Tensioning", img: "/boltt.jpeg", path: "/bolttorquing", width: 400, height: 390, },
    { id: "cold-cutting", name: "Cold Cutting & Beveling", img: "/pipeCold.jpeg", path: "/coldcutting", width: 400, height: 390, },
    { id: "flange-facing", name: "Flange Facing", img: "/facing.jpeg", path: "/flangefacingservice", width: 400, height: 390, },
    { id: "hot-tapping", name: "Hot-Tapping & Line Stopple", img: "/tap.jpg", path: "/hottapping", width: 400, height: 391, },
    { id: "re-tubing", name: "Calibration", img: "/callib.avif", path: "/retubbing", width: 400, height: 300, },
    { id: "water-jet", name: "Water Jet Cutting", img: "/wjet.jpg", path: "/waterjet", width: 400, height: 400, },
  ];

  useEffect(() => {
    function handleClickOutside(event) {
      if (productRef.current && !productRef.current.contains(event.target)) {
        closeProductDropdown();
      }
      if (serviceRef.current && !serviceRef.current.contains(event.target)) {
        closeServiceDropdown();
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="bg-black text-white w-11/12 mx-auto hidden md:flex md:py-3 relative z-[100]">
      <div className="max-w-[1100px] mx-auto w-full flex items-center justify-between h-12 px-4">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <img src="/xtroc.png" alt="Xtroc Logo" className="h-10 w-auto" />
          </Link>
        </div>

        {/* Navigation Links go here directly as siblings of Logo to evenly space them */}
        <Link
          href="/aboutus"
          className={`text-white font-medium text-base transition-colors duration-200 hover:border-b-2 hover:border-red-500 ${pathname === "/aboutus" ? "border-b-2 border-red-500" : ""}`}
        >
          About us
        </Link>

        {/* Products Dropdown */}
        <div className="relative">
          <div className="flex items-center">
            <a
              href="/product"
              className={`text-white font-medium text-base transition-colors duration-200 hover:border-b-2 hover:border-red-500 ${pathname === "/product" ? "border-b-2 border-red-500" : ""}`}
            >
              Products
            </a>
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                setIsProductsOpen((prev) => !prev);
                setActiveSubmenu(null);
                setSelectedProduct(null);
                setActiveChildMenu([]);
              }}
              className="ml-1"
            >
              <ChevronDown className="h-4 w-4 text-white" />
            </button>
          </div>

          {isProductsOpen && (
            <div
              className={`absolute top-full mt-4 bg-white border border-gray-200 shadow-2xl z-[100] h-auto rounded-2xl flex overflow-hidden transition-all duration-500 ease-in-out origin-top left-1/2 ${selectedProduct
                ? "w-[90vw] max-w-[1050px] -translate-x-[300px]"
                : activeChildMenu.length > 0 || activeSubmenu
                  ? "w-[600px] -translate-x-1/2"
                  : "w-[280px] -translate-x-1/2"
                }`}
              ref={productRef}
            >
              {/* Main Categories */}
              <div className="flex font-bold flex-col w-[280px] flex-shrink-0 bg-white">
                <button onClick={() => { setActiveSubmenu("insitu-machinning"); setActiveChildMenu([]); setSelectedProduct(null); }} className={`flex items-center w-full py-4 px-4 text-sm lg:text-base text-gray-800 text-left ${activeSubmenu === "insitu-machinning" ? "bg-gray-200" : "hover:bg-gray-100"}`}><FaAngleDoubleRight className="text-red-500 text-xl flex-shrink-0 mr-3 lg:mr-4" />Insitu Machining</button>
                <button onClick={() => { setActiveSubmenu("bolting-tools"); setActiveChildMenu([]); setSelectedProduct(null); }} className={`flex items-center w-full py-4 px-4 text-sm lg:text-base text-gray-800 text-left ${activeSubmenu === "bolting-tools" ? "bg-gray-200" : "hover:bg-gray-100"}`}><FaAngleDoubleRight className="text-red-500 text-xl flex-shrink-0 mr-3 lg:mr-4" />Bolting Tools</button>
                <button onClick={() => { setActiveSubmenu("hydraulic-powerpack"); setActiveChildMenu([]); setSelectedProduct(null); }} className={`flex items-center w-full py-4 px-4 text-sm lg:text-base text-gray-800 text-left ${activeSubmenu === "hydraulic-powerpack" ? "bg-gray-200" : "hover:bg-gray-100"}`}><FaAngleDoubleRight className="text-red-500 text-xl flex-shrink-0 mr-3 lg:mr-4" />Hydraulic Torquing Power Pack</button>
                <button onClick={() => { setActiveSubmenu("accesories"); setActiveChildMenu([]); setSelectedProduct(null); }} className={`flex items-center w-full py-4 px-4 text-sm lg:text-base text-gray-800 text-left ${activeSubmenu === "accesories" ? "bg-gray-200" : "hover:bg-gray-100"}`}><FaAngleDoubleRight className="text-red-500 text-xl flex-shrink-0 mr-3 lg:mr-4" />Accessories</button>
                <button onClick={() => { setActiveSubmenu("impact-sockets"); setActiveChildMenu([]); setSelectedProduct(null); }} className={`flex items-center w-full py-4 px-4 text-sm lg:text-base text-gray-800 text-left ${activeSubmenu === "impact-sockets" ? "bg-gray-200" : "hover:bg-gray-100"}`}><FaAngleDoubleRight className="text-red-500 text-xl flex-shrink-0 mr-3 lg:mr-4" />Sockets & Reducers</button>
              </div>

              {/* Subcategories */}
              {activeSubmenu && (
                <div className="w-[320px] flex-shrink-0 text-gray-800 h-full font-bold flex flex-col border-l border-gray-200 bg-gray-50 overflow-y-auto">
                  {categories[activeSubmenu].map((item) => (
                    <div key={item.id} className="flex flex-col border-b border-gray-100 last:border-0">
                      <button
                        onClick={() => {
                          if (categories[item.id]) {
                            setActiveChildMenu((prev) => prev.includes(item.id) ? prev.filter((id) => id !== item.id) : [...prev, item.id]);
                          } else {
                            setSelectedProduct(item);
                            setActiveChildMenu([]);
                          }
                        }}
                        className={`flex items-center gap-2 text-left py-4 px-4 hover:bg-gray-100 text-sm lg:text-base transition-colors ${selectedProduct?.id === item.id ? "text-red-600 font-bold bg-white" : ""} ${activeChildMenu.includes(item.id) ? "text-red-600 bg-white" : ""}`}
                      >
                        <BsDash className="text-red-500 w-5 h-5 flex-shrink-0" />
                        <span>{item.name}</span>
                      </button>

                      {/* Child Submenu */}
                      {activeChildMenu.includes(item.id) && categories[item.id] && (
                        <div className="flex flex-col text-gray-600 font-semibold bg-white pb-2">
                          {categories[item.id].map((child) => (
                            <button
                              key={child.id}
                              onClick={() => setSelectedProduct(child)}
                              className={`text-left py-2.5 px-10 text-sm lg:text-base transition-colors relative before:content-[''] before:absolute before:left-6 before:top-1/2 before:-translate-y-1/2 before:w-1.5 before:h-1.5 before:rounded-full ${selectedProduct?.id === child.id ? "text-red-600 font-bold before:bg-red-600" : "hover:text-red-500 before:bg-gray-300 hover:before:bg-red-400"}`}
                            >
                              {child.name}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}

              {/* Image Preview & Details */}
              {selectedProduct && (
                <div className="flex-1 min-w-[250px] flex flex-col items-center justify-center h-full border-l border-gray-200 bg-white p-6 relative group">
                  <div className="flex-1 w-full flex items-center justify-center p-4">
                    {selectedProduct.img ? (
                      <img
                        src={selectedProduct.img.startsWith('/') ? selectedProduct.img : `/${selectedProduct.img}`}
                        alt={selectedProduct.name}
                        className="object-contain w-full h-full max-h-[320px] rounded-md cursor-pointer group-hover:scale-105 transition-transform duration-500 ease-out"
                        onClick={() => { closeProductDropdown(); if (selectedProduct?.path) router.push(selectedProduct.path.startsWith('/') ? selectedProduct.path : `/${selectedProduct.path}`); }}
                      />
                    ) : (
                      <div
                        className="flex items-center justify-center text-gray-500 cursor-pointer border-2 border-dashed border-gray-300 rounded-xl bg-gray-50 w-full h-full max-h-[320px] hover:bg-gray-100 transition-colors"
                        onClick={() => { closeProductDropdown(); if (selectedProduct?.path) router.push(selectedProduct.path.startsWith('/') ? selectedProduct.path : `/${selectedProduct.path}`); }}
                      >
                        <span className="font-medium">Image not provided</span>
                      </div>
                    )}
                  </div>
                  <div className="mt-2 text-center w-full px-4 flex flex-col items-center">
                    <h3 className="text-lg lg:text-xl font-bold text-gray-900 mb-4 line-clamp-2">{selectedProduct.name}</h3>
                    <button
                      type="button"
                      onClick={() => { closeProductDropdown(); if (selectedProduct?.path) router.push(selectedProduct.path.startsWith('/') ? selectedProduct.path : `/${selectedProduct.path}`); }}
                      className="px-6 py-2.5 bg-red-600 text-white text-sm font-semibold rounded-full hover:bg-red-700 hover:shadow-lg hover:shadow-red-600/30 transition-all duration-300 w-fit cursor-pointer"
                    >
                      View Details
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}

        </div>

        {/* Services Dropdown */}
        <div className="relative">
          <div className="flex items-center">
            <a
              href="/services"
              className={`text-white font-medium text-base transition-colors duration-200 hover:border-b-2 hover:border-red-500 ${pathname === "/services" ? "border-b-2 border-red-500" : ""}`}
            >
              Services
            </a>
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                setIsServicesOpen((prev) => !prev);
                setSelectedService(null);
              }}
              className="ml-1 cursor-pointer"
            >
              <ChevronDown className="h-4 w-4 text-white" />
            </button>
          </div>

          {isServicesOpen && (
            <div
              ref={serviceRef}
              className={`absolute top-full mt-4 bg-white border border-gray-200 shadow-2xl z-[100] h-auto rounded-2xl flex overflow-hidden transition-all duration-500 ease-in-out origin-top left-1/2 -translate-x-1/2 ${selectedService ? 'w-[750px]' : 'w-[300px]'
                }`}
            >
              {/* Service list */}
              <div className="flex flex-col w-[300px] font-bold overflow-y-auto bg-white flex-shrink-0">
                {servicesList.map((svc, index) => (
                  <button
                    key={svc.id}
                    type="button"
                    onClick={() => setSelectedService(svc)}
                    className={`flex items-center w-full flex-shrink-0 px-4 py-4 text-sm lg:text-base text-gray-800 text-left transition-colors border-b border-gray-100 last:border-0 cursor-pointer ${selectedService?.id === svc.id ? "bg-gray-50 text-red-600 font-bold" : "hover:bg-gray-100"}`}
                  >
                    <BsDash className="w-6 text-red-500 h-6 flex-shrink-0 mr-2" /> {svc.name}
                  </button>
                ))}
              </div>

              {/* Image preview & Details */}
              {selectedService && (
                <div className="flex-1 flex flex-col items-center justify-center h-full border-l border-gray-200 bg-white p-6 relative group">
                  <div className="flex-1 w-full flex items-center justify-center p-4">
                    {selectedService.img ? (
                      <img
                        src={selectedService.img.startsWith('/') ? selectedService.img : `/${selectedService.img}`}
                        alt={selectedService.name}
                        className="object-contain w-full h-full max-h-[280px] rounded-md cursor-pointer group-hover:scale-105 transition-transform duration-500 ease-out"
                        onClick={() => { closeServiceDropdown(); if (selectedService?.path) router.push(selectedService.path.startsWith('/') ? selectedService.path : `/${selectedService.path}`); }}
                      />
                    ) : (
                      <div
                        className="flex items-center justify-center text-gray-500 cursor-pointer border-2 border-dashed border-gray-300 rounded-xl bg-gray-50 w-full h-full max-h-[280px] hover:bg-gray-100 transition-colors"
                        onClick={() => { closeServiceDropdown(); if (selectedService?.path) router.push(selectedService.path.startsWith('/') ? selectedService.path : `/${selectedService.path}`); }}
                      >
                        <span className="font-medium">Image not provided</span>
                      </div>
                    )}
                  </div>
                  <div className="mt-4 text-center w-full px-4 flex flex-col items-center">
                    <h3 className="text-lg lg:text-xl font-bold text-gray-900 mb-4 line-clamp-2">{selectedService.name}</h3>
                    <button
                      type="button"
                      onClick={() => { closeServiceDropdown(); if (selectedService?.path) router.push(selectedService.path.startsWith('/') ? selectedService.path : `/${selectedService.path}`); }}
                      className="px-6 py-2.5 bg-red-600 text-white text-sm font-semibold rounded-full hover:bg-red-700 hover:shadow-lg hover:shadow-red-600/30 transition-all duration-300 w-fit cursor-pointer"
                    >
                      View Details
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        <Link href="/distributor" className={`text-white hover:border-b-2 border-red-500 transition-colors duration-200 text-base font-medium ${pathname === "/distributor" ? "border-b-2 border-red-500" : ""}`}>Distributor</Link>
        <Link href="/industry" className={`text-white hover:border-b-2 border-red-500 transition-colors duration-200 text-base font-medium ${pathname === "/industry" ? "border-b-2 border-red-500" : ""}`}>Industries</Link>
        <Link href="/contact" className={`text-white hover:border-b-2 border-red-500 transition-colors duration-200 text-base font-medium ${pathname === "/contact" ? "border-b-2 border-red-500" : ""}`}>Contact us</Link>
        <Link href="/joinus" className={`text-white hover:border-b-2 border-red-500 transition-colors duration-200 text-base font-medium ${pathname === "/joinus" ? "border-b-2 border-red-500" : ""}`}>Join us</Link>
        <Link href="/testimonials" className={`text-white hover:border-b-2 border-red-500 transition-colors duration-200 text-base font-medium ${pathname === "/testimonials" ? "border-b-2 border-red-500" : ""}`}>Testimonials</Link>
        <Link href="/download" className={`hidden lg:block text-white hover:border-b-2 border-red-500 transition-colors duration-200 text-base font-medium ${pathname === "/download" ? "border-b-2 border-red-500" : ""}`}>Downloads</Link>
      </div>
    </nav>
  );
};

export default Navbar;