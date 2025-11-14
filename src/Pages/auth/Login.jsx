import React, { useContext, useState } from "react";

import { Link } from "react-router";
import { AuthContext } from "../../Context/AuthContext";
// import { AuthContext } from "../../context/AuthContext";


const Login = () => {
  const { signInUser, signInWithGoogle } = useContext(AuthContext);
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    signInUser(email, password)
      .then(() => {
        setError("");
        alert("Login successful!");
      })
      .catch((err) => setError(err.message));
  };

  const handleGoogleLogin = () => {
    signInWithGoogle()
      .then(() => {
        alert("Logged in with Google!");
      })
      .catch((err) => setError(err.message));
  };

  return (
    <div className="min-h-screen flex items-center justify-center ">
      <div className="p-8 rounded-2xl shadow-lg w-96">
        <h2 className="text-2xl font-bold text-center text-green-700 mb-6">
          Login 
        </h2>

        <form onSubmit={handleLogin} className="space-y-4">
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
            Login
          </button>
        </form>

        {error && <p className="text-red-500 text-sm mt-2">{error}</p>}

        <button
          onClick={handleGoogleLogin}
          className="w-full mt-4 border py-2 rounded-lg hover:bg-gray-100"
        >
          Sign in with Google
        </button>

        <p className="text-sm text-center mt-4">
          Don’t have an account?{" "}
          <Link to="/auth/register" className="text-green-600 font-semibold">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
