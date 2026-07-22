import ElectricTorqueWrenches from '@/components/ElectricTorqueWrenches/ElectricTorqueWrenches';
import LinedBox from '@/components/ElectricTorqueWrenches/LinedBox';
import WhatsappLogo from '@/components/WhatsappLogo/WhatsappLogo';
import Footer from '@/layout/footer';
import MobileNavbar from '@/layout/mobileNavbar';
import React from 'react'


export const metadata = {
  title: "Industrial Electric Torque Wrenches | Controlled Bolting | XTORC",
  description: "Explore XTORC's range of heavy-duty electric torque wrenches. Engineered for high performance, reliability, and precision bolting.",
  keywords: ["electric torque wrenches","heavy-duty electric wrench","digital torque wrench","industrial controlled bolting"],
  alternates: {
    canonical: "https://xtorcind.com/electrictorquewrenches",
  },
  openGraph: {
    url: "https://xtorcind.com/electrictorquewrenches",
    title: "Industrial Electric Torque Wrenches | Controlled Bolting | XTORC",
    description: "Explore XTORC's range of heavy-duty electric torque wrenches. Engineered for high performance, reliability, and precision bolting.",
    siteName: "XTORC",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Industrial Electric Torque Wrenches | Controlled Bolting | XTORC",
    description: "Explore XTORC's range of heavy-duty electric torque wrenches. Engineered for high performance, reliability, and precision bolting.",
  },
};

const page = () => {
  return (
    <div>
      <WhatsappLogo/>
      <MobileNavbar/>
        <ElectricTorqueWrenches/>
        <LinedBox/>
        <Footer/>
    </div>
  )
}
export default page;