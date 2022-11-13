import { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import HouseCard from "./components/HouseCard";
import BeachCard from "./components/BeachCard";
import Toggler from "./components/Toggler";
import { house } from "./styles/house";
import { beach } from "./styles/beach";

const App = () => {
  const [card, setCard] = useState("house");

  const isHouseCard = card === "house";

  const cardToggler = () => {
    setCard(card === "house" ? "beach" : "house");
  };

  return (
    <ThemeProvider theme={isHouseCard ? house : beach}>
      <MainContainer>
        <Toggler cardToggler={cardToggler} card={card} />
        {card === "house" ? (
          <HouseCard card={card} />
        ) : (
          <BeachCard card={card} />
        )}
      </MainContainer>
    </ThemeProvider>
  );
};

const MainContainer = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme.text};
  background-color: ${(props) => props.theme.body};
`;

export default App;
