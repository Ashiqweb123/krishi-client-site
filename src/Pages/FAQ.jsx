import React, { useState } from "react";

const faqData = [
  {
    question: "KrishiLink কি?",
    answer:
      "KrishiLink একটি platform যা সরাসরি কৃষক এবং ক্রেতাদের connect করে। এখানে আপনি crops বিক্রি ও কিনতে পারবেন।",
  },
  {
    question: "কিভাবে crops post করতে হবে?",
    answer:
      "আপনি login করার পরে 'Add Crop' section থেকে আপনার crops post করতে পারবেন।",
  },
  {
    question: "Payment কিভাবে হবে?",
    answer:
      "KrishiLink payment process করে না, আপনি buyers সাথে direct যোগাযোগ করবেন।",
  },
  {
    question: "KrishiLink কি free?",
    answer: "হ্যাঁ, KrishiLink ব্যবহার করা সম্পূর্ণ free।",
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Frequently Asked Questions
        </h2>
        <div className="max-w-3xl mx-auto space-y-4">
          {faqData.map((faq, idx) => (
            <div key={idx} className="border rounded-lg overflow-hidden shadow">
              <button
                className="w-full text-left px-6 py-4 bg-green-50 dark:bg-gray-700 font-medium flex justify-between items-center"
                onClick={() => toggle(idx)}
              >
                {faq.question}
                <span>{activeIndex === idx ? "−" : "+"}</span>
              </button>
              {activeIndex === idx && (
                <div className="px-6 py-4 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200">
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

export default FAQ;
