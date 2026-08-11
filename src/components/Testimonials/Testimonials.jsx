"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Star,
  MessageSquarePlus,
  Send,
  CheckCircle2,
  ThumbsUp,
  Quote,
  Upload,
  X
} from "lucide-react";
import { api } from "@/services/apiClient";

// Clean & Simple Pop-up Toast Notification
function ToastNotification({ message, onClose }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 5000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0, x: 40, scale: 0.95 }}
      animate={{ opacity: 1, x: 0, scale: 1 }}
      exit={{ opacity: 0, x: 40, scale: 0.95 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="fixed top-20 sm:top-24 right-6 z-[150] px-4 py-3 rounded-xl bg-zinc-900 border border-zinc-800 text-white shadow-xl flex items-center gap-3 text-xs max-w-xs sm:max-w-sm text-left"
    >
      <div className="w-2 h-2 rounded-full bg-red-600 flex-shrink-0" />
      <span className="font-medium text-gray-200 flex-1 leading-snug">{message}</span>
      <button
        type="button"
        onClick={onClose}
        className="text-zinc-400 hover:text-white transition p-1 cursor-pointer flex-shrink-0"
      >
        <X className="w-3.5 h-3.5" />
      </button>
    </motion.div>
  );
}

export default function TestimonialsSection() {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    company: "",
    rating: 0,
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Use NEXT_PUBLIC_STATIC_URL (backend root without /api/v1) for static image files
  const getImageUrl = (path) => {
    if (!path) return '';
    if (path.startsWith('http')) return path;
    const staticBase = process.env.NEXT_PUBLIC_STATIC_URL || 'http://localhost:5000';
    return `${staticBase}${path}`;
  };

  const fetchPublicTestimonials = async () => {
    setLoading(true);
    try {
      const res = await api.get("/testimonials");
      const list = res?.data?.testimonials || res?.data || res || [];
      const formatted = list.map((item) => ({
        id: item._id || item.id,
        name: item.fullName || item.name || "Verified Client",
        company: item.company || "Industrial Partner",
        rating: item.rating || 5,
        date: item.createdAt ? new Date(item.createdAt).toLocaleDateString("en-GB") : "Recent",
        likes: 0,
        isLiked: false,
        message: item.reviewMessage || item.message || "",
        profileImage: item.profileImage || "",
      }));
      // Fix: getAdminList returns {testimonials, counts, pagination}, public returns array directly
      setReviews(formatted);
    } catch (err) {
      console.warn("Failed to fetch public testimonials from API:", err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPublicTestimonials();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errorMessage) setErrorMessage("");
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const validExtensions = ["jpg", "jpeg", "png", "webp"];
      const fileExt = file.name.split(".").pop().toLowerCase();
      if (!validExtensions.includes(fileExt)) {
        setErrorMessage("Please upload a valid photo (JPG, JPEG, PNG, or WEBP).");
        setSelectedFile(null);
        return;
      }

      if (file.size > 2 * 1024 * 1024) {
        setErrorMessage("Photo size is too large. Please upload an image under 2 MB.");
        setSelectedFile(null);
        return;
      }

      setSelectedFile(file);
      if (errorMessage) setErrorMessage("");
    }
  };

  const handleRatingClick = (stars) => {
    setFormData((prev) => ({ ...prev, rating: stars }));
    if (errorMessage) setErrorMessage("");
  };


  const validateForm = () => {
    if (!formData.name.trim()) {
      setErrorMessage("Please enter your Full Name.");
      return false;
    }
    if (formData.rating === 0) {
      setErrorMessage("Please select a Star Rating (1-5 stars).");
      return false;
    }
    if (!formData.message.trim()) {
      setErrorMessage("Please enter your Feedback / Review message.");
      return false;
    }
    if (formData.message.trim().length < 5) {
      setErrorMessage("Feedback message must be at least 5 characters long.");
      return false;
    }
    if (!selectedFile) {
      setErrorMessage("Photo upload is required. Please attach your photo.");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");

    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      const bodyFormData = new FormData();
      bodyFormData.append("fullName", formData.name.trim());
      bodyFormData.append("company", formData.company.trim());
      bodyFormData.append("rating", formData.rating);
      bodyFormData.append("reviewMessage", formData.message.trim());
      bodyFormData.append("profileImage", selectedFile);

      await api.post("/testimonials", bodyFormData);

      setIsSubmitted(true);
      // Auto-reset form after 4 seconds so user can submit another review
      setTimeout(() => {
        setIsSubmitted(false);
        setShowForm(false);
        setSelectedFile(null);
        setErrorMessage("");
        setFormData({ name: "", company: "", rating: 0, message: "" });
      }, 4000);
    } catch (err) {
      const msg = err?.message || "Failed to submit review. Please try again.";
      setErrorMessage(msg);
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setIsSubmitted(false);
    setShowForm(false);
    setSelectedFile(null);
    setErrorMessage("");
    setFormData({
      name: "",
      company: "",
      rating: 0,
      message: "",
    });
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-black text-white py-12 px-4 sm:px-6 md:px-8 relative overflow-hidden"
    >
      {/* Top-Right Auto-Dismissing Error Pop-up Toast */}
      <AnimatePresence>
        {errorMessage && (
          <ToastNotification
            message={errorMessage}
            onClose={() => setErrorMessage("")}
          />
        )}
      </AnimatePresence>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Section Header */}
        <div className="mb-10 space-y-4 max-w-3xl mx-auto">
          <div className="w-fit mx-auto flex flex-col items-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
               <span className="text-white">Testimonials</span>
            </h2>
            <div className="w-full h-1 bg-red-600 rounded-full mt-3"></div>
          </div>

          <p className="text-gray-400 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            Discover how XTORC hydraulic torque wrenches, flange facing equipment, and controlled bolting tools drive operational excellence across major industrial projects.
          </p>

          {/* Centered Action Button */}
          <div className="pt-4 flex justify-center">
            <button
              onClick={() => setShowForm(!showForm)}
              className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white text-xs sm:text-sm font-bold px-7 py-3.5 rounded-xl flex items-center gap-2.5 shadow-lg shadow-red-600/30 transition-all transform hover:-translate-y-0.5 cursor-pointer"
            >
              <MessageSquarePlus className="w-4 h-4" />
              <span>{showForm ? "Close Review Form" : "Write a Client Review"}</span>
            </button>
          </div>
        </div>

        {/* INLINE WRITE REVIEW FORM */}
        <AnimatePresence>
          {showForm && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="w-full max-w-2xl mx-auto mb-12 overflow-hidden text-left"
            >
              <div className="bg-zinc-950 border border-zinc-800/90 p-6 sm:p-10 rounded-3xl shadow-2xl relative">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold text-white flex items-center gap-2">
                    <Star className="w-5 h-5 text-red-500 fill-red-500" />
                    Share Your Feedback
                  </h3>
                  <button
                    onClick={resetForm}
                    className="text-zinc-500 hover:text-white p-1 rounded-lg hover:bg-zinc-900 transition"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {isSubmitted ? (
                  <div className="text-center py-8 space-y-3">
                    <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/40">
                      <CheckCircle2 className="w-6 h-6" />
                    </div>
                    <h4 className="text-lg font-bold text-white">Thank You for Your Review!</h4>
                    <p className="text-xs text-zinc-400 max-w-md mx-auto">
                      Your review has been submitted successfully and will be visible on our website once approved by our moderation team.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block text-xs font-semibold text-zinc-400 mb-1.5 uppercase tracking-wider">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="e.g. John Doe"
                        className="w-full px-4 py-3 rounded-xl bg-zinc-900 border border-zinc-800 focus:border-red-500 text-white placeholder-zinc-500 text-sm outline-none transition"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-zinc-400 mb-1.5 uppercase tracking-wider">
                        Company / Organization (Optional)
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        placeholder="e.g. Reliance Industries / Larsen & Toubro"
                        className="w-full px-4 py-3 rounded-xl bg-zinc-900 border border-zinc-800 focus:border-red-500 text-white placeholder-zinc-500 text-sm outline-none transition"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-zinc-400 mb-1.5 uppercase tracking-wider">
                        Star Rating *
                      </label>
                      <div className="flex items-center gap-2">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <button
                            key={star}
                            type="button"
                            onClick={() => handleRatingClick(star)}
                            className="p-1 hover:scale-110 transition cursor-pointer"
                          >
                            <Star
                              className={`w-6 h-6 ${
                                star <= formData.rating
                                  ? "fill-amber-400 text-amber-400"
                                  : "text-zinc-700 hover:text-zinc-500"
                              }`}
                            />
                          </button>
                        ))}
                        {formData.rating > 0 && (
                          <span className="text-xs font-bold text-amber-400 ml-2">
                            {formData.rating} / 5 Stars
                          </span>
                        )}
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-zinc-400 mb-1.5 uppercase tracking-wider">
                        Your Review Message *
                      </label>
                      <textarea
                        rows={4}
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Describe your experience with XTORC tools, performance, and services..."
                        className="w-full px-4 py-3 rounded-xl bg-zinc-900 border border-zinc-800 focus:border-red-500 text-white placeholder-zinc-500 text-sm outline-none transition resize-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-zinc-400 mb-1.5 uppercase tracking-wider">
                        Profile Photo *
                      </label>
                      <label className="flex items-center gap-3 px-4 py-3 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-zinc-700 cursor-pointer transition">
                        <Upload className="w-4 h-4 text-zinc-400" />
                        <span className="text-xs text-zinc-400 truncate">
                          {selectedFile ? selectedFile.name : "Choose photo (max 2MB)"}
                        </span>
                        <input
                          type="file"
                          accept=".jpg,.jpeg,.png,.webp"
                          onChange={handleFileChange}
                          className="hidden"
                        />
                      </label>
                    </div>

                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-bold text-sm px-8 py-3 rounded-xl shadow-lg shadow-red-600/30 transition-all flex items-center justify-center gap-2 cursor-pointer"
                      >
                        <Send className="w-4 h-4" />
                        <span>{isSubmitting ? "Submitting..." : "Submit Review"}</span>
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* REVIEWS GRID */}
        {loading ? (
          <div className="bg-zinc-950/80 border border-zinc-800/80 p-10 sm:p-14 rounded-3xl text-center max-w-xl mx-auto my-6">
            <p className="text-sm text-zinc-400 font-medium">Loading approved client testimonials...</p>
          </div>
        ) : reviews.length === 0 ? (
          <div className="bg-zinc-950/80 border border-zinc-800/80 p-10 sm:p-14 rounded-3xl text-center max-w-xl mx-auto my-6">
            <MessageSquarePlus className="w-12 h-12 text-zinc-600 mx-auto mb-3" />
            <h4 className="text-lg font-bold text-white mb-1">No Client Reviews Yet</h4>
            <p className="text-xs text-zinc-400">Be the first to share your experience working with XTORC tools!</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 text-left mb-4">
            <AnimatePresence>
              {reviews.map((rev) => (
                <motion.div
                  key={rev.id}
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  className="bg-gradient-to-b from-zinc-900 to-zinc-950 border border-zinc-700/80 p-5 rounded-2xl flex flex-col justify-between hover:border-red-500 hover:shadow-xl hover:shadow-red-950/30 transition-all duration-300 relative group shadow-lg shadow-black/80"
                >
                  <Quote className="w-10 h-10 text-red-500/15 absolute right-5 top-5 pointer-events-none group-hover:text-red-500/25 transition-colors" />

                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-1 bg-zinc-950 border border-zinc-800 px-2.5 py-1 rounded-full">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-3.5 h-3.5 ${
                              i < rev.rating
                                ? "fill-amber-400 text-amber-400"
                                : "text-zinc-700"
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-xs text-zinc-300 font-semibold bg-zinc-950 border border-zinc-800 px-2 py-0.5 rounded-md">
                        {rev.date}
                      </span>
                    </div>

                    <p className="text-zinc-100 text-sm leading-relaxed italic mb-4 relative z-10 font-normal">
                      "{rev.message}"
                    </p>
                  </div>

                  <div className="pt-3 border-t border-zinc-800/80 flex items-center gap-3">
                    {rev.profileImage ? (
                      <img
                        src={getImageUrl(rev.profileImage)}
                        alt={rev.name}
                        className="w-9 h-9 rounded-full object-cover border border-zinc-600 shadow-md"
                      />
                    ) : (
                      <div className="w-9 h-9 rounded-full bg-gradient-to-br from-red-600 to-amber-500 flex items-center justify-center font-extrabold text-white text-xs shadow-md">
                        {rev.name ? rev.name.charAt(0).toUpperCase() : "C"}
                      </div>
                    )}
                    <div>
                      <h4 className="font-bold text-white text-sm tracking-wide">
                        {rev.name}
                      </h4>
                      {rev.company && (
                        <p className="text-xs text-red-400 font-semibold">
                          {rev.company}
                        </p>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        )}
      </div>
    </motion.section>
  );
}
