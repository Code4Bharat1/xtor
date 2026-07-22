import Reducer from '@/components/Reducers/Reducer';
import WhatsappLogo from '@/components/WhatsappLogo/WhatsappLogo';
import Footer from '@/layout/footer';
import MobileNavbar from '@/layout/mobileNavbar';
import React from 'react'


export const metadata = {
  title: "Impact Reducers & Adapters | Heavy-Duty Sockets | XTORC",
  description: "High-strength impact adapters and reducers. Manufactured from premium alloy steel for heavy-duty industrial impact operations.",
  keywords: ["impact reducers","socket adapters","impact adapter","industrial impact socket tools"],
  alternates: {
    canonical: "https://xtorcind.com/reducer",
  },
  openGraph: {
    url: "https://xtorcind.com/reducer",
    title: "Impact Reducers & Adapters | Heavy-Duty Sockets | XTORC",
    description: "High-strength impact adapters and reducers. Manufactured from premium alloy steel for heavy-duty industrial impact operations.",
    siteName: "XTORC",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Impact Reducers & Adapters | Heavy-Duty Sockets | XTORC",
    description: "High-strength impact adapters and reducers. Manufactured from premium alloy steel for heavy-duty industrial impact operations.",
  },
};

const page = () => {
  return (
    <div>
      <WhatsappLogo/>
      <MobileNavbar/>
        <Reducer/>
        <Footer/>
    </div>
  )
}
export default page;
