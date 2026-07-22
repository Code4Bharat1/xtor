import HexDrive from '@/components/HexDrive/HexDrive';
import Footer from '@/layout/footer';
import MobileNavbar from '@/layout/mobileNavbar';
import React from 'react'


export const metadata = {
  title: "Low Profile Hex Drive Hydraulic Torque Wrenches | XTORC",
  description: "Hex drive low-profile hydraulic torque wrenches for tight workspaces. High-strength design for maximum torque accuracy.",
  keywords: ["hex drive torque wrench","low profile hydraulic wrench","hex cassette torque wrench","tight clearance bolting"],
  alternates: {
    canonical: "https://xtorcind.com/hexdrive",
  },
  openGraph: {
    url: "https://xtorcind.com/hexdrive",
    title: "Low Profile Hex Drive Hydraulic Torque Wrenches | XTORC",
    description: "Hex drive low-profile hydraulic torque wrenches for tight workspaces. High-strength design for maximum torque accuracy.",
    siteName: "XTORC",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Low Profile Hex Drive Hydraulic Torque Wrenches | XTORC",
    description: "Hex drive low-profile hydraulic torque wrenches for tight workspaces. High-strength design for maximum torque accuracy.",
  },
};

const page = () => {
  return (
    <div>
      <MobileNavbar/>
        <HexDrive/>
        <Footer/>
    </div>
  )
}
export default page;
