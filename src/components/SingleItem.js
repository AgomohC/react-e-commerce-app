import React from "react";
import { useGlobalContext } from "../contexts/AppContext";
import { Link } from "react-router-dom";

const SingleItem = () => {
  const { items, urlId } = useGlobalContext();
  const SingleItem = items[urlId - 1];
  const { id, title, price, description, category, image } = SingleItem;
  return (
    <section className="container bg-light height">
      <div className="row">
        <div className="col-12 col-sm-6">
          <img src={image} alt={title} />
        </div>
      </div>
    </section>
  );
};

export default SingleItem;
