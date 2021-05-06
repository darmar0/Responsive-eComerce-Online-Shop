import React from "react";

const Quantity = (props) => {
  return (
    <div className="cartQty">
      <div className={props.id ? "qty" : "qtyBlack"}>
        <button
          className={props.id ? "qtyControl" : "qtyControlBlack"}
          onClick={() => props.setQty({ value: props.qty - 1, click: 1 })}
        >
          <i class="fa fa-minus" aria-hidden="true"></i>
        </button>
        <div className="qtyValue">
          <p className={props.id ? "qtyNum" : "qtyNumB"}>{props.qty < 0 ? 0 : props.qty}</p>
          <p className="qtyItems">{props.qty > 1 ? "items" : "item"}</p>
        </div>
        <button
          className={props.id ? "qtyControl" : "qtyControlBlack"}
          onClick={() => props.setQty({ value: props.qty + 1, click: 1 })}
        >
          <i class="fa fa-plus" aria-hidden="true"></i>
        </button>
      </div>
    </div>
  );
};

export default Quantity;
