import React from "react";
import "./itemlist.css";
import { ListItem } from "../ListItem/Listitem";
import axios from "axios";
import { useSelector } from "react-redux";

export const ItemList = () => {
  const [items, setItems] = React.useState();

  const { searchValue, category } = useSelector((state) => state.filter);

  const fetchItems = React.useCallback(async () => {
    const categories = category > 0 ? `?category=${category}` : ``;

    const { data } = await axios.get(
      `https://6f04cd2d94cdecc9.mokky.dev/items${categories}`
    );
    setItems(data);
  }, [category]);

  React.useEffect(() => {
    fetchItems();
  }, [fetchItems]);

  const filteredItems = () => {
    return (
      items &&
      items
        .filter((obj) =>
          obj.title.toLowerCase().includes(searchValue.toLowerCase())
        )
        .map((obj, index) => <ListItem key={index} {...obj} />)
    );
  };

  return <div className="itemlist">{filteredItems()}</div>;
};
