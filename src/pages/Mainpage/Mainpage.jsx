import React from "react";
import "./Mainpage.css";

const Mainpage = () => {
  return (
    <div className="home-container">
      <div className="home-content">
        <h1>Welcome to Our Shoe Shop</h1>
        <p>
          Discover the best collection of shoes that blend style and comfort.
          Whether you are looking for casual sneakers, formal shoes, or
          something in between, we have something for everyone. Our shop prides
          itself on providing high-quality footwear that meets the latest
          fashion trends.
        </p>
      </div>
      <div className="home-images">
        <img
          src="https://logos-world.net/wp-content/uploads/2020/05/Timberland-Logo.png"
          alt="Shoes Collection"
          className="home-image"
        />
        <img
          src="https://i.insider.com/53d29d5c6bb3f7a80617ada8?width=800&format=jpeg&auto=webp"
          alt="Stylish Shoes"
          className="home-image"
        />
      </div>
    </div>
  );
};

export default Mainpage;
