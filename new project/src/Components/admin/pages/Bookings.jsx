import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../Firebase";

export default function Bookings() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    async function fetchBookings() {
      try {
        const querySnapshot = await getDocs(collection(db, "bookings"));
        const bookingsData = [];

        querySnapshot.forEach((doc) => {
          bookingsData.push({ id: doc.id, ...doc.data() });
        });

        setBookings(bookingsData);
      } catch (error) {
        console.error("Error fetching bookings:", error);
      }
    }

    fetchBookings();
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Manage Bookings</h2>
      <table className="w-full border border-collapse border-gray-300">
        <thead className="bg-gray-200">
          <tr className="text-center">
            <th className="border px-2 py-1">S.No.</th>
            <th className="border px-2 py-1">User Details</th>
            <th className="border px-2 py-1">Owner Details</th>
            <th className="border px-2 py-1">Property Details</th>
            <th className="border px-2 py-1">Actions</th>
          </tr>
        </thead>
        <tbody>
          {bookings.length === 0 ? (
            <tr>
              <td colSpan={5} className="py-4 text-center text-gray-500">
                No bookings found.
              </td>
            </tr>
          ) : (
            bookings.map((booking, index) => (
              <tr key={booking.id} className="text-center border-b">
                <td className="border px-2 py-1">{index + 1}</td>
                <td className="border px-2 py-1">{booking.userId || "N/A"}</td>
                <td className="border px-2 py-1">{booking.ownerId || "N/A"}</td>
                <td className="border px-2 py-1">{booking.propertyId || "N/A"}</td>
                <td className="border px-2 py-1">
                  <button className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600">
                    Delete
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}


