"use client";
import React, { useState } from "react";
import { MapPin, Mail, Phone, Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import { motion } from "framer-motion";
import { api } from "@/services/apiClient";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const [fieldErrors, setFieldErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const validateForm = () => {
    const errors = {};

    // Name validation
    if (!formData.name.trim()) {
      errors.name = "Your Name is required.";
    } else if (formData.name.trim().length < 2) {
      errors.name = "Name must be at least 2 characters.";
    } else if (formData.name.trim().length > 100) {
      errors.name = "Name cannot exceed 100 characters.";
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      errors.email = "Email Address is required.";
    } else if (!emailRegex.test(formData.email.trim())) {
      errors.email = "Please enter a valid email address (e.g. name@domain.com).";
    }

    // Phone validation
    const phoneRegex = /^[+]*[(]?[0-9]{1,4}[)]?[-\s./0-9]{6,15}$/;
    if (!formData.phone.trim()) {
      errors.phone = "Phone Number is required.";
    } else if (!phoneRegex.test(formData.phone.trim().replace(/\s/g, ""))) {
      errors.phone = "Please enter a valid phone number (7-15 digits).";
    }

    // Message validation
    if (!formData.message.trim()) {
      errors.message = "Message is required.";
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

    if (!validateForm()) {
      return;
    }

    setLoading(true);
    setSuccessMessage("");
    setErrorMessage("");

    try {
      const response = await api.post("/contact", {
        name: formData.name.trim(),
        email: formData.email.trim(),
        phone: formData.phone.trim(),
        message: formData.message.trim(),
        subject: "Homepage Contact Enquiry"
      });

      setSuccessMessage(
        response.message || "Thank you! Your message has been sent successfully. We will get back to you shortly."
      );
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: ""
      });
      setFieldErrors({});
    } catch (err) {
      setErrorMessage(
        err.message || "Failed to send your message. Please try again or reach out to us directly."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <section className="py-12 px-4 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="border border-red-600 rounded-lg p-6 sm:p-8 bg-zinc-950/40">
                <form onSubmit={handleSubmit} noValidate className="space-y-4">
                  {successMessage && (
                    <div className="flex items-start gap-3 p-4 rounded-lg bg-green-950/70 border border-green-500/80 text-green-200 text-sm">
                      <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <span>{successMessage}</span>
                    </div>
                  )}

                  {errorMessage && (
                    <div className="flex items-start gap-3 p-4 rounded-lg bg-red-950/70 border border-red-500/80 text-red-200 text-sm">
                      <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  {/* Name */}
                  <div className="space-y-1">
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your Name *"
                      className={`w-full px-4 py-3 bg-transparent border rounded-lg text-white placeholder-gray-400 focus:outline-none transition-colors text-sm sm:text-base ${
                        fieldErrors.name
                          ? "border-red-500 focus:ring-1 focus:ring-red-500"
                          : "border-gray-600 focus:border-red-600"
                      }`}
                    />
                    {fieldErrors.name && (
                      <p className="text-xs text-red-400 pl-1">{fieldErrors.name}</p>
                    )}
                  </div>

                  {/* Email */}
                  <div className="space-y-1">
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Email Address *"
                      className={`w-full px-4 py-3 bg-transparent border rounded-lg text-white placeholder-gray-400 focus:outline-none transition-colors text-sm sm:text-base ${
                        fieldErrors.email
                          ? "border-red-500 focus:ring-1 focus:ring-red-500"
                          : "border-gray-600 focus:border-red-600"
                      }`}
                    />
                    {fieldErrors.email && (
                      <p className="text-xs text-red-400 pl-1">{fieldErrors.email}</p>
                    )}
                  </div>

                  {/* Phone */}
                  <div className="space-y-1">
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Phone Number *"
                      className={`w-full px-4 py-3 bg-transparent border rounded-lg text-white placeholder-gray-400 focus:outline-none transition-colors text-sm sm:text-base ${
                        fieldErrors.phone
                          ? "border-red-500 focus:ring-1 focus:ring-red-500"
                          : "border-gray-600 focus:border-red-600"
                      }`}
                    />
                    {fieldErrors.phone && (
                      <p className="text-xs text-red-400 pl-1">{fieldErrors.phone}</p>
                    )}
                  </div>

                  {/* Message */}
                  <div className="space-y-1">
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Message - Provide detailed information about your requirements to help you *"
                      rows="4"
                      className={`w-full px-4 py-3 bg-transparent border rounded-lg text-white placeholder-gray-400 focus:outline-none resize-none transition-colors text-sm sm:text-base ${
                        fieldErrors.message
                          ? "border-red-500 focus:ring-1 focus:ring-red-500"
                          : "border-gray-600 focus:border-red-600"
                      }`}
                    ></textarea>
                    {fieldErrors.message && (
                      <p className="text-xs text-red-400 pl-1">{fieldErrors.message}</p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div className="flex flex-wrap items-center gap-4 pt-2">
                    <button
                      type="submit"
                      disabled={loading}
                      className="min-w-[10rem] inline-flex justify-center items-center gap-2 bg-red-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-red-700 disabled:opacity-60 disabled:cursor-not-allowed transition-colors"
                    >
                      {loading ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" />
                          <span>Sending...</span>
                        </>
                      ) : (
                        <span>Send Message</span>
                      )}
                    </button>

                    <a
                      href="tel:+919619561695"
                      className="text-base font-bold text-white hover:text-red-500 transition-colors inline-flex items-center gap-1.5"
                    >
                      <Phone className="w-4 h-4 text-red-600" />
                      <span>Request a Call!</span>
                    </a>
                  </div>
                </form>
              </div>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true, amount: 0.3 }}
              className="font-[var(--font-poppins)]"
            >
              {/* Heading with Impact font */}
              <div className="w-fit md:ml-5 mb-6">
                <motion.h2
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="text-xl sm:text-2xl md:text-3xl font-bold font-poppins mb-0 text-white"
                >
                  CONTACT US NOW!
                </motion.h2>
                {/* Red Border */}
                <motion.div
                  initial={{ scaleX: 0, opacity: 1 }}
                  whileInView={{ scaleX: 1, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="h-1 bg-red-600 w-full rounded-full mt-2"
                ></motion.div>
              </div>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                viewport={{ once: true }}
                className="text-body mb-8 text-white md:ml-5 leading-relaxed"
              >
                Need expert advice or tailored solutions? Get in touch with
                XTORC for unmatched support and personalized service.
              </motion.p>

              {/* Contact Details */}
              <div className="space-y-5">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-3 md:ml-5"
                >
                  <MapPin className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                  <div>
                    <a
                      href="https://www.google.com/maps/place/TTC+Industrial+Area,+MIDC+Industrial+Area,+Pawne,+Navi+Mumbai,+Maharashtra/@19.0977243,73.0073362,15z/data=!4m6!3m5!1s0x3be7c11f4122adab:0xbbf10ca80ffcb57f!8m2!3d19.0937817!4d73.0187585!16s%2Fg%2F12vsgftrg?entry=ttu"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-red-500 transition-colors"
                    >
                      <p className="text-sm sm:text-base leading-relaxed">
                        B-Wing 3rd Floor Office No.35, Plot No C-39A, TTC Industrial Area, MIDC Industrial Area, Pawne, Navi Mumbai, Maharashtra 400710
                      </p>
                    </a>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.7 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-3 md:ml-5"
                >
                  <Mail className="w-6 h-6 text-red-600 flex-shrink-0" />
                  <a
                    href="mailto:ENQUIRY@XTORCIND.COM"
                    className="text-white hover:text-red-500 transition-colors text-sm sm:text-base"
                  >
                    ENQUIRY@XTORCIND.COM
                  </a>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-3 md:ml-5"
                >
                  <Phone className="w-6 h-6 text-red-600 flex-shrink-0" />
                  <div className="space-y-1">
                    <a
                      href="tel:+919619561695"
                      className="block text-white hover:text-red-500 transition-colors text-sm sm:text-base"
                    >
                      +91 9619561695 / +91 8108810057
                    </a>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
