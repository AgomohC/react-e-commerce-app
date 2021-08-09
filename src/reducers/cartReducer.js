const cartReducer = (state, action) => {
  if (action.type === "ADD_TO_CART") {
    let addedCartItem = state.items.find((item) => {
      return item.id === parseInt(action.payload.targetId);
    });
    let existedItem = state.cartItems.find((item) => {
      return parseInt(action.payload.targetId) === item.id;
    });
    if (existedItem) {
      let index = state.cartItems.indexOf(existedItem);
      state.cartItems[index].quantity += 1;
    } else {
      addedCartItem.quantity = 1;
      state.cartItems.push(addedCartItem);
    }
    console.log(state.cartItems);
    // return {
    //   ...state,
    //   cartItems: [...state.cartItems, addedCartItem],
    //   addedToCart: true,
    //   btnText: "added to cart",
    // };
  }

  return state;
};
export default cartReducer;
