"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";

const CountingNumber = ({ target, duration = 3000, start }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime;
    let animationFrame;

    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);

      setCount(Math.floor(progress * target));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [target, duration, start]);

  return <span>{count}</span>;
};

const OurValues = () => {
  const [missionVisible, setMissionVisible] = useState(false);
  const [visionVisible, setVisionVisible] = useState(false);

  const statsRef = useRef(null);
  const statsInView = useInView(statsRef, { once: true, amount: 0.3 });

  useEffect(() => {
    const handleScroll = () => {
      const missionElement = document.getElementById("mission-section");
      const visionElement = document.getElementById("vision-section");

      if (missionElement) {
        const rect = missionElement.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          setMissionVisible(true);
        }
      }

      if (visionElement) {
        const rect = visionElement.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          setVisionVisible(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-black text-white min-h-screen">
      <div className="w-9/10 mx-auto px-4">
        {/* Stats Section */}
        <motion.div
          ref={statsRef} // attach ref
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
          className="mb-16"
        >
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-0">
            {/* 25 Products Card */}
            <div
              className="text-center p-6 md:p-10 w-full md:w-180 relative md:h-[15.5rem]"
              style={{
                backgroundColor: "#1B1B1B",
              }}
            >
              <style jsx>{`
                @media (min-width: 768px) {
                  .clip-left {
                    clip-path: polygon(0 0, 100% 0, 77% 100%, 0 100%);
                  }
                  .clip-right {
                    clip-path: polygon(25% 0px, 100% 0px, 100% 100%, 0% 100%);
                  }
                }
              `}</style>
              <div
                className="flex flex-col sm:flex-row items-center justify-center text-5xl md:text-7xl font-bold mb-2 md:p-10 md:px-40"
                style={{ color: "#D01A1A" }}
              >
                <CountingNumber target={25} start={statsInView} />
                <div className="text-white text-3xl md:text-6xl md:px-4 md:py-2 py-2 px-4">
                  Products
                </div>
              </div>
            </div>

            {/* 15 Years Card */}
            <div
              className="text-center p-6 md:p-10 w-full md:w-180 relative md:h-[15.5rem] md:-ml-35 lg:-ml-25"
              style={{
                backgroundColor: "#1B1B1B",
              }}
            >
              <div className="flex flex-col sm:flex-row items-center justify-center text-white text-xl md:text-2xl md:px-38 lg:px-30 md:py-0 lg:py-2">
                <span className="text-center">Years of Combined Sales <br /> & Operation Expertise</span>
                <div
                  className="text-5xl md:text-7xl font-bold mb-2 mt-4 md:mt-10 px-2 lg:mt-3"
                  style={{ color: "#D01A1A" }}
                >
                  <CountingNumber target={15} start={statsInView} />
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Mission and Vision Section (unchanged animation) */}
        <div
          className="flex flex-col lg:flex-row gap-12 mb-16"
          id="mission-vision-section"
        >
          <div
            className={`flex-1 transition-all duration-1000 ${missionVisible
                ? "transform translate-x-0 opacity-100"
                : "transform -translate-x-full opacity-0"
              }`}
            id="mission-section"
          >
            <h3
              className="heading-sub mb-4"
              style={{ color: "#D01A1A" }}
            >
              Our Mission
            </h3>
            <div className="w-44 h-0.5 bg-white mb-6"></div>
            <p className="text-body text-justify">
              To deliver precision-engineered tools and innovative services that
              empower industries to achieve unparalleled efficiency, safety, and
              performance while upholding the highest standards of quality and
              customer satisfaction.
            </p>
          </div>

          <div className="hidden lg:block w-0.5 bg-white self-stretch"></div>

          <div
            className={`flex-1 transition-all duration-1000 ${visionVisible
                ? "transform translate-x-0 opacity-100"
                : "transform translate-x-full opacity-0"
              }`}
            id="vision-section"
          >
            <h3
              className="heading-sub mb-4"
              style={{ color: "#D01A1A" }}
            >
              Our Vision
            </h3>
            <div className="w-38.5 h-0.5 bg-white mb-6"></div>
            <p className="text-body text-justify">
              To be a global leader in industrial tools and services, recognized
              for our commitment to quality, innovation, and creating value for
              our customers and stakeholders. We believe in the WIN-WIN-WIN
              philosophy, where our customers win, our employees win, and
              entrepreneurs win.
            </p>
          </div>
        </div>

        {/* Join Our Mission Button */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
          className="flex justify-center mb-16"
        >
          <button className="bg-white text-black px-8 py-3 rounded-full font-semibold text-lg hover:bg-gray-200 transition-colors">
            Join Our Mission
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
          className="flex justify-center mb-8"
        >
          <button className="text-red-500 px-8 py-3 text-4xl font-semibold hover:bg-gray-200 transition-colors sm:hidden">
            Our Values
            <div className="h-1 w-60 bg-red-500 mt:2 rounded-lg"></div>
          </button>

        </motion.div>

        {/* Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
          className="mb-16"
        >
          <div className="relative">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* Quality Card */}
              <div
                className="bg-white rounded-2xl p-6 text-center transition-all duration-300 group hover:text-white"
                onMouseEnter={(e) =>
                  (e.currentTarget.style.backgroundColor = "#D01A1A")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.backgroundColor = "white")
                }
              >
                <img
                  src="/quality.png"
                  alt="Quality"
                  className="w-16 h-16 mx-auto mb-4 transition-all duration-300 group-hover:brightness-0 group-hover:invert"
                />
                <h4 className="text-black group-hover:text-white text-xl font-bold mb-3">
                  Quality
                </h4>
                <p className="text-black max-w-90 mr-20 group-hover:text-white text-md">
                  Ensuring every product and service meets the highest
                  standards.
                </p>
              </div>

              {/* Innovation Card */}
              <div
                className="bg-white rounded-2xl p-6 text-center transition-all duration-300 group hover:text-white"
                onMouseEnter={(e) =>
                  (e.currentTarget.style.backgroundColor = "#D01A1A")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.backgroundColor = "white")
                }
              >
                <img
                  src="/innovation.png"
                  alt="Innovation"
                  className="w-16 h-16 mx-auto mb-4 group-hover:brightness-0 group-hover:invert"
                />
                <h4 className="text-black group-hover:text-white text-xl font-bold mb-3">
                  Innovation
                </h4>
                <p className="text-black max-w-90 ml-20 group-hover:text-white text-md">
                  Continuously pushing the boundaries of what's possible.
                </p>
              </div>

              {/* Integrity Card */}
              <div
                className="bg-white rounded-2xl p-6 text-center transition-all duration-300 group hover:text-white"
                onMouseEnter={(e) =>
                  (e.currentTarget.style.backgroundColor = "#D01A1A")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.backgroundColor = "white")
                }
              >
                <img
                  src="/verified_user.png"
                  alt="Integrity"
                  className="w-16 h-16 mx-auto mb-4 group-hover:brightness-0 group-hover:invert"
                />
                <h4 className="text-black group-hover:text-white text-xl font-bold mb-3">
                  Integrity
                </h4>
                <p className="text-black max-w-90 group-hover:text-white text-md">
                  Conducting business with honesty and transparency.
                </p>
              </div>

              {/* Customer-Centricity Card */}
              <div
                className="bg-white rounded-2xl p-6 text-center transition-all duration-300 group hover:text-white"
                onMouseEnter={(e) =>
                  (e.currentTarget.style.backgroundColor = "#D01A1A")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.backgroundColor = "white")
                }
              >
                <img
                  src="/group.png"
                  alt="Customer Centricity"
                  className="w-16 h-16 mx-auto mb-4 group-hover:brightness-0 group-hover:invert"
                />
                <h4 className="text-black group-hover:text-white text-xl font-bold mb-3">
                  Customer-Centricity
                </h4>
                <p className="text-black max-w-90 group-hover:text-white text-md">
                  Tailoring solutions to meet and exceed customer expectations.
                </p>
              </div>
            </div>


            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 hidden md:block">
              <div className="w-60 h-60 rounded-full flex items-center justify-center bg-[#D01A1A] text-white hover:bg-white hover:text-[#D01A1A] transition-colors duration-300 shadow-lg">
                <h4 className="text-3xl font-bold text-center leading-tight">
                  Our
                  <br />
                  Values
                </h4>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default OurValues;
