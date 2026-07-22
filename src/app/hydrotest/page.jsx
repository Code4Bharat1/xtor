
import HydroTestPumps from '@/components/HydrotestPumps/HydrotestPumps';
import WhatsappLogo from '@/components/WhatsappLogo/WhatsappLogo';
import Footer from '@/layout/footer';
import MobileNavbar from '@/layout/mobileNavbar';
import React from 'react'


export const metadata = {
  title: "Hydrostatic Test Pumps | Pipe Pressure Testing | XTORC",
  description: "High-pressure hydrostatic testing pumps for verifying pipeline, boiler, and pressure vessel integrity. Reliable testing solutions.",
  keywords: ["hydrostatic test pump","hydro testing pump","pipe pressure tester","pipeline integrity testing","high pressure pump"],
  alternates: {
    canonical: "https://xtorcind.com/hydrotest",
  },
  openGraph: {
    url: "https://xtorcind.com/hydrotest",
    title: "Hydrostatic Test Pumps | Pipe Pressure Testing | XTORC",
    description: "High-pressure hydrostatic testing pumps for verifying pipeline, boiler, and pressure vessel integrity. Reliable testing solutions.",
    siteName: "XTORC",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hydrostatic Test Pumps | Pipe Pressure Testing | XTORC",
    description: "High-pressure hydrostatic testing pumps for verifying pipeline, boiler, and pressure vessel integrity. Reliable testing solutions.",
  },
};

const page = () => {
  return (
    <div>
      <WhatsappLogo/>
      <MobileNavbar/>
       <HydroTestPumps/>
        <Footer/>
    </div>
  )
}

export default page;
