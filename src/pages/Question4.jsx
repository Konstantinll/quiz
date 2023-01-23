import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useData } from "../components/DataContext";

const Question4 = () => {
  let answers = ["30 000₽", "50 000₽", "70 000₽", "90 000₽"];
  const navigate = useNavigate();
  const { data, setValues } = useData();
  const { register, handleSubmit } = useForm({
    defaultValues: { answer4: data.answer4 },
    mode: "onBlur",
  });

  const onSubmit = (data) => {
    navigate("/q5");
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
          <h2>Какой бюджет на сайт заложен?</h2>
          <div className="rad">
            {answers.map((item, index) => (
              <div className="rad_wrap" key={index}>
                <input
                  type="radio"
                  {...register("answer4", { required: true })}
                  id={item}
                  value={item}
                  name="answer4"
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

export default Question4;
