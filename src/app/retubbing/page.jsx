
import ReTubbing from '@/components/Services_main_dir/Re_Tubbing/Re_Tubbing';
import WhatsappLogo from '@/components/WhatsappLogo/WhatsappLogo';
import Footer from '@/layout/footer';
import MobileNavbar from '@/layout/mobileNavbar';
import React from 'react'


export const metadata = {
  title: "Boiler & Heat Exchanger Re-Tubing Services | XTORC",
  description: "Specialized on-site re-tubing, tube extraction, bundle pulling, and hydro-testing services for industrial boilers and heat exchangers.",
  keywords: ["heat exchanger retubing", "boiler retubing services", "tube bundle extraction", "condenser retubing"],
  alternates: {
    canonical: "https://xtorcind.com/retubbing",
  },
  openGraph: {
    url: "https://xtorcind.com/retubbing",
    title: "Boiler & Heat Exchanger Re-Tubing Services | XTORC",
    description: "Specialized on-site re-tubing, tube extraction, bundle pulling, and hydro-testing services for industrial boilers and heat exchangers.",
    siteName: "XTORC",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Boiler & Heat Exchanger Re-Tubing Services | XTORC",
    description: "Specialized on-site re-tubing, tube extraction, bundle pulling, and hydro-testing services for industrial boilers and heat exchangers.",
  },
};

const page = () => {
  return (
    <div>
      <WhatsappLogo/>
      <MobileNavbar/>
      <ReTubbing/>
        <Footer/>
    </div>
  )
}

export default page;
