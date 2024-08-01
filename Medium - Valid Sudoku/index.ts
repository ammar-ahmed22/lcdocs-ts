export type ArgsType = [string[][]];
export type ReturnType = boolean;

export function isValidSudoku(board: string[][]): boolean {
  const N = board.length;
  // Checking rows
  for (let i = 0; i < N; i++) {
    const set = new Set();
    for (let j = 0; j < N; j++) {
      let char = board[i][j];
      if (char !== ".") {
        if (set.has(char)) return false;
        set.add(char);
      }
    }
  }

  // Checking cols
  for (let j = 0; j < N; j++) {
    const set = new Set();
    for (let i = 0; i < N; i++) {
      let char = board[i][j];
      if (char !== ".") {
        if (set.has(char)) return false;
        set.add(char);
      }
    }
  }

  // Checking sub-boxes
  for (let box_row = 0; box_row < 3; box_row++) {
    for (let box_col = 0; box_col < 3; box_col++) {
      const set = new Set();
      for (let row = 0; row < 3; row++) {
        for (let col = 0; col < 3; col++) {
          let char = board[box_row * 3 + row][box_col * 3 + col];
          if (char !== ".") {
            if (set.has(char)) return false;
            set.add(char);
          }
        }
      }
    }
  }
  return true;
}