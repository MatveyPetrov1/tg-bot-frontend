import React from "react";
import "../../Home/ListItem/listitem.css";
import { useDispatch, useSelector } from "react-redux";
import { plusItem, minusItem } from "../../../redux/slices/cartSlice";

export const CartItem = ({
  title,
  price,
  imageUrl,
  sizeIndex,
  sizeValue,
  composition,
  size,
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
    };
    dispatch(plusItem(product));
  };

  const onClickMinus = () => {
    dispatch(minusItem({ title, sizeIndex }));
  };

  return (
    <div className="item">
      <div className="wrapper">
        <div className="image__wrapper">
          <img src={imageUrl} alt="item_image" />
        </div>
        <h3 className="title">{title}</h3>
        {sizeValue && <div className="size__block">{sizeValue}</div>}
        <div className="bottom">
          <div className="total__count">
            {isFinded.count > 0 && isFinded.count + " шт."}
          </div>

          <div className={isFinded.count > 0 ? "price active" : "price"}>
            {isFinded.count > 0 && (
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
