import NutSplitter from '@/components/NutSplitter/NutSplitter';
import WhatsappLogo from '@/components/WhatsappLogo/WhatsappLogo';
import Footer from '@/layout/footer';
import MobileNavbar from '@/layout/mobileNavbar';
import React from 'react'


export const metadata = {
  title: "Hydraulic Nut Splitter & Seized Nut Removal Tools | XTORC",
  description: "Cut through rusted nuts efficiently with XTORC hydraulic nut splitters. Safe, spark-free operation for pipeline maintenance.",
  keywords: ["hydraulic nut splitter","seize nut cutter","industrial nut splitter","safe nut removal"],
  alternates: {
    canonical: "https://xtorcind.com/nutsplitter",
  },
  openGraph: {
    url: "https://xtorcind.com/nutsplitter",
    title: "Hydraulic Nut Splitter & Seized Nut Removal Tools | XTORC",
    description: "Cut through rusted nuts efficiently with XTORC hydraulic nut splitters. Safe, spark-free operation for pipeline maintenance.",
    siteName: "XTORC",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hydraulic Nut Splitter & Seized Nut Removal Tools | XTORC",
    description: "Cut through rusted nuts efficiently with XTORC hydraulic nut splitters. Safe, spark-free operation for pipeline maintenance.",
  },
};

const page = () => {
  return (
    <div>
      <WhatsappLogo/>
      <MobileNavbar/>
        <NutSplitter/>
        <Footer/>
    </div>
  )
}
export default page;
