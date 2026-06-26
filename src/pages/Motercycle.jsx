import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Zap, Gauge, Settings, ChevronRight } from "lucide-react";
import bikes from "../data/Bikevariant";

export default function Motorcycle() {
  const [active, setActive] = useState(bikes[0]);
  const navigate = useNavigate();

  // URL se model read karne ka logic
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const model = params.get("model");

    if (model) {
      const found = bikes.find(
        (b) => b.name.toLowerCase() === model.toLowerCase()
      );
      if (found) setActive(found);
    }
  }, []);

  // Premium Silicon Valley Easing
  const customEase = [0.22, 1, 0.36, 1];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: customEase } },
    exit: { opacity: 0, scale: 0.95, transition: { duration: 0.4, ease: customEase } }
  };

  return (
    <div className="min-h-screen bg-[#02040A] text-slate-200 font-inter pt-[120px] overflow-hidden selection:bg-cyan-500/30 selection:text-cyan-50">
      
      {/* Background Noise & Cinematic Effects */}
      <div className="fixed inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] pointer-events-none z-0" />
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-blue-900/15 via-[#02040A] to-[#02040A] pointer-events-none" />
      
      <motion.div 
        animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="fixed top-1/3 left-0 w-[600px] h-[600px] bg-cyan-600/10 blur-[150px] rounded-full pointer-events-none mix-blend-screen" 
      />

      <div className="max-w-[90rem] mx-auto flex flex-col lg:flex-row gap-10 px-6 lg:px-12 pb-32 relative z-10">
        
        {/* ================= SIDEBAR / DASHBOARD NAV ================= */}
        <aside className="w-full lg:w-72 shrink-0">
          <div className="lg:sticky lg:top-36 flex flex-col gap-8">
            <div className="hidden lg:flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_10px_rgba(34,211,238,0.8)]" />
              <h1 className="text-[11px] font-black uppercase tracking-[0.3em] text-slate-400">
                The Fleet
              </h1>
            </div>

            {/* Navigation List */}
            <nav className="flex lg:flex-col gap-3 overflow-x-auto lg:overflow-visible pb-4 lg:pb-0 scrollbar-hide">
              {bikes.map((b) => {
                const isActive = active.name === b.name;
                return (
                  <button
                    key={b.name}
                    onClick={() => setActive(b)}
                    className={`relative whitespace-nowrap lg:whitespace-normal px-6 py-4 lg:py-5 text-sm font-bold uppercase tracking-[0.15em] text-left transition-all duration-500 rounded-[1.2rem] overflow-hidden group ${
                      isActive 
                        ? "text-white bg-white/[0.04] border border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.5)] backdrop-blur-md" 
                        : "text-slate-500 border border-transparent hover:bg-white/[0.02] hover:text-slate-300"
                    }`}
                  >
                    {isActive && (
                      <motion.div 
                        layoutId="activeTab" 
                        transition={{ duration: 0.6, ease: customEase }}
                        className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-400 to-blue-600 shadow-[0_0_15px_rgba(34,211,238,0.6)] hidden lg:block" 
                      />
                    )}
                    {isActive && (
                      <motion.div 
                        layoutId="activeTabMobile" 
                        transition={{ duration: 0.6, ease: customEase }}
                        className="absolute left-0 right-0 bottom-0 h-1 bg-gradient-to-r from-cyan-400 to-blue-600 shadow-[0_0_15px_rgba(34,211,238,0.6)] lg:hidden" 
                      />
                    )}
                    <span className="relative z-10 flex items-center justify-between w-full">
                      {b.name}
                      {isActive && <ChevronRight size={16} className="hidden lg:block text-cyan-400" />}
                    </span>
                  </button>
                );
              })}
            </nav>
          </div>
        </aside>

        {/* ================= MAIN CONTENT (PREMIUM GRID) ================= */}
        <main className="flex-1 min-w-0">
          <div className="mb-14 flex flex-col justify-end">
            <motion.h2 
              key={`title-${active.name}`}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: customEase }}
              className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-none"
            >
              {active.name} <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-500 to-slate-300 text-4xl md:text-6xl mt-2 inline-block">
                Series
              </span>
            </motion.h2>
            <motion.p 
              key={`desc-${active.name}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="text-slate-400 mt-6 font-light text-lg md:text-xl max-w-2xl"
            >
              Explore the apex predators of the {active.name} lineup. Engineered for dominance.
            </motion.p>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={active.name}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="grid grid-cols-1 xl:grid-cols-2 gap-8"
            >
              {active.variants.map((variant) => (
                <motion.div
                  key={variant.name}
                  variants={cardVariants}
                  className="group relative bg-[#050A15]/80 backdrop-blur-xl border border-white/5 rounded-[2.5rem] p-8 lg:p-10 flex flex-col transition-all duration-700 hover:-translate-y-2 hover:border-white/10 hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.8)] overflow-hidden"
                >
                  {/* Spotlight Hover */}
                  <div className="absolute -top-32 -right-32 w-64 h-64 bg-cyan-500/15 blur-[60px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                  {/* Image Area */}
                  <div className="relative w-full aspect-[4/3] flex items-center justify-center mb-10 rounded-3xl bg-gradient-to-br from-white/[0.02] to-transparent border border-white/[0.02]">
                    <div className="absolute inset-0 bg-blue-500/5 blur-[40px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                    <img
                      src={variant.img}
                      alt={variant.name}
                      className="relative z-10 w-full h-full object-contain drop-shadow-[0_20px_30px_rgba(0,0,0,0.5)] group-hover:scale-110 transition-transform duration-1000 ease-[0.22,1,0.36,1]"
                    />
                  </div>

                  {/* Bike Info */}
                  <div className="flex-1 flex flex-col relative z-10">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-2 mb-8 border-b border-white/5 pb-6">
                      <h3 className="text-3xl font-black text-white tracking-tight group-hover:text-cyan-300 transition-colors duration-500">{variant.name}</h3>
                      <p className="text-xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-white tracking-wide">
                        {variant.price}
                      </p>
                    </div>

                    {/* Tech Specs Bento Grid */}
                    <div className="grid grid-cols-3 gap-3 mb-10">
                      <div className="bg-[#02040A]/50 border border-white/5 rounded-2xl p-4 flex flex-col items-center text-center gap-1.5 group-hover:bg-white/[0.03] transition-colors duration-500 shadow-inner">
                        <Settings size={16} className="text-cyan-400 mb-1 opacity-70" />
                        <span className="text-[9px] uppercase tracking-[0.2em] text-slate-500 font-black">Engine</span>
                        <span className="text-[13px] font-bold text-slate-200">{variant.engine}</span>
                      </div>
                      <div className="bg-[#02040A]/50 border border-white/5 rounded-2xl p-4 flex flex-col items-center text-center gap-1.5 group-hover:bg-white/[0.03] transition-colors duration-500 shadow-inner">
                        <Zap size={16} className="text-cyan-400 mb-1 opacity-70" />
                        <span className="text-[9px] uppercase tracking-[0.2em] text-slate-500 font-black">Power</span>
                        <span className="text-[13px] font-bold text-slate-200">{variant.maxPower}</span>
                      </div>
                      <div className="bg-[#02040A]/50 border border-white/5 rounded-2xl p-4 flex flex-col items-center text-center gap-1.5 group-hover:bg-white/[0.03] transition-colors duration-500 shadow-inner">
                        <Gauge size={16} className="text-cyan-400 mb-1 opacity-70" />
                        <span className="text-[9px] uppercase tracking-[0.2em] text-slate-500 font-black">Torque</span>
                        <span className="text-[13px] font-bold text-slate-200">{variant.maxTorque}</span>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex flex-col sm:flex-row gap-4 mt-auto">
                      <button
                        onClick={() => navigate(`/bike/${variant.slug}`)}
                        className="flex-1 py-4 px-6 rounded-2xl bg-white/[0.02] border border-white/10 text-slate-300 text-xs font-black uppercase tracking-[0.2em] hover:bg-white/[0.08] hover:text-white transition-all duration-300 backdrop-blur-md text-center"
                      >
                        Explore
                      </button>
                      <button
                        onClick={() => navigate(`/enquiry?bike=${variant.name}`)}
                        className="flex-1 relative overflow-hidden group/btn py-4 px-6 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-xs font-black uppercase tracking-[0.2em] shadow-[0_0_20px_rgba(34,211,238,0.2)] hover:shadow-[0_0_30px_rgba(34,211,238,0.5)] active:scale-95 transition-all duration-300 text-center"
                      >
                        <span className="relative z-10">Book Now</span>
                        <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent group-hover/btn:animate-[shimmer_1.5s_infinite]" />
                      </button>
                    </div>
                  </div>
                  
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

        </main>
      </div>
    </div>
  );
}