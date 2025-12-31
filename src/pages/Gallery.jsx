import { motion } from "framer-motion";
import { useState } from "react";
import showroom1 from "../assets/nationalshowroom.jpg";
import showroom2 from "../assets/nationalshowroom.jpg";
import event1 from "../assets/nationalshowroom.jpg";
import event2 from "../assets/nationalbajajemployeeimage.jpg";
import service1 from "../assets/servicecenter2.jpg";
import service2 from "../assets/servicecenter1.jpg";

export default function Gallery() {
  const images = [showroom1, showroom2, event1, event2, service1, service2];
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <div className="bg-blue-50 text-gray-800">
      {/* ===== Hero Section ===== */}
      <section className="relative bg-blue-900 text-white py-20 text-center">
        <div className="max-w-5xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Our Gallery
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto">
            Glimpse of our showroom, service center and exciting bike launch events.
          </p>
        </div>
      </section>

      {/* ===== Image Grid ===== */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <motion.div
          className="grid sm:grid-cols-2 md:grid-cols-3 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.15 } },
          }}
        >
          {images.map((img, i) => (
            <motion.div
              key={i}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
              className="relative cursor-pointer group"
              onClick={() => setSelectedImg(img)}
            >
              <img
                src={img}
                alt={`Gallery ${i + 1}`}
                className="w-full h-64 object-cover rounded-2xl shadow-md group-hover:scale-105 transition"
              />
            </motion.div>
          ))}
        </motion.div>

        {/* ===== Lightbox / Modal ===== */}
        {selectedImg && (
          <div
            className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
            onClick={() => setSelectedImg(null)}
          >
            <img
              src={selectedImg}
              alt="Selected"
              className="max-h-[90%] max-w-[90%] rounded-2xl shadow-lg"
            />
          </div>
        )}
      </section>

      {/* ===== Video Section ===== */}
      <section className="bg-blue-100 py-16">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-blue-900 mb-8">
            Bike Launch Event Highlights
          </h2>
          <div className="aspect-w-16 aspect-h-9 rounded-2xl overflow-hidden shadow-lg">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/wpevk_mc_TY"
              title="Bike Launch Event"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
}
