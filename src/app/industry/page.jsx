import IndustryPage from "@/components/industry/industry";
import ImageSection from "@/components/industry/ImageSection";
import Footer from "@/layout/footer";
import Navbar from "@/layout/Navbar";
import WhatsappLogo from "@/components/WhatsappLogo/WhatsappLogo";
import ChatBoat from "@/components/ChatBoat/ChatBoat";
import MobileNavbar from "@/layout/mobileNavbar";

export const metadata = {
  title: "Industries We Serve | Xtorc Industrial Tools & Solutions",
  description:
    "Discover the industries Xtorc serves, including oil & gas, power plants, petrochemicals, and heavy engineering. Trusted provider of hydraulic torque wrenches, bolt tensioners, and cold cutting machines.",
  keywords:
    "Xtorc industries, oil and gas tools, power plant equipment, petrochemical solutions, hydraulic torque wrench industry use, bolt tensioner for heavy engineering",
  openGraph: {
    url: "https://xtorcind.com/industry",
    title: "Industries We Serve | Xtorc",
    description:
      "Xtorc provides industrial tools and solutions for oil & gas, power, petrochemical, and engineering sectors. Precision torque tools, cold cutting, and tensioners.",
    siteName: "Xtorc",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Industries We Serve | Xtorc",
    description:
      "Explore the industries where Xtorc delivers solutions: oil & gas, power plants, petrochemicals, and engineering with advanced hydraulic tools.",
  },
};


export default function Page() {
  return (
    <>
    
   
    <MobileNavbar/>
    <IndustryPage/>
    <ImageSection/>
    <WhatsappLogo/>
    <ChatBoat/>
    <Footer/>
    
    </>
  )
}  