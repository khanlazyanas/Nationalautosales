import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { FaPlayCircle, FaImages, FaTimes } from "react-icons/fa";

// Tumhare apne image paths
import showroom1 from "../assets/nationalshowroom.jpg";
import showroom2 from "../assets/nationalshowroom.jpg";
import event1 from "../assets/nationalshowroom.jpg";
import event2 from "../assets/nationalbajajemployeeimage.jpg";
import service1 from "../assets/servicecenter2.jpg";
import service2 from "../assets/servicecenter1.jpg";

export default function Gallery() {
  const images = [showroom1, showroom2, event1, event2, service1, service2];
  const [selectedImg, setSelectedImg] = useState(null);

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
        className="fixed top-1/4 right-1/4 w-[600px] h-[600px] bg-cyan-600/10 blur-[150px] rounded-full pointer-events-none mix-blend-screen" 
      />

      {/* ===== HERO SECTION ===== */}
      <motion.section 
        initial="hidden" animate="visible" variants={stagger}
        className="relative pt-40 pb-24 px-6 text-center border-b border-white/5 z-10"
      >
        <motion.div variants={fadeUp} className="relative max-w-4xl mx-auto flex flex-col items-center">
          <span className="inline-flex items-center gap-2 px-5 py-2 mb-8 rounded-full bg-white/[0.03] border border-white/5 text-[11px] font-bold text-cyan-400 uppercase tracking-[0.25em] backdrop-blur-2xl shadow-[0_4px_24px_rgba(0,0,0,0.4)]">
            <FaImages size={12} className="text-cyan-400" /> The Visual Experience
          </span>
          <h1 className="text-6xl md:text-[5.5rem] font-black text-white tracking-tighter mb-6 leading-[0.9]">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 drop-shadow-[0_0_20px_rgba(34,211,238,0.3)]">Gallery</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-400 font-light max-w-2xl mx-auto leading-relaxed">
            A glimpse into the National Auto universe. Witness our premium showroom, elite service center, and adrenaline-pumping events.
          </p>
        </motion.div>
      </motion.section>

      {/* ===== IMAGE GRID (BENTO STYLE) ===== */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-32 relative z-10">
        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={stagger}
        >
          {images.map((img, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className="group relative cursor-pointer overflow-hidden rounded-[2.5rem] bg-gradient-to-b from-white/[0.05] to-transparent border border-white/5 p-[2px] transition-all duration-700 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.5)]"
              onClick={() => setSelectedImg(img)}
            >
              <div className="relative w-full h-80 overflow-hidden rounded-[2.4rem] bg-[#02040A]">
                {/* Spotlight Hover */}
                <div className="absolute inset-0 bg-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10 pointer-events-none mix-blend-overlay" />
                
                <img
                  src={img}
                  alt={`Gallery ${i + 1}`}
                  className="w-full h-full object-cover grayscale-[40%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000 ease-[0.22,1,0.36,1]"
                />
                
                {/* Expand Icon Hint */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20">
                  <div className="w-12 h-12 rounded-full bg-black/40 backdrop-blur-md border border-white/20 flex items-center justify-center shadow-2xl">
                    <span className="text-white text-xl font-light">+</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* ===== LIGHTBOX MODAL ===== */}
        <AnimatePresence>
          {selectedImg && (
            <motion.div
              initial={{ opacity: 0, backdropFilter: "blur(0px)" }} 
              animate={{ opacity: 1, backdropFilter: "blur(24px)" }} 
              exit={{ opacity: 0, backdropFilter: "blur(0px)" }} 
              transition={{ duration: 0.5, ease: customEase }}
              className="fixed inset-0 bg-[#02040A]/80 flex items-center justify-center z-[100] p-4 lg:p-12"
              onClick={() => setSelectedImg(null)}
            >
              <button className="absolute top-6 right-6 md:top-10 md:right-10 text-slate-400 hover:text-white bg-white/5 hover:bg-white/10 p-4 rounded-full backdrop-blur-md transition-all duration-300 z-50">
                <FaTimes size={20} />
              </button>
              
              <motion.div
                initial={{ scale: 0.9, y: 20, opacity: 0 }} 
                animate={{ scale: 1, y: 0, opacity: 1 }} 
                exit={{ scale: 0.95, y: 10, opacity: 0 }} 
                transition={{ duration: 0.6, ease: customEase }}
                className="relative max-h-[90vh] max-w-full rounded-[2rem] overflow-hidden shadow-[0_0_80px_rgba(0,0,0,0.8)] border border-white/10"
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={selectedImg}
                  alt="Selected"
                  className="w-auto h-auto max-h-[90vh] max-w-full object-contain rounded-[2rem]"
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      {/* ===== CINEMATIC VIDEO SECTION ===== */}
      <section className="py-32 relative overflow-hidden z-10 border-t border-white/5 bg-[#02040A]">
        {/* Ambient Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-cyan-600/5 blur-[150px] rounded-full pointer-events-none mix-blend-screen" />
        
        <div className="max-w-6xl mx-auto px-6 text-center relative z-10 flex flex-col items-center">
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.8, ease: customEase }}
            className="w-20 h-20 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-[1.5rem] flex items-center justify-center border border-cyan-500/20 mb-8 shadow-[0_0_40px_rgba(34,211,238,0.15)] backdrop-blur-xl"
          >
            <FaPlayCircle className="text-cyan-400 text-3xl drop-shadow-[0_0_15px_rgba(34,211,238,0.5)] pl-1" />
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-16">
            Launch Event <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-400 to-slate-200">Highlights</span>
          </h2>
          
          {/* Premium Video Frame */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1, ease: customEase }}
            className="w-full relative p-[2px] rounded-[2.5rem] bg-gradient-to-b from-white/15 via-white/5 to-transparent shadow-[0_30px_60px_rgba(0,0,0,0.6)]"
          >
            <div className="aspect-video rounded-[2.4rem] overflow-hidden bg-[#050A15] relative z-10">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/wpevk_mc_TY"
                title="Bike Launch Event"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            {/* Soft Glow Under Video */}
            <div className="absolute -inset-4 bg-cyan-500/10 blur-[40px] -z-10 rounded-[3rem] opacity-50" />
          </motion.div>
        </div>
      </section>
      
    </div>
  );
}