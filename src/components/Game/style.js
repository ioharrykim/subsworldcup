import styled from "styled-components";

export const FlexBox = styled.div`

@font-face {
  font-family: 'GmarketSansMedium';
  src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/GmarketSansMedium.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}

  display: flex;
  flex-wrap: wrap;
  height: 100vh;
  overflow: hidden;
  
  .title {
    font-family: 'GmarketSansMedium';
    position: absolute;
    z-index: 2;
    top: 0;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    left: 50%;
    transform: translateX(-50%);
    background-color: rgba(255,255,255,0.3);
    padding: 20px;
    text-transform: uppercase;
    padding-bottom: 10px;
  }
  .flex-1 {
    flex: 1;
    min-width: 500px;
    overflow: hidden;
    background-color: black;
    position: relative;
  }
  .thing-img {
    height:1080px;
    transition: 0.5s;
    cursor: pointer;
  }
  .thing-img:hover {
    transform: scale(1.1);
    opacity: 0.6;
  }
  .name {
    display:none;
    position: absolute;
    z-index: 3;
    color: #fff;
    bottom: 10%;
    font-size: 90px;
    left: 50%;
    transform: translateX(-50%);
  }
`;
