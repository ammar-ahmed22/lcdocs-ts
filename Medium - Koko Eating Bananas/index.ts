export type ArgsType = [number[],number];
export type ReturnType = number;

export function minEatingSpeed(piles: number[], h: number): number {
  let l = 1;
  let r = Math.max(...piles);
  let ans = r;
  while(l <= r) {
    let k = Math.floor((l + r) / 2);
    let time = 0;
    for (let pile of piles) {
      time += Math.ceil(pile / k);
    }
    if (time <= h) {
      ans = k;
      r = k - 1;
    } else {
      l = k + 1;
    }
  }

  return ans;
}