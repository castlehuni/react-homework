import { useState } from "react";
import { PLAYER, PLAYER_NUMBER, SQUARE_LIST } from "@/tic-tac-toe/Constants";
import Square from "../Square/Square";
import SquaresStyles from "./Squares.module.css";

const Squares = () => {
  const [squares, setSquares] = useState(SQUARE_LIST);

  function onGamePlay(index) {
    return function () {
      console.log(`index #${index}`);
    };
  }

  const gameIndex = squares.filter(Boolean).length % PLAYER_NUMBER;

  const currentPlayer = gameIndex === 0 ? PLAYER.ONE : PLAYER.TWO;

  console.log(currentPlayer);

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
