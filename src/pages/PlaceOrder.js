import React from "react";
import CheckoutSteps from "../components/CheckoutSteps.js";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import * as actionCreators from "../redux/actionCreators.js";
import OrderItems from "../components/OrderItems.js";
import { useParams } from "react-router-dom";

const PlaceOrder = () => {
  const id = useParams().id;
  const history = useHistory();
  const order = useSelector((state) => state.orders.find((i) => i.orderId === id));
  const items = useSelector((state) => state.cartItems);
  const dispatch = useDispatch();
  const subItem = items.map((x, i) => x.productQuantity * items[i].productPrice);
  const subtotal = subItem.length > 0 ? parseInt(Number(subItem.reduce((a, b) => a + b)).toFixed(2)) : 0;

  const orderPlace = () => {
    history.push(`/order/${id}`);
    history.go(`/order/${id}`);
    dispatch(actionCreators.ORDER_ITEMS(items, id));
    dispatch(actionCreators.EMPTY_CART());
  };
  console.log(order);
  return (
    <div className="checkoutPage">
      <CheckoutSteps step1 step2 step3 step4 />
      <div className="checkoutStep">
        <div className="orderDetails">
          <div className="orderCard">
            <div className="cardHeader">
              <h3>Shipping</h3>
            </div>
            <div className="cardBody">
              <h4>Full Name: </h4>
              <p> {order.shippingInfo.fullName}</p>
            </div>
            <div className="cardBody">
              <h4>Shipping Adress:</h4>{" "}
              <p>
                {order.shippingInfo.adress}, {order.shippingInfo.postalCode}, {order.shippingInfo.city}, {order.shippingInfo.country}
              </p>
            </div>
          </div>
          <div className="orderCard">
            <div className="cardHeader">
              <h3>Payment</h3>
            </div>
            <div className="cardBody">
              <h4>Method:</h4>
              <p>{order.payment}</p>
            </div>
          </div>

          <div className="orderCard">
            <div className="cardHeader">
              <h3>Order items</h3>
            </div>
            <div className="cardBodyItems">
              {items.map((i) => (
                <OrderItems key={i.id} item={i} />
              ))}
            </div>
          </div>
        </div>
        <div className="placeOrder">
          <div className="cardHeader">
            <h3>Order summary</h3>
          </div>
          <div className="cardBodySum">
            <h4>Items:</h4>
            <p>{"$" + subtotal.toFixed(2)}</p>

            <h4>Shipping:</h4>
            <p>$10.00</p>

            <h4>Tax:</h4>
            <p>$10.00 </p>

            <h3>Order Total:</h3>
            <h3>{"$" + Number(subtotal + 20).toFixed(2)}</h3>
          </div>
          <button className="accButton" onClick={orderPlace}>
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlaceOrder;
