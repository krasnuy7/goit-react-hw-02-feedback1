import React from "react";

const ShowStatisctic = ({ objStatic }) => {
  const { good, neutral, bad } = objStatic;
  const sum = good + neutral + bad;
  const procent = (good * 100 + neutral * 50 + bad * 0) / sum;

  let markup = (
    <>
      <p>Good {good}</p>
      <p>Neutral {neutral}</p>
      <p>Bad {bad}</p>
      <p>{procent ? procent + "%" : "Нет процентов"}</p>
    </>
  );

  return sum ? markup : "Нажмите на кнопку";
};

export default ShowStatisctic;
