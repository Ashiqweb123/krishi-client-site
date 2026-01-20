import React from "react";
import toast, { Toaster } from "react-hot-toast";

const ContactUs = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    toast.success("Message sent successfully!");
  };

  return (
    <div className="max-w-4xl mx-auto p-10 text-gray-900 dark:text-gray-100">
      <Toaster position="top-right" reverseOrder={false} />

      <h1 className="text-4xl font-bold text-green-600 dark:text-green-400 mb-6">
        Contact Us
      </h1>

      <p className="mb-4">
        If you have any questions, suggestions, or feedback, feel free to reach
        out to us. We are always happy to hear from our users!
      </p>

      <div className="mb-4">
        <h2 className="text-2xl font-semibold text-green-600 dark:text-green-400 mb-2">
          Email
        </h2>
        <p>rabiulazim430@gmail.com</p>
      </div>

      <div className="mb-4">
        <h2 className="text-2xl font-semibold text-green-600 dark:text-green-400 mb-2">
          Phone
        </h2>
        <p>+880-1869614405</p>
      </div>

      <div className="mb-4">
        <h2 className="text-2xl font-semibold text-green-600 dark:text-green-400 mb-2">
          Address
        </h2>
        <p>Dhaka, Bangladesh</p>
      </div>

      <div className="mt-6">
        <h2 className="text-2xl font-semibold text-green-600 dark:text-green-400 mb-2">
          Message Us
        </h2>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Your Name"
            required
            className="p-2 border border-gray-300 rounded dark:bg-gray-800 dark:border-gray-600"
          />
          <input
            type="email"
            placeholder="Your Email"
            required
            className="p-2 border border-gray-300 rounded dark:bg-gray-800 dark:border-gray-600"
          />
          <textarea
            placeholder="Your Message"
            rows="4"
            required
            className="p-2 border border-gray-300 rounded dark:bg-gray-800 dark:border-gray-600"
          />
          <button
            type="submit"
            className="bg-green-600 dark:bg-green-400 text-white dark:text-gray-900 p-2 rounded hover:bg-green-700 dark:hover:bg-green-500 transition-colors"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
