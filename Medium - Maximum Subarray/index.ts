export type ArgsType = [number[]];
export type ReturnType = number;

export function maxSubArray(nums: number[]): number {
  let sum = 0;
  let max = Number.NEGATIVE_INFINITY;
  for (let num of nums) {
    sum += num;
    max = Math.max(max, sum);
    if (sum < 0) sum = 0;
  }

  return max;
}