import React from "react";
import "./search.css";
import { useDispatch, useSelector } from "react-redux";
import { setSearchValue } from "../../../redux/slices/filetrSlice";

export const Search = () => {
  const dispatch = useDispatch();
  const { searchValue } = useSelector((state) => state.filter);

  const onChangeInput = (e) => {
    dispatch(setSearchValue(e.target.value));
  };

  return (
    <input
      className="search"
      type="text"
      onChange={onChangeInput}
      value={searchValue}
      placeholder="Искать что-нибудь..."
    />
  );
};
