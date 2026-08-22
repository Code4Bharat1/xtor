// "use client";
// import React, { useState } from "react";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import { ChevronDown, ChevronUp, Menu, X } from "lucide-react";

// const categories = {
//   "Insitu-Machinning": [
//     {
//       id: "pipe-cutting",
//       name: "Pipe Cutting Machine XTCB Series",
//       img: "product4.png",
//       path: "pipeCutting",
//     },
//     {
//       id: "id-bevelling",
//       name: "ID Bevelling Machine",
//       img: "images/Insitumachinning/bevelling.png",
//       path: "bevellingmachine",
//     },
//     {
//       id: "flange-facing",
//       name: "Flange Facing Machine",
//       img: "facing.jpg",
//       path: "flangefacing",
//     },
//   ],
//   "Bolting-Tools": [
//     {
//       id: "hydraulic-torque",
//       name: "Hydraulic Torque Wrench",
//       img: null,
//       path: "hydraulictorque",
//       subItems: [
//         {
//           id: "square-drive",
//           name: "Square Drive - XTS Series",
//           img: "images/BoltingTools/squaredrive.png",
//           path: "squaredrive",
//         },
//         {
//           id: "hex-drive",
//           name: "Hex Drive - XTH Series",
//           img: "images/BoltingTools/hexdrive.png",
//           path: "hexdrive",
//         },
//       ]
//     },
//     {
//       id: "bolt-tensioner",
//       name: "Bolt Tensioner",
//       img: null,
//       path: "bolttensioner",
//       subItems: [
//         {
//           id: "topside-tensioner",
//           name: "Top Side Bolt Tensioner",
//           img: "product2.png",
//           path: "topsidebolt",
//         },
//         {
//           id: "multi-stage-tensioner",
//           name: "Multi Stage Bolt Tensioner",
//           img: "multistagebolt.png",
//           path: "multistagebolt",
//         },
//         {
//           id: "subsea-tensioner",
//           name: "Subsea Bolt Tensioner",
//           img: "subsea.jpg",
//           path: "subseabolt",
//         },
//       ]
//     },
//   ],
//   "Hydraulic-Powerpack": [
//     {
//       id: "xep700",
//       name: "XEP700",
//       img: "images/Power-Pack/XEP700.png",
//       path: "xep700",
//     },
//     {
//       id: "xap700",
//       name: "XAP 700",
//       img: "images/Power-Pack/XAP 700.png",
//       path: "xap700",
//     },
//     { id: "xep1500", name: "XEP1500", img: "images/Power-Pack/XAP1500.png", path: "xep1500" },
//     {
//       id: "xap1500",
//       name: "XAP1500",
//       img: "images/Power-Pack/XAP1500.png",
//       path: "xap1500",
//     },
//   ],
//   Accesories: [
//     {
//       id: "jacks",
//       name: "Jacks / Cylinders",
//       img: "images/accesories/jackscylinders.png",
//       path: "hydraulicjack",
//     },
//     {
//       id: "handpump",
//       name: "Handpump",
//       img: "images/accesories/handpump.png",
//       path: "handPumps",
//     },
//     {
//       id: "flange-spreaders",
//       name: "Flange Spreaders",
//       img: "images/accesories/flangespreaders.png",
//       path: "FlangeSpreaders",
//     },
//   ],
//   "Impact-Sockets": [
//     {
//       id: "nut-splitters",
//       name: "Nut Splitters",
//       img: "nut_spilitter.png",
//       path: "nutsplitter",
//     },
//     {
//       id: "sockets",
//       name: "Sockets",
//       img: "images/impact-sockets/Sockets.png",
//       path: "socket",
//     },
//     {
//       id: "reducers",
//       name: "Reducers",
//       img: "images/impact-sockets/Reducers.png",
//       path: "reducer",
//     },
//   ],
// };

