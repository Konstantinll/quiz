import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useData } from "../components/DataContext";

const Question3 = () => {
  let answers = [
    "До 10",
    "от 10 до 30",
    "от 30 до 50",
    "от 50 до 100",
    "Более 100",
    "Затрудняюсь ответить",
  ];
  const navigate = useNavigate();
  const { data, setValues } = useData();
  const { register, handleSubmit } = useForm({
    defaultValues: { answer3: data.answer3 },
    mode: "onBlur",
  });

  const onSubmit = (data) => {
    navigate("/q4");
    setValues(data);
  };
  return (
    <div className="main__bg">
      <h1>
        Пройдите тест за 1 минуту <br />
        Получите скидку на разработку сайта 5 000₽
      </h1>
      <div className="box">
        <form onSubmit={handleSubmit(onSubmit)}>
          <h2>
            Какое количество заказов
            <br />
            Вы можете обработать в день?
          </h2>
          <div className="rad">
            {answers.map((item, index) => (
              <div className="rad_wrap" key={index}>
                <input
                  type="radio"
                  {...register("answer3", { required: true })}
                  id={item}
                  value={item}
                  name="answer3"
                />
                <label htmlFor={item} key={index}>
                  {item}
                </label>
              </div>
            ))}
          </div>
          <button className="btn">Далее</button>
        </form>
      </div>
    </div>
  );
};

export default Question3;
