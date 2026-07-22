import ChatBoat from "@/components/ChatBoat/ChatBoat";
import CareersSection from "@/components/JoinUs/JoinUs";
import WhatsappLogo from "@/components/WhatsappLogo/WhatsappLogo";
import Footer from "@/layout/footer";
import MobileNavbar from "@/layout/mobileNavbar";
import Navbar from "@/layout/Navbar";

export const metadata = {
  title: "Careers at Xtorc | Join Our Team of Industrial Tool Experts",
  description:
    "Explore career opportunities at Xtorc. Join a leading provider of hydraulic torque wrenches, bolt tensioners, and cold cutting solutions. Build your future with us.",
  keywords:
    "Xtorc careers, join Xtorc, industrial tools jobs, hydraulic tools company jobs, mechanical engineering careers, torque wrench company hiring",
  openGraph: {
    url: "https://xtorcind.com/joinus",
    title: "Careers at Xtorc | Join Our Team",
    description:
      "Looking for careers in industrial tools and solutions? Join Xtorc and be part of a team delivering hydraulic torque wrenches, tensioners, and cold cutting machines worldwide.",
    siteName: "Xtorc",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Careers at Xtorc | Join Our Team",
    description:
      "Discover career opportunities at Xtorc. Be part of a trusted industrial tools company serving oil & gas, power, and petrochemical industries.",
  },
};

export default function Page() {
  return (
    <>
    

    <MobileNavbar/>
 <CareersSection/>
 <WhatsappLogo/>
 <ChatBoat/>
    <Footer/>
    
    </>
  )
}  