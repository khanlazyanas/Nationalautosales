import { useState } from "react";
import { motion } from "framer-motion";
import { FaPaperPlane, FaPhone, FaEnvelope, FaUndoAlt } from "react-icons/fa";
import toast, { Toaster } from "react-hot-toast";

const API_URL = "https://bajajautosalesbackend-1.onrender.com/api/enquiry";

const BIKE_MODELS = [
  "Select model",
  "Pulsar N250",
  "Pulsar NS200",
  "Dominar 400",
  "Avenger Cruise 220",
  "Platina 110",
  "CT 125X",
  "Other",
];

export default function Enquiry() {
  const [form, setForm] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    interestedModel: BIKE_MODELS[0],
    message: "",
    preferredContact: "Phone",
  });

  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);

  function validate() {
    const e = {};
    if (!form.fullName.trim()) e.fullName = "Required field.";
    if (!form.phoneNumber.trim()) e.phoneNumber = "Required field.";
    else if (!/^[0-9]{10}$/.test(form.phoneNumber.trim())) e.phoneNumber = "Enter 10 digit number.";
    if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Invalid email.";
    if (form.interestedModel === BIKE_MODELS[0]) e.interestedModel = "Select a machine.";
    if (!form.message.trim()) e.message = "Required field.";
    return e;
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const v = validate();
    setErrors(v);
    if (Object.keys(v).length) return;

    setSubmitting(true);
    toast.success("Enquiry transmitted securely!", { icon: '🔐' });

    const payload = { ...form };

    setForm({
      fullName: "", phoneNumber: "", email: "",
      interestedModel: BIKE_MODELS[0], message: "", preferredContact: "Phone",
    });
    setErrors({});
    setSubmitting(false);

    fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    }).catch((err) => console.error("Background error:", err));
  };

  const handleChange = (key) => (ev) =>
    setForm((s) => ({ ...s, [key]: ev.target.value }));

  // Premium Silicon Valley Easing
  const customEase = [0.22, 1, 0.36, 1];

  return (
    <div className="bg-[#02040A] text-slate-300 font-inter min-h-screen pt-32 pb-24 px-6 overflow-hidden selection:bg-cyan-500/30 selection:text-cyan-50 relative">
      
      {/* Dark Theme Premium Toaster */}
      <Toaster 
        position="top-center" 
        toastOptions={{ 
          style: { 
            background: 'rgba(5, 10, 21, 0.8)', 
            backdropFilter: 'blur(12px)',
            color: '#fff', 
            border: '1px solid rgba(255,255,255,0.1)',
            boxShadow: '0 20px 40px rgba(0,0,0,0.5)'
          } 
        }} 
      />

      {/* ================= BACKGROUND EFFECTS ================= */}
      <div className="fixed inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] pointer-events-none z-0" />
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/10 via-[#02040A] to-[#02040A] pointer-events-none" />
      <motion.div 
        animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.15, 0.1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="fixed top-0 right-0 w-[600px] h-[600px] bg-cyan-600/10 blur-[150px] rounded-full pointer-events-none mix-blend-screen" 
      />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* ================= HEADER ================= */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: customEase }} 
          className="text-center mb-20 flex flex-col items-center"
        >
          <span className="inline-flex items-center gap-2 px-5 py-2 mb-8 rounded-full bg-white/[0.03] border border-white/5 text-[11px] font-bold text-cyan-400 uppercase tracking-[0.25em] backdrop-blur-2xl shadow-[0_4px_24px_rgba(0,0,0,0.4)]">
            <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" /> VIP Access
          </span>
          <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter mb-6 leading-[0.9]">
            Book a <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 drop-shadow-[0_0_20px_rgba(34,211,238,0.3)]">Test Ride</span>
          </h1>
          <p className="mt-2 text-slate-400 max-w-2xl mx-auto font-light text-lg md:text-xl leading-relaxed">
            Secure your keys. Fill out the details below and our elite specialists will prepare your machine.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-10 items-start">
          
          {/* ================= MAIN FORM ================= */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1, ease: customEase }}
            className="bg-white/[0.02] border border-white/5 p-8 md:p-12 rounded-[2.5rem] shadow-[0_30px_60px_rgba(0,0,0,0.4)] backdrop-blur-2xl relative overflow-hidden group"
          >
            {/* Animated Top Border */}
            <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-50" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 mb-3 ml-1">Full Name *</label>
                <input
                  value={form.fullName} onChange={handleChange("fullName")}
                  className={`w-full bg-[#02040A]/50 text-white px-5 py-4 rounded-2xl focus:outline-none focus:bg-[#02040A] transition-all font-mono text-sm shadow-inner placeholder:text-slate-600 border ${errors.fullName ? "border-red-500/50 focus:border-red-500 focus:ring-1 focus:ring-red-500" : "border-white/10 focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50"}`}
                  placeholder="John Doe"
                />
                {errors.fullName && <p className="text-red-400 text-[10px] uppercase tracking-wider mt-2 ml-1 font-bold">{errors.fullName}</p>}
              </div>

              <div>
                <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 mb-3 ml-1">Mobile *</label>
                <input
                  value={form.phoneNumber} onChange={handleChange("phoneNumber")} maxLength={10}
                  className={`w-full bg-[#02040A]/50 text-white px-5 py-4 rounded-2xl focus:outline-none focus:bg-[#02040A] transition-all font-mono text-sm shadow-inner placeholder:text-slate-600 border ${errors.phoneNumber ? "border-red-500/50 focus:border-red-500 focus:ring-1 focus:ring-red-500" : "border-white/10 focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50"}`}
                  placeholder="10-digit number"
                />
                {errors.phoneNumber && <p className="text-red-400 text-[10px] uppercase tracking-wider mt-2 ml-1 font-bold">{errors.phoneNumber}</p>}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div>
                <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 mb-3 ml-1">Email (Optional)</label>
                <input
                  value={form.email} onChange={handleChange("email")}
                  className={`w-full bg-[#02040A]/50 text-white px-5 py-4 rounded-2xl focus:outline-none focus:bg-[#02040A] transition-all font-mono text-sm shadow-inner placeholder:text-slate-600 border ${errors.email ? "border-red-500/50 focus:border-red-500 focus:ring-1 focus:ring-red-500" : "border-white/10 focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50"}`}
                  placeholder="you@example.com"
                />
                {errors.email && <p className="text-red-400 text-[10px] uppercase tracking-wider mt-2 ml-1 font-bold">{errors.email}</p>}
              </div>

              <div>
                <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 mb-3 ml-1">Machine *</label>
                <div className="relative">
                  <select
                    value={form.interestedModel} onChange={handleChange("interestedModel")}
                    className={`w-full bg-[#02040A]/50 text-slate-300 px-5 py-4 rounded-2xl focus:outline-none focus:bg-[#02040A] transition-all font-mono text-sm appearance-none shadow-inner border cursor-pointer ${errors.interestedModel ? "border-red-500/50 focus:border-red-500 focus:ring-1 focus:ring-red-500" : "border-white/10 focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50"}`}
                  >
                    {BIKE_MODELS.map((m) => <option key={m} value={m} className="bg-[#050A15] text-white">{m}</option>)}
                  </select>
                  {/* Custom Arrow for Select */}
                  <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none">
                    <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                  </div>
                </div>
                {errors.interestedModel && <p className="text-red-400 text-[10px] uppercase tracking-wider mt-2 ml-1 font-bold">{errors.interestedModel}</p>}
              </div>
            </div>

            <div className="mb-8">
              <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 mb-4 ml-1">Preferred Contact Method</label>
              <div className="flex gap-4">
                {["Phone", "Email"].map((method) => (
                  <label key={method} className="relative flex-1 flex items-center justify-center cursor-pointer group">
                    <input type="radio" className="hidden" checked={form.preferredContact === method} onChange={() => setForm({ ...form, preferredContact: method })} />
                    <div className={`w-full py-3 rounded-xl border text-center transition-all duration-300 text-sm font-bold tracking-wide ${form.preferredContact === method ? "bg-cyan-500/10 border-cyan-400/50 text-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.15)]" : "bg-[#02040A]/50 border-white/5 text-slate-500 group-hover:bg-white/[0.02] group-hover:text-slate-300"}`}>
                      {method}
                    </div>
                  </label>
                ))}
              </div>
            </div>

            <div className="mb-10">
              <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 mb-3 ml-1">Message *</label>
              <textarea
                value={form.message} onChange={handleChange("message")} rows={4}
                className={`w-full bg-[#02040A]/50 text-white px-5 py-4 rounded-2xl focus:outline-none focus:bg-[#02040A] transition-all font-mono text-sm resize-none shadow-inner placeholder:text-slate-600 border ${errors.message ? "border-red-500/50 focus:border-red-500 focus:ring-1 focus:ring-red-500" : "border-white/10 focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50"}`}
                placeholder="Let us know your preferred date and time..."
              ></textarea>
              {errors.message && <p className="text-red-400 text-[10px] uppercase tracking-wider mt-2 ml-1 font-bold">{errors.message}</p>}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                type="submit" disabled={submitting}
                className={`flex-[2] relative overflow-hidden group/btn py-5 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 text-[#02040A] font-black uppercase tracking-[0.2em] text-sm shadow-[0_0_20px_rgba(34,211,238,0.2)] hover:shadow-[0_0_30px_rgba(34,211,238,0.5)] active:scale-95 transition-all duration-300 ${submitting ? 'opacity-70 cursor-not-allowed' : ''}`}
              >
                <span className="relative z-10 flex items-center justify-center gap-3">
                  {submitting ? "Processing..." : (
                    <>Transmit Request <FaPaperPlane className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" /></>
                  )}
                </span>
                {!submitting && <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent group-hover/btn:animate-[shimmer_1.5s_infinite]" />}
              </button>

              <button
                type="button"
                onClick={() => {
                  setForm({ fullName: "", phoneNumber: "", email: "", interestedModel: BIKE_MODELS[0], message: "", preferredContact: "Phone" });
                  setErrors({});
                }}
                className="flex-[1] py-5 rounded-2xl bg-white/[0.02] border border-white/10 text-slate-400 font-bold uppercase tracking-[0.2em] text-sm hover:bg-white/[0.08] hover:text-white transition-all duration-300 flex justify-center items-center gap-2 backdrop-blur-md"
              >
                <FaUndoAlt size={14} /> Reset
              </button>
            </div>
          </motion.form>

          {/* ================= SIDE INFO BANNER (Bento Style) ================= */}
          <motion.aside
            initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1, delay: 0.2, ease: customEase }}
          >
            <div className="bg-[#050A15]/80 backdrop-blur-xl border border-white/5 rounded-[2.5rem] p-10 shadow-[0_20px_40px_rgba(0,0,0,0.4)] relative overflow-hidden group hover:border-white/10 transition-colors duration-500">
              
              {/* Spotlight Effect */}
              <div className="absolute -top-20 -right-20 w-48 h-48 bg-cyan-500/10 blur-[50px] rounded-full group-hover:bg-cyan-500/20 transition-colors duration-700 pointer-events-none" />
              
              <h3 className="text-3xl font-black text-white mb-3 tracking-tighter">Need <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-400 to-slate-200">Assistance?</span></h3>
              <p className="text-slate-400 font-light mb-10 text-base leading-relaxed">
                Skip the line. Call our priority desk directly or drop an email. Our experts are on standby to architect your experience.
              </p>

              <div className="flex flex-col gap-5">
                <a
                  href="tel:+919198090051"
                  className="flex items-center gap-5 bg-[#02040A]/50 border border-white/5 p-5 rounded-2xl hover:border-cyan-500/30 hover:bg-white/[0.03] transition-all duration-300 group/link"
                >
                  <div className="w-12 h-12 rounded-[1rem] bg-gradient-to-br from-white/[0.05] to-transparent flex items-center justify-center border border-white/10 group-hover/link:border-cyan-500/30 transition-colors shadow-inner">
                    <FaPhone className="text-cyan-400/80 group-hover/link:text-cyan-400 group-hover/link:scale-110 transition-all duration-300" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-slate-500 font-black mb-1">Direct Line</p>
                    <p className="text-white font-mono font-bold tracking-wider">+91 9198090051</p>
                  </div>
                </a>

                <a
                  href="mailto:customerservice@bajajauto.co.in"
                  className="flex items-center gap-5 bg-[#02040A]/50 border border-white/5 p-5 rounded-2xl hover:border-cyan-500/30 hover:bg-white/[0.03] transition-all duration-300 group/link"
                >
                  <div className="w-12 h-12 rounded-[1rem] bg-gradient-to-br from-white/[0.05] to-transparent flex items-center justify-center border border-white/10 group-hover/link:border-cyan-500/30 transition-colors shadow-inner">
                    <FaEnvelope className="text-cyan-400/80 group-hover/link:text-cyan-400 group-hover/link:scale-110 transition-all duration-300" />
                  </div>
                  <div className="truncate pr-2">
                    <p className="text-[10px] uppercase tracking-[0.2em] text-slate-500 font-black mb-1">Email Support</p>
                    <p className="text-white text-sm font-bold truncate">customerservice@bajaj</p>
                  </div>
                </a>
              </div>
            </div>
          </motion.aside>
          
        </div>
      </div>
    </div>
  );
}