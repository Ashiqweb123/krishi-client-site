import React, { useContext, useState } from "react";
import { AuthContext } from "../Context/AuthContext";
import { useLoaderData } from "react-router";
import toast from "react-hot-toast";


const MyPosts = () => {
  const { user } = useContext(AuthContext);
  const allCrops = useLoaderData()
  const [crops, setCrops] = useState(
    allCrops.filter((crop) => crop.owner?.ownerEmail === user?.email)
  );
  const [selectedCrop, setSelectedCrop] = useState(null);
  const [showEdit, setShowEdit] = useState(false);
  const [showDelete, setShowDelete] = useState(false);

  const handleEdit = (crop) => {
    setSelectedCrop(crop);
    setShowEdit(true);
  };

  const handleDelete = (crop) => {
    setSelectedCrop(crop);
    setShowDelete(true);
  };

  const handleEditSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const updated = {
      name: form.name.value,
      type: form.type.value,
      pricePerUnit: form.pricePerUnit.value,
      unit: form.unit.value,
      quantity: form.quantity.value,
      location: form.location.value,
      image: form.image.value,
      description: form.description.value,
    };

    const res = await fetch(`https://krishilinkapp.vercel.app/crops/${selectedCrop._id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updated),
    });

    if (res.ok) {
      const newList = crops.map((c) =>
        c._id === selectedCrop._id ? { ...c, ...updated } : c
      );
      setCrops(newList);
      setShowEdit(false);
      toast.success("Crop updated successfully!");
    }
  };

  const confirmDelete = async () => {
    const res = await fetch(`https://krishilinkapp.vercel.app/crops/${selectedCrop._id}`, {
      method: "DELETE",
    });
    if (res.ok) {
      const newList = crops.filter((c) => c._id !== selectedCrop._id);
      setCrops(newList);
      setShowDelete(false);
      toast.error("Crop deleted!");
    }
  };

  if (!user) {
    return <p className="text-center mt-10">Please log in to see your posts.</p>;
  }

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">My Posts</h2>

      {crops.length === 0 ? (
        <p>No crops added yet.</p>
      ) : (
        <table className="w-full border border-gray-300">
          <thead className="">
            <tr>
              <th className="border px-3 py-2">Name</th>
              <th className="border px-3 py-2">Type</th>
              <th className="border px-3 py-2">Price</th>
              <th className="border px-3 py-2">Quantity</th>
              <th className="border px-3 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {crops.map((crop) => (
              <tr key={crop._id}>
                <td className="border px-3 py-2">{crop.name}</td>
                <td className="border px-3 py-2">{crop.type}</td>
                <td className="border px-3 py-2">
                  {crop.pricePerUnit} / {crop.unit}
                </td>
                <td className="border px-3 py-2">{crop.quantity}</td>
                <td className="border px-3 py-2 flex gap-2">
                  <button
                    onClick={() => handleEdit(crop)}
                    className="bg-blue-600 text-white px-2 py-1 rounded"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(crop)}
                    className="bg-red-600 text-white px-2 py-1 rounded"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

     {/* Edit Modal */}
{showEdit && (
  <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-40">
    <div className=" p-6 rounded-md w-96 relative z-50">
      <h3 className="text-xl font-bold mb-3">Edit Crop</h3>
      <form onSubmit={handleEditSubmit} className="flex flex-col gap-2">
        <input name="name" defaultValue={selectedCrop.name} className="border p-2 w-full" />
        <input name="type" defaultValue={selectedCrop.type} className="border p-2 w-full" />
        <input name="pricePerUnit" defaultValue={selectedCrop.pricePerUnit} className="border p-2 w-full" />
        <input name="unit" defaultValue={selectedCrop.unit} className="border p-2 w-full" />
        <input name="quantity" defaultValue={selectedCrop.quantity} className="border p-2 w-full" />
        <input name="location" defaultValue={selectedCrop.location} className="border p-2 w-full" />
        <input name="image" defaultValue={selectedCrop.image} className="border p-2 w-full" />
        <textarea name="description" defaultValue={selectedCrop.description} className="border p-2 w-full" />
        <div className="flex justify-between mt-2">
          <button type="submit" className="bg-green-600 text-white px-3 py-1 rounded">Update</button>
          <button type="button" onClick={() => setShowEdit(false)} className="bg-gray-400 text-white px-3 py-1 rounded">Cancel</button>
        </div>
      </form>
    </div>
  </div>
)}

{/* Delete Modal */}
{showDelete && (
  <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-40">
    <div className=" p-6 rounded-md w-80 relative z-50">
      <p className="text-lg mb-4">Are you sure you want to delete "{selectedCrop.name}"?</p>
      <div className="flex justify-between">
        <button onClick={confirmDelete} className="bg-red-600 text-white px-3 py-1 rounded">Yes</button>
        <button onClick={() => setShowDelete(false)} className="bg-gray-400 text-white px-3 py-1 rounded">No</button>
      </div>
    </div>
  </div>
)}

    </div>
  );
};

export default MyPosts;
