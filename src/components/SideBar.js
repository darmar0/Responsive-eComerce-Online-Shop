import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

const SideBar = (props) => {
  const [user, userSignIn] = useState();
  const category = (e) => {
    props.categorySelect(e.target.id);
    props.handelMenu();
  };

  useEffect(() => {
    let parsedUser = localStorage.getItem("user");
    userSignIn(parsedUser !== null ? JSON.parse(parsedUser) : undefined);
  }, []);

  const style =
    props.click === 0 && props.windowDimensions.width < 550
      ? { transform: `translateX(${-props.windowDimensions.width}px)` }
      : props.click === 0
      ? { transform: "translateX(-20rem)" }
      : { transform: "translateX(0)" };

  return (
    <div className="sideBar" style={style}>
      <div className="sideBarHeader">
        <div className="user">
          {user ? (
            <h3>Hello, {user[0].name}</h3>
          ) : (
            <h3>
              Hello,{" "}
              <NavLink onClick={() => props.handelMenu()} to="/signin">
                Sign in
              </NavLink>
            </h3>
          )}
        </div>
        <button className="closebtn" onClick={() => props.handelMenu()}>
          &times;
        </button>
      </div>

      <div className="navMenu">
        <h3>Computer Accessories</h3>
        <ul>
          <NavLink to="/" exact className="navLink">
            <li id="keyboards" onClick={(e) => category(e)}>
              <p>Keyboards</p>
              <span className="arrow">
                <i className="fa fa-angle-right"></i>
              </span>
            </li>
          </NavLink>
          <NavLink to="/" exact className="navLink">
            <li id="mices" onClick={(e) => category(e)}>
              <p>Mices</p>
              <span className="arrow">
                <i className="fa fa-angle-right"></i>
              </span>
            </li>
          </NavLink>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
