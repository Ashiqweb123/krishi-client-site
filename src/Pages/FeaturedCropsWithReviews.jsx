import React from "react";

const cropSkills = [
  { name: "Tomato", rating: 80 },
  { name: "Potato", rating: 65 },
  { name: "Carrot", rating: 75 },
  { name: "Cucumber", rating: 90 },
];
const FeaturedCropsWithReviews = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10 text-green-800">
          Crop Reviews
        </h2>

        <div className="space-y-6 max-w-md mx-auto">
          {cropSkills.map((crop, idx) => (
            <div key={idx}>
              {/* Name left, percentage right */}
              <div className="flex justify-between mb-1">
                <span className="text-gray-800 font-semibold">{crop.name}</span>
                <span className="text-gray-600 font-medium">
                  {crop.rating}%
                </span>
              </div>

              <div className="w-full bg-green-200 rounded-full h-4">
                <div
                  className="h-4 rounded-full"
                  style={{
                    width: `${crop.rating}%`,
                    backgroundColor: "#166534",
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCropsWithReviews;
