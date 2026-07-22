
import HotTaping from '@/components/Services_main_dir/Hot_Tapping/Hot_Tapping';
import WhatsappLogo from '@/components/WhatsappLogo/WhatsappLogo';
import Footer from '@/layout/footer';
import MobileNavbar from '@/layout/mobileNavbar';
import React from 'react'


export const metadata = {
  title: "Hot Tapping & Line Stopping Services | Pipeline Machining | XTORC",
  description: "Safe pipeline hot tapping and line plugging services. Perform modifications without interrupting pipeline flow or shutting down plants.",
  keywords: ["hot tapping services","pipeline hot tapping","line stopping service","under pressure tapping","bypass pipeline drilling"],
  alternates: {
    canonical: "https://xtorcind.com/hottapping",
  },
  openGraph: {
    url: "https://xtorcind.com/hottapping",
    title: "Hot Tapping & Line Stopping Services | Pipeline Machining | XTORC",
    description: "Safe pipeline hot tapping and line plugging services. Perform modifications without interrupting pipeline flow or shutting down plants.",
    siteName: "XTORC",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hot Tapping & Line Stopping Services | Pipeline Machining | XTORC",
    description: "Safe pipeline hot tapping and line plugging services. Perform modifications without interrupting pipeline flow or shutting down plants.",
  },
};

const page = () => {
  return (
    <div>
      <WhatsappLogo/>
      <MobileNavbar/>
     <HotTaping/>
        <Footer/>
    </div>
  )
}

export default page;
