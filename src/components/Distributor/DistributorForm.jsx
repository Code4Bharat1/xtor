"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  Building2, 
  User, 
  Mail, 
  Phone, 
  Globe2, 
  Briefcase, 
  MessageSquare, 
  Send, 
  Loader2, 
  CheckCircle2, 
  AlertCircle 
} from "lucide-react";
import { api } from "@/services/apiClient";

const DistributorForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    country: "",
    experience: "",
    message: "",
  });

  const [fieldErrors, setFieldErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const validateForm = () => {
    const errors = {};

    if (!formData.name.trim()) {
      errors.name = "Contact person name is required.";
    } else if (formData.name.trim().length < 2) {
      errors.name = "Name must be at least 2 characters.";
    }

    if (!formData.company.trim()) {
      errors.company = "Company name is required.";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      errors.email = "Email address is required.";
    } else if (!emailRegex.test(formData.email.trim())) {
      errors.email = "Please enter a valid email address.";
    }

    const phoneRegex = /^[+]*[(]?[0-9]{1,4}[)]?[-\s./0-9]{6,15}$/;
    if (!formData.phone.trim()) {
      errors.phone = "Phone number is required.";
    } else if (!phoneRegex.test(formData.phone.trim().replace(/\s/g, ""))) {
      errors.phone = "Please enter a valid phone number.";
    }

    if (!formData.country.trim()) {
      errors.country = "Country / Region of interest is required.";
    }

    if (!formData.message.trim()) {
      errors.message = "Please provide brief details about your company and capabilities.";
    } else if (formData.message.trim().length < 10) {
      errors.message = "Message must be at least 10 characters long.";
    }

    setFieldErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (fieldErrors[name]) {
      setFieldErrors((prev) => ({ ...prev, [name]: "" }));
    }
    if (errorMessage) setErrorMessage("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setLoading(true);
    setSuccessMessage("");
    setErrorMessage("");

    try {
      const response = await api.post("/distributor", {
        name: formData.name.trim(),
        company: formData.company.trim(),
        email: formData.email.trim(),
        phone: formData.phone.trim(),
        country: formData.country.trim(),
        experience: formData.experience.trim(),
        message: formData.message.trim()
      });

      setSuccessMessage(
        response?.message || "Thank you! Your distributor application has been submitted successfully. Our team will review your details and contact you shortly."
      );
      setFormData({
        name: "",
        company: "",
        email: "",
        phone: "",
        country: "",
        experience: "",
        message: "",
      });
      setFieldErrors({});
    } catch (err) {
      setErrorMessage(
        err?.message || "Failed to submit your distributor application. Please check your connection and try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="bg-gradient-to-b from-zinc-900/90 to-zinc-950/90 border border-zinc-800 rounded-3xl p-6 sm:p-10 shadow-2xl backdrop-blur-sm"
      >
        {/* Form Heading */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-950/60 border border-red-800/60 text-red-400 text-xs sm:text-sm font-semibold uppercase tracking-wider mb-3">
            <Building2 className="w-4 h-4 text-red-500" />
            Partner With XTORC
          </div>
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3">
            Distributor Application Form
          </h3>
          <p className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto">
            Expand your industrial supply portfolio with world-class hydraulic bolting and machining tools. Submit your application below to join our growing global distribution network.
          </p>
        </div>

        {/* Success Alert */}
        {successMessage && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 p-4 rounded-xl bg-emerald-950/60 border border-emerald-700/60 text-emerald-300 flex items-start gap-3 shadow-lg"
          >
            <CheckCircle2 className="w-5 h-5 mt-0.5 flex-shrink-0 text-emerald-400" />
            <div>
              <h4 className="font-semibold text-emerald-200">Application Received</h4>
              <p className="text-sm text-emerald-300/90 mt-0.5">{successMessage}</p>
            </div>
          </motion.div>
        )}

        {/* Error Alert */}
        {errorMessage && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 p-4 rounded-xl bg-red-950/60 border border-red-700/60 text-red-300 flex items-start gap-3 shadow-lg"
          >
            <AlertCircle className="w-5 h-5 mt-0.5 flex-shrink-0 text-red-400" />
            <div>
              <h4 className="font-semibold text-red-200">Submission Error</h4>
              <p className="text-sm text-red-300/90 mt-0.5">{errorMessage}</p>
            </div>
          </motion.div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
            {/* Contact Person Name */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Contact Person Name <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <User className="absolute left-3.5 top-3.5 w-5 h-5 text-gray-500 pointer-events-none" />
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="e.g. John Doe"
                  className={`w-full pl-11 pr-4 py-3 bg-zinc-950/80 border rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-600 transition-all ${
                    fieldErrors.name ? "border-red-500 focus:border-red-500" : "border-zinc-800 focus:border-red-600"
                  }`}
                />
              </div>
              {fieldErrors.name && (
                <p className="text-xs text-red-400 mt-1.5 flex items-center gap-1">
                  <AlertCircle className="w-3.5 h-3.5" /> {fieldErrors.name}
                </p>
              )}
            </div>

            {/* Company Name */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Company / Organization Name <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <Building2 className="absolute left-3.5 top-3.5 w-5 h-5 text-gray-500 pointer-events-none" />
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="e.g. Industrial Supplies Ltd."
                  className={`w-full pl-11 pr-4 py-3 bg-zinc-950/80 border rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-600 transition-all ${
                    fieldErrors.company ? "border-red-500 focus:border-red-500" : "border-zinc-800 focus:border-red-600"
                  }`}
                />
              </div>
              {fieldErrors.company && (
                <p className="text-xs text-red-400 mt-1.5 flex items-center gap-1">
                  <AlertCircle className="w-3.5 h-3.5" /> {fieldErrors.company}
                </p>
              )}
            </div>

            {/* Email Address */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Official Email Address <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <Mail className="absolute left-3.5 top-3.5 w-5 h-5 text-gray-500 pointer-events-none" />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="e.g. partner@company.com"
                  className={`w-full pl-11 pr-4 py-3 bg-zinc-950/80 border rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-600 transition-all ${
                    fieldErrors.email ? "border-red-500 focus:border-red-500" : "border-zinc-800 focus:border-red-600"
                  }`}
                />
              </div>
              {fieldErrors.email && (
                <p className="text-xs text-red-400 mt-1.5 flex items-center gap-1">
                  <AlertCircle className="w-3.5 h-3.5" /> {fieldErrors.email}
                </p>
              )}
            </div>

            {/* Phone Number */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Phone Number / WhatsApp <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <Phone className="absolute left-3.5 top-3.5 w-5 h-5 text-gray-500 pointer-events-none" />
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="e.g. +91 98765 43210"
                  className={`w-full pl-11 pr-4 py-3 bg-zinc-950/80 border rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-600 transition-all ${
                    fieldErrors.phone ? "border-red-500 focus:border-red-500" : "border-zinc-800 focus:border-red-600"
                  }`}
                />
              </div>
              {fieldErrors.phone && (
                <p className="text-xs text-red-400 mt-1.5 flex items-center gap-1">
                  <AlertCircle className="w-3.5 h-3.5" /> {fieldErrors.phone}
                </p>
              )}
            </div>

            {/* Country / Territory */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Target Country / Territory of Interest <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <Globe2 className="absolute left-3.5 top-3.5 w-5 h-5 text-gray-500 pointer-events-none" />
                <input
                  type="text"
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  placeholder="e.g. Saudi Arabia, Germany, Vietnam..."
                  className={`w-full pl-11 pr-4 py-3 bg-zinc-950/80 border rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-600 transition-all ${
                    fieldErrors.country ? "border-red-500 focus:border-red-500" : "border-zinc-800 focus:border-red-600"
                  }`}
                />
              </div>
              {fieldErrors.country && (
                <p className="text-xs text-red-400 mt-1.5 flex items-center gap-1">
                  <AlertCircle className="w-3.5 h-3.5" /> {fieldErrors.country}
                </p>
              )}
            </div>

            {/* Years in Business / Experience */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Years in Industrial / Bolting Equipment Business
              </label>
              <div className="relative">
                <Briefcase className="absolute left-3.5 top-3.5 w-5 h-5 text-gray-500 pointer-events-none" />
                <input
                  type="text"
                  name="experience"
                  value={formData.experience}
                  onChange={handleChange}
                  placeholder="e.g. 5+ Years / Distributing hydraulic tools"
                  className="w-full pl-11 pr-4 py-3 bg-zinc-950/80 border border-zinc-800 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-600 transition-all"
                />
              </div>
            </div>
          </div>

          {/* Business Overview & Message */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Business Overview & Capabilities <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <MessageSquare className="absolute left-3.5 top-3.5 w-5 h-5 text-gray-500 pointer-events-none" />
              <textarea
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                placeholder="Briefly describe your existing distribution network, client base (e.g. Oil & Gas, Wind, Construction), and why you want to partner with XTORC..."
                className={`w-full pl-11 pr-4 py-3 bg-zinc-950/80 border rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-600 transition-all resize-none ${
                  fieldErrors.message ? "border-red-500 focus:border-red-500" : "border-zinc-800 focus:border-red-600"
                }`}
              />
            </div>
            {fieldErrors.message && (
              <p className="text-xs text-red-400 mt-1.5 flex items-center gap-1">
                <AlertCircle className="w-3.5 h-3.5" /> {fieldErrors.message}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <div className="pt-2 flex justify-center sm:justify-end">
            <button
              type="submit"
              disabled={loading}
              className="inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-red-600 via-red-600 to-red-700 hover:from-red-500 hover:to-red-600 transition-all duration-300 shadow-lg shadow-red-600/30 hover:shadow-red-600/50 hover:scale-[1.02] active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none w-full sm:w-auto"
            >
              {loading ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  <span>Submitting Application...</span>
                </>
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  <span>Submit</span>
                </>
              )}
            </button>
          </div>
        </form>
      </motion.div>
    </section>
  );
};

export default DistributorForm;