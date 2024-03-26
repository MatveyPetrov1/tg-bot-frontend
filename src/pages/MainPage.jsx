import React from "react";
import { Categories } from "../components/Categories/Categories";
import { ItemList } from "../components/ItemList/ItemList";

export const MainPage = () => {
  return (
    <>
      <Categories />
      <ItemList />
    </>
  );
};
