import React from "react";
import { motion } from "framer-motion";
import Cctv from "../assets/cctv.png";
import Router from "../assets/router.png";
import Wifi from "../assets/wifi.png";
import Biometric from "../assets/biometric.png";
import Smartphone from "../assets/smartphone.png";

const services = [
  {
    img: Wifi,
    title: "WiFi & Internet",
    desc: "Reliable home and business WiFi installation and optimization.",
  },
  {
    img: Cctv,
    title: "CCTV & Surveillance",
    desc: "Secure your property with our advanced CCTV systems.",
  },
  {
    img: Router,
    title: "Networking Solutions",
    desc: "Structured cabling, routers, switches & network optimization.",
  },
  {
    img: Biometric,
    title: "Access Control & Smart Systems",
    desc: "Biometric access, smart intercoms, alarm system integration.",
  },
  {
    img: Smartphone,
    title: "Consulting & Maintenance",
    desc: "Free site surveys, network audits, monthly/annual support contracts.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

function ServiceSection({ adjustMargin = false }) {
  return (
    <section
      className={`px-4 text-center h-auto md:h-screen flex flex-col md:justify-center ${
        adjustMargin ? "-mt-48 md:mt-0" : ""
      }`}
    >
      <motion.h2
        className="text-3xl font-bold mb-8"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Our Services
      </motion.h2>

      <div className="grid md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="border border-slate-300 py-4 rounded-2xl"
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants}
          >
            <img src={service.img} alt={service.title} className="mx-auto h-20 mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-amber-500">{service.title}</h3>
            <p>{service.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default ServiceSection;
