import React, { useState } from "react";
import { useDispatch } from "react-redux";
import * as actionCreators from "../redux/actionCreators.js";
import { useHistory } from "react-router-dom";

const Register = () => {
  const [acc, setAcc] = useState({});
  const [notFound, setNotFound] = useState();
  const history = useHistory();
  const dispatch = useDispatch();
  const register = () => {
    if (!acc.name || !acc.email || !acc.password) {
      setNotFound("inputEror");
    } else if (acc.password === acc.passConfirmation && acc.name && acc.email) {
      dispatch(actionCreators.REG_NEW_ACC(acc));
      history.push("/signin");
    } else if (acc.password !== acc.passConfirmation) {
      setNotFound("inputEror");
    }
  };

  return (
    <div className="accountPageReg">
      <div className="inputForm">
        <h2>Create account</h2>
        <p>Name</p>
        <input
          id="name"
          className={notFound && !acc.name ? notFound : "accountInput"}
          type="text"
          onChange={(e) => setAcc({ ...acc, name: e.target.value })}
        ></input>
        <p style={{ color: "#c40000", fontSize: "0.9rem" }}>{notFound && !acc.name ? "! Enter your name" : null}</p>
        <p>Email adress</p>
        <input
          id="email"
          className={notFound && !acc.email ? notFound : "accountInput"}
          type="text"
          onChange={(e) => setAcc({ ...acc, email: e.target.value })}
          required
        ></input>
        <p style={{ color: "#c40000", fontSize: "0.9rem" }}>{notFound && !acc.email ? "! Enter your e-mail" : null}</p>
        <p>Password</p>
        <input
          id="password"
          className={notFound ? notFound : "accountInput"}
          onChange={(e) => setAcc({ ...acc, password: e.target.value })}
          type="password"
        ></input>
        <p style={{ color: "#c40000", fontSize: "0.9rem" }}>{notFound && !acc.password ? "! Enter your password" : null}</p>
        <p>Confirm password</p>
        <input
          id="passConfirmation"
          className={notFound ? notFound : "accountInput"}
          onChange={(e) => setAcc({ ...acc, passConfirmation: e.target.value })}
          type="password"
        ></input>
        <p style={{ color: "#c40000", fontSize: "0.9rem" }}>
          {notFound ? "! Passwords must match" : notFound && !acc.passConfirmation ? "! Enter your password" : null}
        </p>
        <button type="submit" className="accButton" onClick={register}>
          Register
        </button>
      </div>
    </div>
  );
};

export default Register;
