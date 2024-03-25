import React from "react";
import "./style.css";
import { ItemList } from "./components/ItemList/index";
import { Form } from "./components/Form/index";
import { Routes, Route } from "react-router-dom";

const tg = window.Telegram.WebApp;

export const App = () => {
  React.useEffect(() => {
    tg.ready();
  }, []);

  return (
    <>
      <div className="App">
        <div className="container">
          <Routes>
            <Route path="/" element={<ItemList />}></Route>
            <Route path="/form" element={<Form />}></Route>
          </Routes>
        </div>
      </div>
    </>
  );
};
