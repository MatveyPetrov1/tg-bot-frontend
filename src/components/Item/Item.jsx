import React from "react";
import "./item.css";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { plusItem, minusItem } from "../../redux/slices/cartSlice";

export const Item = ({ title, price, imageUrl, composition }) => {
  const { items } = useSelector((state) => state.cart);
  const isFinded =
    items.length > 0 ? items.find((obj) => obj.title === title) : false;

  const dispatch = useDispatch();

  const onClickPlus = () => {
    const product = {
      title,
      price,
      imageUrl,
      composition,
      count: 1,
    };
    dispatch(plusItem(product));
  };

  const onClickMinus = () => {
    dispatch(minusItem({ title }));
  };

  return (
    <div className="item">
      <div className="wrapper">
        <div className="image__wrapper">
          <img src={imageUrl} alt="item_image" />
        </div>
        <h3 className="title">{title}</h3>
        <h6 className="composition">{composition}</h6>
        <div className="bottom">
          <div className="total__count">
            {isFinded && isFinded.count > 0 && isFinded.count + " шт."}
          </div>
          <div
            className={
              isFinded && isFinded.count > 0 ? "price active" : "price"
            }
          >
            {isFinded && isFinded.count > 0 && (
              <div className="price__minus" onClick={onClickMinus}>
                -{" "}
              </div>
            )}
            <div className="price__plus" onClick={onClickPlus}>
              {price} руб. +
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
