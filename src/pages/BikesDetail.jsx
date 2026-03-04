import React from "react"; // 🔥 Ye line miss ho gayi thi!
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Settings, Zap, Gauge, CheckCircle, ArrowLeft, Fuel, Activity } from "lucide-react";
import bikes from "../data/Bikevariant";

export default function BikeDetails() {
  const { slug } = useParams();

  const bike = bikes
    .flatMap((b) => b.variants.map((v) => ({ ...v, category: b.name })))
    .find((v) => v.slug === slug);

  if (!bike) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#030712] text-white">
        <h1 className="text-3xl font-black tracking-widest text-cyan-400">
          MACHINE NOT FOUND
        </h1>
      </div>
    );
  }

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const stagger = {
    visible: { transition: { staggerChildren: 0.1 } }
  };

  return (
    <div className="min-h-screen bg-[#030712] text-slate-300 font-inter pt-28 pb-20 overflow-hidden selection:bg-cyan-500/30">

      {/* ================= BACKGROUND EFFECTS ================= */}
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-blue-900/10 via-[#030712] to-[#030712] pointer-events-none" />
      <div className="fixed top-1/3 right-0 w-[600px] h-[600px] bg-cyan-600/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-[85rem] mx-auto px-6 lg:px-12 relative z-10">

        {/* ================= BACK BUTTON & HEADER ================= */}
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="mb-10">
          <Link to="/motorcycle" className="inline-flex items-center gap-2 text-slate-500 hover:text-cyan-400 transition-colors font-bold text-xs uppercase tracking-widest">
            <ArrowLeft size={16} /> Back to Fleet
          </Link>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* ================= LEFT: 3D BIKE SHOWCASE ================= */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, rotate: -2 }} 
            animate={{ opacity: 1, scale: 1, rotate: 0 }} 
            transition={{ duration: 1, type: "spring", stiffness: 50 }}
            className="relative"
          >
            {/* Showroom Floor Effect */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-12 bg-cyan-500/20 blur-[30px] rounded-[100%]" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-white/[0.02] to-transparent rounded-full border border-white/5 animate-[spin_30s_linear_infinite] pointer-events-none" />
            
            <img
              src={bike.img}
              alt={bike.name}
              className="relative z-10 w-full h-auto object-contain drop-shadow-[0_30px_50px_rgba(0,0,0,0.8)] transform hover:scale-105 transition-transform duration-700"
            />
          </motion.div>

          {/* ================= RIGHT: SPECIFICATIONS & DATA ================= */}
          <motion.div 
            initial="hidden" animate="visible" variants={stagger}
            className="flex flex-col gap-8"
          >
            <div>
              <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-full bg-white/[0.05] border border-white/10 text-[10px] font-black text-cyan-400 uppercase tracking-[0.3em]">
                <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" /> {bike.category} Series
              </motion.div>
              <motion.h1 variants={fadeUp} className="text-5xl md:text-6xl font-black text-white tracking-tighter mb-2">
                {bike.name}
              </motion.h1>
              <motion.p variants={fadeUp} className="text-3xl font-light text-cyan-400 tracking-wide">
                {bike.price}
              </motion.p>
            </div>

            {/* Quick Tech Grid */}
            <motion.div variants={fadeUp} className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "Engine", val: bike.engine, icon: <Settings /> },
                { label: "Max Power", val: bike.maxPower, icon: <Zap /> },
                { label: "Torque", val: bike.maxTorque, icon: <Gauge /> },
                { label: "Fuel Cap", val: "14 L", icon: <Fuel /> },
              ].map((stat, i) => (
                <div key={i} className="bg-white/[0.02] border border-white/5 rounded-2xl p-4 flex flex-col gap-2 hover:bg-white/[0.05] transition-colors">
                  <div className="text-slate-500">{React.cloneElement(stat.icon, { size: 18 })}</div>
                  <p className="text-white font-bold text-sm">{stat.val}</p>
                  <p className="text-[9px] text-slate-500 uppercase tracking-widest font-bold">{stat.label}</p>
                </div>
              ))}
            </motion.div>

            {/* Key Features List */}
            <motion.div variants={fadeUp} className="bg-[#050B14] border border-white/5 rounded-[2rem] p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/5 blur-[40px] rounded-full" />
              <h2 className="text-lg font-black text-white uppercase tracking-widest mb-6 flex items-center gap-3">
                <Activity size={20} className="text-cyan-400" /> Engineering DNA
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  "Advanced DTS-i Core",
                  "Aerodynamic Street Posture",
                  "Liquid/Oil Cooled Matrix",
                  "Dual-Channel ABS System",
                  "Digital Telemetry Console",
                  "High-Intensity LED DRLs"
                ].map((feature, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle size={16} className="text-cyan-400 shrink-0 mt-0.5" />
                    <span className="text-slate-400 text-sm font-light">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Actions */}
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 mt-4">
              <Link
                to={`/enquiry?bike=${encodeURIComponent(bike.name)}`}
                className="flex-1 relative overflow-hidden group flex items-center justify-center py-5 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-black uppercase tracking-widest text-sm shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_40px_rgba(6,182,212,0.5)] active:scale-95 transition-all"
              >
                <span className="relative z-10">Reserve This Machine</span>
                <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent group-hover:animate-[shimmer_1s_infinite]" />
              </Link>
            </motion.div>

          </motion.div>
        </div>

        {/* ================= LOWER GALLERY SECTION ================= */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
          className="mt-32 pt-16 border-t border-white/5"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-white tracking-tighter">Visual Overview</h2>
            <p className="text-slate-500 text-sm font-light mt-2">Examine the beast from every angle.</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white/[0.02] border border-white/5 rounded-[2rem] p-6 aspect-[4/3] flex items-center justify-center relative overflow-hidden group hover:border-cyan-500/30 transition-colors">
                <div className="absolute inset-0 bg-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                <img
                  src={bike.img}
                  alt={`${bike.name} ${i}`}
                  className="relative z-10 w-full h-full object-contain drop-shadow-xl group-hover:scale-110 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </div>
  );
}