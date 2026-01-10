import React, { useEffect, useState } from "react";
import axios from "axios";

const FeaturedCrops = () => {
  const [crops, setCrops] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://krishilinkapp.vercel.app/crops/latest")
      .then((res) => setCrops(res.data))
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  if (loading)
    return (
      <div className="flex justify-center items-center py-20">
        {/* Spinner Loader */}
        <div className="w-16 h-16 border-4 border-green-600 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );

  if (!crops.length)
    return (
      <p className="text-center py-10 text-red-600">No featured crops found.</p>
    );

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-green-700">
          Featured Crops
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {crops.map((crop) => (
            <div
              key={crop._id}
              className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 p-5 flex flex-col items-center text-center"
            >
              {/* Crop Image */}
              <img
                src={crop.image}
                alt={crop.name}
                className="w-28 h-28 object-contain mb-4 rounded-lg border border-gray-200"
              />

              {/* Crop Name */}
              <h3 className="font-bold text-lg text-gray-800 mb-2">
                {crop.name}
              </h3>

              {/* Price */}
              <p className="text-green-600 font-semibold mb-2 text-lg">
                {crop.price}
              </p>

              {/* Additional Info */}
              {crop.location && (
                <p className="text-gray-600 text-sm mb-1">
                  Location: {crop.location}
                </p>
              )}
              {crop.farmerName && (
                <p className="text-gray-600 text-sm mb-1">
                  Farmer: {crop.farmerName}
                </p>
              )}
              {crop.stock && (
                <p className="text-gray-600 text-sm mb-2">
                  Stock: {crop.stock} kg
                </p>
              )}

              {/* CTA Button */}
              <button className="mt-auto bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-lg font-semibold transition-colors duration-300">
                Buy Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCrops;
