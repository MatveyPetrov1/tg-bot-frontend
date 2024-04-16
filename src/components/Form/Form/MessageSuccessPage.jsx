import React from "react";
import "./messagesuccess.css";
import { Link } from "react-router-dom";
import { deleteAllItems } from "../../../redux/slices/cartSlice";
import { useDispatch } from "react-redux";

const tg = window.Telegram.WebApp;

export const MessageSuccessPage = ({ time }) => {
  const dispatch = useDispatch();

  const onClickClose = () => {
    tg.close();
  };

  const onClickBuyAnother = () => {
    dispatch(deleteAllItems());
  };

  return (
    <div className="container">
      <div className="success__wrapper">
        <div className="success form__animation">
          <div>
            <h1>Заказ сделан! 🥰💚</h1>
            <div className="time">
              <p>Ваш заказ будет собран через:</p>
              <p>{time}</p>
            </div>

            <div className="button__wrapper">
              <Link to="/" onClick={onClickBuyAnother}>
                Заказать еще
              </Link>
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
