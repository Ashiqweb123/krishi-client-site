import React, { useState } from "react";
import { Link, useLoaderData } from "react-router";
import { motion } from "framer-motion";

/* Simple fade animation */
const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const AllCrops = () => {
  const crops = useLoaderData();
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const cropsPerPage = 4;

  const filteredCrops = crops.filter((crop) =>
    crop.name.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  const totalPages = Math.ceil(filteredCrops.length / cropsPerPage);
  const indexOfLastCrop = currentPage * cropsPerPage;
  const indexOfFirstCrop = indexOfLastCrop - cropsPerPage;
  const currentCrops = filteredCrops.slice(indexOfFirstCrop, indexOfLastCrop);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section className="py-12 bg-green-50 min-h-screen">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial="hidden"
          animate="show"
          variants={fadeUp}
          transition={{ duration: 0.4 }}
          className="mb-8 text-center"
        >
          <h2 className="text-4xl font-bold mb-4 text-green-800">All Crops</h2>
          <input
            type="text"
            placeholder="Search crops..."
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setCurrentPage(1);
            }}
            className="input input-bordered w-full md:w-1/2 rounded-full"
          />
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {currentCrops.map((crop) => (
            <motion.div
              key={crop._id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white shadow rounded-lg border border-green-100 flex flex-col overflow-hidden"
            >
              <img
                src={crop.image}
                alt={crop.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4 flex flex-col flex-1">
                <h3 className="text-lg font-bold text-green-700 mb-1">
                  {crop.name}
                </h3>
                <p className="text-gray-600 text-sm mb-2 line-clamp-2">
                  {crop.description || "No description available."}
                </p>

                <div className="text-gray-700 text-sm mb-3 space-y-1">
                  <p>Type: {crop.type}</p>
                  <p>Price: ৳{crop.pricePerUnit}</p>
                  <p>Location: {crop.location}</p>
                  <p>Status: {crop.status || "Available"}</p>
                  <p>Rating: {crop.rating || "N/A"}</p>
                </div>

                <Link to={`/crop-details/${crop._id}`} className="mt-auto">
                  <button className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg font-semibold">
                    View Details
                  </button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center mt-10 gap-2">
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                onClick={() => handlePageChange(i + 1)}
                className={`px-4 py-2 rounded-md ${
                  currentPage === i + 1
                    ? "bg-green-600 text-white"
                    : "bg-white border border-green-300 text-green-700 hover:bg-green-100"
                }`}
              >
                {i + 1}
              </button>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default AllCrops;
