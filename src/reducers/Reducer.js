const reducer = (state, action) => {
  switch (action.type) {
    case "SEARCH_CATEGORIES":
      console.log(action.payload);
      console.log(state);
      if (action.payload === "all") {
        return { ...state };
      } else {
        const newItems = action.initialState.items.filter((item) => {
          return item.category === action.payload;
        });
        return {
          ...state,
          items: newItems,
        };
      }

    default:
      return state;
  }
};

export default reducer;
