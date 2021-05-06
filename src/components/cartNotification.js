import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const CartNotification = () => {
  const [notification, setNotify] = useState();
  const state = useSelector((state) => state);

  useEffect(() => {
    setNotify(state.cartItems.length > 0 ? state.cartItems.map((i) => i.productQuantity).reduce((a, b) => a + b) : 0);
  }, [state.cartItems]);

  return (
    <div style={notification > 0 ? { color: "#da8405" } : { color: "white" }} className="notification">
      ({notification})
    </div>
  );
};

export default CartNotification;
