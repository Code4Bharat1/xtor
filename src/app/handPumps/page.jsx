import HandPumps from '@/components/HandPumps/HandPumps';
import WhatsappLogo from '@/components/WhatsappLogo/WhatsappLogo';
import Footer from '@/layout/footer';
import MobileNavbar from '@/layout/mobileNavbar';
import React from 'react'


export const metadata = {
  title: "High-Pressure Hydraulic Hand Pumps | 700 & 1500 Bar | XTORC",
  description: "Dependable high-pressure hydraulic hand pumps. Designed for operating torque wrenches, tensioners, cylinders, and jacks.",
  keywords: ["hydraulic hand pump","700 bar hand pump","1500 bar hand pump","high pressure hand pump","XTORC pump"],
  alternates: {
    canonical: "https://xtorcind.com/handPumps",
  },
  openGraph: {
    url: "https://xtorcind.com/handPumps",
    title: "High-Pressure Hydraulic Hand Pumps | 700 & 1500 Bar | XTORC",
    description: "Dependable high-pressure hydraulic hand pumps. Designed for operating torque wrenches, tensioners, cylinders, and jacks.",
    siteName: "XTORC",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "High-Pressure Hydraulic Hand Pumps | 700 & 1500 Bar | XTORC",
    description: "Dependable high-pressure hydraulic hand pumps. Designed for operating torque wrenches, tensioners, cylinders, and jacks.",
  },
};

const page = () => {
  return (
    <div>
      <MobileNavbar/>
      <WhatsappLogo/>
        <HandPumps/>
        <Footer/>
    </div>
  )
}

export default page;
