import { useNavigate } from "react-router-dom";

function CityCard({ name, imageUrl }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/user/view-rooms?city=${name}`);
  };

  return (
    <div className="card mt-5 mx-5" style={{ width: '16rem', cursor: 'pointer' , boxShadow: "0px 0px 15px gray"}} onClick={handleClick}
    >
      <img src={`/assets/img/property-slide/property-slide-1.jpg`} className="card-img-top" alt={''} style={{ height: '150px', objectFit: 'cover' }} />
      <div className="card-body">
        <h5 className="card-title text-center">Jalandhar Ac-available</h5>
      </div>
    </div>
  );
}

export default CityCard;


