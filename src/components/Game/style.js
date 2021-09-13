import styled from "styled-components";

export const FlexBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: 100vh;
  overflow: hidden;
  
  .title {
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
  .food-img {
    width: 100%;
    transition: 0.5s;
    cursor: pointer;
  }
  .food-img:hover {
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
