import React from "react";
import "./messagesuccess.css";
import { Link } from "react-router-dom";

const tg = window.Telegram.WebApp;

export const MessageSuccessPage = ({ time }) => {
  const onClickClose = () => {
    tg.close();
  };

  return (
    <div className="container">
      <div className="success__wrapper">
        <div className="success form__animation">
          <div>
            <h1>Заказ сделан! 🥰</h1>
            <p>
              Ваш заказ будет собран через: <br />
              {time}
            </p>

            <div className="button__wrapper">
              <Link to="/">Заказать еще</Link>
              <Link className="close" onClick={onClickClose}>
                Закрыть приложение
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
