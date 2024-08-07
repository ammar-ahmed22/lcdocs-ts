export type ArgsType = [number];
export type ReturnType = boolean;

export function isPerfectSquare(num: number): boolean {
  let left = 0;
  let right = num;
  while(left <= right) {
    let mid = Math.floor((left + right) / 2);
    let sq = mid * mid;
    if (sq === num) {
      return true;
    } else if (sq < num) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return false;
}