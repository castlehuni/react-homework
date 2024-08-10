import StatusStyles from "./Status.module.css";

const Status = ({ nextPlayer, winners, isDraw }) => {
  if (winners) {
    return <div className={StatusStyles.Status}>🏆승리자는 {winners}!!🏆</div>;
  }
  if (isDraw) {
    return (
      <div className={StatusStyles.Status}>
        아쉽지만 비겼네요.....😓, 한 판 더?
      </div>
    );
  }
  return <div className={StatusStyles.Status}>이번 순서: {nextPlayer}</div>;
};

export default Status;
