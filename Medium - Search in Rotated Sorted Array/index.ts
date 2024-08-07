export type ArgsType = [number[],number];
export type ReturnType = number;

export function search(nums: number[], target: number): number {
  let n = nums.length;
  let l = 0;
  let r = n - 1
  // Find pivot index
  while(l < r) {
    let m = Math.floor((l + r) / 2);
    if (nums[m] > nums[r]) {
      l = m + 1;
    } else {
      r = m;
    }
  }

  let pivot = l;

  if (pivot === 0) {
    l = 0;
    r = n - 1;
  } else if (nums[0] <= target && nums[pivot - 1] >= target) {
    l = 0;
    r = pivot - 1;
  } else {
    l = pivot;
    r = n - 1;
  }

  // Find value
  while(l <= r) {
    let m = Math.floor((l + r) / 2);
    if (nums[m] === target) return m;
    if (nums[m] > target) {
      r = m - 1;
    } else {
      l = m + 1;
    }
  }
  return -1;
}