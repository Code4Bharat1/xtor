import Socket from '@/components/Sockets/Sockets';
import WhatsappLogo from '@/components/WhatsappLogo/WhatsappLogo';
import Xep1500 from '@/components/XEP1500/Xep1500';
import Footer from '@/layout/footer';
import MobileNavbar from '@/layout/mobileNavbar';
import React from 'react'


export const metadata = {
  title: "XEP1500 Electric Tensioner Pump | 1500 Bar | XTORC",
  description: "High-flow 1500 bar electric pump for hydraulic tensioning. Fast preloading cycles for wind turbines and process piping.",
  keywords: ["XEP1500 pump","electric tensioner pump","1500 bar electric pump","high flow tensioner pump"],
  alternates: {
    canonical: "https://xtorcind.com/xep1500",
  },
  openGraph: {
    url: "https://xtorcind.com/xep1500",
    title: "XEP1500 Electric Tensioner Pump | 1500 Bar | XTORC",
    description: "High-flow 1500 bar electric pump for hydraulic tensioning. Fast preloading cycles for wind turbines and process piping.",
    siteName: "XTORC",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "XEP1500 Electric Tensioner Pump | 1500 Bar | XTORC",
    description: "High-flow 1500 bar electric pump for hydraulic tensioning. Fast preloading cycles for wind turbines and process piping.",
  },
};

const page = () => {
  return (
    <div>
      <WhatsappLogo/>
      <MobileNavbar/>
       <Xep1500/>
        <Footer/>
    </div>
  )
}
export default page;
