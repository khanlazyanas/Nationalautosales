import { motion, useScroll } from "framer-motion";

export default function TermsAndConditions() {
  const { scrollYProgress } = useScroll();

  const sections = [
    { title: "Acceptance of Terms", text: "By accessing or using our website, products, or services, you agree to comply with these Terms and Conditions." },
    { title: "Authorized Services", text: "National Auto Sales is an authorized Bajaj dealership offering vehicle sales, servicing, finance assistance, and related services." },
    { title: "Payments & Transactions", text: "Payments must be completed only through authorized channels. We are not liable for unauthorized or fraudulent transactions." },
    { title: "Limitation of Liability", text: "We shall not be liable for indirect or consequential damages arising from the use of our services or website." },
    { title: "Revisions to Terms", text: "These terms may be updated periodically. Continued usage constitutes acceptance of the revised terms." },
  ];

  return (
    <main className="bg-[#030712] text-slate-300 font-inter min-h-screen relative selection:bg-cyan-500/30">
      <motion.div style={{ scaleX: scrollYProgress }} className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-cyan-400 origin-left z-50 shadow-[0_0_10px_rgba(34,211,238,0.8)]" />

      <section className="relative pt-40 pb-28 px-6 border-b border-white/5 text-center">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/10 via-[#030712] to-[#030712] pointer-events-none" />
        <div className="relative max-w-4xl mx-auto z-10">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500 mb-4">
            Legal / <span className="text-cyan-400">Terms & Conditions</span>
          </p>
          <h1 className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-6">
            Terms of <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-400 to-slate-200">Service</span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-slate-400 font-light leading-relaxed">
            These terms govern your access to and use of National Auto Sales’ digital and physical infrastructure.
          </p>
        </div>
      </section>

      <section className="py-24 px-6 relative">
        <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-blue-600/5 blur-[120px] rounded-full pointer-events-none -translate-y-1/2" />
        <div className="max-w-4xl mx-auto bg-white/[0.02] border border-white/5 rounded-[2rem] shadow-2xl p-8 md:p-16 backdrop-blur-md relative z-10">
          <div className="space-y-16">
            {sections.map((sec, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} className="relative pl-12 md:pl-16 group">
                {/* Glowing Line */}
                <span className="absolute left-4 top-10 bottom-[-4rem] w-px bg-white/10 group-last:hidden" />
                {/* Neon Number Badge */}
                <span className="absolute left-0 top-0 z-10 w-8 h-8 rounded-full bg-[#030712] border border-cyan-500/50 text-cyan-400 flex items-center justify-center font-bold text-sm shadow-[0_0_15px_rgba(34,211,238,0.2)]">
                  {index + 1}
                </span>
                <h2 className="text-xl md:text-2xl font-bold text-white mb-3 tracking-wide">{sec.title}</h2>
                <p className="text-slate-400 font-light leading-relaxed text-sm md:text-base">{sec.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}