// // NEW services list
// const servicesList = [
//   {
//     id: "bolt-torquing",
//     name: "Bolt Torquing & Tensioning",
//     img: "boltt.jpg",
//     path: "bolttorquing",
//     width: 400,
//     height: 390,
//   },
//   {
//     id: "cold-cutting",
//     name: "Cold Cutting & Beveling",
//     img: "pipeCold.jpg",
//     path: "coldcutting",
//     width: 400,
//     height: 390,
//   },
//   {
//     id: "flange-facing",
//     name: "Flange Facing",
//     img: "facing.jpg",
//     path: "flangefacingservice",
//     width: 400,
//     height: 390,
//   },
//   {
//     id: "hot-tapping",
//     name: "Hot-Tapping & Line Stopple",
//     img: "tap.jpg",
//     path: "hottapping",
//     width: 400,
//     height: 390,
//   },
//   {
//     id: "re-tubing",
//     name: "Re-Tubing of Boilers & Heat Exchangers",
//     img: "callib.avif",
//     path: "retubbing",
//     width: 400,
//     height: 300,
//   },
//   {
//     id: "water-jet",
//     name: "Water Jet Cutting",
//     img: "wjet.jpg",
//     path: "waterjet",
//     width: 400,
//     height: 400,
//   },
// ];

// const MobileNavbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [activeCategory, setActiveCategory] = useState(null);
//   const [activeSub, setActiveSub] = useState(null);
//   const [activeSubItem, setActiveSubItem] = useState(null);
//   const [activeService, setActiveService] = useState(false);
//   const pathname = usePathname();

//   return (
//     <nav className="md:hidden bg-black text-white w-full p-4">
//       {/* Header */}
//       <div className="flex justify-between items-center">
//         <Link href="/">
//           <img src="/xtroc.png" alt="Xtroc Logo" className="h-8" />
//         </Link>
//         <button onClick={() => setIsOpen(!isOpen)}>
//           {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
//         </button>
//       </div>

//       {/* Mobile Menu */}
//       {isOpen && (
//         <div className="mt-4 space-y-1">
//           <Link
//             href="/aboutus"
//             className={`block py-1 ${
//               pathname === "/aboutus" ? "text-red-500 font-bold" : ""
//             }`}
//           >
//             About Us
//           </Link>

//           {/* Products Dropdown */}
//           <div>
//             <div className="flex justify-between items-center w-full">
//               <Link href="/product" className="py-2 font-semibold">
//                 Products
//               </Link>
//               <button
//                 onClick={() =>
//                   setActiveCategory(
//                     activeCategory === "products" ? null : "products"
//                   )
//                 }
//               >
//                 {activeCategory === "products" ? (
//                   <ChevronUp className="h-4 w-4" />
//                 ) : (
//                   <ChevronDown className="h-4 w-4" />
//                 )}
//               </button>
//             </div>

//             {activeCategory === "products" && (
//               <div className="ml-4 mt-2 space-y-2">
//                 {Object.keys(categories).map((cat) => (
//                   <div key={cat}>
//                     <button
//                       onClick={() =>
//                         setActiveSub(activeSub === cat ? null : cat)
//                       }
//                       className="flex justify-between w-full text-left py-2"
//                     >
//                       {cat.replace("-", " ")}
//                       {activeSub === cat ? (
//                         <ChevronUp className="h-4 w-4" />
//                       ) : (
//                         <ChevronDown className="h-4 w-4" />
//                       )}
//                     </button>

//                     {activeSub === cat && (
//                       <div className="ml-4 mt-1 space-y-2">
//                         {categories[cat].map((item) => (
//                           <div key={item.id}>
//                             {/* Main item */}
//                             <div className="flex items-center justify-between">
//                               <Link
//                                 href={`/${item.path}`}
//                                 className="flex items-center gap-2 py-1 flex-1"
//                               >
//                                 {item.img && (
//                                   <img
//                                     src={`/${item.img}`}
//                                     alt={item.name}
//                                     className="w-10 h-10 object-contain"
//                                   />
//                                 )}
//                                 <span>{item.name}</span>
//                               </Link>

