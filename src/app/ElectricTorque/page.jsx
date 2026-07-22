
import ElectricTorque from '@/components/ElectricTorque/ElectricTorque';
import WhatsappLogo from '@/components/WhatsappLogo/WhatsappLogo';
import Footer from '@/layout/footer';
import MobileNavbar from '@/layout/mobileNavbar';
import React from 'react'


export const metadata = {
  title: "Electric Torque Wrenches | High-Precision Bolting | XTORC",
  description: "Discover XTORC's high-precision electric torque wrenches. Perfect for controlled bolting applications requiring extreme torque accuracy.",
  keywords: ["electric torque wrench","electric bolting tool","controlled bolting","high precision torque wrench","XTORC electric torque"],
  alternates: {
    canonical: "https://xtorcind.com/ElectricTorque",
  },
  openGraph: {
    url: "https://xtorcind.com/ElectricTorque",
    title: "Electric Torque Wrenches | High-Precision Bolting | XTORC",
    description: "Discover XTORC's high-precision electric torque wrenches. Perfect for controlled bolting applications requiring extreme torque accuracy.",
    siteName: "XTORC",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Electric Torque Wrenches | High-Precision Bolting | XTORC",
    description: "Discover XTORC's high-precision electric torque wrenches. Perfect for controlled bolting applications requiring extreme torque accuracy.",
  },
};

const page = () => {
  return (
    <div>
      <MobileNavbar/>
      <WhatsappLogo/>
       <ElectricTorque/>
        <Footer/>
    </div>
  )
}

export default page;
