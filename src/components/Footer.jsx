import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
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
    { name: "Pulsar", to: "/motorcycle?model=Pulsar" },
    { name: "Platina", to: "/motorcycle?model=Platina" },
    { name: "Avenger", to: "/motorcycle?model=Avenger" },
    { name: "Dominar", to: "/motorcycle?model=Dominar" },
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

        {/* TRUST STRIP */}
        <div className="border-b border-white/10 bg-blue-800">
          <div className="max-w-7xl mx-auto px-6 py-4 grid md:grid-cols-3 gap-6 text-sm text-white/80">
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
              4.7★ Google Rating
            </div>
          </div>
        </div>

        {/* MAIN */}
        <div className="max-w-7xl mx-auto px-6 py-14 grid md:grid-cols-4 gap-10">

          {/* ABOUT */}
          <div>
            <h3 className="text-lg font-poppins font-semibold text-yellow-400 mb-4">
              National Auto Sales
            </h3>
            <p className="text-sm text-white/80 mb-4">
              Authorized Bajaj dealership delivering reliable two-wheelers
              with trusted service excellence.
            </p>

            <div className="flex items-center text-sm mb-2">
              <FaPhoneAlt className="mr-3 text-yellow-400" />
              <a href="tel:+919198090051">+91 91980 90051</a>
            </div>

            <div className="flex items-center text-sm mb-2">
              <FaEnvelope className="mr-3 text-yellow-400" />
              <a href="mailto:customerservice@bajajauto.co.in">
                customerservice@bajajauto.co.in
              </a>
            </div>

            <div className="flex items-start text-sm">
              <FaMapMarkerAlt className="mr-3 mt-1 text-yellow-400" />
              Main Road, Near Bajaj Showroom, UP, India
            </div>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h3 className="text-lg font-poppins font-semibold mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm text-white/80">
              {[
                { name: "About Us", to: "/about" },
                { name: "Services", to: "/services" },
                { name: "Gallery", to: "/gallery" },
                { name: "Offers", to: "/offers" },
                { name: "Enquiry", to: "/enquiry" },
              ].map((l) => (
                <li key={l.name}>
                  <Link
                    to={l.to}
                    className="hover:text-yellow-300 transition"
                  >
                    {l.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* MODELS */}
          <div>
            <h3 className="text-lg font-poppins font-semibold mb-4">
              Our Models
            </h3>

            <button
              onClick={() => setOpen(!open)}
              className="w-full flex justify-between items-center
                         bg-blue-800 px-4 py-3 rounded-md"
            >
              <span className="text-sm">Select Bike Model</span>
              <FaChevronDown
                className={`transition ${open ? "rotate-180" : ""}`}
              />
            </button>

            <ul
              className={`mt-2 overflow-hidden transition-all ${
                open ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
              } bg-blue-800 rounded-md`}
            >
              {models.map((m) => (
                <li key={m.name}>
                  <Link
                    to={m.to}
                    onClick={() => setOpen(false)}
                    className="block px-4 py-3 text-sm
                               hover:bg-yellow-400 hover:text-blue-900"
                  >
                    {m.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* HOURS */}
          <div>
            <h3 className="text-lg font-poppins font-semibold mb-4">
              Working Hours
            </h3>
            <div className="flex items-center text-sm mb-2">
              <FaClock className="mr-3 text-yellow-400" />
              Mon – Sat: 9:30 AM – 7:00 PM
            </div>
            <p className="text-sm mb-6">Sunday: Closed</p>

            <h3 className="text-lg font-poppins font-semibold mb-3">
              Follow Us
            </h3>
            <div className="flex gap-4">
              {[FaFacebookF, FaInstagram, FaLinkedinIn].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="p-3 bg-blue-800 rounded-full
                             hover:bg-yellow-400 hover:text-blue-900"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="bg-blue-950 py-5 px-6 flex flex-col md:flex-row
                        justify-between items-center text-sm text-white/70">
          <p>© {new Date().getFullYear()} National Auto Sales</p>

          <div className="flex gap-6 my-2">
            <Link to="/terms">Terms</Link>
            <Link to="/privacy">Privacy</Link>
          </div>

          <p className="font-poppins text-yellow-400">
            Developed by <span className="font-semibold">Anas Khan</span>
          </p>
        </div>
      </footer>

      {/* TOP */}
      {showTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-yellow-400
                     text-blue-900 p-3 rounded-full shadow-lg"
        >
          <FaArrowUp />
        </button>
      )}

      {/* WHATSAPP */}
      <a
        href="https://wa.me/919198090051"
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 left-6 bg-green-500
                   text-white p-3 rounded-full shadow-lg"
      >
        <FaWhatsapp />
      </a>
    </>
  );
}
