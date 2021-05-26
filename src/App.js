import React, { useState, useEffect } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import ProductsPage from "./pages/ProductsPage.js";
import ProductPage from "./pages/ProductPage.js";
import SideBar from "./components/SideBar.js";
import CartPage from "./pages/CartPage.js";
import { NavLink } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store.js";
import CartNotification from "./components/cartNotification.js";
import SignIn from "./pages/SignIn.js";
import Shipping from "./pages/Shipping.js";
import Register from "./pages/Register.js";
import Payment from "./pages/Payment.js";
import PlaceOrder from "./pages/PlaceOrder.js";
import Order from "./pages/Order.js";

const App = () => {
  const [click, clicked] = useState(0);
  const [category, categorySelection] = useState();
  const [user, userSignIn] = useState();
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  const handelMenu = () => {
    clicked(click === 0 ? 1 : 0);
    /*updateMargin(click === 0 ? { marginLeft: "20rem", transition: "0.5s" } : { marginLeft: 0, transition: "0.5s" });*/
  };
  const categorySelect = (id) => {
    categorySelection(id);
  };

  const signOutHandeler = () => {
    localStorage.removeItem("user");
    userSignIn();
  };

  function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height,
    };
  }
  useEffect(() => {
    let parsedUser = localStorage.getItem("user");
    userSignIn(parsedUser !== null ? JSON.parse(parsedUser) : undefined);
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="container">
          <header style={{ maxWidth: windowDimensions.width }} className="header">
            <div className="brand">
              <button onClick={() => handelMenu()}>
                <i className="fa fa-bars" aria-hidden="true"></i>
              </button>
              <a className="barcode" href="/">
                21
                <span className="brand-name" style={{ fontFamily: "Bowlby One, cursive" }}>
                  iBuy
                </span>
              </a>
            </div>
            <div className="nav">
              <NavLink to="/cart">
                <div className="cartNotify">
                  <p>Cart</p>
                  <CartNotification />
                </div>
              </NavLink>
              {user !== undefined ? (
                <div className="dropdown">
                  <NavLink to="#">
                    {user[0].name}
                    <i className="fa fa-caret-down"></i>
                  </NavLink>

                  <ul className="dropdownContent">
                    <NavLink to="#signout" onClick={signOutHandeler}>
                      Sign Out
                    </NavLink>
                  </ul>
                </div>
              ) : (
                <div className="signElement">
                  <NavLink to="/signin">Sign in</NavLink>
                </div>
              )}
            </div>
          </header>
          <SideBar
            click={click}
            handelMenu={handelMenu}
            categorySelect={categorySelect}
            windowDimensions={windowDimensions}
            signOutHandeler={signOutHandeler}
          />
          <main style={{ maxWidth: windowDimensions.width }} className="main">
            <Route path="/product/:productName/:id">
              <ProductPage user={user} />
            </Route>
            <Route path="/" exact>
              <ProductsPage category={category} />
            </Route>
            <Route path="/cart">
              <CartPage user={user ? user[0] : user} />
            </Route>
            <Route path="/signin">
              <SignIn userSignIn={userSignIn} />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="/shipping/:id">
              <Shipping user={user ? user[0] : user} />
            </Route>
            <Route path="/payment/:id">
              <Payment user={user ? user[0] : user} />
            </Route>
            <Route path="/placeorder/:id">
              <PlaceOrder />
            </Route>
            <Route path="/order/:id">
              <Order />
            </Route>
          </main>
          <footer className="footer">
            <div className="author">
              <h4>
                Developed by{""}
                <a href="https://darmar.site/" target="0">
                  darmar.
                </a>
                <br></br>
                All rights reserved
              </h4>
            </div>
            <div className="social">
              <a href="https://github.com/darmar0" target="0">
                <i className="fa fa-github" aria-hidden="true" style={{ fontSize: "2.6rem" }}></i>
              </a>
              <a href="https://www.linkedin.com/in/darijan-martinovi%C4%87-363464a1/" target="0">
                <i className="fa fa-linkedin-square" aria-hidden="true" style={{ fontSize: "2.6rem" }}></i>
              </a>
              <a href="https://www.instagram.com/_darmar___/?hl=en" target="0">
                <i className="fa fa-instagram" aria-hidden="true" style={{ fontSize: "2.6rem" }}></i>
              </a>
            </div>
          </footer>
        </div>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
