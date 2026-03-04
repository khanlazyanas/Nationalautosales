import React from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { 
  ArrowRight, 
  ShieldCheck, 
  TrendingUp, 
  ChevronRight, 
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
  const yHero = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacityHero = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.3 } }
  };

  return (
    <div className="w-full min-h-screen flex flex-col bg-[#030712] text-slate-200 font-inter overflow-hidden selection:bg-cyan-500/30">

      {/* ================= HERO SECTION ================= */}
      <motion.div 
        style={{ y: yHero, opacity: opacityHero }}
        className="relative w-full flex flex-col items-center justify-center pt-32 pb-24 px-6 min-h-[100vh] lg:min-h-[110vh] -mt-20"
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/30 via-[#030712] to-[#030712] pointer-events-none" />
        
        <div className="absolute inset-0" style={{ perspective: "1000px" }}>
          <motion.div 
            initial={{ rotateX: 60, y: 0, opacity: 0 }}
            animate={{ rotateX: 60, y: [0, 50], opacity: 0.15 }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            className="absolute top-1/2 left-[-50%] right-[-50%] bottom-[-50%] bg-[linear-gradient(to_right,#4facfe_1px,transparent_1px),linear-gradient(to_bottom,#4facfe_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(circle_at_center,black,transparent_80%)]"
          />
        </div>
        
        <motion.div 
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[150px] pointer-events-none" 
        />
        <motion.div 
          animate={{ scale: [1, 1.5, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[150px] pointer-events-none" 
        />

        <div className="relative z-10 max-w-6xl w-full flex flex-col items-center text-center gap-8 mt-12">
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-white/[0.03] border border-white/10 text-[10px] font-black text-slate-300 uppercase tracking-[0.3em] backdrop-blur-xl shadow-[0_0_30px_rgba(255,255,255,0.05)]"
          >
            <ShieldCheck size={14} className="text-cyan-400" /> 
            Authorized Bajaj Elite Dealership
          </motion.div>

          <div className="overflow-hidden pb-4">
            <motion.h1
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
              className="text-6xl sm:text-7xl md:text-[7.5rem] font-black tracking-tighter leading-[0.9] text-white"
            >
              UNLEASH <br className="hidden sm:block" />
              <span className="relative inline-block mt-2">
                <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-white drop-shadow-[0_0_40px_rgba(34,211,238,0.4)]">
                  THE BEAST.
                </span>
                <div className="absolute bottom-1 left-0 w-full h-[6px] bg-cyan-500/30 blur-sm rounded-full" />
              </span>
            </motion.h1>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-lg md:text-2xl text-slate-400 max-w-2xl mx-auto leading-relaxed font-light mt-4"
          >
            Experience raw power, precision engineering, and unmatched reliability. 
            We provide premium Bajaj machines to keep you dominating the asphalt.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-8 w-full"
          >
            <Link
              to="/motorcycle"
              className="group relative flex items-center justify-center gap-3 px-12 py-5 bg-white text-[#030712] font-black uppercase tracking-widest text-sm rounded-full overflow-hidden transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(255,255,255,0.3)] active:scale-95 w-full sm:w-auto"
            >
              <span className="relative z-10 flex items-center gap-2">
                Explore Fleet <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>

            <Link
              to="/enquiry"
              className="group flex items-center justify-center gap-3 px-10 py-5 bg-white/[0.03] border border-white/10 text-white font-bold uppercase tracking-widest text-sm rounded-full backdrop-blur-xl hover:bg-white/10 hover:border-white/20 transition-all duration-500 active:scale-95 w-full sm:w-auto"
            >
              <PlayCircle size={18} className="text-cyan-400 group-hover:scale-110 transition-transform" />
              Book Test Ride
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 1 }}
            className="w-full max-w-5xl mt-24 grid grid-cols-1 md:grid-cols-3 gap-0.5 p-0.5 bg-gradient-to-b from-white/10 to-transparent rounded-[2.5rem] backdrop-blur-2xl shadow-[0_30px_60px_rgba(0,0,0,0.6)] relative overflow-hidden"
          >
            {[
              { label: "Years of Trust", val: "3+", icon: <Star size={24} className="text-yellow-400" /> },
              { label: "Happy Riders", val: "2,000+", icon: <TrendingUp size={24} className="text-cyan-400" /> },
              { label: "Genuine Service", val: "100%", icon: <Wrench size={24} className="text-blue-400" /> },
            ].map((item, i) => (
              <div key={i} className="relative group p-10 flex flex-col items-center justify-center bg-[#050B14]/90 backdrop-blur-md first:rounded-t-[2.4rem] md:first:rounded-l-[2.4rem] md:first:rounded-tr-none last:rounded-b-[2.4rem] md:last:rounded-r-[2.4rem] md:last:rounded-bl-none transition-all duration-500 hover:bg-[#0A1222]">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-white/5 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="mb-6 p-4 bg-white/[0.02] border border-white/5 rounded-2xl group-hover:scale-110 group-hover:border-white/10 group-hover:bg-white/[0.05] transition-all duration-500 shadow-xl relative z-10">
                  {item.icon}
                </div>
                <h3 className="text-4xl font-black text-white mb-2 tracking-tighter relative z-10">{item.val}</h3>
                <p className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.3em] relative z-10">{item.label}</p>
              </div>
            ))}
          </motion.div>

        </div>
      </motion.div>

      {/* ================= FEATURED MACHINES (With Real Images) ================= */}
      <section className="py-32 px-6 relative z-20 bg-[#030712]">
        
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-transparent to-[#030712] -translate-y-full" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-24 flex flex-col items-center">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-[10px] font-black text-cyan-400 uppercase tracking-[0.3em]">
              <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" /> The Lineup
            </span>
            <h2 className="text-5xl md:text-6xl font-black text-white tracking-tighter">
              Engineering <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-500 to-slate-300">Excellence</span>
            </h2>
          </div>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {/* 🔥 STEP 2: Array mein apni images add ki */}
            {[
              { name: "Pulsar N250", desc: "Precision meets aggressive street naked power.", tag: "Naked Sports", img: pulsarImg, glow: "group-hover:shadow-[0_20px_50px_rgba(239,68,68,0.15)]" },
              { name: "Avenger 220", desc: "Cruising comfort redefined for the long haul.", tag: "Cruiser", img: avengerImg, glow: "group-hover:shadow-[0_20px_50px_rgba(59,130,246,0.15)]" },
              { name: "Dominar 400", desc: "The ultimate hyper-riding touring beast.", tag: "Touring", img: dominarImg, glow: "group-hover:shadow-[0_20px_50px_rgba(34,211,238,0.15)]" }
            ].map((bike, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                className={`group relative p-[1px] rounded-[2.5rem] bg-gradient-to-b from-white/10 to-transparent transition-all duration-700 hover:-translate-y-4 ${bike.glow}`}
              >
                <div className="h-full w-full bg-[#050B14] p-8 rounded-[2.4rem] relative overflow-hidden flex flex-col z-10">
                  
                  <div className="absolute -top-24 -right-24 w-64 h-64 bg-white/5 blur-[50px] rounded-full group-hover:bg-cyan-500/10 transition-colors duration-700" />

                  <div className="absolute top-8 right-8 z-20 px-4 py-1.5 bg-black/40 backdrop-blur-md border border-white/10 text-[9px] font-black text-white uppercase tracking-[0.2em] rounded-full shadow-lg">
                    {bike.tag}
                  </div>

                  {/* 🔥 STEP 3: Yahan <Gauge> icon hata kar Asli Image tag lagaya */}
                  <div className="w-full aspect-[4/3] rounded-[1.5rem] bg-gradient-to-br from-white/[0.02] to-white/[0.05] border border-white/5 mb-10 flex items-center justify-center relative overflow-hidden p-4">
                     {/* Background soft glow for the bike */}
                     <div className="absolute inset-0 bg-blue-500/10 blur-[40px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                     
                     <img 
                       src={bike.img} 
                       alt={bike.name} 
                       className="relative z-10 w-full h-full object-contain drop-shadow-[0_10px_20px_rgba(0,0,0,0.8)] group-hover:scale-110 transition-transform duration-700 ease-out"
                     />
                     
                     <div className="absolute top-0 left-0 w-full h-[2px] bg-cyan-500/50 opacity-0 group-hover:opacity-100 group-hover:animate-[scan_2s_ease-in-out_infinite]" />
                     <div className="absolute inset-0 bg-gradient-to-t from-[#050B14] to-transparent opacity-50" />
                  </div>

                  <h3 className="text-3xl font-black text-white mb-3 tracking-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-cyan-300 transition-all">{bike.name}</h3>
                  <p className="text-slate-400 text-sm mb-10 font-light leading-relaxed flex-grow">{bike.desc}</p>
                  
                  <Link to="/motorcycle" className="mt-auto inline-flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-slate-300 hover:text-cyan-400 transition-colors">
                    <span className="border-b border-white/20 hover:border-cyan-400 pb-1 transition-all">View Specs</span>
                    <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ================= EDGE-TO-EDGE CTA ================= */}
      <section className="relative py-40 overflow-hidden border-t border-white/5">
        <div className="absolute inset-0 bg-gradient-to-b from-[#030712] to-[#0A1222] z-0" />
        
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[400px] bg-cyan-600/10 blur-[150px] -rotate-12 rounded-[100%] pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center flex flex-col items-center">
          <div className="w-20 h-20 bg-cyan-500/10 rounded-3xl flex items-center justify-center border border-cyan-500/20 mb-8 shadow-[0_0_30px_rgba(34,211,238,0.2)]">
            <Zap size={36} className="text-cyan-400 animate-pulse" />
          </div>
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-black text-white tracking-tighter mb-8 leading-[1.1]">
            Ready to Rule <br className="hidden sm:block" /> the Asphalt?
          </h2>
          <p className="text-lg md:text-xl text-slate-400 font-light mb-14 max-w-2xl mx-auto leading-relaxed">
            Stop dreaming. Start riding. Book a test ride today and let our experts hand you the keys to your new obsession.
          </p>
          
          <Link 
            to="/contact" 
            className="group relative inline-flex items-center gap-4 px-14 py-6 bg-gradient-to-r from-cyan-400 to-blue-500 text-[#030712] font-black uppercase tracking-widest text-sm rounded-full overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-[0_0_50px_rgba(34,211,238,0.4)] active:scale-95"
          >
            <span className="relative z-10 flex items-center gap-3">
              Contact Command <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
            </span>
            <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent group-hover:animate-[shimmer_1.5s_infinite]" />
          </Link>
        </div>
      </section>

    </div>
  );
}