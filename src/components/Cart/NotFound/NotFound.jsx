import React from "react";
import { Link } from "react-router-dom";
import "./notfound.css";
import "../CartList/cartlist.css";

export const NotFound = () => {
  return (
    <div className="fullscreen__wrapper">
      <div className="container">
        <div className="cartlist__notfound__wrapper">
          <h2>Ваша корзина пуста 😧</h2>
          <h2 className="cartlist__notfound__forbuy">За покупками? 👇</h2>
          <div className="cartlist__button__wrapper">
            <Link className="cartlist__button notfound" to="/">
              Вернуться на главную 👈
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
