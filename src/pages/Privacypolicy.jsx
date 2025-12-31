import { motion, useScroll } from "framer-motion";

export default function PrivacyPolicy() {
  const { scrollYProgress } = useScroll();

  const sections = [
    {
      title: "Information We Collect",
      text:
        "We collect personal information including name, contact details, and enquiry-related data when you interact with our website, showroom, or customer support channels.",
    },
    {
      title: "Purpose of Data Usage",
      text:
        "Your information is used to process requests, improve services, communicate updates, and provide personalized offers.",
    },
    {
      title: "Data Protection & Security",
      text:
        "Industry-standard technical and organizational safeguards are implemented to protect your personal data from unauthorized access.",
    },
    {
      title: "Information Sharing",
      text:
        "We do not sell personal data. Limited sharing may occur with authorized service partners or regulatory authorities when legally required.",
    },
    {
      title: "Policy Updates",
      text:
        "This policy may be revised periodically. Continued use of our services implies acceptance of any updates.",
    },
  ];

  return (
    <main className="bg-slate-50 min-h-screen relative">
      {/* Scroll Indicator */}
      <motion.div
        style={{ scaleX: scrollYProgress }}
        className="fixed top-0 left-0 right-0 h-1 bg-yellow-400 origin-left z-50"
      />

      {/* HERO */}
      <section className="relative pt-36 pb-28 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700">
        <div className="absolute inset-0 bg-black/10" />

        <div className="relative max-w-6xl mx-auto px-6 text-white">
          <p className="text-sm text-blue-200 mb-4">
            Home / Legal / <span className="text-yellow-400">Privacy Policy</span>
          </p>

          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold tracking-tight mb-6"
          >
            Privacy Policy
          </motion.h1>

          <p className="max-w-3xl text-lg text-blue-100 leading-relaxed">
            At National Auto Sales, transparency and trust guide how we collect,
            use, and safeguard your personal information.
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="-mt-20 pb-28 px-6">
        <div className="max-w-6xl mx-auto bg-white rounded-[32px] shadow-2xl p-8 md:p-16">
          <div className="space-y-14">
            {sections.map((sec, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.12 }}
                className="relative pl-16"
              >
                {/* Accent Line */}
                <span className="absolute left-0 top-2 h-full w-1 bg-gradient-to-b from-yellow-400 to-blue-900 rounded-full" />

                {/* Number Badge FIXED */}
                <span className="absolute -left-6 top-4 z-10 w-12 h-12 rounded-full 
                  bg-blue-900 text-white flex items-center justify-center 
                  font-semibold shadow-xl ring-4 ring-white">
                  {index + 1}
                </span>

                <h2 className="text-xl md:text-2xl font-semibold text-blue-900 mb-3">
                  {sec.title}
                </h2>
                <p className="text-gray-700 leading-loose">{sec.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
