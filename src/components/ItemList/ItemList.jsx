import React from "react";
import "./itemlist.css";
import { Item } from "../Item/Item";
import { Link } from "react-router-dom";
import axios from "axios";

export const ItemList = () => {
  const [items, setItems] = React.useState();

  React.useEffect(() => {
    const fetchItems = async () => {
      const { data } = await axios.get(
        "https://6f04cd2d94cdecc9.mokky.dev/items"
      );
      setItems(data);
    };
    fetchItems();
  }, []);

  return (
    <div className="itemlist">
      {items && items.map((obj) => <Item key={obj.title} {...obj} />)}
      <div className="link__wrapper">
        <Link to="/form">Перейти в корзину</Link>
      </div>
    </div>
  );
};
