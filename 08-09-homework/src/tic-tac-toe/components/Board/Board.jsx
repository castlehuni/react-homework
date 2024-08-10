import Squares from "../Squares/Squares";
import Status from "../Status/Status";
import BoardStyles from "./Board.module.css";

const Board = () => {
  return (
    <div className={BoardStyles.Board}>
      <Status />
      <Squares />
    </div>
  );
};
export default Board;
