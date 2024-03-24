import React from "react";
import "./style.css";
import { Button } from "./Button/index";
const tg = window.Telegram.WebApp;

export const App = () => {
  React.useEffect(() => {
    tg.ready();
  }, []);

  const onClose = () => {
    tg.close();
  };

  return (
    <div className="App">
      <Button onClose={onClose} />
    </div>
  );
};
