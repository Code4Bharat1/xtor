
import PneumoticPowerPack from '@/components/Pneumotic/Pneumotic';
import WhatsappLogo from '@/components/WhatsappLogo/WhatsappLogo';
import Footer from '@/layout/footer';
import MobileNavbar from '@/layout/mobileNavbar';
import React from 'react'


export const metadata = {
  title: "Pneumatic Torque Wrenches | Air Driven Bolting Tools | XTORC",
  description: "High-speed pneumatic torque wrenches. Safe and explosion-proof air-driven tools for mining, oil & gas, and refinery bolting.",
  keywords: ["pneumatic torque wrench","air driven torque wrench","wind pneumatic tool","industrial pneumatic bolting"],
  alternates: {
    canonical: "https://xtorcind.com/pneumotic",
  },
  openGraph: {
    url: "https://xtorcind.com/pneumotic",
    title: "Pneumatic Torque Wrenches | Air Driven Bolting Tools | XTORC",
    description: "High-speed pneumatic torque wrenches. Safe and explosion-proof air-driven tools for mining, oil & gas, and refinery bolting.",
    siteName: "XTORC",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pneumatic Torque Wrenches | Air Driven Bolting Tools | XTORC",
    description: "High-speed pneumatic torque wrenches. Safe and explosion-proof air-driven tools for mining, oil & gas, and refinery bolting.",
  },
};

const page = () => {
  return (
    <div>
      <WhatsappLogo/>
      <MobileNavbar/>
        <PneumoticPowerPack/>
        <Footer/>
    </div>
  )
}

export default page;
