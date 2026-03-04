import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { FaMotorcycle, FaBolt } from "react-icons/fa";

export default function SplashScreen() {
  const [progress, setProgress] = useState(0);
  const [show, setShow] = useState(true);

  useEffect(() => {
    // Advanced non-linear fake loading (Fast then slow, then fast)
    let currentProgress = 0;
    const interval = setInterval(() => {
      const increment = Math.random() > 0.5 ? 4 : 1; 
      currentProgress += increment;

      if (currentProgress >= 100) {
        currentProgress = 100;
        setProgress(100);
        clearInterval(interval);
        setTimeout(() => setShow(false), 800); // Wait at 100% for impact before fade
      } else {
        setProgress(currentProgress);
      }
    }, 40);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 flex flex-col items-center justify-center bg-[#030712] text-white z-[9999] overflow-hidden font-inter"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05, filter: "blur(10px)" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          
          {/* ================= BACKGROUND EFFECTS ================= */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-[#030712] to-[#030712] pointer-events-none" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:40px_40px] opacity-20" />

          {/* Rotating Cyber Orbs */}
          <motion.div
            className="absolute w-[800px] h-[800px] rounded-full border border-white/5 border-dashed"
            animate={{ rotate: 360 }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="absolute w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[100px]"
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* ================= CENTER CONTENT ================= */}
          <div className="relative z-20 flex flex-col items-center">
            
            {/* Pulsing Icon */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring", damping: 15, delay: 0.2 }}
              className="relative w-24 h-24 mb-8 flex items-center justify-center"
            >
              <div className="absolute inset-0 bg-cyan-500/20 rounded-full blur-xl animate-pulse" />
              <div className="relative w-16 h-16 bg-[#050B14] border border-cyan-500/30 rounded-2xl flex items-center justify-center shadow-[0_0_30px_rgba(34,211,238,0.3)]">
                <FaMotorcycle className="text-cyan-400 text-3xl" />
              </div>
            </motion.div>

            {/* Brand Name */}
            <motion.div
              className="flex items-center gap-1 overflow-hidden"
              initial="hidden" animate="visible"
              variants={{
                visible: { transition: { staggerChildren: 0.1, delayChildren: 0.5 } }
              }}
            >
              <span className="text-3xl md:text-5xl font-black tracking-widest text-white uppercase drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]">
                National
              </span>
              <span className="text-3xl md:text-5xl font-black tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 drop-shadow-[0_0_20px_rgba(34,211,238,0.5)]">
                Auto
              </span>
            </motion.div>

            {/* Subtitle */}
            <motion.p
              className="mt-4 flex items-center gap-2 text-[10px] md:text-xs text-slate-500 font-bold tracking-[0.4em] uppercase"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.8 }}
            >
              <FaBolt className="text-cyan-400" /> Authorized Elite Dealership
            </motion.p>
          </div>

          {/* ================= LOADER SYSTEM ================= */}
          <motion.div 
            className="absolute bottom-20 left-1/2 -translate-x-1/2 w-64 md:w-80 flex flex-col items-center gap-4"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}
          >
            {/* System Status Text */}
            <div className="flex justify-between w-full text-[9px] font-mono tracking-widest uppercase font-bold">
              <span className="text-slate-500">System Boot</span>
              <span className="text-cyan-400 drop-shadow-[0_0_5px_rgba(34,211,238,0.8)]">{Math.round(progress)}%</span>
            </div>

            {/* Loading Bar Container */}
            <div className="relative w-full h-1 bg-white/5 rounded-full overflow-hidden">
              {/* Actual Progress */}
              <motion.div
                className="absolute top-0 left-0 h-full bg-gradient-to-r from-blue-600 via-cyan-400 to-white shadow-[0_0_15px_rgba(34,211,238,0.8)] rounded-full"
                style={{ width: `${progress}%` }}
                layout
              />
              {/* Shimmer Effect over progress */}
              <motion.div
                className="absolute top-0 left-0 h-full w-[20%] bg-gradient-to-r from-transparent via-white/50 to-transparent"
                animate={{ left: ["-20%", "120%"] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
              />
            </div>

            {/* Micro Details */}
            <p className="text-[8px] font-mono text-slate-600 tracking-widest mt-2 uppercase opacity-50">
              {progress < 40 ? "Loading Assets..." : progress < 80 ? "Initializing Telemetry..." : "Ignition Sequence Ready"}
            </p>
          </motion.div>

        </motion.div>
      )}
    </AnimatePresence>
  );
}