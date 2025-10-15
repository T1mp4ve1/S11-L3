const initialState = {
  count: 0,
};

const mainReducer = (state = initialState, action) => {
  console.log("mainReducer state BEFORE:", state, "action:", action);
  switch (action.type) {
    case "INCREMENT":
      return {
        ...state,
        count: state.count + action.payload,
      };

    default:
      return state;
  }
};
export default mainReducer;
