import React, { useState } from "react";
import { useParams } from "react-router-dom";
import CheckoutSteps from "../components/CheckoutSteps.js";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import * as actionCreators from "../redux/actionCreators.js";

const Shipping = () => {
  const [shipping, setShipping] = useState({});
  const [notFound, setNotFound] = useState();
  const id = useParams().id;
  const history = useHistory();
  const dispatch = useDispatch();
  const saveShippingInfo = () => {
    if (!shipping.fullName || !shipping.adress || !shipping.city || !shipping.country || !shipping.postalCode) {
      setNotFound("inputEror");
    } else if (shipping.fullName && shipping.adress && shipping.city && shipping.country && shipping.postalCode) {
      dispatch(actionCreators.SAVE_SHIPP_INFO(shipping, id));
      history.push(`/payment/${id}`);
      history.go(`/payment/${id}`);
    }
  };

  return (
    <div className="checkoutPage">
      <CheckoutSteps step1 step2 />
      <div className="checkoutStep">
        <div className="inputForm">
          <h2>Shipping adress</h2>
          <p>Full Name</p>
          <input
            type="text"
            className={notFound && !shipping.fullName ? notFound : "accountInput"}
            onChange={(e) => setShipping({ ...shipping, fullName: e.target.value })}
          ></input>
          <p style={{ color: "#c40000", fontSize: "0.9rem" }}>{notFound && !shipping.fullName ? "! Enter your Full Name" : null}</p>
          <p>Adress</p>
          <input
            type="text"
            className={notFound && !shipping.adress ? notFound : "accountInput"}
            onChange={(e) => setShipping({ ...shipping, adress: e.target.value })}
          ></input>
          <p style={{ color: "#c40000", fontSize: "0.9rem" }}>{notFound && !shipping.adress ? "! Enter your adress" : null}</p>
          <p>City</p>
          <input
            type="text"
            className={notFound && !shipping.city ? notFound : "accountInput"}
            onChange={(e) => setShipping({ ...shipping, city: e.target.value })}
          ></input>
          <p style={{ color: "#c40000", fontSize: "0.9rem" }}>{notFound && !shipping.city ? "! Enter your City" : null}</p>
          <p>Postal Code</p>
          <input
            type="text"
            className={notFound && !shipping.postalCode ? notFound : "accountInput"}
            onChange={(e) => setShipping({ ...shipping, postalCode: e.target.value })}
          ></input>
          <p style={{ color: "#c40000", fontSize: "0.9rem" }}>
            {notFound && !shipping.postalCode ? "! Enter your Postal Code" : null}
          </p>
          <p>Country</p>
          <input
            type="text"
            className={notFound && !shipping.country ? notFound : "accountInput"}
            onChange={(e) => setShipping({ ...shipping, country: e.target.value })}
          ></input>
          <p style={{ color: "#c40000", fontSize: "0.9rem" }}>{notFound && !shipping.country ? "! Enter your Country" : null}</p>
          <button className="accButton" onClick={saveShippingInfo}>
            Countinue
          </button>
        </div>
      </div>
    </div>
  );
};

export default Shipping;
