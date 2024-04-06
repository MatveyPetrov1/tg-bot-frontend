import React from "react";
import { Categories } from "../components/Home/Categories/Categories";
import { ItemList } from "../components/Home/ItemList/ItemList";
import { GoToCartButton } from "../components/Home/GoToCartButton/GoToCartButton";
import { Search } from "../components/Home/Search/Search";
import { Sort } from "../components/Home/Sort/Sort";

export const Home = () => {
  return (
    <>
      <GoToCartButton />
      <div className="container">
        <Search />
        <div className="filter__block">
          <Categories />
          <Sort />
        </div>
        <ItemList />
      </div>
    </>
  );
};
