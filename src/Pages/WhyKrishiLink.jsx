import React from "react";
import { motion } from "framer-motion";
import chooseImg from "../assets/why choose.jpg";

/* Animation Variants */
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const item = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

/* Features Data */
const features = [
  {
    title: "Global Reach",
    description: "Access farming resources and tips from experts worldwide.",
    icon: "🌍",
  },
  {
    title: "Secure Guidance",
    description: "Trusted advice and verified agricultural partners.",
    icon: "🛡️",
  },
  {
    title: "Fast Processing",
    description: "Quick crop updates and advisory for farmers.",
    icon: "⚡",
  },
  {
    title: "Verified Experts",
    description: "All advisors and partners are verified and rated.",
    icon: "👨‍🌾",
  },
  {
    title: "Real-time Analytics",
    description: "Track crop performance and market trends easily.",
    icon: "📊",
  },
  {
    title: "24/7 Support",
    description: "Round-the-clock help for farmers and users.",
    icon: "⏰",
  },
];

const WhyKrishiLink = () => {
  return (
    <section className="bg-gray-50 dark:bg-gray-900 py-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-sm text-green-600 font-semibold uppercase tracking-wide">
            Why Choose
          </h2>
          <p className="mt-2 text-4xl font-extrabold text-gray-900 dark:text-white">
            Krishi Link
          </p>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-300">
            Krishi Link helps farmers access agricultural resources, advice, and
            market updates — all in one trusted platform.
          </p>
        </motion.div>

        {/* Feature Cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ scale: 1.05, y: -6 }}
              className="flex items-start gap-4 p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition-all"
            >
              <div className="text-3xl">{feature.icon}</div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {feature.title}
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300 text-sm">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 flex justify-center"
        >
          <img
            src={chooseImg}
            alt="Why Krishi Link"
            className="w-full max-w-lg rounded-xl shadow-lg"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default WhyKrishiLink;
