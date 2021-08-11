import React from "react";
import image from "../assets/img-3.gif";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="container rounded mx-auto bg-secondary">
      <div className="row mt-5">
        <Link to="/" className="mx-auto shadow-lg mt-5 mb-3">
          <div className="btn btn-danger shadow-lg text-capitalize">
            back to home
          </div>
        </Link>
      </div>
      <div className="row">
        <div className="col d-md-flex align-items-start justify-content-center height">
          <img src={image} className="col-12 col-md-8" alt="loading" />
        </div>
      </div>
    </div>
  );
};

export default Error;
