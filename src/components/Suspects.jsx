import styled from "styled-components";
import { suspects } from "../data/suspectsData";

const Suspects = () => {
  return (
    <Container>
      <p>Sospechosos</p>
      {suspects.map((suspect) => (
        <div key={suspect.id}>
          <p>{suspect.name}</p>
          {suspect.players.map((player, index) => (
            <input key={index} type="checkbox" name="player" />
          ))}
        </div>
      ))}
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 15px;
  p {
    font-size: 12px;
    text-transform: uppercase;
    font-weight: 700;
    margin-bottom: 10px;
  }
  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-left: 0.5rem;
    padding-right: 1rem;
    margin-bottom: 5px;
    p {
      font-size: 10px;
      width: 65px;
    }
    input {
      cursor: pointer;
      width: 30px;
      height: 30px;
    }
  }
`;

export default Suspects;
