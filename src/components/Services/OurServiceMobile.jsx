'use client'
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const ServiceItem = ({ title, description, imageSrc, imageOnLeft = true, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.3 });

  const textVariants = {
    hidden: { opacity: 0, x: imageOnLeft ? 100 : -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, delay: 0.2, ease: "easeOut" },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: imageOnLeft ? -100 : 100, scale: 0.8 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const borderVariants = {
    hidden: { width: 0 },
    visible: {
      width: "100%",
      transition: { duration: 0.6, delay: 0.4, ease: "easeOut" },
    },
  };

  return (
    <div ref={ref} className="mb-16">
      <div
        className={`flex flex-col md:${
          imageOnLeft ? "flex-row" : "flex-row-reverse"
        } items-center gap-8 md:gap-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`}
      >
       
        {/* Image Section */}
        <motion.div
          className="flex-1 w-full"
          variants={imageVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <div className="shadow-lg">
            <img
              src={imageSrc}
              alt={title}
              className="w-full max-w-[300px] h-auto object-cover rounded mx-auto"
              onError={(e) => {
                e.target.style.display = "none";
                e.target.nextSibling.style.display = "flex";
              }}
            />
            {/* Fallback placeholder */}
            <div className="hidden w-full h-48 bg-gray-200 rounded items-center justify-center">
              <span className="text-gray-500 text-sm">{title} Image</span>
            </div>
          </div>
        </motion.div>

        {/* Text Section */}
        <motion.div
          className="flex-1 w-full px-2 sm:px-4"
          variants={textVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <h3 className="heading-sub mb-3 text-center md:text-left">
            {title}
          </h3>

          <motion.div
            className="h-1 bg-red-600 mb-4 mx-auto md:mx-0 rounded-full"
            variants={borderVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          ></motion.div>

          <p className="text-body text-justify opacity-90">
            {description}
          </p>
        </motion.div>
      </div>
    </div>
  );
};

function OurServicess() {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, threshold: 0.5 });

  const headerVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const services = [
    {
      title: "Bolt Torquing & Tensioning",
      description: "At XTORC, we specialize in providing high-precision controlled bolting services across a wide range of industries, including Oil & Gas, Infrastructure, Wind Energy, and more. Our expert team utilizes advanced tools and technology to ensure that every bolt is tightened to the exact specifications required, maintaining the integrity and safety of your operations. In sectors like Oil and Gas, Infrastructure, and Wind Energy, controlled bolting is crucial for preventing mechanical failures and ensuring the longevity of critical assets. Our services help avoid issues such as leaks, joint misalignments, and equipment malfunctions that can lead to costly downtime, safety hazards, and operational inefficiencies. With XTORC's controlled bolting services, you can rely on accurate torque, tension, and fastening for a variety of applications, including pressure vessels, pipelines, turbines, and structural installations. Our team works on-site, providing fast, reliable, and efficient solutions, ensuring that your equipment is securely assembled and functioning at its optimal performance. Choose XTORC for precision bolting services that enhance safety, efficiency, and reliability across all sectors.",
      imageSrc: "boltt.jpeg",
      imageOnLeft: false
    },
    {
      title: "Cold Cutting & Beveling", 
      description: "XTORC offers high-precision Pipe Cold Cutting services on-site, providing tailored solutions for a wide range of pipe material grades and thicknesses. Our state-of-the-art cold cutting technology allows us to safely and accurately cut pipes without generating heat, minimizing the risk of damaging sensitive materials or creating hazardous conditions. In Oil and Gas projects, especially during shutdowns, precision is paramount. Pipe Cold Cutting is an essential service for maintenance, repairs, and modifications, where traditional cutting methods may pose safety risks or lead to unwanted thermal effects. Our cold cutting services ensure that pipe integrity is maintained, avoiding warping, thermal expansion, or the potential for compromising the strength and structure of critical piping systems. Whether working with carbon steel, stainless steel, or exotic alloys, XTORC’s team is equipped to handle diverse materials and pipe thicknesses. Our on-site cold cutting solutions are fast, efficient, and highly accurate, ensuring minimal disruption to operations while keeping projects on track. Trust XTORC for reliable, safe, and efficient Pipe Cold Cutting services that meet the demanding requirements of Oil and Gas projects, shutdowns, and maintenance operations. Our expertise ensures your pipes are cut to perfection, ensuring project success and long-term operational efficiency.",
      imageSrc: "pipeCold.jpeg",
      imageOnLeft: true
    },
    {
      title: "Flange Facing",
      description: "XTORC specializes in high-precision on-site Flange Facing and Serration services, catering to a wide range of flange material grades and sizes. Our advanced equipment and experienced technicians ensure that each flange is accurately faced and serrated to meet the specific requirements of your project, ensuring optimal performance and safety in critical applications. Flange facing is a crucial process that involves machining the surface of the flange to create a smooth, flat, and even surface for a secure gasket seal. This is essential for preventing leaks, ensuring a tight seal, and maintaining pressure integrity in systems such as pipelines, pressure vessels, and reactors. Additionally, serration on the flange face creates grooves that enhance the gasket's sealing performance, especially in high-pressure or high-temperature environments, making it an essential step for industries such as Oil & Gas, Petrochemical, Power Generation, and more. No matter the material – be it carbon steel, stainless steel, or other alloys – XTORC’s flange facing and serration services are designed to meet the stringent requirements of various industrial applications. Our on-site capabilities ensure minimal downtime and provide a fast, reliable, and cost-effective solution for flange preparation. The importance of proper flange facing and serration cannot be overstated. Inadequate preparation can lead to leaks, equipment failure, or safety hazards. XTORC’s services guarantee that your flanges are properly machined for a perfect seal, ensuring the reliability and efficiency of your systems and extending the lifespan of your equipment. Choose XTORC for accurate and professional flange facing and serration services that enhance the performance, safety, and longevity of your industrial systems.", 
      imageSrc: "facing.jpeg",
      imageOnLeft: false
    },
    {
      title: "Water Jet Cutting",
      description: "XTORC provides high-precision on-site Waterjet cutting services for a wide variety of applications, including manhole creation in vessels, vessel demolition, and more. Our advanced Waterjet technology uses ultra-high-pressure water to cut through materials with unparalleled accuracy, making it the ideal solution for tasks that require clean, precise cuts without heat or distortion. In critical industries such as Oil and Gas, petrochemical, and heavy industry, Waterjet cutting plays a crucial role in maintaining safety and efficiency during operations. For tasks like manhole creation in vessels, our Waterjet services provide an exact cut that minimizes material damage and structural compromise. When it comes to vessel demolition, Waterjet cutting ensures controlled, efficient removal of material, reducing the risk of sparks, heat damage, or harmful emissions that might occur with traditional cutting methods. Our on-site Waterjet services are highly versatile, capable of cutting through a wide range of materials such as steel, stainless steel, concrete, and more, all while ensuring minimal disruption to the surrounding structure. This makes Waterjet cutting a preferred method for maintenance, modification, and demolition projects, especially in sensitive environments where precision is vital. With XTORC’s Waterjet services, you can expect safe, efficient, and environmentally friendly cutting solutions that are critical for maintaining the integrity and longevity of your assets. Our expertise in Waterjet cutting ensures that your projects, whether vessel modifications, manhole installations, or demolition, are executed with the highest level of precision and care.",
      imageSrc: "jet.PNG", 
      imageOnLeft: true
    },
    {
      title: "Hot-Tapping & Line Stopple",
      description: "XTORC provides expert on-site Hot Tapping services, offering a full suite of solutions that includes the supply of equipment, split tees, and other essential accessories for a range of critical applications. Hot tapping is a specialized procedure that allows for the safe and efficient installation of branches, fittings, or valves onto existing pipelines and pressure vessels without shutting down the active system. This service is crucial for industries such as Oil and Gas, petrochemicals, and utilities, where downtime can result in significant operational losses and safety risks. The nature of hot tapping with an active line makes it a highly technical and critical job. Ensuring the integrity of the pipeline and the safety of personnel while performing the tap is paramount. XTORC’s experienced team utilizes state-of-the-art equipment and follows strict safety protocols to perform hot tapping on pressurized lines with minimal risk. Our services ensure that pipelines can continue to operate without disruption while necessary modifications or connections are being made. With XTORC's Hot Tapping services, we supply everything needed for the job, including split tees, valves, fittings, and all associated accessories. Our team ensures seamless integration of new systems with the existing infrastructure, providing a safe, efficient solution that minimizes downtime and ensures ongoing operational efficiency. Hot tapping with an active line demands precision, and with XTORC’s expertise, you can trust that each tap will be completed to the highest safety and quality standards. Choose XTORC for reliable, safe, and efficient hot tapping solutions that allow your operations to continue uninterrupted, while meeting the demands of critical infrastructure and pipeline projects.",
      imageSrc: "tap.jpg",
      imageOnLeft: false
    },
    {
      title: "Re-Tubing of Boilers & Heat Exchangers", 
      description: "XTORC specializes in comprehensive on-site Re-Tubing services for Boilers, Shell & Tube Heat Exchangers, Condensers, Fin Fans, and Coolers. Our certified technicians utilize advanced tube extraction, tube bundle pulling, high-pressure tube expansion, facing, and hydro-testing equipment to restore optimal thermal efficiency and mechanical integrity. In high-demand industries such as Oil & Gas, Power Generation, Petrochemicals, and Manufacturing, tube degradation, fouling, and leaks can severely compromise production efficiency and safety. XTORC's turnkey re-tubing solutions cover partial or complete retubing, tube sheet refurbishment, internal inspection, and precision hydraulic torque and tension rolling, ensuring minimal plant downtime and extended asset lifespan. Trust XTORC for dependable, compliant, and precision-engineered retubing solutions tailored to demanding industrial turnaround and shutdown schedules.",
      imageSrc: "re_tubing.png",
      imageOnLeft: true
    },
    {
      title: "Hydraulic Tools Calibration",
      description: "XTORC offers professional Hydraulic Tools Calibration services to ensure the precision, compliance, and reliability of your torquing and tensioning equipment. Calibration is essential to maintain the accuracy of hydraulic tools, which play a crucial role in tightening and securing bolts in a wide range of industries, including Oil and Gas, Infrastructure, Power Generation, and Manufacturing. Proper calibration of hydraulic tools is vital for ensuring the correct torque and tension is applied during operations. Even minor discrepancies in calibration can lead to over-tightening or under-tightening, resulting in equipment failure, leaks, or safety hazards. XTORC's calibration services ensure that your hydraulic tools consistently deliver precise performance, preventing costly mistakes and enhancing the safety and efficiency of your projects. Our expert team uses advanced equipment and techniques to calibrate your tools to meet international standards.",
      imageSrc: "callib.avif",
      imageOnLeft: false
    }
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const lineVariants = {
    hidden: { opacity: 0, scaleX: 0 },
    visible: {
      opacity: 1,
      scaleX: 1,
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
  };

  return (
    <div
      className="bg-black min-h-screen py-16 px-8"
      style={{ fontFamily: "Poppins, sans-serif" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <motion.div
          className="mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="w-fit mb-6">
            <motion.h2 variants={itemVariants} className="heading-main mb-2">
              Service Offerings
            </motion.h2>
            
            <motion.div 
              variants={lineVariants}
              className="w-full h-1.5 rounded-full bg-red-600 origin-left"
            ></motion.div>
          </div>
          
          <motion.p variants={itemVariants} className="text-body max-w-2xl opacity-90">
            Are designed to maximize efficiency and ensure safety in operations:
          </motion.p>
        </motion.div>

        {/* Services List */}
        {services.map((service, index) => (
          <ServiceItem
            key={index}
            title={service.title}
            description={service.description} 
            imageSrc={service.imageSrc}
            imageOnLeft={service.imageOnLeft}
            index={index}
          />
        ))}
      </div>
    </div>
  );
}

export default OurServicess;