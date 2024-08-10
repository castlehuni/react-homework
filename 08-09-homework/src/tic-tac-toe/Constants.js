export const PLAYER = {
  ONE: "🌞",
  TWO: "🌝",
};

export const PLAYER_LIST = Object.values(PLAYER);

export const PLAYER_NUMBER = Object.keys(PLAYER).length;

export const SQUARE_LIST = Array(16).fill(null);

export const WiNNER_CONDITION = [
  [0, 1, 2, 3],
  [4, 5, 6, 7],
  [8, 9, 10, 11],
  [12, 13, 14, 15],
  [0, 4, 8, 12],
  [1, 5, 9, 13],
  [2, 6, 10, 14],
  [3, 7, 11, 15],
  [0, 5, 10, 15],
  [3, 6, 9, 12],
];

export const checkWinner = (squares) => {
  let winnerInfo = null;

  for (const [x, y, z, k] of WiNNER_CONDITION) {
    const winners = squares[x];

    if (
      winners &&
      winners === squares[y] &&
      winners === squares[z] &&
      winners === squares[k]
    ) {
      console.log("Game Over");
      winnerInfo = {
        winners,
        condition: [x, y, z, k],
      };

      break;
    }
  }
  return winnerInfo;
};

export const WINNER_COLER = {
  SUN: "rgb(245, 243, 132)",
  MOON: "rgb(43, 43, 43)",
};
