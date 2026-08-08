"use client";
import React from "react";
import { usePathname } from "next/navigation";
import Navbar from "./Navbar";
import FloatingLogo from "./FloatingLogo";

export default function ClientNavbarWrapper({ children }) {
  const pathname = usePathname();
  const isAdmin = pathname?.startsWith("/admin");

  if (isAdmin) {
    return <>{children}</>;
  }

  return (
    <>
      <FloatingLogo />
      <Navbar />
      <div className="max-w-[1100px] mx-auto w-full overflow-hidden">
        {children}
      </div>
    </>
  );
}
