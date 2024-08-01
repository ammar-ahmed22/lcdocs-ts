export type ArgsType = [string,string];
export type ReturnType = number;

export function numJewelsInStones(jewels: string, stones: string): number {
  const set = new Set(jewels);
  let ans = 0;
  for (let stone of stones) {
    if (set.has(stone)) ans++;
  }
  return ans;
}