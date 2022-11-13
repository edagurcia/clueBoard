import styled from "styled-components";
import { device } from "../helpers/breakPoints";

const Container = styled.div`
  width: 100%;
  margin-top: 120px;
  margin-bottom: 50px;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media ${device.tablet} {
    width: 500px;
  }
`;

export { Container };
