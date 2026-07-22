import TopSideBolt from '@/components/TopSideBolt/TopSideBolt';
import Footer from '@/layout/footer';
import MobileNavbar from '@/layout/mobileNavbar';
import React from 'react'


export const metadata = {
  title: "Topside Bolt Tensioners | Flange Bolt Tensioning | XTORC",
  description: "High-pressure topside hydraulic bolt tensioners. Ensure leak-free joint assembly on pipelines, heat exchangers, and vessels.",
  keywords: ["topside bolt tensioner","topside tensioning","pipeline flange tensioner","high pressure bolt tensioning"],
  alternates: {
    canonical: "https://xtorcind.com/topsidebolt",
  },
  openGraph: {
    url: "https://xtorcind.com/topsidebolt",
    title: "Topside Bolt Tensioners | Flange Bolt Tensioning | XTORC",
    description: "High-pressure topside hydraulic bolt tensioners. Ensure leak-free joint assembly on pipelines, heat exchangers, and vessels.",
    siteName: "XTORC",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Topside Bolt Tensioners | Flange Bolt Tensioning | XTORC",
    description: "High-pressure topside hydraulic bolt tensioners. Ensure leak-free joint assembly on pipelines, heat exchangers, and vessels.",
  },
};

const page = () => {
  return (
    <div>
      <MobileNavbar/>
        <TopSideBolt/>
        <Footer/>
    </div>
  )
}
export default page;
