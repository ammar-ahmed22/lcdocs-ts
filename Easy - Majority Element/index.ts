export type ArgsType = [number[]];
export type ReturnType = number;

export function majorityElement(nums: number[]): number {
  let ans = -1;
  let count = 0;
  
  for (let num of nums) {
    if (count === 0) {
      ans = num;
    }

    if (ans === num) {
      count++;
    } else {
      count--;
    }
  }

  return ans;
}