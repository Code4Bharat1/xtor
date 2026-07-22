import SpringReturnBolt from '@/components/SpringReturnBolt/SpringReturnBolt';
import Footer from '@/layout/footer';
import MobileNavbar from '@/layout/mobileNavbar';
import React from 'react'


export const metadata = {
  title: "Spring Return Bolt Tensioners | Rapid Cycle Preloading | XTORC",
  description: "High-efficiency spring return bolt tensioners. Automatic piston retraction reduces operation cycle time for fast pipe flange tensioning.",
  keywords: ["spring return bolt tensioner","auto return tensioner","high speed bolt tensioning","quick return tensioner"],
  alternates: {
    canonical: "https://xtorcind.com/springreturnbolt",
  },
  openGraph: {
    url: "https://xtorcind.com/springreturnbolt",
    title: "Spring Return Bolt Tensioners | Rapid Cycle Preloading | XTORC",
    description: "High-efficiency spring return bolt tensioners. Automatic piston retraction reduces operation cycle time for fast pipe flange tensioning.",
    siteName: "XTORC",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Spring Return Bolt Tensioners | Rapid Cycle Preloading | XTORC",
    description: "High-efficiency spring return bolt tensioners. Automatic piston retraction reduces operation cycle time for fast pipe flange tensioning.",
  },
};

const page = () => {
  return (
    <div>
      <MobileNavbar/>
        <SpringReturnBolt/>
        <Footer/>
    </div>
  )
}
export default page;
