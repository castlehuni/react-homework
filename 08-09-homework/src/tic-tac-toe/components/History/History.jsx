import HistoryStyles from "./History.module.css";

const History = () => {
  return (
    <div className={HistoryStyles.History}>
      <ol>
        <li>
          <button type="button">게임 시작</button>
        </li>
      </ol>
    </div>
  );
};
export default History;
