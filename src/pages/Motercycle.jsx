import { useState, useEffect } from "react";
import bikes from "../data/Bikevariant";

export default function Motorcycle() {
  const [active, setActive] = useState(bikes[0]);

  // ✅ URL से model पढ़ना
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const model = params.get("model");

    if (model) {
      const found = bikes.find(
        (b) => b.name.toLowerCase() === model.toLowerCase()
      );
      if (found) setActive(found);
    }
  }, []);

  return (
    <div className="min-h-screen bg-blue-900 text-white pt-20 flex flex-col md:flex-row">

      {/* ---------- Sidebar ---------- */}
      <aside className="w-full md:w-64 bg-blue-900 border-b md:border-b-0 md:border-r border-blue-800 shadow-xl md:h-auto">
        <h1 className="text-2xl font-bold px-6 py-5 border-b border-blue-800">
          Bajaj Bikes
        </h1>

        <nav className="flex flex-row md:flex-col overflow-x-auto md:overflow-x-hidden md:overflow-y-auto">
          {bikes.map((b) => (
            <button
              key={b.name}
              onClick={() => setActive(b)}
              className={`px-6 py-4 flex justify-between items-center text-left text-lg whitespace-nowrap transition-all duration-300
                ${
                  active.name === b.name
                    ? "bg-blue-800 text-yellow-400 font-semibold shadow-inner"
                    : "hover:bg-blue-800/50 hover:text-yellow-300"
                }`}
            >
              {b.name}
              <span className="text-gray-400 ml-2">➜</span>
            </button>
          ))}
        </nav>
      </aside>

      {/* ---------- Main Content ---------- */}
      <main className="flex-1 p-6 md:p-8 flex flex-col items-center gap-10">
        <div className="w-full max-w-4xl flex flex-col gap-8">
          {active.variants.map((variant) => (
            <div
              key={variant.name}
              className="text-center bg-blue-950/40 rounded-2xl p-6 shadow-lg"
            >
              <div className="flex justify-center">
                <img
                  src={variant.img}
                  alt={variant.name}
                  className="w-full h-64 object-contain rounded-lg mb-4"
                  style={{ filter: "drop-shadow(0 0 25px white)" }}
                />
              </div>

              <h3 className="text-2xl font-semibold text-yellow-300 mb-2">
                {variant.name}
              </h3>
              <p className="text-sm text-gray-300 mb-1">
                Engine: {variant.engine}
              </p>
              <p className="text-sm text-gray-300 mb-1">
                Max Power: {variant.maxPower}
              </p>
              <p className="text-sm text-gray-300 mb-2">
                Max Torque: {variant.maxTorque}
              </p>
              <p className="text-lg font-bold text-white mb-4">
                Price: {variant.price}
              </p>

              <div className="flex justify-center gap-4 flex-wrap">
                <button
                  onClick={() =>
                    (window.location.href = `/enquiry?bike=${variant.name}`)
                  }
                  className="bg-yellow-400 text-black px-4 py-2 rounded-lg font-semibold hover:bg-yellow-500 transition"
                >
                  Book Now
                </button>

                <button
                  onClick={() =>
                    (window.location.href = `/bike/${variant.slug}`)
                  }
                  className="bg-blue-700 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-800 transition"
                >
                  Explore
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
