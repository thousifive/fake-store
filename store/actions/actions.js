import { ADD_DATA, ADD_TO_CART, REMOVE_FROM_CART, REMOVE_DATA } from "../types";

export const addData = (data) => {
  return {
    type: ADD_DATA,
    payload: data,
  };
};

export const addToCart = (item) => {
  return {
    type: ADD_TO_CART,
    payload: item,
  };
};

export const removeFromCart = (item) => {
  return {
    type: REMOVE_FROM_CART,
    payload: item,
  };
};

export const removeData = () => {
  return {
    type: REMOVE_DATA,
  };
};
