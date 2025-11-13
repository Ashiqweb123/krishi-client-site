import React, { useState, useContext } from "react";
import { AuthContext } from "../Context/AuthContext";


const CropInterestForm = ({ crop }) => {
  const { user } = useContext(AuthContext);

  const [quantity, setQuantity] = useState(1);
  const [message, setMessage] = useState("");

  // Total price auto-calculation
  const totalPrice = quantity * crop.pricePerUnit;

  // Submit handler
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!user) {
      alert("You must be logged in");
      return;
    }

    if (quantity < 1) {
      alert("Quantity must be at least 1");
      return;
    }

    const interest = {
      cropId: crop._id,
      userEmail: user.email,
      userName: user.displayName || user.email,
      quantity,
      message,
      status: "pending",
    };

    try {
      await fetch(`http://localhost:3000/crops/${crop._id}/interest`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(interest),
      });
      alert("Interest sent!");
    } catch (err) {
      console.error(err);
      alert("Error sending interest");
    }
  };

  // Hide form if user is crop owner
  if (user?.email === crop.owner.ownerEmail) return null;

  return (
    <div className=" p-6 rounded shadow mt-6">
      <h2 className="text-2xl font-bold mb-4">Send Interest</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <div>
          <label>Quantity ({crop.unit})</label>
          <input
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
            min={1}
            className="border p-2 rounded w-full"
          />
        </div>
        <div>
          <label>Message</label>
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Optional message"
            className="border p-2 rounded w-full"
          />
        </div>
        <p>Total Price: {totalPrice}</p>
        <button
          type="submit"
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default CropInterestForm;
