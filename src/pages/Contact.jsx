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
    toast.success("Message transmitted successfully!", { icon: '🚀' });
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
        toast.error(data.message || "Communication disrupted.");
      }

    } catch (error) {
      toast.error("Server Error. Please try again.");
    } finally {
      setSending(false);
    }
  };

  // Silicon Valley Easing
  const customEase = [0.22, 1, 0.36, 1];

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: customEase } }
  };

  const stagger = {
    visible: { transition: { staggerChildren: 0.15 } }
  };

  return (
    <div className="bg-[#02040A] text-slate-300 font-inter min-h-screen overflow-hidden selection:bg-cyan-500/30 selection:text-cyan-50">
      
      {/* Dark Theme Premium Toaster */}
      <Toaster 
        position="top-center" 
        toastOptions={{ 
          style: { 
            background: 'rgba(5, 10, 21, 0.8)', 
            backdropFilter: 'blur(12px)',
            color: '#fff', 
            border: '1px solid rgba(255,255,255,0.1)',
            boxShadow: '0 20px 40px rgba(0,0,0,0.5)'
          } 
        }} 
      />

      {/* ================= BACKGROUND EFFECTS ================= */}
      <div className="fixed inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] pointer-events-none z-0" />
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/10 via-[#02040A] to-[#02040A] pointer-events-none" />
      <motion.div 
        animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.15, 0.1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="fixed top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-cyan-600/10 blur-[150px] rounded-full pointer-events-none mix-blend-screen" 
      />

      {/* ===== HERO SECTION ===== */}
      <motion.section 
        initial="hidden" animate="visible" variants={stagger}
        className="relative pt-40 pb-24 px-6 text-center border-b border-white/5 z-10"
      >
        <motion.div variants={fadeUp} className="relative max-w-4xl mx-auto flex flex-col items-center">
          <span className="inline-flex items-center gap-2 px-5 py-2 mb-8 rounded-full bg-white/[0.03] border border-white/5 text-[11px] font-bold text-cyan-400 uppercase tracking-[0.25em] backdrop-blur-2xl shadow-[0_4px_24px_rgba(0,0,0,0.4)]">
            <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            Get In Touch
          </span>
          <h1 className="text-6xl md:text-[5.5rem] font-black text-white tracking-tighter mb-6 leading-[0.9]">
            Contact <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 drop-shadow-[0_0_20px_rgba(34,211,238,0.3)]">Command</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-400 font-light max-w-2xl mx-auto leading-relaxed">
            Reach out to National Auto for inquiries, elite support, or priority service appointments. We’re here to elevate your ride.
          </p>
        </motion.div>
      </motion.section>

      {/* ===== CONTACT INFO CARDS (BENTO GRID) ===== */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-24 relative z-10">
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              icon: <FaMapMarkerAlt className="text-3xl text-cyan-400 group-hover:scale-110 transition-transform duration-500 drop-shadow-[0_0_15px_rgba(34,211,238,0.5)]" />,
              title: "Showroom Location",
              desc: "National Bajaj Showroom, Ubhaon Road Belthara Road Ballia Near Chaukiya Modh"
            },
            {
              icon: <FaPhoneAlt className="text-3xl text-cyan-400 group-hover:scale-110 transition-transform duration-500 drop-shadow-[0_0_15px_rgba(34,211,238,0.5)]" />,
              title: "Direct Line",
              desc: <a href="tel:+919198090051" className="hover:text-cyan-300 transition-colors">+91 9198090051</a>
            },
            {
              icon: <FaEnvelope className="text-3xl text-cyan-400 group-hover:scale-110 transition-transform duration-500 drop-shadow-[0_0_15px_rgba(34,211,238,0.5)]" />,
              title: "Digital Support",
              desc: <a href="mailto:customerservice@bajajauto.co.in" className="hover:text-cyan-300 transition-colors text-sm">customerservice@bajajauto.co.in</a>
            }
          ].map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ delay: i * 0.1, duration: 1, ease: customEase }}
              className="group bg-[#050A15]/80 backdrop-blur-xl border border-white/5 p-10 rounded-[2.5rem] text-center hover:bg-white/[0.03] hover:border-white/10 transition-all duration-500 hover:-translate-y-2 relative overflow-hidden shadow-lg"
            >
              {/* Spotlight Glow */}
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-cyan-500/10 blur-[50px] rounded-full group-hover:bg-cyan-500/20 transition-colors duration-700 pointer-events-none" />
              
              <div className="w-16 h-16 mx-auto bg-gradient-to-br from-white/[0.05] to-transparent border border-white/5 rounded-2xl flex items-center justify-center mb-8 relative z-10 group-hover:border-cyan-500/30 transition-colors duration-500">
                {card.icon}
              </div>
              <h3 className="text-2xl font-black text-white mb-4 tracking-tight relative z-10 group-hover:text-cyan-50 transition-colors">{card.title}</h3>
              <p className="text-slate-400 font-light leading-relaxed relative z-10">{card.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ===== CONTACT FORM & MAP GRID ===== */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 pb-32 grid lg:grid-cols-2 gap-10 items-start relative z-10">
        
        {/* ================= Contact Form ================= */}
        <motion.div
          className="bg-white/[0.02] border border-white/5 p-8 md:p-12 rounded-[2.5rem] shadow-[0_30px_60px_rgba(0,0,0,0.4)] backdrop-blur-2xl relative overflow-hidden group"
          initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 1, ease: customEase }}
        >
          {/* Animated Top Border */}
          <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-50" />
          
          <h2 className="text-4xl font-black text-white mb-8 tracking-tighter">Send a <span className="text-slate-500">Message</span></h2>

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 mb-3 ml-1">Full Name</label>
              <input
                type="text" name="name" value={form.name} onChange={handleChange} required
                placeholder="John Doe"
                className="w-full bg-[#02040A]/50 border border-white/10 text-white px-5 py-4 rounded-2xl focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 focus:bg-[#02040A] transition-all font-mono text-sm shadow-inner placeholder:text-slate-600"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 mb-3 ml-1">Email Address</label>
                <input
                  type="email" name="email" value={form.email} onChange={handleChange} required
                  placeholder="you@example.com"
                  className="w-full bg-[#02040A]/50 border border-white/10 text-white px-5 py-4 rounded-2xl focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 focus:bg-[#02040A] transition-all font-mono text-sm shadow-inner placeholder:text-slate-600"
                />
              </div>
              <div>
                <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 mb-3 ml-1">Phone Number</label>
                <input
                  type="tel" name="phone" value={form.phone} onChange={handleChange} required
                  placeholder="+91 9198090051"
                  className="w-full bg-[#02040A]/50 border border-white/10 text-white px-5 py-4 rounded-2xl focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 focus:bg-[#02040A] transition-all font-mono text-sm shadow-inner placeholder:text-slate-600"
                />
              </div>
            </div>

            <div>
              <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 mb-3 ml-1">Your Message</label>
              <textarea
                rows="5" name="message" value={form.message} onChange={handleChange} required
                placeholder="How can we help you dominate the road?"
                className="w-full bg-[#02040A]/50 border border-white/10 text-white px-5 py-4 rounded-2xl focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 focus:bg-[#02040A] transition-all font-mono text-sm resize-none shadow-inner placeholder:text-slate-600"
              ></textarea>
            </div>

            <button
              type="submit" disabled={sending}
              className={`w-full relative overflow-hidden group/btn py-5 mt-4 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 text-[#02040A] font-black uppercase tracking-[0.2em] text-sm shadow-[0_0_20px_rgba(34,211,238,0.2)] hover:shadow-[0_0_30px_rgba(34,211,238,0.5)] active:scale-95 transition-all duration-300 ${sending ? 'opacity-70 cursor-not-allowed' : ''}`}
            >
              <span className="relative z-10 flex items-center justify-center gap-3">
                {sending ? (
                  "Transmitting..."
                ) : (
                  <>
                    Transmit Message <FaPaperPlane className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                  </>
                )}
              </span>
              {!sending && <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent group-hover/btn:animate-[shimmer_1.5s_infinite]" />}
            </button>
          </form>
        </motion.div>

        {/* ================= Google Map ================= */}
        <motion.div
          initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 1, ease: customEase }}
          className="h-full min-h-[500px] lg:min-h-full rounded-[2.5rem] overflow-hidden border border-white/10 shadow-[0_30px_60px_rgba(0,0,0,0.4)] relative group p-[2px] bg-gradient-to-b from-white/10 to-transparent"
        >
          <div className="w-full h-full rounded-[2.4rem] overflow-hidden relative bg-[#02040A]">
            {/* Cinematic Overlay on Map */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#02040A] via-transparent to-transparent pointer-events-none z-10" />
            <div className="absolute inset-0 bg-blue-500/10 mix-blend-overlay pointer-events-none z-10 group-hover:bg-cyan-500/20 transition-colors duration-700" />
            
            <iframe
              src="https://maps.google.com/maps?q=National%20Bajaj%20Showroom,%20Belthara%20Road&t=&z=15&ie=UTF8&iwloc=&output=embed"
              className="w-full h-full border-0 absolute inset-0 z-0"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              style={{ filter: "invert(90%) hue-rotate(180deg) contrast(1.2) opacity(0.85) grayscale(20%)" }}
            ></iframe>
          </div>
        </motion.div>

      </section>
    </div>
  );
}