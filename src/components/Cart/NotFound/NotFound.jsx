import React from "react";
import { Link } from "react-router-dom";
import "./notfound.css";

export const NotFound = () => {
  return (
    <div className="cartlist__notfound__wrapper">
      <h2>Ваша корзина пуста</h2>
      <Link to="/">Вернуться на главную</Link>
    </div>
  );
};
