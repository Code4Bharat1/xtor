
import FlangeFacingMachine from '@/components/FlangeFacing/FlangeFacing';
import PipeCutting from '@/components/PipeCutting/PipeCutting';
import WhatsappLogo from '@/components/WhatsappLogo/WhatsappLogo';
import Footer from '@/layout/footer';
import MobileNavbar from '@/layout/mobileNavbar';
import React from 'react'


export const metadata = {
  title: "Portable Flange Facing Machines | On-Site Flange Facers | XTORC",
  description: "High-quality portable flange facing machines from XTORC. Fast set-up and precision machining for pipe flanges and heat exchangers.",
  keywords: ["flange facing machine","portable flange facer","on-site machining","flange repair tool","manual flange facing"],
  alternates: {
    canonical: "https://xtorcind.com/flangefacing",
  },
  openGraph: {
    url: "https://xtorcind.com/flangefacing",
    title: "Portable Flange Facing Machines | On-Site Flange Facers | XTORC",
    description: "High-quality portable flange facing machines from XTORC. Fast set-up and precision machining for pipe flanges and heat exchangers.",
    siteName: "XTORC",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Portable Flange Facing Machines | On-Site Flange Facers | XTORC",
    description: "High-quality portable flange facing machines from XTORC. Fast set-up and precision machining for pipe flanges and heat exchangers.",
  },
};

const page = () => {
  return (
    <div>
      <WhatsappLogo/>
      <MobileNavbar/>
      <FlangeFacingMachine/>
        <Footer/>
    </div>
  )
}

export default page;
