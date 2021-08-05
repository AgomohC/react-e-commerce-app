import React from "react";
import { useGlobalContext } from "../contexts/AppContext";

const SearchButtons = () => {
  const { items } = useGlobalContext();

  const storeCategories = [
    "all",
    ...new Set(
      items.map((i) => {
        const { category } = i;
        return category;
      })
    ),
  ];

  return (
    <section id="btn-container" className="container mt-5">
      <div className="row justify-content-center">
        {storeCategories.map((item, idx) => {
          return (
            <button
              className="btn mx-2 text-capitalize btn-primary col-4 col-lg-2 mb-3 shadow-sm"
              key={idx}
            >
              {item}
            </button>
          );
        })}
      </div>
    </section>
  );
};

export default SearchButtons;
