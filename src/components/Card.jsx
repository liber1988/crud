import { Component, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useApiContext } from "../context/ApiContext";
import "./Card.css";

const Card = (shoe) => {
  const navigate = useNavigate();
  const { deleteShoeData } = useApiContext();
  const handleDeleteClick = () => {
    deleteShoeData(shoe.shoe);
  };
  const handleUpdateClick = () => {
    navigate("/update/" + shoe.shoe.id);
  };

  return (
    <div className="card">
      <h3 className="card-title">{shoe.shoe.model}</h3>
      <img src={shoe.shoe.image} alt="Shoe" className="card-image" />
      <div>
        <h2>{shoe.shoe.company}</h2>
        <h2>Price: {shoe.shoe.price} ils</h2>
      </div>
      <div className="card-content">
        <div className="card-buttons">
          <button className="card-button" onClick={() => handleDeleteClick()}>
            Delete
          </button>
          <button
            className="card-button update"
            onClick={(e) => handleUpdateClick(shoe)}
          >
            Update
          </button>
        </div>
      </div>
    </div>
  );
};
export default Card;
