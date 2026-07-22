import WhatsappLogo from '@/components/WhatsappLogo/WhatsappLogo';
import Xap700 from '@/components/XAP700/Xap700';
import Footer from '@/layout/footer';
import MobileNavbar from '@/layout/mobileNavbar';
import React from 'react'


export const metadata = {
  title: "XAP700 Pneumatic Torque Wrench Pump | 700 Bar | XTORC",
  description: "Air-driven 700 bar hydraulic torque pump. Engineered for heavy-duty continuous industrial bolting applications.",
  keywords: ["XAP700 pump","pneumatic torque pump","700 bar torque wrench pump","air driven hydraulic pump"],
  alternates: {
    canonical: "https://xtorcind.com/xap700",
  },
  openGraph: {
    url: "https://xtorcind.com/xap700",
    title: "XAP700 Pneumatic Torque Wrench Pump | 700 Bar | XTORC",
    description: "Air-driven 700 bar hydraulic torque pump. Engineered for heavy-duty continuous industrial bolting applications.",
    siteName: "XTORC",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "XAP700 Pneumatic Torque Wrench Pump | 700 Bar | XTORC",
    description: "Air-driven 700 bar hydraulic torque pump. Engineered for heavy-duty continuous industrial bolting applications.",
  },
};

const page = () => {
  return (
    <div>
      <WhatsappLogo/>
      <MobileNavbar/>
       <Xap700/>
        <Footer/>
    </div>
  )
}
export default page;
