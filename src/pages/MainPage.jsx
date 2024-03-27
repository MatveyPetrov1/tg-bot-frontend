import React from "react";
import { Categories } from "../components/Categories/Categories";
import { ItemList } from "../components/ItemList/ItemList";
import { CardButton } from "../components/ItemList/CardButton";

export const MainPage = () => {
  return (
    <>
      <CardButton />
      <div className="container">
        <Categories />
        <ItemList />
      </div>
    </>
  );
};
