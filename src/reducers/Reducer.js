const reducer = (state, action) => {
  switch (action.type) {
    case "SEARCH_CATEGORIES":
      console.log(action.payload);
      // console.log(state);
      if (action.payload === "all") {
        return { ...state };
      } else {
        // console.log(state);
        return {
          ...state,
          items: state.items.filter((item) => {
            return item.category == action.payload;
          }),
        };
      }

    default:
      return state;
  }
};

export default reducer;
