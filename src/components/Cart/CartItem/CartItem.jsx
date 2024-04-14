import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { plusItem, minusItem } from "../../../redux/slices/cartSlice";
import "../../Home/ListItem/listitem.css";
import "./cartitem.css";
import { Link } from "react-router-dom";

export const CartItem = ({
  title,
  price,
  imageUrl,
  sizeIndex,
  sizeValue,
  composition,
  sugarCount,
  siropArray,
}) => {
  const dispatch = useDispatch();
  const { items } = useSelector((state) => state.cart);

  const isFinded =
    items.length > 0
      ? items.find((obj) => obj.title === title && obj.sizeIndex === sizeIndex)
      : false;

  const onClickPlus = () => {
    const product = {
      title,
      price,
      imageUrl,
      composition,
      sizeIndex,
      sizeValue,
      count: 1,
      sugarCount,
      siropArray,
    };
    dispatch(plusItem(product));
  };

  const onClickMinus = () => {
    dispatch(minusItem({ title, sizeIndex, siropArray, sugarCount }));
  };

  return (
    <div className="item">
      <div className="wrapper">
        <div className="image__wrapper">
          <img src={imageUrl} alt="item_image" />
          <div>
            {isFinded && isFinded.count > 0 && (
              <div className="count__block">{isFinded.count + " шт."}</div>
            )}
          </div>
        </div>
        <h3 className="title">{title}</h3>
        {sizeValue && (
          <div className="size__block ">
            <Link className="active">{sizeValue}</Link>
          </div>
        )}
        {siropArray.length > 0 && (
          <div className="value__block">
            <h1>Сиропы:</h1>
            {siropArray.map((value) => (
              <h3>{value}</h3>
            ))}
          </div>
        )}
        {sugarCount !== 0 && (
          <div className="value__block">
            <h1>Сахар</h1>
            <h3>{sugarCount} шт.</h3>
          </div>
        )}
        <div className="bottom">
          <div
            className={
              isFinded && isFinded.count > 0 ? "price active" : "price"
            }
          >
            {isFinded && isFinded.count > 0 && (
              <svg
                fill="#fff"
                width="15px"
                height="15px"
                viewBox="0 0 32 32"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                onClick={onClickMinus}
                className="price__minus"
              >
                <title>minus</title>
                <path d="M30 15.25h-28c-0.414 0-0.75 0.336-0.75 0.75s0.336 0.75 0.75 0.75v0h28c0.414 0 0.75-0.336 0.75-0.75s-0.336-0.75-0.75-0.75v0z"></path>
              </svg>
            )}

            <div className="price__plus" onClick={onClickPlus}>
              {price} ₽
              <svg
                fill={isFinded && isFinded.count > 0 ? "#fff" : "#000"}
                height="15px"
                width="15px"
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 455 455"
                className="price__plus__img"
              >
                <polygon
                  points="455,212.5 242.5,212.5 242.5,0 212.5,0 212.5,212.5 0,212.5 0,242.5 212.5,242.5 212.5,455 242.5,455 242.5,242.5 
	455,242.5 "
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
