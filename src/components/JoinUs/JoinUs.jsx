"use client";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, Upload, Send, AlertCircle, X } from "lucide-react";
import { api } from "@/services/apiClient";

// Compact & Ultra-Sleek Glassmorphism Toast Notification
function ToastNotification({ message, onClose, duration = 5000 }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, duration);
    return () => clearTimeout(timer);
  }, [onClose, duration]);

  return (
    <motion.div
      initial={{ opacity: 0, y: -15, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -15, scale: 0.95 }}
      transition={{ type: "spring", stiffness: 450, damping: 30 }}
      className="fixed top-20 sm:top-24 right-4 sm:right-6 z-[200] max-w-[340px] w-[calc(100vw-2rem)] rounded-xl bg-zinc-950/95 backdrop-blur-xl border border-red-500/30 text-white shadow-[0_10px_30px_-5px_rgba(220,38,38,0.25),0_6px_15px_rgba(0,0,0,0.5)] overflow-hidden"
    >
      <div className="px-3.5 py-2.5 flex items-center gap-2.5">
        {/* Compact Glowing Icon Badge */}
        <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-red-500 to-red-700 flex items-center justify-center flex-shrink-0 shadow-sm border border-red-400/40">
          <AlertCircle className="w-4 h-4 text-white" />
        </div>

        {/* Content */}
        <div className="flex-1 text-left min-w-0 pr-1">
          <p className="text-xs text-zinc-200 font-medium leading-snug">
            {message}
          </p>
        </div>

        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
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
          transition={{ duration: duration / 1000, ease: "linear" }}
          className="h-full bg-gradient-to-r from-red-600 via-red-500 to-red-600 shadow-[0_0_6px_rgba(239,68,68,0.8)]"
        />
      </div>
    </motion.div>
  );
}

