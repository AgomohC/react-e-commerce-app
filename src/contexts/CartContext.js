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

  const addToCart = (target) => {
    dispatch({
      type: "ADD_TO_CART",
      payload: target,
      initialState,
    });
    setTimeout(() => {
      dispatch({ type: "ADD_TO_CART_HIDE", payload: target });
    }, 3000);
  };
  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };
  const removeItem = (itemId) => {
    dispatch({ type: "REMOVE_ITEM", payload: itemId });
  };
  const increaseItem = (itemId) => {
    dispatch({ type: "INCREASE_ITEM", payload: itemId });
  };
  const decreaseItem = (itemId) => {
    dispatch({ type: "DECREASE_ITEM", payload: itemId });
  };
  return (
    <CartContext.Provider
      value={{
        ...state,
        addToCart,
        clearCart,
        removeItem,
        increaseItem,
        decreaseItem,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useGlobalCartContext = () => {
  return useContext(CartContext);
};
export { CartContext, CartProvider };
