import React from "react";
import "./form.css";
import { Link } from "react-router-dom";
import { PostButton } from "./PostButton";
import { useSelector } from "react-redux";
import axios from "axios";

const tg = window.Telegram.WebApp;

export const Form = () => {
  const [form, setForm] = React.useState({
    name: "",
    number: "",
    street: "Кирова 30/1",
  });
  const [isError, setIsError] = React.useState(false);

  const { totalPrice, items } = useSelector((state) => state.cart);

  const onChangeName = (e) => {
    setForm({ ...form, name: e.target.value });
  };

  const onChangeNumber = (e) => {
    setForm({ ...form, number: e.target.value });
  };

  const onChangeStreet = (e) => {
    setForm({ ...form, street: e.target.value });
  };

  const onSendData = async () => {
    try {
      const { data } = await axios.post("http://localhost:4444/buy", {
        name: form.name,
        number: form.number,
        street: form.street,
        items,
      });

      if (data.message === "success") {
        setForm({ name: "", number: "" });
        tg.close();
      } else {
        setIsError(true);
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
            <input
              value={form.name}
              type="text"
              placeholder="Имя"
              onChange={onChangeName}
            />
            <input
              value={form.number}
              type="text"
              placeholder="Номер телефона"
              onChange={onChangeNumber}
            />
            <h2 className="title">Адрес самомвывоза</h2>
            <select onChange={onChangeStreet}>
              <option value="Кирова 30/1">Кирова 30/1</option>
              <option value="Кирова 30/2">Кирова 30/2</option>
            </select>
            {isError && <div>Ошибка</div>}
            <div className="link__wrapper">
              <Link to="/cart">Вернуться назад</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
