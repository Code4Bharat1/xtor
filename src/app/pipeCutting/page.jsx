
import PipeCutting from '@/components/PipeCutting/PipeCutting';
import WhatsappLogo from '@/components/WhatsappLogo/WhatsappLogo';
import Footer from '@/layout/footer';
import MobileNavbar from '@/layout/mobileNavbar';
import React from 'react'


export const metadata = {
  title: "Portable Pipe Cutting & Beveling Split Frame Machines | XTORC",
  description: "Clamshell split frame pipe cutters for cold cutting and beveling. Engineered for pipe preparation in refineries and oil fields.",
  keywords: ["split frame pipe cutter","portable pipe cutting machine","clamshell pipe cutter","pipe cold cutting machine"],
  alternates: {
    canonical: "https://xtorcind.com/pipeCutting",
  },
  openGraph: {
    url: "https://xtorcind.com/pipeCutting",
    title: "Portable Pipe Cutting & Beveling Split Frame Machines | XTORC",
    description: "Clamshell split frame pipe cutters for cold cutting and beveling. Engineered for pipe preparation in refineries and oil fields.",
    siteName: "XTORC",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Portable Pipe Cutting & Beveling Split Frame Machines | XTORC",
    description: "Clamshell split frame pipe cutters for cold cutting and beveling. Engineered for pipe preparation in refineries and oil fields.",
  },
};

const page = () => {
  return (
    <div>
      <WhatsappLogo/>
      <MobileNavbar/>
       <PipeCutting/>
        <Footer/>
    </div>
  )
}

export default page;
