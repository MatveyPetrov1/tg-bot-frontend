import React from "react";
import "./style.css";
import { Button } from "./Button/index";
import { useTelegram } from "./hooks/useTelegram";

export const App = () => {
  const { user, tg, onClose } = useTelegram();

  React.useEffect(() => {
    tg.ready();
  }, []);

  return (
    <div className="App">
      <Button onClose={onClose} />
      <span>{user?.username}</span>
      <h1>hui</h1>
    </div>
  );
};
