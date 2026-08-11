"use client";
import React from "react";
import { MapPin, Mail, Phone } from "lucide-react";
import { motion } from "framer-motion";
import { FaLink } from "react-icons/fa";

const ContactUs = () => {
  return (
    <div>
      <section className="py-12 px-4 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="border border-red-600 rounded-lg p-8">
                <div className="space-y-6">
                  <div>
                    <input
                      type="text"
                      placeholder="Name"
                      className="w-full px-4 py-3 bg-transparent border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-red-600 focus:outline-none"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Email"
                      className="w-full px-4 py-3 bg-transparent border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-red-600 focus:outline-none"
                    />
                  </div>
                  <div>
                    <input
                      type="tel"
                      placeholder="Phone No"
                      className="w-full px-4 py-3 bg-transparent border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-red-600 focus:outline-none"
                    />
                  </div>
                  <div>
                    <textarea
                      placeholder="Message - Provide detailed information about your requirements to help you"
                      rows="4"
                      className="w-full px-4 py-3 bg-transparent border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-red-600 focus:outline-none resize-none"
                    ></textarea>
                  </div>
                  <div className="flex items-center mt-4">
                    <button
                      type="button"
                      className="w-[10rem] bg-red-600 text-white py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors"
                    >
                      Send Message
                    </button>

                    <h3 className="text-base font-bold text-white pl-5">
                      Request a Call!
                    </h3>
                  </div>
                </div>
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
                  initial={{ scaleX: 0, opacity: 0 }}
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
                className="text-body mb-8 text-white md:ml-5"
              >
                Need expert advice or tailored solutions? Get in touch with
                Xtorc for unmatched support and personalized service.
              </motion.p>

              {/* Contact Details */}
              <div className="space-y-4">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-2 md:ml-5"
                >
                  <MapPin className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />

                  <div className="relative group">
                    <a
                      href="https://www.google.com/maps/place/TTC+Industrial+Area,+MIDC+Industrial+Area,+Pawne,+Navi+Mumbai,+Maharashtra/@19.0977243,73.0073362,15z/data=!4m6!3m5!1s0x3be7c11f4122adab:0xbbf10ca80ffcb57f!8m2!3d19.0937817!4d73.0187585!16s%2Fg%2F12vsgftrg?entry=ttu"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white underline hover:text-red-600"
                    >
                      <p className="text-base text-left leading-tight">B-Wing 3rd Floor Office No.35, Plot No C-39A, TTC Industrial Area,MIDC Industrial Area, Pawne, Navi Mumbai Maharashtra 400710</p>
                    </a>

                    {/* Tooltip */}
                    <div className="absolute left-1 -top-14 translate-x-1 hidden group-hover:flex items-center gap-2 bg-black text-white text-sm px-3 py-2 rounded-lg shadow-lg">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 text-red-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M10 14L21 3m0 0l-7.5 7.5M21 3h-6"
                        />
                      </svg>
                      <div className="absolute left-1/2 -translate-x-1/2 top-full mt-2 hidden group-hover:flex items-center gap-2 bg-black text-white text-sm px-4 py-2 rounded-lg shadow-lg">
                        <div className="absolute left-1 -translate-x-1 -top-14 mt-10 hidden group-hover:flex items-center bg-black text-white text-sm px-4 py-2 rounded-lg shadow-lg">
                          <div className="flex items-center gap-2">
                            <FaLink className="text-red-500 " />
                            <span>Open maps.app.goo.gl/Djw4bBEvEV2WwS3NA</span>
                          </div>
                        </div>

                      </div>

                    </div>
                  </div>
                </motion.div>


                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.7 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-2 md:ml-5"
                >
                  <Mail className="w-6 h-6 text-red-600 flex-shrink-0" />
                  <a
                    href="mailto:ENQUIRY@XTORCIND.COM"
                    className="text-white hover:text-red-600 transition-colors text-base"
                  >
                    ENQUIRY@XTORCIND.COM
                  </a>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-2 md:ml-5"
                >
                  <Phone className="w-6 h-6 text-red-600 flex-shrink-0" />
                  <div className="space-y-1">
                    <a
                      href="tel:+919619561695"
                      className="block text-white hover:text-red-600 transition-colors text-base"
                    >
                      +91 9619561695 / 8108810057
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
