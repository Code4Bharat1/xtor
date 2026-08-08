import ChatBoat from "@/components/ChatBoat/ChatBoat";
import ContactPage from "@/components/contact/contact";
import MobileContactPage from "@/components/contact/MobileContact";
import WhatsappLogo from "@/components/WhatsappLogo/WhatsappLogo";
import Footer from "@/layout/footer";
import MobileNavbar from "@/layout/mobileNavbar";
import Navbar from "@/layout/Navbar";


export const metadata = {
  title: "Contact XTORC | Get Industrial Bolting & Machining Quotes",
  description: "Get in touch with XTORC for product sales, rentals, calibration, or custom engineering solutions. Reach our bolting experts today.",
  keywords: ["contact Xtorc","torque wrench quote","industrial tools contact","Navi Mumbai bolting company"],
  alternates: {
    canonical: "https://xtorcind.com/contact",
  },
  openGraph: {
    url: "https://xtorcind.com/contact",
    title: "Contact XTORC | Get Industrial Bolting & Machining Quotes",
    description: "Get in touch with XTORC for product sales, rentals, calibration, or custom engineering solutions. Reach our bolting experts today.",
    siteName: "XTORC",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact XTORC | Get Industrial Bolting & Machining Quotes",
    description: "Get in touch with XTORC for product sales, rentals, calibration, or custom engineering solutions. Reach our bolting experts today.",
  },
};

export default function Page() {
  return (
    <>
      <ContactPage />
      <WhatsappLogo />
      <ChatBoat />
      <Footer />
    </>
  );
}
