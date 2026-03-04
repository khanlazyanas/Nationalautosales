import { useState } from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaPaperPlane } from "react-icons/fa";
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

  const [sending, setSending] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Optimistic UI: show success immediately
    toast.success("Message sent successfully!");
    setForm({ name: "", email: "", phone: "", message: "" });

    setSending(true);

    try {
      const res = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      });

      const data = await res.json();

      if (!res.ok) {
        toast.error(data.message || "Something went wrong");
      }

    } catch (error) {
      toast.error("Server Error");
    } finally {
      setSending(false);
    }
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <div className="bg-[#030712] text-slate-300 font-inter min-h-screen overflow-hidden selection:bg-cyan-500/30">
      {/* Dark Theme Toaster */}
      <Toaster position="top-center" toastOptions={{ style: { background: '#0f172a', color: '#fff', border: '1px solid rgba(255,255,255,0.1)' } }} />

      {/* ===== HERO SECTION ===== */}
      <motion.section 
        initial="hidden" animate="visible" variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
        className="relative pt-40 pb-24 px-6 text-center border-b border-white/5"
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-[#030712] to-[#030712] pointer-events-none" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-cyan-600/10 blur-[150px] rounded-full pointer-events-none" />

        <motion.div variants={fadeUp} className="relative z-10 max-w-4xl mx-auto">
          <span className="inline-block px-4 py-1.5 mb-6 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-bold text-cyan-400 uppercase tracking-[0.25em] backdrop-blur-md">
            Get In Touch
          </span>
          <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter mb-6">
            Contact <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">HQ</span>
          </h1>
          <p className="text-lg text-slate-400 font-light max-w-2xl mx-auto leading-relaxed">
            Reach out to National Auto for inquiries, elite support, or priority service appointments. We’re here to elevate your ride.
          </p>
        </motion.div>
      </motion.section>

      {/* ===== CONTACT INFO CARDS ===== */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-20">
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              icon: <FaMapMarkerAlt className="text-4xl text-cyan-400 group-hover:scale-110 transition-transform drop-shadow-[0_0_10px_rgba(34,211,238,0.5)]" />,
              title: "Showroom Location",
              desc: "National Bajaj Showroom, Ubhaon Road Belthara Road Ballia Near Chaukiya Modh"
            },
            {
              icon: <FaPhoneAlt className="text-4xl text-cyan-400 group-hover:scale-110 transition-transform drop-shadow-[0_0_10px_rgba(34,211,238,0.5)]" />,
              title: "Direct Line",
              desc: <a href="tel:+919198090051" className="hover:text-cyan-400 transition-colors">+91 9198090051</a>
            },
            {
              icon: <FaEnvelope className="text-4xl text-cyan-400 group-hover:scale-110 transition-transform drop-shadow-[0_0_10px_rgba(34,211,238,0.5)]" />,
              title: "Email Support",
              desc: <a href="mailto:customerservice@bajajauto.co.in" className="hover:text-cyan-400 transition-colors">customerservice@bajajauto.co.in</a>
            }
          ].map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.6 }}
              className="group bg-white/[0.02] border border-white/5 p-10 rounded-[2rem] text-center hover:bg-white/[0.04] hover:border-white/10 transition-all duration-300 hover:-translate-y-2 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 blur-[40px] rounded-full group-hover:bg-cyan-500/10 transition-colors" />
              <div className="flex justify-center mb-6 relative z-10">{card.icon}</div>
              <h3 className="text-xl font-bold text-white mb-4 tracking-wide relative z-10">{card.title}</h3>
              <p className="text-slate-400 font-light leading-relaxed relative z-10">{card.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ===== CONTACT FORM & MAP GRID ===== */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 pb-24 grid lg:grid-cols-2 gap-12 items-start">
        
        {/* Contact Form */}
        <motion.div
          className="bg-white/[0.02] border border-white/5 p-8 md:p-10 rounded-[2rem] shadow-[0_0_50px_rgba(0,0,0,0.5)] backdrop-blur-md relative overflow-hidden"
          initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
        >
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-cyan-400" />
          <h2 className="text-3xl font-black text-white mb-8">Send a Message</h2>

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">Name</label>
              <input
                type="text" name="name" value={form.name} onChange={handleChange} required
                placeholder="Your Name"
                className="w-full bg-[#030712] border border-white/10 text-white p-4 rounded-xl focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all font-mono text-sm"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">Email</label>
                <input
                  type="email" name="email" value={form.email} onChange={handleChange} required
                  placeholder="you@example.com"
                  className="w-full bg-[#030712] border border-white/10 text-white p-4 rounded-xl focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all font-mono text-sm"
                />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">Phone</label>
                <input
                  type="tel" name="phone" value={form.phone} onChange={handleChange} required
                  placeholder="+91 9198090051"
                  className="w-full bg-[#030712] border border-white/10 text-white p-4 rounded-xl focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all font-mono text-sm"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">Message</label>
              <textarea
                rows="4" name="message" value={form.message} onChange={handleChange} required
                placeholder="How can we help you?"
                className="w-full bg-[#030712] border border-white/10 text-white p-4 rounded-xl focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all font-mono text-sm resize-none"
              ></textarea>
            </div>

            <button
              type="submit" disabled={sending}
              className={`w-full relative overflow-hidden group py-4 mt-2 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-black uppercase tracking-widest text-sm shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_30px_rgba(6,182,212,0.5)] active:scale-95 transition-all ${sending ? 'opacity-70 cursor-not-allowed' : ''}`}
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                <FaPaperPlane /> {sending ? "Transmitting..." : "Send Message"}
              </span>
              {!sending && <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent group-hover:animate-[shimmer_1s_infinite]" />}
            </button>
          </form>
        </motion.div>

        {/* Google Map */}
        <motion.div
          initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
          className="h-full min-h-[400px] rounded-[2rem] overflow-hidden border border-white/10 shadow-[0_0_30px_rgba(0,0,0,0.8)] relative group"
        >
          {/* Magic CSS to make Google Maps Dark Mode */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.555488430799!2d90.39945241536221!3d23.750891594205842!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8591b90c2e7%3A0x3e2fa5a9d88c43!2sBajaj%20Showroom!5e0!3m2!1sen!2sin!4v1695768494000!5m2!1sen!2sin"
            className="w-full h-full border-0 absolute inset-0"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            style={{ filter: "invert(100%) hue-rotate(180deg) contrast(1.1) opacity(0.8)" }}
          ></iframe>
          <div className="absolute inset-0 pointer-events-none group-hover:bg-cyan-500/10 transition-colors duration-500" />
        </motion.div>
      </section>
    </div>
  );
}