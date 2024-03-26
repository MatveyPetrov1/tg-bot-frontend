import React from "react";
import "./form.css";
import { Link } from "react-router-dom";

const tg = window.Telegram.WebApp;

export const Form = () => {
  const [form, setForm] = React.useState({
    name: "",
    number: "",
    street: "Кирова 30/1",
  });

  const onSendData = React.useCallback(() => {
    const data = {
      name: form.name,
      number: form.number,
      street: form.street,
    };

    tg.sendData(JSON.stringify(data));
  }, [form.name, form.number, form.street]);

  React.useEffect(() => {
    tg.onEvent("mainButtonClicked", onSendData);

    return () => {
      tg.offEvent("mainButtonClicked", onSendData);
    };
  }, []);

  React.useEffect(() => {
    tg.MainButton.setParams({
      text: "Сделать заказ",
    });
  }, []);

  React.useEffect(() => {
    if (!form.name || !form.number) {
      tg.MainButton.hide();
    } else {
      tg.MainButton.show();
    }
  }, [form.name, form.number]);

  const onChangeName = (e) => {
    setForm({ ...form, name: e.target.value });
  };

  const onChangeNumber = (e) => {
    setForm({ ...form, number: e.target.value });
  };

  const onChangeStreet = (e) => {
    setForm({ ...form, street: e.target.value });
  };

  return (
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
        <div className="link__wrapper">
          <Link to="/">Вернуться назад</Link>
        </div>
      </div>
    </div>
  );
};
