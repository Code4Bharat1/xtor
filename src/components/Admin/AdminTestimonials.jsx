"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  MessageSquareQuote,
  Search,
  Trash2,
  Check,
  RefreshCw,
  X,
  Star,
  LogOut,
  CheckCircle,
  Clock,
  BarChart3,
  AlertTriangle,
  AlertCircle,
} from "lucide-react";
import { api } from "@/services/apiClient";
const STATIC_URL = process.env.NEXT_PUBLIC_STATIC_URL || "http://localhost:5000";

function getImageUrl(path) {
  if (!path) return "";
  if (path.startsWith("http")) return path;
  return `${STATIC_URL}${path}`;
}

export default function AdminTestimonials() {
  const router = useRouter();
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [deleteId, setDeleteId] = useState(null);
  const [isDeleting, setIsDeleting] = useState(false);
  const [filterStatus, setFilterStatus] = useState("all");
  const [toast, setToast] = useState(null);

  useEffect(() => {
    if (toast) {
      const timer = setTimeout(() => setToast(null), 4000);
      return () => clearTimeout(timer);
    }
  }, [toast]);

  const fetchTestimonials = async () => {
    setLoading(true);
    try {
      const res = await api.get("/testimonials/admin");
      // Backend returns: { statusCode, data: { testimonials, counts, pagination }, message }
      // Axios interceptor returns response.data so res = { testimonials, counts, pagination }
      const list = res?.data?.testimonials || res?.testimonials || res?.data || [];
      const formatted = list.map((item) => ({
        id: item._id || item.id,
        name: item.fullName || item.name || "Anonymous Client",
        company: item.company || "",
        rating: item.rating || 0,
        status: item.status || "pending",
        message: item.reviewMessage || item.message || "",
        profileImage: item.profileImage || "",
        date: item.createdAt
          ? new Date(item.createdAt).toLocaleDateString("en-GB")
          : "—",
      }));
      setReviews(formatted);
    } catch (err) {
      console.warn("Failed to fetch admin testimonials:", err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTestimonials();
  }, []);

  const handleApprove = async (id) => {
    try {
      await api.patch(`/testimonials/admin/${id}/status`, { status: "approved" });
      setReviews((prev) =>
        prev.map((r) => (r.id === id ? { ...r, status: "approved" } : r))
      );
      setToast({ message: "Testimonial approved and published live", type: "success" });
    } catch (err) {
      setToast({ message: "Failed to approve testimonial: " + err.message, type: "error" });
    }
  };

  const handleReject = async (id) => {
    try {
      await api.patch(`/testimonials/admin/${id}/status`, { status: "rejected" });
      setReviews((prev) =>
        prev.map((r) => (r.id === id ? { ...r, status: "rejected" } : r))
      );
      setToast({ message: "Testimonial marked as rejected", type: "error" });
    } catch (err) {
      setToast({ message: "Failed to reject testimonial: " + err.message, type: "error" });
    }
  };

  const confirmDelete = async () => {
    if (!deleteId) return;
    setIsDeleting(true);
    try {
      await api.delete(`/testimonials/admin/${deleteId}`);
      setReviews((prev) => prev.filter((r) => r.id !== deleteId));
      setToast({ message: "Testimonial deleted successfully", type: "error" });
    } catch (err) {
      setToast({ message: "Failed to delete testimonial: " + err.message, type: "error" });
    } finally {
      setIsDeleting(false);
      setDeleteId(null);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("xtorc_admin_auth");
    localStorage.removeItem("xtorc_admin_token");
    router.push("/admin/login");
  };

  // Stats
  const total = reviews.length;
  const approved = reviews.filter((r) => r.status === "approved").length;
  const pending = reviews.filter((r) => r.status === "pending").length;
  const avgRating =
    reviews.length > 0
      ? (reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length).toFixed(1)
      : "0.0";

  const filteredReviews = reviews.filter((r) => {
    const matchesSearch =
      r.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      r.message.toLowerCase().includes(searchTerm.toLowerCase());
    if (!matchesSearch) return false;
    if (filterStatus === "approved") return r.status === "approved";
    if (filterStatus === "pending") return r.status === "pending";
    if (filterStatus === "rejected") return r.status === "rejected";
    return true;
  });

  const stats = [
    {
      label: "Total Testimonials",
      value: total,
      icon: <MessageSquareQuote className="w-5 h-5 text-zinc-400" />,
      color: "border-zinc-800",
    },
    {
      label: "Approved & Live",
      value: approved,
      icon: <CheckCircle className="w-5 h-5 text-green-500" />,
      color: "border-green-800/40",
    },
    {
      label: "Pending Moderation",
      value: pending,
      icon: <Clock className="w-5 h-5 text-amber-500" />,
      color: "border-amber-800/40",
    },
    {
      label: "Average Rating",
      value: `${avgRating} ★`,
      icon: <BarChart3 className="w-5 h-5 text-red-500" />,
      color: "border-red-800/40",
    },
  ];

  return (
    <div className="min-h-screen bg-zinc-950 text-white flex flex-col">
      {/* Sleek Action Toast Notification */}
      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ opacity: 0, y: -15, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -15, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 450, damping: 30 }}
            className={`fixed top-16 right-4 sm:right-6 z-[200] max-w-[340px] w-[calc(100vw-2rem)] rounded-xl bg-zinc-950/95 backdrop-blur-xl border ${toast.type === "success"
                ? "border-emerald-500/30 shadow-[0_10px_30px_-5px_rgba(16,185,129,0.25)]"
                : "border-red-500/30 shadow-[0_10px_30px_-5px_rgba(220,38,38,0.25)]"
              } text-white shadow-2xl overflow-hidden`}
          >
            <div className="px-3.5 py-2.5 flex items-center gap-2.5">
              {/* Compact Glowing Icon Badge */}
              <div
                className={`w-7 h-7 rounded-lg ${toast.type === "success"
                    ? "bg-gradient-to-br from-emerald-500 to-emerald-700 border-emerald-400/40"
                    : "bg-gradient-to-br from-red-500 to-red-700 border-red-400/40"
                  } flex items-center justify-center flex-shrink-0 shadow-sm border`}
              >
                {toast.type === "success" ? (
                  <CheckCircle className="w-4 h-4 text-white" />
                ) : (
                  <AlertCircle className="w-4 h-4 text-white" />
                )}
              </div>

              {/* Content */}
              <div className="flex-1 text-left min-w-0 pr-1">
                <p className="text-xs text-zinc-200 font-medium leading-snug">
                  {toast.message}
                </p>
              </div>

              {/* Close Button */}
              <button
                type="button"
                onClick={() => setToast(null)}
                className="text-zinc-400 hover:text-white p-1 rounded-md hover:bg-zinc-800/60 transition-colors cursor-pointer flex-shrink-0"
                aria-label="Close notification"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Sleek 2px Progress Bar */}
            <div className="w-full h-[2px] bg-zinc-900 overflow-hidden">
              <motion.div
                initial={{ width: "100%" }}
                animate={{ width: "0%" }}
                transition={{ duration: 4, ease: "linear" }}
                className={`h-full ${toast.type === "success"
                    ? "bg-gradient-to-r from-emerald-600 via-emerald-500 to-emerald-600 shadow-[0_0_6px_rgba(16,185,129,0.8)]"
                    : "bg-gradient-to-r from-red-600 via-red-500 to-red-600 shadow-[0_0_6px_rgba(239,68,68,0.8)]"
                  }`}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Horizontal Navbar */}
      <nav className="w-full bg-zinc-950 border-b border-zinc-800 px-6 py-2 flex items-center justify-between sticky top-0 z-50">
        <img src="/xtroc.png" alt="XTORC Logo" className="h-10 w-auto object-contain" />
        <button
          onClick={handleLogout}
          className="flex items-center gap-2 px-4 py-2 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white hover:border-red-600/50 text-xs font-semibold transition cursor-pointer"
        >
          <LogOut className="w-4 h-4" />
          Logout
        </button>
      </nav>

      {/* Page Content */}
      <main className="flex-1 px-6 py-8 max-w-7xl mx-auto w-full space-y-6">
        {/* Page Title */}
        <div>
          <h1 className="text-2xl font-bold text-white flex items-center gap-2.5">
            <MessageSquareQuote className="w-6 h-6 text-red-500" />
            Testimonials Review
          </h1>
          <p className="text-xs text-zinc-500 mt-1">
            Review, approve, reject, or delete client feedback submitted through the website.
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className={`bg-zinc-900 border ${stat.color} rounded-2xl p-4 flex flex-col gap-2`}
            >
              <div className="flex items-center justify-between">
                <span className="text-xs text-zinc-400 font-medium">{stat.label}</span>
                {stat.icon}
              </div>
              <span className="text-2xl font-extrabold text-white">{stat.value}</span>
            </div>
          ))}
        </div>

        {/* Filter + Search */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-zinc-900 p-4 rounded-2xl border border-zinc-800">
          <div className="relative w-full sm:w-80">
            <Search className="w-4 h-4 text-zinc-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search by name or review content..."
              className="w-full pl-10 pr-4 py-2 rounded-xl bg-zinc-950 border border-zinc-800 focus:border-red-500 text-white placeholder-zinc-500 text-xs outline-none transition"
            />
          </div>

          <div className="flex items-center gap-2">
            {["all", "approved", "pending", "rejected"].map((status) => (
              <button
                key={status}
                onClick={() => setFilterStatus(status)}
                className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition cursor-pointer capitalize ${filterStatus === status
                    ? "bg-red-600 text-white"
                    : "bg-zinc-950 text-zinc-400 hover:text-white border border-zinc-800"
                  }`}
              >
                {status === "all" ? `All (${total})` : status}
              </button>
            ))}
          </div>
        </div>

        {/* Testimonials Table */}
        <div className="overflow-x-auto rounded-2xl border border-zinc-800 bg-zinc-900/60 shadow-xl">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-zinc-900 border-b border-zinc-800 text-zinc-400 text-xs uppercase tracking-wider">
                <th className="py-4 px-5 font-semibold">Reviewer</th>
                <th className="py-4 px-5 font-semibold">Rating</th>
                <th className="py-4 px-5 font-semibold">Review</th>
                <th className="py-4 px-5 font-semibold">Date</th>
                <th className="py-4 px-5 font-semibold">Status</th>
                <th className="py-4 px-5 font-semibold text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-800/80 text-xs text-zinc-300">
              {loading ? (
                [1, 2, 3, 4].map((i) => (
                  <tr key={i} className="animate-pulse">
                    <td className="py-4 px-5">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-full bg-zinc-800" />
                        <div className="space-y-1.5">
                          <div className="w-24 h-3 rounded bg-zinc-800" />
                          <div className="w-16 h-2 rounded bg-zinc-850" />
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-5"><div className="w-16 h-3 rounded bg-zinc-800" /></td>
                    <td className="py-4 px-5"><div className="w-48 h-3 rounded bg-zinc-800" /></td>
                    <td className="py-4 px-5"><div className="w-16 h-3 rounded bg-zinc-800" /></td>
                    <td className="py-4 px-5"><div className="w-14 h-5 rounded-full bg-zinc-800" /></td>
                    <td className="py-4 px-5 text-right"><div className="w-20 h-7 rounded-xl bg-zinc-800 ml-auto" /></td>
                  </tr>
                ))
              ) : filteredReviews.length === 0 ? (
                <tr>
                  <td colSpan={6} className="py-12 text-center text-zinc-500 font-medium">
                    No testimonials found.
                  </td>
                </tr>
              ) : (
                filteredReviews.map((rev) => (
                  <tr key={rev.id} className="hover:bg-zinc-900/40 transition">
                    {/* Reviewer */}
                    <td className="py-4 px-5 align-top">
                      <div className="flex items-center gap-3">
                        {rev.profileImage ? (
                          <img
                            src={getImageUrl(rev.profileImage)}
                            alt={rev.name}
                            className="w-9 h-9 rounded-full object-cover border border-zinc-700 flex-shrink-0"
                          />
                        ) : (
                          <div className="w-9 h-9 rounded-full bg-gradient-to-br from-red-600 to-amber-500 text-white font-bold text-xs flex items-center justify-center flex-shrink-0">
                            {rev.name.charAt(0).toUpperCase()}
                          </div>
                        )}
                        <div>
                          <span className="font-bold text-white text-sm block leading-tight">{rev.name}</span>
                          {rev.company && <span className="text-zinc-500 text-[11px]">{rev.company}</span>}
                        </div>
                      </div>
                    </td>

                    {/* Rating */}
                    <td className="py-4 px-5 align-top">
                      <div className="flex items-center gap-0.5">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-3.5 h-3.5 ${i < rev.rating ? "fill-amber-400 text-amber-400" : "text-zinc-700"}`}
                          />
                        ))}
                      </div>
                    </td>

                    {/* Review */}
                    <td className="py-4 px-5 align-top max-w-xs">
                      <p className="text-zinc-300 text-xs leading-relaxed line-clamp-3">
                        &ldquo;{rev.message}&rdquo;
                      </p>
                    </td>

                    {/* Date */}
                    <td className="py-4 px-5 align-top text-zinc-500 whitespace-nowrap">{rev.date}</td>

                    {/* Status */}
                    <td className="py-4 px-5 align-top">
                      <span
                        className={`px-2.5 py-1 rounded-full text-[11px] font-bold capitalize ${rev.status === "approved"
                            ? "bg-green-950/60 text-green-400 border border-green-800/50"
                            : rev.status === "rejected"
                              ? "bg-red-950/60 text-red-400 border border-red-800/50"
                              : "bg-amber-950/60 text-amber-400 border border-amber-800/50"
                          }`}
                      >
                        {rev.status}
                      </span>
                    </td>

                    {/* Actions */}
                    <td className="py-4 px-5 align-top text-right">
                      <div className="flex items-center justify-end gap-2">
                        {rev.status !== "approved" && (
                          <button
                            onClick={() => handleApprove(rev.id)}
                            className="px-3 py-1.5 rounded-lg bg-green-600 hover:bg-green-500 text-white text-xs font-semibold transition cursor-pointer flex items-center gap-1 shadow-md shadow-green-600/20"
                          >
                            <Check className="w-3.5 h-3.5" />
                            Approve
                          </button>
                        )}
                        {rev.status !== "rejected" && (
                          <button
                            onClick={() => handleReject(rev.id)}
                            className="px-3 py-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-300 text-xs font-semibold transition cursor-pointer flex items-center gap-1"
                          >
                            <X className="w-3.5 h-3.5" />
                            Reject
                          </button>
                        )}
                        <button
                          onClick={() => setDeleteId(rev.id)}
                          className="px-3 py-1.5 rounded-lg bg-red-950/40 border border-red-900/40 text-red-400 hover:bg-red-900/60 transition cursor-pointer flex items-center gap-1"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </main>

      {/* Delete Confirmation Modal Pop-up */}
      <AnimatePresence>
        {deleteId && (
          <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 10 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="bg-zinc-950 border border-zinc-800 p-6 rounded-2xl max-w-sm w-full shadow-2xl space-y-5 text-center relative"
            >
              <button
                onClick={() => setDeleteId(null)}
                className="absolute top-4 right-4 text-zinc-500 hover:text-white transition"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="w-12 h-12 rounded-full bg-red-500/10 border border-red-500/20 flex items-center justify-center mx-auto text-red-500">
                <AlertTriangle className="w-6 h-6" />
              </div>

              <div>
                <h3 className="text-lg font-bold text-white">Delete Testimonial?</h3>
                <p className="text-xs text-zinc-400 mt-1.5 leading-relaxed">
                  Are you sure you want to delete this client testimonial? This action cannot be undone.
                </p>
              </div>

              <div className="flex items-center gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setDeleteId(null)}
                  disabled={isDeleting}
                  className="flex-1 py-2.5 rounded-xl border border-zinc-800 text-zinc-300 hover:bg-zinc-900 text-xs font-semibold transition cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={confirmDelete}
                  disabled={isDeleting}
                  className="flex-1 py-2.5 rounded-xl bg-red-600 hover:bg-red-500 text-white text-xs font-semibold transition shadow-lg shadow-red-600/20 cursor-pointer flex items-center justify-center gap-1.5"
                >
                  {isDeleting ? (
                    <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                  ) : (
                    <Trash2 className="w-3.5 h-3.5" />
                  )}
                  {isDeleting ? "Deleting..." : "Yes, Delete"}
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
