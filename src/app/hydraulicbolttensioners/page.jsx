import HydraulicBoltTensioners from '@/components/HydraulicBoltTensioners/HydraulicBoltTensioners';
import WhatsappLogo from '@/components/WhatsappLogo/WhatsappLogo';
import Footer from '@/layout/footer';
import MobileNavbar from '@/layout/mobileNavbar';
import React from 'react'

const  page= () => {
  return (
    <div>
      <MobileNavbar/>
      <WhatsappLogo/>
        <HydraulicBoltTensioners/>
        <Footer/>
    </div>
  )
}

export const metadata = {
  title: "Multi-Stage & Single-Stage Hydraulic Bolt Tensioners | XTORC",
  description: "Premium hydraulic bolt tensioners. Accurate and uniform preload for critical bolted joints in pipelines and wind turbines.",
  keywords: ["hydraulic bolt tensioner","bolt tensioning tool","subsea tensioner","wind turbine tensioning","flange bolting"],
  alternates: {
    canonical: "https://xtorcind.com/hydraulicbolttensioners",
  },
  openGraph: {
    url: "https://xtorcind.com/hydraulicbolttensioners",
    title: "Multi-Stage & Single-Stage Hydraulic Bolt Tensioners | XTORC",
    description: "Premium hydraulic bolt tensioners. Accurate and uniform preload for critical bolted joints in pipelines and wind turbines.",
    siteName: "XTORC",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Multi-Stage & Single-Stage Hydraulic Bolt Tensioners | XTORC",
    description: "Premium hydraulic bolt tensioners. Accurate and uniform preload for critical bolted joints in pipelines and wind turbines.",
  },
};

export default page;
