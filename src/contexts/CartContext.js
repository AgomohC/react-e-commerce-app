import React from "react";
import { data } from "../data";
import cartReducer from "../reducers/cartReducer";
import { useContext, useReducer } from "react";

const CartContext = React.createContext();
const CartProvider = ({ children }) => {
  const initialState = {
    items: data,
    cartItems: [],
    total: 0,
    quantity: 0,
  };

  const [state, dispatch] = useReducer(cartReducer, initialState);

  const addToCart = (e) => {
    dispatch({
      type: "ADD_TO_CART",
      payload: {
        targetId: e.target.parentElement.parentElement.id,
      },
      initialState,
    });
  };
  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  return (
    <CartContext.Provider value={{ ...state, addToCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useGlobalCartContext = () => {
  return useContext(CartContext);
};
export { CartContext, CartProvider };
