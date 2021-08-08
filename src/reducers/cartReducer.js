import { data } from "../data";

const cartReducer = (state, action) => {
  if (action.type === "ADD_TO_CART") {
    // let cartItem = state.cartItems.find(() => {
    //   return state.cartItems === action.payload.targetId;
    // })
    // let cartItem = { number: 1, item: data[action.payload.targetId - 1] };

    // console.log(cartItem);
    // console.log(action.payload);
    // const timeout = setTimeout(() => {
    //   return { ...action.initialState };
    // });
    return { ...state, addedToCart: true, btnText: "added to cart" };
  }

  return state;
};
export default cartReducer;
