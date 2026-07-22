import CasingCutter from '@/components/CasingCutter/CassingCutter';
import WhatsappLogo from '@/components/WhatsappLogo/WhatsappLogo';
import Footer from '@/layout/footer';
import MobileNavbar from '@/layout/mobileNavbar';
import React from 'react'


export const metadata = {
  title: "Hydraulic Casing Cutter Machines | Offshore & Onshore Piping | XTORC",
  description: "Industrial casing cutters for offshore decommissioning and pipe cutting. Safe, spark-free cutting under critical environments.",
  keywords: ["casing cutter","hydraulic casing cutter","offshore pipe cutting","pipe decommissioning tool","spark-free casing cutting"],
  alternates: {
    canonical: "https://xtorcind.com/casingcutter",
  },
  openGraph: {
    url: "https://xtorcind.com/casingcutter",
    title: "Hydraulic Casing Cutter Machines | Offshore & Onshore Piping | XTORC",
    description: "Industrial casing cutters for offshore decommissioning and pipe cutting. Safe, spark-free cutting under critical environments.",
    siteName: "XTORC",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hydraulic Casing Cutter Machines | Offshore & Onshore Piping | XTORC",
    description: "Industrial casing cutters for offshore decommissioning and pipe cutting. Safe, spark-free cutting under critical environments.",
  },
};

const page = () => {
  return (
    <div>
      <WhatsappLogo/>
    <MobileNavbar/>
    <CasingCutter/>
        <Footer/>
    </div>
  )
}

export default page;
