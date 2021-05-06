import * as actions from "./actionTypes.js";
import data from "../data.js";

const reducer = (state = data, action) => {
  switch (action.type) {
    case actions.ADD_TO_CART:
      return { ...state, cartItems: [...state.cartItems, action.payload.newItem] };
    case actions.REMOVE_FROM_CART:
      const itemRemove = state.cartItems.filter((i) => i.id !== parseInt(action.payload.id));
      return { ...state, cartItems: itemRemove };
    case actions.EDIT_CART_QTY:
      const newCart = state.cartItems.map((i) =>
        i.id === action.payload.editedItem.id ? { ...i, productQuantity: action.payload.editedItem.productQuantity } : i
      );
      return { ...state, cartItems: newCart };
    case actions.REG_NEW_ACC:
      return { ...state, accounts: [...state.accounts, action.payload.acc] };
    case actions.SIGN_IN_ACC:
      let user = state.filter((i) => i.email === action.payload.acc.email && i.password === action.payload.acc.password);
      return { ...state, accounts: action.payload.acc };
    case actions.SEND_COMMENT:
      let product = state.stockData.filter((i) => action.payload.id === i.id)[0];
      let newComment = product.productComments;
      newComment.splice(0, 0, action.payload.com);
      let newProduct = { ...product, productComments: newComment };
      let newStock = state.stockData.filter((i) => action.payload.id !== i.id).concat(newProduct);
      return { ...state, stockData: newStock };
    case actions.SAVE_SHIPP_INFO:
      return {
        ...state,
        orders: [...state.orders, { orderId: action.payload.id, shippingInfo: action.payload.shipping }],
      };
    case actions.PAYMENT_INFO:
      let ordr = state.orders.find((i) => i.orderId === action.payload.id);
      let paymentOrdr = { ...ordr, payment: action.payload.payment };
      let newOrders = state.orders.filter((i) => i.orderId !== action.payload.id).concat(paymentOrdr);
      return { ...state, orders: newOrders };
    case actions.ORDER_ITEMS:
      console.log("radi");
      let findOrder = state.orders.find((i) => i.orderId === action.payload.id);
      let itemsOrdr = { ...findOrder, items: action.payload.items };
      let newOrdersArray = state.orders.filter((i) => i.orderId !== action.payload.id).concat(itemsOrdr);
      console.log(newOrdersArray);
      return { ...state, orders: newOrdersArray };
      return;
    case actions.EMPTY_CART:
      return { ...state, cartItems: [] };
    case actions.PLACE_ORDER:
      return {};
    default:
      return state;
  }
};

export default reducer;
