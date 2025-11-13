import React from "react";

const AgroNews = () => {
  return (
    <section className="py-16 ">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <h2 className="text-4xl font-bold text-center mb-12">Agro News</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="card bg-green-500 shadow-lg hover:shadow-xl p-6 transition-all duration-300">
            <div className="card-body">
              <h3 className="text-xl font-bold mb-2">Organic Farming Tips</h3>
              <span className="text-sm text-gray-600 mb-2 block">Nov 10, 2025</span>
              <p className="text-gray-800">
                Learn how to maximize your organic crop yield with sustainable practices.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="card bg-green-500 shadow-lg hover:shadow-xl p-6 transition-all duration-300">
            <div className="card-body">
              <h3 className="text-xl font-bold mb-2">Latest Market Prices</h3>
              <span className="text-sm text-gray-600 mb-2 block">Nov 11, 2025</span>
              <p className="text-gray-800">
                Stay updated with the current prices for crops in your region.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="card bg-green-500 shadow-lg hover:shadow-xl p-6 transition-all duration-300">
            <div className="card-body">
              <h3 className="text-xl font-bold mb-2">New Agro Technologies</h3>
              <span className="text-sm text-gray-600 mb-2 block">Nov 12, 2025</span>
              <p className="text-gray-800">
                Discover innovative tools and technologies that help farmers increase efficiency.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AgroNews;
