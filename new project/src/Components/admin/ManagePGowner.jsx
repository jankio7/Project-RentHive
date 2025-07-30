import { collection, onSnapshot, deleteDoc, doc, query } from "firebase/firestore";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { db } from "../../Firebase";

export default function ManagePGowners() {
  const [pgowners, setPgowners] = useState([]);

  // useEffect(() => {
  //   const unsub = onSnapshot(collection(db, "pgowners"), (snapshot) => {
  //     const owners = snapshot.docs.map((doc, index) => ({
  //       id: doc.id,
  //       sno: index + 1,
  //       ...doc.data(),
  //     }));
  //     setPgowners(owners);
  //   });

  //   return () => unsub();
  // }, []);
  useEffect(() => {
  const q = query(collection(db, "users"), where("userType", "==", 2));
  const unsub = onSnapshot(q, (snapshot) => {
    const owners = snapshot.docs.map((doc, index) => ({
      id: doc.id,
      sno: index + 1,
      ...doc.data(),
    }));
    setPgowners(owners);
  });

  return () => unsub();
}, []);

  const handleDelete = async (id) => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
    });

    if (result.isConfirmed) {
      await deleteDoc(doc(db, "pgowners", id));
      Swal.fire("Deleted!", "PG Owner has been deleted.", "success");
    }
  };

  return (
    <div className="row justify-content-center no-gutters">
      <div className="col-md-10">
        <div className="contact-wrap w-100 p-md-5 p-4">
          <h3 className="mb-4">Manage PG Owners</h3>
          <table className="table table-striped">
            <thead className="thead-dark">
              <tr>
                <th>S.No.</th>
                <th>Name</th>
                <th>Email</th>
                <th>Contact</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {pgowners.length === 0 ? (
                <tr>
                  <td colSpan="5" className="text-center">
                    No PG Owners Found
                  </td>
                </tr>
              ) : (
                pgowners.map((owner) => (
                  <tr key={owner.id}>
                    <td>{owner.sno}</td>
                    <td>{owner.name}</td>
                    <td>{owner.email}</td>
                    <td>{owner.contact}</td>
                    <td>
                      <button
                        className="btn btn-danger btn-sm"
                        onClick={() => handleDelete(owner.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
