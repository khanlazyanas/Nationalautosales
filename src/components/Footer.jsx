import { useState, useEffect } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaChevronDown,
  FaClock,
  FaArrowUp,
  FaStar,
  FaCheckCircle,
  FaMoneyBillWave,
  FaWhatsapp,
} from "react-icons/fa";

export default function Footer() {
  const [open, setOpen] = useState(false);
  const [showTop, setShowTop] = useState(false);

  const models = [
    { name: "Pulsar", href: "/motorcycle?model=Pulsar" },
    { name: "Platina", href: "/motorcycle?model=Platina" },
    { name: "Avenger", href: "/motorcycle?model=Avenger" },
    { name: "Dominar", href: "/motorcycle?model=Dominar" },
  ];

  useEffect(() => {
    const handleScroll = () => setShowTop(window.scrollY > 300);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () =>
    window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <>
      <footer className="bg-blue-900 text-white font-inter">

        {/* TRUST + FINANCE STRIP */}
        <div className="border-b border-white/10 bg-blue-800">
          <div className="max-w-7xl mx-auto px-6 py-4 grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-white/80">
            <div className="flex items-center gap-2">
              <FaCheckCircle className="text-yellow-400" />
              Authorized Bajaj Dealer
            </div>
            <div className="flex items-center gap-2">
              <FaMoneyBillWave className="text-yellow-400" />
              EMI & Bajaj Finance Available
            </div>
            <div className="flex items-center gap-2">
              <FaStar className="text-yellow-400" />
              4.7★ Google Rating (1200+ Reviews)
            </div>
          </div>
        </div>

        {/* MAIN FOOTER */}
        <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-4 gap-10">

          {/* ABOUT */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-yellow-400">
              National Auto Sales
            </h3>
            <p className="text-sm text-white/80 mb-4">
              Authorized Bajaj dealership delivering reliable two-wheelers and
              trusted service excellence.
            </p>

            <div className="flex items-center mb-3 text-sm">
              <FaPhoneAlt className="mr-3 text-yellow-400" />
              <a href="tel:+919198090051" className="hover:text-yellow-300">
                +91 91980 90051
              </a>
            </div>

            <div className="flex items-center mb-3 text-sm">
              <FaEnvelope className="mr-3 text-yellow-400" />
              <a
                href="mailto:customerservice@bajajauto.co.in"
                className="hover:text-yellow-300"
              >
                customerservice@bajajauto.co.in
              </a>
            </div>

            <div className="flex items-start text-sm">
              <FaMapMarkerAlt className="mr-3 mt-1 text-yellow-400" />
              <span className="text-white/80">
                Main Road, Near Bajaj Showroom, Uttar Pradesh, India
              </span>
            </div>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-white/80">
              {["About Us", "Services", "Gallery", "Offers", "Enquiry"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href={`/${item.toLowerCase().replace(" ", "")}`}
                      className="hover:text-yellow-300 transition"
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* MODELS */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Models</h3>

            <button
              onClick={() => setOpen(!open)}
              className="w-full flex items-center justify-between bg-blue-800 px-4 py-3 rounded-md hover:bg-blue-700 transition"
            >
              <span className="text-sm">Select Bike Model</span>
              <FaChevronDown
                className={`transition-transform ${open ? "rotate-180" : ""}`}
              />
            </button>

            <div
              className={`mt-2 overflow-hidden transition-all duration-300 ${
                open ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <ul className="bg-blue-800 rounded-md divide-y divide-blue-700">
                {models.map((m) => (
                  <li key={m.name}>
                    <a
                      href={m.href}
                      onClick={() => setOpen(false)}
                      className="block px-4 py-3 text-sm hover:bg-yellow-400 hover:text-blue-900 transition"
                    >
                      {m.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* HOURS + SOCIAL */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Working Hours</h3>

            <div className="flex items-center text-sm text-white/80 mb-2">
              <FaClock className="mr-3 text-yellow-400" />
              Mon – Sat: 9:30 AM – 7:00 PM
            </div>

            <p className="text-sm text-white/80 mb-6">Sunday: Closed</p>

            <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
            <div className="flex space-x-4">
              {[FaFacebookF, FaInstagram, FaLinkedinIn].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="p-3 bg-blue-800 rounded-full hover:bg-yellow-400 hover:text-blue-900 transition"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* LEGAL DISCLAIMER */}
        <div className="text-center text-xs text-white/60 px-6 pb-3">
          Images shown are for representation purpose only. Terms & conditions apply.
        </div>

        {/* BOTTOM BAR */}
        <div className="bg-blue-950 py-5 px-6 flex flex-col md:flex-row items-center justify-between text-sm text-white/70">
          <p>
            © {new Date().getFullYear()} National Auto Sales. All rights reserved.
          </p>

          <div className="flex gap-6 my-2 md:my-0">
            <a href="/terms" className="hover:text-yellow-300">Terms</a>
            <a href="/privacy" className="hover:text-yellow-300">Privacy</a>
          </div>

          <p className="font-poppins text-yellow-400 tracking-wide">
            Developed by <span className="font-semibold">Anas Khan</span>
          </p>
        </div>
      </footer>

      {/* MOVE TO TOP */}
      {showTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 bg-yellow-400 text-blue-900 p-3 rounded-full shadow-lg hover:bg-yellow-300 transition"
        >
          <FaArrowUp />
        </button>
      )}

      {/* WHATSAPP FLOAT */}
      <a
        href="https://wa.me/919198090051"
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 left-6 z-50 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-400 transition"
      >
        <FaWhatsapp size={20} />
      </a>
    </>
  );
}
