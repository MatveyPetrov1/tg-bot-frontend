import React from "react";
import "./categories.css";
import { Category } from "./Category";

const categoriesArr = [
  "Шаурма",
  "Завертоны",
  "Кофе",
  "Горячие напитки",
  "Холодные напитки",
];

export const Categories = () => {
  const [currentCategory, setCurrentCategory] = React.useState(0);

  const onChangeCategory = (category) => {
    setCurrentCategory(category);
  };

  return (
    <div className="categories">
      <select>
        {categoriesArr.map((value, index) => (
          <Category
            key={value}
            value={value}
            index={index}
            currentCategory={currentCategory}
            onChangeCategory={onChangeCategory}
          />
        ))}
      </select>
    </div>
  );
};
