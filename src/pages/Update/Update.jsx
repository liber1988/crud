import React from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useApiContext } from "../../context/ApiContext";
import "./Update.css";
function Update() {
  const { shoes, getShoe, updateShoe } = useApiContext();
  const { id } = useParams();
  const navigate = useNavigate();
  const shoe = shoes.find((shoe) => shoe.id === id);
  const [values, setValues] = useState(shoe);

  const handleUpdate = (event) => {
    event.preventDefault();
    updateShoe(values);
    navigate("/");
  };

  return (
    <div className="d-flex w-100 vh-100 justify-content-center align-items-center  body-container">
      <div className="w-50 body-container shadow px-5 pt-3 pb-5 rounded">
        <h1>Update Shoe</h1>
        <form onSubmit={handleUpdate}>
          <div className="mb-2">
            <label htmlFor="model">Model:</label>
            <input
              type="text"
              name="model"
              className="form-control"
              placeholder="Enter model"
              value={values.model}
              onChange={(e) => setValues({ ...values, model: e.target.value })}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="company">Company</label>
            <input
              type="text"
              name="company"
              className="form-control"
              placeholder="Enter Company"
              value={values.company}
              onChange={(e) =>
                setValues({ ...values, company: e.target.value })
              }
            />
          </div>
          <div className="mb-3">
            <label htmlFor="price">Price:</label>
            <input
              type="text"
              name="price"
              className="form-control"
              placeholder="Enter Price"
              value={values.price}
              onChange={(e) => setValues({ ...values, price: e.target.value })}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="image">Image Link</label>
            <input
              type="text"
              name="image"
              className="form-control"
              placeholder="Enter Image Link"
              value={values.image}
              onChange={(e) => setValues({ ...values, image: e.target.value })}
            />
          </div>
          <button className="btn btn-success">Update</button>
          <Link to="/" className="btn btn-primary ms-3">
            Back
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Update;
