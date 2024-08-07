export type ArgsType = [number[]];
export type ReturnType = number;

export function findMin(nums: number[]): number {
  let left = 0;
  let right = nums.length - 1;
  let min = Number.MAX_VALUE;
  while(left <= right) {
    let mid = Math.floor((left + right) / 2);
    min = Math.min(min, nums[mid]);
    if (nums[mid] > nums[right]) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return Math.min(min, nums[left]);
}