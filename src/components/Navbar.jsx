import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const links = [
    { name: "Home", to: "/" },
    { name: "Motorcycle", to: "/motorcycle" },
    { name: "About Us", to: "/about" },
    { name: "Services", to: "/services" },
    { name: "Contact", to: "/contact" },
    { name: "Gallery", to: "/gallery" },
    { name: "Offers", to: "/offers" },
    { name: "Enquiry", to: "/enquiry" },
  ];

  // Detect mobile
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {/* NAVBAR */}
      <nav className="bg-blue-900 text-white shadow-md fixed top-0 left-0 w-full z-50 h-16 font-body">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between h-full items-center">
          
          {/* Logo */}
          <Link
            to="/"
            className="text-2xl font-bold hover:text-yellow-400 transition"
          >
            National Auto Sales
          </Link>

          {/* Desktop Links */}
          {!isMobile && (
            <div className="flex items-center space-x-6 font-medium">
              {links.map((link) => (
                <Link
                  key={link.name}
                  to={link.to}
                  className="hover:text-yellow-400 transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          )}

          {/* Hamburger */}
          {isMobile && (
            <button
              onClick={() => setIsOpen(true)}
              className="p-2 rounded-md hover:bg-blue-700 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          )}
        </div>
      </nav>

      {/* MOBILE DRAWER */}
      {isMobile && (
        <>
          <div
            className={`fixed top-0 right-0 h-full w-80 bg-blue-900 shadow-xl z-50 transform transition-transform duration-500 ${
              isOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <div className="flex justify-between items-center p-6 border-b">
              <span className="text-white text-xl font-bold">
                National Auto Sales
              </span>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 rounded-full hover:bg-gray-200 transition"
              >
                <svg
                  className="h-6 w-6 text-gray-800"
                  fill="none"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* Mobile Links */}
            <div className="flex flex-col px-6 space-y-6 mt-4">
              {links.map((link) => (
                <Link
                  key={link.name}
                  to={link.to}
                  onClick={() => setIsOpen(false)}
                  className="text-lg hover:text-yellow-400 font-medium transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* CTA + Social */}
            <div className="px-6 mt-auto pb-6">
              <Link
                to="/enquiry"
                onClick={() => setIsOpen(false)}
                className="block text-center px-4 py-2 bg-yellow-400 text-blue-900 font-semibold rounded-full shadow hover:bg-yellow-500 transition mb-4"
              >
                Enquiry Now
              </Link>

              <div className="flex justify-center space-x-4 text-white">
                <FaFacebookF className="hover:text-yellow-400 cursor-pointer" />
                <FaInstagram className="hover:text-yellow-400 cursor-pointer" />
                <FaLinkedinIn className="hover:text-yellow-400 cursor-pointer" />
              </div>
            </div>
          </div>

          {/* BACKDROP */}
          {isOpen && (
            <div
              className="fixed inset-0 bg-black bg-opacity-30 z-40"
              onClick={() => setIsOpen(false)}
            />
          )}
        </>
      )}
    </>
  );
}
