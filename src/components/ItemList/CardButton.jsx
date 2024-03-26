import React from "react";
import "./itemlist.css";
import { useSelector } from "react-redux";

export const CardButton = () => {
  const { totalPrice } = useSelector((state) => state.cart);
  return (
    totalPrice > 0 && (
      <div className="card__button">Сделать заказ на {totalPrice} р.</div>
    )
  );
};
