import HydraulicNut from '@/components/HydraulicNut/HydraulicNut';
import WhatsappLogo from '@/components/WhatsappLogo/WhatsappLogo';
import Footer from '@/layout/footer';
import MobileNavbar from '@/layout/mobileNavbar';
import React from 'react'


export const metadata = {
  title: "Heavy Duty Hydraulic Nut Splitters | Bolt Cutter Tools | XTORC",
  description: "Remove corroded or seized nuts safely without damaging bolt threads. Industrial hydraulic nut splitters by XTORC.",
  keywords: ["hydraulic nut splitter","seized nut removal","rusted nut cutter","mechanical nut splitter","flange maintenance tools"],
  alternates: {
    canonical: "https://xtorcind.com/hydralicnut",
  },
  openGraph: {
    url: "https://xtorcind.com/hydralicnut",
    title: "Heavy Duty Hydraulic Nut Splitters | Bolt Cutter Tools | XTORC",
    description: "Remove corroded or seized nuts safely without damaging bolt threads. Industrial hydraulic nut splitters by XTORC.",
    siteName: "XTORC",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Heavy Duty Hydraulic Nut Splitters | Bolt Cutter Tools | XTORC",
    description: "Remove corroded or seized nuts safely without damaging bolt threads. Industrial hydraulic nut splitters by XTORC.",
  },
};

const page = () => {
  return (
    <div>
      <WhatsappLogo/>
      <MobileNavbar/>
        <HydraulicNut/>
        <Footer/>
    </div>
  )
}

export default page;
