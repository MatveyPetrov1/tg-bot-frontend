import React from "react";
import "./listitem.css";
import { useSelector, useDispatch } from "react-redux";
import { plusItem, minusItem } from "../../../redux/slices/cartSlice";
import { Link } from "react-router-dom";

export const ListItem = ({ title, price, imageUrl, composition, size }) => {
  const { items } = useSelector((state) => state.cart);

  const [sizeIndex, setSizeIndex] = React.useState(0);
  const [sizeValue, setSizeValue] = React.useState("");

  const isFinded =
    items.length > 0
      ? items.find((obj) => obj.title === title && obj.sizeIndex === sizeIndex)
      : false;

  const dispatch = useDispatch();

  const onClickPlus = () => {
    const product = {
      title,
      price: price[sizeIndex],
      imageUrl,
      composition,
      sizeIndex,
      sizeValue,
      count: 1,
      size,
    };
    dispatch(plusItem(product));
  };

  const onClickMinus = () => {
    dispatch(minusItem({ title, sizeIndex }));
  };

  const onClickSize = (value, index) => {
    setSizeValue(value);
    setSizeIndex(index);
  };

  React.useEffect(() => {
    setSizeValue(`${size[sizeIndex]}`);
  }, [size, sizeIndex]);

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
                className={sizeIndex === index ? "active" : ""}
                key={str}
                onClick={() => onClickSize(str, index)}
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
              {price[sizeIndex]} руб. +
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
