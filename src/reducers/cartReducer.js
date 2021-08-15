const cartReducer = (state, action) => {
  if (action.type === "ADD_TO_CART") {
    const newCart = [...state.cartItems];
    const id = parseInt(action.payload);
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
      let itemTotal = parseInt(parseFloat(newCart[i].total).toFixed(2));
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
  if (action.type === "REMOVE_ITEM") {
    let id = parseInt(action.payload);
    const newCart = state.cartItems.filter((item) => {
      return item.id !== id;
    });

    let totalCounter = 0;
    for (let i = 0; i < newCart.length; i++) {
      let itemTotal = parseInt(parseFloat(newCart[i].total).toFixed(2));

      totalCounter += itemTotal;
    }
    let quantityCounter = 0;
    for (let i = 0; i < newCart.length; i++) {
      let itemQuantity = parseInt(newCart[i].quantity);
      quantityCounter += itemQuantity;
    }

    return {
      ...state,
      cartItems: newCart,
      total: parseFloat(totalCounter).toFixed(2),
      quantity: quantityCounter,
    };
  }
  if (action.type === "INCREASE_ITEM") {
    let id = parseInt(action.payload);
    let tempCart = state.cartItems.map((cartItem) => {
      if (cartItem.id === id) {
        return {
          ...cartItem,
          quantity: cartItem.quantity + 1,
          total: parseFloat((cartItem.quantity + 1) * cartItem.price).toFixed(
            2
          ),
        };
      }
      return cartItem;
    });
    let totalCounter = 0;
    for (let i = 0; i < tempCart.length; i++) {
      let itemTotal = parseInt(parseFloat(tempCart[i].total).toFixed(2));
      totalCounter += itemTotal;
    }
    let quantityCounter = 0;
    for (let i = 0; i < tempCart.length; i++) {
      let itemQuantity = parseInt(tempCart[i].quantity);
      quantityCounter += itemQuantity;
    }
    return {
      ...state,
      cartItems: tempCart,
      total: parseFloat(totalCounter).toFixed(2),
      quantity: quantityCounter,
    };
  }
  if (action.type === "DECREASE_ITEM") {
    let id = parseInt(action.payload);
    let tempCart = state.cartItems
      .map((cartItem) => {
        if (cartItem.id === id) {
          return {
            ...cartItem,
            quantity: cartItem.quantity - 1,
            total: parseFloat((cartItem.quantity - 1) * cartItem.price).toFixed(
              2
            ),
          };
        }
        return cartItem;
      })
      .filter((cartItem) => cartItem.quantity !== 0);
    let totalCounter = 0;
    for (let i = 0; i < tempCart.length; i++) {
      let itemTotal = parseInt(parseFloat(tempCart[i].total).toFixed(2));
      totalCounter += itemTotal;
    }
    let quantityCounter = 0;
    for (let i = 0; i < tempCart.length; i++) {
      let itemQuantity = parseInt(tempCart[i].quantity);
      quantityCounter += itemQuantity;
    }
    return {
      ...state,
      cartItems: tempCart,
      total: parseFloat(totalCounter).toFixed(2),
      quantity: quantityCounter,
    };
  }
  return state;
};
export default cartReducer;
