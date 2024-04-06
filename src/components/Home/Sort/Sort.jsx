import "../Categories/categories.css";
import { useDispatch } from "react-redux";
import { setSort } from "../../../redux/slices/filetrSlice";

import React from "react";

const sortArr = ["Сортировать по...", "По цене (вниз)", "По цене (вверх)"];

export const Sort = () => {
  const dispatch = useDispatch();

  const onChangeSort = (e) => {
    const index = sortArr.indexOf(e.target.value);
    if (index === 1) {
      const value = "sortBy=defaultPrice";
      dispatch(setSort(value));
    } else if (index === 2) {
      const value = "sortBy=-defaultPrice";
      dispatch(setSort(value));
    } else {
      const value = "";
      dispatch(setSort(value));
    }
  };

  return (
    <div className="categories">
      <select onChange={(e) => onChangeSort(e)}>
        {sortArr.map((str) => (
          <option className="categories__item" key={str}>
            <div className="sort__wrapper">{str}</div>
          </option>
        ))}
      </select>
    </div>
  );
};
