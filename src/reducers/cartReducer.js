const cartReducer = (state, action) => {
  if (action.type === "ADD_TO_CART") {
    const newCart = [...state.cartItems];
    const id = parseInt(action.payload.targetId);
    const newItemIndex = newCart.findIndex((item) => {
      return item.id === id;
    });

    if (newItemIndex < 0) {
      const product = state.items.find((item) => {
        return item.id === id;
      });

      newCart.push({
        ...product,
        quantity: 1,
        total: parseFloat(product.price).toFixed(2),
      });
    } else {
      const updatedItem = {
        ...newCart[newItemIndex],
      };
      updatedItem.quantity++;
      updatedItem.total = parseFloat(
        updatedItem.price * updatedItem.quantity
      ).toFixed(2);
      newCart[newItemIndex] = updatedItem;
    }

    let totalCounter = 0;
    for (let i = 0; i < newCart.length; i++) {
      let itemTotal = parseInt(newCart[i].total);
      totalCounter += itemTotal;
    }

    return {
      ...state,
      cartItems: newCart,
      quantity: state.quantity + 1,
      total: parseFloat(totalCounter).toFixed(2),
    };
  }
  if (action.type === "CLEAR_CART") {
    return { ...state, cartItems: [], total: 0, quantity: 0 };
  }
  return state;
};
export default cartReducer;
