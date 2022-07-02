import styled from "styled-components";
import GlobalStyle from "./styles/GlobalStyle";
import Logo from "./components/Logo";
import Number from "./components/Number";
import Stores from "./components/Stores";

const Container = styled.div`
  width: 1200px;
`;

const Flex = styled.div`
  width: 80%;
  display: flex;
  margin-left: auto;
  justify-content: center;
`;

const Column = styled.div`
  width: 55%;
`;

const App = () => {
  return (
    <Container>
      <GlobalStyle />
      <Flex>
        <Logo />
        <Column>
          <Number />
          <Stores />
        </Column>
      </Flex>
    </Container>
  );
};

export default App;
