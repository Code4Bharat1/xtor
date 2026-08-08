"use client";
import React from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  LayoutDashboard,
  MessageSquareQuote,
  LogOut,
  ChevronRight
} from "lucide-react";

export default function AdminSidebar() {
  const pathname = usePathname();
  const router = useRouter();

  const handleLogout = () => {
    if (typeof window !== "undefined") {
      localStorage.removeItem("xtorc_admin_auth");
      localStorage.removeItem("xtorc_admin_token");
      localStorage.removeItem("xtorc_admin_user");
    }
    router.push("/admin/login");
  };

  const navItems = [
    {
      name: "Dashboard",
      path: "/admin",
      exact: true,
      icon: LayoutDashboard,
    },
    {
      name: "Testimonials Review",
      path: "/admin/testimonials",
      exact: false,
      icon: MessageSquareQuote,
    },
  ];

  const isActive = (item) => {
    if (item.exact) return pathname === item.path;
    return pathname.startsWith(item.path);
  };

  return (
    <aside className="w-64 bg-zinc-950 border-r border-zinc-800 text-zinc-300 flex flex-col justify-between h-screen sticky top-0 z-40 select-none">
      {/* Brand Header with XTORC Logo */}
      <div>
        <div className="p-6 border-b border-zinc-800/80 flex items-center justify-start">
          <img src="/xtroc.png" alt="XTORC Logo" className="h-8 sm:h-9 w-auto object-contain" />
        </div>

        {/* Navigation Section */}
        <div className="px-4 py-6">
          <p className="text-[10px] font-bold uppercase tracking-wider text-zinc-500 px-3 mb-3">
            Main Menu
          </p>
          <nav className="space-y-1.5">
            {navItems.map((item) => {
              const Icon = item.icon;
              const active = isActive(item);
              return (
                <Link
                  key={item.path}
                  href={item.path}
                  className={`flex items-center justify-between px-3.5 py-3 rounded-xl text-xs font-semibold transition-all group ${
                    active
                      ? "bg-red-600 text-white shadow-lg shadow-red-600/25"
                      : "text-zinc-400 hover:text-white hover:bg-zinc-900"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Icon className={`w-4 h-4 ${active ? "text-white" : "text-zinc-500 group-hover:text-zinc-300"}`} />
                    <span>{item.name}</span>
                  </div>
                  {active && <ChevronRight className="w-3.5 h-3.5 text-white/80" />}
                </Link>
              );
            })}
          </nav>
        </div>
      </div>

      {/* Footer & Actions (Sign Out Only) */}
      <div className="p-4 border-t border-zinc-900">
        <button
          onClick={handleLogout}
          className="flex items-center justify-center gap-2 w-full px-3 py-2.5 rounded-xl text-xs font-semibold text-red-400 hover:text-red-300 bg-red-950/40 hover:bg-red-950/80 border border-red-900/40 transition cursor-pointer"
        >
          <LogOut className="w-3.5 h-3.5" />
          <span>Sign Out Admin</span>
        </button>
      </div>
    </aside>
  );
}
