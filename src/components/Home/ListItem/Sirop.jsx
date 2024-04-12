import React from "react";
import "./sirop.css";
import "./listitem.css";

const siropArr = [
  "Карамель",
  "Ваниль",
  "Кокос",
  "Лесной орех",
  "Лаванда",
  "Амаранта",
  "Миндаль",
  "Шоколад",
  "Малиновый",
  "Бабл-гам",
  "Жареный орех",
  "Белый шоколад",
  "Айриш крим",
  "Шоколадные печеньки",
  "Макадамия",
  "Солёная карамель",
  "Попкорн",
  "Фисташка",
  "Мята",
  "Манго",
  "Мёд",
  "Клубника",
];

export const Sirop = ({
  onClickToSelectSirop,
  number,
  firstSiropIsActive,
  secondSiropIsActive,
  thirdSiropIsActive,
  setFirstSiropIsActive,
  setSecondSiropIsActive,
  setThirdSiropIsActive,
}) => {
  const [selectors, setSelectors] = React.useState({
    firstSiropSelect: [],
    secondSiropSelect: [],
    thirdSiropSelect: [],
  });
  const [values, setValues] = React.useState({
    firstSirop: [],
    secondSirop: [],
    thirdSirop: [],
  });

  React.useEffect(() => {
    if (number === 1) {
      onClickToSelectSirop(
        1,
        selectors.firstSiropSelect.length,
        values.firstSirop
      );
    } else if (number === 2) {
      onClickToSelectSirop(
        2,
        selectors.secondSiropSelect.length,
        values.secondSirop
      );
    } else if (number === 3) {
      onClickToSelectSirop(
        3,
        selectors.thirdSiropSelect.length,
        values.thirdSirop
      );
    }
  }, [selectors, values, number, onClickToSelectSirop]);

  const plusSirop = (value, i) => {
    if (number === 1) {
      const findItem = values.firstSirop.find((val) => val === value);
      if (findItem) {
        return;
      } else {
        setSelectors({
          ...selectors,
          firstSiropSelect: [...selectors.firstSiropSelect, i + 1],
        });
        setValues({
          ...values,
          firstSirop: [...values.firstSirop, value],
        });
      }
    } else if (number === 2) {
      const findItem = values.secondSirop.find((val) => val === value);
      if (findItem) {
        return;
      } else {
        setSelectors({
          ...selectors,
          secondSiropSelect: [...selectors.secondSiropSelect, i + 1],
        });
        setValues({
          ...values,
          secondSirop: [...values.secondSirop, value],
        });
      }
    } else if (number === 3) {
      const findItem = values.thirdSirop.find((val) => val === value);
      if (findItem) {
        return;
      } else {
        setSelectors({
          ...selectors,
          thirdSiropSelect: [...selectors.thirdSiropSelect, i + 1],
        });
        setValues({
          ...values,
          thirdSirop: [...values.thirdSirop, value],
        });
      }
    }
  };

  const minusSirop = (i, value) => {
    if (number === 1) {
      setSelectors({
        ...selectors,
        firstSiropSelect: selectors.firstSiropSelect.filter(
          (num) => num !== i + 1
        ),
      });
      setValues({
        ...values,
        firstSirop: values.firstSirop.filter((val) => val !== value),
      });
    } else if (number === 2) {
      setSelectors({
        ...selectors,
        secondSiropSelect: selectors.secondSiropSelect.filter(
          (num) => num !== i + 1
        ),
      });
      setValues({
        ...values,
        secondSirop: values.secondSirop.filter((val) => val !== value),
      });
    } else if (number === 3) {
      setSelectors({
        ...selectors,
        thirdSiropSelect: selectors.thirdSiropSelect.filter(
          (num) => num !== i + 1
        ),
      });
      setValues({
        ...values,
        thirdSirop: values.thirdSirop.filter((val) => val !== value),
      });
    }
    onClickToSelectSirop(number, 0);
  };

  const getPriceClass = React.useCallback(
    (index) => {
      if (number === 1) {
        return selectors.firstSiropSelect.find((num) => num === index + 1)
          ? "price active"
          : "price";
      } else if (number === 2) {
        return selectors.secondSiropSelect.find((num) => num === index + 1)
          ? "price active"
          : "price";
      } else if (number === 3) {
        return selectors.thirdSiropSelect.find((num) => num === index + 1)
          ? "price active"
          : "price";
      }
    },
    [selectors, number]
  );

  const getPlusClass = React.useCallback(
    (index) => {
      if (number === 1) {
        return selectors.firstSiropSelect.find((num) => num === index + 1)
          ? "#fff"
          : "#000";
      } else if (number === 2) {
        return selectors.secondSiropSelect.find((num) => num === index + 1)
          ? "#fff"
          : "#000";
      } else if (number === 3) {
        return selectors.thirdSiropSelect.find((num) => num === index + 1)
          ? "#fff"
          : "#000";
      }
    },
    [selectors, number]
  );

  const getCurrentSiropPage = () => {
    if (number === 1) {
      return firstSiropIsActive
        ? "sirop__fullscreen active"
        : "sirop__fullscreen";
    } else if (number === 2) {
      return secondSiropIsActive
        ? "sirop__fullscreen active"
        : "sirop__fullscreen";
    } else if (number === 3) {
      return thirdSiropIsActive
        ? "sirop__fullscreen active"
        : "sirop__fullscreen";
    }
  };

  const onClosePage = () => {
    setFirstSiropIsActive(false);
    setSecondSiropIsActive(false);
    setThirdSiropIsActive(false);
  };

  return (
    <div onClick={onClosePage} className={getCurrentSiropPage()}>
      <div className="container">
        <div className="sirop__block" onClick={(e) => e.stopPropagation()}>
          {siropArr.map((str, index) => (
            <div className="sirop__item" key={index}>
              <h3>{str}</h3>
              <div className={getPriceClass(index)}>
                {number === 1
                  ? selectors.firstSiropSelect.find(
                      (num) => num === index + 1
                    ) && (
                      <svg
                        fill="#fff"
                        width="15px"
                        height="15px"
                        viewBox="0 0 32 32"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        className="price__minus"
                        onClick={() => minusSirop(index, str)}
                      >
                        <title>minus</title>
                        <path d="M30 15.25h-28c-0.414 0-0.75 0.336-0.75 0.75s0.336 0.75 0.75 0.75v0h28c0.414 0 0.75-0.336 0.75-0.75s-0.336-0.75-0.75-0.75v0z"></path>
                      </svg>
                    )
                  : number === 2
                  ? selectors.secondSiropSelect.find(
                      (num) => num === index + 1
                    ) && (
                      <svg
                        fill="#fff"
                        width="15px"
                        height="15px"
                        viewBox="0 0 32 32"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        className="price__minus"
                        onClick={() => minusSirop(index)}
                      >
                        <title>minus</title>
                        <path d="M30 15.25h-28c-0.414 0-0.75 0.336-0.75 0.75s0.336 0.75 0.75 0.75v0h28c0.414 0 0.75-0.336 0.75-0.75s-0.336-0.75-0.75-0.75v0z"></path>
                      </svg>
                    )
                  : number === 3
                  ? selectors.thirdSiropSelect.find(
                      (num) => num === index + 1
                    ) && (
                      <svg
                        fill="#fff"
                        width="15px"
                        height="15px"
                        viewBox="0 0 32 32"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        className="price__minus"
                        onClick={() => minusSirop(index)}
                      >
                        <title>minus</title>
                        <path d="M30 15.25h-28c-0.414 0-0.75 0.336-0.75 0.75s0.336 0.75 0.75 0.75v0h28c0.414 0 0.75-0.336 0.75-0.75s-0.336-0.75-0.75-0.75v0z"></path>
                      </svg>
                    )
                  : ""}

                <div
                  className="price__plus"
                  onClick={() => {
                    plusSirop(str, index);
                  }}
                >
                  40 р
                  <svg
                    fill={getPlusClass(index)}
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
          ))}
        </div>
      </div>
    </div>
  );
};
