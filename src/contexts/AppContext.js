import React from "react";
import { data } from "../data";
import { useEffect, useContext, useState } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [storeItems, setStoreItems] = useState([]);

  const goods = () => {
    const storeItem = data.map((item) => {
      const { id, title, price, description, category, image } = item;
      return {
        id: id,
        title: title,
        price: price,
        desc: description,
        cat: category,
        img: image,
      };
    });
    // console.log(storeItem);
    setStoreItems(storeItem);
  };

  useEffect(() => {
    goods();
    return () => goods();
  }, []);

  return (
    <AppContext.Provider value={{ setSearchTerm, storeItems }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
