import Socket from '@/components/Sockets/Sockets';
import WhatsappLogo from '@/components/WhatsappLogo/WhatsappLogo';
import Footer from '@/layout/footer';
import MobileNavbar from '@/layout/mobileNavbar';
import React from 'react'


export const metadata = {
  title: "Heavy Duty Impact Sockets | Industrial Grade | XTORC",
  description: "Premium industrial impact sockets for hydraulic torque wrenches. Heat-treated alloy steel for maximum durability and strength.",
  keywords: ["impact sockets","industrial impact socket","heavy duty socket","torque wrench sockets"],
  alternates: {
    canonical: "https://xtorcind.com/socket",
  },
  openGraph: {
    url: "https://xtorcind.com/socket",
    title: "Heavy Duty Impact Sockets | Industrial Grade | XTORC",
    description: "Premium industrial impact sockets for hydraulic torque wrenches. Heat-treated alloy steel for maximum durability and strength.",
    siteName: "XTORC",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Heavy Duty Impact Sockets | Industrial Grade | XTORC",
    description: "Premium industrial impact sockets for hydraulic torque wrenches. Heat-treated alloy steel for maximum durability and strength.",
  },
};

const page = () => {
  return (
    <div>
      <WhatsappLogo/>
      <MobileNavbar/>
        <Socket/>
        <Footer/>
    </div>
  )
}
export default page;
