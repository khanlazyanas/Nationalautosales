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

  // Premium Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 20 } },
    exit: { opacity: 0, scale: 0.95, transition: { duration: 0.2 } }
  };

  return (
    <div className="min-h-screen bg-[#030712] text-slate-200 font-inter pt-[100px] overflow-hidden selection:bg-blue-500/30">
      
      {/* Background Effects */}
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-blue-900/10 via-[#030712] to-[#030712] pointer-events-none" />
      <div className="fixed top-1/2 left-0 w-[500px] h-[500px] bg-blue-600/5 blur-[120px] rounded-full pointer-events-none -translate-y-1/2" />

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8 px-4 sm:px-6 lg:px-8 pb-24 relative z-10">
        
        {/* ================= SIDEBAR / MOBILE TABS ================= */}
        <aside className="w-full lg:w-64 shrink-0">
          <div className="lg:sticky lg:top-32 flex flex-col gap-6">
            <h1 className="hidden lg:block text-xs font-black uppercase tracking-[0.3em] text-slate-500 mb-2">
              The Fleet
            </h1>

            {/* Navigation List */}
            <nav className="flex lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-4 lg:pb-0 scrollbar-hide">
              {bikes.map((b) => {
                const isActive = active.name === b.name;
                return (
                  <button
                    key={b.name}
                    onClick={() => setActive(b)}
                    className={`relative whitespace-nowrap lg:whitespace-normal px-6 py-4 text-sm font-bold uppercase tracking-[0.1em] text-left transition-all duration-300 rounded-2xl overflow-hidden group ${
                      isActive 
                        ? "text-cyan-400 bg-blue-500/10 border border-blue-500/20 shadow-[0_0_20px_rgba(59,130,246,0.1)]" 
                        : "text-slate-400 border border-transparent hover:bg-white/[0.03] hover:text-white"
                    }`}
                  >
                    {isActive && (
                      <motion.div 
                        layoutId="activeTab" 
                        className="absolute left-0 top-0 bottom-0 w-1 bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.8)] hidden lg:block" 
                      />
                    )}
                    {isActive && (
                      <motion.div 
                        layoutId="activeTabMobile" 
                        className="absolute left-0 right-0 bottom-0 h-1 bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.8)] lg:hidden" 
                      />
                    )}
                    <span className="relative z-10 flex items-center justify-between w-full">
                      {b.name}
                      {isActive && <ChevronRight size={16} className="hidden lg:block opacity-50" />}
                    </span>
                  </button>
                );
              })}
            </nav>
          </div>
        </aside>

        {/* ================= MAIN CONTENT (BIKE GRID) ================= */}
        <main className="flex-1">
          <div className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter">
                {active.name} <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-500 to-slate-300">Series</span>
              </h2>
              <p className="text-slate-400 mt-2 font-light">Explore the top-tier performance machines in this segment.</p>
            </div>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={active.name}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-6"
            >
              {active.variants.map((variant) => (
                <motion.div
                  key={variant.name}
                  variants={cardVariants}
                  className="group relative bg-[#050B14] border border-white/5 hover:border-white/10 rounded-[2rem] p-6 lg:p-8 flex flex-col transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)]"
                >
                  {/* Image Area with Glow */}
                  <div className="relative w-full aspect-[4/3] flex items-center justify-center mb-8">
                    {/* Soft background glow */}
                    <div className="absolute inset-0 bg-blue-500/10 blur-[50px] rounded-full group-hover:bg-cyan-500/20 transition-colors duration-500" />
                    <img
                      src={variant.img}
                      alt={variant.name}
                      className="relative z-10 w-full h-full object-contain drop-shadow-2xl group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                  </div>

                  {/* Bike Info */}
                  <div className="flex-1 flex flex-col">
                    <div className="flex justify-between items-start mb-6">
                      <h3 className="text-2xl font-bold text-white tracking-tight">{variant.name}</h3>
                      <p className="text-lg font-black text-cyan-400 tracking-wide">{variant.price}</p>
                    </div>

                    {/* Tech Specs Grid */}
                    <div className="grid grid-cols-3 gap-2 mb-8">
                      <div className="bg-white/[0.02] border border-white/5 rounded-xl p-3 flex flex-col items-center text-center gap-1 group-hover:bg-white/[0.04] transition-colors">
                        <Settings size={14} className="text-slate-400 mb-1" />
                        <span className="text-[9px] uppercase tracking-widest text-slate-500 font-bold">Engine</span>
                        <span className="text-xs font-semibold text-slate-300">{variant.engine}</span>
                      </div>
                      <div className="bg-white/[0.02] border border-white/5 rounded-xl p-3 flex flex-col items-center text-center gap-1 group-hover:bg-white/[0.04] transition-colors">
                        <Zap size={14} className="text-slate-400 mb-1" />
                        <span className="text-[9px] uppercase tracking-widest text-slate-500 font-bold">Power</span>
                        <span className="text-xs font-semibold text-slate-300">{variant.maxPower}</span>
                      </div>
                      <div className="bg-white/[0.02] border border-white/5 rounded-xl p-3 flex flex-col items-center text-center gap-1 group-hover:bg-white/[0.04] transition-colors">
                        <Gauge size={14} className="text-slate-400 mb-1" />
                        <span className="text-[9px] uppercase tracking-widest text-slate-500 font-bold">Torque</span>
                        <span className="text-xs font-semibold text-slate-300">{variant.maxTorque}</span>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex gap-3 mt-auto pt-4 border-t border-white/5">
                      <button
                        onClick={() => navigate(`/bike/${variant.slug}`)}
                        className="flex-1 py-3.5 px-4 rounded-xl bg-white/[0.03] border border-white/10 text-slate-300 text-sm font-bold uppercase tracking-widest hover:bg-white/10 hover:text-white transition-all"
                      >
                        Explore
                      </button>
                      <button
                        onClick={() => navigate(`/enquiry?bike=${variant.name}`)}
                        className="flex-1 relative overflow-hidden group/btn py-3.5 px-4 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white text-sm font-bold uppercase tracking-widest shadow-[0_0_15px_rgba(6,182,212,0.3)] hover:shadow-[0_0_25px_rgba(6,182,212,0.5)] active:scale-95 transition-all"
                      >
                        <span className="relative z-10">Book Now</span>
                        <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent group-hover/btn:animate-[shimmer_1s_infinite]" />
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