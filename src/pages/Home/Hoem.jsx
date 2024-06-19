import React, { Component, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useApiContext } from "../../context/ApiContext";
import Card from "../../components/Card";
import Spiner from "../../components/Spiner";
import "./Home.css";

function Home() {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const { shoes, deleteShoeData, isLoading } = useApiContext();

  const handleDelete = () => {
    deleteShoeData(shoes[0]);
  };
  if (isLoading) {
    return <Spiner />;
  }
  return (
    <>
      <div className="cards">
        {shoes.map((shoe) => (
          <Card key={shoe.id} shoe={shoe} />
        ))}
      </div>
    </>
  );
}

export default Home;
