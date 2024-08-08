export type ArgsType = [number[],number];
export type ReturnType = number;

export function findMaxAverage(nums: number[], k: number): number {
  let n = nums.length;  

  let curr_sum = 0;
  for (let i = 0; i < k; i++) {
    curr_sum += nums[i];
  }

  let max = curr_sum / k;

  for (let i = k; i < n; i++) {
    curr_sum += nums[i];
    curr_sum -= nums[i - k];
    max = Math.max(curr_sum / k, max);
  }
  
  return max;
}

