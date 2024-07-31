export type ArgsType = [number[][]];
export type ReturnType = void;

function swap<T = any>(arr: T[], i: number, j: number) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

function swap2D<T = any>(matrix: T[][], a: [number, number], b: [number, number]) {
  let temp = matrix[a[0]][a[1]];
  matrix[a[0]][a[1]] = matrix[b[0]][b[1]];
  matrix[b[0]][b[1]] = temp;
}

function reverse<T = any>(arr: T[]) {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    swap(arr, left, right);
    left++;
    right--;
  }
}

export function rotate(matrix: number[][]): void {
  // Reverse diagonals
  for (let i = 0; i < matrix.length; i++) {
    for (let j = i; j < matrix.length; j++) {
      swap2D(matrix, [i, j], [j, i]);
    }
  }

  // Reverse rows
  for (let i = 0; i < matrix.length; i++) {
    reverse(matrix[i]);
  }
}