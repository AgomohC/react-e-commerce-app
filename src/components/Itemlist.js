import React from "react";
import { useGlobalContext } from "../contexts/AppContext";
import { useGlobalCartContext } from "../contexts/CartContext";
import { FaCartPlus, FaCheck } from "react-icons/fa";
import { Link } from "react-router-dom";

const ItemList = () => {
  const { items } = useGlobalContext();
  const { addToCart } = useGlobalCartContext();
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
              className="col-12 col-sm-8 col-md-6 col-lg-5 col-xl-4 my-3 mx-auto shadow-lg"
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
                  <Link to={`/item/:${id}`} className="mr-2">
                    <div className="btn btn-primary text-light  text-capitalize">
                      details
                    </div>
                  </Link>
                  <div
                    onClick={(e) => addToCart(e)}
                    className="btn btn-success ml-md-3 text-capitalize"
                  >
                    add to cart
                    <FaCartPlus className="ml-1 my-auto" />
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
