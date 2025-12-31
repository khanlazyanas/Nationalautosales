import {
  FaTools,
  FaCog,
  FaMotorcycle,
  FaOilCan,
  FaWrench,
  FaCheckCircle,
  FaQuoteLeft,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt
} from "react-icons/fa";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import workshop2 from "../assets/servicecenter1.jpg";
import workshop3 from "../assets/servicecenter2.jpg";
import workshop4 from "../assets/servicecenter3.jpg";

export default function Service() {
  const services = [
    { icon: <FaWrench className="text-4xl text-yellow-400 mb-4" />, title: "General & Periodic Service", desc: "Comprehensive routine maintenance including oil change, filter replacement and safety checks." },
    { icon: <FaCog className="text-4xl text-yellow-400 mb-4" />, title: "Engine Diagnostics & Repairs", desc: "State-of-the-art diagnostics and expert engine repairs to keep your bike performing like new." },
    { icon: <FaTools className="text-4xl text-yellow-400 mb-4" />, title: "Genuine Spare Parts", desc: "Only genuine Bajaj spare parts with warranty for reliability and long life." },
    { icon: <FaMotorcycle className="text-4xl text-yellow-400 mb-4" />, title: "Insurance & Accident Repairs", desc: "Cashless claim assistance and professional accident repair services." },
    { icon: <FaOilCan className="text-4xl text-yellow-400 mb-4" />, title: "Tyre & Brake Services", desc: "Wheel balancing, brake pad replacement and complete tyre care." },
    { icon: <FaCheckCircle className="text-4xl text-yellow-400 mb-4" />, title: "Performance Upgrades & Accessories", desc: "Exhausts, guards, seat covers and custom accessories to enhance performance and style." },
  ];

  const processSteps = [
    "Book Appointment (online or call)",
    "Bike Pickup / Drop-off",
    "Inspection & Estimate",
    "Professional Service",
    "Quality Check & Delivery"
  ];

  const packages = [
    { name: "Regular Service Package", price: "Starting at ₹1,499", details: ["Oil & filter change", "Full bike checkup", "Brake & tyre check"] },
    { name: "Premium Service Package", price: "Starting at ₹2,999", details: ["All Regular Services", "Detailed engine inspection", "Chain & sprocket cleaning"] },
    { name: "Custom Service", price: "Request Quote", details: ["Tailored services based on your specific needs."] }
  ];

  const testimonials = [
    { quote: "National Bajaj ka service center bahut fast aur reliable hai. Staff friendly hai aur service top-notch!", author: "Rahul Sharma" },
    { quote: "Meri bike ka maintenance yaha se karwata hoon har baar. 100% recommended!", author: "Anjali Verma" }
  ];

  const faqs = [
    { q: "After how many kilometers should the bike be serviced?", a: "Regular service is recommended every 5000 km or once every 6 months." },
    { q: "Is pickup & drop service available?", a: "Yes, we provide free pickup & drop service within city limits." },
    { q: "Do you service only Bajaj bikes?", a: "Yes, we are an authorized Bajaj dealership and service only Bajaj bikes." }
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" }
    })
  };

  return (
    <div className="bg-blue-50 text-gray-800">
      {/* ===== Hero Section ===== */}
      <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} className="relative bg-blue-900 text-white py-20 text-center">
        <div className="max-w-5xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Complete Motorcycle Care
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto">
            From routine servicing to performance upgrades, National Bajaj ensures your ride stays smooth, safe, and powerful.
          </p>
        </div>
      </motion.section>

      {/* ===== Services Grid ===== */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-3xl font-bold text-blue-900 text-center mb-12">
          Our Services
        </motion.h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <motion.div key={i} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="bg-white rounded-2xl p-8 shadow hover:shadow-lg transition transform hover:-translate-y-2 hover:scale-[1.02]">
              {s.icon}
              <h3 className="text-xl font-semibold text-blue-900 mb-2">{s.title}</h3>
              <p>{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ===== Packages ===== */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-3xl font-bold text-blue-900 text-center mb-12">
          Service Packages
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-8">
          {packages.map((pkg, i) => (
            <motion.div key={i} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="bg-white rounded-2xl p-8 shadow hover:shadow-lg transition transform hover:-translate-y-2 hover:scale-[1.02] text-center">
              <h3 className="text-2xl font-semibold text-blue-900 mb-2">{pkg.name}</h3>
              <p className="text-yellow-500 font-bold mb-4">{pkg.price}</p>
              <ul className="text-gray-700 mb-4 space-y-2">
                {pkg.details.map((d, j) => (
                  <li key={j}>• {d}</li>
                ))}
              </ul>
              <Link to="/book-service">
                <button className="bg-yellow-400 text-blue-900 px-5 py-2 rounded-lg font-semibold hover:bg-yellow-500 transition">
                  Book Now
                </button>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ===== Call to Action ===== */}
      <motion.section initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="bg-yellow-400 text-blue-900 text-center py-16">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
          Ready for your next ride?
        </h2>
        <p className="text-lg mb-6">
          Book your bike’s service today and enjoy hassle-free performance.
        </p>
        <Link to="/book-service">
          <button className="bg-blue-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-800 transition">
            Book a Service
          </button>
        </Link>
      </motion.section>
    </div>
  );
}
