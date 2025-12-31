import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaCheckCircle,
} from "react-icons/fa";
import nationalbajaj from "../assets/nationalshowroom.jpg";

/* ---------- Animated Counter ---------- */
function AnimatedCounter({ end, duration = 2000, suffix = "" }) {
  const [value, setValue] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          let start = 0;
          const increment = end / (duration / 16);
          const timer = setInterval(() => {
            start += increment;
            if (start >= end) {
              setValue(end);
              clearInterval(timer);
            } else {
              setValue(Math.floor(start));
            }
          }, 16);
        }
      },
      { threshold: 0.4 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end, duration]);

  return (
    <h3 ref={ref} className="text-4xl font-extrabold text-yellow-400">
      {value}
      {suffix}
    </h3>
  );
}

export default function About() {
  const fadeUp = { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0 } };

  return (
    <div className="bg-blue-50 text-gray-800">

      {/* ===== Hero Section ===== */}
      <motion.section
        initial="hidden"
        animate="visible"
        variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
        className="relative bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 text-white overflow-hidden"
      >
        <motion.div
          variants={fadeUp}
          className="max-w-7xl mx-auto px-6 lg:px-12 py-20 text-center"
        >
          <h6 className="text-4xl md:text-5xl font-extrabold mb-4">
            Welcome to <span className="text-yellow-400">National Bajaj</span>
          </h6>
          <p className="text-lg md:text-xl max-w-3xl mx-auto">
            Your trusted Bajaj dealership, delivering performance and quality since 20XX.  
            We provide unmatched customer experience.
          </p>
        </motion.div>
      </motion.section>

      {/* ===== Introduction ===== */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
        className="max-w-7xl mx-auto px-6 lg:px-12 py-16 grid md:grid-cols-2 gap-12 items-center"
      >
        <motion.img
          variants={fadeUp}
          src={nationalbajaj}
          alt="National Bajaj Showroom"
          className="w-full rounded-2xl shadow-lg object-cover"
        />
        <motion.div variants={fadeUp}>
          <h2 className="text-3xl font-bold text-blue-900 mb-4">Who We Are</h2>
          <p className="mb-4">
            At National Bajaj, we take pride in being an authorized dealership offering the complete range of Bajaj motorcycles.
          </p>
          <p>
            Our mission is simple:  
            <strong> Quality Service & Customer Satisfaction.</strong>
          </p>
        </motion.div>
      </motion.section>

      {/* ===== Products & Services ===== */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="bg-white py-16"
      >
        <motion.div variants={fadeUp} className="max-w-7xl mx-auto px-6 lg:px-12">
          <h2 className="text-3xl font-bold text-center text-blue-900 mb-12">Our Products & Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "Complete range of Bajaj Motorcycles – Pulsar, Dominar, Platina, Avenger & more",
              "Authorized bike servicing & genuine spare parts",
              "Test rides & expert guidance",
              "Finance & easy loan assistance",
              "Insurance and renewal support",
              "Accessories & performance upgrades",
            ].map((item, i) => (
              <motion.div key={i} variants={fadeUp} className="flex items-start gap-3">
                <FaCheckCircle className="text-yellow-400 mt-1" />
                <p>{item}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.section>

      {/* ===== Why Choose Us ===== */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="bg-blue-900 text-white py-16"
      >
        <motion.div variants={fadeUp} className="max-w-7xl mx-auto px-6 lg:px-12">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why Choose <span className="text-yellow-400">National Bajaj</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              "Authorized Bajaj Dealer",
              "Transparent Pricing",
              "Expert & Friendly Staff",
              "Quick & Reliable Service",
            ].map((point, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="bg-blue-800/40 p-6 rounded-2xl shadow hover:shadow-lg transition transform hover:-translate-y-2"
              >
                <FaCheckCircle className="mx-auto mb-4 text-yellow-400 text-3xl" />
                <p className="font-semibold">{point}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.section>

      {/* ===== Timeline (Left-Right Professional) ===== */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-7xl mx-auto px-6 lg:px-12 py-16 relative"
      >
        <motion.h2 variants={fadeUp} className="text-3xl font-bold text-blue-900 text-center mb-12">
          Our Journey (Timeline)
        </motion.h2>

        <div className="relative before:absolute before:top-0 before:bottom-0 before:left-1/2 before:w-1 before:bg-yellow-400">
          {[
            { year: 2021, event: "National Bajaj Re-Established (New Management & Modern Setup)" },
            { year: 2022, event: "1000+ Happy Customers Milestone Achieved" },
             { year: 2023, event: "Modern Showroom Expansion + Digital Transformation" },
            { year: 2024, event: "Best Dealer Award (Regional)" },
            { year: 2025, event: "Service Center Upgrade Completed" },

          ].map((item, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className={`mb-12 flex w-full ${i % 2 === 0 ? 'justify-start' : 'justify-end'} relative`}
            >
              <div className="w-1/2 p-4 bg-white rounded-2xl shadow hover:shadow-lg transition transform hover:-translate-y-2">
                <p className="font-bold text-yellow-400 mb-1">{item.year}</p>
                <p>{item.event}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* ===== Team Section ===== */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="bg-blue-50 py-16"
      >
        <motion.h2 variants={fadeUp} className="text-3xl font-bold text-blue-900 text-center mb-12">
          Meet Our Team
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto px-6 lg:px-12">
          {[
            { name: "AYAZ USMANI", role: "CEO" },
            { name: "SAQUIB AHMAD", role: "Head of Service" },
            { name: "MOHAMMAD ILTAF", role: "Sales Manager" },
          ].map((member, i) => (
            <motion.div key={i} variants={fadeUp} className="bg-white p-6 rounded-2xl shadow text-center hover:shadow-xl transition transform hover:-translate-y-2">
              <div className="h-32 w-32 mx-auto bg-blue-800 rounded-full mb-4"></div>
              <h3 className="font-bold text-xl text-blue-900">{member.name}</h3>
              <p className="text-gray-700 mt-1">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* ===== Awards Section ===== */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="bg-blue-900 text-white py-16"
      >
        <motion.h2 variants={fadeUp} className="text-3xl font-bold text-center mb-12">
          Our Awards & Recognition
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto px-6 lg:px-12 text-center">
          {[
            { title: "Best Dealer Award", year: 2024 },
            { title: "Customer Excellence Award", year: 2023 },
            { title: "Service Center Upgrade Recognition", year: 2023 },
          ].map((award, i) => (
            <motion.div key={i} variants={fadeUp} className="bg-blue-800/40 p-6 rounded-2xl shadow hover:shadow-lg transition transform hover:-translate-y-2">
              <p className="text-yellow-400 font-bold text-xl mb-2">{award.year}</p>
              <p className="font-semibold">{award.title}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* ===== Journey & Achievements ===== */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-7xl mx-auto px-6 lg:px-12 py-16"
      >
        <motion.h2 variants={fadeUp} className="text-3xl font-bold text-blue-900 text-center mb-12">
          Our Journey & Achievements
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8 text-center">
          {[
            { end: 20, label: "Years of Excellence" },
            { end: 1000, label: "Happy Customers" },
            { end: 5, label: "Prestigious Awards" },
          ].map((item, i) => (
            <motion.div key={i} variants={fadeUp} className="bg-white rounded-2xl p-8 shadow">
              <AnimatedCounter end={item.end} suffix="+" />
              <p className="mt-2">{item.label}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* ===== Contact ===== */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="bg-blue-900 text-white py-16"
      >
        <motion.div variants={fadeUp} className="max-w-7xl mx-auto px-6 lg:px-12 grid md:grid-cols-3 gap-8">
          <div className="flex items-start gap-4">
            <FaMapMarkerAlt className="text-yellow-400 text-2xl" />
            <p>
              National Bajaj Showroom,<br />
              Near Chaukiyamodh Ubhaon Road, Belthara Road (Ballia)
            </p>
          </div>

          <div className="flex items-start gap-4">
            <FaPhoneAlt className="text-yellow-400 text-2xl" />
            <a href="tel:+919198090051" className="hover:text-yellow-300">
              +91 9198090051
            </a>
          </div>

          <div className="flex items-start gap-4">
            <FaEnvelope className="text-yellow-400 text-2xl" />
            <a
              href="mailto:customerservice@bajajauto.co.in"
              className="hover:text-yellow-300"
            >
              customerservice@bajajauto.co.in
            </a>
          </div>
        </motion.div>
      </motion.section>

    </div>
  );
}