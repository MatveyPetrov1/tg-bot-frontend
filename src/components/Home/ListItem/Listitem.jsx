import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { plusItem, minusItem } from "../../../redux/slices/cartSlice";
import { Link } from "react-router-dom";
import "./listitem.css";
import { Sirop } from "./Sirop";

export const ListItem = ({
  title,
  price,
  imageUrl,
  composition,
  size,
  sugar,
}) => {
  const { items } = useSelector((state) => state.cart);

  const [sizeIndex, setSizeIndex] = React.useState(0);
  const [sizeValue, setSizeValue] = React.useState("");
  const [sugarIsActive, setSugarIsActive] = React.useState(false);
  const [siropIsActive, setSiropIsActive] = React.useState(false);
  const [firstSiropIsActive, setFirstSiropIsActive] = React.useState(false);
  const [secondSiropIsActive, setSecondSiropIsActive] = React.useState(false);
  const [thirdSiropIsActive, setThirdSiropIsActive] = React.useState(false);
  const [sugarCount, setIsSugarCount] = React.useState(-1);
  const [siropCount, setSiropCount] = React.useState({
    sirop1: 0,
    sirop2: 0,
    sirop3: 0,
  });
  const [siropValue, setSiropValue] = React.useState({
    sirop1: [],
    sirop2: [],
    sirop3: [],
  });
  const [compositionIsActive, setCompositionIsActive] = React.useState(false);

  const onCountSirop = () => {
    if (sizeIndex === 0) {
      return siropCount.sirop1;
    } else if (sizeIndex === 1) {
      return siropCount.sirop2;
    } else if (sizeIndex === 2) {
      return siropCount.sirop3;
    }
  };

  const onGetSiropValues = () => {
    if (sizeIndex === 0) {
      return siropValue.sirop1;
    } else if (sizeIndex === 1) {
      return siropValue.sirop2;
    } else if (sizeIndex === 2) {
      return siropValue.sirop3;
    }
  };

  const isFinded =
    items.length > 0
      ? items.filter(
          (obj) => obj.title === title && obj.sizeIndex === sizeIndex
        )
      : false;

  const count = isFinded && isFinded.reduce((sum, obj) => obj.count + sum, 0);

  const dispatch = useDispatch();

  const onClickPlus = () => {
    const product = {
      title,
      price: price[sizeIndex] + onCountSirop(),
      imageUrl,
      composition,
      sizeIndex,
      sizeValue,
      count: count ? count : 1,
      sugarCount: sugarCount + 1,
      siropValue: onGetSiropValues(),
    };
    dispatch(plusItem(product));
  };

  const onClickMinus = () => {
    const product = {
      title,
      sizeIndex,
      siropValue: onGetSiropValues(),
      sugarCount: sugarCount + 1,
    };

    dispatch(minusItem(product));
  };

  const onClickSize = (value, index) => {
    setSizeValue(value);
    setSizeIndex(index);
  };

  const onClickComposition = () => {
    setCompositionIsActive(!compositionIsActive);
  };

  const onClickToSugar = (i) => {
    if (i === sugarCount) {
      setIsSugarCount(-1);
    } else {
      setIsSugarCount(i);
    }
  };

  const onClickToSirop = () => {
    if (sizeIndex === 0) {
      setFirstSiropIsActive(true);
    } else if (sizeIndex === 1) {
      setSecondSiropIsActive(true);
    } else if (sizeIndex === 2) {
      setThirdSiropIsActive(true);
    }
  };

  const onClickToSelectSirop = (num, count, value) => {
    if (num === 1) {
      setSiropCount({ ...siropCount, sirop1: count * 40 });
      if (value) {
        setSiropValue({
          ...siropValue,
          sirop1: [...value],
        });
      }
    } else if (num === 2) {
      setSiropCount({ ...siropCount, sirop2: count * 40 });
      if (value) {
        setSiropValue({
          ...siropValue,
          sirop2: [...value],
        });
      }
    } else if (num === 3) {
      setSiropCount({ ...siropCount, sirop3: count * 40 });
      if (value) {
        setSiropValue({
          ...siropValue,
          sirop3: [...value],
        });
      }
    }
  };

  React.useEffect(() => {
    setSizeValue(`${size[sizeIndex]}`);
  }, [size, sizeIndex]);

  return (
    <div className="item">
      {size.map((value, index) => (
        <Sirop
          siropIsActive={siropIsActive}
          setSiropIsActive={setSiropIsActive}
          key={index}
          onClickToSelectSirop={onClickToSelectSirop}
          number={index + 1}
          firstSiropIsActive={firstSiropIsActive}
          secondSiropIsActive={secondSiropIsActive}
          thirdSiropIsActive={thirdSiropIsActive}
          setFirstSiropIsActive={setFirstSiropIsActive}
          setSecondSiropIsActive={setSecondSiropIsActive}
          setThirdSiropIsActive={setThirdSiropIsActive}
        />
      ))}
      <div className="wrapper">
        <div className="image__wrapper">
          <img src={imageUrl} alt="item_image" />
          <div>
            {isFinded.length > 0 && (
              <div className="count__block">{count + " шт."}</div>
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
        {sugar && (
          <div className="sugarsirop__block">
            <h3
              className={
                sugarIsActive
                  ? "sugar__block__title active"
                  : "sugar__block__title"
              }
              onClick={() => setSugarIsActive(!sugarIsActive)}
            >
              Сахар
            </h3>
            <h3
              className={
                siropIsActive
                  ? "sugar__block__title active"
                  : "sugar__block__title"
              }
              onClick={onClickToSirop}
            >
              Сироп
            </h3>
          </div>
        )}
        {sugar && sugarIsActive && (
          <>
            <div className="size__block sugar__choice">
              {sugar.map((str, index) => (
                <Link
                  to="/"
                  key={index}
                  className={
                    sugarCount === index
                      ? `active triple__size__${index + 1}`
                      : `triple__size__${index + 1}`
                  }
                  onClick={() => onClickToSugar(index)}
                >
                  {str}
                </Link>
              ))}
            </div>
          </>
        )}

        <div className="bottom">
          <div className={isFinded.length > 0 ? "price active" : "price"}>
            {isFinded.length > 0 && (
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
              {price[sizeIndex] + onCountSirop()}₽
              <svg
                fill={isFinded.length > 0 ? "#fff" : "#000"}
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
