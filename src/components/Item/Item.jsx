import React from "react";
import "./item.css";

export const Item = ({ title, price, imageUrl, composition }) => {
  return (
    <div className="item">
      <div className="wrapper">
        <div className="image__wrapper">
          <img src={imageUrl} alt="item_image" />
        </div>
        <h3 className="title">{title}</h3>
        <h6 className="composition">{composition}</h6>
        <div className="bottom">
          <p>{price}</p>
          <button>Добавить</button>
        </div>
      </div>
    </div>
  );
};
