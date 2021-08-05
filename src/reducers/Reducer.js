const reducer = (state, action) => {
  switch (action.type) {
    case "SEARCH_CATEGORIES":
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
    case "SEARCH_BAR":
      return { ...state, searchValue: action.payload };
    default:
      return state;
  }
};

export default reducer;
