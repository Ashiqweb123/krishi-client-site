import React, { useContext, useState } from "react";

import { Link } from "react-router";
import { AuthContext } from "../../Context/AuthContext";
import toast from "react-hot-toast";
// import { AuthContext } from "./";


const Register = () => {
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const [error, setError] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    createUser(email, password)
      .then(() => {
        updateUserProfile(name, photo);
        toast.success("Account created successfully!");
        setError("");
      })
      .catch((err) => setError(err.message));
  };

  return (
    <div className="min-h-screen flex items-center justify-center ">
      <div className=" p-8 rounded-2xl shadow-lg w-96">
        <h2 className="text-2xl font-bold text-center text-green-700 mb-6">
          Register 
        </h2>

        <form onSubmit={handleRegister} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            className="w-full p-2 border rounded-lg "
            required
          />
          <input
            type="text"
            name="photo"
            placeholder="Photo URL"
            className="w-full p-2 border rounded-lg"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="w-full p-2 border rounded-lg"
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="w-full p-2 border rounded-lg"
            required
          />

          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700"
          >
            Register
          </button>
        </form>

        {error && <p className="text-red-500 text-sm mt-2">{error}</p>}

        <p className="text-sm text-center mt-4">
          Already have an account?{" "}
          <Link to="/auth/login" className="text-green-600 font-semibold">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
