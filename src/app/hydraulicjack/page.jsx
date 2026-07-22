import HydraulicJack from '@/components/HydraulicJack/HydraulicJack';
import WhatsappLogo from '@/components/WhatsappLogo/WhatsappLogo';
import Footer from '@/layout/footer';
import MobileNavbar from '@/layout/mobileNavbar';
import React from 'react'


export const metadata = {
  title: "Industrial Hydraulic Jacks & Lifting Cylinders | XTORC",
  description: "Heavy-duty hydraulic jacks, rams, and cylinders for lifting, pulling, and pushing. Available in multiple capacities and stroke lengths.",
  keywords: ["hydraulic jack","lifting cylinders","hydraulic rams","high capacity jack","industrial lifting tools"],
  alternates: {
    canonical: "https://xtorcind.com/hydraulicjack",
  },
  openGraph: {
    url: "https://xtorcind.com/hydraulicjack",
    title: "Industrial Hydraulic Jacks & Lifting Cylinders | XTORC",
    description: "Heavy-duty hydraulic jacks, rams, and cylinders for lifting, pulling, and pushing. Available in multiple capacities and stroke lengths.",
    siteName: "XTORC",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Industrial Hydraulic Jacks & Lifting Cylinders | XTORC",
    description: "Heavy-duty hydraulic jacks, rams, and cylinders for lifting, pulling, and pushing. Available in multiple capacities and stroke lengths.",
  },
};

const page = () => {
  return (
    <div>
      <MobileNavbar/>
      <WhatsappLogo/>
      <HydraulicJack/>
        <Footer/>
    </div>
  )
}

export default page;
