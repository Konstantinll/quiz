import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useData } from "../components/DataContext";
import PhoneInput from "react-phone-number-input/input";
import emailjs from "@emailjs/browser";

const Final = () => {
  const { data } = useData();
  const [val, setVal] = useState();

  const navigate = useNavigate();

  const goHome = () => {
    navigate("/");
  };

  const form = useRef();

  const onSubmit = (e) => {
    navigate("/thanks");
    e.preventDefault();
    emailjs
      .sendForm(
        "service_o1kqgaj",
        "template_ar9y7lb",
        form.current,
        "U3kt79NW_Wi_sYiUL"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="main__bg">
      <h1>
        Пройдите тест за 1 минуту <br />
        Получите скидку на разработку сайта 5 000₽
      </h1>
      <div className="box">
        <form ref={form} onSubmit={onSubmit}>
          <h2>
            Вы успешно ответили на все вопросы <br />
            Оставьте нам свой данные для связи
          </h2>
          <div className="input_box">
            <input type="text" name="Name" id="Name" required />
            <span>Имя</span>
            <i></i>
          </div>
          <div className="input_box">
            <PhoneInput
              country="RU"
              value={val}
              onChange={setVal}
              name="PhoneNumber"
              type="tel"
              id="PhoneNumber"
              required
            />
            <span>Телефон</span>
            <i></i>
          </div>
          {Object.keys(data).map((item, i) => {
            return (
              <textarea name={i} defaultValue={data[item]} key={i}></textarea>
            );
          })}
          <div>
            <button className="btn home_btn" onClick={goHome}>
              В начало
            </button>
            <button className="btn">Отправить</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Final;
