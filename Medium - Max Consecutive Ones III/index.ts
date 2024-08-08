export type ArgsType = [number[],number];
export type ReturnType = number;

export function longestOnes(nums: number[], k: number): number {
  let l = 0;
  let r = 0;
  let count = 0;
  let result = 0;
  while(r < nums.length) {
    if (nums[r] === 0) {
      count++;
    }

    if (count <= k) {
      result = Math.max(result, r - l + 1)
    } else {
      if (nums[l] === 0) count--;
      l++;
    }
    r++;
  }

  return result;
}