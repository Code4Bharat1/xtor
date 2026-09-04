import XSL from "@/components/XSL/XSL";
import Footer from "@/layout/footer";
import MobileNavbar from "@/layout/mobileNavbar";
import React from "react";

export const metadata = {
  title: "XSL Series Slim Line Hydraulic Torque Wrenches | Low Clearance Bolting | XTORC",
  description: "High-performance XSL Series ultra-low profile slim line hydraulic torque wrenches for tight clearances, narrow flanges, and precision torque control.",
  keywords: [
    "XSL series hydraulic torque wrench",
    "XSL torque wrench",
    "low clearance hydraulic torque wrench",
    "slim line hydraulic wrench",
    "XTORC XSL",
  ],
  alternates: {
    canonical: "https://xtorcind.com/xsl",
  },
  openGraph: {
    url: "https://xtorcind.com/xsl",
    title: "XSL Series Slim Line Hydraulic Torque Wrenches | Low Clearance Bolting | XTORC",
    description: "High-performance XSL Series ultra-low profile slim line hydraulic torque wrenches for tight clearances, narrow flanges, and precision torque control.",
    siteName: "XTORC",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "XSL Series Slim Line Hydraulic Torque Wrenches | Low Clearance Bolting | XTORC",
    description: "High-performance XSL Series ultra-low profile slim line hydraulic torque wrenches for tight clearances, narrow flanges, and precision torque control.",
  },
};

const Page = () => {
  return (
    <div>
      <MobileNavbar />
      <XSL />
      <Footer />
    </div>
  );
};

export default Page;