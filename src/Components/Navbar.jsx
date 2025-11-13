
import React, { useContext } from "react";

import { AuthContext } from "../context/AuthContext";
import { Link, NavLink, Outlet } from "react-router";

const Navbar = () => {
 const { user, signOutUser } = useContext(AuthContext);

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
   
             {/* Links */}
             <div className="flex items-center gap-6">
               <NavLink to="/" className={navLinkClass}>Home</NavLink>
               <NavLink to="/all-crops" className={navLinkClass}>All Crops</NavLink>
   
               {!user && (
                 <>
                   <NavLink to="/auth/login" className={navLinkClass}>Login</NavLink>
                   <NavLink to="/auth/register" className={navLinkClass}>Register</NavLink>
                 </>
               )}
   
               {user && (
                 <>
                   <NavLink to="/profile" className={navLinkClass}>Profile</NavLink>
                   <NavLink to="/add-crop" className={navLinkClass}>Add Crops</NavLink>
                   <NavLink to="/my-posts" className={navLinkClass}>My Posts</NavLink>
                   <NavLink to="/my-interests" className={navLinkClass}>My Interests</NavLink>
   
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
           </nav>
         </header>
   
  );
};

export default Navbar;
