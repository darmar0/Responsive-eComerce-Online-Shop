import axios from "axios";

class AuthService {
  static cartStore(cartItem) {
    const oldItems = localStorage.getItem("cart_data") ? JSON.parse(localStorage.getItem("cart_data")) : [];
    const newItem = cartItem;
    const newItems = oldItems.concat(newItem);
    localStorage.setItem("cart_data", JSON.stringify(newItems));
  }
  static getCartItems() {
    const cartiIems = localStorage.getItem("cart_data");
    return cartiIems ? JSON.parse(localStorage.getItem("cart_data")) : [];
  }
}

export default AuthService;
