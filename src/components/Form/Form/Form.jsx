import React from "react";
import "./form.css";
import { Link } from "react-router-dom";
import { PostButton } from "../PostButton/PostButton";
import { useSelector } from "react-redux";
import axios from "axios";

const tg = window.Telegram.WebApp;

export const Form = () => {
  const [form, setForm] = React.useState({
    name: "",
    number: "",
    street: "Кирова 30/1",
    time: "15 мин",
  });
  const [isNameError, setIsNameError] = React.useState(false);
  const [isNumberError, setIsNumberError] = React.useState(false);

  const { totalPrice, items } = useSelector((state) => state.cart);

  const onChangeName = (e) => {
    setForm({ ...form, name: e.target.value });
    setIsNameError(false);
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

  const onSendData = async () => {
    try {
      const { data } = await axios.post("http://localhost:4444/buy", {
        name: form.name,
        number: form.number,
        street: form.street,
        time: form.time,
        items,
      });

      if (data.message === "success") {
        setForm({ name: "", number: "" });
        tg.close();
      } else {
        for (let elem of data) {
          if (elem.msg === "Неверный формат имени") {
            setIsNameError(true);
          }
          if (elem.msg === "Неверный формат телефона") {
            setIsNumberError(true);
          }
        }
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <PostButton
        onSendData={onSendData}
        text={`Заказать на ${totalPrice} р.`}
      />
      <div className="container">
        <div className="form">
          <div className="wrapper">
            <h2 className="title">Введите ваши данные</h2>
            <div className="input__name">
              <input
                value={form.name}
                type="text"
                placeholder="Имя"
                onChange={onChangeName}
              />
              {isNameError && <h2>Неверный формат имени</h2>}
            </div>
            <div className="input__number">
              <input
                value={form.number}
                type="text"
                placeholder="Номер телефона"
                onChange={onChangeNumber}
              />
              {isNumberError && <h2>Неверный формат телефона</h2>}
            </div>
            <h2 className="title">Адрес самомвывоза</h2>
            <select onChange={onChangeStreet}>
              <option value="Кирова 30/1">Кирова 30/1</option>
            </select>
            <h2 className="title">К какому времени приготовить</h2>
            <select onChange={onChangeTime}>
              <option value="Через 15 мин">Через 15 мин</option>
              <option value="Через 30 мин">Через 30 мин</option>
              <option value="Через 1 час">Через 1 час</option>
            </select>
            <div className="link__wrapper">
              <Link to="/cart">Вернуться назад</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
