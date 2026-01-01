import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import bikes from "../data/Bikevariant";

export default function Motorcycle() {
  const [active, setActive] = useState(bikes[0]);
  const navigate = useNavigate();

  // ✅ URL se model read
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

      {/* SIDEBAR */}
      <aside className="w-full md:w-64 bg-blue-900 border-b md:border-r border-blue-800">
        <h1 className="text-2xl font-bold px-6 py-5 border-b border-blue-800">
          Bajaj Bikes
        </h1>

        <nav className="flex md:flex-col overflow-x-auto">
          {bikes.map((b) => (
            <button
              key={b.name}
              onClick={() => setActive(b)}
              className={`px-6 py-4 text-left transition
                ${
                  active.name === b.name
                    ? "bg-blue-800 text-yellow-400 font-semibold"
                    : "hover:bg-blue-800/50"
                }`}
            >
              {b.name}
            </button>
          ))}
        </nav>
      </aside>

      {/* MAIN */}
      <main className="flex-1 p-6 flex justify-center">
        <div className="w-full max-w-4xl space-y-8">
          {active.variants.map((variant) => (
            <div
              key={variant.name}
              className="bg-blue-950/40 rounded-2xl p-6 text-center shadow-lg"
            >
              <img
                src={variant.img}
                alt={variant.name}
                className="w-full h-64 object-contain mb-4"
                style={{ filter: "drop-shadow(0 0 25px white)" }}
              />

              <h3 className="text-2xl font-semibold text-yellow-300">
                {variant.name}
              </h3>

              <p className="text-gray-300">Engine: {variant.engine}</p>
              <p className="text-gray-300">Power: {variant.maxPower}</p>
              <p className="text-gray-300">Torque: {variant.maxTorque}</p>
              <p className="text-lg font-bold mt-2">{variant.price}</p>

              <div className="flex justify-center gap-4 mt-4">
                <button
                  onClick={() =>
                    navigate(`/enquiry?bike=${variant.name}`)
                  }
                  className="bg-yellow-400 text-black px-4 py-2 rounded-lg font-semibold hover:bg-yellow-500"
                >
                  Book Now
                </button>

                <button
                  onClick={() =>
                    navigate(`/bike/${variant.slug}`)
                  }
                  className="bg-blue-700 px-4 py-2 rounded-lg hover:bg-blue-800"
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
