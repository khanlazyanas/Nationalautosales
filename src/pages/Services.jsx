import {
  FaTools,
  FaCog,
  FaMotorcycle,
  FaOilCan,
  FaWrench,
  FaCheckCircle,
  FaQuoteLeft,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaChevronRight
} from "react-icons/fa";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

// Images (Using one for a cinematic background)
import workshop2 from "../assets/servicecenter1.jpg";
import workshop3 from "../assets/servicecenter2.jpg";
import workshop4 from "../assets/servicecenter3.jpg";

export default function Service() {
  const services = [
    { icon: <FaWrench className="text-3xl text-cyan-400 group-hover:rotate-12 transition-transform" />, title: "General Service", desc: "Comprehensive routine maintenance including oil change, filter replacement and safety checks." },
    { icon: <FaCog className="text-3xl text-cyan-400 group-hover:rotate-90 transition-transform duration-500" />, title: "Engine Diagnostics", desc: "State-of-the-art diagnostics and expert engine repairs to keep your bike performing like new." },
    { icon: <FaCheckCircle className="text-3xl text-cyan-400 group-hover:scale-110 transition-transform" />, title: "Genuine Spare Parts", desc: "Only genuine Bajaj spare parts with warranty for absolute reliability and long life." },
    { icon: <FaMotorcycle className="text-3xl text-cyan-400 group-hover:translate-x-2 transition-transform" />, title: "Accident Repairs", desc: "Cashless claim assistance and professional accident repair services to restore perfection." },
    { icon: <FaOilCan className="text-3xl text-cyan-400 group-hover:-rotate-12 transition-transform" />, title: "Tyre & Brake Care", desc: "Wheel balancing, brake pad replacement and complete, high-grip tyre care." },
    { icon: <FaTools className="text-3xl text-cyan-400 group-hover:scale-110 transition-transform" />, title: "Performance Upgrades", desc: "Exhausts, guards, and custom accessories to brutally enhance your machine's style." },
  ];

  const processSteps = [
    { title: "Book Appointment", desc: "Schedule online or via a quick call." },
    { title: "Bike Handover", desc: "Drop-off or schedule a swift pickup." },
    { title: "Expert Inspection", desc: "Digital diagnostics & transparent estimate." },
    { title: "Precision Tuning", desc: "Our certified engineers get to work." },
    { title: "Quality Delivery", desc: "Multi-point check & ready to roar." }
  ];

  const packages = [
    { name: "Standard Tune-up", price: "₹1,499", popular: false, details: ["Premium Oil & filter change", "Full 24-point checkup", "Brake & tyre optimization"] },
    { name: "Elite Beast Care", price: "₹2,999", popular: true, details: ["All Standard Services included", "Detailed engine telemetry inspection", "Chain & sprocket deep clean & lube", "ECU Firmware update (if applicable)"] },
    { name: "Custom Build", price: "On Request", popular: false, details: ["Tailored performance tuning", "Accident restoration", "Aesthetic and exhaust upgrades"] }
  ];

  const faqs = [
    { q: "Service Interval?", a: "Every 5000 km or 6 months to keep the beast roaring." },
    { q: "Pickup & Drop?", a: "Yes, seamless doorstep pickup within city limits." },
    { q: "Only Bajaj?", a: "Yes, we are authorized experts exclusively for Bajaj machines." }
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const stagger = {
    visible: { transition: { staggerChildren: 0.15 } }
  };

  return (
    <div className="bg-[#030712] text-slate-300 font-inter min-h-screen overflow-hidden selection:bg-cyan-500/30">
      
      {/* ===== HERO SECTION (Cinematic Garage Vibe) ===== */}
      <motion.section 
        initial="hidden" animate="visible" variants={stagger} 
        className="relative pt-40 pb-24 px-6 lg:px-12 text-center flex flex-col items-center justify-center min-h-[60vh] border-b border-white/5"
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-[#030712] to-[#030712] pointer-events-none" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-cyan-600/10 blur-[150px] rounded-full pointer-events-none" />

        <motion.div variants={fadeUp} className="relative z-10 max-w-4xl mx-auto">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-bold text-cyan-400 uppercase tracking-[0.25em] backdrop-blur-md">
            <FaWrench size={12} /> Elite Maintenance
          </span>
          <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-[1.1] mb-6">
            Precision Care. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 drop-shadow-[0_0_30px_rgba(59,130,246,0.3)]">
              Ultimate Performance.
            </span>
          </h1>
          <p className="text-lg md:text-xl text-slate-400 font-light max-w-2xl mx-auto leading-relaxed">
            From routine servicing to aggressive performance upgrades, National Bajaj ensures your machine stays dominant on the asphalt.
          </p>
        </motion.div>
      </motion.section>

      {/* ===== SERVICES GRID ===== */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-24 relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black text-white tracking-tight mb-4">Masterclass Services</h2>
          <div className="w-16 h-1 bg-cyan-500 rounded-full mx-auto shadow-[0_0_10px_rgba(6,182,212,0.8)]" />
        </div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={stagger} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.div 
              key={i} 
              variants={fadeUp} 
              className="group bg-white/[0.02] border border-white/5 rounded-3xl p-8 hover:bg-white/[0.04] hover:border-white/10 transition-all duration-300 hover:-translate-y-2 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 blur-[40px] rounded-full group-hover:bg-cyan-500/10 transition-colors" />
              <div className="w-14 h-14 bg-[#050B14] border border-white/10 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                {s.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3 tracking-wide">{s.title}</h3>
              <p className="text-slate-400 text-sm font-light leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ===== THE PROCESS (Glowing Timeline) ===== */}
      <section className="bg-[#050B14] py-24 border-y border-white/5 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-white tracking-tight mb-4">The Pitstop Process</h2>
            <p className="text-slate-400 max-w-2xl mx-auto font-light">Seamless, transparent, and built for speed.</p>
          </div>

          <div className="flex flex-col lg:flex-row gap-6 justify-center">
            {processSteps.map((step, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 20 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true }} 
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="flex-1 relative"
              >
                {/* Connector Line (Desktop) */}
                {i !== processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-6 left-[60%] w-[80%] h-[2px] bg-gradient-to-r from-cyan-500/50 to-transparent z-0" />
                )}
                <div className="relative z-10 bg-[#030712] border border-white/10 w-12 h-12 rounded-full flex items-center justify-center text-cyan-400 font-black mb-6 shadow-[0_0_15px_rgba(34,211,238,0.2)]">
                  0{i + 1}
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                <p className="text-slate-400 text-sm font-light">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SERVICE PACKAGES (Pricing Cards) ===== */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black text-white tracking-tight mb-4">Service Packages</h2>
          <div className="w-16 h-1 bg-cyan-500 rounded-full mx-auto shadow-[0_0_10px_rgba(6,182,212,0.8)]" />
        </div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid lg:grid-cols-3 gap-8 items-center">
          {packages.map((pkg, i) => (
            <motion.div 
              key={i} 
              variants={fadeUp} 
              className={`relative p-8 rounded-[2rem] flex flex-col h-full transition-transform duration-300 hover:-translate-y-2 ${
                pkg.popular 
                  ? "bg-gradient-to-b from-[#050B14] to-[#0a1526] border border-cyan-500/50 shadow-[0_0_40px_rgba(34,211,238,0.15)] lg:-translate-y-4" 
                  : "bg-white/[0.02] border border-white/5"
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-cyan-500 text-[#030712] text-[10px] font-black uppercase tracking-widest rounded-full shadow-[0_0_10px_rgba(34,211,238,0.8)]">
                  Most Preferred
                </div>
              )}
              <h3 className="text-2xl font-bold text-white mb-2">{pkg.name}</h3>
              <div className="flex items-baseline gap-2 mb-8">
                <span className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">{pkg.price}</span>
                {pkg.price !== "On Request" && <span className="text-slate-500 text-sm font-bold uppercase">/ Service</span>}
              </div>
              
              <ul className="space-y-4 mb-10 flex-1">
                {pkg.details.map((detail, j) => (
                  <li key={j} className="flex items-start gap-3 text-slate-300 text-sm">
                    <FaCheckCircle className="text-cyan-400 shrink-0 mt-0.5" />
                    <span className="font-light">{detail}</span>
                  </li>
                ))}
              </ul>

              <Link to="/book-service" className="mt-auto">
                <button className={`w-full py-4 rounded-xl font-bold uppercase tracking-widest text-sm transition-all duration-300 ${
                  pkg.popular 
                    ? "bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-[0_0_20px_rgba(6,182,212,0.4)] hover:shadow-[0_0_30px_rgba(6,182,212,0.6)]" 
                    : "bg-white/5 text-slate-300 border border-white/10 hover:bg-white/10 hover:text-white"
                }`}>
                  Book Now
                </button>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ===== FAQs & Quick Info ===== */}
      <section className="bg-[#050B14] py-24 border-t border-white/5">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-3xl font-black text-white tracking-tight mb-12">Quick Answers</h2>
          <div className="grid md:grid-cols-3 gap-6 text-left">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white/[0.02] border border-white/5 p-6 rounded-2xl hover:bg-white/[0.05] transition-colors">
                <h4 className="text-cyan-400 font-bold mb-2 text-sm">{faq.q}</h4>
                <p className="text-slate-400 text-sm font-light leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CINEMATIC CTA ===== */}
      <motion.section 
        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1 }} 
        className="relative py-32 text-center overflow-hidden"
      >
        {/* Deep background image overlay */}
        <div className="absolute inset-0 z-0">
          <img src={workshop2} alt="Workshop" className="w-full h-full object-cover opacity-20 grayscale" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-[#030712]/80 to-[#030712]" />
        </div>

        <div className="relative z-10 max-w-3xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter mb-6">
            Ready to Unleash <br className="hidden sm:block" /> The True Potential?
          </h2>
          <p className="text-lg text-slate-400 font-light mb-10">
            Secure your slot today. Let our experts fine-tune your machine for the ultimate ride.
          </p>
          <Link to="/book-service" className="group relative inline-flex items-center gap-3 px-12 py-5 bg-white text-[#030712] font-black tracking-widest uppercase rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(255,255,255,0.2)] active:scale-95">
            <span className="relative z-10 flex items-center gap-2">
              Book a Service <FaChevronRight className="group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-[#030712]/10 to-transparent group-hover:animate-[shimmer_1.5s_infinite]" />
          </Link>
        </div>
      </motion.section>

    </div>
  );
}