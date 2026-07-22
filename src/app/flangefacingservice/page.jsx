
import FlangeFacingMachine from '@/components/FlangeFacing/FlangeFacing';
import PipeCutting from '@/components/PipeCutting/PipeCutting';
import FlangeFacing from '@/components/Services_main_dir/Flange_Facing/Flange_Facing';
import WhatsappLogo from '@/components/WhatsappLogo/WhatsappLogo';
import Footer from '@/layout/footer';
import MobileNavbar from '@/layout/mobileNavbar';
import React from 'react'


export const metadata = {
  title: "Professional On-Site Flange Facing Services | XTORC",
  description: "Precision on-site flange facing services to repair damaged raised-face or RTJ flange connections. Minimize downtime with XTORC.",
  keywords: ["flange facing services","on-site flange facing","flange machining services","RTJ flange repair","joint integrity services"],
  alternates: {
    canonical: "https://xtorcind.com/flangefacingservice",
  },
  openGraph: {
    url: "https://xtorcind.com/flangefacingservice",
    title: "Professional On-Site Flange Facing Services | XTORC",
    description: "Precision on-site flange facing services to repair damaged raised-face or RTJ flange connections. Minimize downtime with XTORC.",
    siteName: "XTORC",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Professional On-Site Flange Facing Services | XTORC",
    description: "Precision on-site flange facing services to repair damaged raised-face or RTJ flange connections. Minimize downtime with XTORC.",
  },
};

const page = () => {
  return (
    <div>
      <WhatsappLogo/>
      <MobileNavbar/>
   <FlangeFacing/>
        <Footer/>
    </div>
  )
}

export default page;
