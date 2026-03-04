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
    toast.success("Enquiry sent securely!");

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

  return (
    <div className="bg-[#030712] text-slate-300 font-inter min-h-screen pt-32 pb-24 px-6 overflow-hidden selection:bg-cyan-500/30">
      <Toaster position="top-center" toastOptions={{ style: { background: '#0f172a', color: '#fff', border: '1px solid rgba(255,255,255,0.1)' } }} />

      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* HEADER */}
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-black text-white tracking-tighter mb-4">
            Book a <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Test Ride</span>
          </h1>
          <p className="mt-2 text-slate-400 max-w-2xl mx-auto font-light text-lg">
            Secure your keys. Fill out the details below and our specialists will set up your experience.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-8 items-start">
          
          {/* MAIN FORM */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}
            className="bg-white/[0.02] border border-white/5 p-8 md:p-10 rounded-[2rem] shadow-[0_0_50px_rgba(0,0,0,0.5)] backdrop-blur-md"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">Full Name *</label>
                <input
                  value={form.fullName} onChange={handleChange("fullName")}
                  className={`w-full bg-[#030712] border text-white p-4 rounded-xl focus:outline-none transition-all font-mono text-sm ${errors.fullName ? "border-red-500/50 focus:border-red-500" : "border-white/10 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"}`}
                  placeholder="John Doe"
                />
                {errors.fullName && <p className="text-red-400 text-xs mt-1 font-mono">{errors.fullName}</p>}
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">Mobile *</label>
                <input
                  value={form.phoneNumber} onChange={handleChange("phoneNumber")} maxLength={10}
                  className={`w-full bg-[#030712] border text-white p-4 rounded-xl focus:outline-none transition-all font-mono text-sm ${errors.phoneNumber ? "border-red-500/50 focus:border-red-500" : "border-white/10 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"}`}
                  placeholder="10-digit number"
                />
                {errors.phoneNumber && <p className="text-red-400 text-xs mt-1 font-mono">{errors.phoneNumber}</p>}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">Email (Optional)</label>
                <input
                  value={form.email} onChange={handleChange("email")}
                  className={`w-full bg-[#030712] border text-white p-4 rounded-xl focus:outline-none transition-all font-mono text-sm ${errors.email ? "border-red-500/50 focus:border-red-500" : "border-white/10 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"}`}
                  placeholder="you@example.com"
                />
                {errors.email && <p className="text-red-400 text-xs mt-1 font-mono">{errors.email}</p>}
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">Machine *</label>
                <select
                  value={form.interestedModel} onChange={handleChange("interestedModel")}
                  className={`w-full bg-[#030712] border text-slate-300 p-4 rounded-xl focus:outline-none transition-all font-mono text-sm appearance-none ${errors.interestedModel ? "border-red-500/50 focus:border-red-500" : "border-white/10 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"}`}
                >
                  {BIKE_MODELS.map((m) => <option key={m} className="bg-[#050B14]">{m}</option>)}
                </select>
                {errors.interestedModel && <p className="text-red-400 text-xs mt-1 font-mono">{errors.interestedModel}</p>}
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-3">Preferred Contact Method</label>
              <div className="flex gap-4">
                <label className="flex items-center gap-2 cursor-pointer group">
                  <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors ${form.preferredContact === "Phone" ? "border-cyan-400" : "border-slate-600 group-hover:border-slate-400"}`}>
                    {form.preferredContact === "Phone" && <div className="w-2.5 h-2.5 bg-cyan-400 rounded-full" />}
                  </div>
                  <input type="radio" className="hidden" checked={form.preferredContact === "Phone"} onChange={() => setForm({ ...form, preferredContact: "Phone" })} />
                  <span className={`text-sm font-medium ${form.preferredContact === "Phone" ? "text-white" : "text-slate-400"}`}>Phone</span>
                </label>

                <label className="flex items-center gap-2 cursor-pointer group">
                  <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors ${form.preferredContact === "Email" ? "border-cyan-400" : "border-slate-600 group-hover:border-slate-400"}`}>
                    {form.preferredContact === "Email" && <div className="w-2.5 h-2.5 bg-cyan-400 rounded-full" />}
                  </div>
                  <input type="radio" className="hidden" checked={form.preferredContact === "Email"} onChange={() => setForm({ ...form, preferredContact: "Email" })} />
                  <span className={`text-sm font-medium ${form.preferredContact === "Email" ? "text-white" : "text-slate-400"}`}>Email</span>
                </label>
              </div>
            </div>

            <div className="mb-8">
              <label className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">Message *</label>
              <textarea
                value={form.message} onChange={handleChange("message")} rows={4}
                className={`w-full bg-[#030712] border text-white p-4 rounded-xl focus:outline-none transition-all font-mono text-sm resize-none ${errors.message ? "border-red-500/50 focus:border-red-500" : "border-white/10 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"}`}
                placeholder="Let us know your preferred date and time..."
              ></textarea>
              {errors.message && <p className="text-red-400 text-xs mt-1 font-mono">{errors.message}</p>}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                type="submit" disabled={submitting}
                className="flex-1 relative overflow-hidden group py-4 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-black uppercase tracking-widest text-sm shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_30px_rgba(6,182,212,0.5)] active:scale-95 transition-all flex justify-center items-center gap-2"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <FaPaperPlane /> {submitting ? "Processing..." : "Submit Enquiry"}
                </span>
                <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent group-hover:animate-[shimmer_1s_infinite]" />
              </button>

              <button
                type="button"
                onClick={() => {
                  setForm({ fullName: "", phoneNumber: "", email: "", interestedModel: BIKE_MODELS[0], message: "", preferredContact: "Phone" });
                  setErrors({});
                }}
                className="px-8 py-4 rounded-xl bg-white/5 border border-white/10 text-slate-300 font-bold uppercase tracking-widest text-sm hover:bg-white/10 hover:text-white transition-all flex justify-center items-center gap-2"
              >
                <FaUndoAlt /> Reset
              </button>
            </div>
          </motion.form>

          {/* SIDE INFO BANNER */}
          <motion.aside
            initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="bg-gradient-to-b from-[#050B14] to-[#0A1222] border border-cyan-500/30 rounded-[2rem] p-8 shadow-[0_0_40px_rgba(34,211,238,0.1)] relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/20 blur-[50px] rounded-full group-hover:bg-cyan-500/30 transition-colors" />
              
              <h3 className="text-2xl font-black text-white mb-2 tracking-tight">Need Assistance?</h3>
              <p className="text-slate-400 font-light mb-8 text-sm leading-relaxed">
                Skip the line. Call our priority desk directly or drop an email. Our experts are on standby.
              </p>

              <div className="flex flex-col gap-4">
                <a
                  href="tel:+919198090051"
                  className="flex items-center gap-4 bg-[#030712]/50 border border-white/5 p-4 rounded-xl hover:border-cyan-400/50 hover:bg-[#030712] transition-all group/link"
                >
                  <div className="w-10 h-10 rounded-full bg-cyan-500/10 flex items-center justify-center border border-cyan-500/20 group-hover/link:bg-cyan-500 group-hover/link:text-[#030712] transition-colors">
                    <FaPhone className="text-cyan-400 group-hover/link:text-[#030712]" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">Direct Line</p>
                    <p className="text-white font-mono">+91 9198090051</p>
                  </div>
                </a>

                <a
                  href="mailto:customerservice@bajajauto.co.in"
                  className="flex items-center gap-4 bg-[#030712]/50 border border-white/5 p-4 rounded-xl hover:border-cyan-400/50 hover:bg-[#030712] transition-all group/link"
                >
                  <div className="w-10 h-10 rounded-full bg-cyan-500/10 flex items-center justify-center border border-cyan-500/20 group-hover/link:bg-cyan-500 group-hover/link:text-[#030712] transition-colors">
                    <FaEnvelope className="text-cyan-400 group-hover/link:text-[#030712]" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">Email Support</p>
                    <p className="text-white text-sm">customerservice@bajaj</p>
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