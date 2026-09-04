import XFR from "@/components/XFR/XFR";
import Footer from "@/layout/footer";
import MobileNavbar from "@/layout/mobileNavbar";
import React from "react";

export const metadata = {
  title: "XFR Series Hydraulic Torque Wrenches | Industrial Bolting | XTORC",
  description: "High-performance XFR Series fast-reaction hydraulic torque wrenches. Precision bolting, lightweight aerospace alloy, and ±3% torque repeatability.",
  keywords: [
    "XFR series hydraulic torque wrench",
    "XFR torque wrench",
    "fast reaction hydraulic torque wrench",
    "industrial bolting tools",
    "XTORC XFR",
  ],
  alternates: {
    canonical: "https://xtorcind.com/xfr",
  },
  openGraph: {
    url: "https://xtorcind.com/xfr",
    title: "XFR Series Hydraulic Torque Wrenches | Industrial Bolting | XTORC",
    description: "High-performance XFR Series fast-reaction hydraulic torque wrenches. Precision bolting, lightweight aerospace alloy, and ±3% torque repeatability.",
    siteName: "XTORC",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "XFR Series Hydraulic Torque Wrenches | Industrial Bolting | XTORC",
    description: "High-performance XFR Series fast-reaction hydraulic torque wrenches. Precision bolting, lightweight aerospace alloy, and ±3% torque repeatability.",
  },
};

const Page = () => {
  return (
    <div>
      <MobileNavbar />
      <XFR />
      <Footer />
    </div>
  );
};

export default Page;