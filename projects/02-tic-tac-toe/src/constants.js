const TURNS = {
  X: '❌',
  O: '⚪'
};

const WINNER_COMBOS = [
  [0, 1, 2], // Horizontal
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6], // Vertical
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8], // Diagonal
  [2, 4, 6]
];

export { TURNS, WINNER_COMBOS };
