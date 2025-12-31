import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaDownload, FaGift, FaPercentage, FaMoneyCheckAlt } from "react-icons/fa";

export default function Offers() {
  const offers = [
    {
      icon: <FaGift className="text-4xl text-yellow-400 mb-4" />,
      title: "Festive Discount",
      desc: "Flat ₹5,000 off on all Pulsar models this Diwali season.",
    },
    {
      icon: <FaPercentage className="text-4xl text-yellow-400 mb-4" />,
      title: "Zero% Finance",
      desc: "0% interest finance schemes on select models.",
    },
    {
      icon: <FaMoneyCheckAlt className="text-4xl text-yellow-400 mb-4" />,
      title: "Easy EMI",
      desc: "Flexible EMI starting at just ₹2,000/month.",
    },
  ];

  const [price, setPrice] = useState("");
  const [downPayment, setDownPayment] = useState("");
  const [months, setMonths] = useState("");
  const [emi, setEmi] = useState(null);

  const calculateEMI = () => {
    const interestRate = 0.1; // 10% annual
    const principal = Number(price) - Number(downPayment);

    if (principal <= 0 || months <= 0) {
      setEmi("Invalid input");
      return;
    }

    const totalInterest = principal * interestRate * (months / 12);
    const totalAmount = principal + totalInterest;
    const monthlyEmi = totalAmount / months;

    setEmi(monthlyEmi.toFixed(2));
  };

  // Animation variants
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="bg-blue-50 text-gray-800">
      {/* ===== Hero Section ===== */}
      <section className="relative bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 text-white py-24 text-center overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-5xl mx-auto px-6"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 animate-fadeIn">
            Latest Offers & Promotions
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto animate-fadeIn delay-200">
            Don’t miss out on our exciting discounts, finance schemes and festive deals!
          </p>
        </motion.div>
      </section>

      {/* ===== Offers Grid ===== */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-20">
        <motion.div
          className="grid sm:grid-cols-1 md:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
        >
          {offers.map((offer, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className="bg-white rounded-2xl p-10 shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2 text-center cursor-pointer"
              whileHover={{ scale: 1.05 }}
            >
              {offer.icon}
              <h3 className="text-2xl font-semibold text-blue-900 mb-3">{offer.title}</h3>
              <p className="text-gray-700">{offer.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ===== EMI Calculator ===== */}
      <section className="bg-blue-100 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto px-6 text-center"
        >
          <h2 className="text-3xl font-bold text-blue-900 mb-8">
            Finance EMI Calculator
          </h2>
          <p className="mb-8 text-gray-700">
            Check your estimated monthly EMI before booking.
          </p>

          <div className="bg-white rounded-2xl p-10 shadow-lg max-w-md mx-auto">
            <label className="block mb-2 font-semibold">Bike Price (₹)</label>
            <input
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="w-full border p-3 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="e.g. 100000"
            />

            <label className="block mb-2 font-semibold">Down Payment (₹)</label>
            <input
              type="number"
              value={downPayment}
              onChange={(e) => setDownPayment(e.target.value)}
              className="w-full border p-3 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="e.g. 20000"
            />

            <label className="block mb-2 font-semibold">Tenure (Months)</label>
            <input
              type="number"
              value={months}
              onChange={(e) => setMonths(e.target.value)}
              className="w-full border p-3 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="e.g. 24"
            />

            <button
              onClick={calculateEMI}
              className="w-full bg-yellow-400 text-blue-900 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-500 transition"
            >
              Calculate EMI
            </button>

            <AnimatePresence>
              {emi && (
                <motion.p
                  className={`mt-6 text-xl font-bold ${
                    emi === "Invalid input" ? "text-red-500" : "text-blue-900"
                  }`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  {emi === "Invalid input"
                    ? "⚠️ Please enter valid values"
                    : `Estimated Monthly EMI: ₹${emi}`}
                </motion.p>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </section>

      {/* ===== Brochure Download ===== */}
      <section className="bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-400 text-blue-900 text-center py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
            Download Our Latest Offers Brochure
          </h2>
          <p className="text-lg mb-6 max-w-xl mx-auto">
            Get detailed information about all our ongoing promotions and finance schemes.
          </p>
          <a
            href="/brochure.pdf"
            download
            className="inline-flex items-center gap-3 bg-blue-900 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-800 transition text-lg"
          >
            <FaDownload className="text-xl" /> Download Brochure
          </a>
        </motion.div>
      </section>
    </div>
  );
}
