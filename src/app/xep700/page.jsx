import Socket from '@/components/Sockets/Sockets';
import WhatsappLogo from '@/components/WhatsappLogo/WhatsappLogo';
import Xep700 from '@/components/XEP700/Xep700';
import Footer from '@/layout/footer';
import MobileNavbar from '@/layout/mobileNavbar';
import React from 'react'


export const metadata = {
  title: "XEP700 Electric Torque Wrench Pump | 700 Bar | XTORC",
  description: "Electric 700 bar high-performance torque wrench pump. Dual stage flow for quick hydraulic wrench cycle operation.",
  keywords: ["XEP700 pump","electric torque pump","700 bar torque pump","dual stage electric pump"],
  alternates: {
    canonical: "https://xtorcind.com/xep700",
  },
  openGraph: {
    url: "https://xtorcind.com/xep700",
    title: "XEP700 Electric Torque Wrench Pump | 700 Bar | XTORC",
    description: "Electric 700 bar high-performance torque wrench pump. Dual stage flow for quick hydraulic wrench cycle operation.",
    siteName: "XTORC",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "XEP700 Electric Torque Wrench Pump | 700 Bar | XTORC",
    description: "Electric 700 bar high-performance torque wrench pump. Dual stage flow for quick hydraulic wrench cycle operation.",
  },
};

const page = () => {
  return (
    <div>
      <WhatsappLogo/>
      <MobileNavbar/>
       <Xep700/>
        <Footer/>
    </div>
  )
}
export default page;
