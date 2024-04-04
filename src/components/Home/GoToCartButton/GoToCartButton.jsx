import React from "react";
import "./gotocartbutton.css";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export const GoToCartButton = () => {
  const { totalPrice, items } = useSelector((state) => state.cart);
  return (
    totalPrice > 0 && (
      <Link to="/cart" className="cart__button">
        {totalPrice} ₽.
      </Link>
    )
  );
};
