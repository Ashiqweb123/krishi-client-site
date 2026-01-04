import React from "react";

const AboutPage = () => {
  return (
    <section className="w-full min-h-screen bg-green-50 py-10">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-green-700 mb-6 text-center">
          About KrishiLink
        </h2>
        <p className="text-gray-700 text-lg mb-4">
          KrishiLink is a platform connecting farmers directly with consumers.
          We aim to provide fresh, organic crops straight from the farm to your
          home, ensuring quality and transparency in agriculture.
        </p>
        <p className="text-gray-700 text-lg mb-4">
          Our platform allows farmers to list their crops, manage orders, and
          connect with interested buyers. Consumers can explore a variety of
          fresh crops, place interests, and buy directly from local farmers.
        </p>
        <p className="text-gray-700 text-lg">
          At KrishiLink, we value sustainability, freshness, and community. Our
          mission is to make farm-to-table easy and accessible for everyone.
        </p>
      </div>
    </section>
  );
};

export default AboutPage;
