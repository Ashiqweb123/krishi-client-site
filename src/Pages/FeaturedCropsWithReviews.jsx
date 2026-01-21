import React from "react";
import { motion } from "framer-motion";

const cropSkills = [
  { name: "Tomato", rating: 80 },
  { name: "Potato", rating: 65 },
  { name: "Carrot", rating: 75 },
  { name: "Cucumber", rating: 90 },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const FeaturedCropsWithReviews = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-green-50 to-white">
      <div className="container mx-auto px-4">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-extrabold text-center mb-12 text-green-800"
        >
          Crop Reviews
        </motion.h2>

        {/* Crop Bars */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="space-y-6 max-w-md mx-auto"
        >
          {cropSkills.map((crop, idx) => (
            <motion.div key={idx} variants={item}>
              {/* Name & Percentage */}
              <div className="flex justify-between mb-2">
                <span className="text-gray-800 font-semibold">{crop.name}</span>
                <span className="text-gray-600 font-medium">
                  {crop.rating}%
                </span>
              </div>

              {/* Animated Progress Bar */}
              <div className="w-full bg-green-200 rounded-full h-4 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${crop.rating}%` }}
                  transition={{ duration: 1.2, ease: "easeOut" }}
                  className="h-4 rounded-full"
                  style={{ backgroundColor: "#166534" }}
                ></motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedCropsWithReviews;
