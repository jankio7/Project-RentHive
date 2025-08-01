// import React, { useEffect, useState } from "react";
// import { collection, deleteDoc, doc, onSnapshot } from "firebase/firestore";
// import { db } from "../../../Firebase"; 
// import Swal from "sweetalert2";
// import { Link } from "react-router-dom";
// import { PulseLoader } from "react-spinners";

// export default function Manageproperty() {
//   const [properties, setProperties] = useState([]);
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     const unsub = onSnapshot(collection(db, "properties"), (snapshot) => {
//       const list = snapshot.docs.map((doc, index) => ({
//         id: doc.id,
//         sno: index + 1,
//         ...doc.data(),
//       }));
//       setProperties(list);
//     });

//     return () => unsub();
//   }, []);

//   const Deleteproperty = (Id) => {
//     Swal.fire({
//       title: "Are you sure?",
//       text: "You won't be able to revert this!",
//       icon: "warning",
//       showCancelButton: true,
//       confirmButtonColor: "#3085d6",
//       cancelButtonColor: "#d33",
//       confirmButtonText: "Yes, delete it!",
//     }).then(async (result) => {
//       if (result.isConfirmed) {
//         try {
//           await deleteDoc(doc(db, "properties", Id));
//           Swal.fire("Deleted!", "Property has been deleted.", "success");
//         } catch (error) {
//           console.error("Delete error:", error.message);
//         }
//       }
//     });
//   };

//   return (

//    <>
//       {/* Hero Section */}
//       <section
//         className="hero-wrap hero-wrap-2"
//         style={{ backgroundImage: 'url("/assets/img/hero-carousel/hero-carousel-1.jpg")' }}
//         data-stellar-background-ratio="0.5"
//       >
//         <div className="overlay" />
//         <div className="container">
//           <div className="row no-gutters slider-text align-items-end">
//             <div className="col-md-9 ftco-animate pb-5">
//               <p className="breadcrumbs mb-2">
//                 <span className="mr-2">
//                   <a href="/">Home <i className="ion-ios-arrow-forward" /></a>
//                 </span>
//                 <span>Property <i className="ion-ios-arrow-forward" /></span>
//               </p>
//               <h1 className="mb-0 bread">Add Property</h1>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Main Form Section */}
//       <div className="container my-5">
//         {loading ? (
//           <PulseLoader
//             color="#4bc4daff"
//             size={30}
//             cssOverride={{ display: "block", margin: "0 auto" }}
//           />
//         ) : (
//           <div className="row justify-content-center no-gutters">
//             <div className="col-md-7" style={{ boxShadow: "0px 0px 15px gray" }}>
//               <div className="contact-wrap w-100 p-md-5 p-4">
//                 <h3 className="mb-4 text-center">Add PG Property</h3>
//                 <form onSubmit={handleSubmit} className="contactForm">
//                   <div className="row">
//                     {/* Title */}
//                     <div className="col-md-12">
//                       <div className="form-group">
//                         <label className="label">Title</label>
//                         <input
//                           type="text"
//                           className="form-control"
//                           placeholder="Property title"
//                           value={title}
//                           onChange={(e) => setTitle(e.target.value)}
//                           required
//                         />
//                       </div>
//                     </div>

//                     {/* Image */}
//                     <div className="col-md-12">
//                       <div className="form-group">
//                         <label className="label">Image</label>
//                         <input
//                           type="file"
//                           className="form-control"
//                           value={imageName}
//                           onChange={handleImageChange}
//                           accept="image/*"
//                           required
//                         />
//                       </div>
//                     </div>

//                     {/* Size */}
//                     <div className="col-md-12">
//                       <div className="form-group">
//                         <label className="label">Size (in Sqft)</label>
//                         <input
//                           type="text"
//                           className="form-control"
//                           placeholder="e.g. 300"
//                           value={size}
//                           onChange={(e) => setSize(e.target.value)}
//                           required
//                         />
//                       </div>
//                     </div>

//                     {/* AC */}
//                     <div className="col-md-12">
//                       <div className="form-group">
//                         <label className="label">AC Room</label>
//                         <select className="form-control" value={ac} onChange={(e) => setAc(e.target.value)}>
//                           <option value="Yes">Yes</option>
//                           <option value="No">No</option>
//                         </select>
//                       </div>
//                     </div>

//                     {/* Non AC */}
//                     <div className="col-md-12">
//                       <div className="form-group">
//                         <label className="label">Non-AC Room</label>
//                         <select className="form-control" value={nonAc} onChange={(e) => setNonAc(e.target.value)}>
//                           <option value="Yes">Yes</option>
//                           <option value="No">No</option>
//                         </select>
//                       </div>
//                     </div>

//                     {/* Balcony */}
//                     <div className="col-md-12">
//                       <div className="form-group">
//                         <label className="label">Balcony</label>
//                         <select className="form-control" value={balcony} onChange={(e) => setBalcony(e.target.value)}>
//                           <option value="Yes">Yes</option>
//                           <option value="No">No</option>
//                         </select>
//                       </div>
//                     </div>

//                     {/* Type */}
//                     <div className="col-md-12">
//                       <div className="form-group">
//                         <label className="label">Type</label>
//                         <select className="form-control" value={type} onChange={(e) => setType(e.target.value)} required>
//                           <option disabled value="">Select Type</option>
//                           <option value="Boys">Boys</option>
//                           <option value="Girls">Girls</option>
//                         </select>
//                       </div>
//                     </div>

//                     {/* Price */}
//                     <div className="col-md-12">
//                       <div className="form-group">
//                         <label className="label">Price (monthly)</label>
//                         <input
//                           type="text"
//                           className="form-control"
//                           placeholder="e.g. ₹6000"
//                           value={price}
//                           onChange={(e) => setPrice(e.target.value)}
//                           required
//                         />
//                       </div>
//                     </div>

//                     <div className="border px-3 py-2">
//                   <div className="flex justify-center gap-2">
//                     <Link
//                       to={`/Pgowner/property/update/${prop.id}`}
//                       className="btn btn-outline-success mx-2"
//                     >
//                       Edit
//                     </Link>
//                     <button
//                       onClick={() => Deleteproperty(prop.id)}
//                       className="btn btn-danger"
//                     >
//                       Delete
//                     </button>
//                   </div>
//                   </div>
//                   </div>
//                 </form>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </>
//   );
// }


import { useEffect, useState } from "react";
import { collection, deleteDoc, doc, onSnapshot } from "firebase/firestore";
import { toast } from "react-toastify";
import { db } from "../../../Firebase";
import { Link } from "react-router-dom";
import { PulseLoader } from "react-spinners";
import Swal from "sweetalert2";

export default function Manageproperty() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "properties"), (snapshot) => {
      const propertyList = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setData(propertyList);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const DeleteProperty = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won’t be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await deleteDoc(doc(db, "properties", id));
          toast.success("Deleted successfully!");
        } catch (err) {
          toast.error("Delete failed: " + err.message);
        }
      }
    });
  };

  return (
    <>
      <section
        className="hero-wrap hero-wrap-2"
        style={{ backgroundImage: 'url("/assets/images/bg_2.jpg")' }}
        data-stellar-background-ratio="0.5"
      >
        <div className="overlay" />
        <div className="container">
          <div className="row no-gutters slider-text align-items-end">
            <div className="col-md-9 ftco-animate pb-5">
              <p className="breadcrumbs mb-2">
                <span className="mr-2">
                  <a href="/">Home <i className="ion-ios-arrow-forward" /></a>
                </span>
                <span>Property <i className="ion-ios-arrow-forward" /></span>
              </p>
              <h1 className="mb-0 bread">Manage Property</h1>
            </div>
          </div>
        </div>
      </section>

      <div className="container my-5">
        {loading ? (
          <PulseLoader
            color="#4bc4daff"
            size={30}
            cssOverride={{ display: "block", margin: "0 auto" }}
          />
        ) : (
          <div className="row justify-content-center no-gutters">
            <div className="col-md-12" style={{ boxShadow: "0px 0px 15px gray" }}>
              <div className="contact-wrap w-100 p-md-5 p-4">
                <h3 className="mb-4">Manage PG Properties</h3>
                <table className="table table-striped">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Title</th>
                      <th>Size</th>
                      <th>AC</th>
                      <th>Non-AC</th>
                      <th>Balcony</th>
                      <th>Type</th>
                      <th>Price</th>
                      <th>Image</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.map((el, index) => (
                      <tr key={el.id}>
                        <td>{index + 1}</td>
                        <td>{el.title || "N/A"}</td>
                        <td>{el.size || "N/A"}</td>
                        <td>{el.ac}</td>
                        <td>{el.nonAc}</td>
                        <td>{el.balcony}</td>
                        <td>{el.type}</td>
                        <td>{el.price}</td>
                        <td>
                          {el.image ? (
                            <img
                              src={el.image}
                              alt={el.title}
                              style={{ width: "100px", height: "auto" }}
                            />
                          ) : (
                            "No Image"
                          )}
                        </td>
                        <td>
                          <Link
                            to={`/Pgowner/property/update/${el.id}`}
                            className="btn btn-outline-success mx-2"
                          >
                            Edit
                          </Link>
                          <button
                            className="btn btn-danger"
                            onClick={() => Delete(el.id)}
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

  
