import React, { useState, useEffect } from "react";
import { FlexBox } from "./style";

const items = [
  {
    name: "와이즐리",
    src: require("../../img/와이즐리.jpg")
  },
  {
    name: "모닝랩",
    src: require("../../img/모닝랩.jpg")
  },
  {
    name: "네이버플러스멤버쉽",
    src: require("../../img/네이버플러스멤버쉽.jpg")
  },
  {
    name: "술담화",
    src: require("../../img/술담화.jpg")
  }
  ,
  {
    name: "메존",
    src: require("../../img/메존.jpg")
  }
  ,
  {
    name: "리얼후르츠",
    src: require("../../img/리얼후르츠.jpg")
  }
  ,
  {
    name: "홍콘여행",
    src: require("../../img/홍콘여행.jpg")
  }
  ,
  {
    name: "동네정미소",
    src: require("../../img/동네정미소.jpg")
  }
  ,
  {
    name: "미하이삭스",
    src: require("../../img/미하이삭스.jpg")
  },
  {
    name: "그리팅몰",
    src: require("../../img/그리팅몰.jpg")
  },
  {
    name: "버거킹",
    src: require("../../img/버거킹.jpg")
  },
  {
    name: "미공",
    src: require("../../img/미공.jpg")
  },
  {
    name: "어도비크리에이티브",
    src: require("../../img/어도비크리에이티브.jpg")
  },
  {
    name: "카카오톡이모티콘",
    src: require("../../img/카카오톡이모티콘.jpg")
  },
  {
    name: "모두의셔틀",
    src: require("../../img/모두의셔틀.jpg")
  },
  {
    name: "카페박스",
    src: require("../../img/카페박스.jpg")
  },
  {
    name: "마장동소도둑단",
    src: require("../../img/마장동소도둑단.jpg")
  },
  {
    name: "위잇딜라이트",
    src: require("../../img/위잇딜라이트.jpg")
  },
  {
    name: "넷플릭스",
    src: require("../../img/넷플릭스.jpg")
  },
  {
    name: "다다일상",
    src: require("../../img/다다일상.jpg")
  },
  {
    name: "포르쉐패스포트",
    src: require("../../img/포르쉐패스포트.jpg")
  },
  {
    name: "야쿠르트",
    src: require("../../img/야쿠르트.jpg")
  },
  {
    name: "끌레도르",
    src: require("../../img/끌레도르.jpg")
  },
  {
    name: "홈술닷컴",
    src: require("../../img/홈술닷컴.jpg")
  },
  {
    name: "매거진D",
    src: require("../../img/매거진D.jpg")
  },
  {
    name: "마이클레어",
    src: require("../../img/마이클레어.jpg")
  },
  {
    name: "리치즈박스",
    src: require("../../img/리치즈박스.jpg")
  },
  {
    name: "월간가슴",
    src: require("../../img/월간가슴.jpg")
  },
  {
    name: "나물투데이",
    src: require("../../img/나물투데이.jpg")
  },
  {
    name: "모닝푸드",
    src: require("../../img/모닝푸드.jpg")
  },
  {
    name: "에코후레쉬",
    src: require("../../img/에코후레쉬.jpg")
  },
  {
    name: "온돌플러스",
    src: require("../../img/온돌플러스.jpg")
  },
  {
    name: "오픈갤러리",
    src: require("../../img/오픈갤러리.jpg")
  },
  {
    name: "클린베딩",
    src: require("../../img/클린베딩.jpg")
  },
  {
    name: "오늘도",
    src: require("../../img/오늘도.jpg")
  },
  {
    name: "해피문데이",
    src: require("../../img/해피문데이.jpg")
  },
  {
    name: "노블메이드",
    src: require("../../img/노블메이드.jpg")
  },
  {
    name: "넥스트커버",
    src: require("../../img/넥스트커버.jpg")
  },
  {
    name: "스낵트립",
    src: require("../../img/스낵트립.jpg")
  },
  {
    name: "레저미",
    src: require("../../img/레저미.jpg")
  },
  {
    name: "모티피아",
    src: require("../../img/모티피아.jpg")
  },
  {
    name: "도시생활건강",
    src: require("../../img/도시생활건강.jpg")
  },
  {
    name: "로컬스티치",
    src: require("../../img/로컬스티치.jpg")
  },
  {
    name: "퍼플독",
    src: require("../../img/퍼플독.jpg")
  },
  {
    name: "험블초이스",
    src: require("../../img/험블초이스.jpg")
  },
  {
    name: "큐잇",
    src: require("../../img/큐잇.jpg")
  },
  {
    name: "에브리패스",
    src: require("../../img/에브리패스.jpg")
  },
  {
    name: "월간펫띵",
    src: require("../../img/월간펫띵.jpg")
  },
  {
    name: "보틀웍스",
    src: require("../../img/보틀웍스.jpg")
  },
  {
    name: "아이노하우",
    src: require("../../img/아이노하우.jpg")
  },
  {
    name: "토스프라임",
    src: require("../../img/토스프라임.jpg")
  },
  {
    name: "후지미",
    src: require("../../img/후지미.jpg")
  },
  {
    name: "멜론",
    src: require("../../img/멜론.jpg")
  },
  {
    name: "월간과자",
    src: require("../../img/월간과자.jpg")
  },
  {
    name: "달나라",
    src: require("../../img/달나라.jpg")
  },
  {
    name: "슬림쿡",
    src: require("../../img/슬림쿡.jpg")
  },
  {
    name: "위클리티셔츠",
    src: require("../../img/위클리티셔츠.jpg")
  },
  {
    name: "밀리의서재",
    src: require("../../img/밀리의서재.jpg")
  },
  {
    name: "오피스365",
    src: require("../../img/오피스365.jpg")
  },
  {
    name: "구구",
    src: require("../../img/구구.jpg")
  },
  {
    name: "쿠팡와우",
    src: require("../../img/쿠팡와우.jpg")
  },
  {
    name: "런드리고",
    src: require("../../img/런드리고.jpg")
  },
  {
    name: "꾸까",
    src: require("../../img/꾸까.jpg")
  },
  {
    name: "하트노트",
    src: require("../../img/하트노트.jpg")
  }
];

const Game = () => {
  const [things, setThings] = useState([]);
  const [displays, setDisplays] = useState([]);
  const [winners, setWinners] = useState([]);
  useEffect(() => {
    // items.sort(() => Math.random() - 0.5);
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
