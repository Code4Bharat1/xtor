
import WhatsappLogo from '@/components/WhatsappLogo/WhatsappLogo';
import Xap1500 from '@/components/XAP1500/Xap1500';
import Footer from '@/layout/footer';
import MobileNavbar from '@/layout/mobileNavbar';
import React from 'react'


export const metadata = {
  title: "XAP1500 Pneumatic Tensioner Pump | 1500 Bar | XTORC",
  description: "Air-driven 1500 bar high-pressure pump for operating hydraulic bolt tensioners. Robust design for explosive oil & gas sites.",
  keywords: ["XAP1500 pump","pneumatic tensioner pump","1500 bar air pump","hydraulic bolt tensioner pump"],
  alternates: {
    canonical: "https://xtorcind.com/xap1500",
  },
  openGraph: {
    url: "https://xtorcind.com/xap1500",
    title: "XAP1500 Pneumatic Tensioner Pump | 1500 Bar | XTORC",
    description: "Air-driven 1500 bar high-pressure pump for operating hydraulic bolt tensioners. Robust design for explosive oil & gas sites.",
    siteName: "XTORC",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "XAP1500 Pneumatic Tensioner Pump | 1500 Bar | XTORC",
    description: "Air-driven 1500 bar high-pressure pump for operating hydraulic bolt tensioners. Robust design for explosive oil & gas sites.",
  },
};

const page = () => {
  return (
    <div>
      <WhatsappLogo/>
      <MobileNavbar/>
        <Xap1500/>
        <Footer/>
    </div>
  )
}
export default page;
