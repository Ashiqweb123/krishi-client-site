import React, { useState } from "react";
import { motion } from "framer-motion";

const tabs = ["Mission", "Vision", "Team", "Policy"];

const content = {
  Mission: `KrishiLink’s mission is to empower farmers by connecting them directly with consumers, removing unnecessary middlemen and ensuring fair prices for their hard work.
We aim to make fresh, organic, and locally grown crops easily accessible while promoting transparency, trust, and digital inclusion in agriculture.`,

  Vision: `Our vision is to create a sustainable and technology-driven agricultural ecosystem where farmers grow with confidence and consumers trust the source of their food.
We strive to modernize traditional farming practices through innovation, data-driven insights, and community collaboration.`,

  Team: `KrishiLink is built by a passionate team of agricultural specialists, software developers, and social innovators who believe in transforming rural livelihoods.
Together, we work to bridge the gap between farmers and buyers by building reliable, secure, and easy-to-use digital solutions.`,

  Policy: `We follow strict standards for data privacy, ethical trade, and quality assurance to protect both farmers and consumers.
KrishiLink is committed to fair business practices, transparent operations, and continuous improvement to maintain trust across our platform.`,
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const AboutPage = () => {
  const [activeTab, setActiveTab] = useState("Mission");

  return (
    <section className="min-h-screen bg-gradient-to-br from-green-50 to-white py-16">
      <div className="max-w-5xl mx-auto px-6">
        <motion.h2
          initial="hidden"
          animate="show"
          variants={fadeUp}
          transition={{ duration: 0.6 }}
          className="text-4xl font-extrabold text-green-700 mb-10 text-center"
        >
          About KrishiLink
        </motion.h2>

        {/* Tabs */}
        <div className="flex justify-center gap-4 mb-10 flex-wrap">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-5 py-2 rounded-full font-semibold transition ${
                activeTab === tab
                  ? "bg-green-600 text-white shadow"
                  : "bg-white border text-green-700 hover:bg-green-100"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="bg-white rounded-2xl shadow-lg p-8 text-center text-lg text-gray-700"
        >
          {content[activeTab]}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutPage;
