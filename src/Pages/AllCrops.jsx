import React, { useState } from "react";
import { Link, useLoaderData } from "react-router";

const AllCrops = () => {
  const crops = useLoaderData();
  const [searchTerm, setSearchTerm] = useState("");

  const filteredCrops = crops.filter((crop) =>
    crop.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="py-10 bg-green-50 min-h-screen">
      <div className="container mx-auto px-4">
        <div className="mb-8 text-center">
          <h2 className="text-4xl font-bold mb-4 text-green-800">All Crops</h2>
          <input
            type="text"
            placeholder="Search likeable crops..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="input input-bordered w-full md:w-1/2 rounded-full"
          />
        </div>

        {filteredCrops.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {filteredCrops.map((crop) => (
              <div
                key={crop._id}
                className="bg-white shadow-lg rounded-lg border border-green-100 flex flex-col overflow-hidden h-full"
              >
                <img
                  src={crop.image}
                  alt={crop.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4 flex flex-col flex-1">
                  <h3 className="text-lg md:text-xl font-bold text-green-700 mb-2">
                    {crop.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-2 line-clamp-2">
                    {crop.description || "No description available."}
                  </p>
                  <div className="text-gray-700 text-sm mb-2">
                    <p>Type: {crop.type}</p>
                    <p>Price: ৳{crop.pricePerUnit}</p>
                    <p>Location: {crop.location}</p>
                    <p>Status: {crop.status || "Available"}</p>
                    <p>Rating: {crop.rating || "N/A"}</p>
                  </div>
                  <div className="mt-auto">
                    <Link to={`/crop-details/${crop._id}`}>
                      <button className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg font-semibold">
                        View Details
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center mt-10">
            <p className="text-2xl font-semibold text-gray-500">
              No results found
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default AllCrops;
