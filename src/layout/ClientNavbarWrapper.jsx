"use client";
import React from "react";
import { usePathname } from "next/navigation";
import Navbar from "./Navbar";

export default function ClientNavbarWrapper({ children }) {
  const pathname = usePathname();
  const isAdmin = pathname?.startsWith("/admin");

  if (isAdmin) {
    return <>{children}</>;
  }

  return (
    <>
      {/* <Navbar /> */}
      <div className="w-full overflow-x-hidden">
        {children}
      </div>
    </>
  );
}
