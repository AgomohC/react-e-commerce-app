import React from "react";
import { GiClothes } from "react-icons/gi";
// import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-dark bg-light py-2 pl-5">
      <div className="navbar-brand text-primary">
        <div>
          <GiClothes className="display-4 mr-1" />
          Femto Store
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
