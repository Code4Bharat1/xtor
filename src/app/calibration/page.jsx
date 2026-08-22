import Calibration from "@/components/Services_main_dir/Calibration/Calibration";
import WhatsappLogo from "@/components/WhatsappLogo/WhatsappLogo";
import Footer from "@/layout/footer";
import MobileNavbar from "@/layout/mobileNavbar";
import React from "react";

export const metadata = {
  title: "Hydraulic Tools Calibration & Repair Services | XTORC",
  description: "Accredited calibration and certification services for hydraulic torque wrenches, tensioners, and high-pressure equipment.",
  keywords: ["hydraulic tools calibration", "torque calibration services", "hydraulic wrench calibration", "certified calibration lab"],
  alternates: {
    canonical: "https://xtorcind.com/calibration",
  },
  openGraph: {
    url: "https://xtorcind.com/calibration",
    title: "Hydraulic Tools Calibration & Repair Services | XTORC",
    description: "Accredited calibration and certification services for hydraulic torque wrenches, tensioners, and high-pressure equipment.",
    siteName: "XTORC",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hydraulic Tools Calibration & Repair Services | XTORC",
    description: "Accredited calibration and certification services for hydraulic torque wrenches, tensioners, and high-pressure equipment.",
  },
};

const page = () => {
  return (
    <div>
      <WhatsappLogo />
      <MobileNavbar />
      <Calibration />
      <Footer />
    </div>
  );
};

export default page;