// Simple Plain Dropdown - Always Opens Downward
function PlainDropdown({ label, required, value, options, onChange, name }) {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className={`relative text-left ${isOpen ? "z-[100]" : "z-10"}`} ref={ref}>
      <label className="block text-sm font-semibold text-gray-300 mb-2">
        {label} {required && <span className="text-red-500">*</span>}
      </label>

      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-4 py-3 rounded-xl bg-zinc-900 border border-zinc-800 text-white text-sm text-left flex items-center justify-between cursor-pointer outline-none hover:border-zinc-700"
      >
        <span>{value}</span>
        <span className="text-xs text-gray-400">▼</span>
      </button>

      {isOpen && (
        <div className="absolute left-0 right-0 top-full mt-1.5 bg-zinc-950 border border-zinc-700 rounded-xl shadow-2xl z-[100] max-h-52 overflow-y-auto py-1">
          {options.map((opt) => (
            <div
              key={opt}
              onClick={() => {
                onChange({ target: { name, value: opt } });
                setIsOpen(false);
              }}
              className="px-4 py-2.5 text-sm text-gray-200 hover:bg-zinc-900 hover:text-white cursor-pointer"
            >
              {opt}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default function CareersSection() {
  const [showForm, setShowForm] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
  const formContainerRef = useRef(null);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    mobileNumber: "",
    currentCity: "",
    positionInterestedIn: "Sales",
    totalExperience: "Fresher",
    currentCompany: "",
    currentDesignation: "",
    noticePeriod: "Immediate",
    whyJoinXtorc: "",
  });

  const handleCloseForm = () => {
    setIsSubmitted(false);
    setShowForm(false);
    setSelectedFile(null);
    setErrorMessage("");
    setFormData({
      fullName: "",
      email: "",
      mobileNumber: "",
      currentCity: "",
      positionInterestedIn: "Sales",
      totalExperience: "Fresher",
      currentCompany: "",
      currentDesignation: "",
      noticePeriod: "Immediate",
      whyJoinXtorc: "",
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errorMessage) setErrorMessage("");
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const validExtensions = ["pdf", "doc", "docx"];
      const fileExt = file.name.split(".").pop().toLowerCase();
      if (!validExtensions.includes(fileExt)) {
        setErrorMessage("Invalid file type. Please upload a PDF, DOC, or DOCX file.");
        setSelectedFile(null);
        return;
      }

      if (file.size > 5 * 1024 * 1024) {
        setErrorMessage("File size is too large. Please upload a resume under 5 MB.");
        setSelectedFile(null);
        return;
      }

      setSelectedFile(file);
      if (errorMessage) setErrorMessage("");
    }
  };

  const validateForm = () => {
    if (!formData.fullName.trim()) {
      setErrorMessage("Please enter your Full Name.");
      return false;
    }
    if (formData.fullName.trim().length > 100) {
      setErrorMessage("Full Name cannot exceed 100 characters.");
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      setErrorMessage("Please enter a valid Email Address (e.g. rahul@example.com).");
      return false;
    }

    const phoneRegex = /^[+]*[(]?[0-9]{1,4}[)]?[-\s./0-9]*$/;
    if (!formData.mobileNumber.trim() || !phoneRegex.test(formData.mobileNumber.trim())) {
      setErrorMessage("Please enter a valid Mobile Number.");
      return false;
    }

    if (!formData.currentCity.trim()) {
      setErrorMessage("Please enter your Current City.");
      return false;
    }

    if (!selectedFile) {
      setErrorMessage("Resume upload is required. Please attach a valid PDF, DOC, or DOCX file.");
      return false;
    }

    if (!formData.whyJoinXtorc.trim()) {
      setErrorMessage("Please describe why you want to join XTORC.");
      return false;
    }

    if (formData.whyJoinXtorc.trim().length > 500) {
      setErrorMessage("Reason for joining XTORC must not exceed 500 characters.");
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
      bodyFormData.append("fullName", formData.fullName.trim());
      bodyFormData.append("email", formData.email.trim());
      bodyFormData.append("mobileNumber", formData.mobileNumber.trim());
      bodyFormData.append("currentCity", formData.currentCity.trim());
      bodyFormData.append("positionInterestedIn", formData.positionInterestedIn);
      bodyFormData.append("totalExperience", formData.totalExperience);
      bodyFormData.append("currentCompany", formData.currentCompany.trim());
      bodyFormData.append("currentDesignation", formData.currentDesignation.trim());
      bodyFormData.append("noticePeriod", formData.noticePeriod);
      bodyFormData.append("whyJoinXtorc", formData.whyJoinXtorc.trim());
      bodyFormData.append("resume", selectedFile);

      await api.post("/careers/apply", bodyFormData);

      setIsSubmitted(true);
      // Smoothly scroll to the confirmation message so user is not left at footer
      setTimeout(() => {
        formContainerRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
      }, 100);
    } catch (err) {
      const backendMessage = err?.message || "Failed to submit application. Please verify your details.";
      setErrorMessage(backendMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <motion.section
      className="bg-black text-white pt-10 pb-12 px-4 sm:px-6 md:px-8 text-center flex flex-col items-center relative"
      initial="hidden"
      animate="show"
      variants={containerVariants}
    >
      {/* Interactive Top-Right Auto-Dismissing Error Pop-up Toast */}
      <AnimatePresence>
        {errorMessage && (
          <ToastNotification
            message={errorMessage}
            onClose={() => setErrorMessage("")}
            duration={5000}
          />
        )}
      </AnimatePresence>

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Heading */}
        <motion.div variants={itemVariants} className="w-fit mx-auto flex flex-col items-center mb-6">
          <h2 className="heading-main mb-0">
            Join Us
          </h2>
          <div className="w-full h-1 bg-red-600 rounded-full mt-2"></div>
        </motion.div>

        <motion.h3 className="heading-sub mb-8 text-gray-200" variants={itemVariants}>
          Be Part of Our Growth Story
        </motion.h3>

        {/* Apply Now Button (Hides when clicked) */}
        {!showForm && (
          <motion.div
            className="flex justify-center mb-8"
            variants={itemVariants}
          >
            <button
              onClick={() => setShowForm(true)}
              className="bg-red-600 hover:bg-red-700 text-white font-bold py-3.5 px-10 rounded-xl transition duration-300 transform hover:scale-105 cursor-pointer shadow-lg shadow-red-600/30"
            >
              Apply Now
            </button>
          </motion.div>
        )}

        {/* Inline Application Form */}
        <AnimatePresence>
          {showForm && (
            <motion.div
              ref={formContainerRef}
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="w-full overflow-visible"
            >
              <div className="bg-zinc-950 text-white p-6 sm:p-10 rounded-3xl shadow-2xl border border-zinc-800 text-left max-w-3xl mx-auto mb-6 relative">
                <h3 className="text-2xl font-bold text-white mb-2">Job Application Form</h3>
                <p className="text-sm text-gray-400 mb-8">
                  Fill in your professional details below to apply for career opportunities at XTORC.
                </p>

                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-zinc-900 border border-green-600/40 p-8 rounded-2xl text-center shadow-xl my-4"
                  >
                    <CheckCircle2 className="w-16 h-16 text-green-500 mx-auto mb-4" />
                    <h4 className="text-2xl font-bold text-white mb-2">Application Submitted!</h4>
                    <p className="text-sm text-gray-300 mb-6 leading-relaxed">
                      Thank you for applying. An email notification with your resume has been sent directly to the XTORC HR & Admin team.
                    </p>
                    <button
                      onClick={handleCloseForm}
                      className="bg-red-600 hover:bg-red-700 text-white font-bold text-sm px-6 py-2.5 rounded-xl transition cursor-pointer"
                    >
                      Close Form
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-semibold text-gray-300 mb-2">
                          Full Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          name="fullName"
                          required
                          value={formData.fullName}
                          onChange={handleInputChange}
                          placeholder="Enter your name"
                          className="w-full px-4 py-3 rounded-xl bg-zinc-900 border border-zinc-800 focus:border-red-500 focus:ring-2 focus:ring-red-500/20 outline-none text-white text-sm"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-300 mb-2">
                          Email Address <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="Enter your email address"
                          className="w-full px-4 py-3 rounded-xl bg-zinc-900 border border-zinc-800 focus:border-red-500 focus:ring-2 focus:ring-red-500/20 outline-none text-white text-sm"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-semibold text-gray-300 mb-2">
                          Mobile Number <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="tel"
                          name="mobileNumber"
                          required
                          value={formData.mobileNumber}
                          onChange={handleInputChange}
                          placeholder="Enter your mobile number"
                          className="w-full px-4 py-3 rounded-xl bg-zinc-900 border border-zinc-800 focus:border-red-500 focus:ring-2 focus:ring-red-500/20 outline-none text-white text-sm"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-300 mb-2">
                          Current City <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          name="currentCity"
                          required
                          value={formData.currentCity}
                          onChange={handleInputChange}
                          placeholder="e.g. Mumbai"
                          className="w-full px-4 py-3 rounded-xl bg-zinc-900 border border-zinc-800 focus:border-red-500 focus:ring-2 focus:ring-red-500/20 outline-none text-white text-sm"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <PlainDropdown
                        label="Position Interested In"
                        required
                        name="positionInterestedIn"
                        value={formData.positionInterestedIn}
                        options={[
                          "Sales",
                          "Service",
                          "Design & R&D",
                          "Production",
                          "Accounts",
                          "HR & Admin",
                          "Marketing",
                          "Internship",
                          "Other",
                        ]}
                        onChange={handleInputChange}
                      />

                      <PlainDropdown
                        label="Total Experience"
                        required
                        name="totalExperience"
                        value={formData.totalExperience}
                        options={["Fresher", "0–2 Years", "2–5 Years", "5+ Years"]}
                        onChange={handleInputChange}
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-semibold text-gray-300 mb-2">
                          Current Company / Organization
                        </label>
                        <input
                          type="text"
                          name="currentCompany"
                          value={formData.currentCompany}
                          onChange={handleInputChange}
                          placeholder="e.g. Reliance Energy (Optional)"
                          className="w-full px-4 py-3 rounded-xl bg-zinc-900 border border-zinc-800 focus:border-red-500 focus:ring-2 focus:ring-red-500/20 outline-none text-white text-sm"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-300 mb-2">
                          Current Designation
                        </label>
                        <input
                          type="text"
                          name="currentDesignation"
                          value={formData.currentDesignation}
                          onChange={handleInputChange}
                          placeholder="e.g. Senior Engineer (Optional)"
                          className="w-full px-4 py-3 rounded-xl bg-zinc-900 border border-zinc-800 focus:border-red-500 focus:ring-2 focus:ring-red-500/20 outline-none text-white text-sm"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <PlainDropdown
                        label="Notice Period"
                        required
                        name="noticePeriod"
                        value={formData.noticePeriod}
                        options={["Immediate", "15 Days", "30 Days", "60+ Days"]}
                        onChange={handleInputChange}
                      />
                    </div>

                    {/* Resume Upload Box */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-300 mb-2">
                        Upload Resume / CV (PDF, DOC, DOCX) <span className="text-red-500">*</span>
                      </label>
                      <label className="flex flex-col items-center justify-center border-2 border-dashed border-zinc-800 hover:border-red-500/50 bg-zinc-900/60 p-6 rounded-2xl cursor-pointer transition">
                        <Upload className="w-8 h-8 text-zinc-500 mb-2" />
                        <span className="text-xs text-gray-300 font-semibold">
                          {selectedFile ? selectedFile.name : "Click to select resume file"}
                        </span>
                        <input
                          type="file"
                          accept=".pdf,.doc,.docx"
                          onChange={handleFileChange}
                          className="hidden"
                        />
                      </label>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-300 mb-2">
                        Why do you want to join XTORC? <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        name="whyJoinXtorc"
                        rows={3}
                        value={formData.whyJoinXtorc}
                        onChange={handleInputChange}
                        placeholder="Briefly describe your motivation and relevant skills (max 500 chars)..."
                        className="w-full px-4 py-3 rounded-xl bg-zinc-900 border border-zinc-800 focus:border-red-500 focus:ring-2 focus:ring-red-500/20 outline-none text-white text-sm resize-none"
                      />
                    </div>

                    <div className="pt-4 flex justify-end gap-4">
                      <button
                        type="button"
                        onClick={() => setShowForm(false)}
                        className="px-6 py-3 rounded-xl bg-zinc-900 text-gray-400 hover:text-white text-sm font-semibold transition cursor-pointer"
                      >
                        Cancel
                      </button>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-bold text-sm px-8 py-3 rounded-xl shadow-lg shadow-red-600/30 transition flex items-center justify-center gap-2 cursor-pointer"
                      >
                        <Send className="w-4 h-4" />
                        <span>{isSubmitting ? "Sending..." : "Submit Application"}</span>
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Company Culture Description - Positioned cleanly below Apply button / Form */}
        <motion.p
          className="text-gray-300 text-sm sm:text-base leading-relaxed max-w-3xl mx-auto mt-4 mb-2 text-justify font-normal"
          variants={itemVariants}
        >
          XTORC is a growing startup driven by innovation, collaboration, and excellence. With strong industry expertise, we’re seeking passionate individuals—experienced or fresh—to join us in redefining industrial solutions. Explore roles in engineering, sales, and operations, and help shape the future of industrial tools and services.
        </motion.p>
      </div>
    </motion.section>
  );
}
