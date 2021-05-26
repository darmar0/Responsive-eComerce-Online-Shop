import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

const SignIn = () => {
  const state = useSelector((state) => state);
  const [acc, setAcc] = useState({});
  const [notFound, setNotFound] = useState();
  let history = useHistory();
  const signIn = () => {
    let user = state.accounts.filter((i) => i.email === acc.email && i.password === acc.password);
    if (user.length > 0) {
      localStorage.setItem("user", JSON.stringify(user));
      history.push("/");
      history.go("/");
    } else if (state.accounts.filter((i) => i.email === acc.email).length === 0) {
      setNotFound("We cannot find an account with that email address");
    } else if (state.accounts.filter((i) => i.password === acc.password).length === 0) {
      setNotFound("Your password is incorrect");
    }
  };

  return (
    <div className="accountPage">
      <div className="inputForm">
        {notFound ? (
          <div className="accNotFound">
            <i className="fa fa-exclamation-triangle" aria-hidden="true"></i>
            <div className="accNotFoundTex">
              <h4>There was a problem</h4>
              <p>{notFound}</p>
            </div>
          </div>
        ) : null}
        <h2>Sign in</h2>
        <p>Email adress</p>
        <input onChange={(e) => setAcc({ ...acc, email: e.target.value })}></input>
        <p>Password</p>
        <input onChange={(e) => setAcc({ ...acc, password: e.target.value })} type="password"></input>
        <button className="accButton" onClick={() => signIn()}>
          Sign In
        </button>
        <p id="link">
          New customer? <NavLink to="/register">Create your account</NavLink>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
