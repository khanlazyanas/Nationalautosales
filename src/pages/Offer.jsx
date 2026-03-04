import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaDownload, FaGift, FaPercentage, FaMoneyCheckAlt, FaChevronRight, FaCalculator } from "react-icons/fa";

export default function Offers() {
  const offers = [
    {
      icon: <FaGift className="text-4xl text-cyan-400 mb-6 group-hover:scale-110 transition-transform drop-shadow-[0_0_10px_rgba(34,211,238,0.5)]" />,
      title: "Festive Deals",
      desc: "Flat ₹5,000 off on all Dominar & Pulsar N-Series models this season.",
    },
    {
      icon: <FaPercentage className="text-4xl text-cyan-400 mb-6 group-hover:scale-110 transition-transform drop-shadow-[0_0_10px_rgba(34,211,238,0.5)]" />,
      title: "Zero% Finance",
      desc: "Exclusive 0% interest finance schemes on select premium machines.",
    },
    {
      icon: <FaMoneyCheckAlt className="text-4xl text-cyan-400 mb-6 group-hover:scale-110 transition-transform drop-shadow-[0_0_10px_rgba(34,211,238,0.5)]" />,
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

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const stagger = {
    visible: { transition: { staggerChildren: 0.15 } }
  };

  return (
    <div className="bg-[#030712] text-slate-300 font-inter min-h-screen overflow-hidden selection:bg-cyan-500/30">
      
      {/* ===== HERO SECTION ===== */}
      <motion.section 
        initial="hidden" animate="visible" variants={stagger}
        className="relative pt-40 pb-24 px-6 text-center border-b border-white/5"
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-[#030712] to-[#030712] pointer-events-none" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-cyan-600/10 blur-[150px] rounded-full pointer-events-none" />

        <motion.div variants={fadeUp} className="relative z-10 max-w-4xl mx-auto">
          <span className="inline-block px-4 py-1.5 mb-6 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-bold text-cyan-400 uppercase tracking-[0.25em] backdrop-blur-md">
            Exclusive Deals
          </span>
          <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter mb-6">
            Offers & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Promotions</span>
          </h1>
          <p className="text-lg text-slate-400 font-light max-w-2xl mx-auto leading-relaxed">
            Unleash the beast without breaking the bank. Discover our latest discounts, zero-interest schemes, and flexible finance options.
          </p>
        </motion.div>
      </motion.section>

      {/* ===== OFFERS GRID ===== */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-24 relative">
        <motion.div
          className="grid md:grid-cols-3 gap-8"
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={stagger}
        >
          {offers.map((offer, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className="group bg-[#050B14] border border-white/5 rounded-3xl p-10 hover:bg-white/[0.02] hover:border-white/10 transition-all duration-300 hover:-translate-y-2 relative overflow-hidden shadow-lg"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 blur-[40px] rounded-full group-hover:bg-cyan-500/10 transition-colors" />
              {offer.icon}
              <h3 className="text-2xl font-bold text-white mb-3 tracking-wide">{offer.title}</h3>
              <p className="text-slate-400 font-light leading-relaxed">{offer.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ===== EMI CALCULATOR (High-Tech Console) ===== */}
      <section className="bg-[#050B14] py-24 border-y border-white/5 relative overflow-hidden">
        <div className="absolute left-0 top-1/2 w-[400px] h-[400px] bg-blue-600/5 blur-[120px] rounded-full pointer-events-none -translate-y-1/2" />
        
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
          className="max-w-4xl mx-auto px-6 relative z-10 flex flex-col items-center"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black text-white tracking-tight mb-4 flex items-center justify-center gap-3">
              <FaCalculator className="text-cyan-400" /> Finance Console
            </h2>
            <p className="text-slate-400 font-light max-w-xl mx-auto">
              Calculate your estimated monthly payment instantly with our smart finance engine.
            </p>
          </div>

          <div className="w-full max-w-md bg-white/[0.02] border border-white/5 rounded-[2rem] p-8 md:p-10 shadow-[0_0_50px_rgba(0,0,0,0.5)] backdrop-blur-md">
            
            <div className="space-y-6">
              <div>
                <label className="block mb-2 text-xs font-bold uppercase tracking-widest text-slate-500">Ex-Showroom Price (₹)</label>
                <input
                  type="number" value={price} onChange={(e) => setPrice(e.target.value)}
                  className="w-full bg-[#030712] border border-white/10 text-white p-4 rounded-xl focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all font-mono"
                  placeholder="e.g. 150000"
                />
              </div>

              <div>
                <label className="block mb-2 text-xs font-bold uppercase tracking-widest text-slate-500">Down Payment (₹)</label>
                <input
                  type="number" value={downPayment} onChange={(e) => setDownPayment(e.target.value)}
                  className="w-full bg-[#030712] border border-white/10 text-white p-4 rounded-xl focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all font-mono"
                  placeholder="e.g. 30000"
                />
              </div>

              <div>
                <label className="block mb-2 text-xs font-bold uppercase tracking-widest text-slate-500">Tenure (Months)</label>
                <input
                  type="number" value={months} onChange={(e) => setMonths(e.target.value)}
                  className="w-full bg-[#030712] border border-white/10 text-white p-4 rounded-xl focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all font-mono"
                  placeholder="e.g. 24"
                />
              </div>

              <button
                onClick={calculateEMI}
                className="w-full relative overflow-hidden group py-4 mt-2 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-black uppercase tracking-widest text-sm shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_30px_rgba(6,182,212,0.5)] active:scale-95 transition-all"
              >
                <span className="relative z-10">Calculate EMI</span>
                <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent group-hover:animate-[shimmer_1s_infinite]" />
              </button>
            </div>

            {/* Glowing Result Area */}
            <AnimatePresence>
              {emi && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9, y: 10 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.9 }}
                  className={`mt-8 p-4 rounded-xl border text-center font-mono ${
                    emi === "Error" 
                      ? "bg-red-500/10 border-red-500/30 text-red-400" 
                      : "bg-cyan-500/10 border-cyan-500/30 text-cyan-300 shadow-[0_0_20px_rgba(34,211,238,0.15)]"
                  }`}
                >
                  {emi === "Error" 
                    ? "⚠️ INVALID DATA ENTERED" 
                    : <span className="flex flex-col">
                        <span className="text-[10px] uppercase tracking-widest text-slate-400 font-sans mb-1">Estimated Monthly EMI</span>
                        <span className="text-2xl font-black">₹{emi}</span>
                      </span>
                  }
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </section>

      {/* ===== BROCHURE CTA ===== */}
      <motion.section 
        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1 }} 
        className="relative py-32 text-center"
      >
        <div className="relative z-10 max-w-3xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter mb-6">
            Dive Deeper into <br className="hidden sm:block" /> the Specs.
          </h2>
          <p className="text-lg text-slate-400 font-light mb-10 max-w-xl mx-auto">
            Get the full technical breakdown, precise finance charts, and all ongoing promotions in our detailed digital brochure.
          </p>
          <a
            href="/brochure.pdf" download
            className="group relative inline-flex items-center gap-3 px-10 py-5 bg-white text-[#030712] font-black tracking-widest uppercase rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(255,255,255,0.2)] active:scale-95"
          >
            <span className="relative z-10 flex items-center gap-3">
              <FaDownload className="text-lg" /> Download Brochure
            </span>
          </a>
        </div>
      </motion.section>

    </div>
  );
}