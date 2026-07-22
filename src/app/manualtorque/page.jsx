import ManualTorque from '@/components/ManualTorque/ManualTorque';
import WhatsappLogo from '@/components/WhatsappLogo/WhatsappLogo';
import Footer from '@/layout/footer';
import MobileNavbar from '@/layout/mobileNavbar';
import React from 'react'


export const metadata = {
  title: "Industrial Manual Torque Wrenches & Multipliers | XTORC",
  description: "Heavy-duty manual torque wrenches and multiplier tools. High torque application with human effort for controlled bolting.",
  keywords: ["manual torque wrench","torque multiplier","industrial torque wrench","manual bolting tools"],
  alternates: {
    canonical: "https://xtorcind.com/manualtorque",
  },
  openGraph: {
    url: "https://xtorcind.com/manualtorque",
    title: "Industrial Manual Torque Wrenches & Multipliers | XTORC",
    description: "Heavy-duty manual torque wrenches and multiplier tools. High torque application with human effort for controlled bolting.",
    siteName: "XTORC",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Industrial Manual Torque Wrenches & Multipliers | XTORC",
    description: "Heavy-duty manual torque wrenches and multiplier tools. High torque application with human effort for controlled bolting.",
  },
};

const page = () => {
  return (
    <div>
      <WhatsappLogo/>
      <MobileNavbar/>
    <ManualTorque/>
        <Footer/>
    </div>
  )
}

export default page;
