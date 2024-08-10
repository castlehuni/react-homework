import "./styles/global.css";
import { useState } from "react";
import {
  checkWinner,
  PLAYER,
  PLAYER_NUMBER,
  SQUARE_LIST,
} from "@/tic-tac-toe/Constants";
import GamesStyles from "./Games.module.css";
import Board from "./components/Board/Board";
import History from "./components/History/History";

const Games = () => {
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
    <div className={GamesStyles.Games}>
      <Board
        squares={squares}
        nextPlayer={nextPlayer}
        isDraw={isDraw}
        whosWinner={whosWinner}
        onGamePlay={handleGamePlay}
      />
      <History />
    </div>
  );
};

export default Games;
