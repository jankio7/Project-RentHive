// import { useEffect, useState } from 'react';
// import { collection, getDocs } from 'firebase/firestore';
// import { db } from '../../../Firebase';
// import { useNavigate } from 'react-router-dom'; 

// export default function Viewrooms() {
//   const [rooms, setRooms] = useState([]);
//   const navigate = useNavigate(); 

//   useEffect(() => {
//     const fetchRooms = async () => {
//       try {
//         const querySnapshot = await getDocs(collection(db, 'rooms'));
//         const roomList = querySnapshot.docs.map((doc) => ({
//           id: doc.id,
//           ...doc.data()
//         }));
//         setRooms(roomList);
//       } catch (error) {
//         console.error("Error fetching rooms: ", error);
//       }
//     };

//     fetchRooms();
//   }, []);

//   return (
//     <div className="p-4">
//       <button 
//         onClick={() => navigate("/admin/roomcred/addroom")}
//         className="mb-4 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
//       >
//         + Add Room
//       </button>

//       <h2 className="text-2xl font-semibold mb-4">All Rooms</h2>
//       <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
//         {rooms.map((room) => (
//           <div key={room.id} className="border p-4 rounded-lg shadow-sm bg-white">
//             <h3 className="text-xl font-bold mb-2">{room.title}</h3>
//             <p><strong>Type:</strong> {room.type}</p> 
//             <p><strong>Description:</strong> {room.description}</p>
//             <p className="text-gray-700 mb-1"><strong>Sharing:</strong> {room.sharing}</p>
//             <p className="text-gray-700 mb-1"><strong>Rent:</strong> ₹{room.rent}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

import { useEffect, useState } from 'react';
import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore';
import { db } from '../../../Firebase';
import Swal from 'sweetalert2';

export default function ViewRooms() {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    const fetchRooms = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'rooms'));
        const roomList = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        }));
        setRooms(roomList);
      } catch (error) {
        console.error('Error fetching rooms:', error);
      }
    };

    fetchRooms();
  }, []);

  const handleDelete = async (id) => {
    const confirm = await Swal.fire({
      title: 'Are you sure?',
      text: 'This room will be deleted permanently!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
    });

    if (confirm.isConfirmed) {
      try {
        await deleteDoc(doc(db, 'rooms', id));
        setRooms(prevRooms => prevRooms.filter(room => room.id !== id));

        Swal.fire('Deleted!', 'Room has been deleted.', 'success');
      } catch (error) {
        console.error('Error deleting room:', error);
        Swal.fire('Error!', 'Could not delete the room.', 'error');
      }
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">All Rooms</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {rooms.map((room) => (
          <div key={room.id} className="border p-4 rounded shadow-md">
            <h3 className="text-lg font-semibold">{room.title || 'Untitled Room'}</h3>
            <p><strong>Description:</strong> {room.des}</p>
            <p><strong>Type:</strong> {room.roomtype}</p>
            <p><strong>Sharing:</strong> {room.sharing}</p>
            <p><strong>Rent:</strong> ₹{room.rent}</p>

            <button
              onClick={() => handleDelete(room.id)}
             className="mt-3 px-4 py-2 bg-green-200 text-black rounded hover:bg-green-400"

            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
