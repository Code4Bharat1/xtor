import BoltTorquing from '@/components/Services_main_dir/Bolt_Torquing/Bolt_Torquing';
import WhatsappLogo from '@/components/WhatsappLogo/WhatsappLogo';
import Footer from '@/layout/footer';
import MobileNavbar from '@/layout/mobileNavbar';
import React from 'react'


export const metadata = {
  title: "Industrial Bolt Torquing & Tensioning Services | XTORC",
  description: "Professional on-site bolt torquing and tensioning services. Precision bolting solutions for pipelines, heat exchangers, and heavy structures.",
  keywords: ["bolt torquing services","bolt tensioning services","controlled bolting services","on-site bolting solutions","pipeline joint assembly"],
  alternates: {
    canonical: "https://xtorcind.com/bolttorquing",
  },
  openGraph: {
    url: "https://xtorcind.com/bolttorquing",
    title: "Industrial Bolt Torquing & Tensioning Services | XTORC",
    description: "Professional on-site bolt torquing and tensioning services. Precision bolting solutions for pipelines, heat exchangers, and heavy structures.",
    siteName: "XTORC",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Industrial Bolt Torquing & Tensioning Services | XTORC",
    description: "Professional on-site bolt torquing and tensioning services. Precision bolting solutions for pipelines, heat exchangers, and heavy structures.",
  },
};

const page = () => {
  return (
    <div>
      <WhatsappLogo/>
      <MobileNavbar/>
      <BoltTorquing/>
        <Footer/>
    </div>
  )
}

export default page;
