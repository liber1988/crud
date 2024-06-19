import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"; // Import the CSS file for styling

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">Logo</Link>
      </div>
      <div className="navbar-links">
        <Link to="/mainpage">Home</Link>
        <Link to="/">Shoes</Link>
        <Link to="/create">Add Shoes</Link>
      </div>
    </nav>
  );
};

export default Navbar;
