import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function SplashScreen() {
  const [progress, setProgress] = useState(0);
  const [show, setShow] = useState(true);

  useEffect(() => {
    // Smooth fake loading progress
    const interval = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          clearInterval(interval);
          setTimeout(() => setShow(false), 600); // fade out just after complete
          return 100;
        }
        return p + 1.5; // speed control
      });
    }, 60);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-[#020617] via-[#0f172a] to-[#1e3a8a] text-white z-[9999] overflow-hidden"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          {/* 🌌 Animated Glowing Background */}
          <motion.div
            className="absolute w-[900px] h-[900px] bg-blue-500/15 rounded-full blur-3xl"
            animate={{
              x: [0, 60, -60, 0],
              y: [0, 40, -40, 0],
              opacity: [0.3, 0.6, 0.4, 0.5],
            }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute w-[650px] h-[650px] bg-yellow-400/10 rounded-full blur-[100px]"
            animate={{
              x: [0, -80, 80, 0],
              y: [0, -60, 60, 0],
              opacity: [0.2, 0.4, 0.3, 0.2],
            }}
            transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* ⚡ Center Text */}
          <motion.div
            className="relative z-20 text-center"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <motion.h1
              className="text-6xl md:text-7xl font-extrabold tracking-[0.25em] uppercase bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(255,255,0,0.4)]"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, delay: 0.5 }}
            >
              Bajaj Auto
            </motion.h1>

            <motion.p
              className="mt-3 text-gray-300 text-sm md:text-base tracking-[0.35em] uppercase font-light"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.3 }}
            >
              Power • Precision • Passion
            </motion.p>
          </motion.div>

          {/* 🔥 Percentage Counter */}
          <motion.div
            className="mt-12 relative z-20 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.8 }}
          >
            <motion.span
              className="text-yellow-400 font-semibold text-xl tracking-widest"
              key={progress}
            >
              {Math.round(progress)}%
            </motion.span>
          </motion.div>

          {/* 🔶 Progress Line */}
          <motion.div
            className="mt-4 w-72 h-[3px] bg-white/10 overflow-hidden rounded-full relative z-20 shadow-[0_0_10px_rgba(255,255,255,0.15)]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2 }}
          >
            <motion.div
              className="absolute left-0 top-0 h-full bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500 rounded-full shadow-[0_0_15px_rgba(255,255,0,0.5)]"
              style={{ width: `${progress}%` }}
            />
          </motion.div>

          {/* ✨ Shimmer Beam Overlay */}
          <motion.div
            className="absolute bottom-20 w-72 h-[2px] bg-gradient-to-r from-transparent via-yellow-300 to-transparent rounded-full z-10 overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.2 }}
          >
            <motion.div
              className="absolute left-0 top-0 h-full w-1/3 bg-gradient-to-r from-yellow-200 to-yellow-500"
              animate={{ x: ["-60%", "160%"] }}
              transition={{
                duration: 2.4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.div>

          {/* 🌙 Final Fade Overlay */}
          <motion.div
            className="absolute inset-0 bg-blue-950/40 backdrop-blur-[2px]"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.4, 0.2, 0] }}
            transition={{ duration: 3, delay: 1.5 }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
