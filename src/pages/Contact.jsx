import { useState } from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import toast, { Toaster } from "react-hot-toast";

export default function Contact() {
  const API_URL = "https://bajajautosalesbackend-1.onrender.com/api/contact";

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      });

      const data = await res.json();

      if (!res.ok) {
        toast.error(data.message || "Something went wrong");
        return;
      }

      toast.success("Message sent successfully!");

      setForm({
        name: "",
        email: "",
        phone: "",
        message: ""
      });

    } catch (error) {
      toast.error("Server Error");
    }
  };

  return (
    <div className="bg-blue-50 text-gray-800">
      <Toaster position="top-center" />

      {/* ===== Hero Section ===== */}
      <section className="bg-blue-900 text-white py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Contact Us</h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto">
          Reach out to National Bajaj for inquiries, support, or service appointments. 
          We’re here to help you choose the perfect bike or answer all your questions.
        </p>
      </section>

      {/* ===== Contact Info Cards ===== */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-16 grid md:grid-cols-3 gap-8 text-center">
        {[
          {
            icon: <FaMapMarkerAlt className="text-3xl text-yellow-400 mb-2 mx-auto" />,
            title: "Visit Us",
            desc: "National Bajaj Showroom, Ubhaon Road Belthara Road Ballia Near Chaukiya Modh"
          },
          {
            icon: <FaPhoneAlt className="text-3xl text-yellow-400 mb-2 mx-auto" />,
            title: "Call Us",
            desc: <a href="tel:+919198090051" className="hover:text-yellow-400 transition">+91 9198090051</a>
          },
          {
            icon: <FaEnvelope className="text-3xl text-yellow-400 mb-2 mx-auto" />,
            title: "Email Us",
            desc: <a href="mailto:customerservice@bajajauto.co.in" className="hover:text-yellow-400 transition">customerservice@bajajauto.co.in</a>
          }
        ].map((card, i) => (
          <motion.div
            key={i}
            className="bg-white p-8 rounded-2xl shadow hover:shadow-lg transition"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {card.icon}
            <h3 className="text-xl font-semibold text-blue-900 mb-2">{card.title}</h3>
            <p>{card.desc}</p>
          </motion.div>
        ))}
      </section>

      {/* ===== Contact Form ===== */}
      <section className="max-w-3xl mx-auto px-6 lg:px-12 py-16">
        <motion.div
          className="bg-white p-8 rounded-2xl shadow-md"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">Send a Message</h2>

          <form className="space-y-6" onSubmit={handleSubmit}>
            
            <div>
              <label className="block text-gray-700 mb-2">Name</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-2">Phone Number</label>
              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="e.g. +91 9198090051"
                className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-2">Message</label>
              <textarea
                rows="4"
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Your message..."
                className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-yellow-400 text-blue-900 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-500 transition w-full"
            >
              Send Message
            </button>

          </form>
        </motion.div>
      </section>

      {/* ===== Google Map Section ===== */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 pb-16">
        <h2 className="text-3xl font-bold text-blue-900 mb-6 text-center">Our Location</h2>
        <div className="rounded-2xl overflow-hidden shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.555488430799!2d90.39945241536221!3d23.750891594205842!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8591b90c2e7%3A0x3e2fa5a9d88c43!2sBajaj%20Showroom!5e0!3m2!1sen!2sin!4v1695768494000!5m2!1sen!2sin"
            className="w-full h-96 border-0"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
    </div>
  );
}
