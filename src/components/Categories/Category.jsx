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
      className={
        currentCategory === index
          ? "categories__item active"
          : "categories__item"
      }
      onClick={() => onChangeCategory(index)}
    >
      {value}
    </option>
  );
};
