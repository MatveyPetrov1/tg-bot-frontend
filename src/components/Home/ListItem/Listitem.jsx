import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { plusItem, minusItem } from "../../../redux/slices/cartSlice";
import { Link } from "react-router-dom";
import "./listitem.css";
import { Sirop } from "./Sirop";
import "../../Cart/CartItem/cartitem.css";

export const ListItem = ({
  title,
  price,
  imageUrl,
  composition,
  size,
  sugar,
  onClickToImage,
}) => {
  const { items } = useSelector((state) => state.cart);

  const [sizeIndex, setSizeIndex] = React.useState(0);
  const [sizeValue, setSizeValue] = React.useState("");
  const [sugarIsActive, setSugarIsActive] = React.useState(false);
  const [siropIsActive, setSiropIsActive] = React.useState(false);
  const [sugarCount, setSugarCount] = React.useState(-1);
  const [imageIsLoaded, setImageIsLoaded] = React.useState(false);

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
  const [siropArr, setSiropArr] = React.useState({
    sirop1: [],
    sirop2: [],
    sirop3: [],
  });
  const [compositionIsActive, setCompositionIsActive] = React.useState(false);

  const checkCurrentSirop = () => {
    if (sizeIndex === 0) {
      return siropValue.sirop1;
    } else if (sizeIndex === 1) {
      return siropValue.sirop2;
    } else if (sizeIndex === 2) {
      return siropValue.sirop3;
    }
  };

  const checkCurrentPrice = () => {
    if (sizeIndex === 0) {
      return siropCount.sirop1;
    } else if (sizeIndex === 1) {
      return siropCount.sirop2;
    } else if (sizeIndex === 2) {
      return siropCount.sirop3;
    }
  };

  const isFinded =
    items.length > 0 &&
    items.filter((obj) => {
      return obj.title === title && obj.sizeIndex === sizeIndex;
    });

  const count = isFinded && isFinded.reduce((sum, obj) => obj.count + sum, 0);
  const lastSiropValue =
    isFinded.length > 0 &&
    isFinded
      .filter((obj) => obj.siropValueObj)
      .slice(-1)
      .map((obj) => obj.siropValueObj);

  const lastSiropIndex =
    isFinded.length > 0 &&
    isFinded
      .filter((obj) => obj.siropArrObj)
      .slice(-1)
      .map((obj) => obj.siropArrObj);
  const lastSiropCount =
    isFinded.length > 0 &&
    isFinded
      .filter((obj) => obj.siropCountObj)
      .slice(-1)
      .map((obj) => obj.siropCountObj);

  React.useEffect(() => {
    if (
      lastSiropValue.length > 0 &&
      lastSiropIndex.length > 0 &&
      lastSiropCount.length > 0
    ) {
      setSiropValue(...lastSiropValue);
      setSiropArr(...lastSiropIndex);
      setSiropCount(...lastSiropCount);
    }
  }, []);

  const dispatch = useDispatch();

  // Plus item to cart

  const onClickPlus = () => {
    const product = {
      title,
      price: price[sizeIndex] + checkCurrentPrice() * 40,
      imageUrl,
      composition,
      sizeIndex,
      sizeValue,
      count: 1,
      sugarCount: sugar && sugarCount + 1,
      siropArray: sugar ? checkCurrentSirop() : "",
      siropCountObj: sugar && siropCount,
      siropValueObj: sugar && siropValue,
      siropArrObj: sugar && siropArr,
    };
    dispatch(plusItem(product));
  };

  const onClickMinus = () => {
    const product = {
      title,
      sizeIndex,
      sugarCount: sugar ? sugarCount + 1 : "",
      siropArray: sugar ? checkCurrentSirop() : "",
    };

    dispatch(minusItem(product));
  };

  const onClickSize = (value, index) => {
    setSizeValue(value);
    setSizeIndex(index);
    setSugarIsActive(false);
  };

  // Composition

  const onClickComposition = () => {
    setCompositionIsActive(!compositionIsActive);
  };

  // Sugar

  const onClickToSugar = (i) => {
    if (i === sugarCount) {
      setSugarCount(-1);
    } else {
      setSugarCount(i);
    }
  };

  // Sirop funtions

  const onChangeFirstSirop = (numArr, valArr) => {
    setSiropCount({
      ...siropCount,
      sirop1: numArr.length,
    });
    setSiropValue({ ...siropValue, sirop1: [...valArr] });
    setSiropArr({ ...siropArr, sirop1: [...numArr] });
  };

  const onChangeSecondSirop = (numArr, valArr) => {
    setSiropCount({
      ...siropCount,
      sirop2: numArr.length,
    });
    setSiropValue({ ...siropValue, sirop2: [...valArr] });
    setSiropArr({ ...siropArr, sirop2: [...numArr] });
  };

  const onChangeThirdSirop = (numArr, valArr) => {
    setSiropCount({
      ...siropCount,
      sirop3: numArr.length,
    });
    setSiropValue({ ...siropValue, sirop3: [...valArr] });
    setSiropArr({ ...siropArr, sirop3: [...numArr] });
  };

  React.useEffect(() => {
    setSizeValue(`${size[sizeIndex]}`);
  }, [size, sizeIndex]);

  return (
    <div className="item">
      {size.map(() => {
        return sizeIndex === 0 && siropIsActive ? (
          <Sirop
            setSiropIsActive={setSiropIsActive}
            onChangeFirstSirop={onChangeFirstSirop}
            siropArray={siropArr.sirop1}
            siropValue={siropValue.sirop1}
          />
        ) : sizeIndex === 1 && siropIsActive ? (
          <Sirop
            setSiropIsActive={setSiropIsActive}
            onChangeSecondSirop={onChangeSecondSirop}
            siropArray={siropArr.sirop2}
            siropValue={siropValue.sirop2}
          />
        ) : sizeIndex === 2 && siropIsActive ? (
          <Sirop
            setSiropIsActive={setSiropIsActive}
            onChangeThirdSirop={onChangeThirdSirop}
            siropArray={siropArr.sirop3}
            siropValue={siropValue.sirop3}
          />
        ) : (
          ""
        );
      })}
      <div className="wrapper">
        <div className="top">
          <div
            className="image__wrapper"
            onClick={() => {
              onClickToImage(imageUrl);
            }}
          >
            <div className="loader"></div>
            <img
              src={imageUrl}
              alt="item_image"
              className={imageIsLoaded ? "active" : ""}
              onLoad={() => setImageIsLoaded(true)}
            />
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
              <Link
                className={"active"}
                onClick={() => onClickSize(size[0], 0)}
              >
                {size[0]}
              </Link>
            </div>
          )}
          {compositionIsActive && (
            <h6 className="composition">{composition}</h6>
          )}
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
                onClick={() => setSiropIsActive(true)}
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

          <>
            {sizeIndex === 0 && siropValue.sirop1.length > 0 ? (
              <div className="value__block">
                <h1>Сиропы:</h1>
                {siropValue.sirop1.map((val) => (
                  <h3>{val}</h3>
                ))}
              </div>
            ) : sizeIndex === 1 && siropValue.sirop2.length > 0 ? (
              <div className="value__block">
                <h1>Сиропы:</h1>
                {siropValue.sirop2.map((val) => (
                  <h3>{val}</h3>
                ))}
              </div>
            ) : sizeIndex === 2 && siropValue.sirop3.length > 0 ? (
              <div className="value__block">
                <h1>Сиропы:</h1>
                {siropValue.sirop3.map((val) => (
                  <h3>{val}</h3>
                ))}
              </div>
            ) : (
              false
            )}
          </>
        </div>

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
              {price[sizeIndex] + checkCurrentPrice() * 40}₽
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
