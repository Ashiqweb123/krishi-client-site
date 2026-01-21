import React from "react";
import { motion } from "framer-motion";

const newsData = [
  {
    title: "Organic Farming Tips",
    date: "Nov 10, 2025",
    desc: "Learn how to maximize your organic crop yield with sustainable practices.",
  },
  {
    title: "Latest Market Prices",
    date: "Nov 11, 2025",
    desc: "Stay updated with the current prices for crops in your region.",
  },
  {
    title: "New Agro Technologies",
    date: "Nov 12, 2025",
    desc: "Discover innovative tools and technologies that help farmers increase efficiency.",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const card = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const AgroNews = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-12 text-gray-800"
        >
          🌾 Agro News
        </motion.h2>

        {/* Cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {newsData.map((item, index) => (
            <motion.div
              key={index}
              variants={card}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl p-6 border-l-4 border-green-500 transition-all"
            >
              <h3 className="text-xl font-bold mb-2 text-gray-800">
                {item.title}
              </h3>
              <span className="text-sm text-gray-500 mb-3 block">
                {item.date}
              </span>
              <p className="text-gray-600">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AgroNews;
