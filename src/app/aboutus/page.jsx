import AboutSection from '@/components/AboutUs/AboutUs';
import OurValues from '@/components/AboutUs/OurValues';
import ChatBoat from '@/components/ChatBoat/ChatBoat';
// import OurValues from '@/components/AboutUs/OurValues';
import ContactUs from '@/components/Home/ContactUs';
import WhatsappLogo from '@/components/WhatsappLogo/WhatsappLogo';
import Footer from '@/layout/footer';
import MobileNavbar from '@/layout/mobileNavbar';
import Navbar from '@/layout/Navbar';
import React from 'react'


export const metadata = {
  title: "About XTORC | Leading Industrial Bolting & In-Situ Tools Manufacturer",
  description: "Learn about XTORC, a globally trusted manufacturer of premium hydraulic torque wrenches, bolt tensioners, flange facers, and pipe cutters.",
  keywords: ["about Xtorc","industrial tool manufacturer","controlled bolting supplier","on-site machining equipment"],
  alternates: {
    canonical: "https://xtorcind.com/aboutus",
  },
  openGraph: {
    url: "https://xtorcind.com/aboutus",
    title: "About XTORC | Leading Industrial Bolting & In-Situ Tools Manufacturer",
    description: "Learn about XTORC, a globally trusted manufacturer of premium hydraulic torque wrenches, bolt tensioners, flange facers, and pipe cutters.",
    siteName: "XTORC",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About XTORC | Leading Industrial Bolting & In-Situ Tools Manufacturer",
    description: "Learn about XTORC, a globally trusted manufacturer of premium hydraulic torque wrenches, bolt tensioners, flange facers, and pipe cutters.",
  },
};

const page = () => {
  return (
    <div>
      
      <MobileNavbar/>
      <WhatsappLogo/>
      <ChatBoat/>
        <AboutSection/>
        <OurValues/>
        <ContactUs/>
        <Footer/>
    </div>
  )
}
export default page;
