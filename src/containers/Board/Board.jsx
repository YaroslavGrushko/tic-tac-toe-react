import * as gameConsts from "../../consts/game";
import "./Board.css";

const Board = (props) => {
  const { squares, setSquares, currentPlayer, setCurrentPlayer, setMessage } =
    props;
  const setCheck = (index) => {
    const updatedSquares = [...squares];
    updatedSquares[index] = currentPlayer;
    setSquares(updatedSquares);

    // player X
    const squaresX = updatedSquares.map((value) =>
      value === gameConsts.PLAYERS[1] ? null : value
    );

    const isWinnerX = isWinner(squaresX);
    if (isWinnerX) {
      setMessage("X is winner!");
      return;
    }

    // player O
    const squaresO = updatedSquares.map((value) =>
      value === gameConsts.PLAYERS[0] ? null : value
    );
    const isWinnerO = isWinner(squaresO);
    if (isWinnerO) {
      setMessage("O is winner!");
      return;
    }

    const nextPlayer =
      currentPlayer === gameConsts.PLAYERS[0]
        ? gameConsts.PLAYERS[1]
        : gameConsts.PLAYERS[0];
    setCurrentPlayer(nextPlayer);
  };

  const isWinner = (playerSquares) => {
    const count = gameConsts.WINNING_STRATEGIES.length;
    for (let i = 0; i < count; i++) {
      const line = gameConsts.WINNING_STRATEGIES[i];
      if (
        playerSquares[line[0]] &&
        playerSquares[line[1]] &&
        playerSquares[line[2]]
      ) {
        return true;
      }
    }
    return false;
  };

  return (
    <div className="board">
      {squares.map((value, index) => (
        <div className="square" key={index} onClick={() => setCheck(index)}>
          {value}
        </div>
      ))}
    </div>
  );
};

export default Board;
