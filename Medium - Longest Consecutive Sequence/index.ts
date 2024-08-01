export type ArgsType = [number[]];
export type ReturnType = number;

export function longestConsecutive(nums: number[]): number {
  let ans = 0;

  const set = new Set(nums);
  for (let num of nums) {
    let count = 1;
    if (!set.has(num - 1)) {
      // start of sequence
      let temp = num + 1;
      
      while(set.has(temp)) {
        count++;
        temp++;
      }
      
    }
    ans = Math.max(ans, count);
  }

  return ans;
}