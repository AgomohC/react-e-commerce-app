import React from "react";
import { data } from "../data";
import reducer from "../reducers/reducer";
import { useContext, useReducer } from "react";

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
    searchValue: "",
    loaded: false,
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  const searchCategory = (id) => {
    dispatch({ type: "SEARCH_CATEGORIES", payload: id, initialState });
  };
  const searchbarFunction = (e) => {
    dispatch({ type: "SEARCH_BAR", payload: e.target.value, initialState });
  };
  const loadFunction = () => {
    dispatch({ type: "LOAD", initialState });
  };

  return (
    <AppContext.Provider
      value={{
        ...state,
        searchCategory,
        searchbarFunction,
        loadFunction,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
