import React from "react";
import { useGlobalContext } from "../contexts/AppContext";

const Itemlist = () => {
  const { storeItems } = useGlobalContext();
  if (storeItems.length < 1) {
    return (
      <h3 className="text-danger text-capitalize p-5 my-5 text-center mx-auto">
        no items matched your search
      </h3>
    );
  }
  return (
    <section className="container">
      <h4></h4>
    </section>
  );
};

export default Itemlist;
