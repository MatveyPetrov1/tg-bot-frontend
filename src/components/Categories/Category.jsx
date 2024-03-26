import React from "react";
import "./categories.css";

export const Category = ({
  value,
  index,
  currentCategory,
  onChangeCategory,
}) => {
  return (
    <option
      className="categories__item"
      onClick={() => onChangeCategory(index)}
    >
      {value}
    </option>
  );
};
