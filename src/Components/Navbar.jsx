import React, { useState, useContext } from "react";
import { Link, NavLink } from "react-router"; // Keep same as your code
import { AuthContext } from "../Context/AuthContext";

const Navbar = () => {
  const authContext = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false); // Hamburger state

  if (!authContext) return null;

  const { user, signOutUser } = authContext;

  const handleLogout = () => {
    signOutUser()
      .then(() => console.log("User logged out"))
      .catch((err) => console.error(err));
  };

  const navLinkClass = ({ isActive }) =>
    isActive
      ? "text-green-600 font-semibold"
      : "text-gray-700 hover:text-green-600";

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img
            src="https://cdn-icons-png.flaticon.com/512/619/619034.png"
            alt="logo"
            className="w-8 h-8"
          />
          <h1 className="text-xl font-bold text-green-700">KrishiLink</h1>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-6">
          <NavLink to="/" className={navLinkClass}>
            Home
          </NavLink>
          <NavLink to="/all-crops" className={navLinkClass}>
            All Crops
          </NavLink>
          <NavLink to="/faq" className={navLinkClass}>
            FAQ
          </NavLink>
          <NavLink to="/profile" className={navLinkClass}>
            My Profile
          </NavLink>
          <NavLink to="/about" className={navLinkClass}>
            About
          </NavLink>
          <NavLink to="/feauture-crops" className={navLinkClass}>
            Feature Crops
          </NavLink>
          <NavLink to="/reviewes" className={navLinkClass}>
            Reviewes
          </NavLink>

          {!user && (
            <>
              <NavLink to="/auth/login" className={navLinkClass}>
                Login
              </NavLink>
              <NavLink to="/auth/register" className={navLinkClass}>
                Register
              </NavLink>
            </>
          )}

          {user && (
            <>
              <NavLink to="/add-crop" className={navLinkClass}>
                Add Crops
              </NavLink>
              <NavLink to="/my-posts" className={navLinkClass}>
                My Posts
              </NavLink>
              <NavLink to="/my-interests" className={navLinkClass}>
                My Interests
              </NavLink>

              <button
                onClick={handleLogout}
                className="bg-green-600 text-white px-3 py-1 rounded-lg hover:bg-green-700"
              >
                Logout
              </button>

              {user?.photoURL && (
                <img
                  src={user.photoURL}
                  alt="user"
                  className="w-8 h-8 rounded-full border"
                  title={user.displayName}
                />
              )}
            </>
          )}
        </div>

        {/* Hamburger Icon */}
        <div
          className="md:hidden flex flex-col gap-1 cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span
            className={`block w-6 h-0.5 bg-green-700 transition-transform ${
              isOpen ? "rotate-45 translate-y-1.5" : ""
            }`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-green-700 transition-opacity ${
              isOpen ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-green-700 transition-transform ${
              isOpen ? "-rotate-45 -translate-y-1.5" : ""
            }`}
          ></span>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-white shadow-md transition-max-height duration-300 overflow-hidden ${
          isOpen ? "max-h-screen" : "max-h-0"
        }`}
      >
        <div className="flex flex-col items-center gap-4 py-4">
          <NavLink
            to="/"
            className={navLinkClass}
            onClick={() => setIsOpen(false)}
          >
            Home
          </NavLink>
          <NavLink
            to="/all-crops"
            className={navLinkClass}
            onClick={() => setIsOpen(false)}
          >
            All Crops
          </NavLink>
          <NavLink
            to="/faq"
            className={navLinkClass}
            onClick={() => setIsOpen(false)}
          >
            FAQ
          </NavLink>
          <NavLink
            to="/profile"
            className={navLinkClass}
            onClick={() => setIsOpen(false)}
          >
            My Profile
          </NavLink>
          <NavLink
            to="/about"
            className={navLinkClass}
            onClick={() => setIsOpen(false)}
          >
            About
          </NavLink>
          <NavLink
            to="/feauture-crops"
            className={navLinkClass}
            onClick={() => setIsOpen(false)}
          >
            Feature Crops
          </NavLink>
          <NavLink
            to="/reviewes"
            className={navLinkClass}
            onClick={() => setIsOpen(false)}
          >
            Reviewes
          </NavLink>

          {!user && (
            <>
              <NavLink
                to="/auth/login"
                className={navLinkClass}
                onClick={() => setIsOpen(false)}
              >
                Login
              </NavLink>
              <NavLink
                to="/auth/register"
                className={navLinkClass}
                onClick={() => setIsOpen(false)}
              >
                Register
              </NavLink>
            </>
          )}

          {user && (
            <>
              <NavLink
                to="/add-crop"
                className={navLinkClass}
                onClick={() => setIsOpen(false)}
              >
                Add Crops
              </NavLink>
              <NavLink
                to="/my-posts"
                className={navLinkClass}
                onClick={() => setIsOpen(false)}
              >
                My Posts
              </NavLink>
              <NavLink
                to="/my-interests"
                className={navLinkClass}
                onClick={() => setIsOpen(false)}
              >
                My Interests
              </NavLink>

              <button
                onClick={() => {
                  handleLogout();
                  setIsOpen(false);
                }}
                className="bg-green-600 text-white px-3 py-1 rounded-lg hover:bg-green-700"
              >
                Logout
              </button>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
