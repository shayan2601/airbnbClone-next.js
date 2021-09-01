export const initialState = {
  card: [],
};

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "CARD":
      return {
        ...state,
        card: action.card,
      };

    default:
      return state;
  }
};

export default reducer;
