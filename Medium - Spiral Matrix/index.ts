export type ArgsType = [number[][]];
export type ReturnType = number[];

export function spiralOrder(matrix: number[][]): number[] {
  let ans: number[] = [];

  let M = matrix.length;
  let N = matrix[0].length;

  let [RIGHT, DOWN, LEFT, UP] = [0, 1, 2, 3];
  let [
    RIGHT_WALL,
    BOTTOM_WALL,
    LEFT_WALL,
    TOP_WALL
  ] = [
    N,
    M,
    -1,
    0
  ];
  let dir = RIGHT;
  let i = 0;
  let j = 0;
  while(ans.length < (M * N)) {
    if (dir === RIGHT) {
      while (j < RIGHT_WALL) {
        ans.push(matrix[i][j]);
        j++;
      }
      j--;
      i++;
      RIGHT_WALL--;
      dir = DOWN;
    } else if (dir === DOWN) {
      while (i < BOTTOM_WALL) {
        ans.push(matrix[i][j]);
        i++;
      }
      i--;
      j--;
      BOTTOM_WALL--;
      dir = LEFT;
    } else if (dir === LEFT) {
      while(j > LEFT_WALL) {
        ans.push(matrix[i][j]);
        j--;
      }
      j++;
      i--;
      LEFT_WALL++;
      dir = UP;
    } else if (dir === UP) {
      while(i > TOP_WALL) {
        ans.push(matrix[i][j]);
        i--;
      }
      i++;
      j++;
      TOP_WALL++;
      dir = RIGHT;
    }
  }

  return ans;
}