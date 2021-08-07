import React from "react";
import { GiClothes } from "react-icons/gi";
import { FaShoppingCart } from "react-icons/fa";
import { MdAccountCircle } from "react-icons/md";
import { Link } from "react-router-dom";

// TODO
//DESIGN TOOLTIPS FOR LOGINS AND SIGN UPS
//ADD USERNAME FOR THE ACCOUNT DETAILS

const Navbar = () => {
  return (
    <nav className="navbar shadow navbar-dark bg-light py-2 pl-3 pl-md-5">
      <div className="navbar-brand text-primary">
        <Link to="/">
          <div>
            <GiClothes className="mr-1 h3" />
            Femto Store
          </div>
        </Link>
      </div>
      <div className="row mr-md-5">
        <div className="col-md-10 col-2 d-flex">
          <button className="btn d-block  text-primary">
            <MdAccountCircle className="h3" />
          </button>
          <div className="col-md-1 col-1 my-auto">
            <Link to="/cart">
              <button className="btn relative">
                <FaShoppingCart className="text-primary h4" />
                <div className="fixed shadow-lg text-muted">
                  <p>30</p>
                </div>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
