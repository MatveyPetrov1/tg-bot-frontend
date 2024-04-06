import React from "react";
import "./buybutton.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export const BuyButton = ({ text }) => {
  const { totalPrice } = useSelector((state) => state.cart);
  return (
    <Link to="/form" className="buybutton">
      {text} {totalPrice}р.
    </Link>
  );
};
