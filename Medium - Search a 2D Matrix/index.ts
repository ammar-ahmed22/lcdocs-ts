export type ArgsType = [number[][],number];
export type ReturnType = boolean;

export function searchMatrix(matrix: number[][], target: number): boolean {
  let m = matrix.length;
  let n = matrix[0].length;

  let top = 0;
  let bottom = m - 1;
  while(top <= bottom) {
    let rMid = Math.floor((top + bottom) / 2);
    if (matrix[rMid][0] <= target && matrix[rMid][n - 1] >= target) {
      if (matrix[rMid][0] === target || matrix[rMid][n - 1] === target) return true;
      let left = 0;
      let right = n - 1;
      while(left <= right) {
        let cMid = Math.floor((left + right) / 2);
        if (matrix[rMid][cMid] === target) return true;
        if (matrix[rMid][cMid] < target) {
          left = cMid + 1;
        } else {
          right = cMid - 1;
        }
      }
      return false;
    } else if (target < matrix[rMid][0]) {
      bottom = rMid - 1;
    } else {
      top = rMid + 1;
    }
  }

  return false;
}