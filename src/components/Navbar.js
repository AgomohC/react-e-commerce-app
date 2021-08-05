import React from "react";
import { GiClothes } from "react-icons/gi";
import { FaShoppingCart } from "react-icons/fa";
import { MdAccountCircle } from "react-icons/md";
// import { Link } from "react-router-dom";

// TODO
//DESIGN TOOLTIPS FOR LOGINS AND SIGN UPS

const Navbar = () => {
  return (
    <nav className="navbar shadow navbar-dark bg-light py-2 pl-5">
      <div className="navbar-brand text-primary">
        <div>
          <GiClothes className="display-4 mr-1" />
          Femto Store
        </div>
      </div>
      <div className="row mr-md-5">
        <div className="col-md-10 col-4 d-flex my-auto">
          <button
            type="button"
            className="btn btn-success mx-2 shadow d-none d-md-block text-capitalize"
          >
            log in
          </button>
          <button
            type="button"
            className="btn btn-success mx-2 shadow d-none d-md-block text-capitalize"
          >
            sign up
          </button>
          <button className="btn d-block d-md-none text-primary">
            <MdAccountCircle className="h3" />
          </button>
        </div>
        <div className="col-md-1 col-4 my-auto">
          <button className="btn relative">
            <FaShoppingCart className="text-primary h3" />
            <div className="fixed shadow-lg text-muted">
              <p>30</p>
            </div>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
