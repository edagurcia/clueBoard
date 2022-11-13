import styled from "styled-components";

const Players = () => {
  return (
    <PlayersContainer>
      <p>Escribe la inicial de los jugadores</p>
      <InputContainer>
        <span />
        <input type="text" name="player1" disabled value="YO" />
        <input type="text" name="player2" placeholder="A" maxLength={1} />
        <input type="text" name="player3" placeholder="B" maxLength={1} />
        <input type="text" name="player4" placeholder="C" maxLength={1} />
        <input type="text" name="player5" placeholder="D" maxLength={1} />
        <input type="text" name="player6" placeholder="E" maxLength={1} />
        <input type="text" name="player7" placeholder="F" maxLength={1} />
      </InputContainer>
    </PlayersContainer>
  );
};

const PlayersContainer = styled.div`
  width: 100%;
  text-align: center;
  p {
    font-size: 12px;
    text-transform: uppercase;
    font-weight: 700;
    margin-bottom: 10px;
  }
`;

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
  padding-right: 1rem;
  padding-left: 0.5rem;

  span {
    width: 65px;
  }

  input {
    width: 30px;
    height: 30px;
    text-align: center;
    outline: 0;
    border: 1px solid gray;
    border-radius: 4px;
  }
`;

export default Players;
