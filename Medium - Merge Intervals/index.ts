export type ArgsType = [number[][]];
export type ReturnType = number[][];

export function merge(intervals: number[][]): number[][] {
  let ans: number[][] = [];
  intervals.sort((a, b) => a[0] - b[0]);
  let n = intervals.length;
  let i = 0;
  while(i < n) {
    let curr = intervals[i];
    let temp = [curr[0]];
    let max = curr[1];
    i++;
    while (i < n && max >= intervals[i][0]) {
      max = Math.max(max, intervals[i][1]);
      i++;
    }
    temp.push(max);
    ans.push(temp);
  }
  return ans;
}