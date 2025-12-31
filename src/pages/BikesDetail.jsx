import { useParams } from "react-router-dom";
import bikes from "../data/Bikevariant";

export default function BikeDetails() {
  const { slug } = useParams();

  // find bike based on slug
  const bike = bikes
    .flatMap((b) => b.variants.map((v) => ({ ...v, category: b.name })))
    .find((v) => v.slug === slug);

  if (!bike) {
    return (
      <div className="text-center text-white mt-20">
        <h1 className="text-3xl font-bold">Bike Not Found</h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-blue-900 text-white pt-20 p-6">
      {/* Bike Image */}
      <div className="flex justify-center">
        <img
          src={bike.img}
          alt={bike.name}
          className="w-full max-w-xl object-contain drop-shadow-[0_0_25px_white]"
        />
      </div>

      {/* Title */}
      <h1 className="text-center text-4xl font-bold text-yellow-400 mt-6">
        {bike.name}
      </h1>

      <p className="text-center text-gray-300 mt-2 text-lg">
        {bike.category}
      </p>

      {/* Price */}
      <p className="text-center text-2xl font-semibold text-white mt-4">
        Price: {bike.price}
      </p>

      {/* Specifications */}
      <div className="max-w-4xl mx-auto bg-blue-950/60 p-6 rounded-2xl mt-10 shadow-lg">
        <h2 className="text-2xl font-bold text-yellow-300 mb-4">Specifications</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-300">
          <p><strong>Engine:</strong> {bike.engine}</p>
          <p><strong>Max Power:</strong> {bike.maxPower}</p>
          <p><strong>Max Torque:</strong> {bike.maxTorque}</p>
          <p><strong>Mileage:</strong> 45-55 km/l (approx)</p>
          <p><strong>Top Speed:</strong> 110–130 km/h</p>
          <p><strong>Fuel Tank:</strong> 12–14 L</p>
        </div>
      </div>

      {/* Features */}
      <div className="max-w-4xl mx-auto bg-blue-950/50 p-6 rounded-2xl mt-10">
        <h2 className="text-2xl font-bold text-yellow-300 mb-4">Key Features</h2>

        <ul className="list-disc pl-6 text-gray-300 space-y-2">
          <li>Advanced DTS-i Engine</li>
          <li>Sporty Digital Console</li>
          <li>LED DRLs</li>
          <li>Powerful Braking System</li>
          <li>Comfortable Riding Posture</li>
        </ul>
      </div>

      {/* Gallery */}
      <div className="max-w-4xl mx-auto bg-blue-950/50 p-6 rounded-2xl mt-10">
        <h2 className="text-2xl font-bold text-yellow-300 mb-4">Gallery</h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          <img src={bike.img} className="rounded-lg" alt="" />
          <img src={bike.img} className="rounded-lg" alt="" />
          <img src={bike.img} className="rounded-lg" alt="" />
        </div>
      </div>

      {/* Book Now Button */}
      <div className="text-center mt-10 pb-10">
        <a
          href={`/enquiry?bike=${bike.name}`}
          className="bg-yellow-400 text-black px-6 py-3 rounded-lg font-bold text-lg hover:bg-yellow-500 transition"
        >
          Book This Bike
        </a>
      </div>
    </div>
  );
}
