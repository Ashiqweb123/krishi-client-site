
import React, { useContext } from "react";
import { useLoaderData } from "react-router";
import CropInterestForm from "../Components/CropInterestForm";
import CropReceivedInterests from "../Components/CropReceivedInterests";
import { AuthContext } from "../Context/AuthContext";


const CropDetails = () => {
  const { user } = useContext(AuthContext);

  const crop = useLoaderData()
  console.log(crop)

  return (
  <div>
      <section className="container mx-auto px-4 py-10">
      <div className="flex flex-col md:flex-row gap-8 bg-green-50 rounded-lg shadow-lg p-6">
       
        <div className="md:w-1/2">
          <img
            src={crop.image}
            alt={crop.name}
            className="w-full h-auto rounded-lg object-cover"
          />
        </div>

        {/* Crop Details */}
        <div className="md:w-1/2 flex flex-col justify-between">
          <div>
            <h1 className="text-3xl font-bold text-green-700 mb-4">{crop.name}</h1>
            <p className="text-gray-700 mb-2"><strong>Type:</strong> {crop.type
}</p>
            <p className="text-gray-700 mb-2"><strong>Quantity:</strong> {crop.quantity} {crop.unit}</p>
            <p className="text-gray-700 mb-2"><strong>Price per Unit:</strong> {crop.pricePerUnit} BDT</p>
            <p className="text-gray-700 mb-2"><strong>Location:</strong> {crop.location}</p>
            <p className="text-gray-700 mb-2"><strong>Description:</strong> {crop.description}</p>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div>
              <CropInterestForm crop={crop} />

      </div>
      <div>
        {user && user.email === crop.owner.ownerEmail && (
  <CropReceivedInterests crop={crop} />
)}
      </div>
    </section>
  </div>
    
  );
};

export default CropDetails;
