import React from "react";
import "./categories.css";
import { setCategory } from "../../../redux/slices/filetrSlice";
import { useDispatch } from "react-redux";

const categoriesArr = [
  "Все",
  "Шаурма",
  "Завертоны",
  "Кофе",
  "Холодный кофе",
  "Горячие напитки",
  "Фирменные лимонады",
  "Лимонады",
  "Смузи",
  "Молочные коктейли",
];

export const Categories = () => {
  const dispatch = useDispatch();

  const onChangeCategory = (e) => {
    const index = categoriesArr.indexOf(e.target.value);
    dispatch(setCategory(index));
  };

  return (
    <div className="categories">
      <select onChange={(e) => onChangeCategory(e)}>
        {categoriesArr.map((value) => (
          <option className="categories__item" key={value}>
            {value}
          </option>
        ))}
      </select>
    </div>
  );
};
