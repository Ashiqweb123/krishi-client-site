import React, { useContext, useState } from "react";
import { Link } from "react-router";
import { AuthContext } from "../../Context/AuthContext";
import toast from "react-hot-toast";

const Login = () => {
  const { signInUser, signInWithGoogle, createUser } = useContext(AuthContext);
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    signInUser(email, password)
      .then(() => {
        setError("");
        toast.success("Login successful!");
      })
      .catch((err) => setError(err.message));
  };

  const handleGoogleLogin = () => {
    signInWithGoogle()
      .then(() => toast.success("Logged in with Google!"))
      .catch((err) => setError(err.message));
  };

  const demoUserLogin = async () => {
    const email = "user@gmail.com";
    const password = "user1234@";

    try {
      // try login first
      await signInUser(email, password);
      toast.success("Demo login successful!");
    } catch (err) {
      if (err.code === "auth/user-not-found") {
        try {
          // auto register if user not exists
          await createUser(email, password);
          await signInUser(email, password);
          toast.success("Demo user registered & logged in!");
        } catch (regErr) {
          setError(regErr.message);
        }
      } else {
        setError(err.message);
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-green-600">
      <div className="p-8 rounded-2xl shadow-lg w-96 bg-green-800 text-white">
        <h2 className="text-2xl font-bold text-center mb-6">Login</h2>

        <form onSubmit={handleLogin} className="space-y-4">
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="w-full p-2 rounded-lg border border-green-300 text-black"
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="w-full p-2 rounded-lg border border-green-300 text-black"
            required
          />
          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg"
          >
            Login
          </button>
        </form>

        {error && <p className="text-red-400 text-sm mt-2">{error}</p>}

        <button
          onClick={demoUserLogin}
          className="w-full bg-green-500 hover:bg-green-600 py-2 rounded-lg text-white text-sm mt-4"
        >
          Demo User Login
        </button>

        <button
          onClick={handleGoogleLogin}
          className="w-full mt-4 border border-white py-2 rounded-lg hover:bg-green-700 text-white"
        >
          Sign in with Google
        </button>

        <p className="text-sm text-center mt-4">
          Don’t have an account?{" "}
          <Link
            to="/auth/register"
            className="underline font-semibold text-white"
          >
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
