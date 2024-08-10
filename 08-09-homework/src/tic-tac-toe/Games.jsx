import "./styles/global.css";
import { useState } from "react";
import {
  checkWinner,
  PLAYER,
  PLAYER_NUMBER,
  SQUARE_LIST,
} from "@/tic-tac-toe/Constants";
import GamesStyles from "./Games.module.css";
import Board from "./components/Board/Board";
import History from "./components/History/History";

const Games = () => {
  const [gameHistory, setGameHistory] = useState([SQUARE_LIST]);

  const [gameIndex, setGameIndex] = useState(0);

  function handleGamePlay(index) {
    return function () {
      if (whosWinner) {
        if (
          confirm(
            `Game Over!! 승자는 ${whosWinner.winners}\n 다시 하시겠습니까?`
          )
        ) {
          setGameHistory([SQUARE_LIST]);
          setGameIndex(0);
          return;
        } else return;
      }

      const nextGameIndex = gameIndex + 1;

      setGameIndex(nextGameIndex);

      const nextSquares = currentSquares.map((square, squareIndex) => {
        return index === squareIndex ? nextPlayer : square;
      });

      const nextGameHistory = [
        ...gameHistory.slice(0, nextGameIndex),
        nextSquares,
      ];

      setGameHistory(nextGameHistory);
    };
  }

  function handleTimeTravel(index) {
    setGameIndex(index);
  }

  const currentSquares = gameHistory[gameIndex];

  const isPlayerOnesTurn =
    currentSquares.filter(Boolean).length % PLAYER_NUMBER === 0;

  const nextPlayer = isPlayerOnesTurn ? PLAYER.ONE : PLAYER.TWO;

  const whosWinner = checkWinner(currentSquares);

  const isDraw = !whosWinner && currentSquares.every(Boolean);

  return (
    <div className={GamesStyles.Games}>
      <Board
        squares={currentSquares}
        nextPlayer={nextPlayer}
        isDraw={isDraw}
        whosWinner={whosWinner}
        onGamePlay={handleGamePlay}
      />
      <History
        gameHistory={gameHistory}
        gameIndex={gameIndex}
        timeTravel={handleTimeTravel}
      />
    </div>
  );
};

export default Games;
