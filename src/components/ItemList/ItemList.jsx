import React from "react";
import "./itemlist.css";
import { Item } from "../Item/Item";
import { Link } from "react-router-dom";

const items = ["item1", "item2", "item3"];

export const ItemList = () => {
  return (
    <div className="itemlist">
      {items.map((str) => (
        <Item key={str} str={str} />
      ))}
      <div className="link__wrapper">
        <Link to="/form">Сделать заказ</Link>
      </div>
    </div>
  );
};
