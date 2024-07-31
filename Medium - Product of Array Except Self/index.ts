export type ArgsType = [number[]];
export type ReturnType = number[];

export function productExceptSelf(nums: number[]): number[] {
  let n = nums.length;
  let ans = new Array(n);
  let prefix = new Array(n);
  let suffix = new Array(n);

  for (let i = 0; i < n; i++) {
    let curr = nums[i];
    let prev = i === 0 ? 1 : prefix[i - 1];
    prefix[i] = curr * prev;
  }

  for (let i = n - 1; i >= 0; i--) {
    let curr = nums[i];
    let prev = i === n - 1 ? 1 : suffix[i + 1];
    suffix[i] = curr * prev;
  }

  for (let i = 0; i < n; i++) {
    let pre = i === 0 ? 1 : prefix[i - 1];
    let suff = i === n - 1 ? 1 : suffix[i + 1];
    ans[i] = pre * suff;
  }

  return ans;
}