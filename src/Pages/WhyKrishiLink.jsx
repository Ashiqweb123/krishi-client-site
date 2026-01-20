import React from "react";
import chooseImg from "../assets/why choose.jpg";
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
    <div className="bg-gray-50 dark:bg-gray-900 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-base text-green-600 font-semibold tracking-wide uppercase">
            Why Choose
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl">
            Krishi Link
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-600 dark:text-gray-300 mx-auto">
            Krishi Link helps farmers access agricultural resources, advice, and
            market updates — all in one trusted platform.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex items-start space-x-4 p-6 bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-lg transition"
            >
              <div className="flex-shrink-0 text-3xl">{feature.icon}</div>
              <div>
                <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100">
                  {feature.title}
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300 text-sm">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <img
            src={chooseImg}
            alt="Krishi Illustration"
            className="w-full max-w-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default WhyKrishiLink;
