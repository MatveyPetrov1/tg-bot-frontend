import React from "react";
import "./cartlist.css";
import { useSelector } from "react-redux";
import { Item } from "../Item/Item";
import { Link } from "react-router-dom";

export const CartList = () => {
  const { items } = useSelector((state) => state.cart);
  return items.length > 0 ? (
    <>
      <div>
        <h2 className="cartlist__title">
          Проверьте правильность вашей корзины 😋
        </h2>
        {items.map((obj) => (
          <Item {...obj} />
        ))}
        <Link className="cartlist__button" to="/">
          Вернуться на главную
        </Link>
      </div>
    </>
  ) : (
    <div className="cartlist__notfound__wrapper">
      <h2>Ваша корзина пуста</h2>
      <Link to="/">Вернуться на главную</Link>
    </div>
  );
};
