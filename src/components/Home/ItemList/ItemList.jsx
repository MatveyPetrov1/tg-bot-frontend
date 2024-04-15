import React from "react";
import "./itemlist.css";
import { ListItem } from "../ListItem/Listitem";
import axios from "axios";
import { useSelector } from "react-redux";
import { Fullscreen } from "./Fullscreen";
import { Preloader } from "./Preloader";

export const ItemList = () => {
  const [items, setItems] = React.useState();
  const [isNotFound, setIsNotFound] = React.useState(false);
  const [fullscreenIsActive, setFullscreenIsActive] = React.useState(false);
  const [fullscreenURL, setFullscreenURL] = React.useState("");
  const [itemsIsFound, setItemsIsFound] = React.useState(false);

  const { searchValue, category, sortBy } = useSelector(
    (state) => state.filter
  );

  const fetchItems = React.useCallback(async () => {
    const categories = category > 0 ? `category=${category}` : ``;

    const { data } = await axios.get(
      `https://6f04cd2d94cdecc9.mokky.dev/items?${categories}&${sortBy}`
    );
    setItems(data);
  }, [category, sortBy]);

  React.useEffect(() => {
    setItemsIsFound(false);
    fetchItems();
    setItemsIsFound(true);
  }, [fetchItems]);

  const shawarma = items && items.filter((obj) => obj.category === "1");
  const zaverton = items && items.filter((obj) => obj.category === "2");
  const coffee = items && items.filter((obj) => obj.category === "3");
  const hotDrinks = items && items.filter((obj) => obj.category === "4");
  const lemonade = items && items.filter((obj) => obj.category === "5");
  const smoothie = items && items.filter((obj) => obj.category === "6");
  const milkShake = items && items.filter((obj) => obj.category === "7");

  const checkItems = React.useCallback(() => {
    if (items) {
      const filteredItems = items.filter((obj) =>
        obj.title.toLowerCase().includes(searchValue.toLowerCase())
      );
      if (filteredItems.length > 0) {
        setIsNotFound(false);
      } else {
        setIsNotFound(true);
      }
    } else {
      return;
    }
  }, [items, searchValue]);

  React.useEffect(() => {
    checkItems();
  }, [checkItems]);

  const onClickToImage = (url) => {
    setFullscreenIsActive(true);
    setFullscreenURL(url);
  };

  const getItem = (name, item) => {
    const findBySearch = item.filter((obj) =>
      obj.title.toLowerCase().includes(searchValue.toLowerCase())
    );
    if (findBySearch.length > 0) {
      return (
        <>
          <p>{name}</p>
          <div className="itemlist">
            {item
              .filter((obj) =>
                obj.title.toLowerCase().includes(searchValue.toLowerCase())
              )
              .map((obj, index) => (
                <ListItem
                  key={index}
                  index={index}
                  {...obj}
                  onClickToImage={onClickToImage}
                />
              ))}
          </div>
        </>
      );
    } else {
      return;
    }
  };

  const filteredItems = () => {
    return (
      <>
        {isNotFound && itemsIsFound ? (
          "Ничего не найдено"
        ) : !itemsIsFound ? (
          <Preloader />
        ) : (
          items && (
            <div className="main__itemlist">
              {fullscreenIsActive && (
                <Fullscreen
                  setFullscreenIsActive={setFullscreenIsActive}
                  fullscreenURL={fullscreenURL}
                />
              )}
              {getItem("Шаурма 🌯", shawarma)}
              {getItem("Завертоны 🌯", zaverton)}
              {getItem("Кофе ☕", coffee)}
              {getItem("Горячие напитки ☕", hotDrinks)}
              {getItem("Лимонады 🍋", lemonade)}
              {getItem("Смузи 🍹", smoothie)}
              {getItem("Молочные коктейли 🥤", milkShake)}
            </div>
          )
        )}
      </>
    );
  };

  return filteredItems();
};
