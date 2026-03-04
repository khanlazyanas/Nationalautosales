import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaCheckCircle,
  FaAward,
  FaTrophy
} from "react-icons/fa";
import nationalbajaj from "../assets/nationalshowroom.jpg";

/* ---------- Premium Animated Counter ---------- */
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
    <h3 ref={ref} className="text-4xl lg:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 tracking-tighter drop-shadow-[0_0_15px_rgba(34,211,238,0.3)]">
      {value}{suffix}
    </h3>
  );
}

export default function About() {
  const fadeUp = { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } } };
  const stagger = { visible: { transition: { staggerChildren: 0.2 } } };

  return (
    <div className="bg-[#030712] text-slate-300 font-inter overflow-hidden selection:bg-cyan-500/30">

      {/* ===== HERO SECTION (Cinematic) ===== */}
      <motion.section
        initial="hidden"
        animate="visible"
        variants={stagger}
        className="relative pt-40 pb-24 px-6 lg:px-12 flex flex-col items-center justify-center text-center min-h-[60vh]"
      >
        {/* Abstract Background Effects */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-[#030712] to-[#030712] pointer-events-none" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-cyan-600/10 blur-[150px] rounded-full pointer-events-none" />

        <motion.div variants={fadeUp} className="relative z-10 max-w-4xl mx-auto">
          <span className="inline-block px-4 py-1.5 mb-6 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-bold text-cyan-400 uppercase tracking-[0.25em] backdrop-blur-md">
            Our Legacy
          </span>
          <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-[1.1] mb-6">
            Welcome to <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 drop-shadow-[0_0_30px_rgba(59,130,246,0.3)]">
              National Bajaj
            </span>
          </h1>
          <p className="text-lg md:text-xl text-slate-400 font-light max-w-2xl mx-auto leading-relaxed">
            Your elite destination for raw power and precision. We don't just sell motorcycles; we engineer the ultimate riding experience.
          </p>
        </motion.div>
      </motion.section>

      {/* ===== INTRODUCTION (Glassmorphic Layout) ===== */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={stagger}
        className="max-w-7xl mx-auto px-6 lg:px-12 py-20 grid lg:grid-cols-2 gap-16 items-center relative"
      >
        <motion.div variants={fadeUp} className="relative group">
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-cyan-400 rounded-3xl blur-[40px] opacity-20 group-hover:opacity-40 transition-opacity duration-700" />
          <div className="relative p-1 rounded-3xl bg-gradient-to-b from-white/10 to-transparent">
            <img
              src={nationalbajaj}
              alt="National Bajaj Showroom"
              className="w-full h-[400px] object-cover rounded-[1.4rem] grayscale-[20%] group-hover:grayscale-0 transition-all duration-700"
            />
            {/* Overlay Gradient for Dark Theme Integration */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-transparent to-transparent rounded-[1.4rem]" />
          </div>
        </motion.div>

        <motion.div variants={fadeUp} className="flex flex-col gap-6">
          <h2 className="text-4xl font-black text-white tracking-tight">
            Who <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-400 to-slate-200">We Are</span>
          </h2>
          <div className="w-16 h-1 bg-cyan-500 rounded-full shadow-[0_0_10px_rgba(6,182,212,0.8)]" />
          <p className="text-slate-400 text-lg font-light leading-relaxed">
            At National Bajaj, we take pride in being a premier authorized dealership offering the complete, aggressive range of Bajaj machines. From street-naked predators to long-haul cruisers, we house them all.
          </p>
          <p className="text-slate-300 text-lg leading-relaxed border-l-2 border-cyan-500 pl-4 bg-gradient-to-r from-cyan-500/10 to-transparent py-2">
            Our mission is absolute: <strong className="text-white">Elite Service & Uncompromised Customer Satisfaction.</strong>
          </p>
        </motion.div>
      </motion.section>

      {/* ===== PRODUCTS & WHY CHOOSE US (Combined Premium Grid) ===== */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={stagger}
        className="max-w-7xl mx-auto px-6 lg:px-12 py-24 relative"
      >
        <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-blue-700/10 blur-[120px] rounded-full pointer-events-none" />

        <div className="text-center mb-16">
          <h2 className="text-4xl font-black text-white tracking-tight mb-4">The National Advantage</h2>
          <p className="text-slate-400 max-w-2xl mx-auto font-light">Everything you need to dominate the road, under one roof.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { title: "Complete Fleet", desc: "Pulsar, Dominar, Platina, Avenger & more." },
            { title: "Elite Servicing", desc: "Authorized experts & 100% genuine spare parts." },
            { title: "Test Rides", desc: "Experience the thrill before you own it." },
            { title: "Easy Finance", desc: "Seamless loan assistance & transparent pricing." },
            { title: "Insurance", desc: "Quick renewals and comprehensive coverage support." },
            { title: "Upgrades", desc: "Premium accessories & performance tuning." },
          ].map((item, i) => (
            <motion.div 
              key={i} 
              variants={fadeUp} 
              className="group p-8 bg-[#050B14] border border-white/5 rounded-3xl hover:bg-white/[0.02] hover:border-white/10 transition-all duration-300 hover:-translate-y-1 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-100 transition-opacity">
                <FaCheckCircle className="text-cyan-400 text-6xl translate-x-4 -translate-y-4" />
              </div>
              <FaCheckCircle className="text-cyan-400 text-2xl mb-4 shadow-cyan-500/50" />
              <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
              <p className="text-slate-400 text-sm font-light">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* ===== TIMELINE (Glowing Roadmap) ===== */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="bg-[#050B14] py-24 relative border-y border-white/5"
      >
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <motion.h2 variants={fadeUp} className="text-4xl font-black text-white text-center tracking-tight mb-20">
            Our Evolution
          </motion.h2>

          <div className="relative border-l border-white/10 ml-4 md:ml-1/2 space-y-12">
            {[
              { year: 2021, event: "National Bajaj Re-Established with Modern Setup" },
              { year: 2022, event: "1000+ Happy Customers Milestone Achieved" },
              { year: 2023, event: "Modern Showroom Expansion + Digital Transformation" },
              { year: 2024, event: "Best Dealer Award (Regional)" },
              { year: 2025, event: "State-of-the-art Service Center Upgrade" },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="relative pl-8 md:pl-0"
              >
                {/* Glowing Dot */}
                <div className="absolute left-[-5px] md:left-[-5px] top-1.5 w-2.5 h-2.5 rounded-full bg-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.8)]" />
                
                <div className="md:ml-12 p-6 bg-white/[0.02] border border-white/5 rounded-2xl hover:bg-white/[0.05] transition-colors">
                  <span className="text-sm font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 tracking-widest uppercase">
                    {item.year}
                  </span>
                  <p className="text-white mt-2 font-medium">{item.event}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* ===== COUNTERS (Holographic Numbers) ===== */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-7xl mx-auto px-6 lg:px-12 py-24"
      >
        <div className="grid md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-white/10">
          {[
            { end: 20, label: "Years of Excellence" },
            { end: 1000, label: "Happy Customers" },
            { end: 5, label: "Prestigious Awards" },
          ].map((item, i) => (
            <motion.div key={i} variants={fadeUp} className="py-6 flex flex-col items-center justify-center">
              <AnimatedCounter end={item.end} suffix="+" />
              <p className="mt-3 text-xs font-bold uppercase tracking-[0.2em] text-slate-500">{item.label}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* ===== EXECUTIVE TEAM ===== */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={stagger}
        className="bg-[#050B14] py-24 border-y border-white/5"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.h2 variants={fadeUp} className="text-4xl font-black text-white text-center tracking-tight mb-16">
            The Leadership
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "AYAZ USMANI", role: "Chief Executive Officer" },
              { name: "SAQUIB AHMAD", role: "Head of Service" },
              { name: "MOHAMMAD ILTAF", role: "Sales Manager" },
            ].map((member, i) => (
              <motion.div 
                key={i} 
                variants={fadeUp} 
                className="group relative bg-white/[0.02] border border-white/5 p-8 rounded-3xl text-center hover:bg-white/[0.05] transition-all duration-300"
              >
                {/* Premium Avatar Placeholder */}
                <div className="relative w-28 h-28 mx-auto mb-6 rounded-full p-1 bg-gradient-to-b from-blue-500 to-cyan-400 group-hover:shadow-[0_0_30px_rgba(34,211,238,0.3)] transition-all">
                  <div className="w-full h-full bg-[#030712] rounded-full flex items-center justify-center">
                    <span className="text-2xl font-black text-slate-700 group-hover:text-cyan-500 transition-colors">
                      {member.name.charAt(0)}
                    </span>
                  </div>
                </div>
                <h3 className="font-bold text-xl text-white tracking-wide">{member.name}</h3>
                <p className="text-cyan-400 text-xs font-bold uppercase tracking-widest mt-2">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* ===== PREMIUM CONTACT FOOTER SECTION ===== */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={stagger}
        className="relative py-24 overflow-hidden"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_var(--tw-gradient-stops))] from-blue-900/20 via-[#030712] to-[#030712] pointer-events-none" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 grid md:grid-cols-3 gap-6">
          <motion.div variants={fadeUp} className="flex flex-col items-center text-center p-8 bg-white/[0.02] border border-white/5 rounded-3xl hover:bg-white/[0.04] transition-colors">
            <div className="w-12 h-12 bg-blue-500/10 rounded-full flex items-center justify-center mb-4 border border-blue-500/20">
              <FaMapMarkerAlt className="text-cyan-400 text-xl" />
            </div>
            <h4 className="text-white font-bold mb-2">Showroom Location</h4>
            <p className="text-slate-400 text-sm font-light">Near Chaukiyamodh Ubhaon Road,<br />Belthara Road (Ballia)</p>
          </motion.div>

          <motion.div variants={fadeUp} className="flex flex-col items-center text-center p-8 bg-white/[0.02] border border-white/5 rounded-3xl hover:bg-white/[0.04] transition-colors">
            <div className="w-12 h-12 bg-blue-500/10 rounded-full flex items-center justify-center mb-4 border border-blue-500/20">
              <FaPhoneAlt className="text-cyan-400 text-xl" />
            </div>
            <h4 className="text-white font-bold mb-2">Call Us</h4>
            <a href="tel:+919198090051" className="text-slate-400 text-sm font-light hover:text-cyan-400 transition-colors">+91 9198090051</a>
          </motion.div>

          <motion.div variants={fadeUp} className="flex flex-col items-center text-center p-8 bg-white/[0.02] border border-white/5 rounded-3xl hover:bg-white/[0.04] transition-colors">
            <div className="w-12 h-12 bg-blue-500/10 rounded-full flex items-center justify-center mb-4 border border-blue-500/20">
              <FaEnvelope className="text-cyan-400 text-xl" />
            </div>
            <h4 className="text-white font-bold mb-2">Email Support</h4>
            <a href="mailto:customerservice@bajajauto.co.in" className="text-slate-400 text-sm font-light hover:text-cyan-400 transition-colors">customerservice@bajajauto.co.in</a>
          </motion.div>
        </div>
      </motion.section>

    </div>
  );
}