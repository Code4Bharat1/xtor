"use client";
import React from "react";
import ContactUs from "@/components/Home/ContactUs";
import Home from "@/components/Home/Home";
import Industries from "@/components/Home/Industries";

import Footer from "@/layout/footer";
import MobileNavbar from "@/layout/mobileNavbar";
import AboutHome from "@/components/Home/AboutHome";
import OurProducts from "@/components/Home/OurProducts";
import WhatsappLogo from "@/components/WhatsappLogo/WhatsappLogo";
import ChatBoat from "@/components/ChatBoat/ChatBoat";
import { motion } from "framer-motion";

const Page = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://xtorcind.com/#organization",
        "name": "XTORC",
        "url": "https://xtorcind.com",
        "logo": {
          "@type": "ImageObject",
          "@id": "https://xtorcind.com/#logo",
          "url": "https://xtorcind.com/xtorc.png",
          "caption": "XTORC Logo"
        },
        "description": "XTORC provides premium hydraulic torque wrenches, flange facing machines, pipe cutting machines, bolt tensioners, and industrial bolting tools trusted globally.",
        "contactPoint": [
          {
            "@type": "ContactPoint",
            "telephone": "+91-9619561695",
            "contactType": "sales",
            "areaServed": "Worldwide",
            "availableLanguage": ["en", "hi"]
          }
        ]
      },
      {
        "@type": "LocalBusiness",
        "@id": "https://xtorcind.com/#localbusiness",
        "name": "XTORC India",
        "image": "https://xtorcind.com/xtorc.png",
        "telephone": "+91 9619561695",
        "email": "ENQUIRY@XTORCIND.COM",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "B-Wing 3rd Floor Office No.35, Plot No C-39A, TTC Industrial Area, MIDC Industrial Area, Pawne",
          "addressLocality": "Navi Mumbai",
          "addressRegion": "Maharashtra",
          "postalCode": "400710",
          "addressCountry": "IN"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 19.0937817,
          "longitude": 73.0187585
        },
        "url": "https://xtorcind.com"
      },
      {
        "@type": "WebSite",
        "@id": "https://xtorcind.com/#website",
        "url": "https://xtorcind.com",
        "name": "XTORC",
        "publisher": {
          "@id": "https://xtorcind.com/#organization"
        }
      }
    ]
  };

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      /> 
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="hidden md:block">
        </div>
        <div className="md:hidden">
          <MobileNavbar />
        </div>
        <WhatsappLogo/>
        <ChatBoat/>
        <Home />
        <AboutHome/>
        <OurProducts/>
        <Industries />
        <ContactUs />
        <Footer />
      </motion.div> 
    </div>
  );
};

export default Page;
