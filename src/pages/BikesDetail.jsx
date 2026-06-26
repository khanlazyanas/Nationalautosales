import React from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Settings, Zap, Gauge, CheckCircle, ArrowLeft, Fuel, Activity } from "lucide-react";
import bikes from "../data/Bikevariant";

export default function BikeDetails() {
  const { slug } = useParams();

  const bike = bikes
    .flatMap((b) => b.variants.map((v) => ({ ...v, category: b.name })))
    .find((v) => v.slug === slug);

  // Premium Silicon Valley Easing
  const customEase = [0.22, 1, 0.36, 1];

  if (!bike) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#02040A] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] pointer-events-none" />
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, ease: customEase }}
          className="relative z-10 flex flex-col items-center text-center"
        >
          <div className="w-16 h-16 mb-6 rounded-full bg-red-500/10 border border-red-500/20 flex items-center justify-center shadow-[0_0_30px_rgba(239,68,68,0.2)]">
            <Activity className="text-red-400" size={24} />
          </div>
          <h1 className="text-4xl md:text-5xl font-black tracking-tighter text-white mb-4">
            MACHINE <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-300">NOT FOUND</span>
          </h1>
          <p className="text-slate-400 font-light mb-8">The exact specification you are looking for is currently off the radar.</p>
          <Link to="/motorcycle" className="px-8 py-3 rounded-full bg-white/[0.05] border border-white/10 hover:bg-white/10 transition-colors text-xs font-bold uppercase tracking-[0.2em]">
            Return to Fleet
          </Link>
        </motion.div>
      </div>
    );
  }

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: customEase } }
  };

  const stagger = {
    visible: { transition: { staggerChildren: 0.15 } }
  };

  return (
    <div className="min-h-screen bg-[#02040A] text-slate-300 font-inter pt-32 pb-24 overflow-hidden selection:bg-cyan-500/30 selection:text-cyan-50">

      {/* ================= BACKGROUND EFFECTS ================= */}
      <div className="fixed inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] pointer-events-none z-0" />
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-blue-900/15 via-[#02040A] to-[#02040A] pointer-events-none" />
      
      <motion.div 
        animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="fixed top-1/4 right-0 w-[800px] h-[800px] bg-cyan-600/10 blur-[150px] rounded-full pointer-events-none mix-blend-screen" 
      />

      <div className="max-w-[90rem] mx-auto px-6 lg:px-12 relative z-10">

        {/* ================= BACK BUTTON & HEADER ================= */}
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, ease: customEase }} className="mb-12">
          <Link to="/motorcycle" className="group inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/[0.03] border border-white/5 text-slate-400 hover:text-white hover:bg-white/[0.08] transition-all duration-300 font-bold text-[10px] uppercase tracking-[0.25em] backdrop-blur-md">
            <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform duration-300" /> Back to Fleet
          </Link>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* ================= LEFT: 3D FLOATING SHOWCASE ================= */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.85, filter: "blur(10px)" }} 
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }} 
            transition={{ duration: 1.2, ease: customEase }}
            className="relative"
          >
            {/* Showroom Floor Glow */}
            <div className="absolute bottom-[-10%] left-1/2 -translate-x-1/2 w-[80%] h-16 bg-cyan-500/20 blur-[40px] rounded-[100%]" />
            
            {/* Rotating Aura Grid */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] aspect-square bg-[radial-gradient(circle_at_center,transparent_40%,#02040A_70%),linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100%_100%,2rem_2rem,2rem_2rem] rounded-full animate-[spin_60s_linear_infinite] pointer-events-none" />
            
            {/* Floating Bike Image */}
            <motion.img
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              src={bike.img}
              alt={bike.name}
              className="relative z-10 w-full h-auto object-contain drop-shadow-[0_40px_60px_rgba(0,0,0,0.8)] transform hover:scale-105 transition-transform duration-700 ease-[0.22,1,0.36,1]"
            />
          </motion.div>

          {/* ================= RIGHT: SPECIFICATIONS & DATA ================= */}
          <motion.div 
            initial="hidden" animate="visible" variants={stagger}
            className="flex flex-col gap-10"
          >
            <div>
              <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-[10px] font-black text-cyan-400 uppercase tracking-[0.3em] shadow-[0_0_20px_rgba(34,211,238,0.15)]">
                <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" /> {bike.category} Series
              </motion.div>
              <motion.h1 variants={fadeUp} className="text-6xl md:text-[5.5rem] font-black text-white tracking-tighter mb-2 leading-[0.9]">
                {bike.name}
              </motion.h1>
              <motion.p variants={fadeUp} className="text-3xl md:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 tracking-tight mt-4 drop-shadow-[0_0_15px_rgba(34,211,238,0.3)]">
                {bike.price}
              </motion.p>
            </div>

            {/* Quick Tech Grid (Bento Style) */}
            <motion.div variants={fadeUp} className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {[
                { label: "Engine", val: bike.engine, icon: <Settings /> },
                { label: "Max Power", val: bike.maxPower, icon: <Zap /> },
                { label: "Torque", val: bike.maxTorque, icon: <Gauge /> },
                { label: "Fuel Cap", val: "14 L", icon: <Fuel /> },
              ].map((stat, i) => (
                <div key={i} className="bg-[#050A15]/80 backdrop-blur-md border border-white/5 rounded-[1.5rem] p-5 flex flex-col gap-3 hover:bg-white/[0.04] hover:border-white/10 transition-all duration-300 shadow-inner group">
                  <div className="text-cyan-400/70 group-hover:text-cyan-400 transition-colors">{React.cloneElement(stat.icon, { size: 20 })}</div>
                  <div>
                    <p className="text-white font-black text-sm tracking-tight">{stat.val}</p>
                    <p className="text-[9px] text-slate-500 uppercase tracking-[0.2em] font-bold mt-0.5">{stat.label}</p>
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Key Features List */}
            <motion.div variants={fadeUp} className="bg-gradient-to-b from-white/[0.03] to-transparent border border-white/5 rounded-[2rem] p-8 md:p-10 relative overflow-hidden backdrop-blur-sm">
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 blur-[60px] rounded-full pointer-events-none" />
              <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-cyan-400 to-blue-600" />
              
              <h2 className="text-sm font-black text-slate-200 uppercase tracking-[0.2em] mb-8 flex items-center gap-3">
                <Activity size={18} className="text-cyan-400" /> Engineering DNA
              </h2>
              <div className="grid sm:grid-cols-2 gap-y-5 gap-x-4">
                {[
                  "Advanced DTS-i Core",
                  "Aerodynamic Street Posture",
                  "Liquid/Oil Cooled Matrix",
                  "Dual-Channel ABS System",
                  "Digital Telemetry Console",
                  "High-Intensity LED DRLs"
                ].map((feature, i) => (
                  <div key={i} className="flex items-center gap-3 group">
                    <CheckCircle size={16} className="text-cyan-400/50 group-hover:text-cyan-400 transition-colors shrink-0" />
                    <span className="text-slate-400 text-sm font-medium tracking-wide group-hover:text-slate-200 transition-colors">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Actions */}
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 mt-2">
              <Link
                to={`/enquiry?bike=${encodeURIComponent(bike.name)}`}
                className="flex-1 relative overflow-hidden group flex items-center justify-center py-6 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 text-[#02040A] font-black uppercase tracking-[0.25em] text-sm shadow-[0_0_30px_rgba(34,211,238,0.2)] hover:shadow-[0_0_50px_rgba(34,211,238,0.5)] active:scale-95 transition-all duration-300"
              >
                <span className="relative z-10">Reserve This Machine</span>
                <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/50 to-transparent group-hover:animate-[shimmer_1.5s_infinite]" />
              </Link>
            </motion.div>

          </motion.div>
        </div>

        {/* ================= LOWER GALLERY SECTION ================= */}
        <motion.div 
          initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 1, ease: customEase }}
          className="mt-40 pt-20 border-t border-white/5 relative"
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />
          
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter">Visual Overview</h2>
            <p className="text-slate-500 text-base font-light mt-4">Examine the beast from every angle.</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-gradient-to-b from-white/[0.04] to-transparent border border-white/5 rounded-[2.5rem] p-8 aspect-[4/3] flex items-center justify-center relative overflow-hidden group hover:border-white/10 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)]">
                <div className="absolute inset-0 bg-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                
                {/* Simulated different angles by slight scaling/rotation trick for the gallery */}
                <img
                  src={bike.img}
                  alt={`${bike.name} Angle ${i}`}
                  className={`relative z-10 w-full h-full object-contain drop-shadow-2xl transition-transform duration-700 ease-[0.22,1,0.36,1] ${i === 1 ? 'group-hover:scale-110' : i === 2 ? 'group-hover:scale-105 group-hover:-rotate-2' : 'group-hover:scale-105 group-hover:rotate-2'}`}
                />
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </div>
  );
}