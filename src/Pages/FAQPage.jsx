import React, { useState } from "react";

const FAQPage = () => {
  const faqs = [
    {
      question: "How do I create an account?",
      answer:
        "You can create an account by clicking the Register button on the top right and filling out your details.",
    },
    {
      question: "Can I sell my crops here?",
      answer:
        "Yes! After logging in, go to Add Crops and fill in the details of your crops to list them.",
    },
    {
      question: "Is there a demo account available?",
      answer:
        "Yes, you can use the Demo User button on the Login page to try out the platform without registering.",
    },
    {
      question: "How do I edit my profile?",
      answer:
        "Go to your Profile page after logging in. You can update your name, profile picture, and view your email.",
    },
    {
      question: "Is my data safe?",
      answer:
        "Yes, all data is securely stored using Firebase Authentication and Firestore.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    if (activeIndex === index) setActiveIndex(null);
    else setActiveIndex(index);
  };

  return (
    <section className="w-full min-h-screen bg-green-50 py-10">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-green-700 mb-8 text-center">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left px-6 py-4 flex justify-between items-center text-green-800 font-semibold focus:outline-none"
              >
                {faq.question}
                <span className="text-xl">
                  {activeIndex === index ? "−" : "+"}
                </span>
              </button>
              {activeIndex === index && (
                <div className="px-6 py-4 text-gray-700 border-t border-green-100">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQPage;
