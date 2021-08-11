import React from "react";
import { useGlobalContext } from "../contexts/AppContext";

import { Link, useParams } from "react-router-dom";

const SingleItem = () => {
  const { items } = useGlobalContext();
  const SingleItem = items[parseInt(useParams().id.substring(1)) - 1];
  const { id, title, price, description, category, image } = SingleItem;

  return (
    <section className="container bg-secondary height">
      <div className="row mt-5">
        <Link to="/" className="mx-auto shadow mt-5 mb-3">
          <div className="btn btn-danger shadow text-capitalize">
            back to home
          </div>
        </Link>
      </div>
      <div className="row py-5 ">
        <div className="col-6 d-lg-flex justify-content-end">
          <img
            src={image}
            alt={title}
            className="shadow width img-height-2 rounded "
          />
        </div>
        <div className="col-lg-6 p-5 text-capitalize text-light">
          <div className="mb-4 row d-flex align-items-center">
            <div className="bg-primary h6 col-md-3 col-5 text-center text-light rounded px-3 py-1 mr-md-5 ml-md-3 ">
              id
            </div>
            <div className="h6 col-md-6 col-7">{id}</div>
          </div>
          <div className="mb-4 row d-flex align-items-center">
            <div className="bg-primary col-md-3 col-5 h6 text-center text-light align-self-start rounded px-3 py-1 mr-md-5 ml-md-3">
              title
            </div>
            <div className="col-md-6 col-7 h6">{title}</div>
          </div>
          <div className="mb-4 row d-flex height-2 align-items-center">
            <div className="bg-primary col-md-3 col-5 h6 text-center text-light rounded px-3 py-1 mr-md-5 ml-md-3">
              price
            </div>
            <div className="h6 col-md-6 col-7">${price}</div>
          </div>
          <div className="mb-4 row height-2 d-flex align-items-center">
            <div className="bg-primary col-md-3 col-5 h6 text-center text-light align-self-start rounded px-3 py-1 mr-md-5 ml-md-3">
              category
            </div>
            <div className="h6 col-md-6 col-7">{category}</div>
          </div>
          <div className="mb-4 row height-2 d-flex align-items-center">
            <div className="bg-primary align-self-start col-5  col-md-3 text-light shadow-lg rounded text-center h6 px-3 py-1 mr-md-5 ml-md-3">
              description
            </div>
            <div className="h6 col-7  col-md-6">
              {description.substring(0, 200)}...
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SingleItem;
