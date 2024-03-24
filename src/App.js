import React from "react";
import "./style.css";
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
      <button className="button" onClick={onClose}>
        Кнопка
      </button>
    </div>
  );
};
