import React, { useState } from "react";
import { useDispatch } from "react-redux";
import * as actionCreators from "../redux/actionCreators.js";
const CartItem = (props) => {
  const productLink = props.item.productName.replace(/\s/g, "_");
  const stock = props.item.productQuantity > 0 ? "In stock" : "Out of stock";
  const [qty, setQty] = useState({ value: props.item.productQuantity, click: 0, dropDown: "dropDownInactive" });
  const dispatch = useDispatch();

  const submit = (e) => {
    console.log(e);
    setQty({ value: e, dropDown: "dropDownInactive" });
    console.log(qty.value);
    dispatch(actionCreators.EDIT_CART_QTY({ ...props.item, productQuantity: e }));
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
          <button className="qtyCart" onClick={() => setQty({ dropDown: "dropDownActive" })}>
            <p>Qty:</p>
            <p>{qty.value}</p>
            <i className="fa fa-angle-down" style={{ fontSize: "1.1rem", fontWeight: 600 }}></i>
          </button>
          <div className={qty.dropDown}>
            <p id={props.item.id} onClick={(e) => dispatch(actionCreators.REMOVE_FROM_CART(e.target.id))}>
              0 (Delete)
            </p>
            <p onClick={() => submit(1)}>1</p>
            <p onClick={() => submit(2)}>2</p>
            <p onClick={() => submit(3)}>3</p>
            <p onClick={() => submit(4)}>4</p>
            <p onClick={() => submit(5)}>5</p>
            <p onClick={() => submit(6)}>6</p>
            <p onClick={() => submit(7)}>7</p>
            <p onClick={() => submit(8)}>8</p>
            <p onClick={() => submit(9)}>9</p>
          </div>
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

/*<Quantity setQty={setQty} qty={qty.value} />*/
