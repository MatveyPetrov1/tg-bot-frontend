import React from "react";
import "./listitem.css";
import { useSelector, useDispatch } from "react-redux";
import { plusItem, minusItem } from "../../../redux/slices/cartSlice";
import { Link } from "react-router-dom";

export const ListItem = ({ title, price, imageUrl, composition, size }) => {
  const { items } = useSelector((state) => state.cart);

  const [sizeIndex, setSizeIndex] = React.useState(0);
  const [sizeValue, setSizeValue] = React.useState("");
  const [compositionIsActive, setCompositionIsActive] = React.useState(false);

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

  const onClickComposition = () => {
    setCompositionIsActive(!compositionIsActive);
  };

  React.useEffect(() => {
    setSizeValue(`${size[sizeIndex]}`);
  }, [size, sizeIndex]);

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
        {size.length === 1 && composition && (
          <div className="composition__block">
            <button
              onClick={onClickComposition}
              className={compositionIsActive ? "active" : ""}
            >
              Состав
            </button>
            <Link className={"active"} onClick={() => onClickSize(size[0], 0)}>
              {size[0]}
            </Link>
          </div>
        )}
        {compositionIsActive && <h6 className="composition">{composition}</h6>}
        {size.length === 1 && !composition ? (
          <div className="size__block">
            <Link className="active" onClick={() => onClickSize(size[0], 0)}>
              {size[0]}
            </Link>
          </div>
        ) : size.length === 2 ? (
          <div className="size__block">
            <Link
              className={
                sizeIndex === 0 ? "active double__size__1" : "double__size__1"
              }
              onClick={() => onClickSize(size[0], 0)}
            >
              {size[0]}
            </Link>
            <Link
              className={
                sizeIndex === 1 ? "active double__size__2" : "double__size__2"
              }
              onClick={() => onClickSize(size[1], 1)}
            >
              {size[1]}
            </Link>
          </div>
        ) : size.length === 3 ? (
          <div className="size__block">
            <Link
              className={
                sizeIndex === 0 ? "active triple__size__1" : "triple__size__1"
              }
              onClick={() => onClickSize(size[0], 0)}
            >
              {size[0]}
            </Link>
            <Link
              className={
                sizeIndex === 1 ? "active triple__size__2" : "triple__size__2"
              }
              onClick={() => onClickSize(size[1], 1)}
            >
              {size[1]}
            </Link>
            <Link
              className={
                sizeIndex === 2 ? "active triple__size__3" : "triple__size__3"
              }
              onClick={() => onClickSize(size[2], 2)}
            >
              {size[2]}
            </Link>
          </div>
        ) : (
          ""
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
              {price[sizeIndex]} руб.
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
