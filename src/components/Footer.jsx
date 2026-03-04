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

    // 🔥 Dynamic Day Logic (0 = Sunday, 1 = Monday, ..., 6 = Saturday)
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
      <footer className="bg-[#030712] text-slate-300 font-inter border-t border-white/5 relative overflow-hidden">
        
        {/* Subtle Background Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[100px] bg-blue-600/10 blur-[100px] rounded-full pointer-events-none" />

        {/* Trust Strip */}
        <div className="bg-white/[0.02] border-b border-white/5 relative z-10">
          <div className="max-w-7xl mx-auto px-6 py-4 grid grid-cols-1 md:grid-cols-3 gap-4 text-xs font-bold tracking-widest uppercase text-slate-400 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2"><FaCheckCircle className="text-cyan-400 text-base" /> Authorized Dealer</div>
            <div className="flex items-center justify-center md:justify-start gap-2"><FaMoneyBillWave className="text-cyan-400 text-base" /> Easy Finance</div>
            <div className="flex items-center justify-center md:justify-start gap-2"><FaStar className="text-cyan-400 text-base" /> Premium Service</div>
          </div>
        </div>

        {/* Main Footer */}
        <div className="max-w-7xl mx-auto px-6 py-16 grid lg:grid-cols-4 md:grid-cols-2 gap-12 text-sm relative z-10">
          
          {/* Brand & Contact */}
          <div>
            <h3 className="text-2xl font-black text-white mb-4 tracking-tighter">NATIONAL<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">AUTO</span></h3>
            <p className="mb-6 font-light leading-relaxed text-slate-400">
              Your elite partner for Bajaj machines. Sales, premium service, and genuine spares under one roof.
            </p>
            <div className="space-y-3 font-mono text-xs">
              <a href="tel:+919198090051" className="flex items-center gap-3 hover:text-cyan-400 transition-colors"><FaPhoneAlt className="text-slate-500" /> +91 91980 90051</a>
              <div className="flex items-start gap-3"><FaMapMarkerAlt className="text-slate-500 mt-0.5 text-base shrink-0" /> Ubhaon Road, Belthara Road, Ballia, UP</div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Quick Links</h4>
            <ul className="space-y-3 font-light text-slate-400">
              {['Motorcycle', 'About Us', 'Services', 'Gallery', 'Offers', 'Contact'].map(item => (
                <li key={item}>
                  <Link to={`/${item.toLowerCase().replace(' ', '')}`} className="hover:text-cyan-400 hover:pl-2 transition-all block">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal & Status */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Legal</h4>
            <ul className="space-y-3 font-light text-slate-400 mb-8">
              <li>
                <Link to="/privacy" className="hover:text-cyan-400 hover:pl-2 transition-all block">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/terms" className="hover:text-cyan-400 hover:pl-2 transition-all block">Terms & Conditions</Link>
              </li>
            </ul>

            <h4 className="text-white font-bold mb-4 uppercase tracking-widest text-xs">Showroom Status</h4>
            <div className="space-y-3">
              <p className="flex items-center gap-2 text-slate-400 font-light text-xs"><FaClock className="text-slate-500" /> Sun - Fri: 9:30 AM - 7:00 PM</p>
              
              {/* ✅ DYNAMIC OPEN/CLOSE BADGE */}
              {isClosed ? (
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 font-bold text-[10px] uppercase tracking-widest">
                  <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span> Closed Today (Saturday)
                </div>
              ) : (
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 font-bold text-[10px] uppercase tracking-widest">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span> Open Today
                </div>
              )}
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Connect</h4>
            <div className="flex gap-4">
              {[FaFacebookF, FaInstagram, FaLinkedinIn].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 flex items-center justify-center bg-white/5 border border-white/10 rounded-full hover:bg-cyan-500 hover:border-cyan-400 hover:text-[#030712] transition-all shadow-lg">
                  <Icon />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/5 bg-[#010308] py-6 text-center">
          <p className="text-[10px] font-bold tracking-widest uppercase text-slate-600">
            © {new Date().getFullYear()} National Auto. All Rights Reserved.
          </p>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-6 left-6 z-50">
        <a href="https://wa.me/919198090051" target="_blank" rel="noreferrer" className="flex items-center justify-center w-14 h-14 bg-gradient-to-tr from-green-600 to-green-400 text-white rounded-full shadow-[0_0_20px_rgba(34,197,94,0.4)] hover:scale-110 hover:shadow-[0_0_30px_rgba(34,197,94,0.6)] transition-all">
          <FaWhatsapp size={28} />
        </a>
      </div>

      {/* Scroll to Top */}
      <div className={`fixed bottom-6 right-6 z-50 transition-all duration-500 ${showTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}`}>
        <button onClick={scrollToTop} className="flex items-center justify-center w-12 h-12 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-full shadow-[0_0_20px_rgba(0,0,0,0.5)] hover:bg-cyan-500 hover:border-cyan-400 hover:text-[#030712] transition-all">
          <FaArrowUp size={20} />
        </button>
      </div>
    </>
  );
}