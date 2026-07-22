
import ReTubbing from '@/components/Services_main_dir/Re_Tubbing/Re_Tubbing';
import WhatsappLogo from '@/components/WhatsappLogo/WhatsappLogo';
import Footer from '@/layout/footer';
import MobileNavbar from '@/layout/mobileNavbar';
import React from 'react'


export const metadata = {
  title: "Torque Wrench Calibration & Repair Services | XTORC",
  description: "Accredited calibration and repair services for hydraulic, pneumatic, and manual torque wrenches. Maintain certified torque accuracy.",
  keywords: ["torque calibration services","torque wrench repair","calibration lab","certified torque tools"],
  alternates: {
    canonical: "https://xtorcind.com/retubbing",
  },
  openGraph: {
    url: "https://xtorcind.com/retubbing",
    title: "Torque Wrench Calibration & Repair Services | XTORC",
    description: "Accredited calibration and repair services for hydraulic, pneumatic, and manual torque wrenches. Maintain certified torque accuracy.",
    siteName: "XTORC",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Torque Wrench Calibration & Repair Services | XTORC",
    description: "Accredited calibration and repair services for hydraulic, pneumatic, and manual torque wrenches. Maintain certified torque accuracy.",
  },
};

const page = () => {
  return (
    <div>
      <WhatsappLogo/>
      <MobileNavbar/>
      <ReTubbing/>
        <Footer/>
    </div>
  )
}

export default page;
