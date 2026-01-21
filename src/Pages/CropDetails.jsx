import React, { useContext } from "react";
import { useLoaderData } from "react-router";
import { motion } from "framer-motion";
import CropInterestForm from "../Components/CropInterestForm";
import CropReceivedInterests from "../Components/CropReceivedInterests";
import { AuthContext } from "../Context/AuthContext";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const CropDetails = () => {
  const { user } = useContext(AuthContext);
  const crop = useLoaderData();

  return (
    <div className="bg-green-50 min-h-screen">
      {/* Crop Details Card */}
      <motion.section
        initial="hidden"
        whileInView="show"
        variants={fadeUp}
        viewport={{ once: true }}
        className="container mx-auto px-4 py-10"
      >
        <div className="flex flex-col lg:flex-row gap-8 bg-white rounded-2xl shadow-lg p-6 lg:p-10">
          {/* Image */}
          <div className="lg:w-1/2">
            <motion.img
              src={crop.image}
              alt={crop.name}
              className="w-full h-auto rounded-xl object-cover shadow-md"
              initial={{ scale: 0.95, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            />
          </div>

          {/* Crop Info */}
          <div className="lg:w-1/2 flex flex-col gap-6">
            {/* Title */}
            <motion.h1
              variants={fadeUp}
              className="text-3xl md:text-4xl font-bold text-green-700"
            >
              {crop.name}
            </motion.h1>

            {/* Overview */}
            <motion.section variants={fadeUp}>
              <h2 className="text-xl font-semibold mb-2 text-green-700">
                Overview / Description
              </h2>
              <p className="text-gray-700 leading-relaxed">
                {crop.description}
              </p>
            </motion.section>

            {/* Key Specs */}
            <motion.section variants={fadeUp}>
              <h2 className="text-xl font-semibold mb-2 text-green-700">
                Key Information
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-gray-700">
                <p>
                  <strong>Type:</strong> {crop.type}
                </p>
                <p>
                  <strong>Quantity:</strong> {crop.quantity} {crop.unit}
                </p>
                <p>
                  <strong>Price per Unit:</strong> {crop.pricePerUnit} BDT
                </p>
                <p>
                  <strong>Location:</strong> {crop.location}
                </p>
                <p>
                  <strong>Status:</strong> {crop.status || "Available"}
                </p>
                <p>
                  <strong>Rating:</strong> {crop.rating || "N/A"}
                </p>
              </div>
            </motion.section>

            {/* Reviews */}
            {crop.reviews?.length > 0 && (
              <motion.section variants={fadeUp}>
                <h2 className="text-xl font-semibold mb-2 text-green-700">
                  Reviews
                </h2>
                <ul className="text-gray-700 list-disc list-inside space-y-2">
                  {crop.reviews.map((review, idx) => (
                    <li
                      key={idx}
                      className="bg-green-50 p-2 rounded-md shadow-sm"
                    >
                      <strong>{review.user}:</strong> {review.comment} (
                      {review.rating}/5)
                    </li>
                  ))}
                </ul>
              </motion.section>
            )}

            {/* Related Crops */}
            {crop.related?.length > 0 && (
              <motion.section variants={fadeUp}>
                <h2 className="text-xl font-semibold mb-2 text-green-700">
                  Related / Suggested Items
                </h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {crop.related.map((item) => (
                    <motion.div
                      key={item._id}
                      whileHover={{ scale: 1.05 }}
                      className="bg-white shadow rounded-lg overflow-hidden cursor-pointer transition"
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-28 object-cover rounded-t-lg"
                      />
                      <p className="text-green-700 font-semibold text-center py-2 text-sm">
                        {item.name}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </motion.section>
            )}
          </div>
        </div>
      </motion.section>

      {/* Crop Interest Form */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="container mx-auto px-4 py-6"
      >
        <CropInterestForm crop={crop} />
      </motion.section>

      {/* Owner Received Interests */}
      {user && user.email === crop.owner.ownerEmail && (
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="container mx-auto px-4 py-6"
        >
          <CropReceivedInterests crop={crop} />
        </motion.section>
      )}
    </div>
  );
};

export default CropDetails;
