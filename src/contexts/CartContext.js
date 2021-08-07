import React from "react";
import { data } from "../data";
import cartReducer from "../reducers/cartReducer";
import { useContext, useReducer } from "react";

const CartContext = React.createContext();
const CartProvider = ({ children }) => {
  const initialState = {};
  const [state, dispatch] = useReducer(cartReducer, initialState);
  return (
    <CartContext.Provider value={{ ...state }}>{children}</CartContext.Provider>
  );
};

export const useGlobalCartContext = () => {
  return useContext(CartContext);
};
export { CartContext, CartProvider };
