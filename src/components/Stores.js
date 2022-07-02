import styled from "styled-components";
import playStore from "../img/play-store2x.png";
import appStore from "../img/badge-apple4x.png";
import FadeInAnimation from "../styles/FadeInAnimation";

const stores = [
  {
    image: playStore,
    alt: "play store badge",
    description: "2018 구글 플레이스토어\n올해의 앱 최우수상",
  },
  {
    image: appStore,
    alt: "app store badge",
    description: "2018 애플 앱스토어\n오늘의 여행앱 선정",
  },
];

const StoresWrap = styled.div`
  position: relative;
  display: flex;
  margin-top: 50px;
  ${FadeInAnimation(300)}
`;

const StoresContainer = styled.div`
  display: flex;
  width: 90%;
  margin: 5px 10px;
  white-space: pre-wrap;
`;

const Contents = styled.div`
  font-family: sans-serif;
  color: rgba(58, 58, 58, 0.7);
  font-weight: bold;
`;

const StoresImg = styled.img`
  width: 50px;
  height: 100%;
  margin-right: 10px;
`;

const Store = () => {
  return (
    <StoresWrap>
      <StoresContainer>
        <StoresImg src={stores[0].image} alt={stores[0].alt} />
        <Contents>{stores[0].description}</Contents>
        <StoresImg src={stores[1].image} alt={stores[1].alt} />
        <Contents>{stores[1].description}</Contents>
      </StoresContainer>
    </StoresWrap>
  );
};

export default Store;
