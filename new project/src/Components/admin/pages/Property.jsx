import React, { useState } from "react";

export default function Property() {

  const [properties, setProperties] = useState([
    {
      id: 1,
      owner: "Deepjot Kaur",
      title: "Cozy Apartment",
      size: "1200 sqft",
      images: [
        "public/assets/img/about-company-2.jpg",
        "https://via.placeholder.com/80"
      ],
      status: "Available",
      price: "₹15,000/month",
      desc: "Nice and cozy apartment in city center.",
      city: "Chandigarh",
    },
    {
      id: 2,
      owner: "Raj Singh",
      title: "Luxury Villa",
      size: "3500 sqft",
      images: [
        "https://via.placeholder.com/80"
      ],
      status: "Booked",
      price: "₹1,50,000/month",
      desc: "Spacious villa with garden and pool.",
      city: "Noida",
    },
  ]);

  // Delete handler example
  const handleDelete = (id) => {
    if(window.confirm("Are you sure you want to delete this property?")) {
      setProperties(properties.filter(prop => prop.id !== id));
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold mb-4">Manage Properties</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-300">
          <thead className="bg-gray-100">
            <tr>
              <th className="border px-3 py-2">S.No.</th>
              <th className="border px-3 py-2">Owner</th>
              <th className="border px-3 py-2">Title</th>
              <th className="border px-3 py-2">Size</th>
              <th className="border px-3 py-2">Images</th>
              <th className="border px-3 py-2">Status</th>
              <th className="border px-3 py-2">Price</th>
              <th className="border px-3 py-2">Description</th>
              <th className="border px-3 py-2">City</th>
              <th className="border px-3 py-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {properties.map((prop, index) => (
              <tr key={prop.id} className="text-center border-b">
                <td className="border px-3 py-2">{index + 1}</td>
                <td className="border px-3 py-2">{prop.owner}</td>
                <td className="border px-3 py-2">{prop.title}</td>
                <td className="border px-3 py-2">{prop.size}</td>
                <td className="border px-3 py-2 flex justify-center space-x-2">
                  {prop.images.map((img, i) => (
                    <img
                      key={i}
                      src={img}
                      alt={`Property ${prop.title} ${i + 1}`}
                      className="w-16 h-12 object-cover rounded"
                    />
                  ))}
                </td>
                <td className="border px-3 py-2">{prop.status}</td>
                <td className="border px-3 py-2">{prop.price}</td>
                <td className="border px-3 py-2">{prop.desc}</td>
                <td className="border px-3 py-2">{prop.city}</td>
                <td className="border px-3 py-2 space-x-2">
                  <button
                    onClick={() => alert("Edit functionality pending")}
                    className="px-2 py-1 mb-2 bg-blue-500 text-black rounded hover:bg-blue-600"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(prop.id)}
                    className="px-2 py-1 bg-red-500 text-black rounded hover:bg-red-600"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
            {properties.length === 0 && (
              <tr>
                <td colSpan="10" className="py-4 text-center text-gray-500">
                  No properties found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
