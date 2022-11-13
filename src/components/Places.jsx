import { useState, useEffect } from "react";
import styled from "styled-components";
import { house } from "../data/housePlaces.js";
import { beach } from "../data/beachPlaces.js";

const Places = ({ card }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    if (card === "house") {
      setData(house);
    } else {
      setData(beach);
    }
  }, [card]);

  return (
    <Container>
      <p>Lugares</p>
      {data.map((item) => (
        <div key={item.id}>
          <p>{item.name}</p>
          {item.players.map((player, index) => (
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

export default Places;
