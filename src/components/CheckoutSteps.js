import React from "react";

const Checkout = (props) => {
  return (
    <div className="steps">
      <div className={props.step1 ? "checked" : "step"}>
        <p>SignIn</p>
      </div>
      <div className={props.step2 ? "checked" : "step"}>
        <p>Shipping</p>
      </div>
      <div className={props.step3 ? "checked" : "step"}>
        <p>Payment</p>
      </div>
      <div className={props.step4 ? "checked" : "step"}>
        <p>Place order</p>
      </div>
    </div>
  );
};

export default Checkout;
