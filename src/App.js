import React from "react";
import "./style.css";
import { Button } from "./Button/index";
import { useTelegram } from "./hooks/useTelegram";

const tg = window.Telegram.WebApp;

export const App = () => {
  const { user, onClose, onToggleButton } = useTelegram();

  React.useEffect(() => {
    tg.ready();
  }, []);

  return (
    <div className="App">
      <Button onClose={onClose} />
      <span>{user?.username}</span>
      <button onClick={onToggleButton} style={{ color: "white" }}>
        toggle
      </button>
    </div>
  );
};
