import HistoryStyles from "./History.module.css";

const History = ({ gameHistory = [] }) => {
  return (
    <div className={HistoryStyles.History}>
      <ol>
        {gameHistory.map((item, index) => {
          const buttonLabel = index === 0 ? "게임 시작" : `게임 #${index}`;
          return (
            <li key={index}>
              <button type="button">{buttonLabel}</button>
            </li>
          );
        })}
      </ol>
    </div>
  );
};
export default History;