//                               {/* Sub-item dropdown button */}
//                               {item.subItems && (
//                                 <button
//                                   onClick={() =>
//                                     setActiveSubItem(
//                                       activeSubItem === item.id ? null : item.id
//                                     )
//                                   }
//                                   className="ml-2"
//                                 >
//                                   {activeSubItem === item.id ? (
//                                     <ChevronUp className="h-4 w-4" />
//                                   ) : (
//                                     <ChevronDown className="h-4 w-4" />
//                                   )}
//                                 </button>
//                               )}
//                             </div>

//                             {/* Sub-items */}
//                             {item.subItems && activeSubItem === item.id && (
//                               <div className="ml-6 mt-1 space-y-1">
//                                 {item.subItems.map((subItem) => (
//                                   <Link
//                                     key={subItem.id}
//                                     href={`/${subItem.path}`}
//                                     className="flex items-center gap-2 py-1"
//                                   >
//                                     {subItem.img && (
//                                       <img
//                                         src={`/${subItem.img}`}
//                                         alt={subItem.name}
//                                         className="w-8 h-8 object-contain"
//                                       />
//                                     )}
//                                     <span className="text-sm">{subItem.name}</span>
//                                   </Link>
//                                 ))}
//                               </div>
//                             )}
//                           </div>
//                         ))}
//                       </div>
//                     )}
//                   </div>
//                 ))}
//               </div>
//             )}
//           </div>

//           {/* Services Dropdown */}
//           <div>
//             <div className="flex justify-between items-center w-full">
//               <Link href="/services" className="py-2 font-semibold">
//                 Services
//               </Link>

//               {/* 🔽 Dropdown icon button */}
//               <button
//                 onClick={() => setActiveService(activeService ? null : true)}
//               >
//                 {activeService ? (
//                   <ChevronUp className="h-4 w-4" /> // ▲ when open
//                 ) : (
//                   <ChevronDown className="h-4 w-4" /> // ▼ when closed
//                 )}
//               </button>
//             </div>

//             {activeService && (
//               <div className="ml-4 mt-2 space-y-2">
//                 {servicesList.map((svc) => (
//                   <Link
//                     key={svc.id}
//                     href={`/${svc.path}`} // add leading slash
//                     className="flex items-center gap-3 py-2"
//                   >
//                     {svc.img && (
//                       <img
//                         src={`/${svc.img}`}
//                         alt={svc.name}
//                         style={{
//                           width: `${svc.width / 8}px`,
//                           height: `${svc.height / 8}px`,
//                         }}
//                         className="object-contain rounded"
//                       />
//                     )}
//                     <span>{svc.name}</span>
//                   </Link>
//                 ))}
//               </div>
//             )}
//           </div>

//           {/* Other Links */}
//           <Link
//             href="/distributor"
//             className={`block py-1 ${
//               pathname === "/distributor" ? "text-red-500 font-bold" : ""
//             }`}
//           >
//             Distributor
//           </Link>
//           <Link
//             href="/industry"
//             className={`block py-1 ${
//               pathname === "/industry" ? "text-red-500 font-bold" : ""
//             }`}
//           >
//             Industries
//           </Link>
//           <Link
//             href="/contact"
//             className={`block py-1 ${
//               pathname === "/contact" ? "text-red-500 font-bold" : ""
//             }`}
//           >
//             Contact Us
//           </Link>
//           <Link
//             href="/joinus"
//             className={`block py-1 ${
//               pathname === "/joinus" ? "text-red-500 font-bold" : ""
//             }`}
//           >
//             Join Us
//           </Link>
//           <Link
//             href="/download"
//             className={`block py-1 ${
//               pathname === "/download" ? "text-red-500 font-bold" : ""
//             }`}
//           >
//             Downloads
//           </Link>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default MobileNavbar;

"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, ChevronUp, Menu, X } from "lucide-react";

const getSafePath = (path) => {
  if (!path) return "#";
  return path.startsWith("/") ? path : `/${path}`;
};

const getSafeImg = (img) => {
  if (!img) return "";
  return img.startsWith("/") ? img : `/${img}`;
};

