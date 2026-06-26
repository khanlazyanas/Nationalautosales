import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF, FaInstagram, FaLinkedinIn, FaPhoneAlt, FaEnvelope, 
  FaMapMarkerAlt, FaClock, FaArrowUp, FaStar, FaCheckCircle, FaMoneyBillWave, FaWhatsapp,
} from "react-icons/fa";

export default function Footer() {
  const [showTop, setShowTop] = useState(false);
  const [isClosed, setIsClosed] = useState(false);

  useEffect(() => {
    // Scroll To Top Logic
    const handleScroll = () => setShowTop(window.scrollY > 400);
    window.addEventListener("scroll", handleScroll);

    // Dynamic Day Logic (0 = Sunday, 1 = Monday, ..., 6 = Saturday)
    const today = new Date().getDay();
    // Agar aaj Saturday (6) hai, toh isClosed true ho jayega
    if (today === 6) {
      setIsClosed(true);
    } else {
      setIsClosed(false);
    }

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <>
      <footer className="bg-[#02040A] text-slate-300 font-inter border-t border-white/5 relative overflow-hidden z-10 selection:bg-cyan-500/30 selection:text-cyan-50">
        
        {/* ================= BACKGROUND EFFECTS ================= */}
        <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] pointer-events-none z-0" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-cyan-600/5 blur-[150px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-900/10 blur-[150px] rounded-full pointer-events-none" />

        {/* ================= TRUST STRIP ================= */}
        <div className="bg-gradient-to-r from-transparent via-white/[0.03] to-transparent border-b border-white/5 relative z-10 backdrop-blur-md">
          <div className="max-w-7xl mx-auto px-6 py-5 grid grid-cols-1 md:grid-cols-3 gap-6 text-[10px] font-black tracking-[0.2em] uppercase text-slate-400 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-3 group cursor-default">
              <FaCheckCircle className="text-cyan-400 text-lg group-hover:scale-110 transition-transform drop-shadow-[0_0_10px_rgba(34,211,238,0.5)]" /> Authorized Dealer
            </div>
            <div className="flex items-center justify-center md:justify-start gap-3 group cursor-default">
              <FaMoneyBillWave className="text-cyan-400 text-lg group-hover:scale-110 transition-transform drop-shadow-[0_0_10px_rgba(34,211,238,0.5)]" /> Seamless Finance
            </div>
            <div className="flex items-center justify-center md:justify-start gap-3 group cursor-default">
              <FaStar className="text-cyan-400 text-lg group-hover:scale-110 transition-transform drop-shadow-[0_0_10px_rgba(34,211,238,0.5)]" /> Elite Service
            </div>
          </div>
        </div>

        {/* ================= MAIN FOOTER ================= */}
        <div className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-4 md:grid-cols-2 gap-16 text-sm relative z-10">
          
          {/* Brand & Contact */}
          <div className="flex flex-col">
            <h3 className="text-3xl font-black text-white mb-6 tracking-tighter">
              NATIONAL<span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 drop-shadow-[0_0_15px_rgba(34,211,238,0.3)]">AUTO</span>
            </h3>
            <p className="mb-8 font-light leading-relaxed text-slate-400 text-base">
              Your elite partner for Bajaj machines. Sales, premium service, and genuine spares integrated under one roof.
            </p>
            <div className="space-y-4 font-mono text-xs text-slate-300">
              <a href="tel:+919198090051" className="flex items-center gap-4 hover:text-cyan-400 transition-colors group">
                <div className="w-8 h-8 rounded-full bg-white/[0.05] border border-white/10 flex items-center justify-center group-hover:border-cyan-400/50 group-hover:bg-cyan-500/10 transition-all">
                  <FaPhoneAlt className="text-slate-400 group-hover:text-cyan-400" size={12} /> 
                </div>
                +91 91980 90051
              </a>
              <div className="flex items-center gap-4 group cursor-default">
                <div className="w-8 h-8 rounded-full bg-white/[0.05] border border-white/10 flex items-center justify-center group-hover:border-cyan-400/50 group-hover:bg-cyan-500/10 transition-all shrink-0">
                  <FaMapMarkerAlt className="text-slate-400 group-hover:text-cyan-400" size={12} />
                </div>
                <span className="leading-snug">Ubhaon Road, Belthara Road, <br/> Ballia, UP</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-black mb-8 uppercase tracking-[0.2em] text-[11px]">Command Center</h4>
            <ul className="space-y-4 font-medium text-slate-400 text-sm">
              {['Motorcycle', 'About Us', 'Services', 'Gallery', 'Offers', 'Contact'].map(item => (
                <li key={item}>
                  <Link to={`/${item.toLowerCase().replace(' ', '')}`} className="group flex items-center gap-2 hover:text-cyan-400 transition-colors w-fit">
                    <span className="w-0 h-[1px] bg-cyan-400 transition-all duration-300 group-hover:w-3" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal & Status */}
          <div>
            <h4 className="text-white font-black mb-8 uppercase tracking-[0.2em] text-[11px]">Legal Framework</h4>
            <ul className="space-y-4 font-medium text-slate-400 text-sm mb-10">
              <li>
                <Link to="/privacy" className="group flex items-center gap-2 hover:text-cyan-400 transition-colors w-fit">
                  <span className="w-0 h-[1px] bg-cyan-400 transition-all duration-300 group-hover:w-3" /> Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="group flex items-center gap-2 hover:text-cyan-400 transition-colors w-fit">
                  <span className="w-0 h-[1px] bg-cyan-400 transition-all duration-300 group-hover:w-3" /> Terms & Conditions
                </Link>
              </li>
            </ul>

            <h4 className="text-white font-black mb-5 uppercase tracking-[0.2em] text-[11px]">Showroom Status</h4>
            <div className="space-y-4">
              <p className="flex items-center gap-3 text-slate-400 font-mono text-xs">
                <FaClock className="text-cyan-400" /> Sun - Fri: 9:30 AM - 7:00 PM
              </p>
              
              {/* ✅ DYNAMIC OPEN/CLOSE BADGE */}
              {isClosed ? (
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 font-bold text-[10px] uppercase tracking-[0.15em] shadow-[inset_0_0_10px_rgba(239,68,68,0.1)]">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                  </span>
                  Closed Today
                </div>
              ) : (
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 font-bold text-[10px] uppercase tracking-[0.15em] shadow-[inset_0_0_10px_rgba(34,211,238,0.1)]">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
                  </span>
                  Open Today
                </div>
              )}
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-white font-black mb-8 uppercase tracking-[0.2em] text-[11px]">Connect With Us</h4>
            <div className="flex gap-4">
              {[FaFacebookF, FaInstagram, FaLinkedinIn].map((Icon, i) => (
                <a key={i} href="#" className="w-12 h-12 flex items-center justify-center bg-white/[0.03] border border-white/10 rounded-2xl hover:bg-gradient-to-br hover:from-cyan-400 hover:to-blue-600 hover:border-transparent hover:text-[#02040A] text-slate-300 transition-all duration-300 shadow-lg hover:shadow-[0_10px_20px_rgba(34,211,238,0.3)] hover:-translate-y-1">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* ================= COPYRIGHT ================= */}
        <div className="border-t border-white/5 bg-[#010205] py-8 text-center relative z-10">
          <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-slate-600">
            © {new Date().getFullYear()} National Auto. Engineered for Excellence.
          </p>
        </div>
      </footer>

      {/* ================= FLOATING BUTTONS ================= */}
      
      {/* WhatsApp Button */}
      <div className="fixed bottom-6 left-6 md:bottom-8 md:left-8 z-50">
        <a 
          href="https://wa.me/919198090051" 
          target="_blank" 
          rel="noreferrer" 
          className="group flex items-center justify-center w-14 h-14 bg-gradient-to-tr from-emerald-500 to-green-400 text-[#02040A] rounded-full shadow-[0_10px_30px_rgba(34,197,94,0.4)] hover:scale-110 hover:shadow-[0_15px_40px_rgba(34,197,94,0.6)] transition-all duration-300 relative"
        >
          <div className="absolute inset-0 rounded-full border border-white/20 group-hover:animate-ping opacity-0 group-hover:opacity-100 transition-opacity" />
          <FaWhatsapp size={28} className="relative z-10" />
        </a>
      </div>

      {/* Scroll to Top */}
      <div className={`fixed bottom-6 right-6 md:bottom-8 md:right-8 z-50 transition-all duration-500 ease-[0.22,1,0.36,1] ${showTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12 pointer-events-none'}`}>
        <button 
          onClick={scrollToTop} 
          className="group flex items-center justify-center w-12 h-12 bg-[#050A15]/80 backdrop-blur-xl border border-white/10 text-slate-300 rounded-full shadow-[0_10px_30px_rgba(0,0,0,0.5)] hover:bg-cyan-500 hover:border-cyan-400 hover:text-[#02040A] hover:scale-110 transition-all duration-300"
        >
          <FaArrowUp size={16} className="group-hover:-translate-y-1 transition-transform duration-300" />
        </button>
      </div>
    </>
  );
}