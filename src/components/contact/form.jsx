"use client"
import { motion } from "framer-motion"

function ContactSection() {
  return (
    <section className="w-9/10 mx-auto flex flex-col items-center px-4 sm:px-6 md:px-8 lg:px-0 py-6">
      {/* Form card with animation */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}   // halka neeche se aaye
        whileInView={{ opacity: 1, y: 0 }} // animate hote hi apni jagah
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="w-full max-w-md sm:max-w-lg md:max-w-2xl lg:max-w-3xl rounded-2xl border border-gray-200 shadow-lg hover:shadow-red-600/40 hover:shadow-xl transition-all duration-300 bg-white p-4 sm:p-6 md:p-8"
      >
        <form
          onSubmit={(e) => {
            e.preventDefault()
            // handle submit
          }}
          className="flex flex-col gap-4"
        >
          {/* Name */}
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="text-sm font-medium text-gray-900">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Enter Name"
              className="w-full rounded-lg border border-gray-500 bg-white px-4 py-2.5 sm:py-3 
                         text-sm md:text-base text-gray-900 placeholder:text-gray-400 
                         focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-500"
              required
            />
          </div>

          {/* Email */}
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-sm font-medium text-gray-900">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Enter Email"
              className="w-full rounded-lg border border-gray-500 bg-white px-4 py-2.5 sm:py-3 
                         text-sm md:text-base text-gray-900 placeholder:text-gray-400 
                         focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-500"
              required
            />
          </div>

          {/* Subject */}
          <div className="flex flex-col gap-2">
            <label htmlFor="subject" className="text-sm font-medium text-gray-900">
              Subject
            </label>
            <input
              id="subject"
              name="subject"
              type="text"
              placeholder="What Do You Want To Talk About?"
              className="w-full rounded-lg border border-gray-500 bg-white px-4 py-2.5 sm:py-3 
                         text-sm md:text-base text-gray-900 placeholder:text-gray-400 
                         focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-500"
              required
            />
          </div>

          {/* Company Name */}
          <div className="flex flex-col gap-2">
            <label htmlFor="company" className="text-sm font-medium text-gray-900">
              Company Name
            </label>
            <input
              id="company"
              name="company"
              type="text"
              placeholder="Enter Your Company Name"
              className="w-full rounded-lg border border-gray-500 bg-white px-4 py-2.5 sm:py-3 
                         text-sm md:text-base text-gray-900 placeholder:text-gray-400 
                         focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>

          {/* Message */}
          <div className="flex flex-col gap-2">
            <label htmlFor="message" className="text-sm font-medium text-gray-900">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              placeholder="Provide Detailed Information About Your Requirements To Help You"
              className="w-full rounded-lg border border-gray-500 bg-white px-4 py-2.5 sm:py-3 
                         text-sm md:text-base text-gray-900 placeholder:text-gray-400 
                         focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-500 resize-none"
              required
            />
          </div>

          {/* Actions */}
          <div className="mt-2 flex flex-col sm:flex-row items-center gap-3 sm:gap-4">
            <button
              type="submit"
              className="w-full sm:w-auto inline-flex justify-center items-center rounded-full bg-red-600 px-5 py-2.5 text-sm md:text-base font-semibold text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500"
            >
              Submit Your Query
            </button>
            <button
              type="button"
              className="text-sm md:text-base font-medium text-gray-900 hover:underline"
              onClick={() => {
                // handle request a call
              }}
            >
              Request A Call!
            </button>
          </div>
        </form>
      </motion.div>
    </section>
  )
}

export default ContactSection
