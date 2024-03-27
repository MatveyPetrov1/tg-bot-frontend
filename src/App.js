import React from "react";
import { Home } from "./pages/Home";
import { Form } from "./components/Form/Form";
import { Cart } from "./pages/Cart";
import { Routes, Route } from "react-router-dom";
import "./style.css";

const tg = window.Telegram.WebApp;

export const App = () => {
  React.useEffect(() => {
    tg.ready();
  }, []);

  return (
    <>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/form" element={<Form />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
        </Routes>
      </div>
    </>
  );
};
