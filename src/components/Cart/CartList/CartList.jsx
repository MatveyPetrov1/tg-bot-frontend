import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { BuyButton } from "../BuyButton/BuyButton";
import { NotFound } from "../NotFound/NotFound";
import { CartItem } from "../CartItem/CartItem";
import "./cartlist.css";
import "../../Home/ItemList/itemlist.css";
import { deleteAllItems } from "../../../redux/slices/cartSlice";

export const CartList = () => {
  const { items } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const onClickDeleteAllItems = () => {
    dispatch(deleteAllItems());
  };

  return items.length > 0 ? (
    <>
      <div>
        <BuyButton text="Заказать на" />
        <h2 className="cartlist__title">Ваша корзина 🗑️</h2>
        <div className="itemlist">
          {items.map((obj) => (
            <CartItem {...obj} />
          ))}
        </div>
        <div className="cartlist__button__wrapper">
          <Link
            to="/cart"
            className="cartlist__button"
            onClick={onClickDeleteAllItems}
          >
            Очистить корзину 🗑️
          </Link>
        </div>
        <div className="cartlist__button__wrapper">
          <Link to="/" className="cartlist__button">
            Вернуться на главную 👈
          </Link>
        </div>
      </div>
    </>
  ) : (
    <NotFound />
  );
};
