import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
const MotionLink = motion(Link); 

export default function Home() {
  const NAVBAR_HEIGHT = 64;

  const flipVariants = {
    hidden: { rotateX: -90, opacity: 0 },
    visible: { rotateX: 0, opacity: 1, transition: { duration: 0.3 } },
  };

  return (
    <div className="w-full relative flex flex-col font-body text-gray-700 overflow-x-hidden">

{/* ================= HERO ================= */}
<div
  className="relative w-full min-h-screen flex items-center justify-center text-center
             bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700"
  style={{ marginTop: `${NAVBAR_HEIGHT}px` }}
>
  {/* soft overlay */}
  <div className="absolute inset-0 bg-white/5 backdrop-blur-[2px]" />

  <div className="relative px-6 max-w-3xl">

    {/* glass card */}
    <div className="bg-white/10 backdrop-blur-xl border border-white/20
                    rounded-3xl px-8 py-10 shadow-2xl">

      {/* Main Heading */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl sm:text-4xl md:text-5xl
                   font-heading font-semibold tracking-tight
                   text-white mb-4"
      >
        Welcome to{" "}
        <span className="text-yellow-400">
          Bajaj Auto Sales
        </span>
      </motion.h1>

      {/* Subheading */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-sm sm:text-base md:text-lg
                   text-blue-200 leading-relaxed mb-8"
      >
        An authorised Bajaj dealership delivering performance,
        reliability and trusted after-sales service.
      </motion.p>

      {/* CTA Buttons */}
      <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
        <MotionLink
  to="/enquiry"
  whileHover={{ y: -2 }}
  whileTap={{ scale: 0.98 }}
  className="px-8 py-3 bg-yellow-400 text-blue-900
             font-medium rounded-full shadow-lg
             hover:bg-yellow-500 transition"
>
  Enquiry Now
</MotionLink>


        <MotionLink
  to="/motorcycle"
  whileHover={{ y: -2 }}
  whileTap={{ scale: 0.98 }}
  className="px-8 py-3 border border-yellow-400
             text-yellow-400 font-medium rounded-full
             hover:bg-yellow-400 hover:text-blue-900 transition"
>
  View Latest Models
</MotionLink>

      </div>

      {/* Trust row */}
      <div className="flex flex-wrap justify-center gap-6 text-sm text-white/80">
        <span>✔ Authorised Bajaj Dealer</span>
        <span>✔ Genuine Spare Parts</span>
        <span>✔ Transparent Pricing</span>
      </div>
    </div>

    {/* Scroll */}
    <motion.div
      animate={{ y: [0, 12, 0] }}
      transition={{ repeat: Infinity, duration: 1.6 }}
      className="mt-10 text-white text-lg"
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
  <p className="max-w-3xl mx-auto leading-relaxed text-lg">
    At <span className="font-semibold text-blue-900">Bajaj Auto Sales</span>, we bring
    you the complete Bajaj ownership experience — combining performance,
    trust, and long-term reliability.
  </p>
</section>

{/* ================= FEATURED BIKES ================= */}
<section className="py-20 bg-gradient-to-r from-blue-900 to-blue-700 text-white text-center">
  <h2 className="text-3xl font-heading font-bold mb-12">
    Featured Bajaj Models
  </h2>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-10 px-6 max-w-6xl mx-auto">
    {[
      { name: "Pulsar N250", desc: "Power meets precision in the next-gen Pulsar." },
      { name: "Avenger 220 Cruise", desc: "Ride long, ride strong with classic comfort." },
      { name: "Dominar 400", desc: "Unleash touring power with superior control." }
    ].map((bike, index) => (
      <motion.div
        key={index}
        whileHover={{ y: -6 }}
        className="bg-white text-blue-900 rounded-3xl p-8
                   shadow-xl hover:shadow-2xl transition"
      >
        <h3 className="text-xl font-heading font-semibold mb-3">
          {bike.name}
        </h3>
        <p className="mb-5">{bike.desc}</p>
        <Link
          href="/motorcycle"
          className="inline-block bg-blue-900 text-white
                     px-6 py-2 rounded-full text-sm
                     hover:bg-blue-800"
        >
          View Details
        </Link>
      </motion.div>
    ))}
  </div>
</section>

{/* ================= STATS ================= */}
<section className="py-16 bg-blue-50 text-center">
  <h2 className="text-3xl font-heading font-bold text-blue-900 mb-12">
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
        transition={{ delay: i * 0.15 }}
        className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl"
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
  <h2 className="text-3xl font-heading font-bold text-blue-900 mb-12">
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
        className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl"
      >
        <h3 className="font-heading font-semibold text-blue-900 text-xl mb-4">
          {item.title}
        </h3>
        <div className="flex justify-between text-sm">
          <span className="font-semibold">Bajaj: {item.bajaj}</span>
          <span className="line-through text-red-500">
            Others: {item.others}
          </span>
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

  <p className="mb-8 max-w-2xl mx-auto text-lg">
    Answer a few quick questions to find your perfect ride.
  </p>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto px-6">
    {[
      { question: "Preferred Riding Style?", options: ["City", "Touring", "Sport"] },
      { question: "Budget Range?", options: ["₹1-1.5L", "₹1.5-2L", "₹2L+"] }
    ].map((q, i) => (
      <motion.div
        key={i}
        whileHover={{ y: -4 }}
        className="bg-blue-50 p-8 rounded-3xl shadow-lg hover:shadow-xl"
      >
        <h4 className="font-heading font-semibold text-blue-900 mb-4">
          {q.question}
        </h4>
        <div className="flex flex-wrap gap-3 justify-center">
          {q.options.map((opt, j) => (
            <button
              key={j}
              className="px-5 py-2 bg-blue-900 text-white
                         rounded-full hover:bg-blue-800 transition"
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
  <h2 className="text-3xl font-heading font-bold text-blue-900 mb-12">
    Maintenance Tips
  </h2>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-10 px-6 max-w-6xl mx-auto">
    {[
      { title: "Check Tyre Pressure", desc: "Ensure optimal tyre pressure before every ride." },
      { title: "Regular Oil Change", desc: "Keep your engine smooth and long-lasting." },
      { title: "Clean Air Filter", desc: "Maintain engine efficiency and performance." }
    ].map((tip, i) => (
      <motion.div
        key={i}
        whileHover={{ y: -5 }}
        className="bg-blue-50 p-8 rounded-3xl shadow-lg hover:shadow-xl"
      >
        <h4 className="text-xl font-heading font-semibold text-blue-900 mb-3">
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
  <Link
    href="/contact"
    className="bg-blue-900 text-white px-8 py-3
               rounded-full font-heading font-semibold
               hover:bg-blue-800 transition"
  >
    Contact Us
  </Link>
</section>

    </div>
  );
}
