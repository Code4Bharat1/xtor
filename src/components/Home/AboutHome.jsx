"use client";
import { easeOut, motion } from "framer-motion";
import { useRouter } from "next/navigation";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.4,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 80 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const AboutHome = () => {
  const router = useRouter();
  return (
    <>
      <div className="bg-black w-full text-white">
        {/* Polygon background using clip-path */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div
            className="bg-[#1B1B1B] py-16 md:py-24 lg:py-28 w-full"
            style={{
              clipPath: "polygon(0 0, 100% 4vw, 100% 100%, 0 calc(100% - 4vw))",
            }}
          >
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
              {/* About Us */}
              <div className="w-fit mx-auto flex flex-col items-center mb-4">
                <motion.h2
                  variants={item}
                  className="heading-main text-center tracking-widest"
                >
                  About Us
                </motion.h2>
                <div className="w-full h-1 bg-red-600 mt-2 rounded-full"></div>
              </div>

              <motion.h3
                variants={item}
                className="heading-sub font-poppins text-center mb-6"
              >
                Engineering Excellence Driven by Experience
              </motion.h3>

              <motion.p
                variants={item}
                className="text-body font-poppins text-justify"
              >
                Xtorc was founded with a vision to provide world-class industrial tools and services tailored to modern challenges. As a startup with over a decade of experience, we're redefining how industries achieve precision, efficiency, and safety. All our products are proudly manufactured in India and certified to the highest standards, including ISO 9001:15000, CE, and ATEX. At Xtorc, we believe in creating value that extends beyond products. Our WIN-WIN-WIN philosophy ensures that our customers win, our employees thrive, and our entrepreneurs succeed.
              </motion.p>

              <motion.p
                variants={item}
                className="text-body font-poppins mt-6 text-justify"
              >
                Our comprehensive controlled bolting range comprises square drive hydraulic torque wrenches, low-profile hex drive wrenches, topside and subsea hydraulic bolt tensioners, and pneumatic or electric torque wrench power packs. We also specialize in state-of-the-art on-site machining equipment including portable flange facing machines, clamshell split-frame pipe cold cutting and beveling machines, and casing cutters. Each product is engineered to deliver reliable, spark-free mechanical joint integrity in hazardous environments like petrochemical plants, offshore oil rigs, gas refinery pipelines, and power generating stations.
              </motion.p>

              <motion.div variants={item} className="flex justify-center mt-8">
                <button className="bg-[#D01A1A] text-white px-6 py-3 rounded-2xl font-medium hover:bg-red-700 transition cursor-pointer"
                  onClick={() => {
                    router.push("/aboutus")
                  }}>
                  Learn more about us
                </button>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Why To Choose Section */}
      <motion.div
        className="px-6 py-16 text-white bg-black"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="w-fit mx-auto flex flex-col items-center mb-6">
          <motion.h2
            variants={item}
            className="heading-main text-white text-center leading-tight mb-0"
          >
            Why To Choose
          </motion.h2>
          <div className="w-full h-1 bg-red-600 mt-2 rounded-full"></div>
        </div>

        {/* Tagline */}
        <p className="heading-sub font-poppins text-center text-white">
          The X Factor in Your Industrial Needs
        </p>
      </motion.div>
    </>
  );
};
export default AboutHome;