const categories = {
  "Insitu-Machinning": [
    {
      id: "pipe-cutting",
      name: "Pipe Cutting Machine XTCB Series",
      img: "product4.png",
      path: "pipeCutting",
    },
    {
      id: "id-bevelling",
      name: "ID Bevelling Machine",
      img: "images/Insitumachinning/bevelling.png",
      path: "bevellingmachine",
    },
    {
      id: "flange-facing",
      name: "Flange Facing Machine",
      img: "facing.jpg",
      path: "flangefacing",
    },
  ],
  "Bolting-Tools": [
    {
      id: "hydraulic-torque",
      name: "Hydraulic Torque Wrench",
      img: null, // Parent has no image in mobile view usually
      path: "hydraulictorque",
      subItems: [
        {
          id: "square-drive",
          name: "Square Drive - XTS Series",
          img: "/square_drive.png",
          path: "squaredrive",
        },
        {
          id: "hex-drive",
          name: "Hex Drive - XTH Series",
          img: "images/BoltingTools/hexdrive.png",
          path: "hexdrive",
        },
      ]
    },
    {
      id: "bolt-tensioner",
      name: "Bolt Tensioner",
      img: null, // Parent has no image in mobile view usually
      path: "hydraulicbolttensioners",
      subItems: [
        {
          id: "topside-tensioner",
          name: "Top Side Bolt Tensioner",
          img: "product5.png", // Use appropriate image if available
          path: "topsidebolt",
        },
        // 👇 NEW ITEM ADDED HERE for Mobile Navbar
        {
          id: "spring-return-tensioner",
          name: "Spring Return Bolt Tensioner",
          img: "Springreturnbolt.png", // Use appropriate image if available (same as topside for now)
          path: "springreturnbolt",
        },
        {
          id: "multi-stage-tensioner",
          name: "Multi Stage Bolt Tensioner",
          img: "multistagebolt.png",
          path: "multistagebolt",
        },
        {
          id: "subsea-tensioner",
          name: "Subsea Bolt Tensioner",
          img: "subsea.png", // Changed from .jpg to .png as per previous code
          path: "subseabolt",
        },
      ]
    },
  ],
  "Hydraulic-Powerpack": [
    {
      id: "xep700",
      name: "XEP700",
      img: "images/Power-Pack/XEP700.png",
      path: "xep700",
    },
    {
      id: "xap700",
      name: "XAP 700",
      img: "images/Power-Pack/XAP 700.png",
      path: "xap700",
    },
    { id: "xep1500", name: "XEP1500", img: "images/Power-Pack/xep1500.png", path: "xep1500" }, // Corrected image path based on previous example
    {
      id: "xap1500",
      name: "XAP1500",
      img: "images/Power-Pack/XAP1500.png",
      path: "xap1500",
    },
  ],
  Accesories: [
    {
      id: "jacks",
      name: "Jacks / Cylinders",
      img: "images/accesories/jackscylinders.png",
      path: "hydraulicjack",
    },
    {
      id: "handpump",
      name: "Handpump",
      img: "images/accesories/handpump.png",
      path: "handPumps",
    },
    {
      id: "flange-spreaders",
      name: "Flange Spreaders",
      img: "images/accesories/flangespreaders.png",
      path: "FlangeSpreaders",
    },
    {
      id: "nut-splitters",
      name: "Nut Splitters",
      img: "nut_spilitter.png",
      path: "hydralicnut", // Corrected path based on previous examples
    },
  ],
  "Impact-Sockets": [
    // Removed nut-splitters from here as it's in Accessories now
    {
      id: "sockets",
      name: "Sockets",
      img: "images/impact-sockets/Sockets.png",
      path: "socket",
    },
    {
      id: "reducers",
      name: "Reducers",
      img: "images/impact-sockets/Reducers.png",
      path: "reducer",
    },
  ],
};

