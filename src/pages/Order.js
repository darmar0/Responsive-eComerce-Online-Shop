import React, { useState } from "react";
import CheckoutSteps from "../components/CheckoutSteps.js";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import * as actionCreators from "../redux/actionCreators.js";
import OrderItems from "../components/OrderItems.js";
import { useParams } from "react-router-dom";

const Order = () => {
  const id = useParams().id;
  const order = useSelector((state) => state.orders.filter((i) => i.orderId === id))[0];
  const dispatch = useDispatch();
  const subItem = order.items.map((x, i) => x.productQuantity * order.items[i].productPrice);
  const subtotal = subItem.length > 0 ? parseInt(Number(subItem.reduce((a, b) => a + b)).toFixed(2)) : 0;
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, "0");
  var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  var yyyy = today.getFullYear();

  today = dd + "/" + mm + "/" + yyyy;

  const orderPlace = () => {
    dispatch(actionCreators.EMPTY_CART());
  };

  return (
    <div className="orderPage">
      <div className="orderPlaceCard">
        <h3>Your order hase been placed.</h3>
        <h2>Order {id}</h2>

        <div className="orderPlaceCardBody">
          <h4>Name:</h4>
          <p>{order.shippingInfo.fullName}</p>
        </div>
        <div className="orderPlaceCardBody">
          <h4>Adress:</h4>
          <p>
            {order.shippingInfo.adress}, {order.shippingInfo.postalCode}, {order.shippingInfo.city}, {order.shippingInfo.country}
          </p>
        </div>
        <div className="orderPlaceCardBody">
          <h4>Date:</h4>
          <p>{today}</p>
        </div>
        <div className="orderPlaceCardBody">
          <h4>Email:</h4>
          <p>{order.shippingInfo.fullName}</p>
        </div>
        <div className="orderPlaceCardBody">
          <h4>Items:</h4>
          <div className="itemsOrder">
            <ul>
              {order.items.map((i) => (
                <li>
                  <p>
                    {i.productQuantity} x {i.productName}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="orderPlaceCardBodyTotal">
          <h4>Total:</h4>
          <p>{"$" + Number(subtotal + 20).toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
};

export default Order;
