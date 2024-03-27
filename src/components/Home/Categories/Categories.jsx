import React from "react";
import "./categories.css";

const categoriesArr = [
  "Шаурма",
  "Завертоны",
  "Кофе",
  "Горячие напитки",
  "Холодные напитки",
];

export const Categories = () => {
  return (
    <div className="categories">
      <select>
        {categoriesArr.map((value) => (
          <option className="categories__item" key={value}>
            {value}
          </option>
        ))}
      </select>
    </div>
  );
};
