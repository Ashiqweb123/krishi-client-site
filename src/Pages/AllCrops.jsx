import React, { useState } from "react";
import { Link, useLoaderData } from "react-router";


const AllCrops = () => {
  const crops = useLoaderData()
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
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {filteredCrops.map((crop) => (
              <div
                key={crop._id}
                className="card bg-white shadow-xl hover:shadow-2xl transition border border-green-100"
              >
                <figure>
                  <img
                    src={crop.image}
                    alt={crop.name}
                    className="h-56 w-full object-cover rounded-t-lg"
                  />
                </figure>
                <div className="card-body">
                  <h3 className="card-title text-green-700 font-bold">
                    {crop.name}
                  </h3>
                  <p className="text-gray-600">Type: {crop.type}</p>
                  <p className="text-gray-700 font-semibold">
                    Price: ৳{crop.price}
                  </p>
                  <p className="text-sm text-gray-500">
                    Location: {crop.location}
                  </p>
                  <div className="card-actions justify-end mt-2">
                    <Link to={`/crop-details/${crop._id}`}>
                      <button className="btn btn-success btn-sm text-white">
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
