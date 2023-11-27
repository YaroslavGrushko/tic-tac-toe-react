import { useState } from "react";
import Board from "../Board/Board";
import * as gameConsts from "../../consts/game";

import "./Game.css";

const Game = () => {
  const [squares, setSquares] = useState(
    new Array(gameConsts.BOARD_SIZE ** 2).fill(null)
  );
  const [currentPlayer, setCurrentPlayer] = useState(gameConsts.PLAYERS[0]);
  const [message, setMessage] = useState();

  return (
    <div className="game">
      <div className="message">{message}</div>
      <Board
        squares={squares}
        setSquares={setSquares}
        currentPlayer={currentPlayer}
        setCurrentPlayer={setCurrentPlayer}
        setMessage={setMessage}
      />
    </div>
  );
};

export default Game;
