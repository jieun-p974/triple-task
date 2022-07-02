import styled from "styled-components";
import FadeInAnimation from "../styles/FadeInAnimation";
import { CountUp } from "use-count-up";

const NumbersContainer = styled.div`
  position: relative;
  ${FadeInAnimation(200)};
  font-size: 2.5rem;
`;
const Numbers = styled.div`
  margin-top: 10px;
`;

const Number = () => {
  return (
    <NumbersContainer>
      <Numbers>
        <strong>
          <CountUp
            isCounting
            start={0}
            end={700}
            duration={2}
            easing="easeOutCubic"
          />
          만 명
        </strong>
        의 여행자
      </Numbers>
      <Numbers>
        <strong>
          <CountUp
            isCounting
            start={0}
            end={100}
            duration={2}
            easing="easeOutCubic"
          />
          만 개
        </strong>
        의 여행리뷰
      </Numbers>
      <Numbers>
        <strong>
          <CountUp
            isCounting
            start={0}
            end={470}
            duration={2}
            easing="easeOutCubic"
          />
          만 개
        </strong>
        의 여행 일정
      </Numbers>
    </NumbersContainer>
  );
};

export default Number;
