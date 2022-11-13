import styled from "styled-components";
import { GiFamilyHouse } from "react-icons/gi";
import { FaUmbrellaBeach } from "react-icons/fa";
import { device } from "../helpers/breakPoints";

const Toggler = ({ card, cardToggler }) => {
  return (
    <Header>
      <h1>{card === "house" ? "La mansión" : "Pase a la playa"}</h1>
      <button type="button" onClick={cardToggler}>
        {card === "house" ? <GiFamilyHouse /> : <FaUmbrellaBeach />}
      </button>
    </Header>
  );
};

const Header = styled.header`
  width: 100%;
  height: 80px;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  margin-bottom: 20px;
  position: fixed;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;

  background: #f2f2f2;
  -webkit-box-shadow: 12px 12px 30px #b2b8c9, -12px -12px 30px #f0f8ff;
  box-shadow: 12px 12px 30px #b2b8c9, -12px -12px 30px #f0f8ff;

  h1 {
    text-transform: uppercase;
    font-size: 1.4rem;
  }

  svg {
    font-size: 40px;
  }

  button {
    width: 100px;
    height: 50px;
    border: none;
    border-radius: 8px;
    background-color: #2a4359;
    color: #fff;
    transition: all 0.5s ease-in;

    &:hover {
      cursor: pointer;
      background-color: #4679a6;
    }
  }

  @media ${device.tablet} {
    justify-content: space-around;
    h1 {
      font-size: 1.8rem;
    }
  }

  @media ${device.laptop} {
    justify-content: space-evenly;
    h1 {
      font-size: 2.2rem;
    }
  }
`;

export default Toggler;
