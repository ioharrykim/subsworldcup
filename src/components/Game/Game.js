import React, { useState, useEffect } from "react";
import { FlexBox } from "./style";

const items = [
  {
    name: "1",
    src: require("../../img/1.jpg")
  },
  {
    name: "2",
    src: require("../../img/2.jpg")
  },
  {
    name: "3",
    src: require("../../img/3.jpg")
  },
  {
    name: "4",
    src: require("../../img/4.jpg")
  }
  ,
  {
    name: "5",
    src: require("../../img/5.jpg")
  }
  ,
  {
    name: "6",
    src: require("../../img/6.jpg")
  }
  ,
  {
    name: "7",
    src: require("../../img/7.jpg")
  }
  ,
  {
    name: "8",
    src: require("../../img/8.jpg")
  }
];

const Game = () => {
  const [foods, setFoods] = useState([]);
  const [displays, setDisplays] = useState([]);
  const [winners, setWinners] = useState([]);
  useEffect(() => {
    items.sort(() => Math.random() - 0.5);
    setFoods(items);
    setDisplays([items[0], items[1]]);
  }, []);

  const clickHandler = food => () => {
    if (foods.length <= 2) {
      if (winners.length === 0) {
        setDisplays([food]);
      } else {
        let updatedFood = [...winners, food];
        setFoods(updatedFood);
        setDisplays([updatedFood[0], updatedFood[1]]);
        setWinners([]);
      }
    } else if (foods.length > 2) {
      setWinners([...winners, food]);
      setDisplays([foods[2], foods[3]]);
      setFoods(foods.slice(2));
    }
  };
  return (
    <FlexBox>
      <h1 className="title">구독 서비스 월드컵</h1>
      {displays.map(d => {
        return (
          <div className="flex-1" key={d.name} onClick={clickHandler(d)}>
            <img className="food-img" src={d.src} />
            <div className="name">{d.name}</div>
          </div>
        );
      })}
    </FlexBox>
  );
};

export default Game;
