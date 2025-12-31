import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaCalendarAlt, FaMotorcycle, FaCheckCircle, FaTimes } from "react-icons/fa";

const API_URL = "https://bajajautosalesbackend-1.onrender.com/api/service/book-service";

export default function BookService() {

  // 🔥 ONLY FIX — PAGE OPENS FROM TOP
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    model: "",
    serviceType: "",
    date: "",
    pickup: "No",
    notes: "",
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  function validate() {
    const e = {};
    if (!form.name.trim()) e.name = "Please enter your name.";
    if (!form.phone.trim()) e.phone = "Please enter your mobile number.";
    else if (!/^[0-9]{10}$/.test(form.phone))
      e.phone = "Enter a valid 10-digit number.";
    if (!form.model.trim()) e.model = "Please select a bike model.";
    if (!form.serviceType.trim())
      e.serviceType = "Please select a service type.";
    if (!form.date.trim()) e.date = "Please choose a date.";
    return e;
  }

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const eObj = validate();
    setErrors(eObj);
    if (Object.keys(eObj).length > 0) return;

    setLoading(true);

    try {
      const res = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        alert(data.message || "Something went wrong!");
        setLoading(false);
        return;
      }

      setSuccess(true);
      setTimeout(() => setSuccess(false), 4000);

      setForm({
        name: "",
        phone: "",
        email: "",
        model: "",
        serviceType: "",
        date: "",
        pickup: "No",
        notes: "",
      });
    } catch (err) {
      alert("Server error!");
      console.log(err);
    }

    setLoading(false);
  };

  return (
    <div className="bg-blue-50 text-gray-800 pt-20 pb-12 px-4 min-h-screen">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <h1 className="text-3xl md:text-4xl font-extrabold text-blue-900">
            Book Your Bike Service
          </h1>
          <p className="mt-2 text-gray-600 max-w-2xl mx-auto">
            Fill out the form below to schedule your next bike service appointment.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">

          {/* LEFT — FORM */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white rounded-2xl shadow-lg p-6 md:p-8"
          >

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

              {/* Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name *
                </label>
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your full name"
                  className={`w-full border rounded px-3 py-2 ${
                    errors.name ? "border-red-400" : "border-gray-200"
                  }`}
                />
                {errors.name && (
                  <p className="text-red-500 text-sm">{errors.name}</p>
                )}
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Mobile Number *
                </label>
                <input
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="10 digit mobile number"
                  maxLength={10}
                  className={`w-full border rounded px-3 py-2 ${
                    errors.phone ? "border-red-400" : "border-gray-200"
                  }`}
                />
                {errors.phone && (
                  <p className="text-red-500 text-sm">{errors.phone}</p>
                )}
              </div>
            </div>

            {/* Email */}
            <div className="mt-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email (optional)
              </label>
              <input
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className="w-full border border-gray-200 rounded px-3 py-2"
              />
            </div>

            {/* Model + Service */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Bike Model *
                </label>
                <select
                  name="model"
                  value={form.model}
                  onChange={handleChange}
                  className={`w-full border rounded px-3 py-2 ${
                    errors.model ? "border-red-400" : "border-gray-200"
                  }`}
                >
                  <option value="">Select Bike Model</option>
                  <option>Pulsar 125</option>
                  <option>Pulsar 150</option>
                  <option>Pulsar N150</option>
                  <option>Pulsar N160</option>
                  <option>Pulsar NS200</option>
                  <option>Pulsar RS200</option>
                  <option>Dominar 250</option>
                  <option>Dominar 400</option>
                  <option>Avenger Street 160</option>
                  <option>Avenger Cruise 220</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Service Type *
                </label>
                <select
                  name="serviceType"
                  value={form.serviceType}
                  onChange={handleChange}
                  className={`w-full border rounded px-3 py-2 ${
                    errors.serviceType ? "border-red-400" : "border-gray-200"
                  }`}
                >
                  <option value="">Select Service Type</option>
                  <option>Regular Service</option>
                  <option>Premium Service</option>
                  <option>Accident Repair</option>
                  <option>Custom Service</option>
                </select>
              </div>
            </div>

            {/* Date */}
            <div className="mt-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Preferred Date *
              </label>
              <input
                type="date"
                name="date"
                value={form.date}
                onChange={handleChange}
                className={`w-full border rounded px-3 py-2 ${
                  errors.date ? "border-red-400" : "border-gray-200"
                }`}
              />
            </div>

            {/* Pickup */}
            <div className="mt-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Pickup & Drop
              </label>
              <div className="flex gap-6">
                <label>
                  <input
                    type="radio"
                    name="pickup"
                    value="Yes"
                    checked={form.pickup === "Yes"}
                    onChange={handleChange}
                  />{" "}
                  Yes
                </label>
                <label>
                  <input
                    type="radio"
                    name="pickup"
                    value="No"
                    checked={form.pickup === "No"}
                    onChange={handleChange}
                  />{" "}
                  No
                </label>
              </div>
            </div>

            {/* Notes */}
            <div className="mt-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Additional Notes
              </label>
              <textarea
                name="notes"
                value={form.notes}
                onChange={handleChange}
                rows="3"
                className="w-full border border-gray-200 rounded px-3 py-2"
              />
            </div>

            {/* Buttons */}
            <div className="mt-6 flex gap-4 items-center">
              <button
                type="submit"
                disabled={loading}
                className="bg-blue-900 text-white px-6 py-2 rounded-lg flex items-center gap-2"
              >
                <FaMotorcycle />
                {loading ? "Submitting..." : "Book Service"}
              </button>

              <button
                type="button"
                onClick={() =>
                  setForm({
                    name: "",
                    phone: "",
                    email: "",
                    model: "",
                    serviceType: "",
                    date: "",
                    pickup: "No",
                    notes: "",
                  })
                }
                className="border px-5 py-2 rounded-lg"
              >
                Reset
              </button>
            </div>

          </motion.form>

          {/* RIGHT SIDE */}
          <motion.aside className="space-y-6">
            <div className="bg-blue-900 text-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-semibold mb-2">Need Help?</h3>
              <p className="text-gray-100 mb-4">
                Contact our service center for urgent repairs.
              </p>
              <p>📞 +91 9198090051</p>
              <p>📧 service@bajajauto.co.in</p>
            </div>

            <AnimatePresence>
              {success && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="bg-green-50 border-l-4 border-green-400 p-4 rounded-md"
                >
                  <div className="flex items-start gap-3">
                    <FaCheckCircle className="text-green-600 mt-1" />
                    <div>
                      <p className="font-semibold text-green-700">
                        Booking Submitted
                      </p>
                      <p className="text-sm text-gray-600">
                        We’ll contact you soon.
                      </p>
                    </div>
                    <button
                      onClick={() => setSuccess(false)}
                      className="ml-auto text-gray-400"
                    >
                      <FaTimes />
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

          </motion.aside>
        </div>
      </div>
    </div>
  );
}
