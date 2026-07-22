import SquareDrive from '@/components/SquareDrive/SquareDrive';
import Footer from '@/layout/footer';
import MobileNavbar from '@/layout/mobileNavbar';
import React from 'react'

export const metadata = {
  title: "Square Drive Hydraulic Torque Wrenches | Industrial Bolting | XTORC",
  description: "High-performance square drive hydraulic wrenches. Lightweight, compact, and compatible with standard impact sockets.",
  keywords: ["square drive hydraulic torque wrench","square drive wrench","hydraulic bolting wrench","high strength square drive"],
  alternates: {
    canonical: "https://xtorcind.com/squaredrive",
  },
  openGraph: {
    url: "https://xtorcind.com/squaredrive",
    title: "Square Drive Hydraulic Torque Wrenches | Industrial Bolting | XTORC",
    description: "High-performance square drive hydraulic wrenches. Lightweight, compact, and compatible with standard impact sockets.",
    siteName: "XTORC",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Square Drive Hydraulic Torque Wrenches | Industrial Bolting | XTORC",
    description: "High-performance square drive hydraulic wrenches. Lightweight, compact, and compatible with standard impact sockets.",
  },
};

const page = () => {
  return (
    <div>
      <MobileNavbar/>
        <SquareDrive/>
        <Footer/>
    </div>
  )
}
export default page;