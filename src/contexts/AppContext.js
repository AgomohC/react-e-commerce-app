import React from "react";
import { data } from "../data";
import reducer from "../reducers/reducer";
import { useEffect, useContext, useState, useReducer } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const initialState = {
    items: data,
  };
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{ ...state }}>{children}</AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
