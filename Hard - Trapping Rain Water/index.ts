export type ArgsType = [number[]];
export type ReturnType = number;

export function trap(height: number[]): number {
  let maxLeft = new Array(height.length);
  let leftWall = 0;
  for (let i = 0; i < height.length; i++) {
    maxLeft[i] = leftWall;
    leftWall = Math.max(leftWall, height[i]);
  }

  let maxRight = new Array(height.length);
  let rightWall = 0;
  for (let i = height.length - 1; i >= 0; i--) {
    maxRight[i] = rightWall;
    rightWall = Math.max(rightWall, height[i]);
  }

  let sum = 0;
  for (let i = 0; i < height.length; i++) {
    let pot = Math.min(maxLeft[i], maxRight[i]);
    sum += Math.max(0, pot - height[i]);
  }

  return sum;
}