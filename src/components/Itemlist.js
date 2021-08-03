import React from "react";
import { useGlobalContext } from "../contexts/AppContext";
import { FaCartPlus } from "react-icons/fa";

const ItemList = () => {
  const { storeItems } = useGlobalContext();
  if (storeItems.length < 1) {
    return (
      <h3 className="text-danger text-capitalize p-5 my-5 text-center mx-auto">
        no items matched your search
      </h3>
    );
  }
  return (
    <section className="container py-4 mt-4 border border-secondary bg-light rounded">
      <div className="row">
        {storeItems.map((item) => {
          const { id, title, price, img } = item;

          return (
            <div className="col-md-6 col-lg-4 my-3 mx-auto shadow-lg">
              <div className="card" id={id}>
                <img
                  alt={title}
                  src={img}
                  className="card-img-top img-height"
                />

                <div className="card-body bg-secondary">
                  <h5 className="card-title text-white text-capitalize">
                    {title.substring(0, 30)}...
                  </h5>
                  <p className="text-light card-text">${price}</p>
                  <button className="btn btn-primary text-light mr-4 text-uppercase">
                    details
                  </button>
                  <button className="btn btn-success ml-5 text-uppercase">
                    add to cart <FaCartPlus />
                  </button>
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
