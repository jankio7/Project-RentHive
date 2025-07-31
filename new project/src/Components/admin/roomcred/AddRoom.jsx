

// import { useState } from "react";

// export default function AddRoom() {
//   const [roomData, setRoomData] = useState({
//     title: "",
//     description: "",
//     rent: "",
//     sharing: "",
//     type: "",
//     image: ""
//   });

//   const handleChange = (e) => {
//     setRoomData({ ...roomData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Room submitted:", roomData);
//     // Backend POST request yahan aayega
//   };

//   return (
//     <div className="row justify-content-center no-gutters">
//       <div className="col-md-10">
//          <div className="contact-wrap w-100 p-md-5 p-4">
//       <h2 className="md-4"  style={{ textAlign: "center", marginBottom: "20px" }}>Add New Room</h2>
//       <form onSubmit={handleSubmit}>
//         <table className="table table-bordered">
//           <tbody>
//             <tr>
//               <th>Title</th>
//               <td>
//                 <input
//                   type="text"
//                   name="title"
//                   className="form-control"
//                   onChange={handleChange}
//                   required
//                 />
//               </td>
//             </tr>

//             <tr>
//               <th>Description</th>
//               <td>
//                 <textarea
//                   name="description"
//                   maxLength={200}
//                   className="form-control"
//                   onChange={handleChange}
//                   required
//                 />
//                 <small className="text-muted">Max 200 characters</small>
//               </td>
//             </tr>

//             <tr>
//               <th>Rent (₹)</th>
//               <td>
//                 <input
//                   type="number"
//                   name="rent"
//                   max={10000}
//                   className="form-control"
//                   onChange={handleChange}
//                   required
//                 />
//               </td>
//             </tr>

//             <tr>
//               <th>Sharing</th>
//               <td>
//                 <select
//                   name="sharing"
//                   className="form-select"
//                   onChange={handleChange}
//                   required
//                 >
//                   <option value="">Select</option>
//                   <option value="Single">Single</option>
//                   <option value="Double">Double</option>
//                   <option value="Triple">Triple</option>
//                 </select>
//               </td>
//             </tr>

//             <tr>
//               <th>Room Type</th>
//               <td>
//                 <select
//                   name="type"
//                   className="form-select"
//                   onChange={handleChange}
//                   required
//                 >
//                   <option value="">Select</option>
//                   <option value="AC">AC</option>
//                   <option value="Non-AC">Non-AC</option>
//                 </select>
//               </td>
//             </tr>

//             <tr>
//               <th>Image URL</th>
//               <td>
//                 <input
//                   type="text"
//                   name="image"
//                   className="form-control"
//                   onChange={handleChange}
//                   required
//                 />
//               </td>
//             </tr>

//             <tr>
//               <td colSpan="2" className="text-center">
//                 <button type="submit" className="btn btn-primary">Add Room</button>
//               </td>
//             </tr>
//           </tbody>
//         </table>
//       </form>
//     </div>
//     </div>
//     </div>
//   );
// }
import { useState } from "react";

import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../../Firebase";

export default function AddRoom() {
  const [roomData, setRoomData] = useState({
    title: "",
    description: "",
    rent: "",
    sharing: "",
    type: "",
  });
  const [imageFile, setImageFile] = useState(null);
  const [uploading, setUploading] = useState(false);

  const handleChange = (e) => {
    setRoomData({ ...roomData, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    setImageFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!imageFile) {
      alert("Please select an image.");
      return;
    }

    setUploading(true);

    try {
      // Upload image
      const storageRef = ref(Storage, `rooms/${Date.now()}_${imageFile.name}`);
      await uploadBytes(storageRef, imageFile);
      const imageUrl = await getDownloadURL(storageRef);

      // Add data to Firestore
      await addDoc(collection(db, "rooms"), {
        ...roomData,
        rent: Number(roomData.rent),
        imageUrl,
        createdAt: new Date(),
      });

      alert("Room added successfully!");
      setRoomData({
        title: "",
        description: "",
        rent: "",
        sharing: "",
        type: "",
      });
      setImageFile(null);
    } catch (err) {
      console.error("Error adding room:", err);
      alert("Error while adding room.");
    }

    setUploading(false);
  };

  return (
    <div className="row justify-content-center no-gutters">
      <div className="col-md-10">
        <div className="contact-wrap w-100 p-md-5 p-4">
          <h2 className="md-4" style={{ textAlign: "center", marginBottom: "20px" }}>Add New Room</h2>
          <form onSubmit={handleSubmit}>
            <table className="table table-bordered">
              <tbody>
                <tr>
                  <th>Title</th>
                  <td>
                    <input type="text" name="title" className="form-control" onChange={handleChange} required />
                  </td>
                </tr>

                <tr>
                  <th>Description</th>
                  <td>
                    <textarea name="description" maxLength={200} className="form-control" onChange={handleChange} required />
                    <small className="text-muted">Max 200 characters</small>
                  </td>
                </tr>

                <tr>
                  <th>Rent (₹)</th>
                  <td>
                    <input type="number" name="rent" max={10000} className="form-control" onChange={handleChange} required />
                  </td>
                </tr>

                <tr>
                  <th>Sharing</th>
                  <td>
                    <select name="sharing" className="form-select" onChange={handleChange} required>
                      <option value="">Select</option>
                      <option value="Single">Single</option>
                      <option value="Double">Double</option>
                      <option value="Triple">Triple</option>
                    </select>
                  </td>
                </tr>

                <tr>
                  <th>Room Type</th>
                  <td>
                    <select name="type" className="form-select" onChange={handleChange} required>
                      <option value="">Select</option>
                      <option value="AC">AC</option>
                      <option value="Non-AC">Non-AC</option>
                    </select>
                  </td>
                </tr>

                <tr>
                  <th>Image Upload</th>
                  <td>
                    <input type="file" accept="image/*" className="form-control" onChange={handleImageChange} required />
                  </td>
                </tr>

                <tr>
                  <td colSpan="2" className="text-center">
                    <button type="submit" className="btn btn-primary" disabled={uploading}>
                      {uploading ? "Uploading..." : "Add Room"}
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </form>
        </div>
      </div>
    </div>
  );
}

