import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaBars, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  const links = [
    { name: "Home", to: "/" },
    { name: "Motorcycle", to: "/motorcycle" },
    { name: "About Us", to: "/about" },
    { name: "Services", to: "/services" },
    { name: "Gallery", to: "/gallery" },
    { name: "Offers", to: "/offers" },
    { name: "Contact", to: "/contact" },
  ];

  // Detect mobile
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Motion variants
  const desktopLinkVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: (i) => ({
      y: 0,
      opacity: 1,
      transition: { delay: i * 0.08 + 0.3, type: "spring", stiffness: 140 },
    }),
  };

  const mobileLinksVariants = {
    hidden: { x: 60, opacity: 0 },
    visible: (i) => ({
      x: 0,
      opacity: 1,
      transition: { delay: i * 0.08 + 0.1, type: "spring", stiffness: 120 },
    }),
  };

  const MotionLink = motion(Link); // Fix for motion(Link)

  return (
    <>
      {/* ================= NAVBAR ================= */}
      <motion.nav
        className={`fixed top-0 left-0 w-full z-50 backdrop-blur-xl
                    bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700
                    shadow-2xl border-b border-blue-800`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 90 }}
        style={{
          transform: scrollY > 10 ? "scale(0.98) translateY(-4px)" : "scale(1)",
          transition: "transform 0.2s ease-out",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 h-16 flex items-center justify-between">

          {/* Logo */}
          <MotionLink
            to="/"
            whileHover={{ scale: 1.05 }}
            className="text-2xl lg:text-3xl font-extrabold tracking-wide text-white hover:text-yellow-400 transition-all"
          >
            National Auto Sales
          </MotionLink>

          {/* Desktop Links */}
          {!isMobile && (
            <div className="flex items-center space-x-8">
              {links.map((link, i) => (
                <motion.div
                  key={link.name}
                  custom={i}
                  initial="hidden"
                  animate="visible"
                  variants={desktopLinkVariants}
                >
                  <NavLink
                    to={link.to}
                    className={({ isActive }) =>
                      `relative font-semibold uppercase tracking-wider transition-all
                       ${
                         isActive
                           ? "text-yellow-400 after:w-full"
                           : "text-white hover:text-yellow-400"
                       } after:content-[''] after:block after:h-0.5 after:bg-yellow-400 after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform`
                    }
                  >
                    {link.name}
                  </NavLink>
                </motion.div>
              ))}

              {/* Animated CTA */}
              <motion.div
                initial={{ scale: 0.95 }}
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ repeat: Infinity, duration: 2 }}
              >
                <NavLink
                  to="/enquiry"
                  className="ml-4 px-6 py-2 rounded-full bg-yellow-400 text-blue-900 font-semibold shadow-lg hover:bg-yellow-500 transition-all"
                >
                  Enquiry
                </NavLink>
              </motion.div>
            </div>
          )}

          {/* Mobile Hamburger */}
          {isMobile && (
            <button
              onClick={() => setIsOpen(true)}
              className="text-white text-2xl p-2 rounded-md hover:bg-white/10 transition"
            >
              <FaBars />
            </button>
          )}
        </div>
      </motion.nav>

      {/* ================= MOBILE DRAWER ================= */}
      {isMobile && (
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 120 }}
              className="fixed top-0 right-0 h-full w-80 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 shadow-2xl z-50 rounded-l-3xl flex flex-col"
            >
              {/* Drawer Header */}
              <div className="flex items-center justify-between p-6 border-b border-blue-800">
                <motion.span
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                  className="text-xl font-bold text-white"
                >
                  National Auto Sales
                </motion.span>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-white text-xl p-2 rounded-full hover:bg-white/10 transition"
                >
                  <FaTimes />
                </button>
              </div>

              {/* Drawer Links */}
              <div className="flex flex-col px-6 py-6 space-y-6">
                {links.map((link, i) => (
                  <motion.div
                    key={link.name}
                    custom={i}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    variants={mobileLinksVariants}
                  >
                    <NavLink
                      to={link.to}
                      onClick={() => setIsOpen(false)}
                      className={({ isActive }) =>
                        `text-lg font-medium transition ${
                          isActive
                            ? "text-yellow-400"
                            : "text-white hover:text-yellow-400"
                        }`
                      }
                    >
                      {link.name}
                    </NavLink>
                  </motion.div>
                ))}
              </div>

              {/* Drawer CTA + Social */}
              <div className="mt-auto px-6 pb-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                >
                  <Link
                    to="/enquiry"
                    onClick={() => setIsOpen(false)}
                    className="block w-full text-center px-4 py-3 rounded-full bg-yellow-400 text-blue-900 font-semibold shadow-lg hover:bg-yellow-500 transition mb-6"
                  >
                    Enquiry Now
                  </Link>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9 }}
                  className="flex justify-center space-x-6 text-white text-lg"
                >
                  <FaFacebookF className="hover:text-yellow-400 cursor-pointer transition" />
                  <FaInstagram className="hover:text-yellow-400 cursor-pointer transition" />
                  <FaLinkedinIn className="hover:text-yellow-400 cursor-pointer transition" />
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      )}

      {/* Backdrop */}
      {isOpen && <div className="fixed inset-0 bg-black/30 z-40" onClick={() => setIsOpen(false)} />}
    </>
  );
}
