import ChatBoat from '@/components/ChatBoat/ChatBoat';
import WhatsappLogo from '@/components/WhatsappLogo/WhatsappLogo';
import Footer from '@/layout/footer';
import MobileNavbar from '@/layout/mobileNavbar';
import Navbar from '@/layout/Navbar';
import React from 'react'
import DistributorPage from '@/components/Distributor/Distributor';


export const metadata = {
  title: "Become an XTORC Distributor | Global Business Partnerships",
  description: "Partner with XTORC, a leading industrial bolting brand. Join our global distribution network and supply top-tier hydraulic tools.",
  keywords: ["become Xtorc distributor","industrial tools partnership","hydraulic torque wrench supplier","global distributor program"],
  alternates: {
    canonical: "https://xtorcind.com/distributor",
  },
  openGraph: {
    url: "https://xtorcind.com/distributor",
    title: "Become an XTORC Distributor | Global Business Partnerships",
    description: "Partner with XTORC, a leading industrial bolting brand. Join our global distribution network and supply top-tier hydraulic tools.",
    siteName: "XTORC",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Become an XTORC Distributor | Global Business Partnerships",
    description: "Partner with XTORC, a leading industrial bolting brand. Join our global distribution network and supply top-tier hydraulic tools.",
  },
};

const page = () => {
  return (
    <div>
    
      <MobileNavbar/>
       <DistributorPage/>
        <WhatsappLogo/>
        <ChatBoat/>
        <Footer/>
    </div>
  )
}

export default page;
