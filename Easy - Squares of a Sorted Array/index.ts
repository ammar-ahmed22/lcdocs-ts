export type ArgsType = [number[]];
export type ReturnType = number[];

export function sortedSquares(nums: number[]): number[] {
  let n = nums.length;
  let output = new Array(n);

  let l = 0;
  let r = n - 1;
  let i = n - 1;
  while(l <= r) {
    let value: number;
    let left = nums[l] * nums[l];
    let right = nums[r] * nums[r];
    if (left >= right) {
      value = left;
      l++;
    } else {
      value = right;
      r--;
    }
    output[i] = value;
    i--;
  }
  return output;
}