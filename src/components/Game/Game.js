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
  ,
  {
    name: "9",
    src: require("../../img/9.jpg")
  },
  {
    name: "10",
    src: require("../../img/10.jpg")
  },
  {
    name: "11",
    src: require("../../img/11.jpg")
  },
  {
    name: "12",
    src: require("../../img/12.jpg")
  },
  {
    name: "13",
    src: require("../../img/13.jpg")
  },
  {
    name: "14",
    src: require("../../img/14.jpg")
  },
  {
    name: "15",
    src: require("../../img/15.jpg")
  },
  {
    name: "16",
    src: require("../../img/16.jpg")
  },
  {
    name: "17",
    src: require("../../img/17.jpg")
  },
  {
    name: "18",
    src: require("../../img/18.jpg")
  },
  {
    name: "19",
    src: require("../../img/19.jpg")
  },
  {
    name: "20",
    src: require("../../img/20.jpg")
  },
  {
    name: "21",
    src: require("../../img/21.jpg")
  },
  {
    name: "22",
    src: require("../../img/22.jpg")
  },
  {
    name: "23",
    src: require("../../img/23.jpg")
  },
  {
    name: "24",
    src: require("../../img/24.jpg")
  },
  {
    name: "25",
    src: require("../../img/25.jpg")
  },
  {
    name: "26",
    src: require("../../img/26.jpg")
  },
  {
    name: "27",
    src: require("../../img/27.jpg")
  },
  {
    name: "28",
    src: require("../../img/28.jpg")
  },
  {
    name: "29",
    src: require("../../img/29.jpg")
  },
  {
    name: "30",
    src: require("../../img/30.jpg")
  },
  {
    name: "31",
    src: require("../../img/31.jpg")
  },
  {
    name: "32",
    src: require("../../img/32.jpg")
  },
  {
    name: "33",
    src: require("../../img/33.jpg")
  },
  {
    name: "34",
    src: require("../../img/34.jpg")
  },
  {
    name: "35",
    src: require("../../img/35.jpg")
  },
  {
    name: "36",
    src: require("../../img/36.jpg")
  },
  {
    name: "37",
    src: require("../../img/37.jpg")
  },
  {
    name: "38",
    src: require("../../img/38.jpg")
  },
  {
    name: "39",
    src: require("../../img/39.jpg")
  },
  {
    name: "40",
    src: require("../../img/40.jpg")
  },
  {
    name: "41",
    src: require("../../img/41.jpg")
  },
  {
    name: "42",
    src: require("../../img/42.jpg")
  },
  {
    name: "43",
    src: require("../../img/43.jpg")
  },
  {
    name: "44",
    src: require("../../img/44.jpg")
  },
  {
    name: "45",
    src: require("../../img/45.jpg")
  },
  {
    name: "46",
    src: require("../../img/46.jpg")
  },
  {
    name: "47",
    src: require("../../img/47.jpg")
  },
  {
    name: "48",
    src: require("../../img/48.jpg")
  },
  {
    name: "49",
    src: require("../../img/49.jpg")
  },
  {
    name: "50",
    src: require("../../img/50.jpg")
  },
  {
    name: "51",
    src: require("../../img/51.jpg")
  },
  {
    name: "52",
    src: require("../../img/52.jpg")
  },
  {
    name: "53",
    src: require("../../img/53.jpg")
  },
  {
    name: "54",
    src: require("../../img/54.jpg")
  },
  {
    name: "55",
    src: require("../../img/55.jpg")
  },
  {
    name: "56",
    src: require("../../img/56.jpg")
  },
  {
    name: "57",
    src: require("../../img/57.jpg")
  },
  {
    name: "58",
    src: require("../../img/58.jpg")
  },
  {
    name: "59",
    src: require("../../img/59.jpg")
  },
  {
    name: "60",
    src: require("../../img/60.jpg")
  },
  {
    name: "61",
    src: require("../../img/61.jpg")
  },
  {
    name: "62",
    src: require("../../img/62.jpg")
  },
  {
    name: "63",
    src: require("../../img/63.jpg")
  },
  {
    name: "64",
    src: require("../../img/64.jpg")
  }
];

const Game = () => {
  const [things, setThings] = useState([]);
  const [displays, setDisplays] = useState([]);
  const [winners, setWinners] = useState([]);
  useEffect(() => {
    items.sort(() => Math.random() - 0.5);
    setThings(items);
    setDisplays([items[0], items[1]]);
  }, []);

  const clickHandler = thing => () => {
    if (things.length <= 2) {
      if (winners.length === 0) {
        setDisplays([thing]);
      } else {
        let updatedThing = [...winners, thing];
        setThings(updatedThing);
        setDisplays([updatedThing[0], updatedThing[1]]);
        setWinners([]);
      }
    } else if (things.length > 2) {
      setWinners([...winners, thing]);
      setDisplays([things[2], things[3]]);
      setThings(things.slice(2));
    }
  };
  return (
    <FlexBox>
      <h1 className="title">구독 서비스 월드컵</h1>
      {displays.map(d => {
        return (
          <div className="flex-1" key={d.name} onClick={clickHandler(d)}>
            <img className="thing-img" src={d.src} />
            <div className="name">{d.name}</div>
          </div>
        );
      })}
    </FlexBox>
  );
};

export default Game;
