import React from "react";
import "./style.css";
import { useTelegram } from "./hooks/useTelegram";
import { Button } from "./components/Button/index";
import { Header } from "./components/Header/index";

const tg = window.Telegram.WebApp;

export const App = () => {
  const { user, onClose, onToggleButton } = useTelegram();

  React.useEffect(() => {
    tg.ready();
  }, []);

  return (
    <div className="container">
      <Header />
      <Button onClose={onClose} />
      <span>{user?.username}</span>
      <button onClick={onToggleButton} className="toggle">
        toggle
      </button>
    </div>
  );
};
