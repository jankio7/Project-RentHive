import { useEffect, useState } from 'react';
 // adjust path if needed
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../../Firebase';

export default function Viewrooms() {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    const fetchRooms = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'rooms'));
        const roomList = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data()
        }));
        setRooms(roomList);
      } catch (error) {
        console.error("Error fetching rooms: ", error);
      }
    };

    fetchRooms();
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold mb-4">All Rooms</h2>
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {rooms.map((room) => (
          <div key={room.id} className="border p-4 rounded-lg shadow-sm bg-white">
            <h3 className="text-xl font-bold mb-2">{room.title}</h3>
            <p><strong>Type:</strong> {room.type}</p> 
             <p><strong>Description:</strong> {room.description}</p>
            <p className="text-gray-700 mb-1"><strong>Sharing:</strong> {room.sharing}</p>
            <p className="text-gray-700 mb-1"><strong>Rent:</strong> ₹{room.rent}</p>
       
          </div>
        ))}
      </div>
    </div>
  );
}
