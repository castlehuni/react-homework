import Squares from "../Squares/Squares";
import Status from "../Status/Status";
import { useState } from "react";
import {
  checkWinner,
  PLAYER,
  PLAYER_NUMBER,
  SQUARE_LIST,
} from "@/tic-tac-toe/Constants";
import BoardStyles from "./Board.module.css";

const Board = () => {
  const [squares, setSquares] = useState(SQUARE_LIST);

  function handleGamePlay(index) {
    return function () {
      if (whosWinner) {
        alert(`Game Over!! 승자는 ${whosWinner.winners}`);
        return;
      }

      setSquares((prevSquares) => {
        const nextSquares = prevSquares.map((square, squareIndex) => {
          return index === squareIndex ? nextPlayer : square;
        });
        return nextSquares;
      });
    };
  }

  const gameIndex = squares.filter(Boolean).length;

  const isPlayerOnesTurn = gameIndex % PLAYER_NUMBER === 0;

  const nextPlayer = isPlayerOnesTurn ? PLAYER.ONE : PLAYER.TWO;

  const whosWinner = checkWinner(squares);

  const isDraw = !whosWinner && squares.every(Boolean);

  return (
    <div className={BoardStyles.Board}>
      <Status
        nextPlayer={nextPlayer}
        winners={whosWinner?.winners}
        isDraw={isDraw}
      />
      <Squares
        squares={squares}
        whosWinner={whosWinner}
        onGamePlay={handleGamePlay}
      />
    </div>
  );
};
export default Board;
