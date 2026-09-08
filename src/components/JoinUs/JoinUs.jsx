"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  User,
  Mail,
  Phone,
  MapPin,
  Briefcase,
  Award,
  Building2,
  BadgeCheck,
  Calendar,
  Upload,
  MessageSquare,
  Send,
  Loader2,
  AlertCircle,
  CheckCircle2,
  ChevronDown,
  Check,
  X
} from "lucide-react";
import { api } from "@/services/apiClient";
import { useToast } from "@/components/common/ToastContext";

// Reusable Consistent Custom Dropdown matching Distributor UI
function SelectDropdown({ label, required, value, options, onChange, name, icon: Icon, error }) {
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
    <div className={`relative text-left ${isOpen ? "z-[50]" : "z-10"}`} ref={ref}>
      <label className="block text-sm font-medium text-gray-300 mb-2">
        {label} {required && <span className="text-red-500">*</span>}
      </label>

      <div className="relative">
        {Icon && (
          <Icon className="absolute left-3.5 top-3.5 w-5 h-5 text-gray-400 pointer-events-none" />
        )}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className={`w-full min-h-[48px] ${Icon ? "pl-11" : "pl-4"} pr-10 py-3 bg-[#0f0f12] border rounded-xl text-white font-medium text-sm text-left flex items-center justify-between shadow-inner transition-all cursor-pointer ${
            error
              ? "border-red-500 ring-2 ring-red-500/20"
              : isOpen
              ? "border-red-600 ring-2 ring-red-600/30 bg-black"
              : "border-zinc-700/70 hover:border-zinc-500"
          }`}
        >
          <span className="truncate">{value || "Select..."}</span>
          <ChevronDown
            className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${
              isOpen ? "rotate-180 text-red-500" : ""
            }`}
          />
        </button>

        {isOpen && (
          <div className="absolute left-0 right-0 top-full mt-1.5 bg-zinc-950 border border-zinc-700/80 rounded-xl shadow-2xl z-[100] max-h-56 overflow-y-auto py-1 divide-y divide-zinc-800/40">
            {options.map((opt) => (
              <div
                key={opt}
                onClick={() => {
                  onChange({ target: { name, value: opt } });
                  setIsOpen(false);
                }}
                className={`px-4 py-2.5 text-sm flex items-center justify-between cursor-pointer transition-colors ${
                  value === opt
                    ? "bg-red-950/40 text-red-400 font-semibold border-l-2 border-red-500"
                    : "text-zinc-300 hover:bg-zinc-900 hover:text-white"
                }`}
              >
                <span className="truncate mr-2">{opt}</span>
                {value === opt && <Check className="w-4 h-4 text-red-500 flex-shrink-0" />}
              </div>
            ))}
          </div>
        )}
      </div>

      {error && (
        <p className="text-xs text-red-400 mt-1.5 flex items-center gap-1">
          <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" /> <span>{error}</span>
        </p>
      )}
    </div>
  );
}

const INITIAL_FORM_STATE = {
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
};

export default function CareersSection() {
  const toast = useToast();
  const [showForm, setShowForm] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
  const [fieldErrors, setFieldErrors] = useState({});
  const formCardRef = useRef(null);
  const heroRef = useRef(null);
  const autoDismissTimerRef = useRef(null);

  const [formData, setFormData] = useState(INITIAL_FORM_STATE);

  // Clear auto-dismiss timer on unmount
  useEffect(() => {
    return () => {
      if (autoDismissTimerRef.current) {
        clearTimeout(autoDismissTimerRef.current);
      }
    };
  }, []);

  const handleOpenForm = () => {
    setShowForm(true);
    setIsSubmitted(false);
    // Smooth glide scroll with breathing room from navbar
    setTimeout(() => {
      if (formCardRef.current) {
        const yOffset = -70;
        const element = formCardRef.current;
        const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    }, 120);
  };

  const handleCloseForm = () => {
    if (autoDismissTimerRef.current) {
      clearTimeout(autoDismissTimerRef.current);
      autoDismissTimerRef.current = null;
    }
    setShowForm(false);
    setIsSubmitted(false);
    setErrorMessage("");
    setFieldErrors({});
    // Smoothly return user to hero section
    setTimeout(() => {
      heroRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (fieldErrors[name]) {
      setFieldErrors((prev) => ({ ...prev, [name]: "" }));
    }
    if (errorMessage) setErrorMessage("");
  };

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const validExtensions = ["pdf", "doc", "docx"];
      const fileExt = file.name.split(".").pop().toLowerCase();
      if (!validExtensions.includes(fileExt)) {
        setFieldErrors((prev) => ({
          ...prev,
          resume: "Invalid file type. Please upload a PDF, DOC, or DOCX file.",
        }));
        setSelectedFile(null);
        return;
      }

      if (file.size > 5 * 1024 * 1024) {
        setFieldErrors((prev) => ({
          ...prev,
          resume: "File size is too large. Please upload a resume under 5 MB.",
        }));
        setSelectedFile(null);
        return;
      }

      setSelectedFile(file);
      if (fieldErrors.resume) {
        setFieldErrors((prev) => ({ ...prev, resume: "" }));
      }
      if (errorMessage) setErrorMessage("");
    }
  };

  const validateForm = () => {
    const errors = {};

    if (!formData.fullName.trim()) {
      errors.fullName = "Full Name is required.";
    } else if (formData.fullName.trim().length < 2) {
      errors.fullName = "Full Name must be at least 2 characters.";
    } else if (formData.fullName.trim().length > 100) {
      errors.fullName = "Full Name cannot exceed 100 characters.";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      errors.email = "Email Address is required.";
    } else if (!emailRegex.test(formData.email.trim())) {
      errors.email = "Please enter a valid email address (e.g. name@domain.com).";
    }

    const phoneRegex = /^[+]*[(]?[0-9]{1,4}[)]?[-\s./0-9]{6,15}$/;
    if (!formData.mobileNumber.trim()) {
      errors.mobileNumber = "Mobile Number is required.";
    } else if (!phoneRegex.test(formData.mobileNumber.trim().replace(/\s/g, ""))) {
      errors.mobileNumber = "Please enter a valid mobile number (7-15 digits).";
    }

    if (!formData.currentCity.trim()) {
      errors.currentCity = "Current City is required.";
    }

    if (!formData.positionInterestedIn) {
      errors.positionInterestedIn = "Position Interested In is required.";
    }

    if (!formData.totalExperience) {
      errors.totalExperience = "Total Experience is required.";
    }

    if (!formData.noticePeriod) {
      errors.noticePeriod = "Notice Period is required.";
    }

    if (!selectedFile) {
      errors.resume = "Resume upload is required (PDF, DOC, or DOCX, max 5MB).";
    }

    if (!formData.whyJoinXtorc.trim()) {
      errors.whyJoinXtorc = "Please describe why you want to join XTORC.";
    } else if (formData.whyJoinXtorc.trim().length < 10) {
      errors.whyJoinXtorc = "Please provide at least 10 characters.";
    } else if (formData.whyJoinXtorc.trim().length > 500) {
      errors.whyJoinXtorc = "Reason for joining XTORC must not exceed 500 characters.";
    }

    setFieldErrors(errors);
    const errorList = Object.values(errors);
    return errorList.length > 0 ? errorList[0] : null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");

    const validationError = validateForm();
    if (validationError) {
      toast.error("Error", validationError);
      return;
    }

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

      // Show success state
      setIsSubmitted(true);
      setFieldErrors({});
      toast.success("Success", "Form submitted successfully");

      // Reset form fields immediately
      setFormData(INITIAL_FORM_STATE);
      setSelectedFile(null);

      // Center confirmation smoothly
      setTimeout(() => {
        formCardRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
      }, 100);

      // Automatically reset & disappear after exactly 6 seconds
      if (autoDismissTimerRef.current) {
        clearTimeout(autoDismissTimerRef.current);
      }
      autoDismissTimerRef.current = setTimeout(() => {
        setShowForm(false);
        setIsSubmitted(false);
        // Smoothly glide back to hero view
        heroRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 6000);
    } catch (err) {
      const backendMessage =
        err?.message || "Failed to submit application. Please verify your details.";
      setErrorMessage(backendMessage);
      toast.error("Error", "Form submission failed");
    } finally {
      setIsSubmitting(false);
    }
  };

  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <div className="bg-black text-white" style={{ fontFamily: "Poppins, sans-serif" }}>
      {/* Top Hero Section matching Distributor Hero Layout */}
      <div ref={heroRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-6 text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          {/* Main Heading with Red Underline */}
          <motion.div variants={itemVariants} className="w-fit mx-auto flex flex-col items-center mb-6">
            <h1 className="heading-main mb-0 text-white">
              Join Us
            </h1>
            <div className="w-full h-1 bg-[#D01A1A] mt-2 rounded-2xl"></div>
          </motion.div>

          {/* Subheading in Red Quote Style */}
          <motion.h2
            variants={itemVariants}
            className="text-lg sm:text-xl md:text-2xl font-semibold text-red-500 mb-6 leading-tight px-4"
          >
            &ldquo;Be Part of Our Growth Story&rdquo;
          </motion.h2>

          {/* Intro Description */}
          <motion.p
            variants={itemVariants}
            className="text-gray-200 text-base sm:text-lg md:text-xl leading-relaxed w-full max-w-4xl mx-auto mt-4 text-justify px-4"
          >
            XTORC is a growing startup driven by innovation, collaboration, and excellence. With strong industry expertise, we’re seeking passionate individuals—experienced or fresh—to join us in redefining industrial solutions. Explore roles in engineering, sales, and operations, and help shape the future of industrial tools and services right from the start.
          </motion.p>

          {/* "Join Us" Call To Action Button (Smooth fade and scale) */}
          <AnimatePresence>
            {!showForm && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.35, ease: "easeInOut" }}
                className="mt-8 flex justify-center"
              >
                <button
                  type="button"
                  onClick={handleOpenForm}
                  className="inline-flex items-center justify-center gap-2.5 px-10 py-3.5 rounded-xl font-bold text-white bg-gradient-to-r from-red-600 via-red-600 to-red-700 hover:from-red-500 hover:to-red-600 transition-all duration-300 shadow-xl shadow-red-600/30 hover:shadow-red-600/50 hover:scale-105 active:scale-95 cursor-pointer text-base sm:text-lg"
                >
                  <Briefcase className="w-5 h-5" />
                  <span>Join Us</span>
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Application Form Section (Smooth fluid reveal, auto-resets and disappears in 6s) */}
      <AnimatePresence>
        {showForm && (
          <motion.section
            initial={{ opacity: 0, y: 50, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.98, transition: { duration: 0.4 } }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10 overflow-visible"
          >
            <div
              ref={formCardRef}
              className="relative bg-gradient-to-b from-zinc-900 to-zinc-900/95 border border-zinc-700/80 border-t-4 border-t-red-600 rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.8),0_0_30px_rgba(220,38,38,0.06)]"
            >
              {/* Top-Right Quick Close Button */}
              <button
                type="button"
                onClick={handleCloseForm}
                className="absolute top-4 right-4 sm:top-6 sm:right-6 p-2 rounded-xl bg-zinc-800/80 hover:bg-zinc-700 text-gray-400 hover:text-white transition cursor-pointer border border-zinc-700/50"
                title="Close Form"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Form Heading with Pill Badge */}
              <div className="text-center mb-6 sm:mb-8 pr-8 pl-8">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-950/60 border border-red-800/60 text-red-400 text-xs sm:text-sm font-semibold uppercase tracking-wider mb-3">
                  <Briefcase className="w-4 h-4 text-red-500 flex-shrink-0" />
                  <span>Careers At XTORC</span>
                </div>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2 sm:mb-3">
                  Job Application Form
                </h3>
                <p className="text-gray-400 text-xs sm:text-sm md:text-base max-w-2xl mx-auto">
                  Fill in your professional details below to apply for career opportunities at XTORC.
                </p>
              </div>

              {/* Error Alert Banner */}
              {errorMessage && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 p-4 rounded-xl bg-red-950/60 border border-red-700/60 text-red-300 flex items-start gap-3 shadow-lg text-left"
                >
                  <AlertCircle className="w-5 h-5 mt-0.5 flex-shrink-0 text-red-400" />
                  <div>
                    <h4 className="font-semibold text-red-200 text-sm sm:text-base">Submission Error</h4>
                    <p className="text-xs sm:text-sm text-red-300/90 mt-0.5">{errorMessage}</p>
                  </div>
                </motion.div>
              )}

              {/* Submission Success View (Disappears after 6 seconds) */}
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4 }}
                  className="bg-zinc-900/90 border border-green-600/40 p-6 sm:p-10 rounded-2xl text-center shadow-2xl my-4 max-w-xl mx-auto"
                >
                  <div className="w-14 h-14 sm:w-16 sm:h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-4 border border-green-500/30">
                    <CheckCircle2 className="w-8 h-8 sm:w-10 sm:h-10 text-green-500" />
                  </div>
                  <h4 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-2">
                    Application Submitted!
                  </h4>
                  <p className="text-xs sm:text-sm md:text-base text-gray-300 mb-6 leading-relaxed">
                    Thank you for your interest in joining XTORC. Your profile and resume have been submitted directly to our HR & Talent Acquisition team.
                  </p>
                  <div className="flex justify-center">
                    <button
                      type="button"
                      onClick={handleCloseForm}
                      className="px-6 py-2.5 bg-zinc-800 hover:bg-zinc-700 text-gray-300 hover:text-white rounded-xl text-sm font-semibold cursor-pointer transition border border-zinc-700/60"
                    >
                      Close
                    </button>
                  </div>
                </motion.div>
              ) : (
                /* Form with Responsive 2-Column Grid (1 col on mobile, 2 col on tablet/desktop) */
                <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6 text-left" noValidate>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 md:gap-6">
                    {/* Row 1: Full Name */}
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <User className="absolute left-3.5 top-3.5 w-5 h-5 text-gray-400 pointer-events-none" />
                        <input
                          type="text"
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleInputChange}
                          placeholder="e.g. John Doe"
                          className={`w-full min-h-[48px] pl-11 pr-4 py-3 bg-[#0f0f12] border rounded-xl text-white font-medium text-sm placeholder-gray-400 shadow-inner focus:outline-none focus:ring-2 focus:ring-red-600/30 focus:bg-black transition-all ${
                            fieldErrors.fullName
                              ? "border-red-500 focus:border-red-500"
                              : "border-zinc-700/70 focus:border-red-600"
                          }`}
                        />
                      </div>
                      {fieldErrors.fullName && (
                        <p className="text-xs text-red-400 mt-1.5 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" /> <span>{fieldErrors.fullName}</span>
                        </p>
                      )}
                    </div>

                    {/* Row 1: Email Address */}
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3.5 top-3.5 w-5 h-5 text-gray-400 pointer-events-none" />
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="e.g. john.doe@example.com"
                          className={`w-full min-h-[48px] pl-11 pr-4 py-3 bg-[#0f0f12] border rounded-xl text-white font-medium text-sm placeholder-gray-400 shadow-inner focus:outline-none focus:ring-2 focus:ring-red-600/30 focus:bg-black transition-all ${
                            fieldErrors.email
                              ? "border-red-500 focus:border-red-500"
                              : "border-zinc-700/70 focus:border-red-600"
                          }`}
                        />
                      </div>
                      {fieldErrors.email && (
                        <p className="text-xs text-red-400 mt-1.5 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" /> <span>{fieldErrors.email}</span>
                        </p>
                      )}
                    </div>

                    {/* Row 2: Mobile Number */}
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Mobile Number <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <Phone className="absolute left-3.5 top-3.5 w-5 h-5 text-gray-400 pointer-events-none" />
                        <input
                          type="tel"
                          name="mobileNumber"
                          value={formData.mobileNumber}
                          onChange={handleInputChange}
                          placeholder="e.g. +91 98765 43210"
                          className={`w-full min-h-[48px] pl-11 pr-4 py-3 bg-[#0f0f12] border rounded-xl text-white font-medium text-sm placeholder-gray-400 shadow-inner focus:outline-none focus:ring-2 focus:ring-red-600/30 focus:bg-black transition-all ${
                            fieldErrors.mobileNumber
                              ? "border-red-500 focus:border-red-500"
                              : "border-zinc-700/70 focus:border-red-600"
                          }`}
                        />
                      </div>
                      {fieldErrors.mobileNumber && (
                        <p className="text-xs text-red-400 mt-1.5 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" /> <span>{fieldErrors.mobileNumber}</span>
                        </p>
                      )}
                    </div>

                    {/* Row 2: Current City */}
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Current City <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <MapPin className="absolute left-3.5 top-3.5 w-5 h-5 text-gray-400 pointer-events-none" />
                        <input
                          type="text"
                          name="currentCity"
                          value={formData.currentCity}
                          onChange={handleInputChange}
                          placeholder="e.g. Mumbai, Pune, Chennai..."
                          className={`w-full min-h-[48px] pl-11 pr-4 py-3 bg-[#0f0f12] border rounded-xl text-white font-medium text-sm placeholder-gray-400 shadow-inner focus:outline-none focus:ring-2 focus:ring-red-600/30 focus:bg-black transition-all ${
                            fieldErrors.currentCity
                              ? "border-red-500 focus:border-red-500"
                              : "border-zinc-700/70 focus:border-red-600"
                          }`}
                        />
                      </div>
                      {fieldErrors.currentCity && (
                        <p className="text-xs text-red-400 mt-1.5 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" /> <span>{fieldErrors.currentCity}</span>
                        </p>
                      )}
                    </div>

                    {/* Row 3: Position Interested In */}
                    <div>
                      <SelectDropdown
                        label="Position Interested In"
                        required
                        name="positionInterestedIn"
                        icon={Briefcase}
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
                        error={fieldErrors.positionInterestedIn}
                      />
                    </div>

                    {/* Row 3: Total Experience */}
                    <div>
                      <SelectDropdown
                        label="Total Experience"
                        required
                        name="totalExperience"
                        icon={Award}
                        value={formData.totalExperience}
                        options={["Fresher", "0–2 Years", "2–5 Years", "5+ Years"]}
                        onChange={handleInputChange}
                        error={fieldErrors.totalExperience}
                      />
                    </div>

                    {/* Row 4: Current Company */}
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Current Company / Organization
                      </label>
                      <div className="relative">
                        <Building2 className="absolute left-3.5 top-3.5 w-5 h-5 text-gray-400 pointer-events-none" />
                        <input
                          type="text"
                          name="currentCompany"
                          value={formData.currentCompany}
                          onChange={handleInputChange}
                          placeholder="e.g. Industrial Solutions Ltd. (Optional)"
                          className="w-full min-h-[48px] pl-11 pr-4 py-3 bg-[#0f0f12] border border-zinc-700/70 rounded-xl text-white font-medium text-sm placeholder-gray-400 shadow-inner focus:outline-none focus:ring-2 focus:ring-red-600/30 focus:border-red-600 focus:bg-black transition-all"
                        />
                      </div>
                    </div>

                    {/* Row 4: Current Designation */}
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Current Designation
                      </label>
                      <div className="relative">
                        <BadgeCheck className="absolute left-3.5 top-3.5 w-5 h-5 text-gray-400 pointer-events-none" />
                        <input
                          type="text"
                          name="currentDesignation"
                          value={formData.currentDesignation}
                          onChange={handleInputChange}
                          placeholder="e.g. Senior Mechanical Engineer (Optional)"
                          className="w-full min-h-[48px] pl-11 pr-4 py-3 bg-[#0f0f12] border border-zinc-700/70 rounded-xl text-white font-medium text-sm placeholder-gray-400 shadow-inner focus:outline-none focus:ring-2 focus:ring-red-600/30 focus:border-red-600 focus:bg-black transition-all"
                        />
                      </div>
                    </div>

                    {/* Row 5: Notice Period */}
                    <div>
                      <SelectDropdown
                        label="Notice Period"
                        required
                        name="noticePeriod"
                        icon={Calendar}
                        value={formData.noticePeriod}
                        options={["Immediate", "15 Days", "30 Days", "60+ Days"]}
                        onChange={handleInputChange}
                        error={fieldErrors.noticePeriod}
                      />
                    </div>

                    {/* Row 5: Resume Upload Box */}
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Upload Resume / CV <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <label
                          className={`w-full min-h-[48px] px-3.5 py-2.5 bg-[#0f0f12] border rounded-xl flex items-center justify-between shadow-inner transition-all cursor-pointer ${
                            fieldErrors.resume
                              ? "border-red-500 ring-2 ring-red-500/20"
                              : selectedFile
                              ? "border-red-600 ring-1 ring-red-600/40 bg-black"
                              : "border-zinc-700/70 hover:border-zinc-500"
                          }`}
                        >
                          <div className="flex items-center gap-2.5 overflow-hidden flex-1 min-w-0 mr-2">
                            <Upload
                              className={`w-5 h-5 flex-shrink-0 ${
                                selectedFile ? "text-red-500" : "text-gray-400"
                              }`}
                            />
                            <span className="text-xs sm:text-sm font-medium text-gray-300 truncate">
                              {selectedFile
                                ? selectedFile.name
                                : "Select PDF, DOC, DOCX (max 5MB)"}
                            </span>
                          </div>

                          {selectedFile ? (
                            <button
                              type="button"
                              onClick={(e) => {
                                e.preventDefault();
                                e.stopPropagation();
                                setSelectedFile(null);
                              }}
                              className="p-1 rounded-md text-gray-400 hover:text-red-400 hover:bg-zinc-800 transition flex-shrink-0"
                              title="Remove file"
                            >
                              <X className="w-4 h-4" />
                            </button>
                          ) : (
                            <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-zinc-800 text-gray-300 border border-zinc-700 flex-shrink-0">
                              Browse
                            </span>
                          )}

                          <input
                            type="file"
                            accept=".pdf,.doc,.docx"
                            onChange={handleFileChange}
                            className="hidden"
                          />
                        </label>
                      </div>
                      {fieldErrors.resume && (
                        <p className="text-xs text-red-400 mt-1.5 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" /> <span>{fieldErrors.resume}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Row 6: Why Join XTORC (Full Width Textarea matching Distributor) */}
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Why do you want to join XTORC? <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <MessageSquare className="absolute left-3.5 top-3.5 w-5 h-5 text-gray-400 pointer-events-none" />
                      <textarea
                        name="whyJoinXtorc"
                        rows={4}
                        value={formData.whyJoinXtorc}
                        onChange={handleInputChange}
                        placeholder="Briefly describe your background, career motivations, and why you are interested in joining the XTORC team (max 500 chars)..."
                        className={`w-full pl-11 pr-4 py-3 bg-[#0f0f12] border rounded-xl text-white font-medium text-sm placeholder-gray-400 shadow-inner focus:outline-none focus:ring-2 focus:ring-red-600/30 focus:bg-black transition-all resize-none ${
                          fieldErrors.whyJoinXtorc
                            ? "border-red-500 focus:border-red-500"
                            : "border-zinc-700/70 focus:border-red-600"
                        }`}
                      />
                    </div>
                    {fieldErrors.whyJoinXtorc && (
                      <p className="text-xs text-red-400 mt-1.5 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" /> <span>{fieldErrors.whyJoinXtorc}</span>
                      </p>
                    )}
                  </div>

                  {/* Action Buttons: Responsive layout (Cancel & Submit) */}
                  <div className="pt-2 flex flex-col-reverse sm:flex-row justify-end items-center gap-3">
                    <button
                      type="button"
                      onClick={handleCloseForm}
                      className="w-full sm:w-auto px-6 py-3 rounded-xl bg-zinc-800/80 hover:bg-zinc-700 text-gray-300 hover:text-white text-sm font-semibold transition cursor-pointer border border-zinc-700/50 text-center"
                    >
                      Cancel
                    </button>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-red-600 via-red-600 to-red-700 hover:from-red-500 hover:to-red-600 transition-all duration-300 shadow-lg shadow-red-600/30 hover:shadow-red-600/50 hover:scale-[1.02] active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none cursor-pointer"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" />
                          <span>Submitting Application...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          <span>Submit Application</span>
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </motion.section>
        )}
      </AnimatePresence>
    </div>
  );
}
