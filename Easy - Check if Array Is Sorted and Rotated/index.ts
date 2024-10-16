export type ArgsType = [number[]];
export type ReturnType = boolean;

export function check(nums: number[]): boolean {
  let rot = 0;
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] > nums[i + 1]) {
      rot = i + 1;
      break;
    }
  }

  let k = 0;
  let i = rot;
  while(k < nums.length - 1) {
    let curr = nums[i];
    let next = nums[(i + 1) % nums.length];
    if (next >= curr) {
      i = (i + 1) % nums.length;
      k++;
    } else {
      return false;
    }
  }
  return true
}