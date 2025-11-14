
import React, { useContext, useState } from "react";
import { AuthContext } from "../Context/AuthContext";
import { useNavigate } from "react-router";

const AddCrops = () => {
      const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    type: "",
    pricePerUnit: "",
    unit: "",
    quantity: "",
    description: "",
    location: "",
    image: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!user) {
      alert("You must be logged in to add a crop!");
      return;
    }

    const newCrop = {
      ...formData,
      pricePerUnit: Number(formData.pricePerUnit),
      quantity: Number(formData.quantity),
      owner: {
        ownerEmail: user .email,
        ownerName: user.displayName || user.email,
      },
    };

    try {
      const res = await fetch("http://localhost:3000/crops", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newCrop),
      });

      if (!res.ok) throw new Error("Failed to add crop");

      alert("✅ Crop added successfully!");
      navigate("/my-posts"); 
    } catch (err) {
      console.error(err);
      alert("Error adding crop!");
    }
  };
    return (
        <div>
            <section className="w-full mx-auto p-6 rounded-md shadow-md mt-8">
      <h2 className="text-2xl font-bold mb-4 text-green-700">Add New Crop</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block font-medium">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="border p-2 rounded w-full"
            required
          />
        </div>

        <div>
          <label className="block font-medium">Type</label>
          <input
            type="text"
            name="type"
            value={formData.type}
            onChange={handleChange}
            placeholder="Vegetable, Fruit, Grain"
            className="border p-2 rounded w-full"
            required
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block font-medium">Price per Unit</label>
            <input
              type="number"
              name="pricePerUnit"
              value={formData.pricePerUnit}
              onChange={handleChange}
              className="border p-2 rounded w-full"
              required
            />
          </div>

          <div>
            <label className="block font-medium">Unit</label>
            <input
              type="text"
              name="unit"
              value={formData.unit}
              onChange={handleChange}
              placeholder="kg, ton, bag"
              className="border p-2 rounded w-full"
              required
            />
          </div>
        </div>

        <div>
          <label className="block font-medium">Estimated Quantity</label>
          <input
            type="number"
            name="quantity"
            value={formData.quantity}
            onChange={handleChange}
            className="border p-2 rounded w-full"
            required
          />
        </div>

        <div>
          <label className="block font-medium">Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="border p-2 rounded w-full"
            rows="3"
            required
          />
        </div>

        <div>
          <label className="block font-medium">Location</label>
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            className="border p-2 rounded w-full"
            required
          />
        </div>

        <div>
          <label className="block font-medium">Image URL</label>
          <input
            type="text"
            name="image"
            value={formData.image}
            onChange={handleChange}
            placeholder="https://example.com/crop.jpg"
            className="border p-2 rounded w-full"
            required
          />
        </div>

        <button
          type="submit"
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          Add Crop
        </button>
      </form>
    </section>
        </div>
    );
};

export default AddCrops;