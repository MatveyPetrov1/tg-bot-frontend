import React from "react";
import "./buybutton.css";
import "../CartList/cartlist.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export const BuyButton = ({ text }) => {
  const { totalPrice } = useSelector((state) => state.cart);
  return (
    <div className="buttons">
      <Link to="/" className="homebutton  ">
        👈 Вернуться
      </Link>
      <Link to="/form" className="buybutton">
        {text} {totalPrice} ₽
      </Link>
    </div>
  );
};
