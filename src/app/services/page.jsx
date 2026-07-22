import ChatBoat from "@/components/ChatBoat/ChatBoat";
import Services from "@/components/Services/Services";
import OurServices from "@/components/Services/OurServiceMobile";
import OurServicessMobile from "@/components/Services/OurServices";
import WhatsappLogo from "@/components/WhatsappLogo/WhatsappLogo";
import Footer from "@/layout/footer";
import MobileNavbar from "@/layout/mobileNavbar";
import Navbar from "@/layout/Navbar";

export const metadata = {
  title: "Xtorc Services | Hydraulic Tools, Bolt Tensioning & Cold Cutting",
  description:
    "Explore Xtorc’s wide range of services including hydraulic torque wrenches, bolt tensioning, flange spreading, cold cutting, and on-site solutions for industries worldwide.",
  keywords:
    "Xtorc services, hydraulic torque wrench services, bolt tensioning, cold cutting, flange spreading, industrial tool services, onsite services",
  openGraph: {
    url: "https://xtorcind.com/services",
    title: "Xtorc Services | Hydraulic Tools & Onsite Industrial Solutions",
    description:
      "Xtorc offers professional services for hydraulic tools, bolt tensioners, flange spreading, cold cutting, and more across oil & gas, petrochemical, and power industries.",
    siteName: "Xtorc",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Xtorc Services | Hydraulic Tools & Industrial Solutions",
    description:
      "Get professional industrial solutions with Xtorc. From torque wrenches to bolt tensioning and cold cutting, we provide expert services worldwide.",
  },
};

export default function Page() {
  return (
    <>

<MobileNavbar/>
 <Services/>
     <div className="hidden md:block">
          
            <OurServicessMobile/>
            </div>
            <div className="md:hidden">
              <OurServices/>
            </div>
           
         
<WhatsappLogo/>
         <ChatBoat/>
        <Footer/>
   
  
    
    </>
  )
}  



