const cartReducer = (state, action) => {
  if (action.type === "ADD_TO_CART") {
    // state.added = true;
    // setTimeout(() => {
    //   state.added = false;
    // }, 1000);

    let addedCartItem = state.items.find((item) => {
      return item.id === parseInt(action.payload.targetId);
    });
    let existedItem = state.cartItems.find((item) => {
      return parseInt(action.payload.targetId) === item.id;
    });
    if (existedItem) {
      let index = state.cartItems.indexOf(existedItem);

      state.cartItems[index].quantity += 1;
      return {
        ...state,
        cartItems: [...state.cartItems],
        total: state.total + addedCartItem.price,
        quantity: state.quantity + 1,
      };
      // state.total += existedItem.price;
      // state.quantity += 1;
    } else {
      addedCartItem.quantity = 1;
      return {
        ...state,
        cartItems: [...state.cartItems, addedCartItem],
        total: state.total + addedCartItem.price,
        quantity: state.quantity + 1,
      };
      // state.cartItems.push(addedCartItem);
      // state.total += addedCartItem.price;
      // state.quantity += 1;
    }

    // let newState = {
    //   ...state,
    //   cartItems: [...state.cartItems],
    //   total: parseFloat(state.total.toFixed(2)),
    // };
    // console.log(newState);

    // return { ...newState };
  }

  return state;
};
export default cartReducer;
