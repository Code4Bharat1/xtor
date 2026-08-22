"use client"
import React, { useState } from "react"
import { motion } from "framer-motion"
import { Loader2, CheckCircle2, AlertCircle } from "lucide-react"
import { api } from "@/services/apiClient"

function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    company: "",
    message: ""
  })

  const [fieldErrors, setFieldErrors] = useState({})
  const [loading, setLoading] = useState(false)
  const [successMessage, setSuccessMessage] = useState("")
  const [errorMessage, setErrorMessage] = useState("")

  const validateForm = () => {
    const errors = {}

    // Name validation
    if (!formData.name.trim()) {
      errors.name = "Full Name is required."
    } else if (formData.name.trim().length < 2) {
      errors.name = "Name must be at least 2 characters."
    } else if (formData.name.trim().length > 100) {
      errors.name = "Name cannot exceed 100 characters."
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!formData.email.trim()) {
      errors.email = "Email Address is required."
    } else if (!emailRegex.test(formData.email.trim())) {
      errors.email = "Please enter a valid email address (e.g. name@company.com)."
    }

    // Phone validation
    const phoneRegex = /^[+]*[(]?[0-9]{1,4}[)]?[-\s./0-9]{6,15}$/
    if (!formData.phone.trim()) {
      errors.phone = "Phone Number is required."
    } else if (!phoneRegex.test(formData.phone.trim().replace(/\s/g, ""))) {
      errors.phone = "Please enter a valid phone number (7-15 digits)."
    }

    // Subject validation
    if (!formData.subject.trim()) {
      errors.subject = "Subject is required."
    } else if (formData.subject.trim().length < 3) {
      errors.subject = "Subject must be at least 3 characters."
    }

    // Message validation
    if (!formData.message.trim()) {
      errors.message = "Message is required."
    } else if (formData.message.trim().length < 10) {
      errors.message = "Message must be at least 10 characters long."
    }

    setFieldErrors(errors)
    return Object.keys(errors).length === 0
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (fieldErrors[name]) {
      setFieldErrors((prev) => ({ ...prev, [name]: "" }))
    }
    if (errorMessage) setErrorMessage("")
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setLoading(true)
    setSuccessMessage("")
    setErrorMessage("")

    try {
      const response = await api.post("/contact", {
        name: formData.name.trim(),
        email: formData.email.trim(),
        phone: formData.phone.trim(),
        subject: formData.subject.trim(),
        company: formData.company.trim(),
        message: formData.message.trim()
      })

      setSuccessMessage(
        response.message || "Thank you! Your query has been submitted successfully. We will get in touch with you shortly."
      )
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        company: "",
        message: ""
      })
      setFieldErrors({})
    } catch (err) {
      setErrorMessage(
        err.message || "Failed to submit your query. Please try again or reach out to us directly."
      )
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="w-full flex flex-col items-center py-2">
      {/* Form card with animation */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        viewport={{ once: true }}
        className="w-full max-w-3xl rounded-3xl border border-gray-200 shadow-xl hover:shadow-red-600/30 transition-all duration-300 bg-white p-6 sm:p-8 md:p-10"
      >
        <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-4">
          {successMessage && (
            <div className="flex items-start gap-3 p-4 rounded-lg bg-green-50 border border-green-300 text-green-800 text-sm">
              <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
              <span>{successMessage}</span>
            </div>
          )}

          {errorMessage && (
            <div className="flex items-start gap-3 p-4 rounded-lg bg-red-50 border border-red-300 text-red-800 text-sm">
              <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
              <span>{errorMessage}</span>
            </div>
          )}

          {/* Name */}
          <div className="flex flex-col gap-1.5">
            <label htmlFor="name" className="text-sm font-medium text-gray-900">
              Name <span className="text-red-600">*</span>
            </label>
            <input
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter Full Name"
              className={`w-full rounded-lg border bg-white px-4 py-2.5 sm:py-3 text-sm md:text-base text-gray-900 placeholder:text-gray-400 focus:outline-none transition-colors ${
                fieldErrors.name
                  ? "border-red-500 focus:ring-2 focus:ring-red-500"
                  : "border-gray-500 focus:border-red-500 focus:ring-2 focus:ring-red-500"
              }`}
            />
            {fieldErrors.name && (
              <p className="text-xs text-red-600 font-medium">{fieldErrors.name}</p>
            )}
          </div>

          {/* Email & Phone Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Email */}
            <div className="flex flex-col gap-1.5">
              <label htmlFor="email" className="text-sm font-medium text-gray-900">
                Email Address <span className="text-red-600">*</span>
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="name@company.com"
                className={`w-full rounded-lg border bg-white px-4 py-2.5 sm:py-3 text-sm md:text-base text-gray-900 placeholder:text-gray-400 focus:outline-none transition-colors ${
                  fieldErrors.email
                    ? "border-red-500 focus:ring-2 focus:ring-red-500"
                    : "border-gray-500 focus:border-red-500 focus:ring-2 focus:ring-red-500"
                }`}
              />
              {fieldErrors.email && (
                <p className="text-xs text-red-600 font-medium">{fieldErrors.email}</p>
              )}
            </div>

            {/* Phone */}
            <div className="flex flex-col gap-1.5">
              <label htmlFor="phone" className="text-sm font-medium text-gray-900">
                Phone Number <span className="text-red-600">*</span>
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+91 98765 43210"
                className={`w-full rounded-lg border bg-white px-4 py-2.5 sm:py-3 text-sm md:text-base text-gray-900 placeholder:text-gray-400 focus:outline-none transition-colors ${
                  fieldErrors.phone
                    ? "border-red-500 focus:ring-2 focus:ring-red-500"
                    : "border-gray-500 focus:border-red-500 focus:ring-2 focus:ring-red-500"
                }`}
              />
              {fieldErrors.phone && (
                <p className="text-xs text-red-600 font-medium">{fieldErrors.phone}</p>
              )}
            </div>
          </div>

          {/* Subject & Company Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Subject */}
            <div className="flex flex-col gap-1.5">
              <label htmlFor="subject" className="text-sm font-medium text-gray-900">
                Subject <span className="text-red-600">*</span>
              </label>
              <input
                id="subject"
                name="subject"
                type="text"
                value={formData.subject}
                onChange={handleChange}
                placeholder="e.g. Hydraulic Torque Wrench Enquiry"
                className={`w-full rounded-lg border bg-white px-4 py-2.5 sm:py-3 text-sm md:text-base text-gray-900 placeholder:text-gray-400 focus:outline-none transition-colors ${
                  fieldErrors.subject
                    ? "border-red-500 focus:ring-2 focus:ring-red-500"
                    : "border-gray-500 focus:border-red-500 focus:ring-2 focus:ring-red-500"
                }`}
              />
              {fieldErrors.subject && (
                <p className="text-xs text-red-600 font-medium">{fieldErrors.subject}</p>
              )}
            </div>

            {/* Company Name */}
            <div className="flex flex-col gap-1.5">
              <label htmlFor="company" className="text-sm font-medium text-gray-900">
                Company Name <span className="text-xs text-gray-500">(Optional)</span>
              </label>
              <input
                id="company"
                name="company"
                type="text"
                value={formData.company}
                onChange={handleChange}
                placeholder="Your Company Name"
                className="w-full rounded-lg border border-gray-500 bg-white px-4 py-2.5 sm:py-3 text-sm md:text-base text-gray-900 placeholder:text-gray-400 focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-500 transition-colors"
              />
            </div>
          </div>

          {/* Message */}
          <div className="flex flex-col gap-1.5">
            <label htmlFor="message" className="text-sm font-medium text-gray-900">
              Message <span className="text-red-600">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              placeholder="Provide detailed information about your tool, service, or torque requirements..."
              className={`w-full rounded-lg border bg-white px-4 py-2.5 sm:py-3 text-sm md:text-base text-gray-900 placeholder:text-gray-400 focus:outline-none resize-none transition-colors ${
                fieldErrors.message
                  ? "border-red-500 focus:ring-2 focus:ring-red-500"
                  : "border-gray-500 focus:border-red-500 focus:ring-2 focus:ring-red-500"
              }`}
            />
            {fieldErrors.message && (
              <p className="text-xs text-red-600 font-medium">{fieldErrors.message}</p>
            )}
          </div>

          {/* Actions */}
          <div className="mt-2 flex flex-col sm:flex-row items-center gap-3 sm:gap-4">
            <button
              type="submit"
              disabled={loading}
              className="w-full sm:w-auto inline-flex justify-center items-center gap-2 rounded-full bg-red-600 px-7 py-3 text-sm md:text-base font-semibold text-white hover:bg-red-700 disabled:opacity-60 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-red-500 transition-colors shadow-md"
            >
              {loading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Submitting...</span>
                </>
              ) : (
                <span>Submit Your Query</span>
              )}
            </button>
            <a
              href="tel:+919619561695"
              className="text-sm md:text-base font-medium text-gray-900 hover:text-red-600 hover:underline transition-colors"
            >
              Request A Call!
            </a>
          </div>
        </form>
      </motion.div>
    </section>
  )
}

export default ContactSection
