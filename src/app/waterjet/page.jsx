
import WaterJet from '@/components/Services_main_dir/Water_Jet/Water_Jet';
import WhatsappLogo from '@/components/WhatsappLogo/WhatsappLogo';
import Footer from '@/layout/footer';
import MobileNavbar from '@/layout/mobileNavbar';
import React from 'react'


export const metadata = {
  title: "Ultra High Pressure Water Jet Cutting Services | XTORC",
  description: "Precision water jet cutting services. Cold cutting solution for steel plates, pipes, and structures in volatile gas environments.",
  keywords: ["water jet cutting services","ultra high pressure water cutting","precision cold cutting","industrial waterjet"],
  alternates: {
    canonical: "https://xtorcind.com/waterjet",
  },
  openGraph: {
    url: "https://xtorcind.com/waterjet",
    title: "Ultra High Pressure Water Jet Cutting Services | XTORC",
    description: "Precision water jet cutting services. Cold cutting solution for steel plates, pipes, and structures in volatile gas environments.",
    siteName: "XTORC",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ultra High Pressure Water Jet Cutting Services | XTORC",
    description: "Precision water jet cutting services. Cold cutting solution for steel plates, pipes, and structures in volatile gas environments.",
  },
};

const page = () => {
  return (
    <div>
      <WhatsappLogo/>
      <MobileNavbar/>
      <WaterJet/>
        <Footer/>
    </div>
  )
}

export default page;
