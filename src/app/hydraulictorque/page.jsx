import HydraulicTorque from '@/components/HydraulicTorque/HydraulicTorque';
import WhatsappLogo from '@/components/WhatsappLogo/WhatsappLogo';
import Footer from '@/layout/footer';
import MobileNavbar from '@/layout/mobileNavbar';
import React from 'react'


export const metadata = {
  title: "Hydraulic Torque Wrenches | Square Drive & Hex Profile | XTORC",
  description: "Precision hydraulic torque wrenches for industrial bolting. Industry-standard tools for heavy engineering and construction.",
  keywords: ["hydraulic torque wrench","square drive torque wrench","low profile hex wrench","controlled bolting tools"],
  alternates: {
    canonical: "https://xtorcind.com/hydraulictorque",
  },
  openGraph: {
    url: "https://xtorcind.com/hydraulictorque",
    title: "Hydraulic Torque Wrenches | Square Drive & Hex Profile | XTORC",
    description: "Precision hydraulic torque wrenches for industrial bolting. Industry-standard tools for heavy engineering and construction.",
    siteName: "XTORC",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hydraulic Torque Wrenches | Square Drive & Hex Profile | XTORC",
    description: "Precision hydraulic torque wrenches for industrial bolting. Industry-standard tools for heavy engineering and construction.",
  },
};

const page = () => {
  return (
    <div>
      <MobileNavbar/>
      <WhatsappLogo/>
        <HydraulicTorque/>
        <Footer/>
    </div>
  )
}
export default page;