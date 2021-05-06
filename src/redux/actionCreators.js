import * as actionTypes from "./actionTypes.js";

export const ADD_TO_CART = (item) => {
  return {
    type: actionTypes.ADD_TO_CART,
    payload: { newItem: item },
  };
};

export const REMOVE_FROM_CART = (id) => {
  return {
    type: actionTypes.REMOVE_FROM_CART,
    payload: { id: id },
  };
};

export const EDIT_CART_QTY = (editedItem) => {
  return {
    type: actionTypes.EDIT_CART_QTY,
    payload: { editedItem: editedItem },
  };
};

export const LOAD_CART = (cart) => {
  return {
    type: actionTypes.LOAD_CART,
    payload: { cart: cart },
  };
};

export const REG_NEW_ACC = (acc) => {
  return {
    type: actionTypes.REG_NEW_ACC,
    payload: { acc: acc },
  };
};
export const SIGN_IN_ACC = (acc) => {
  return {
    type: actionTypes.SIGN_IN_ACC,
    payload: { acc: acc },
  };
};
export const SEND_COMMENT = (com, id) => {
  return {
    type: actionTypes.SEND_COMMENT,
    payload: { com: com, id: id },
  };
};

export const SAVE_SHIPP_INFO = (shipping, id) => {
  return {
    type: actionTypes.SAVE_SHIPP_INFO,
    payload: { shipping: shipping, id: id },
  };
};

export const PAYMENT_INFO = (payment, id) => {
  return {
    type: actionTypes.PAYMENT_INFO,
    payload: { payment: payment, id: id },
  };
};

export const EMPTY_CART = () => {
  return {
    type: actionTypes.EMPTY_CART,
  };
};

export const PLACE_ORDER = () => {
  return {
    type: actionTypes.PLACE_ORDER,
  };
};
export const ORDER_ITEMS = (items, id) => {
  return {
    type: actionTypes.ORDER_ITEMS,
    payload: { items: items, id: id },
  };
};
