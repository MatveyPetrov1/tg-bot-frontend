import React from "react";
import "./sirop.css";
import "./listitem.css";

const siropArr = [
  "Карамель 🍭",
  "Ваниль 🍦",
  "Кокос 🥥",
  "Лесной орех 🌰",
  "Лаванда 🪻",
  "Амаранта 🌺",
  "Миндаль 🥔",
  "Шоколад 🍫",
  "Малиновый 🍓",
  "Бабл-гам 🫧",
  "Жареный орех 🌰",
  "Белый шоколад 🤍",
  "Айриш крим 🍾",
  "Шоколадные печеньки 🍪",
  "Макадамия 🌰",
  "Солёная карамель 🍭",
  "Попкорн 🍿",
  "Фисташка 🥜",
  "Мята 🌿",
  "Манго 🥭",
  "Мёд 🍯",
  "Клубника 🍓",
];

export const Sirop = ({
  setSiropIsActive,
  onChangeFirstSirop,
  onChangeSecondSirop,
  onChangeThirdSirop,
  siropArray,
  siropValue,
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
    if (onChangeFirstSirop) {
      setSelectors({ ...selectors, firstSiropSelect: [...siropArray] });
      setValues({ ...values, firstSirop: [...siropValue] });
    } else if (onChangeSecondSirop) {
      setSelectors({ ...selectors, secondSiropSelect: [...siropArray] });
      setValues({ ...values, secondSirop: [...siropValue] });
    } else if (onChangeThirdSirop) {
      setSelectors({ ...selectors, thirdSiropSelect: [...siropArray] });
      setValues({ ...values, thirdSirop: [...siropValue] });
    }
  }, []);

  React.useEffect(() => {
    if (onChangeFirstSirop) {
      onChangeFirstSirop(
        [...selectors.firstSiropSelect],
        [...values.firstSirop]
      );
    } else if (onChangeSecondSirop) {
      onChangeSecondSirop(
        [...selectors.secondSiropSelect],
        [...values.secondSirop]
      );
    } else if (onChangeThirdSirop) {
      onChangeThirdSirop(
        [...selectors.thirdSiropSelect],
        [...values.thirdSirop]
      );
    }
  }, [selectors, values]);

  // Plus sirop

  const plusSirop = (value, i) => {
    if (onChangeFirstSirop) {
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
    } else if (onChangeSecondSirop) {
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
    } else if (onChangeThirdSirop) {
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

  // Minus sirop

  const minusSirop = (i, value) => {
    if (onChangeFirstSirop) {
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
    } else if (onChangeSecondSirop) {
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
    } else if (onChangeThirdSirop) {
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
  };

  //Get classes

  const getPriceClass = (index) => {
    if (onChangeFirstSirop) {
      return selectors.firstSiropSelect.find((num) => num === index + 1)
        ? "price active"
        : "price";
    } else if (onChangeSecondSirop) {
      return selectors.secondSiropSelect.find((num) => num === index + 1)
        ? "price active"
        : "price";
    } else if (onChangeThirdSirop) {
      return selectors.thirdSiropSelect.find((num) => num === index + 1)
        ? "price active"
        : "price";
    }
  };

  const getPlusClass = (index) => {
    if (onChangeFirstSirop) {
      return selectors.firstSiropSelect.find((num) => num === index + 1)
        ? "#fff"
        : "#000";
    } else if (onChangeSecondSirop) {
      return selectors.secondSiropSelect.find((num) => num === index + 1)
        ? "#fff"
        : "#000";
    } else if (onChangeThirdSirop) {
      return selectors.thirdSiropSelect.find((num) => num === index + 1)
        ? "#fff"
        : "#000";
    }
  };

  const getCurrentSirop = (index) => {
    if (onChangeFirstSirop) {
      return selectors.firstSiropSelect.find((num) => num === index + 1)
        ? true
        : false;
    } else if (onChangeSecondSirop) {
      return selectors.secondSiropSelect.find((num) => num === index + 1)
        ? true
        : false;
    } else if (onChangeThirdSirop) {
      return selectors.thirdSiropSelect.find((num) => num === index + 1)
        ? true
        : false;
    }
  };

  return (
    <div onClick={() => setSiropIsActive(false)} className="sirop__fullscreen">
      <div className="container">
        <div className="sirop__block" onClick={(e) => e.stopPropagation()}>
          {siropArr.map((str, index) => (
            <div className="sirop__item" key={index}>
              <div>
                <h3>
                  {str}
                  {getCurrentSirop(index) ? "✅" : ""}
                </h3>
              </div>
              <div className={getPriceClass(index)}>
                {onChangeFirstSirop
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
                  : onChangeSecondSirop
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
                  : onChangeThirdSirop
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
