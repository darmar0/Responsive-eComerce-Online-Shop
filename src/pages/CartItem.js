import React, { useState } from "react";
import Quantity from "../components/Quantity.js";
import { useDispatch } from "react-redux";
import * as actionCreators from "../redux/actionCreators.js";
const CartItem = (props) => {
  const productLink = props.item.productName.replace(/\s/g, "_");
  const stock = props.item.productQuantity > 0 ? "In stock" : "Out of stock";
  const [qty, setQty] = useState({ value: props.item.productQuantity, click: 0 });
  const dispatch = useDispatch();

  const submit = () => {
    dispatch(actionCreators.EDIT_CART_QTY({ ...props.item, productQuantity: qty.value }));
    setQty({ ...qty, click: 0 });
  };

  return (
    <div className="cartItem">
      <div className="cartImageBox">
        <img alt={props.item.productName} src={props.item.productImage[1]}></img>
      </div>
      <div className="itemDesc">
        <a href={`/product/${productLink}/${props.item.id}`}>
          <h3>
            {props.item.productName}
            {props.item.productDescription}
          </h3>
        </a>
        <p style={{ color: "green" }}>{stock}</p>
        <div className="cartFooter">
          <Quantity setQty={setQty} qty={qty.value} />
          {qty.click !== 0 ? (
            <p id={props.item.id} className="deleteItem" onClick={submit}>
              Submit changes
            </p>
          ) : null}
          <p id={props.item.id} className="deleteItem" onClick={(e) => dispatch(actionCreators.REMOVE_FROM_CART(e.target.id))}>
            Delete item
          </p>
        </div>
      </div>

      <h3>€ {props.item.productPrice}</h3>
    </div>
  );
};

export default CartItem;
