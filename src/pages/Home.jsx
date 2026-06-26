import React from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { 
  ArrowRight, 
  ShieldCheck, 
  TrendingUp, 
  Star,
  Wrench,
  Zap,
  PlayCircle
} from "lucide-react";

import pulsarImg from "../assets/pulsar-125.webp"; 
import avengerImg from "../assets/Avenger 160 Street.webp"; 
import dominarImg from "../assets/Dominar 250.webp"; 

export default function Home() {
  const { scrollYProgress } = useScroll();
  const yHero = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const opacityHero = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  // Silicon Valley Standard Easing (Buttery Smooth)
  const customEase = [0.22, 1, 0.36, 1];

  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: customEase } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.2 } }
  };

  return (
    <div className="w-full min-h-screen flex flex-col bg-[#02040A] text-slate-200 font-inter overflow-hidden selection:bg-cyan-500/30 selection:text-cyan-50">
      
      {/* ================= ULTRA PREMIUM HERO SECTION ================= */}
      <motion.div 
        style={{ y: yHero, opacity: opacityHero }}
        className="relative w-full flex flex-col items-center justify-center pt-32 pb-24 px-6 min-h-[100vh] lg:min-h-[110vh] -mt-20"
      >
        {/* Dynamic Background Gradients & Noise */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-[#02040A] to-[#02040A] pointer-events-none" />
        <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] pointer-events-none" />
        
        {/* 3D Perspective Grid */}
        <div className="absolute inset-0" style={{ perspective: "1200px" }}>
          <motion.div 
            initial={{ rotateX: 70, y: 0, opacity: 0 }}
            animate={{ rotateX: 70, y: [0, 60], opacity: 0.15 }}
            transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
            className="absolute top-1/2 left-[-50%] right-[-50%] bottom-[-50%] bg-[linear-gradient(to_right,#3b82f6_1px,transparent_1px),linear-gradient(to_bottom,#3b82f6_1px,transparent_1px)] bg-[size:4.5rem_4.5rem] [mask-image:radial-gradient(circle_at_center,black,transparent_75%)]"
          />
        </div>
        
        {/* Ambient Glows */}
        <motion.div 
          animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.3, 0.2] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none mix-blend-screen" 
        />
        <motion.div 
          animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] bg-cyan-400/10 rounded-full blur-[120px] pointer-events-none mix-blend-screen" 
        />

        <div className="relative z-10 max-w-6xl w-full flex flex-col items-center text-center gap-8 mt-16">
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            transition={{ duration: 1.2, ease: customEase }}
            className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white/[0.02] border border-white/5 text-[11px] font-bold text-slate-300 uppercase tracking-[0.25em] backdrop-blur-2xl shadow-[0_4px_24px_rgba(0,0,0,0.4)]"
          >
            <ShieldCheck size={16} className="text-cyan-400" /> 
            Authorized Bajaj Elite Dealership
          </motion.div>

          <div className="overflow-hidden pb-4">
            <motion.h1
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.4, ease: customEase, delay: 0.1 }}
              className="text-6xl sm:text-7xl md:text-[8rem] font-black tracking-tighter leading-[0.85] text-white"
            >
              UNLEASH <br className="hidden sm:block" />
              <span className="relative inline-block mt-4">
                <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-br from-white via-cyan-100 to-cyan-500 drop-shadow-[0_0_30px_rgba(34,211,238,0.2)]">
                  THE BEAST.
                </span>
                <div className="absolute -bottom-2 left-0 w-full h-[8px] bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent blur-md rounded-full" />
              </span>
            </motion.h1>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: customEase, delay: 0.4 }}
            className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed font-light mt-4"
          >
            Experience raw power, precision engineering, and unmatched reliability. 
            We provide premium Bajaj machines to keep you dominating the asphalt.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: customEase, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-10 w-full"
          >
            <Link
              to="/motorcycle"
              className="group relative flex items-center justify-center gap-3 px-10 py-4 bg-white text-[#02040A] font-bold uppercase tracking-widest text-sm rounded-full overflow-hidden transition-all duration-500 hover:scale-[1.03] hover:shadow-[0_0_40px_rgba(255,255,255,0.25)] active:scale-95 w-full sm:w-auto"
            >
              <span className="relative z-10 flex items-center gap-2">
                Explore Fleet <ArrowRight size={18} className="group-hover:translate-x-1.5 transition-transform duration-300" />
              </span>
            </Link>

            <Link
              to="/enquiry"
              className="group flex items-center justify-center gap-3 px-10 py-4 bg-white/[0.03] border border-white/10 text-white font-semibold uppercase tracking-widest text-sm rounded-full backdrop-blur-xl hover:bg-white/[0.08] hover:border-white/20 transition-all duration-500 active:scale-95 w-full sm:w-auto"
            >
              <PlayCircle size={18} className="text-cyan-400 group-hover:scale-110 transition-transform duration-300" />
              Book Test Ride
            </Link>
          </motion.div>

          {/* Premium Stats Dashboard-style */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.4, ease: customEase, delay: 0.8 }}
            className="w-full max-w-5xl mt-32 grid grid-cols-1 md:grid-cols-3 gap-[1px] bg-white/5 rounded-[2rem] p-[1px] backdrop-blur-3xl shadow-[0_30px_80px_rgba(0,0,0,0.8)] relative overflow-hidden"
          >
            {[
              { label: "Years of Trust", val: "3+", icon: <Star size={24} className="text-yellow-400" /> },
              { label: "Happy Riders", val: "2,000+", icon: <TrendingUp size={24} className="text-cyan-400" /> },
              { label: "Genuine Service", val: "100%", icon: <Wrench size={24} className="text-blue-400" /> },
            ].map((item, i) => (
              <div key={i} className="relative group p-12 flex flex-col items-center justify-center bg-[#050A15]/95 backdrop-blur-xl first:rounded-t-[2rem] md:first:rounded-l-[2rem] md:first:rounded-tr-none last:rounded-b-[2rem] md:last:rounded-r-[2rem] md:last:rounded-bl-none transition-colors duration-500 hover:bg-[#081020]">
                <div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="mb-6 p-4 bg-white/[0.03] border border-white/10 rounded-2xl group-hover:scale-110 group-hover:bg-white/[0.06] transition-all duration-500 shadow-2xl relative z-10">
                  {item.icon}
                </div>
                <h3 className="text-4xl font-black text-white mb-2 tracking-tighter relative z-10">{item.val}</h3>
                <p className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.25em] relative z-10">{item.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* ================= SILICON VALLEY TIER FEATURED MACHINES ================= */}
      <section className="py-40 px-6 relative z-20 bg-[#02040A]">
        <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-transparent to-[#02040A] -translate-y-full pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-28 flex flex-col items-center">
            <motion.span 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-[10px] font-black text-cyan-400 uppercase tracking-[0.3em]"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" /> The Lineup
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: customEase }}
              className="text-5xl md:text-6xl lg:text-7xl font-black text-white tracking-tighter"
            >
              Engineering <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-400 to-slate-200">Excellence</span>
            </motion.h2>
          </div>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              { name: "Pulsar N250", desc: "Precision meets aggressive street naked power. Dominating every curve.", tag: "Naked Sports", img: pulsarImg, glow: "group-hover:shadow-[0_20px_60px_-15px_rgba(239,68,68,0.2)]" },
              { name: "Avenger 220", desc: "Cruising comfort redefined for the long haul. Feel the open road.", tag: "Cruiser", img: avengerImg, glow: "group-hover:shadow-[0_20px_60px_-15px_rgba(59,130,246,0.2)]" },
              { name: "Dominar 400", desc: "The ultimate hyper-riding touring beast. Built for the modern explorer.", tag: "Touring", img: dominarImg, glow: "group-hover:shadow-[0_20px_60px_-15px_rgba(34,211,238,0.2)]" }
            ].map((bike, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                className={`group relative p-[1px] rounded-[2.5rem] bg-gradient-to-b from-white/10 via-white/5 to-transparent transition-all duration-700 hover:-translate-y-2 ${bike.glow}`}
              >
                <div className="h-full w-full bg-[#050A15]/90 backdrop-blur-md p-8 rounded-[2.4rem] relative overflow-hidden flex flex-col z-10">
                  
                  {/* Spotlight Hover Effect */}
                  <div className="absolute -top-32 -right-32 w-64 h-64 bg-white/5 blur-[60px] rounded-full group-hover:bg-cyan-500/15 transition-colors duration-700" />

                  <div className="absolute top-8 right-8 z-20 px-4 py-1.5 bg-[#02040A]/60 backdrop-blur-xl border border-white/10 text-[9px] font-bold text-slate-200 uppercase tracking-[0.2em] rounded-full shadow-lg">
                    {bike.tag}
                  </div>

                  <div className="w-full aspect-[4/3] rounded-[1.5rem] bg-gradient-to-br from-white/[0.03] to-transparent border border-white/5 mb-8 flex items-center justify-center relative overflow-hidden p-6 group-hover:border-white/10 transition-colors duration-500">
                     <div className="absolute inset-0 bg-blue-500/5 blur-[50px] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                     
                     <img 
                       src={bike.img} 
                       alt={bike.name} 
                       className="relative z-10 w-full h-full object-contain drop-shadow-[0_15px_25px_rgba(0,0,0,0.6)] group-hover:scale-105 transition-transform duration-700 ease-[0.22,1,0.36,1]"
                     />
                     
                     <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent opacity-0 group-hover:opacity-100 group-hover:translate-y-full transition-all duration-1000 ease-in-out" />
                  </div>

                  <h3 className="text-3xl font-black text-white mb-3 tracking-tight group-hover:text-cyan-300 transition-colors duration-500">{bike.name}</h3>
                  <p className="text-slate-400 text-sm mb-10 font-light leading-relaxed flex-grow">{bike.desc}</p>
                  
                  <Link to="/motorcycle" className="mt-auto inline-flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-slate-300 group-hover:text-cyan-400 transition-colors w-fit">
                    <span className="relative pb-1 overflow-hidden">
                      View Specs
                      <span className="absolute bottom-0 left-0 w-full h-[1px] bg-cyan-400 -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out" />
                    </span>
                    <ArrowRight size={14} className="group-hover:translate-x-1.5 transition-transform duration-500 ease-out" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ================= IMMERSIVE EDGE-TO-EDGE CTA ================= */}
      <section className="relative py-48 overflow-hidden border-t border-white/5">
        <div className="absolute inset-0 bg-gradient-to-b from-[#02040A] to-[#050A15] z-0" />
        
        {/* Abstract Glow Shapes */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[500px] bg-cyan-600/10 blur-[150px] -rotate-12 rounded-[100%] pointer-events-none mix-blend-screen" />

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center flex flex-col items-center">
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: customEase }}
            className="w-20 h-20 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-[1.5rem] flex items-center justify-center border border-cyan-500/20 mb-10 shadow-[0_0_40px_rgba(34,211,238,0.15)] backdrop-blur-xl"
          >
            <Zap size={32} className="text-cyan-400 drop-shadow-[0_0_15px_rgba(34,211,238,0.5)]" />
          </motion.div>

          <motion.h2 
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: customEase, delay: 0.1 }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white tracking-tighter mb-8 leading-[0.95]"
          >
            Ready to Rule <br className="hidden sm:block" /> the Asphalt?
          </motion.h2>

          <motion.p 
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: customEase, delay: 0.2 }}
            className="text-lg md:text-xl text-slate-400 font-light mb-14 max-w-2xl mx-auto leading-relaxed"
          >
            Stop dreaming. Start riding. Book a test ride today and let our experts hand you the keys to your new obsession.
          </motion.p>
          
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: customEase, delay: 0.3 }}
          >
            <Link 
              to="/contact" 
              className="group relative inline-flex items-center gap-4 px-12 py-5 bg-white text-[#02040A] font-black uppercase tracking-[0.2em] text-sm rounded-full overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-[0_0_50px_rgba(255,255,255,0.3)] active:scale-95"
            >
              <span className="relative z-10 flex items-center gap-3">
                Contact Command <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform duration-300" />
              </span>
              <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-cyan-100 to-transparent group-hover:animate-[shimmer_1.5s_infinite] opacity-50" />
            </Link>
          </motion.div>
        </div>
      </section>

    </div>
  );
}