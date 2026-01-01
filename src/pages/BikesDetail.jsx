import { useParams, Link } from "react-router-dom";
import bikes from "../data/Bikevariant";

export default function BikeDetails() {
  const { slug } = useParams();

  const bike = bikes
    .flatMap((b) => b.variants.map((v) => ({ ...v, category: b.name })))
    .find((v) => v.slug === slug);

  if (!bike) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-blue-900 text-white">
        <h1 className="text-3xl font-poppins font-semibold">
          Bike Not Found
        </h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-blue-900 text-white pt-20 px-6 font-inter">

      {/* IMAGE */}
      <div className="flex justify-center">
        <img
          src={bike.img}
          alt={bike.name}
          className="w-full max-w-xl object-contain
                     drop-shadow-[0_0_25px_rgba(255,255,255,0.6)]"
        />
      </div>

      {/* TITLE */}
      <h1 className="text-center text-4xl font-poppins font-bold text-yellow-400 mt-6">
        {bike.name}
      </h1>

      <p className="text-center text-blue-200 mt-2 text-lg">
        {bike.category}
      </p>

      {/* PRICE */}
      <p className="text-center text-2xl font-semibold mt-4">
        Price: {bike.price}
      </p>

      {/* SPECS */}
      <div className="max-w-4xl mx-auto bg-blue-950/60 p-6 rounded-2xl mt-10 shadow-xl">
        <h2 className="text-2xl font-poppins font-semibold text-yellow-300 mb-6">
          Specifications
        </h2>

        <div className="grid sm:grid-cols-2 gap-4 text-blue-100">
          <p><strong>Engine:</strong> {bike.engine}</p>
          <p><strong>Max Power:</strong> {bike.maxPower}</p>
          <p><strong>Max Torque:</strong> {bike.maxTorque}</p>
          <p><strong>Mileage:</strong> 45–55 km/l (approx)</p>
          <p><strong>Top Speed:</strong> 110–130 km/h</p>
          <p><strong>Fuel Tank:</strong> 12–14 L</p>
        </div>
      </div>

      {/* FEATURES */}
      <div className="max-w-4xl mx-auto bg-blue-950/50 p-6 rounded-2xl mt-10">
        <h2 className="text-2xl font-poppins font-semibold text-yellow-300 mb-4">
          Key Features
        </h2>

        <ul className="list-disc pl-6 text-blue-100 space-y-2">
          <li>Advanced DTS-i Engine</li>
          <li>Sporty Digital Console</li>
          <li>LED DRLs</li>
          <li>Powerful Braking System</li>
          <li>Comfortable Riding Posture</li>
        </ul>
      </div>

      {/* GALLERY */}
      <div className="max-w-4xl mx-auto bg-blue-950/50 p-6 rounded-2xl mt-10">
        <h2 className="text-2xl font-poppins font-semibold text-yellow-300 mb-4">
          Gallery
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {[1, 2, 3].map((i) => (
            <img
              key={i}
              src={bike.img}
              alt={`${bike.name} ${i}`}
              className="rounded-xl"
            />
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="text-center mt-12 pb-12">
        <Link
          to={`/enquiry?bike=${encodeURIComponent(bike.name)}`}
          className="inline-block bg-yellow-400 text-blue-900
                     px-8 py-3 rounded-full font-poppins
                     font-semibold text-lg shadow-lg
                     hover:bg-yellow-500 transition"
        >
          Book This Bike
        </Link>
      </div>
    </div>
  );
}
