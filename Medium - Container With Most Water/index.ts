export type ArgsType = [number[]];
export type ReturnType = number;

export function maxArea(height: number[]): number {
  let maxArea = 0;
  let l = 0;
  let r = height.length - 1;
  while(l < r) {
    let minH = Math.min(height[l], height[r]);
    let d = r - l;
    maxArea = Math.max(minH * d, maxArea);
    if (height[l] <= height[r]) {
      l++;
    } else {
      r--;
    }
  }
  return maxArea;
}