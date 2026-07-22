import BevellingMachine from '@/components/BevellingMachine/BevellingMachine';
import Footer from '@/layout/footer';
import MobileNavbar from '@/layout/mobileNavbar';
import React from 'react'


export const metadata = {
  title: "ID Pipe Bevelling Machines | Portable Pipe Bevelers | XTORC",
  description: "High-performance ID-mounted pipe bevelling machines by XTORC. Ideal for pre-weld pipe edge preparation in refinery and construction pipelines.",
  keywords: ["pipe bevelling machine","ID pipe beveler","portable pipe beveller","weld preparation tool","industrial pipe bevelling"],
  alternates: {
    canonical: "https://xtorcind.com/bevellingmachine",
  },
  openGraph: {
    url: "https://xtorcind.com/bevellingmachine",
    title: "ID Pipe Bevelling Machines | Portable Pipe Bevelers | XTORC",
    description: "High-performance ID-mounted pipe bevelling machines by XTORC. Ideal for pre-weld pipe edge preparation in refinery and construction pipelines.",
    siteName: "XTORC",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ID Pipe Bevelling Machines | Portable Pipe Bevelers | XTORC",
    description: "High-performance ID-mounted pipe bevelling machines by XTORC. Ideal for pre-weld pipe edge preparation in refinery and construction pipelines.",
  },
};

const page = () => {
  return (
    <div>
      <MobileNavbar/>
        <BevellingMachine/>
        <Footer/>
        </div>
  )
}
export default page;
