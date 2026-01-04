import React, { useContext, useState } from "react";
import { AuthContext } from "../Context/AuthContext";

const CropReceivedInterests = ({ crop }) => {
  const { user } = useContext(AuthContext);
  const [interests, setInterests] = useState(crop.interests || []);

  const handleUpdateStatus = async (interestId, status) => {
    try {
      const res = await fetch(`https://krishilinkapp.vercel.app/crops/${crop._id}/interest/${interestId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status }),
      });
      if (!res.ok) throw new Error();
      const updated = interests.map(i => i._id === interestId ? { ...i, status } : i);
      setInterests(updated);
    } catch (error) {
      alert("Error updating status",error);
    }
  };

  if (!user || user.email !== crop.owner.ownerEmail) return null;

  return (
    <section className="p-6 rounded-md shadow-md mt-8">
      <h2 className="text-2xl font-bold mb-4">Received Interests</h2>
      {interests.length === 0 ? (
        <p>No interest requests yet.</p>
      ) : (
        <table className="w-full table-auto border border-gray-300">
          <thead className="bg-green-100">
            <tr>
              <th className="border px-4 py-2">Buyer Name</th>
              <th className="border px-4 py-2">Quantity</th>
              <th className="border px-4 py-2">Message</th>
              <th className="border px-4 py-2">Status</th>
              <th className="border px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {interests.map(i => (
              <tr key={i._id}>
                <td className="border px-4 py-2">{i.userName}</td>
                <td className="border px-4 py-2">{i.quantity} {crop.unit}</td>
                <td className="border px-4 py-2">{i.message || "-"}</td>
                <td className="border px-4 py-2">{i.status}</td>
                <td className="border px-4 py-2 flex gap-2">
                  {i.status === "pending" && (
                    <>
                      <button
                        onClick={() => handleUpdateStatus(i._id, "accepted")}
                        className="bg-green-600 text-white px-2 py-1 rounded hover:bg-green-700"
                      >
                        Accept
                      </button>
                      <button
                        onClick={() => handleUpdateStatus(i._id, "rejected")}
                        className="bg-red-600 text-white px-2 py-1 rounded hover:bg-red-700"
                      >
                        Reject
                      </button>
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </section>
  );
};

export default CropReceivedInterests;