// NEW services list
const servicesList = [
  {
    id: "bolt-torquing",
    name: "Bolt Torquing & Tensioning",
    img: "boltt.jpeg",
    path: "bolttorquing",
    width: 400,
    height: 390,
  },
  {
    id: "cold-cutting",
    name: "Cold Cutting & Beveling",
    img: "pipeCold.jpeg",
    path: "coldcutting",
    width: 400,
    height: 390,
  },
  {
    id: "flange-facing",
    name: "Flange Facing",
    img: "facing.jpeg",
    path: "flangefacingservice",
    width: 400,
    height: 390,
  },
  {
    id: "hot-tapping",
    name: "Hot-Tapping & Line Stopple",
    img: "tap.jpg",
    path: "hottapping",
    width: 400,
    height: 390,
  },
  {
    id: "re-tubing",
    name: "Re-Tubing of Boilers & Heat Exchangers",
    img: "re_tubing.png",
    path: "retubbing",
    width: 400,
    height: 300,
  },
  {
    id: "water-jet",
    name: "Water Jet Cutting",
    img: "wjet.jpg",
    path: "waterjet",
    width: 400,
    height: 400,
  },
  {
    id: "calibration",
    name: "Calibration",
    img: "callib.avif",
    path: "calibration",
    width: 400,
    height: 300,
  },
];

const MobileNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState(null);
  const [activeSub, setActiveSub] = useState(null);
  const [activeSubItem, setActiveSubItem] = useState(null);
  const [activeService, setActiveService] = useState(false);
  const pathname = usePathname();

  // Function to close all menus
  const closeAllMenus = () => {
    setIsOpen(false);
    setActiveCategory(null);
    setActiveSub(null);
    setActiveSubItem(null);
    setActiveService(false);
  };

  return (
    <nav className="md:hidden bg-black text-white w-full p-4">
      {/* Header */}
      <div className="flex justify-between items-center">
        <Link href="/" onClick={closeAllMenus}>
          <img src="/xtroc.png" alt="Xtroc Logo" className="h-8" />
        </Link>
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="mt-4 space-y-1">
          <Link
            href="/aboutus"
            onClick={closeAllMenus}
            className={`block py-1 ${pathname === "/aboutus" ? "text-red-500 font-bold" : ""
              }`}
          >
            About Us
          </Link>

          {/* Products Dropdown */}
          <div>
            <div className="flex justify-between items-center w-full">
              <Link href="/product" onClick={closeAllMenus} className="py-2 font-semibold">
                Products
              </Link>
              <button
                onClick={() => {
                  setActiveCategory(
                    activeCategory === "products" ? null : "products"
                  );
                  setActiveSub(null); // Close sub-categories when toggling main category
                  setActiveSubItem(null);
                }}
              >
                {activeCategory === "products" ? (
                  <ChevronUp className="h-4 w-4" />
                ) : (
                  <ChevronDown className="h-4 w-4" />
                )}
              </button>
            </div>

            {activeCategory === "products" && (
              <div className="ml-4 mt-2 space-y-2">
                {Object.keys(categories).map((catKey) => (
                  <div key={catKey}>
                    <button
                      onClick={() => {
                        setActiveSub(activeSub === catKey ? null : catKey);
                        setActiveSubItem(null); // Close sub-items when toggling sub-category
                      }}
                      className="flex justify-between w-full text-left py-2 capitalize" // Capitalize category names
                    >
                      {catKey.replace("-", " ")} {/* Replace dash with space for display */}
                      {activeSub === catKey ? (
                        <ChevronUp className="h-4 w-4" />
                      ) : (
                        <ChevronDown className="h-4 w-4" />
                      )}
                    </button>

                    {activeSub === catKey && (
                      <div className="ml-4 mt-1 space-y-2">
                        {categories[catKey].map((item) => (
                          <div key={item.id}>
                            {/* Main item */}
                            <div className="flex items-center justify-between">
                              <Link
                                href={getSafePath(item.path)}
                                onClick={closeAllMenus}
                                className="flex items-center gap-2 py-1 flex-1"
                              >
                                {item.img && (
                                  <img
                                    src={getSafeImg(item.img)}
                                    alt={item.name}
                                    className="w-10 h-10 object-contain flex-shrink-0" // Added flex-shrink-0
                                  />
                                )}
                                <span className="text-sm">{item.name}</span> {/* Smaller text */}
                              </Link>

                              {/* Sub-item dropdown button */}
                              {item.subItems && (
                                <button
                                  onClick={() =>
                                    setActiveSubItem(
                                      activeSubItem === item.id ? null : item.id
                                    )
                                  }
                                  className="ml-2 p-1" // Added padding for easier tapping
                                >
                                  {activeSubItem === item.id ? (
                                    <ChevronUp className="h-4 w-4" />
                                  ) : (
                                    <ChevronDown className="h-4 w-4" />
                                  )}
                                </button>
                              )}
                            </div>

                            {/* Sub-items */}
                            {item.subItems && activeSubItem === item.id && (
                              <div className="ml-6 mt-1 space-y-1">
                                {item.subItems.map((subItem) => (
                                  <Link
                                    key={subItem.id}
                                    href={getSafePath(subItem.path)}
                                    onClick={closeAllMenus}
                                    className="flex items-center gap-2 py-1"
                                  >
                                    {subItem.img && (
                                      <img
                                        src={getSafeImg(subItem.img)}
                                        alt={subItem.name}
                                        className="w-8 h-8 object-contain flex-shrink-0"
                                      />
                                    )}
                                    <span className="text-xs">{subItem.name}</span> {/* Even smaller text */}
                                  </Link>
                                ))}
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Services Dropdown */}
          <div>
            <div className="flex justify-between items-center w-full">
              <Link href="/services" onClick={closeAllMenus} className="py-2 font-semibold">
                Services
              </Link>
              <button
                onClick={() => setActiveService(activeService ? null : true)}
              >
                {activeService ? (
                  <ChevronUp className="h-4 w-4" />
                ) : (
                  <ChevronDown className="h-4 w-4" />
                )}
              </button>
            </div>

            {activeService && (
              <div className="ml-4 mt-2 space-y-2">
                {servicesList.map((svc) => (
                  <Link
                    key={svc.id}
                    href={getSafePath(svc.path)}
                    onClick={closeAllMenus}
                    className="flex items-center gap-3 py-2"
                  >
                    {svc.img && (
                      <img
                        src={getSafeImg(svc.img)}
                        alt={svc.name}
                        className="w-10 h-10 object-contain rounded flex-shrink-0" // Added flex-shrink-0
                      />
                    )}
                    <span className="text-sm">{svc.name}</span> {/* Smaller text */}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Other Links */}
          <Link
            href="/distributor"
            onClick={closeAllMenus}
            className={`block py-1 ${pathname === "/distributor" ? "text-red-500 font-bold" : ""
              }`}
          >
            Distributor
          </Link>
          <Link
            href="/industry"
            onClick={closeAllMenus}
            className={`block py-1 ${pathname === "/industry" ? "text-red-500 font-bold" : ""
              }`}
          >
            Industries
          </Link>
          <Link
            href="/contact"
            onClick={closeAllMenus}
            className={`block py-1 ${pathname === "/contact" ? "text-red-500 font-bold" : ""
              }`}
          >
            Contact Us
          </Link>
          <Link
            href="/Joinus"
            onClick={closeAllMenus}
            className={`block py-1 ${pathname?.toLowerCase() === "/joinus" ? "text-red-500 font-bold" : ""
              }`}
          >
            Join Us
          </Link>
          <Link
            href="/testimonials"
            onClick={closeAllMenus}
            className={`block py-1 ${pathname === "/testimonials" ? "text-red-500 font-bold" : ""
              }`}
          >
            Testimonials
          </Link>
          <Link
            href="/download"
            onClick={closeAllMenus}
            className={`block py-1 ${pathname === "/download" ? "text-red-500 font-bold" : ""
              }`}
          >
            Downloads
          </Link>
        </div>
      )}
    </nav>
  );
};

export default MobileNavbar;