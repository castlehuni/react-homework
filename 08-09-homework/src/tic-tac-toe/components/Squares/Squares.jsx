import { PLAYER_LIST, WINNER_COLER } from "@/tic-tac-toe/Constants";
import {
  WhosWinnerType,
  OneOfPlayerListType,
} from "@/tic-tac-toe/types/type.d";
import { func } from "prop-types";
import Square from "../Square/Square";
import SquaresStyles from "./Squares.module.css";

const Squares = ({ squares, whosWinner, onGamePlay }) => {
  return (
    <div className={SquaresStyles.Squares}>
      {squares.map((square, index) => {
        const winnerStyles = {
          backgroundColor: null,
        };

        if (whosWinner) {
          const [x, y, z, k] = whosWinner.condition;

          if (x === index || y === index || z === index || k === index) {
            whosWinner.winners === PLAYER_LIST[0]
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

Squares.propTypes = {
  squares: OneOfPlayerListType.isRequired,
  whosWinner: WhosWinnerType,
  onGamePlay: func,
};
