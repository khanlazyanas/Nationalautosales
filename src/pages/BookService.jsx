import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaCalendarAlt, FaMotorcycle, FaCheckCircle, FaTimes, FaUndoAlt } from "react-icons/fa";

const API_URL = "https://bajajautosalesbackend-1.onrender.com/api/service/book-service";

export default function BookService() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [form, setForm] = useState({
    name: "", phone: "", email: "", model: "",
    serviceType: "", date: "", pickup: "No", notes: "",
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  function validate() {
    const e = {};
    if (!form.name.trim()) e.name = "Required field.";
    if (!form.phone.trim()) e.phone = "Required field.";
    else if (!/^[0-9]{10}$/.test(form.phone)) e.phone = "Enter 10-digit number.";
    if (!form.model.trim()) e.model = "Select a machine.";
    if (!form.serviceType.trim()) e.serviceType = "Select service type.";
    if (!form.date.trim()) e.date = "Choose a date.";
    return e;
  }

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const eObj = validate();
    setErrors(eObj);
    if (Object.keys(eObj).length > 0) return;

    setLoading(true);

    try {
      const res = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        alert(data.message || "Something went wrong!");
        setLoading(false);
        return;
      }

      setSuccess(true);
      setTimeout(() => setSuccess(false), 5000);

      setForm({
        name: "", phone: "", email: "", model: "",
        serviceType: "", date: "", pickup: "No", notes: "",
      });
    } catch (err) {
      alert("Server error!");
      console.log(err);
    }
    setLoading(false);
  };

  const inputClasses = (error) => 
    `w-full bg-[#030712] border p-4 rounded-xl focus:outline-none transition-all font-mono text-sm ${error ? "border-red-500/50 focus:border-red-500 text-red-100" : "border-white/10 text-white focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"}`;

  return (
    <div className="bg-[#030712] text-slate-300 font-inter min-h-screen pt-32 pb-24 px-6 overflow-hidden selection:bg-cyan-500/30">
      
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 mb-4 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-bold text-cyan-400 uppercase tracking-[0.25em] backdrop-blur-md">
            Workshop Scheduler
          </span>
          <h1 className="text-4xl md:text-5xl font-black text-white tracking-tighter mb-4">
            Book <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Service</span>
          </h1>
          <p className="mt-2 text-slate-400 max-w-2xl mx-auto font-light">
            Lock in your appointment. Our certified engineers are ready to fine-tune your machine.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-8 items-start">
          
          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}
            className="bg-white/[0.02] border border-white/5 p-8 md:p-10 rounded-[2rem] shadow-[0_0_50px_rgba(0,0,0,0.5)] backdrop-blur-md"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">Full Name *</label>
                <input name="name" value={form.name} onChange={handleChange} placeholder="Owner's Name" className={inputClasses(errors.name)} />
                {errors.name && <p className="text-red-400 text-xs mt-1 font-mono">{errors.name}</p>}
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">Mobile *</label>
                <input name="phone" value={form.phone} onChange={handleChange} placeholder="10-digit number" maxLength={10} className={inputClasses(errors.phone)} />
                {errors.phone && <p className="text-red-400 text-xs mt-1 font-mono">{errors.phone}</p>}
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">Email (Optional)</label>
              <input name="email" value={form.email} onChange={handleChange} placeholder="you@example.com" className={inputClasses()} />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">Machine *</label>
                <select name="model" value={form.model} onChange={handleChange} className={inputClasses(errors.model)}>
                  <option value="" className="bg-[#050B14]">Select Machine</option>
                  {["Pulsar 125", "Pulsar 150", "Pulsar N150", "Pulsar N160", "Pulsar NS200", "Pulsar RS200", "Dominar 250", "Dominar 400", "Avenger Street 160", "Avenger Cruise 220"].map(m => (
                    <option key={m} className="bg-[#050B14]">{m}</option>
                  ))}
                </select>
                {errors.model && <p className="text-red-400 text-xs mt-1 font-mono">{errors.model}</p>}
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">Service Type *</label>
                <select name="serviceType" value={form.serviceType} onChange={handleChange} className={inputClasses(errors.serviceType)}>
                  <option value="" className="bg-[#050B14]">Select Service</option>
                  {["Regular Service", "Premium Service", "Accident Repair", "Custom Service"].map(s => (
                    <option key={s} className="bg-[#050B14]">{s}</option>
                  ))}
                </select>
                {errors.serviceType && <p className="text-red-400 text-xs mt-1 font-mono">{errors.serviceType}</p>}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">Date *</label>
                <input type="date" name="date" value={form.date} onChange={handleChange} className={inputClasses(errors.date)} />
                {errors.date && <p className="text-red-400 text-xs mt-1 font-mono">{errors.date}</p>}
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-3">Pickup & Drop</label>
                <div className="flex gap-4 mt-2">
                  <label className="flex items-center gap-2 cursor-pointer group">
                    <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors ${form.pickup === "Yes" ? "border-cyan-400" : "border-slate-600"}`}>
                      {form.pickup === "Yes" && <div className="w-2.5 h-2.5 bg-cyan-400 rounded-full" />}
                    </div>
                    <input type="radio" name="pickup" value="Yes" className="hidden" checked={form.pickup === "Yes"} onChange={handleChange} />
                    <span className={`text-sm font-medium ${form.pickup === "Yes" ? "text-white" : "text-slate-400"}`}>Required</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer group">
                    <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors ${form.pickup === "No" ? "border-cyan-400" : "border-slate-600"}`}>
                      {form.pickup === "No" && <div className="w-2.5 h-2.5 bg-cyan-400 rounded-full" />}
                    </div>
                    <input type="radio" name="pickup" value="No" className="hidden" checked={form.pickup === "No"} onChange={handleChange} />
                    <span className={`text-sm font-medium ${form.pickup === "No" ? "text-white" : "text-slate-400"}`}>Self Drop</span>
                  </label>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <label className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">Notes</label>
              <textarea name="notes" value={form.notes} onChange={handleChange} rows="3" placeholder="Any specific issues?" className={`${inputClasses()} resize-none`} />
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button type="submit" disabled={loading} className="flex-1 relative overflow-hidden group py-4 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-black uppercase tracking-widest text-sm shadow-[0_0_20px_rgba(6,182,212,0.3)] active:scale-95 transition-all flex justify-center items-center gap-2">
                <span className="relative z-10 flex items-center gap-2"><FaMotorcycle /> {loading ? "Processing..." : "Confirm Booking"}</span>
                {!loading && <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent group-hover:animate-[shimmer_1s_infinite]" />}
              </button>
              <button type="button" onClick={() => {setForm({name: "", phone: "", email: "", model: "", serviceType: "", date: "", pickup: "No", notes: ""}); setErrors({});}} className="px-8 py-4 rounded-xl bg-white/5 border border-white/10 text-slate-300 font-bold uppercase tracking-widest text-sm hover:bg-white/10 transition-all flex justify-center items-center gap-2">
                <FaUndoAlt /> Reset
              </button>
            </div>
          </motion.form>

          {/* Right Info Panel */}
          <motion.aside initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }} className="space-y-6">
            <div className="bg-gradient-to-b from-[#050B14] to-[#0A1222] border border-cyan-500/30 rounded-[2rem] p-8 shadow-lg relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/20 blur-[50px] rounded-full group-hover:bg-cyan-500/30 transition-colors" />
              <h3 className="text-xl font-black text-white mb-2 tracking-tight">Need Immediate Assistance?</h3>
              <p className="text-slate-400 font-light mb-6 text-sm">For breakdowns or urgent repairs, bypass the queue.</p>
              <div className="space-y-2 text-sm font-mono text-cyan-400">
                <p>📞 +91 9198090051</p>
                <p>📧 service@bajajauto.co.in</p>
              </div>
            </div>

            <AnimatePresence>
              {success && (
                <motion.div initial={{ opacity: 0, y: 10, scale: 0.95 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }} className="bg-cyan-500/10 border border-cyan-500/30 p-6 rounded-[2rem] shadow-[0_0_20px_rgba(34,211,238,0.15)] backdrop-blur-md">
                  <div className="flex items-start gap-4">
                    <FaCheckCircle className="text-cyan-400 text-2xl mt-1 shadow-cyan-500" />
                    <div className="flex-1">
                      <p className="font-bold text-white tracking-wide">Slot Confirmed</p>
                      <p className="text-xs text-slate-400 mt-1 leading-relaxed">Your beast is scheduled for maintenance. Check your phone for details.</p>
                    </div>
                    <button onClick={() => setSuccess(false)} className="text-slate-500 hover:text-white transition-colors"><FaTimes /></button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.aside>
        </div>
      </div>
    </div>
  );
}