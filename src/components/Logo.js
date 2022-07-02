import LogoImg from "../img/triple2x.png";
import styled from "styled-components";
import FadeInAnimation from "../styles/FadeInAnimation";

const LogoPrintWrap = styled.div`
  position: relative;
  ${FadeInAnimation(100)}
`;

const LogoContainer = styled.div`
  width: 100%;
  maring: auto;
  position: relative;
`;

const LogoImage = styled.img`
  height: 300px;
`;

const LogoText = styled.div`
  font-family: sans-serif;
  color: rgba(58, 58, 58, 0.7);
  width: 100%;
  transform: translate(33%, -270%);
`;

const Logo = () => {
  return (
    <LogoPrintWrap>
      <LogoImage src={LogoImg} alt="triple logo" />
      <LogoText>2021년 12월 기준</LogoText>
    </LogoPrintWrap>
  );
};

export default Logo;
