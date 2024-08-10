import "./styles/global.css";
import GamesStyles from "./Games.module.css";
import Board from "./components/Board/Board";
import History from "./components/History/History";

const Games = () => {
  return (
    <div className={GamesStyles.Games}>
      <Board />
      <History />
    </div>
  );
};

export default Games;
