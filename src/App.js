import React from "react";
import "./style.css";
import { MainPage } from "./pages/MainPage";
import { Form } from "./components/Form/Form";
import { Card } from "./pages/Card";
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
            <Route path="/" element={<MainPage />}></Route>
            <Route path="/form" element={<Form />}></Route>
            <Route path="/card" element={<Card />}></Route>
          </Routes>
        </div>
      </div>
    </>
  );
};
