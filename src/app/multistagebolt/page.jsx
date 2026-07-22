import MultiStageBolt from '@/components/MultiStageBolt/MultiStageBolt';
import WhatsappLogo from '@/components/WhatsappLogo/WhatsappLogo';
import Footer from '@/layout/footer';
import MobileNavbar from '@/layout/mobileNavbar';
import React from 'react'


export const metadata = {
  title: "Multi-Stage Hydraulic Bolt Tensioners | Compact Preload | XTORC",
  description: "Multi-stage hydraulic tensioners for wind turbine towers and high-pressure steam turbines. Compact design, maximum stretch.",
  keywords: ["multi stage bolt tensioner","compact bolt tensioner","wind turbine tower tensioning","high preload tensioner"],
  alternates: {
    canonical: "https://xtorcind.com/multistagebolt",
  },
  openGraph: {
    url: "https://xtorcind.com/multistagebolt",
    title: "Multi-Stage Hydraulic Bolt Tensioners | Compact Preload | XTORC",
    description: "Multi-stage hydraulic tensioners for wind turbine towers and high-pressure steam turbines. Compact design, maximum stretch.",
    siteName: "XTORC",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Multi-Stage Hydraulic Bolt Tensioners | Compact Preload | XTORC",
    description: "Multi-stage hydraulic tensioners for wind turbine towers and high-pressure steam turbines. Compact design, maximum stretch.",
  },
};

const page = () => {
  return (
    <div>
      <WhatsappLogo/>
      <MobileNavbar/>
        <MultiStageBolt/>
        <Footer/>
    </div>
  )
}
export default page;
