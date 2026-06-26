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
    <h3 ref={ref} className="text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-br from-white via-cyan-200 to-cyan-500 tracking-tighter drop-shadow-[0_0_20px_rgba(34,211,238,0.2)]">
      {value}{suffix}
    </h3>
  );
}

export default function About() {
  // Silicon Valley Standard Easing
  const customEase = [0.22, 1, 0.36, 1];
  
  const fadeUp = { 
    hidden: { opacity: 0, y: 50 }, 
    visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: customEase } } 
  };
  
  const stagger = { 
    visible: { transition: { staggerChildren: 0.2, delayChildren: 0.1 } } 
  };

  return (
    <div className="w-full min-h-screen bg-[#02040A] text-slate-300 font-inter overflow-hidden selection:bg-cyan-500/30 selection:text-cyan-50">

      {/* Background Noise Texture */}
      <div className="fixed inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] pointer-events-none z-0" />

      {/* ===== HERO SECTION (Cinematic) ===== */}
      <motion.section
        initial="hidden"
        animate="visible"
        variants={stagger}
        className="relative pt-48 pb-32 px-6 lg:px-12 flex flex-col items-center justify-center text-center min-h-[70vh] z-10"
      >
        {/* Abstract Background Effects */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/10 via-[#02040A] to-[#02040A] pointer-events-none" />
        <motion.div 
          animate={{ scale: [1, 1.1, 1], opacity: [0.15, 0.25, 0.15] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-cyan-500/10 blur-[150px] rounded-full pointer-events-none mix-blend-screen" 
        />

        <motion.div variants={fadeUp} className="relative z-10 max-w-5xl mx-auto flex flex-col items-center">
          <span className="inline-flex items-center gap-2 px-5 py-2 mb-8 rounded-full bg-white/[0.03] border border-white/5 text-[11px] font-bold text-cyan-400 uppercase tracking-[0.25em] backdrop-blur-2xl shadow-[0_4px_24px_rgba(0,0,0,0.4)]">
            <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            Our Legacy
          </span>
          <h1 className="text-6xl sm:text-7xl md:text-[6.5rem] font-black text-white tracking-tighter leading-[0.9] mb-8">
            Welcome to <br />
            <span className="relative inline-block mt-2">
              <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-white drop-shadow-[0_0_30px_rgba(34,211,238,0.3)]">
                National Bajaj
              </span>
              <div className="absolute -bottom-2 left-0 w-full h-[6px] bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent blur-md rounded-full" />
            </span>
          </h1>
          <p className="text-lg md:text-2xl text-slate-400 font-light max-w-3xl mx-auto leading-relaxed">
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
        className="max-w-7xl mx-auto px-6 lg:px-12 py-24 grid lg:grid-cols-2 gap-16 lg:gap-24 items-center relative z-10"
      >
        <motion.div variants={fadeUp} className="relative group perspective-[1000px]">
          {/* Spotlight Glow */}
          <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500 to-blue-600 rounded-[2.5rem] blur-[60px] opacity-10 group-hover:opacity-30 transition-opacity duration-1000" />
          
          <div className="relative p-[1px] rounded-[2.5rem] bg-gradient-to-b from-white/15 to-white/5 transition-transform duration-700 ease-out group-hover:rotate-y-[-2deg] group-hover:rotate-x-[2deg]">
            <div className="relative rounded-[2.4rem] overflow-hidden bg-[#050A15]">
              <img
                src={nationalbajaj}
                alt="National Bajaj Showroom"
                className="w-full h-[450px] object-cover scale-105 grayscale-[30%] group-hover:grayscale-0 group-hover:scale-100 transition-all duration-1000 ease-[0.22,1,0.36,1]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#02040A] via-[#02040A]/40 to-transparent" />
            </div>
          </div>
        </motion.div>

        <motion.div variants={fadeUp} className="flex flex-col gap-8">
          <div>
            <h2 className="text-5xl lg:text-6xl font-black text-white tracking-tighter mb-6">
              Who <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-400 to-slate-200">We Are</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full shadow-[0_0_15px_rgba(34,211,238,0.5)]" />
          </div>
          
          <p className="text-slate-400 text-lg md:text-xl font-light leading-relaxed">
            At National Bajaj, we take pride in being a premier authorized dealership offering the complete, aggressive range of Bajaj machines. From street-naked predators to long-haul cruisers, we house them all.
          </p>
          
          <div className="relative p-6 rounded-2xl bg-white/[0.02] border border-white/5 backdrop-blur-md overflow-hidden group">
            <div className="absolute left-0 top-0 w-1 h-full bg-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.8)]" />
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <p className="text-slate-200 text-lg leading-relaxed relative z-10">
              Our mission is absolute: <br/>
              <strong className="text-white font-black tracking-wide">Elite Service & Uncompromised Customer Satisfaction.</strong>
            </p>
          </div>
        </motion.div>
      </motion.section>

      {/* ===== PRODUCTS & WHY CHOOSE US (Bento Grid Style) ===== */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={stagger}
        className="max-w-7xl mx-auto px-6 lg:px-12 py-32 relative z-10"
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-blue-700/5 blur-[120px] rounded-full pointer-events-none mix-blend-screen" />

        <div className="text-center mb-20 flex flex-col items-center">
          <span className="inline-block px-4 py-1.5 mb-6 rounded-full bg-blue-500/10 border border-blue-500/20 text-[10px] font-black text-blue-400 uppercase tracking-[0.3em]">
            The Ecosystem
          </span>
          <h2 className="text-5xl md:text-6xl font-black text-white tracking-tighter mb-6">
            The National <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Advantage</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto font-light text-lg">Everything you need to dominate the road, seamlessly integrated under one roof.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { title: "Complete Fleet", desc: "Pulsar, Dominar, Platina, Avenger & more." },
            { title: "Elite Servicing", desc: "Authorized experts & 100% genuine spare parts." },
            { title: "Test Rides", desc: "Experience the adrenaline before you own it." },
            { title: "Easy Finance", desc: "Seamless loan assistance & transparent pricing." },
            { title: "Insurance", desc: "Quick renewals and comprehensive coverage." },
            { title: "Upgrades", desc: "Premium accessories & performance tuning." },
          ].map((item, i) => (
            <motion.div 
              key={i} 
              variants={fadeUp} 
              className="group relative p-8 bg-[#050A15]/80 backdrop-blur-xl border border-white/5 rounded-[2rem] hover:bg-white/[0.03] transition-all duration-500 overflow-hidden"
            >
              {/* Hover Glow Effect */}
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-cyan-500/20 blur-[50px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              
              <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-all duration-500 group-hover:scale-110">
                <FaCheckCircle className="text-cyan-400 text-7xl" />
              </div>

              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-white/[0.05] to-transparent border border-white/10 flex items-center justify-center mb-6 shadow-lg relative z-10 group-hover:border-cyan-500/30 transition-colors">
                <FaCheckCircle className="text-cyan-400 text-xl" />
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-3 tracking-tight relative z-10">{item.title}</h3>
              <p className="text-slate-400 text-sm font-light leading-relaxed relative z-10">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* ===== TIMELINE (Glowing Roadmap - Vercel Style) ===== */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="py-32 relative z-10"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#02040A] via-[#050A15] to-[#02040A] z-0" />
        
        <div className="max-w-4xl mx-auto px-6 lg:px-12 relative z-10">
          <motion.h2 variants={fadeUp} className="text-5xl md:text-6xl font-black text-white text-center tracking-tighter mb-24">
            Our <span className="text-slate-500">Evolution</span>
          </motion.h2>

          <div className="relative ml-4 md:ml-12 space-y-16">
            {/* The Line */}
            <div className="absolute left-0 top-2 bottom-2 w-[1px] bg-gradient-to-b from-cyan-500 via-blue-600/50 to-transparent" />

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
                className="relative pl-10 md:pl-16 group"
              >
                {/* Glowing Node */}
                <div className="absolute left-[-5px] top-2 w-[11px] h-[11px] rounded-full bg-[#02040A] border-2 border-cyan-400 z-10 group-hover:scale-150 group-hover:bg-cyan-400 transition-all duration-300 shadow-[0_0_15px_rgba(34,211,238,0.5)] group-hover:shadow-[0_0_25px_rgba(34,211,238,0.8)]" />
                
                <div className="p-8 bg-white/[0.01] border border-white/5 rounded-[2rem] hover:bg-white/[0.03] hover:border-white/10 transition-all duration-500 backdrop-blur-sm">
                  <span className="text-sm font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 tracking-[0.2em] uppercase">
                    {item.year}
                  </span>
                  <p className="text-white mt-3 text-lg font-medium tracking-tight">{item.event}</p>
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
        className="max-w-7xl mx-auto px-6 lg:px-12 py-24 relative z-10"
      >
        <div className="p-[1px] bg-gradient-to-b from-white/10 to-transparent rounded-[2.5rem]">
          <div className="grid md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-white/5 bg-[#050A15]/90 backdrop-blur-2xl rounded-[2.4rem] py-16 px-8">
            {[
              { end: 20, label: "Years of Excellence" },
              { end: 1000, label: "Happy Customers" },
              { end: 5, label: "Prestigious Awards" },
            ].map((item, i) => (
              <motion.div key={i} variants={fadeUp} className="py-6 flex flex-col items-center justify-center">
                <AnimatedCounter end={item.end} suffix="+" />
                <p className="mt-4 text-[10px] font-black uppercase tracking-[0.3em] text-slate-500">{item.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* ===== EXECUTIVE TEAM ===== */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={stagger}
        className="py-32 relative z-10"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-24">
            <motion.h2 variants={fadeUp} className="text-5xl md:text-6xl font-black text-white tracking-tighter">
              The <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-400 to-slate-200">Leadership</span>
            </motion.h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "AYAZ USMANI", role: "Chief Executive Officer" },
              { name: "SAQUIB AHMAD", role: "Head of Service" },
              { name: "MOHAMMAD ILTAF", role: "Sales Manager" },
            ].map((member, i) => (
              <motion.div 
                key={i} 
                variants={fadeUp} 
                className="group relative bg-[#050A15] border border-white/5 p-10 rounded-[2.5rem] text-center hover:bg-white/[0.02] hover:border-white/10 transition-all duration-500 hover:-translate-y-2 overflow-hidden"
              >
                {/* Subtle Background Glow */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-32 bg-cyan-500/10 blur-[40px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                {/* Premium Avatar */}
                <div className="relative w-32 h-32 mx-auto mb-8 rounded-full p-[2px] bg-gradient-to-b from-white/10 to-transparent group-hover:from-cyan-400 group-hover:to-blue-600 transition-all duration-700 shadow-xl">
                  <div className="w-full h-full bg-[#02040A] rounded-full flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] to-transparent" />
                    <span className="text-4xl font-black text-slate-600 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-br group-hover:from-white group-hover:to-cyan-200 transition-all duration-500 relative z-10">
                      {member.name.charAt(0)}
                    </span>
                  </div>
                </div>
                
                <h3 className="font-black text-2xl text-white tracking-tight mb-2 group-hover:text-cyan-50 transition-colors">{member.name}</h3>
                <p className="text-cyan-400 text-[10px] font-bold uppercase tracking-[0.25em]">{member.role}</p>
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
        className="relative py-32 overflow-hidden border-t border-white/5 z-10"
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-blue-900/10 via-[#02040A] to-[#02040A] pointer-events-none" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 grid md:grid-cols-3 gap-6">
          {[
            { icon: <FaMapMarkerAlt />, title: "Showroom Location", detail: "Near Chaukiyamodh Ubhaon Road, Belthara Road (Ballia)", link: null },
            { icon: <FaPhoneAlt />, title: "Call Command", detail: "+91 9198090051", link: "tel:+919198090051" },
            { icon: <FaEnvelope />, title: "Digital Support", detail: "customerservice@bajajauto.co.in", link: "mailto:customerservice@bajajauto.co.in" },
          ].map((contact, i) => (
            <motion.div key={i} variants={fadeUp} className="flex flex-col items-center text-center p-10 bg-white/[0.02] border border-white/5 rounded-[2rem] hover:bg-white/[0.04] transition-all duration-300 group">
              <div className="w-14 h-14 bg-gradient-to-br from-white/[0.05] to-transparent rounded-2xl flex items-center justify-center mb-6 border border-white/10 group-hover:border-cyan-500/30 group-hover:scale-110 transition-all duration-500 shadow-lg">
                <div className="text-cyan-400 text-2xl group-hover:drop-shadow-[0_0_10px_rgba(34,211,238,0.8)] transition-all">
                  {contact.icon}
                </div>
              </div>
              <h4 className="text-white font-bold mb-3 tracking-wide">{contact.title}</h4>
              {contact.link ? (
                <a href={contact.link} className="text-slate-400 text-sm font-light hover:text-cyan-400 transition-colors">{contact.detail}</a>
              ) : (
                <p className="text-slate-400 text-sm font-light leading-relaxed">{contact.detail}</p>
              )}
            </motion.div>
          ))}
        </div>
      </motion.section>

    </div>
  );
}