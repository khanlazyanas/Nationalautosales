import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Motorcycle from "./pages/Motercycle";
import Footer from "./components/Footer";
import Gallery from "./pages/Gallery";
import Offers from "./pages/Offer";
import Enquiry from "./pages/Enquary";
import TermsAndConditions from "./pages/Termcondition";
import PrivacyPolicy from "./pages/Privacypolicy";
import BookService from "./pages/BookService";
import SplashScreen from "./components/SplashScreen";
import BikeDetails from "./pages/BikesDetail";

import { Toaster } from "react-hot-toast";   // ✅ Toast Container

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const splashShown = sessionStorage.getItem("splashShown");
    if (splashShown) {
      setLoading(false);
    } else {
      const timer = setTimeout(() => {
        setLoading(false);
        sessionStorage.setItem("splashShown", "true");
      }, 4000);

      return () => clearTimeout(timer);
    }
  }, []);

  if (loading) return <SplashScreen />;

  return (
    <>
      <Router>
        <Navbar />
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/motorcycle" element={<Motorcycle />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/offers" element={<Offers />} />
            <Route path="/enquiry" element={<Enquiry />} />
            <Route path="/terms" element={<TermsAndConditions />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/book-service" element={<BookService />} />
            <Route path="/bike/:slug" element={<BikeDetails />} />
          </Routes>
        </div>
        <Footer />
      </Router>

      <Toaster position="top-right" />  {/* 🔥 Toast Works Everywhere */}
    </>
  );
}

export default App;
