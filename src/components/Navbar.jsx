import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css"; // Import the CSS file for styling

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">
          <img src="../../public/logo-1.svg" alt="" />
        </Link>
      </div>
      <div className="navbar-links">
        <NavLink to="/mainpage">Home</NavLink>
        <NavLink to="/">Shoes</NavLink>
        <NavLink to="/create">Add Shoes</NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
