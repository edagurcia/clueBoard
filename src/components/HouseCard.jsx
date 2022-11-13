import Players from "./Players";
import Suspects from "./Suspects";
import Weapons from "./Weapons";
import Places from "./Places";
import { Container } from "../styles/styles";

const HouseCard = ({ card }) => {
  return (
    <Container>
      <Players />
      <Suspects />
      <Weapons />
      <Places card={card} />
    </Container>
  );
};

export default HouseCard;
