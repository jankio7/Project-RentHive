import { useEffect, useState } from "react";
import { collection, deleteDoc, doc, onSnapshot } from "firebase/firestore";
import { toast } from "react-toastify";
import { db } from "../../Firebase";

export default function ManageCity() {
  const [AllCities, setAllCities] = useState([]);

  const fetchCities = () => {
    const cityRef = collection(db, "cities"); 
    onSnapshot(cityRef, (snapshot) => {
      setAllCities(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }))
      );
    });
  };

  useEffect(() => {
    fetchCities();
  }, []);

  const DeleteCity = async (cityId) => {
    await deleteDoc(doc(db, "cities", cityId))
      .then(() => {
        toast.success("City deleted successfully");
      })
      .catch((err) => {
        toast.error(err.message);
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
                  <a href="/">
                    Home <i className="ion-ios-arrow-forward" />
                  </a>
                </span>
                <span>
                  City <i className="ion-ios-arrow-forward" />
                </span>
              </p>
              <h1 className="mb-0 bread">Manage City</h1>
            </div>
          </div>
        </div>
      </section>

      <div className="container my-5">
        <div className="row justify-content-center no-gutters">
          <div className="col-md-10" style={{ boxShadow: "0px 0px 15px gray" }}>
            <div className="contact-wrap w-100 p-md-5 p-4">
              <h3 className="mb-4">Manage Cities</h3>
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th>1</th>
                    <th>City Name</th>
                    <th>Image</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {AllCities.map((el, index) => (
                    <tr key={el.id}>
                      <td>{index + 1}</td>
                      <td>{el.name}</td>
                      <td>
                        <img
                          src={el.image}
                          alt={el.name}
                          style={{ width: "100px", height: "auto" }}
                        />
                      </td>
                      <td>
                        <button
                          className="btn btn-danger"
                          onClick={() => DeleteCity(el.id)}
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
      </div>
    </>
  );
}

    
    