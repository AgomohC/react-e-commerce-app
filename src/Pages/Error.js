import React from "react";
import image from "../assets/img-3.gif";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="container rounded mx-auto bg-secondary">
      <div className="row">
        <Link to="/" className="mx-auto shadow-lg mt-5">
          <div className="btn btn-danger shadow-lg text-capitalize">
            back to home
          </div>
        </Link>
      </div>
      <div className="row">
        <div className="col d-flex align-items-center justify-content-center height">
          <img src={image} className="col-8" alt="loading" />
        </div>
      </div>
    </div>
  );
};

export default Error;
