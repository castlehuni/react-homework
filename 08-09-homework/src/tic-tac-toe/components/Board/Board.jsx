import {
  OneOfPlayerListType,
  OneOfPlayerType,
  WhosWinnerType,
} from "@/tic-tac-toe/types/type.d";
import { bool, func } from "prop-types";
import Squares from "../Squares/Squares";
import Status from "../Status/Status";
import BoardStyles from "./Board.module.css";

const Board = ({ squares, nextPlayer, isDraw, whosWinner, onGamePlay }) => {
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
        onGamePlay={onGamePlay}
      />
    </div>
  );
};
export default Board;

Board.propTypes = {
  squares: OneOfPlayerListType,
  nextPlayer: OneOfPlayerType.isRequired,
  isDraw: bool,
  whosWinner: WhosWinnerType,
  onGamePlay: func,
};
