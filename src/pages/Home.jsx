import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  ArrowRight, 
  ShieldCheck, 
  TrendingUp, 
  ChevronRight, 
  Star,
  Settings,
  Gauge,
  Wrench,
  Zap
} from "lucide-react";

export default function Home() {
  const NAVBAR_HEIGHT = 80;

  // Premium Animation Variants
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.2 } }
  };

  return (
    <div className="w-full min-h-screen flex flex-col bg-slate-950 text-slate-200 font-inter overflow-hidden selection:bg-blue-500/30">

      {/* ================= HERO SECTION (Immersive Dark Layout) ================= */}
      <div
        className="relative w-full flex flex-col items-center justify-center pt-32 pb-24 px-6 min-h-[90vh]"
        style={{ marginTop: `${NAVBAR_HEIGHT}px` }}
      >
        {/* Ultra-Premium Background Effects */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-slate-950 to-slate-950 pointer-events-none" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none opacity-50" />
        
        {/* Glowing Orbs */}
        <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="relative z-10 max-w-6xl w-full flex flex-col items-center text-center gap-10">
          
          {/* Elite Trust Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-blue-500/10 border border-blue-400/20 text-xs font-bold text-blue-400 uppercase tracking-[0.2em] backdrop-blur-md shadow-[0_0_20px_rgba(59,130,246,0.15)]"
          >
            <ShieldCheck size={16} className="text-blue-400" /> 
            Authorized Bajaj Dealership
          </motion.div>

          {/* Cinematic Headline */}
          <motion.h1
            initial={{ opacity: 0, filter: "blur(10px)", scale: 0.95 }}
            animate={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.1 }}
            className="text-6xl sm:text-7xl md:text-[6rem] font-black tracking-tighter leading-[0.95] text-white"
          >
            UNLEASH <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 drop-shadow-[0_0_30px_rgba(59,130,246,0.4)]">
              THE BEAST.
            </span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed font-light"
          >
            Experience raw power, precision engineering, and unmatched reliability. 
            We provide premium Bajaj machines and elite service to keep you dominating the road.
          </motion.p>

          {/* High-End CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-5 w-full sm:w-auto mt-4"
          >
            <Link
              to="/motorcycle"
              className="group relative flex items-center justify-center gap-3 px-10 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(6,182,212,0.4)] active:scale-95"
            >
              <span className="relative z-10 flex items-center gap-2 tracking-wide">
                Explore Fleet <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </span>
              {/* Button Shine Effect */}
              <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent group-hover:animate-[shimmer_1.5s_infinite]" />
            </Link>

            <Link
              to="/enquiry"
              className="flex items-center justify-center gap-2 px-10 py-4 bg-white/[0.03] border border-white/10 text-white font-semibold rounded-full backdrop-blur-md hover:bg-white/10 hover:border-white/20 transition-all duration-300 active:scale-95 tracking-wide"
            >
              Book Test Ride
            </Link>
          </motion.div>

          {/* ✅ Glassmorphic Stats Dashboard */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="w-full max-w-4xl mt-16 grid grid-cols-1 md:grid-cols-3 gap-1 p-1 bg-white/[0.02] border border-white/5 rounded-3xl backdrop-blur-xl shadow-2xl overflow-hidden relative"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-white/[0.05] to-transparent pointer-events-none" />
            
            {[
              { label: "Years of Trust", val: "3+", icon: <Star size={20} className="text-yellow-400" /> },
              { label: "Happy Riders", val: "2,000+", icon: <TrendingUp size={20} className="text-cyan-400" /> },
              { label: "Genuine Service", val: "100%", icon: <Wrench size={20} className="text-blue-400" /> },
            ].map((item, i) => (
              <div key={i} className="relative group p-8 flex flex-col items-center justify-center bg-slate-900 rounded-2xl transition-all duration-500 hover:bg-slate-800">
                <div className="mb-4 p-3 bg-white/[0.03] border border-white/5 rounded-2xl group-hover:scale-110 group-hover:bg-white/[0.08] transition-all duration-500">
                  {item.icon}
                </div>
                <h3 className="text-3xl font-black text-white mb-1 tracking-tight">{item.val}</h3>
                <p className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em]">{item.label}</p>
              </div>
            ))}
          </motion.div>

        </div>
      </div>

      {/* Divider Line */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      {/* ================= FEATURED MACHINES (Dark Showroom Vibe) ================= */}
      <section className="py-32 px-6 relative">
        {/* Subtle Background Accent */}
        <div className="absolute top-1/2 left-0 w-full h-[300px] bg-blue-900/5 blur-[100px] -translate-y-1/2 pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20 flex flex-col items-center">
            <span className="inline-block px-3 py-1 mb-4 rounded-full bg-blue-500/10 border border-blue-500/20 text-[10px] font-bold text-blue-400 uppercase tracking-[0.25em]">
              Our Pride
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter">
              Engineering <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-400 to-slate-200">Excellence</span>
            </h2>
          </div>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              { name: "Pulsar N250", desc: "Precision meets aggressive street power.", tag: "Naked Sports", glow: "group-hover:shadow-[0_0_30px_rgba(239,68,68,0.15)]" },
              { name: "Avenger 220", desc: "Cruising comfort redefined for the long haul.", tag: "Cruiser", glow: "group-hover:shadow-[0_0_30px_rgba(59,130,246,0.15)]" },
              { name: "Dominar 400", desc: "The ultimate hyper-riding touring beast.", tag: "Touring", glow: "group-hover:shadow-[0_0_30px_rgba(16,185,129,0.15)]" }
            ].map((bike, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                className={`group relative p-1 rounded-3xl bg-gradient-to-b from-white/[0.05] to-transparent transition-all duration-500 hover:-translate-y-2 ${bike.glow}`}
              >
                <div className="h-full w-full bg-slate-900 p-8 rounded-[1.4rem] border border-white/[0.03] relative overflow-hidden flex flex-col">
                  
                  {/* Glassmorphic Tag */}
                  <div className="absolute top-6 right-6 z-20 px-3 py-1 bg-black/40 backdrop-blur-md border border-white/10 text-[9px] font-bold text-slate-300 uppercase tracking-widest rounded-full">
                    {bike.tag}
                  </div>

                  {/* Placeholder for Bike Image - Gradient area */}
                  <div className="w-full aspect-[4/3] rounded-2xl bg-gradient-to-br from-white/[0.02] to-white/[0.08] border border-white/5 mb-8 flex items-center justify-center group-hover:border-white/10 transition-colors relative overflow-hidden">
                     {/* Suggestion: Put Bike PNG here */}
                     <Gauge size={40} className="text-slate-700/50 group-hover:text-blue-500/30 transition-colors duration-500" />
                     <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-80" />
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-2 tracking-tight group-hover:text-cyan-300 transition-colors">{bike.name}</h3>
                  <p className="text-slate-400 text-sm mb-8 font-light flex-grow">{bike.desc}</p>
                  
                  <Link to="/motorcycle" className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-blue-400 hover:text-cyan-300 transition-colors">
                    <span className="border-b border-transparent hover:border-cyan-300 pb-0.5 transition-all">View Specifications</span>
                    <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ================= EDGE-TO-EDGE CTA ================= */}
      <section className="relative py-32 overflow-hidden border-t border-white/5">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 to-slate-900 z-0" />
        
        {/* Abstract Background Shapes */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-blue-600/10 blur-[150px] -rotate-12 rounded-full pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center flex flex-col items-center">
          <Zap size={40} className="text-cyan-400 mb-8 animate-pulse" />
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tighter mb-6">
            Ready to Rule <br className="hidden sm:block" /> the Asphalt?
          </h2>
          <p className="text-lg text-slate-400 font-light mb-12 max-w-xl mx-auto">
            Book a test ride today and feel the adrenaline. Our experts are ready to hand you the keys to your new obsession.
          </p>
          
          <Link 
            to="/contact" 
            className="group relative inline-flex items-center gap-3 px-12 py-5 bg-white text-slate-950 font-black tracking-wide rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(255,255,255,0.2)] active:scale-95"
          >
            <span className="relative z-10 flex items-center gap-2">
              Contact Showroom <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </span>
          </Link>
        </div>
      </section>

    </div>
  );
}