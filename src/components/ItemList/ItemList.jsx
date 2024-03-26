import React from "react";
import "./itemlist.css";
import { Item } from "../Item/Item";
import axios from "axios";
import { useSelector } from "react-redux";

export const ItemList = () => {
  const [items, setItems] = React.useState();
  const { totalPrice } = useSelector((state) => state.cart);

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
      <div>{totalPrice}</div>
      {items && items.map((obj) => <Item key={obj.title} {...obj} />)}

      <div className="link__wrapper"></div>
    </div>
  );
};
