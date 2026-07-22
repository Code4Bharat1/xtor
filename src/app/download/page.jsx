import ChatBoat from '@/components/ChatBoat/ChatBoat';
import DownloadSection from '@/components/Download/Download';
import WhatsappLogo from '@/components/WhatsappLogo/WhatsappLogo';
import Footer from '@/layout/footer';
import MobileNavbar from '@/layout/mobileNavbar';
import Navbar from '@/layout/Navbar';

export const metadata = {
  title: "Xtorc | Download Catalogues & Product Resources",
  description:
    "Download product catalogues, brochures, and technical resources from Xtorc. Explore hydraulic torque wrenches, bolt tensioners, cold cutting machines, and more.",
  keywords:
    "Xtorc downloads, product catalogue, hydraulic torque wrench pdf, bolt tensioner brochure, cold cutting machine manual",
  openGraph: {
    url: "https://xtorcind.com/download",
    title: "Download Resources | Xtorc",
    description:
      "Get product catalogues, brochures, and manuals for Xtorc industrial tools including torque wrenches, tensioners, and cold cutting machines.",
    siteName: "Xtorc",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Download Resources | Xtorc",
    description:
      "Download catalogues and resources for Xtorc industrial tools like hydraulic torque wrenches, bolt tensioners, and cold cutting machines.",
  },
};


export default function Page() {
  return (
    <>  
    
    <MobileNavbar/>   
    <DownloadSection/>
    <WhatsappLogo/>
    <ChatBoat/>
    <Footer/>   
    </>
  )
}