import ChatBoat from '@/components/ChatBoat/ChatBoat';
import Innovations from '@/components/Products/OurInnovation';
import Product from '@/components/Products/Product';
import WhatsappLogo from '@/components/WhatsappLogo/WhatsappLogo';
import Footer from '@/layout/footer';
import MobileNavbar from '@/layout/mobileNavbar';
import Navbar from '@/layout/Navbar';
import React from 'react'


export const metadata = {
  title: "XTORC Industrial Product Catalog | Bolting & In-Situ Tools",
  description: "Explore XTORC's comprehensive product line including torque wrenches, tensioners, flange facers, socket sets, and pipeline tools.",
  keywords: ["XTORC products","hydraulic torque wrenches","bolt tensioners","flange facers","socket sets","pipeline tools"],
  alternates: {
    canonical: "https://xtorcind.com/product",
  },
  openGraph: {
    url: "https://xtorcind.com/product",
    title: "XTORC Industrial Product Catalog | Bolting & In-Situ Tools",
    description: "Explore XTORC's comprehensive product line including torque wrenches, tensioners, flange facers, socket sets, and pipeline tools.",
    siteName: "XTORC",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "XTORC Industrial Product Catalog | Bolting & In-Situ Tools",
    description: "Explore XTORC's comprehensive product line including torque wrenches, tensioners, flange facers, socket sets, and pipeline tools.",
  },
};

const page = () => {
  return (
    <div>
   
      <MobileNavbar/>
        <Product/>
        <Innovations/>
        <WhatsappLogo/>
        <ChatBoat/>
        <Footer/>
    </div>
  )
}
export default page;
