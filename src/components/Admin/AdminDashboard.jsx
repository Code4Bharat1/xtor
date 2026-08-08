"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  MessageSquareQuote,
  CheckCircle2,
  Clock,
  Star,
  ArrowRight,
  TrendingUp,
  Building2,
  PlusCircle
} from "lucide-react";

export default function AdminDashboard() {
  const stats = [
    {
      label: "Total Testimonials",
      value: "0",
      change: "0 this month",
      icon: MessageSquareQuote,
      color: "text-amber-400",
      bg: "bg-amber-950/40 border-amber-800/40",
    },
    {
      label: "Approved & Live",
      value: "0",
      change: "Ready for live data",
      icon: CheckCircle2,
      color: "text-green-400",
      bg: "bg-green-950/40 border-green-800/40",
    },
    {
      label: "Pending Moderation",
      value: "0",
      change: "No pending reviews",
      icon: Clock,
      color: "text-red-400",
      bg: "bg-red-950/40 border-red-800/40",
    },
    {
      label: "Average Rating",
      value: "0.0 ★",
      change: "No ratings yet",
      icon: Star,
      color: "text-amber-400",
      bg: "bg-amber-950/40 border-amber-800/40",
    },
  ];

  const sectorDistribution = [
    { name: "Oil & Gas Refineries", count: 0, percentage: 0 },
    { name: "Offshore Engineering", count: 0, percentage: 0 },
    { name: "Petrochemicals", count: 0, percentage: 0 },
    { name: "Thermal Power & Energy", count: 0, percentage: 0 },
  ];

  return (
    <div className="space-y-8 max-w-7xl mx-auto">
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-zinc-900 to-zinc-950 p-6 sm:p-8 rounded-3xl border border-zinc-800 shadow-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative overflow-hidden">
        <div className="space-y-2 relative z-10">
          <span className="text-xs font-bold text-red-500 uppercase tracking-widest bg-red-950/60 border border-red-800/40 px-3 py-1 rounded-full">
            XTORC Control Panel
          </span>
          <h1 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Welcome back, System Admin
          </h1>
          <p className="text-xs sm:text-sm text-zinc-400 max-w-xl">
            Monitor client review submissions, verify testimonials across industrial sectors, and manage public feed moderation.
          </p>
        </div>

        <Link
          href="/admin/testimonials"
          className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-bold text-xs sm:text-sm px-6 py-3.5 rounded-xl shadow-lg shadow-red-600/30 transition flex items-center gap-2 cursor-pointer flex-shrink-0 relative z-10"
        >
          <span>Manage Testimonials</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {stats.map((stat, idx) => {
          const Icon = stat.icon;
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.4 }}
              className="bg-zinc-950 border border-zinc-800/80 p-5 rounded-2xl flex flex-col justify-between hover:border-zinc-700 transition shadow-lg"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-semibold text-zinc-400">{stat.label}</span>
                <div className={`p-2.5 rounded-xl border ${stat.bg}`}>
                  <Icon className={`w-4 h-4 ${stat.color}`} />
                </div>
              </div>

              <div>
                <span className="text-2xl sm:text-3xl font-bold text-white tracking-tight block">
                  {stat.value}
                </span>
                <span className="text-[11px] text-zinc-500 font-medium mt-1 block">
                  {stat.change}
                </span>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Analytics & Management Quick Link Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Sector Analytics Progress */}
        <div className="lg:col-span-2 bg-zinc-950 border border-zinc-800 p-6 rounded-3xl space-y-6">
          <div className="flex items-center justify-between border-b border-zinc-900 pb-4">
            <div>
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <Building2 className="w-5 h-5 text-red-500" />
                Industry Sector Distribution
              </h3>
              <p className="text-xs text-zinc-400 mt-0.5">Testimonials grouped by industrial application</p>
            </div>
            <span className="text-xs font-semibold text-zinc-500">4 Active Sectors</span>
          </div>

          <div className="space-y-4">
            {sectorDistribution.map((sector, idx) => (
              <div key={idx} className="space-y-1.5">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-semibold text-zinc-300">{sector.name}</span>
                  <span className="text-zinc-400 font-mono">{sector.count} Reviews ({sector.percentage}%)</span>
                </div>
                <div className="w-full h-2 bg-zinc-900 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-red-600 to-amber-500 rounded-full transition-all duration-500"
                    style={{ width: `${sector.percentage}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Action Box */}
        <div className="bg-gradient-to-b from-zinc-900 to-zinc-950 border border-zinc-800 p-6 rounded-3xl flex flex-col justify-between">
          <div className="space-y-4">
            <div className="p-3 bg-red-950/50 border border-red-800/40 rounded-2xl w-fit">
              <TrendingUp className="w-6 h-6 text-red-500" />
            </div>

            <h3 className="text-lg font-bold text-white">Review Moderation Hub</h3>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Instantly review, approve, feature, or delete client feedback submitted through the public website.
            </p>
          </div>

          <div className="pt-6 space-y-2">
            <Link
              href="/admin/testimonials"
              className="w-full bg-red-600 hover:bg-red-700 text-white font-bold text-xs py-3 rounded-xl transition flex items-center justify-center gap-2 cursor-pointer shadow-md shadow-red-600/20"
            >
              <ArrowRight className="w-4 h-4" />
              <span>Review Feed Moderation</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
