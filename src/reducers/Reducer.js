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
      if (action.payload.length === 0) {
        return { ...action.initialState };
      }

      const testRegex = new RegExp(action.payload, "gi");
      const newItems = action.initialState.items.filter((item) => {
        const { title } = item;
        return testRegex.test(title);
      });
      return { ...state, items: newItems, searchValue: action.payload };
    case "LOAD":
      return { ...state, loaded: true };

    default:
      return state;
  }
};

export default reducer;
