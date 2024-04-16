import React from "react";
import "./form.css";
import { Link } from "react-router-dom";
import { PostButton } from "../PostButton/PostButton";
import { useSelector } from "react-redux";
import axios from "axios";
import { MessageSuccessPage } from "./MessageSuccessPage";

export const Form = () => {
  const [form, setForm] = React.useState({
    name: "",
    number: "",
    street: "Кирова 30/1",
    time: "15 мин",
    comment: "",
  });
  const [isNumberError, setIsNumberError] = React.useState(false);
  const [isMessageSuccess, setIsMessageSuccess] = React.useState(false);

  const { totalPrice, items } = useSelector((state) => state.cart);

  const onChangeName = (e) => {
    setForm({ ...form, name: e.target.value });
  };

  const onChangeNumber = (e) => {
    setForm({ ...form, number: e.target.value });
    setIsNumberError(false);
  };

  const onChangeStreet = (e) => {
    setForm({ ...form, street: e.target.value });
  };

  const onChangeTime = (e) => {
    setForm({ ...form, time: e.target.value });
  };

  const onChangeComment = (e) => {
    setForm({ ...form, comment: e.target.value });
  };

  const onSendData = async () => {
    try {
      const product = {
        name: form.name,
        number: form.number,
        street: form.street,
        time: form.time,
        comment: form.comment,
        items,
      };

      const checkData = (data) => {
        if (data.message === "success") {
          setForm({ ...form, name: "", number: "" });
          setIsMessageSuccess(true);
        } else {
          for (let elem of data) {
            if (elem.msg === "Неверный формат телефона") {
              setIsNumberError(true);
            }
          }
        }
      };

      await fetch("http://79.174.93.190:4444/buy", {
        method: "POST",
        body: JSON.stringify(product),
      })
        .then((res) => res.json())
        .then((data) => checkData(data));
    } catch (err) {
      console.log(err);
    }
  };

  return !isMessageSuccess ? (
    <div className="form__animation">
      <PostButton
        onSendData={onSendData}
        text={`Заказать на ${totalPrice} ₽`}
      />
      <div className="container">
        <div className="form">
          <div className="wrapper">
            <h1 className="main__title">
              Осталось совсем немного 😊
              <br />
              Спасибо, что кушаете у нас 🥰
            </h1>
            <h2 className="title">Заполните информацию</h2>
            <div className="input__container">
              <div className="input__name">
                <input
                  value={form.name}
                  type="text"
                  placeholder="Имя"
                  onChange={onChangeName}
                />
              </div>
            </div>
            <div className="input__container">
              <div className="input__number">
                <input
                  value={form.number}
                  type="text"
                  placeholder="Номер телефона"
                  onChange={onChangeNumber}
                />
              </div>
              {isNumberError && (
                <h2 className="number__error">Неверный формат телефона 😏</h2>
              )}
              <div className="number__star">*</div>
            </div>
            <h2 className="title">Адрес самомвывоза</h2>
            <div className="select__wrapper">
              <select onChange={onChangeStreet}>
                <option value="Кирова 30/1">Кирова 30/1</option>
              </select>
            </div>
            <h2 className="title">К какому времени приготовить</h2>
            <div className="select__wrapper">
              <select onChange={onChangeTime}>
                <option value="15 мин">Через 15 мин</option>
                <option value="30 мин">Через 30 мин</option>
                <option value="45 мин">Через 45 мин</option>
                <option value="1 час">Через 1 час</option>
                <option value="Свое время(в комментарии)">
                  Свое время(в комментарии)
                </option>
              </select>
            </div>
            <h2 className="title">Комментарий для уточнения</h2>
            <div className="input__name input__comment">
              <textarea
                value={form.comment}
                type="text"
                placeholder="Ваш комментарий..."
                onChange={onChangeComment}
              />
            </div>
          </div>
        </div>
        <div className="link__wrapper">
          <Link className="cartlist__button" to="/cart">
            Вернуться в корзину 👈
          </Link>
        </div>
      </div>
    </div>
  ) : (
    <MessageSuccessPage time={form.time} />
  );
};
