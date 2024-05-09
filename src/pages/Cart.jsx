import React from "react";
import { CartList } from "../components/Cart/CartList/CartList";

const tg = window.Telegram.WebApp;

export const Cart = () => {
  React.useEffect(() => {
    tg.MainButton.hide();
  }, []);

  return (
    <div className="cart">
      <div className="container">
        <CartList />
      </div>
    </div>
  );
};
