import React, { useState } from "react";
import CheckoutSteps from "../components/CheckoutSteps.js";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import * as actionCreators from "../redux/actionCreators.js";
import { useParams } from "react-router-dom";

const Payment = (props) => {
  const [payment, setPayment] = useState();
  const history = useHistory();
  const dispatch = useDispatch();
  const id = useParams().id;
  const setPaymentMethod = () => {
    dispatch(actionCreators.PAYMENT_INFO(payment, id));
    history.push(`/placeorder/${id}`);
    /* history.go(`/placeorder/${id}`);*/
  };

  return (
    <div className="checkoutPage">
      <CheckoutSteps step1 step2 step3 />
      <div className="checkoutStep">
        <div className="paymentSelect">
          <h2>Payment method</h2>
          <input type="radio" id="PayPal" name="paymentMethod" value="PayPal" onChange={(e) => setPayment(e.target.value)}></input>
          <label htmlFor="PayPal">PayPal</label>
          <br></br>
          <input type="radio" id="Stripe" name="paymentMethod" value="Stripe" onChange={(e) => setPayment(e.target.value)}></input>
          <label htmlFor="Stripe">Stripe</label>
          <button className="accButton" onClick={setPaymentMethod}>
            Countinue
          </button>
        </div>
      </div>
    </div>
  );
};

export default Payment;
