import React from "react";
import { GiClothes } from "react-icons/gi";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useGlobalCartContext } from "../contexts/CartContext";

const Navbar = () => {
  const { quantity } = useGlobalCartContext();

  return (
    <nav className="navbar fixed-top shadow navbar-dark bg-light py-2 pl-1 pl-md-5">
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
          <div className="col-md-1 col-1 my-auto">
            <Link to="/cart">
              <button className="btn relative">
                <FaShoppingCart className="text-primary h4" />
                {quantity ? (
                  <div className="fixed shadow-lg text-muted">
                    <p>{quantity}</p>
                  </div>
                ) : (
                  ""
                )}
              </button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
