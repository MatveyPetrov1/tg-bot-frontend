import React from "react";
import "./itemlist.css";
import { ListItem } from "../ListItem/Listitem";
import axios from "axios";
import { useSelector } from "react-redux";
import { Fullscreen } from "./Fullscreen";
import { Preloader } from "./Preloader";
import { NotFoundItems } from "./NotFoundItems";

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
      `https://b72e1643188692b5.mokky.dev/TOJCOFFEE?${categories}&${sortBy}`
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
  const iceCoffee = items && items.filter((obj) => obj.category === "4");
  const hotDrinks = items && items.filter((obj) => obj.category === "5");
  const ownLemonades = items && items.filter((obj) => obj.category === "6");
  const lemonade = items && items.filter((obj) => obj.category === "7");
  const smoothie = items && items.filter((obj) => obj.category === "8");
  const milkShake = items && items.filter((obj) => obj.category === "9");

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

  const getItem = (name, item, newItem) => {
    const findBySearch = item.filter((obj) =>
      obj.title.toLowerCase().includes(searchValue.toLowerCase())
    );
    if (findBySearch.length > 0) {
      return (
        <>
          <p>
            {name} <br />
            <span>{newItem}</span>
          </p>
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
          <NotFoundItems />
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
              {getItem("Холодный кофе ☕🧊", iceCoffee, "Новинка!")}
              {getItem("Горячие напитки ☕", hotDrinks)}
              {getItem("Фирменные лимонады 🍋💚", ownLemonades, "Новинка!")}
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
