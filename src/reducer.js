export const initialState = {
  user: null,
};

export const actionTypes = {
  Set_User: "Set_User",
};

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case actionTypes.Set_User:
      return {
        ...state,
        user: action.user,
      };
    default:
      return state;
  }
};
export default reducer;
