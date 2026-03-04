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
          <span className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-bold text-cyan-400 uppercase tracking-[0.25em] backdrop-blur-md">
            <FaImages size={14} /> The Visual Experience
          </span>
          <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter mb-6">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Gallery</span>
          </h1>
          <p className="text-lg text-slate-400 font-light max-w-2xl mx-auto">
            A glimpse into the National Auto universe. Witness our premium showroom, elite service center, and adrenaline-pumping events.
          </p>
        </motion.div>
      </motion.section>

      {/* ===== IMAGE GRID ===== */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-24 relative">
        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={stagger}
        >
          {images.map((img, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className="group relative cursor-pointer overflow-hidden rounded-[2rem] bg-white/[0.02] border border-white/5 p-1 transition-all duration-500 hover:border-cyan-500/30 hover:shadow-[0_0_30px_rgba(34,211,238,0.15)]"
              onClick={() => setSelectedImg(img)}
            >
              <div className="relative w-full h-72 overflow-hidden rounded-[1.8rem]">
                <div className="absolute inset-0 bg-blue-900/20 group-hover:bg-transparent transition-colors z-10 duration-500" />
                <img
                  src={img}
                  alt={`Gallery ${i + 1}`}
                  className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700 ease-out"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* ===== LIGHTBOX MODAL ===== */}
        <AnimatePresence>
          {selectedImg && (
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-[#030712]/90 backdrop-blur-xl flex items-center justify-center z-[100] p-4"
              onClick={() => setSelectedImg(null)}
            >
              <button className="absolute top-6 right-6 text-slate-400 hover:text-white bg-white/5 p-3 rounded-full backdrop-blur-md transition-colors">
                <FaTimes size={24} />
              </button>
              <motion.img
                initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }} transition={{ type: "spring", damping: 25 }}
                src={selectedImg}
                alt="Selected"
                className="max-h-[90vh] max-w-full rounded-2xl shadow-[0_0_50px_rgba(0,0,0,0.8)] border border-white/10"
                onClick={(e) => e.stopPropagation()} 
              />
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      {/* ===== VIDEO SECTION ===== */}
      <section className="bg-[#050B14] py-24 border-t border-white/5 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-blue-600/10 blur-[150px] rounded-full pointer-events-none" />
        
        <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
          <FaPlayCircle className="text-cyan-400 text-5xl mx-auto mb-6 shadow-cyan-500/50 drop-shadow-[0_0_15px_rgba(34,211,238,0.5)]" />
          <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight mb-12">
            Launch Event <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-400 to-slate-200">Highlights</span>
          </h2>
          
          <div className="relative p-2 rounded-[2rem] bg-gradient-to-b from-white/10 to-transparent shadow-[0_0_40px_rgba(0,0,0,0.5)]">
            <div className="aspect-video rounded-3xl overflow-hidden bg-black relative z-10">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/wpevk_mc_TY"
                title="Bike Launch Event"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}