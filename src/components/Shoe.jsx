import React from "react";
import "./shoe.css";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useApiContext } from "../context/ApiContext";
const Shoe = () => {
  const { shoes } = useApiContext();
  const { id } = useParams();
  const shoe = shoes.find((shoe) => shoe.id === id);
  console.log(shoe.model);
  return (
    <div className="shoe-detail-container">
      <div className="shoe-image">
        <img src={shoe.image} alt={shoe.model} />
      </div>
      <div className="shoe-info">
        <h1 className="shoe-company">{shoe.company}</h1>
        <h2 className="shoe-model">{shoe.model}</h2>
        <h3 className="shoe-price">Price: {shoe.price} ILS</h3>
        <Link to="/" className="btn btn-primary ms-3">
          Back
        </Link>
      </div>
    </div>
  );
};

export default Shoe;
