export type ArgsType = [number[],number];
export type ReturnType = number[];

export function twoSum(nums: number[], target: number): number[] {
  const map = new Map<number, number>();
  for (let i = 0; i < nums.length; i++) {
    map.set(nums[i], i);
  }

  for (let i = 0; i < nums.length; i++) {
    let t = target - nums[i];
    let idx = map.get(t);
    if (idx && idx !== i) {
      return [idx, i];
    }
  }
  return []
}