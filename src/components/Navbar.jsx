import { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const links = [
    { name: "Fleet", to: "/motorcycle" },
    { name: "Services", to: "/services" },
    { name: "Offers", to: "/offers" },
    { name: "Gallery", to: "/gallery" },
    { name: "About", to: "/about" },
    { name: "Contact", to: "/contact" },
  ];

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    const handleScroll = () => setScrolled(window.scrollY > 30);
    handleResize();
    handleScroll();
    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "auto";
  }, [isOpen]);

  const navVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 90, damping: 20 } }
  };

  return (
    <>
      <motion.nav
        variants={navVariants}
        initial="hidden"
        animate="visible"
        className={`fixed top-0 left-0 w-full z-[100] transition-all duration-700 border-b ${
          scrolled
            ? "bg-[#030712]/70 backdrop-blur-2xl border-white/10 shadow-[0_10px_40px_rgba(0,0,0,0.8)] py-3"
            : "bg-transparent border-transparent py-6"
        }`}
      >
        <div className="max-w-[90rem] mx-auto px-6 lg:px-12 flex items-center justify-between">
          
          {/* ================= ULTRA-PREMIUM LOGO ================= */}
          <Link to="/" onClick={() => setIsOpen(false)} className="group relative z-50 flex flex-col items-start">
            <h1 className="text-2xl lg:text-[28px] font-black tracking-tighter text-white transition-colors duration-500 drop-shadow-lg flex items-center">
              NATIONAL
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 drop-shadow-[0_0_20px_rgba(34,211,238,0.5)] ml-1">
                AUTO
              </span>
            </h1>
            <div className="flex items-center gap-2 mt-1 opacity-80 group-hover:opacity-100 transition-opacity">
              <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_10px_rgba(34,211,238,0.8)]" />
              <p className="text-[8px] tracking-[0.3em] text-slate-400 uppercase font-bold">
                Authorized Bajaj Elite
              </p>
            </div>
          </Link>

          {/* ================= DESKTOP MAGNETIC LINKS ================= */}
          {!isMobile && (
            <div className="hidden lg:flex items-center gap-2 bg-white/[0.03] border border-white/5 px-2 py-1.5 rounded-full backdrop-blur-md">
              {links.map((link) => {
                const isActive = location.pathname === link.to;
                return (
                  <Link
                    key={link.name}
                    to={link.to}
                    className="relative px-5 py-2 rounded-full group transition-all"
                  >
                    {isActive && (
                      <motion.div
                        layoutId="desktopNavIndicator"
                        className="absolute inset-0 bg-white/10 border border-white/10 rounded-full"
                        transition={{ type: "spring", stiffness: 150, damping: 25 }}
                      />
                    )}
                    <span className={`relative z-10 text-[11px] font-bold uppercase tracking-[0.2em] transition-colors duration-300 ${
                      isActive ? "text-cyan-400 drop-shadow-[0_0_8px_rgba(34,211,238,0.5)]" : "text-slate-400 group-hover:text-white"
                    }`}>
                      {link.name}
                    </span>
                  </Link>
                );
              })}
            </div>
          )}

          {/* ================= DESKTOP CTA ================= */}
          {!isMobile && (
            <div className="hidden lg:block">
              <Link
                to="/enquiry"
                className="group relative inline-flex items-center justify-center px-8 py-3 bg-transparent border border-cyan-500/50 text-cyan-400 font-bold uppercase tracking-[0.15em] text-[10px] rounded-full overflow-hidden transition-all duration-500 hover:border-cyan-400 hover:shadow-[0_0_30px_rgba(34,211,238,0.3)] active:scale-95"
              >
                <span className="absolute inset-0 bg-cyan-400/10 group-hover:bg-cyan-400/20 transition-colors" />
                <span className="relative z-10 flex items-center gap-2">
                  Book Test Ride
                  <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 group-hover:shadow-[0_0_10px_rgba(34,211,238,1)]" />
                </span>
              </Link>
            </div>
          )}

          {/* ================= MOBILE HAMBURGER ================= */}
          {isMobile && (
            <button
              onClick={() => setIsOpen(true)}
              className="text-cyan-400 text-xl p-3 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 hover:bg-cyan-500/20 transition-colors z-50 backdrop-blur-md active:scale-90"
            >
              <FaBars />
            </button>
          )}
        </div>
      </motion.nav>

      {/* ================= MOBILE MENU (COMMAND CENTER) ================= */}
      <AnimatePresence>
        {isMobile && isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="fixed inset-0 bg-[#030712]/80 backdrop-blur-xl z-[90]"
              onClick={() => setIsOpen(false)}
            />
            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 80, damping: 20 }}
              className="fixed top-0 right-0 h-[100dvh] w-[85%] max-w-[350px] bg-gradient-to-b from-[#050B14] to-[#0A1222] border-l border-white/10 shadow-[-20px_0_50px_rgba(0,0,0,0.8)] z-[100] flex flex-col"
            >
              {/* Background Glow */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 blur-[80px] rounded-full pointer-events-none" />

              <div className="flex items-center justify-between p-8 border-b border-white/5 relative z-10">
                <span className="text-xs font-black text-cyan-400 tracking-[0.3em] uppercase flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse" /> Menu
                </span>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-slate-400 hover:text-white p-3 bg-white/5 border border-white/10 rounded-full transition-all active:scale-90"
                >
                  <FaTimes size={16} />
                </button>
              </div>
              
              <div className="flex-1 overflow-y-auto px-6 py-10 flex flex-col gap-2 relative z-10">
                {links.map((link, i) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1, duration: 0.5, ease: "easeOut" }}
                  >
                    <NavLink
                      to={link.to}
                      onClick={() => setIsOpen(false)}
                      className={({ isActive }) =>
                        `block text-lg font-black uppercase tracking-[0.1em] p-5 rounded-2xl transition-all duration-300 ${
                          isActive 
                            ? "bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 shadow-[0_0_20px_rgba(34,211,238,0.1)]" 
                            : "text-slate-500 border border-transparent hover:bg-white/5 hover:text-slate-200"
                        }`
                      }
                    >
                      {link.name}
                    </NavLink>
                  </motion.div>
                ))}
              </div>

              <div className="p-8 border-t border-white/5 relative z-10 bg-black/20">
                <Link
                  to="/enquiry"
                  onClick={() => setIsOpen(false)}
                  className="relative flex justify-center items-center w-full py-5 rounded-2xl bg-cyan-400 text-[#030712] font-black uppercase tracking-[0.2em] text-sm shadow-[0_0_30px_rgba(34,211,238,0.4)] active:scale-95 transition-transform overflow-hidden"
                >
                  <span className="relative z-10">Book Test Ride</span>
                </Link>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}