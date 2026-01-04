import React, { useContext } from "react";
import { useLoaderData } from "react-router";
import CropInterestForm from "../Components/CropInterestForm";
import CropReceivedInterests from "../Components/CropReceivedInterests";
import { AuthContext } from "../Context/AuthContext";

const CropDetails = () => {
  const { user } = useContext(AuthContext);
  const crop = useLoaderData();

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

          <div className="md:w-1/2 flex flex-col justify-between gap-6">
            <div>
              <h1 className="text-3xl font-bold text-green-700 mb-4">
                {crop.name}
              </h1>

              <section className="mb-4">
                <h2 className="text-xl font-semibold mb-2 text-green-700">
                  Overview / Description
                </h2>
                <p className="text-gray-700">{crop.description}</p>
              </section>

              <section className="mb-4">
                <h2 className="text-xl font-semibold mb-2 text-green-700">
                  Key Information / Specs
                </h2>
                <p className="text-gray-700">
                  <strong>Type:</strong> {crop.type}
                </p>
                <p className="text-gray-700">
                  <strong>Quantity:</strong> {crop.quantity} {crop.unit}
                </p>
                <p className="text-gray-700">
                  <strong>Price per Unit:</strong> {crop.pricePerUnit} BDT
                </p>
                <p className="text-gray-700">
                  <strong>Location:</strong> {crop.location}
                </p>
              </section>

              {crop.reviews?.length > 0 && (
                <section className="mb-4">
                  <h2 className="text-xl font-semibold mb-2 text-green-700">
                    Reviews / Ratings
                  </h2>
                  <ul className="text-gray-700 list-disc list-inside">
                    {crop.reviews.map((review, idx) => (
                      <li key={idx}>
                        <strong>{review.user}:</strong> {review.comment} (
                        {review.rating}/5)
                      </li>
                    ))}
                  </ul>
                </section>
              )}

              {crop.related?.length > 0 && (
                <section className="mb-4">
                  <h2 className="text-xl font-semibold mb-2 text-green-700">
                    Related / Suggested Items
                  </h2>
                  <div className="flex flex-wrap gap-4">
                    {crop.related.map((item) => (
                      <div
                        key={item._id}
                        className="bg-white shadow rounded-lg p-2 w-32 text-center"
                      >
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-20 object-cover rounded"
                        />
                        <p className="text-sm text-green-700 font-semibold mt-1">
                          {item.name}
                        </p>
                      </div>
                    ))}
                  </div>
                </section>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-6">
        <CropInterestForm crop={crop} />
      </section>

      {user && user.email === crop.owner.ownerEmail && (
        <section className="container mx-auto px-4 py-6">
          <CropReceivedInterests crop={crop} />
        </section>
      )}
    </div>
  );
};

export default CropDetails;
