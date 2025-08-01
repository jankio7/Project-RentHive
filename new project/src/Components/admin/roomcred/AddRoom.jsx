


// import { useState } from "react";
// import { collection, addDoc } from "firebase/firestore";
// import { db } from "../../../Firebase";
// import { useNavigate } from "react-router-dom";

// export default function AddRoom() {
//   const navigate = useNavigate();
//   const [roomData, setRoomData] = useState({
//     title: "",
//     description: "",
//     rent: "",
//     sharing: "",
//     type: "",
//   });
//   const [uploading, setUploading] = useState(false);

//   const handleChange = (e) => {
//     setRoomData({ ...roomData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     setUploading(true);

//     try {
//   await addDoc(collection(db, "rooms"), {
//   ...roomData,
//   rent: Number(roomData.rent),
//   createdAt: new Date(),
// });

// toast.success("Room added successfully!"); // you can use toast or alert

// setRoomData({
//   title: "",
//   description: "",
//   rent: "",
//   sharing: "",
//   type: "",
// });

// navigate("/admin/roomcred/viewrooms");

//     } catch (err) {
//       console.error("Error adding room:", err);
//       alert("Error while adding room.");
//     }

//     setUploading(false);
//   };

//   return (
//     <div className="row justify-content-center no-gutters">
//       <div className="col-md-10">
//         <div className="contact-wrap w-100 p-md-5 p-4">
//           <h2 className="md-4" style={{ textAlign: "center", marginBottom: "20px" }}>Add New Room</h2>
//           <form onSubmit={handleSubmit}>
//             <table className="table table-bordered">
//               <tbody>
//                 <tr>
//                   <th>Title</th>
//                   <td>
//                     <input type="text" name="title" className="form-control" value={roomData.title} onChange={handleChange} required />
//                   </td>
//                 </tr>
//                 <tr>
//                   <th>Description</th>
//                   <td>
//                     <textarea name="description" maxLength={200} className="form-control" value={roomData.description} onChange={handleChange} required />
//                     <small className="text-muted">Max 200 characters</small>
//                   </td>
//                 </tr>
//                 <tr>
//                   <th>Rent (₹)</th>
//                   <td>
//                     <input type="number" name="rent" max={10000} className="form-control" value={roomData.rent} onChange={handleChange} required />
//                   </td>
//                 </tr>
//                 <tr>
//                   <th>Sharing</th>
//                   <td>
//                     <select name="sharing" className="form-select" value={roomData.sharing} onChange={handleChange} required>
//                       <option value="">Select</option>
//                       <option value="Single">Single</option>
//                       <option value="Double">Double</option>
//                       <option value="Triple">Triple</option>
//                     </select>
//                   </td>
//                 </tr>
//                 <tr>
//                   <th>Room Type</th>
//                   <td>
//                     <select name="type" className="form-select" value={roomData.type} onChange={handleChange} required>
//                       <option value="">Select</option>
//                       <option value="AC">AC</option>
//                       <option value="Non-AC">Non-AC</option>
//                     </select>
//                   </td>
//                 </tr>
//                 <tr>
//                   <td colSpan="2" className="text-center">
//                     <button type="submit" className="btn btn-primary" disabled={uploading}>
//                       {uploading ? "Uploading..." : "Add Room"}
//                     </button>
//                   </td>
//                 </tr>
//               </tbody>
//             </table>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }
