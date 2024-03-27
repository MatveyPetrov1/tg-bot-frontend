import React from "react";
import "./itemlist.css";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export const CardButton = () => {
  const { totalPrice } = useSelector((state) => state.cart);
  return (
    totalPrice > 0 && (
      <Link to="/cart" className="card__button">
        {totalPrice} ₽.
      </Link>
    )
  );
};
