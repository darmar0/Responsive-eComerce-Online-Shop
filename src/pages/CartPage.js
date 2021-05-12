import React from "react";
import CartItem from "./CartItem.js";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

const CartPage = (props) => {
  const state = useSelector((state) => state);
  const history = useHistory();
  const subItem = state.cartItems.map((x, i) => x.productQuantity * state.cartItems[i].productPrice);
  const subtotal = subItem.length > 0 ? Number(subItem.reduce((a, b) => a + b)).toFixed(2) : 0;
  const subItemsQty = state.cartItems.length > 0 ? state.cartItems.map((i) => i.productQuantity).reduce((a, b) => a + b) : 0;

  console.log(state.cartItems);

  const checkout = () => {
    if (!props.user) {
      history.push("/signin");
      history.go("/signin");
    } else {
      let orderId = Math.random().toString(36).substring(3);
      history.push(`/shipping/${orderId}`);
      history.go(`/shipping/${orderId}`);
    }
  };

  return (
    <div className="cart">
      <div className="shoppingCart">
        <h2>Shopping Cart</h2>
        <h5>Price</h5>

        {state.cartItems.map((item) => (
          <CartItem key={item.id} item={item} subItem={subItem} />
        ))}
        <h3>
          Subtotal ({subItemsQty} items) : € {subtotal}{" "}
        </h3>
      </div>
      <div className="subtotal">
        <h3>
          Subtotal ({subItemsQty} items) : € {subtotal}
        </h3>
        <button className="cartButton" onClick={checkout}>
          Proced to Checkout
        </button>
      </div>
    </div>
  );
};

export default CartPage;
