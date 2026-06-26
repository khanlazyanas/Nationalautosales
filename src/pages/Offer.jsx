import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaDownload, FaGift, FaPercentage, FaMoneyCheckAlt, FaCalculator } from "react-icons/fa";

export default function Offers() {
  const offers = [
    {
      icon: <FaGift className="text-3xl text-cyan-400 group-hover:scale-110 group-hover:rotate-[5deg] transition-transform duration-500 drop-shadow-[0_0_15px_rgba(34,211,238,0.5)]" />,
      title: "Festive Deals",
      desc: "Flat ₹5,000 off on all Dominar & Pulsar N-Series models this season.",
    },
    {
      icon: <FaPercentage className="text-3xl text-cyan-400 group-hover:scale-110 group-hover:rotate-[5deg] transition-transform duration-500 drop-shadow-[0_0_15px_rgba(34,211,238,0.5)]" />,
      title: "Zero% Finance",
      desc: "Exclusive 0% interest finance schemes on select premium machines.",
    },
    {
      icon: <FaMoneyCheckAlt className="text-3xl text-cyan-400 group-hover:scale-110 group-hover:rotate-[5deg] transition-transform duration-500 drop-shadow-[0_0_15px_rgba(34,211,238,0.5)]" />,
      title: "Flexible EMI",
      desc: "Own your dream machine with easy EMI starting at just ₹2,000/month.",
    },
  ];

  const [price, setPrice] = useState("");
  const [downPayment, setDownPayment] = useState("");
  const [months, setMonths] = useState("");
  const [emi, setEmi] = useState(null);

  const calculateEMI = () => {
    const interestRate = 0.1; // 10% annual
    const principal = Number(price) - Number(downPayment);

    if (principal <= 0 || months <= 0) {
      setEmi("Error");
      return;
    }

    const totalInterest = principal * interestRate * (months / 12);
    const totalAmount = principal + totalInterest;
    const monthlyEmi = totalAmount / months;

    setEmi(monthlyEmi.toFixed(2));
  };

  // Premium Silicon Valley Easing
  const customEase = [0.22, 1, 0.36, 1];

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: customEase } }
  };

  const stagger = {
    visible: { transition: { staggerChildren: 0.15 } }
  };

  return (
    <div className="bg-[#02040A] text-slate-300 font-inter min-h-screen overflow-hidden selection:bg-cyan-500/30 selection:text-cyan-50 relative">
      
      {/* ================= BACKGROUND EFFECTS ================= */}
      <div className="fixed inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] pointer-events-none z-0" />
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/10 via-[#02040A] to-[#02040A] pointer-events-none" />
      <motion.div 
        animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.15, 0.1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
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
            Exclusive Deals
          </span>
          <h1 className="text-6xl md:text-[5.5rem] font-black text-white tracking-tighter mb-6 leading-[0.9]">
            Offers & <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 drop-shadow-[0_0_20px_rgba(34,211,238,0.3)]">Promotions</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-400 font-light max-w-2xl mx-auto leading-relaxed">
            Unleash the beast without breaking the bank. Discover our latest discounts, zero-interest schemes, and flexible finance options.
          </p>
        </motion.div>
      </motion.section>

      {/* ===== OFFERS GRID (BENTO STYLE) ===== */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-32 relative z-10">
        <motion.div
          className="grid md:grid-cols-3 gap-8"
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={stagger}
        >
          {offers.map((offer, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className="group bg-[#050A15]/80 backdrop-blur-xl border border-white/5 rounded-[2.5rem] p-10 hover:bg-white/[0.03] hover:border-white/10 transition-all duration-500 hover:-translate-y-2 relative overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.4)]"
            >
              {/* Spotlight Effect */}
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-cyan-500/10 blur-[50px] rounded-full group-hover:bg-cyan-500/20 transition-colors duration-700 pointer-events-none mix-blend-screen" />
              
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-white/[0.05] to-transparent flex items-center justify-center border border-white/10 mb-8 relative z-10 group-hover:border-cyan-500/30 transition-colors shadow-inner">
                {offer.icon}
              </div>
              <h3 className="text-3xl font-black text-white mb-3 tracking-tight relative z-10 group-hover:text-cyan-50 transition-colors">{offer.title}</h3>
              <p className="text-slate-400 font-light leading-relaxed relative z-10">{offer.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ===== EMI CALCULATOR (HIGH-TECH DASHBOARD) ===== */}
      <section className="py-32 relative overflow-hidden z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-[#050A15] to-[#02040A] border-y border-white/5 z-0" />
        <div className="absolute left-1/4 top-1/2 w-[600px] h-[400px] bg-blue-600/5 blur-[120px] rounded-full pointer-events-none -translate-y-1/2 mix-blend-screen" />
        
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}
          className="max-w-4xl mx-auto px-6 relative z-10 flex flex-col items-center"
        >
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black text-white tracking-tighter mb-6 flex items-center justify-center gap-4">
              <FaCalculator className="text-cyan-400 drop-shadow-[0_0_15px_rgba(34,211,238,0.5)]" /> Finance <span className="text-slate-500">Engine</span>
            </h2>
            <p className="text-slate-400 font-light max-w-xl mx-auto text-lg">
              Calculate your estimated monthly payment instantly with our smart finance algorithm.
            </p>
          </div>

          <div className="w-full max-w-lg bg-white/[0.02] border border-white/5 rounded-[2.5rem] p-10 md:p-12 shadow-[0_30px_60px_rgba(0,0,0,0.5)] backdrop-blur-3xl relative overflow-hidden group">
            {/* Animated Top Border */}
            <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-50" />

            <div className="space-y-6 relative z-10">
              <div>
                <label className="block mb-3 ml-1 text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">Ex-Showroom Price (₹)</label>
                <input
                  type="number" value={price} onChange={(e) => setPrice(e.target.value)}
                  className="w-full bg-[#02040A]/50 border border-white/10 text-white px-5 py-4 rounded-2xl focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 focus:bg-[#02040A] transition-all font-mono text-sm shadow-inner placeholder:text-slate-600"
                  placeholder="e.g. 150000"
                />
              </div>

              <div>
                <label className="block mb-3 ml-1 text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">Down Payment (₹)</label>
                <input
                  type="number" value={downPayment} onChange={(e) => setDownPayment(e.target.value)}
                  className="w-full bg-[#02040A]/50 border border-white/10 text-white px-5 py-4 rounded-2xl focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 focus:bg-[#02040A] transition-all font-mono text-sm shadow-inner placeholder:text-slate-600"
                  placeholder="e.g. 30000"
                />
              </div>

              <div>
                <label className="block mb-3 ml-1 text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">Tenure (Months)</label>
                <input
                  type="number" value={months} onChange={(e) => setMonths(e.target.value)}
                  className="w-full bg-[#02040A]/50 border border-white/10 text-white px-5 py-4 rounded-2xl focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 focus:bg-[#02040A] transition-all font-mono text-sm shadow-inner placeholder:text-slate-600"
                  placeholder="e.g. 24"
                />
              </div>

              <button
                onClick={calculateEMI}
                className="w-full relative overflow-hidden group/btn py-5 mt-4 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 text-[#02040A] font-black uppercase tracking-[0.2em] text-sm shadow-[0_0_20px_rgba(34,211,238,0.2)] hover:shadow-[0_0_30px_rgba(34,211,238,0.5)] active:scale-95 transition-all duration-300"
              >
                <span className="relative z-10">Calculate EMI</span>
                <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent group-hover/btn:animate-[shimmer_1.5s_infinite]" />
              </button>
            </div>

            {/* Glowing Result Area */}
            <AnimatePresence>
              {emi && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95, y: 15 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.95, y: 10 }} transition={{ duration: 0.4, ease: customEase }}
                  className={`mt-8 p-6 rounded-2xl border text-center font-mono relative overflow-hidden ${
                    emi === "Error" 
                      ? "bg-red-500/5 border-red-500/30 text-red-400 shadow-[inset_0_0_20px_rgba(239,68,68,0.1)]" 
                      : "bg-cyan-500/5 border-cyan-500/30 text-cyan-300 shadow-[inset_0_0_20px_rgba(34,211,238,0.1)] shadow-[0_0_20px_rgba(34,211,238,0.15)]"
                  }`}
                >
                  {/* Subtle Background glow in result */}
                  <div className={`absolute inset-0 opacity-20 blur-xl ${emi === "Error" ? "bg-red-500" : "bg-cyan-500"}`} />
                  
                  <div className="relative z-10">
                    {emi === "Error" 
                      ? "⚠️ INVALID DATA ENTRY" 
                      : <span className="flex flex-col">
                          <span className="text-[10px] uppercase tracking-[0.2em] text-slate-400 font-inter font-bold mb-2">Estimated Monthly EMI</span>
                          <span className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-br from-white to-cyan-300 tracking-tighter drop-shadow-md">₹{emi}</span>
                        </span>
                    }
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </section>

      {/* ===== BROCHURE CTA ===== */}
      <motion.section 
        initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 1, ease: customEase }} 
        className="relative py-40 text-center z-10"
      >
        <div className="relative z-10 max-w-3xl mx-auto px-6 flex flex-col items-center">
          <h2 className="text-5xl md:text-6xl font-black text-white tracking-tighter mb-8 leading-[0.9]">
            Dive Deeper into <br className="hidden sm:block" /> the <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-400 to-slate-200">Specs.</span>
          </h2>
          <p className="text-lg md:text-xl text-slate-400 font-light mb-12 max-w-xl mx-auto leading-relaxed">
            Get the full technical breakdown, precise finance charts, and all ongoing promotions in our detailed digital brochure.
          </p>
          <a
            href="/brochure.pdf" download
            className="group relative inline-flex items-center gap-4 px-12 py-5 bg-white text-[#02040A] font-black tracking-[0.2em] uppercase rounded-full overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-[0_0_40px_rgba(255,255,255,0.3)] active:scale-95 text-sm"
          >
            <span className="relative z-10 flex items-center gap-3">
              <FaDownload className="text-lg group-hover:-translate-y-1 transition-transform duration-300" /> Download Brochure
            </span>
            <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-[#02040A]/10 to-transparent group-hover:animate-[shimmer_1.5s_infinite]" />
          </a>
        </div>
      </motion.section>

    </div>
  );
}