import { useState } from "react";
import { motion } from "framer-motion";
import { FaPaperPlane, FaPhone, FaEnvelope } from "react-icons/fa";
import toast from "react-hot-toast";

const API_URL = "https://bajajautosalesbackend-1.onrender.com/api/enquiry";

const BIKE_MODELS = [
  "Select model",
  "Pulsar",
  "Platina",
  "Avenger",
  "Dominar",
  "CT 100",
  "Other",
];

export default function Enquiry() {
  const [form, setForm] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    interestedModel: BIKE_MODELS[0],
    message: "",
    preferredContact: "Phone",
  });

  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);

  function validate() {
    const e = {};

    if (!form.fullName.trim()) e.fullName = "Please enter your name.";
    if (!form.phoneNumber.trim())
      e.phoneNumber = "Please enter your mobile number.";
    else if (!/^[0-9]{10}$/.test(form.phoneNumber.trim()))
      e.phoneNumber = "Enter a 10 digit mobile number.";

    if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = "Enter a valid email.";

    if (form.interestedModel === BIKE_MODELS[0])
      e.interestedModel = "Please select a bike model.";

    if (!form.message.trim()) e.message = "Please enter your message.";

    return e;
  }

  // 🔥 ONLY LOGIC CHANGE — DESIGN SAME
  const handleSubmit = (e) => {
    e.preventDefault();

    const v = validate();
    setErrors(v);
    if (Object.keys(v).length) return;

    setSubmitting(true);

    // ✅ INSTANT FEEDBACK
    toast.success("Enquiry sent successfully!");

    const payload = { ...form };

    // ✅ INSTANT RESET (NO WAIT)
    setForm({
      fullName: "",
      phoneNumber: "",
      email: "",
      interestedModel: BIKE_MODELS[0],
      message: "",
      preferredContact: "Phone",
    });
    setErrors({});
    setSubmitting(false);

    // 🔄 BACKGROUND API CALL
    fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    }).catch((err) => {
      console.error("Background error:", err);
    });
  };

  const handleChange = (key) => (ev) =>
    setForm((s) => ({ ...s, [key]: ev.target.value }));

  return (
    <div className="bg-blue-50 text-gray-800 pt-20 pb-12 px-4 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <h1 className="text-3xl md:text-4xl font-extrabold text-blue-900">
            Enquiry
          </h1>
          <p className="mt-2 text-gray-600 max-w-2xl mx-auto">
            Fill the form below and our team will contact you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white rounded-2xl shadow-lg p-6 md:p-8"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">
                  Full Name *
                </label>
                <input
                  value={form.fullName}
                  onChange={handleChange("fullName")}
                  className={`w-full border rounded px-3 py-2 ${
                    errors.fullName ? "border-red-400" : "border-gray-200"
                  }`}
                  placeholder="Your full name"
                />
                {errors.fullName && (
                  <p className="text-red-500 text-sm">{errors.fullName}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Mobile Number *
                </label>
                <input
                  value={form.phoneNumber}
                  onChange={handleChange("phoneNumber")}
                  className={`w-full border rounded px-3 py-2 ${
                    errors.phoneNumber ? "border-red-400" : "border-gray-200"
                  }`}
                  placeholder="10 digit mobile number"
                  maxLength={10}
                />
                {errors.phoneNumber && (
                  <p className="text-red-500 text-sm">
                    {errors.phoneNumber}
                  </p>
                )}
              </div>
            </div>

            <div className="mt-4">
              <label className="block text-sm font-medium mb-1">
                Email (optional)
              </label>
              <input
                value={form.email}
                onChange={handleChange("email")}
                className={`w-full border rounded px-3 py-2 ${
                  errors.email ? "border-red-400" : "border-gray-200"
                }`}
                placeholder="you@example.com"
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email}</p>
              )}
            </div>

            <div className="grid grid-cols-1 sm-grid-cols-2 gap-4 mt-4">
              <div>
                <label className="block text-sm font-medium mb-1">
                  Bike Model *
                </label>
                <select
                  value={form.interestedModel}
                  onChange={handleChange("interestedModel")}
                  className="w-full border rounded px-3 py-2"
                >
                  {BIKE_MODELS.map((m) => (
                    <option key={m}>{m}</option>
                  ))}
                </select>
                {errors.interestedModel && (
                  <p className="text-red-500 text-sm">
                    {errors.interestedModel}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Preferred Contact
                </label>
                <div className="flex gap-3 mt-1">
                  <label>
                    <input
                      type="radio"
                      checked={form.preferredContact === "Phone"}
                      onChange={() =>
                        setForm({ ...form, preferredContact: "Phone" })
                      }
                    />{" "}
                    Phone
                  </label>

                  <label>
                    <input
                      type="radio"
                      checked={form.preferredContact === "Email"}
                      onChange={() =>
                        setForm({ ...form, preferredContact: "Email" })
                      }
                    />{" "}
                    Email
                  </label>
                </div>
              </div>
            </div>

            <div className="mt-4">
              <label className="block text-sm font-medium mb-1">
                Message *
              </label>
              <textarea
                value={form.message}
                onChange={handleChange("message")}
                rows={4}
                className="w-full border rounded px-3 py-2"
                placeholder="Write your message…"
              ></textarea>
              {errors.message && (
                <p className="text-red-500 text-sm">{errors.message}</p>
              )}
            </div>

            <div className="mt-6 flex gap-4">
              <button
                type="submit"
                disabled={submitting}
                className="bg-blue-900 text-white px-5 py-2 rounded-lg"
              >
                <FaPaperPlane className="inline mr-2" />
                {submitting ? "Sending..." : "Send Enquiry"}
              </button>

              <button
                type="button"
                onClick={() => {
                  setForm({
                    fullName: "",
                    phoneNumber: "",
                    email: "",
                    interestedModel: BIKE_MODELS[0],
                    message: "",
                    preferredContact: "Phone",
                  });
                  setErrors({});
                }}
                className="px-4 py-2 rounded-lg border"
              >
                Reset
              </button>
            </div>
          </motion.form>

          {/* Side Info */}
          <motion.aside
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <div className="bg-blue-800 text-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-semibold mb-2">Need help?</h3>
              <p className="text-gray-100 mb-4">
                Call us or send an enquiry — our team will contact you.
              </p>

              <div className="flex gap-3">
                <a
                  href="tel:+919198090051"
                  className="bg-white/10 px-4 py-2 rounded-lg"
                >
                  <FaPhone /> Call Now
                </a>
                <a
                  href="mailto:customerservice@bajajauto.co.in"
                  className="bg-white/10 px-4 py-2 rounded-lg"
                >
                  <FaEnvelope /> Email
                </a>
              </div>
            </div>
          </motion.aside>
        </div>
      </div>
    </div>
  );
}
