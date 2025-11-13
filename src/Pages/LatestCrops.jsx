import React from 'react';
import { Link, useLoaderData } from 'react-router';

const LatestCrops = () => {
    const latest=useLoaderData()
    console.log(latest)
    return (
       <section className="py-10 container mx-auto">
      <h2 className="text-3xl font-bold mb-6">Latest Crops</h2>
      <div className="grid md:grid-cols-4 gap-6">
        {latest.map((crop) => (
          <div key={crop._id} className="border p-4 rounded shadow hover:shadow-lg">
            <img
              src={crop.image} 
              alt={crop.name}
              className="w-full h-40 object-cover mb-2 rounded"
            />
            <h3 className="text-xl font-semibold">{crop.name}</h3>
            <p className="text-green-600 font-semibold">Price: ${crop.pricePerUnit}</p>
            <Link
              to={`/crop-details/${crop._id}`}
              className="text-sm text-blue-600 hover:underline"
            >
              View Details
            </Link>
          </div>
        ))}
      </div>
      <div className="text-center mt-6">
        <Link
          to="/all-crops"
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          View All Crops
        </Link>
      </div>
    </section>
    );
};

export default LatestCrops;