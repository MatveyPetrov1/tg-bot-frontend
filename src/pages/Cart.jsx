import React from "react";
import { CartList } from "../components/Cart/CartList/CartList";

export const Cart = () => {
  return (
    <div className="cart">
      <div className="container">
        <CartList />
      </div>
    </div>
  );
};
