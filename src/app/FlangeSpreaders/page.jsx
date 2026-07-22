import ChatBoat from "@/components/ChatBoat/ChatBoat";
import ContactPage from "@/components/contact/contact";
import MobileContactPage from "@/components/contact/MobileContact";
import FlangeSpreaders from "@/components/FlangeSpreaders/FlangeSpreaders";
import FlangeSpreadersmobile from "@/components/FlangeSpreaders/mobileView";
import WhatsappLogo from "@/components/WhatsappLogo/WhatsappLogo";
import Footer from "@/layout/footer";
import MobileNavbar from "@/layout/mobileNavbar";
import Navbar from "@/layout/Navbar";


export const metadata = {
  title: "Hydraulic & Manual Flange Spreaders | Pipe Joint Maintenance | XTORC",
  description: "Browse XTORC's range of hydraulic and manual flange spreaders designed for safe, fast pipe joint separation and maintenance.",
  keywords: ["flange spreaders","hydraulic flange spreader","mechanical flange spreader","flange separation tool","pipe maintenance tools"],
  alternates: {
    canonical: "https://xtorcind.com/FlangeSpreaders",
  },
  openGraph: {
    url: "https://xtorcind.com/FlangeSpreaders",
    title: "Hydraulic & Manual Flange Spreaders | Pipe Joint Maintenance | XTORC",
    description: "Browse XTORC's range of hydraulic and manual flange spreaders designed for safe, fast pipe joint separation and maintenance.",
    siteName: "XTORC",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hydraulic & Manual Flange Spreaders | Pipe Joint Maintenance | XTORC",
    description: "Browse XTORC's range of hydraulic and manual flange spreaders designed for safe, fast pipe joint separation and maintenance.",
  },
};

export default function Page() {
  return (
    <>

 
 <WhatsappLogo/>
 <MobileNavbar/>
     <div className="hidden md:block">
              <FlangeSpreaders />
            </div>
            <div className="md:hidden">
              <FlangeSpreadersmobile />
            </div>
           
         

   
    <Footer/>
    
    </>
  )
}  


