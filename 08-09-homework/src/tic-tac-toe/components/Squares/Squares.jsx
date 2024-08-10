import { useState } from "react";
import {
  checkWinner,
  PLAYER,
  PLAYER_NUMBER,
  SQUARE_LIST,
} from "@/tic-tac-toe/Constants";
import Square from "../Square/Square";
import SquaresStyles from "./Squares.module.css";

const Squares = () => {
  const [squares, setSquares] = useState(SQUARE_LIST);

  function onGamePlay(index) {
    return function () {
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
  console.log(whosWinner);

  return (
    <div className={SquaresStyles.Squares}>
      {squares.map((square, index) => {
        return (
          <Square onPlay={onGamePlay(index)} key={index}>
            {square}
          </Square>
        );
      })}
    </div>
  );
};
export default Squares;
