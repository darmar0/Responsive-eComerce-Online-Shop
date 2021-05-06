import React from "react";

const OrderItems = (props) => {
  const productLink = props.item.productName.replace(/\s/g, "_");

  return (
    <div className="orderItems">
      <img src={props.item.productImage[1]} className="orderImg"></img>
      <a href={`/product/${productLink}/${props.item.id}`}>
        <h3>{props.item.productName}</h3>
      </a>
      <h4>
        {props.item.productQuantity} x {props.item.productPrice} = {(props.item.productQuantity * props.item.productPrice).toFixed(2)}
      </h4>
    </div>
  );
};

export default OrderItems;
