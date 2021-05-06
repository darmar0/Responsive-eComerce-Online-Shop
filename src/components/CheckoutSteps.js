import React from "react";

const Checkout = (props) => {
  return (
    <div className="steps">
      <div className={props.step1 ? "active" : "step"}>
        <p>SignIn</p>
      </div>
      <div className={props.step2 ? "active" : "step"}>
        <p>Shipping</p>
      </div>
      <div className={props.step3 ? "active" : "step"}>
        <p>Payment</p>
      </div>
      <div className={props.step4 ? "active" : "step"}>
        <p>Place order</p>
      </div>
    </div>
  );
};

export default Checkout;
