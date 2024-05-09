import React from "react";
import { Categories } from "../components/Home/Categories/Categories";
import { ItemList } from "../components/Home/ItemList/ItemList";
import { GoToCartButton } from "../components/Home/GoToCartButton/GoToCartButton";
import { Search } from "../components/Home/Search/Search";
import { Sort } from "../components/Home/Sort/Sort";

const tg = window.Telegram.WebApp;

export const Home = () => {
  React.useEffect(() => {
    tg.MainButton.hide();
  }, []);

  return (
    <div className="home">
      <GoToCartButton />
      <div className="container">
        <Search />
        <div className="filter__block">
          <Categories />
          <Sort />
        </div>
        <ItemList />
      </div>
    </div>
  );
};
