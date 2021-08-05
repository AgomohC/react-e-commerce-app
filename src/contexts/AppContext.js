import React from "react";
import { data } from "../data";
import reducer from "../reducers/reducer";
import { useEffect, useContext, useState, useReducer } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const cat = [
    "all",
    ...new Set(
      data.map((i) => {
        const { category } = i;
        return category;
      })
    ),
  ];
  const initialState = {
    items: data,
    storeCategories: cat,
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  const searchCategory = (id) => {
    console.log(state.storeCategories);
    dispatch({ type: "SEARCH_CATEGORIES", payload: id });
  };
  return (
    <AppContext.Provider value={{ ...state, searchCategory }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
