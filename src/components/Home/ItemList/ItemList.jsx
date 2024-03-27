import React from "react";
import "./itemlist.css";
import { ListItem } from "../ListItem/Listitem";
import axios from "axios";
import { useSelector } from "react-redux";

export const ItemList = () => {
  const [items, setItems] = React.useState();

  const { searchValue } = useSelector((state) => state.filter);

  const fetchItems = async () => {
    const { data } = await axios.get(
      "https://6f04cd2d94cdecc9.mokky.dev/items"
    );
    setItems(data);
  };

  React.useEffect(() => {
    fetchItems();
  }, []);

  const filteredItems = () => {
    return (
      items &&
      items
        .filter((obj) => obj.title.toLowerCase().includes(searchValue))
        .map((obj) => <ListItem key={obj.title} {...obj} />)
    );
  };

  return <div className="itemlist">{filteredItems()}</div>;
};
