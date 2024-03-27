import React from "react";
import "./style.css";
import { MainPage } from "./pages/MainPage";
import { Form } from "./components/Form/Form";
import { Cart } from "./pages/Cart";
import { Routes, Route } from "react-router-dom";

const tg = window.Telegram.WebApp;

export const App = () => {
  React.useEffect(() => {
    tg.ready();
  }, []);

  return (
    <>
      <div className="App">
        <Routes>
          <Route path="/" element={<MainPage />}></Route>
          <Route path="/form" element={<Form />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
        </Routes>
      </div>
    </>
  );
};
