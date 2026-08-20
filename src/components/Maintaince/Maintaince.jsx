"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function WebsiteUnderMaintenancePage() {
  const router = useRouter();
  const [isAllowed, setIsAllowed] = useState(false);

  // useEffect(() => {
    // Check if the user was directed here by a genuine 502 server error
    // const hasServerError = typeof window !== "undefined" && sessionStorage.getItem("server_error_502") === "true";

  //   if (!hasServerError) {
  //     // If user directly typed /502 in the URL bar, redirect them to home immediately
  //     router.replace("/");
  //   } else {
  //     setIsAllowed(true);
  //   }
  // }, [router]);

  // Prevent showing the maintenance page if the user directly entered the URL
  // if (!isAllowed) {
  //   return (
  //     <div className="min-h-screen w-full bg-[#000000]" />
  //   );
  // }

  return (
    <div className="min-h-screen w-full bg-[#05070a] text-white flex flex-col justify-between items-center px-4 py-8 sm:px-6 lg:px-8 relative overflow-hidden font-sans select-none">
      {/* Ambient Gradient Background Glow */}
      <div
        aria-hidden="true"
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[360px] bg-red-600/10 blur-[140px] rounded-full pointer-events-none"
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-20 right-1/4 w-[350px] h-[250px] bg-orange-600/5 blur-[120px] rounded-full pointer-events-none"
      />

      {/* Top Header */}
      <header className="w-full max-w-4xl flex items-center justify-between z-10 border-b border-white/[0.06] pb-4">
        <div className="relative w-32 h-10">
          {/* <Image
            src="/xtroc_india.png"
            alt="XTORC"
            fill
            className="object-contain"
            priority
          /> */}
        </div>
      </header>

      {/* Main Center Card */}
      <main className="w-full max-w-lg my-auto py-8 z-10">
        <div className="bg-[#0b0f17]/90 border border-white/[0.08] rounded-3xl p-8 sm:p-11 shadow-[0_20px_50px_rgba(0,0,0,0.8)] backdrop-blur-xl text-center">
          {/* Maintenance Icon Badge */}
          <div className="mx-auto w-16 h-16 rounded-2xl bg-gradient-to-b from-red-500/15 to-red-950/30 border border-red-500/25 flex items-center justify-center mb-6 shadow-inner">
            <svg
              className="w-8 h-8 text-red-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.75}
                d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.75}
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
          </div>

          {/* Main Headline */}
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-3 font-poppins">
            Website Under Maintenance
          </h1>

          {/* Description */}
          <p className="text-neutral-400 text-sm sm:text-base leading-relaxed max-w-md mx-auto">
            We are performing essential system updates and improvements to serve you better. We will be back online shortly.
          </p>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full max-w-4xl text-center text-xs text-neutral-500 pt-4 border-t border-white/[0.06] z-10">
        © {new Date().getFullYear()} XTORC. All rights reserved.
      </footer>
    </div>
  );
}
