import { OneOfPlayerListType } from "@/tic-tac-toe/types/type.d";
import { number, func, arrayOf } from "prop-types";
import HistoryStyles from "./History.module.css";

const History = ({ gameHistory = [], gameIndex, timeTravel }) => {
  const handleClick = (index) => () => {
    timeTravel(index);
  };

  return (
    <div className={HistoryStyles.History}>
      <ol>
        {gameHistory.map((history, index) => {
          const buttonLabel = index === 0 ? "게임 시작" : `게임 #${index}`;
          const isDisable = gameIndex === index;
          return (
            <li key={index}>
              <button
                type="button"
                disabled={isDisable}
                onClick={handleClick(index)}
              >
                {buttonLabel}
              </button>
            </li>
          );
        })}
      </ol>
    </div>
  );
};
export default History;

History.propTypes = {
  gameHistory: arrayOf(OneOfPlayerListType),
  gameIndex: number,
  timeTravel: func,
};
