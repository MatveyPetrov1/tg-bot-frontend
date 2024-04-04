import React from "react";
import "./listitem.css";
import { useSelector, useDispatch } from "react-redux";
import { plusItem, minusItem } from "../../../redux/slices/cartSlice";
import { Link } from "react-router-dom";

export const ListItem = ({ title, price, imageUrl, composition, size }) => {
  const { items } = useSelector((state) => state.cart);

  const [sizeIsActive, setSizeIsActive] = React.useState(0);

  const isFinded =
    items.length > 0
      ? items.find(
          (obj) => obj.title === title && obj.sizeIsActive === sizeIsActive
        )
      : false;

  const dispatch = useDispatch();

  const onClickPlus = () => {
    const product = {
      title,
      price: price[sizeIsActive],
      imageUrl,
      composition,
      sizeIsActive,
      count: 1,
    };
    dispatch(plusItem(product));
  };

  const onClickMinus = () => {
    dispatch(minusItem({ title, sizeIsActive }));
  };

  const onClickSize = (i) => {
    setSizeIsActive(i);
  };

  return (
    <div className="item">
      <div className="wrapper">
        <div className="image__wrapper">
          <img src={imageUrl} alt="item_image" />
        </div>
        <h3 className="title">{title}</h3>
        <h6 className="composition">{composition}</h6>
        {size && (
          <div className="size__block">
            {size.map((str, index) => (
              <Link
                className={sizeIsActive === index ? "active" : ""}
                key={str}
                onClick={() => onClickSize(index)}
              >
                {str}
              </Link>
            ))}
          </div>
        )}
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
              {price[sizeIsActive]} руб. +
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
