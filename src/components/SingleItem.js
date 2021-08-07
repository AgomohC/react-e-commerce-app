import React from "react";
import { useGlobalContext } from "../contexts/AppContext";
import { Link } from "react-router-dom";

const SingleItem = () => {
  const { items, urlId } = useGlobalContext();
  const SingleItem = items[urlId - 1];
  const { id, title, price, description, category, image } = SingleItem;

  //TODO
  // STYLE SINGLEITEM
  return (
    <section className="container bg-secondary height">
      <div className="row py-5">
        <div className="col-6 d-md-flex justify-content-end">
          <img src={image} alt={title} className="img-height-2 rounded " />
        </div>
        <div className="col-6 text-capitalize text-light">
          <h5>
            <span>id</span>
            {id}
          </h5>
          <h5>
            <span>title</span>
            {title}
          </h5>
          <h5>
            <span>price</span>
            {price}
          </h5>
          <h5>
            <span>category</span>
            {category}
          </h5>
          <h5>
            <span>description</span>
            {description}
          </h5>
        </div>
      </div>
    </section>
  );
};

export default SingleItem;
