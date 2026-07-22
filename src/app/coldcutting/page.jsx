
import ColdCutting from '@/components/Services_main_dir/Cold_Cutting/Cold_Cutting';
import WhatsappLogo from '@/components/WhatsappLogo/WhatsappLogo';
import Footer from '@/layout/footer';
import MobileNavbar from '@/layout/mobileNavbar';
import React from 'react'


export const metadata = {
  title: "Cold Cutting & Pipe Bevelling Services | On-Site Machining | XTORC",
  description: "On-site cold cutting and pipe bevelling services by XTORC. Safe, spark-free cutting solutions for pipelines and process piping.",
  keywords: ["cold cutting services","pipe cutting services","on-site cold cutting","spark-free pipe cutting","refinery pipe cutting"],
  alternates: {
    canonical: "https://xtorcind.com/coldcutting",
  },
  openGraph: {
    url: "https://xtorcind.com/coldcutting",
    title: "Cold Cutting & Pipe Bevelling Services | On-Site Machining | XTORC",
    description: "On-site cold cutting and pipe bevelling services by XTORC. Safe, spark-free cutting solutions for pipelines and process piping.",
    siteName: "XTORC",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cold Cutting & Pipe Bevelling Services | On-Site Machining | XTORC",
    description: "On-site cold cutting and pipe bevelling services by XTORC. Safe, spark-free cutting solutions for pipelines and process piping.",
  },
};

const page = () => {
  return (
    <div>
      <WhatsappLogo/>
      <MobileNavbar/>
      <ColdCutting/>
        <Footer/>
    </div>
  )
}

export default page;
