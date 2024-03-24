import React from "react";
import "./style.css";
import { Button } from "./Button/index";
import { useTelegram } from "./hooks/useTelegram";

export const App = () => {
  React.useEffect(() => {
    tg.ready();
  }, []);

  const { user, tg, onClose } = useTelegram();

  return (
    <div className="App">
      <Button onClose={onClose} />
      <span>{user?.username}</span>
    </div>
  );
};
