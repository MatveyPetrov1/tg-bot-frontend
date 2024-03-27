import React from "react";
import { ListItem } from "../../Home/ListItem/Listitem";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { BuyButton } from "../../Form/BuyButton";
import { NotFound } from "../NotFound/NotFound";
import "./cartlist.css";

export const CartList = () => {
  const { items } = useSelector((state) => state.cart);
  return items.length > 0 ? (
    <>
      <div>
        <BuyButton text="Заказать на" />
        <h2 className="cartlist__title">
          Проверьте правильность вашей корзины 😋
        </h2>
        {items.map((obj) => (
          <ListItem {...obj} />
        ))}
        <Link className="cartlist__button" to="/">
          Вернуться на главную
        </Link>
      </div>
    </>
  ) : (
    <NotFound />
  );
};
