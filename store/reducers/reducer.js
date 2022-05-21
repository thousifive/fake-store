import { ADD_DATA, ADD_TO_CART, REMOVE_FROM_CART, REMOVE_DATA } from "../types";

const initialState = {
  cart: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_DATA:
      return {
        ...state,
        cart: action.payload,
      };
    case ADD_TO_CART:
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    case REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((item, id) => id !== action.payload),
      };
    case REMOVE_DATA:
      return {
        ...state,
        cart: [],
      };
    default:
      return state;
  }
};

export default reducer;
