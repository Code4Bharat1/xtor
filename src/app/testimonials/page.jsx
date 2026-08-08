import ChatBoat from "@/components/ChatBoat/ChatBoat";
import TestimonialsSection from "@/components/Testimonials/Testimonials";
import WhatsappLogo from "@/components/WhatsappLogo/WhatsappLogo";
import Footer from "@/layout/footer";
import MobileNavbar from "@/layout/mobileNavbar";

export const metadata = {
  title: "Client Testimonials & Reviews | Xtorc Industrial Tools",
  description:
    "Read what our industry partners say about Xtorc hydraulic torque wrenches, bolt tensioners, and cold cutting solutions. Post your feedback and reviews.",
  keywords:
    "Xtorc testimonials, Xtorc reviews, industrial tool client feedback, hydraulic torque wrench reviews, Xtorc partner reviews",
  openGraph: {
    url: "https://xtorcind.com/testimonials",
    title: "Client Testimonials & Reviews | Xtorc",
    description:
      "Explore client feedback and share your experience with Xtorc industrial tools and engineering solutions.",
    siteName: "Xtorc",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Client Testimonials & Reviews | Xtorc",
    description:
      "Read partner reviews and post your feedback on Xtorc industrial solutions.",
  },
};

export default function Page() {
  return (
    <>
      <MobileNavbar />
      <TestimonialsSection />
      <WhatsappLogo />
      <ChatBoat />
      <Footer />
    </>
  );
}
