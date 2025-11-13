import React from 'react';

const Works = () => {
    return (
       <section className="py-16 ">
      <div className="container mx-auto px-4">
        {/* Centered Section Title */}
        <h2 className="text-4xl font-bold text-center mb-12 text-green-500">How It Works</h2>

        <div className="grid md:grid-cols-4 gap-8">
          {/* Step 1 */}
          <div className=" p-6 rounded-lg shadow hover:shadow-lg transition text-center">
            <h3 className="text-xl font-semibold mb-2">Sign Up/Login</h3>
            <p className="text-gray-700">
              Create an account or login to access all features.
            </p>
          </div>

          {/* Step 2 */}
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition text-center">
            <h3 className="text-xl font-semibold mb-2">Browse Crops</h3>
            <p className="text-gray-700">
              Check the latest crops posted by local farmers.
            </p>
          </div>

          {/* Step 3 */}
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition text-center">
            <h3 className="text-xl font-semibold mb-2">Add Your Post</h3>
            <p className="text-gray-700">
              Share your crops and products with the community.
            </p>
          </div>

          {/* Step 4 */}
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition text-center">
            <h3 className="text-xl font-semibold mb-2">Connect & Buy</h3>
            <p className="text-gray-700">
              Message farmers and make secure transactions.
            </p>
          </div>
        </div>
      </div>
    </section>
    );
};

export default Works;