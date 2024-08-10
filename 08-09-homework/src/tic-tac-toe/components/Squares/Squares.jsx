import { useState } from "react";
import {
  checkWinner,
  PLAYER,
  PLAYER_NUMBER,
  SQUARE_LIST,
  WINNER_COLER,
} from "@/tic-tac-toe/Constants";
import Square from "../Square/Square";
import SquaresStyles from "./Squares.module.css";

const Squares = () => {
  const [squares, setSquares] = useState(SQUARE_LIST);

  function onGamePlay(index) {
    return function () {
      if (whosWinner) {
        alert(`Game Over!! 승자는 ${whosWinner.winners}`);
        return;
      }

      setSquares((prevSquares) => {
        const nextSquares = prevSquares.map((square, squareIndex) => {
          return index === squareIndex ? currentPlayer : square;
        });
        return nextSquares;
      });
    };
  }

  const gameIndex = squares.filter(Boolean).length % PLAYER_NUMBER;

  const currentPlayer = gameIndex === 0 ? PLAYER.ONE : PLAYER.TWO;

  const whosWinner = checkWinner(squares);

  return (
    <div className={SquaresStyles.Squares}>
      {squares.map((square, index) => {
        const winnerStyles = {
          backgroundColor: null,
        };

        if (whosWinner) {
          const [x, y, z, k] = whosWinner.condition;

          if (x === index || y === index || z === index || k === index) {
            whosWinner.winners === PLAYER.ONE
              ? (winnerStyles.backgroundColor = WINNER_COLER.SUN)
              : (winnerStyles.backgroundColor = WINNER_COLER.MOON);
          }
        }
        return (
          <Square onPlay={onGamePlay(index)} key={index} style={winnerStyles}>
            {square}
          </Square>
        );
      })}
    </div>
  );
};
export default Squares;
