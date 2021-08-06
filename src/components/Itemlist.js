import React from "react";
import { useGlobalContext } from "../contexts/AppContext";
import { FaCartPlus } from "react-icons/fa";
import { Link } from "react-router-dom";

const ItemList = () => {
  const { items, loadSingleItem, urlId } = useGlobalContext();
  if (items.length < 1) {
    return (
      <h3 className="text-danger text-capitalize p-5 my-5 text-center mx-auto">
        no items matched your search
      </h3>
    );
  }
  return (
    <section className="container p-4 mt-4 border border-secondary bg-light rounded">
      <div className="row">
        {items.map((item) => {
          const { id, title, price, image } = item;

          return (
            <div
              key={id}
              className="col-8 col-sm-6 col-md-4 col-lg-4 my-3 mx-auto shadow-lg"
            >
              <div className="card" id={id}>
                <img
                  alt={title}
                  src={image}
                  className="card-img-top img-height"
                />

                <div className="card-body bg-secondary">
                  <h5 className="card-title text-white text-capitalize">
                    {title.substring(0, 30)}...
                  </h5>
                  <p className="text-light card-text">${price}</p>
                  <Link to={`/${urlId}`}>
                    <div
                      onClick={(e) => loadSingleItem(e)}
                      className="btn btn-primary text-light mr-4 text-uppercase"
                    >
                      details
                    </div>
                  </Link>
                  <div className="btn btn-success ml-5 text-uppercase">
                    add to cart <FaCartPlus />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ItemList;
