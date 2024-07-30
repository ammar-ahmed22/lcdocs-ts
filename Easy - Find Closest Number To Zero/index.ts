export type ArgsType = [number[]];
export type ReturnType = number;

export function findClosestNumber(nums: number[]): number {
  let result = nums[0];
  for (let num of nums) {
    if (Math.abs(num) < Math.abs(result)) {
      result = num;
    }
  }

  if (result < 0) {
    for (let num of nums) {
      if (Math.abs(result) === num) {
        return Math.abs(result);
      }
    }
    return result
  }
  return result;
}