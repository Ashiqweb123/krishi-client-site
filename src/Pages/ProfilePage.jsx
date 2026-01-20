import React, { useContext, useState, useEffect } from "react";
import { AuthContext } from "../Context/AuthContext";
import toast from "react-hot-toast";

const ProfilePage = () => {
  const { user, updateUserProfile } = useContext(AuthContext);
  const [displayName, setDisplayName] = useState("");
  const [photoURL, setPhotoURL] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (user) {
      setDisplayName(user.displayName || "");
      setPhotoURL(user.photoURL || "");
    }
  }, [user]);

  const handleSave = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await updateUserProfile(displayName, photoURL);
      toast.success("Profile updated successfully!");
    } catch (err) {
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  };

  if (!user)
    return (
      <p className="text-center mt-10 text-green-900 font-semibold">
        Loading user info...
      </p>
    );

  return (
    <section className="w-full min-h-screen bg-gradient-to-r from-green-50 to-green-100 py-10">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-green-900 mb-8">My Profile</h2>

        <div className="bg-white shadow-xl rounded-lg p-6 flex flex-col md:flex-row gap-8">
          {/* Profile Picture */}
          <div className="md:w-1/3 flex flex-col items-center">
            <img
              src={photoURL || "https://via.placeholder.com/150"}
              alt="Profile"
              className="w-40 h-40 rounded-full object-cover border-4 border-green-300 mb-4"
            />
            <input
              type="text"
              placeholder="Photo URL"
              value={photoURL}
              onChange={(e) => setPhotoURL(e.target.value)}
              className="w-full p-2 border border-green-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 bg-green-50 text-green-900 placeholder-green-500"
            />
          </div>

          {/* Profile Info */}
          <div className="md:w-2/3">
            <form onSubmit={handleSave} className="space-y-4">
              <div>
                <label className="block font-semibold text-green-900 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  value={displayName}
                  onChange={(e) => setDisplayName(e.target.value)}
                  className="w-full p-2 border border-green-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 bg-green-50 text-green-900 placeholder-green-500"
                  required
                />
              </div>

              <div>
                <label className="block font-semibold text-green-900 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  value={user.email}
                  disabled
                  className="w-full p-2 border border-green-300 rounded-lg bg-green-100 text-green-700"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="bg-green-700 text-white py-2 px-4 rounded-lg hover:bg-green-800 transition-colors"
              >
                {loading ? "Saving..." : "Save Changes"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfilePage;
