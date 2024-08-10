import { PLAYER, SQUARE_LIST } from "@/tic-tac-toe/Constants";
import Square from "../Square/Square";
import SquaresStyles from "./Squares.module.css";

const Squares = () => {
  return (
    <div className={SquaresStyles.Squares}>
      {SQUARE_LIST.map((square, index) => {
        return <Square key={index}>{square}</Square>;
      })}
    </div>
  );
};
export default Squares;
