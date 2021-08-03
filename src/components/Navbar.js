import React from "react";
import { GiClothes } from "react-icons/gi";
import { FaShoppingCart } from "react-icons/fa";
// import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar shadow navbar-dark bg-light py-2 pl-5">
      <div className="navbar-brand text-primary">
        <div>
          <GiClothes className="display-4 mr-1" />
          Femto Store
        </div>
      </div>
      <div>
        <button
          type="button"
          className="btn btn-success mx-2 shadow text-capitalize"
        >
          log in
        </button>
        <button
          type="button"
          className="btn btn-success mx-2 shadow text-capitalize"
        >
          sign up
        </button>
      </div>
      <div>
        <FaShoppingCart className="text-primary h4 mr-5" />
      </div>
    </nav>
  );
};

export default Navbar;
