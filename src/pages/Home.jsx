import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Home() {
  const NAVBAR_HEIGHT = 64;

  const flipVariants = {
    hidden: { rotateX: -90, opacity: 0 },
    visible: { rotateX: 0, opacity: 1, transition: { duration: 0.3 } },
  };

  const renderTimeUnit = (label, value) => (
    <div className="font-body">
      <AnimatePresence mode="wait">
        <motion.span
          key={value}
          variants={flipVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          className="block text-5xl font-heading font-bold"
        >
          {value.toString().padStart(2, "0")}
        </motion.span>
      </AnimatePresence>
      <p className="text-sm">{label}</p>
    </div>
  );

  return (
    <div className="w-full relative flex flex-col font-body text-gray-700">
      {/* ================= HERO ================= */}
      <div
        className="relative w-full flex items-center justify-center text-center
                   bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700
                   pt-[64px] md:min-h-screen" // Mobile pe margin ko remove karke padding-top use kiya
      >
        <div className="px-6 max-w-3xl">

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="text-3xl sm:text-4xl md:text-5xl
                       font-heading font-semibold
                       tracking-tight text-white mb-4"
          >
            Welcome to{" "}
            <span className="text-yellow-400 font-semibold">
              Bajaj Auto Sales
            </span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.15 }}
            className="text-sm sm:text-base md:text-lg
                       text-blue-200 leading-relaxed mb-8"
          >
            An authorised Bajaj dealership delivering performance,
            reliability and trusted after-sales service.
          </motion.p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
            <motion.a
              href="/enquiry"
              whileHover={{ scale: 1.02 }}
              className="inline-flex items-center justify-center
                         px-8 py-3
                         bg-yellow-400 text-blue-900
                         font-medium rounded-md
                         shadow-sm hover:bg-yellow-500 transition"
            >
              Enquiry Now
            </motion.a>

            <motion.a
              href="/motorcycle"
              whileHover={{ scale: 1.02 }}
              className="inline-flex items-center justify-center
                         px-8 py-3
                         border border-yellow-400
                         text-yellow-400 font-medium
                         rounded-md
                         hover:bg-yellow-400 hover:text-blue-900 transition"
            >
              View Latest Models
            </motion.a>
          </div>

          {/* USP Badges */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {[
              "⭐ High Performance",
              "⭐ Fuel Efficient",
              "⭐ Advanced Safety",
              "⭐ Stylish Design",
            ].map((badge, i) => (
              <motion.span
                key={i}
                className="bg-white/20 text-white px-4 py-2 rounded-full font-medium text-sm md:text-base"
                whileHover={{ scale: 1.05 }}
              >
                {badge}
              </motion.span>
            ))}
          </div>

          {/* Customer Tagline */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-blue-100 italic mb-10"
          >
            "Trusted by 2K+ riders for over 3 years of excellence!"
          </motion.p>

          {/* Scroll Indicator */}
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="text-white text-2xl"
          >
            ⬇ Explore Models
          </motion.div>
        </div>
      </div>

      {/* ================= ABOUT ================= */}
      <section className="py-16 bg-white text-center px-6">
        <h2 className="text-3xl font-heading font-bold text-blue-900 mb-4">
          Welcome to Bajaj Auto Sales
        </h2>
        <p className="max-w-3xl mx-auto leading-relaxed">
          At <span className="font-semibold text-blue-900">Bajaj Auto Sales</span>, we bring
          you the full experience of Bajaj’s power and precision. Whether you’re a city
          commuter or an adventure rider, our goal is to fuel your passion with quality,
          trust, and performance.
        </p>
      </section>

      {/* ================= FEATURED BIKES ================= */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-blue-700 text-white text-center">
        <h2 className="text-3xl font-heading font-bold mb-10">
          Featured Bajaj Models
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6 max-w-6xl mx-auto">
          {[
            { name: "Pulsar N250", desc: "Power meets precision in the next-gen Pulsar." },
            { name: "Avenger 220 Cruise", desc: "Ride long, ride strong with classic comfort." },
            { name: "Dominar 400", desc: "Unleash touring power with superior control." }
          ].map((bike, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-white text-blue-900 rounded-2xl p-6 shadow-lg hover:shadow-2xl"
            >
              <h3 className="text-xl font-heading font-semibold mb-2">
                {bike.name}
              </h3>
              <p>{bike.desc}</p>
              <a
                href="/motorcycle"
                className="mt-4 inline-block bg-blue-900 text-white px-5 py-2 rounded-full text-sm font-heading tracking-wide hover:bg-blue-800"
              >
                View Details
              </a>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= STATS ================= */}
      <section className="py-16 bg-blue-50 text-center">
        <h2 className="text-3xl font-heading font-bold text-blue-900 mb-10">
          Our Achievements
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {[
            { number: "3+", label: "Years of Excellence" },
            { number: "2K+", label: "Happy Customers" },
            { number: "100%", label: "Genuine Products" },
            { number: "24/7", label: "Customer Support" },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl"
            >
              <h3 className="text-4xl font-heading font-bold text-blue-900">
                {item.number}
              </h3>
              <p className="mt-2">{item.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= COMPARISON ================= */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-white text-center">
        <h2 className="text-3xl font-heading font-bold text-blue-900 mb-10">
          Why Choose Bajaj
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6 max-w-6xl mx-auto">
          {[
            { title: "Mileage", bajaj: "60 km/l", others: "45 km/l" },
            { title: "Service Cost", bajaj: "Low & Transparent", others: "High & Hidden" },
            { title: "Resale Value", bajaj: "High", others: "Average" }
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.03 }}
              className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl"
            >
              <h3 className="font-heading font-semibold text-blue-900 text-xl mb-2">
                {item.title}
              </h3>
              <div className="flex justify-between">
                <span className="font-semibold">Bajaj: {item.bajaj}</span>
                <span className="line-through text-red-500">Others: {item.others}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= QUIZ ================= */}
      <section className="py-20 bg-white text-center">
        <h2 className="text-3xl font-heading font-bold text-blue-900 mb-10">
          Which Bajaj Bike Suits You?
        </h2>

        <p className="mb-8 max-w-2xl mx-auto">
          Answer a few questions and find your perfect ride.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto px-6">
          {[
            { question: "Preferred Riding Style?", options: ["City", "Touring", "Sport"] },
            { question: "Budget Range?", options: ["₹1-1.5L", "₹1.5-2L", "₹2L+"] }
          ].map((q, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.02 }}
              className="bg-blue-50 p-6 rounded-2xl shadow-lg hover:shadow-xl"
            >
              <h4 className="font-heading font-semibold text-blue-900 mb-4">
                {q.question}
              </h4>
              <div className="flex flex-wrap gap-3 justify-center">
                {q.options.map((opt, j) => (
                  <button
                    key={j}
                    className="px-4 py-2 bg-blue-900 text-white rounded-full font-heading hover:bg-blue-800"
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= MAINTENANCE ================= */}
      <section className="py-20 bg-white text-center">
        <h2 className="text-3xl font-heading font-bold text-blue-900 mb-10">
          Maintenance Tips
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6 max-w-6xl mx-auto">
          {[
            { title: "Check Tyre Pressure", desc: "Ensure optimal tyre pressure before every ride." },
            { title: "Regular Oil Change", desc: "Keep your engine smooth and long-lasting." },
            { title: "Clean Air Filter", desc: "Maintain engine efficiency and performance." }
          ].map((tip, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.03 }}
              className="bg-blue-50 p-6 rounded-2xl shadow-lg hover:shadow-xl"
            >
              <h4 className="text-xl font-heading font-semibold text-blue-900 mb-2">
                {tip.title}
              </h4>
              <p>{tip.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-16 bg-yellow-400 text-center text-blue-900">
        <h2 className="text-3xl font-heading font-bold mb-4">
          Ready to Ride with Bajaj?
        </h2>
        <p className="mb-6 text-lg">
          Visit our showroom or book a test ride today — only at Bajaj Auto Sales.
        </p>
        <a
          href="/contact"
          className="bg-blue-900 text-white px-6 py-3 rounded-full font-heading font-semibold tracking-wide hover:bg-blue-800"
        >
          Contact Us
        </a>
      </section>
    </div>
  );
}
