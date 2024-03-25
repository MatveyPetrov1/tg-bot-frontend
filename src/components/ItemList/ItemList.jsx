import React from "react";
import "./itemlist.css";
import { Item } from "../Item/Item";

const items = ["item1", "item2", "item3"];

export const ItemList = () => {
  return (
    <div className="itemlist">
      {items.map((str) => (
        <Item key={str} str={str} />
      ))}
      <button>Сделать заказ</button>
    </div>
  );
};
