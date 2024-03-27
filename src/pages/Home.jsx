import React from "react";
import { Categories } from "../components/Home/Categories/Categories";
import { ItemList } from "../components/Home/ItemList/ItemList";
import { GoToCartButton } from "../components/Home/GoToCartButton/GoToCartButton";
import { Search } from "../components/Home/Search/Search";

export const Home = () => {
  return (
    <>
      <GoToCartButton />
      <div className="container">
        <Categories />
        <Search />
        <ItemList />
      </div>
    </>
  );
};
