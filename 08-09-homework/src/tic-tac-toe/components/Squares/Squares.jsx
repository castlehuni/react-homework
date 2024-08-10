import { useState } from "react";
import { PLAYER, SQUARE_LIST } from "@/tic-tac-toe/Constants";
import Square from "../Square/Square";
import SquaresStyles from "./Squares.module.css";

const Squares = () => {
  const [value, setValue] = useState("");

  const handleclick = () => {
    setValue(PLAYER.ONE);
  };

  return (
    <div className={SquaresStyles.Squares}>
      {SQUARE_LIST.map((square, index) => {
        return (
          <Square onPlay={handleclick} key={index}>
            {value}
          </Square>
        );
      })}
    </div>
  );
};
export default Squares;
