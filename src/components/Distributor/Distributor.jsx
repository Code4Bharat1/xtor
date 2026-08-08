'use client';
import React from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Building2 } from "lucide-react";

// Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

function DistributorPage() {
  const distributorsList = [
    {
      name: "ABC Traders",
      location: "Mumbai",
      contact: "+91 98765 43210",
      email: "abc@example.com",
    },
    {
      name: "XYZ Solutions",
      location: "Pune",
      contact: "+91 91234 56789",
      email: "xyz@example.com",
    },
  ];

  return (
    <div className="bg-black text-white flex items-start justify-center pt-6 pb-4 px-4 sm:px-8">
      <motion.div
        className="w-9/10 mx-auto text-center"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        {/* Service Heading */}
        <div className="w-fit mx-auto flex flex-col items-center mb-8">
          <motion.h1
            variants={fadeInUp}
            className="heading-main"
          >
            Distributor
          </motion.h1>
          <div className="w-full h-1 bg-[#D01A1A] mt-2 rounded-2xl"></div>
        </div>

        {/* Main Description Text */}
        <motion.h2
          variants={fadeInUp}
          className="heading-sub mb-8 leading-tight px-4"
        >
          "Expand Your Reach. Become a Distributor."
        </motion.h2>

        {/* Bottom Description Paragraph */}
        <motion.p
          variants={fadeInUp}
          className="text-body w-full mx-auto mt-6 text-justify px-4"
        >
          Be part of our journey as we grow. At Xtorc, we’re building strong partnerships with passionate distributors who believe in innovation and long-term impact.  
          <br />
          <br />
          As an early partner, you’ll gain access to new markets, priority support, and the chance to shape the future of our distribution network right from the start.
        </motion.p>

        {/* Authorized Distributors Table (Added after the paragraph) */}
        <motion.div variants={fadeInUp} className="mt-8 w-full text-left">
          <div className="w-fit mx-auto flex flex-col items-center mb-6">
            <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight flex items-center gap-2">
              <Building2 className="w-6 h-6 text-red-500" />
              Authorized Distributors Network
            </h3>
            <div className="w-16 h-0.5 bg-red-600 rounded-full mt-2" />
          </div>

          <div className="overflow-x-auto rounded-2xl border border-zinc-800 shadow-2xl bg-zinc-950/80 backdrop-blur-xl">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-zinc-900/90 border-b border-zinc-800 text-zinc-300 text-xs sm:text-sm uppercase tracking-wider">
                  <th className="py-4 px-6 font-semibold">Distributor</th>
                  <th className="py-4 px-6 font-semibold">Location</th>
                  <th className="py-4 px-6 font-semibold">Contact</th>
                  <th className="py-4 px-6 font-semibold">Email</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-800/80 text-sm text-zinc-300">
                {distributorsList.map((dist, idx) => (
                  <tr
                    key={idx}
                    className="hover:bg-zinc-900/50 transition-colors duration-200"
                  >
                    <td className="py-4 px-6 font-bold text-white flex items-center gap-2">
                      <Building2 className="w-4 h-4 text-red-500 flex-shrink-0" />
                      <span>{dist.name}</span>
                    </td>
                    <td className="py-4 px-6 font-medium text-zinc-300">
                      <div className="flex items-center gap-1.5">
                        <MapPin className="w-4 h-4 text-zinc-400 flex-shrink-0" />
                        <span>{dist.location}</span>
                      </div>
                    </td>
                    <td className="py-4 px-6 font-medium">
                      <a
                        href={`tel:${dist.contact.replace(/\s+/g, '')}`}
                        className="flex items-center gap-1.5 text-zinc-300 hover:text-red-400 transition-colors"
                      >
                        <Phone className="w-4 h-4 text-zinc-400 flex-shrink-0" />
                        <span>{dist.contact}</span>
                      </a>
                    </td>
                    <td className="py-4 px-6 font-medium">
                      <a
                        href={`mailto:${dist.email}`}
                        className="flex items-center gap-1.5 text-red-400 hover:text-red-300 underline underline-offset-4 transition-colors"
                      >
                        <Mail className="w-4 h-4 text-red-400 flex-shrink-0" />
                        <span>{dist.email}</span>
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default DistributorPage;
