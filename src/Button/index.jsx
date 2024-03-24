import React from "react";
import "./button.css";

export const Button = (props) => {
  return (
    <button {...props} className="button">
      Кнопка
    </button>
  );
};
