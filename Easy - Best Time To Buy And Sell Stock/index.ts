export type ArgsType = [number[]];
export type ReturnType = number;

export function maxProfit(prices: number[]): number {
  let maxP = 0;
  let b = 0;
  let s = 0;
  while(s < prices.length) {
    let profit = prices[s] - prices[b];
    if (profit > 0) {
      maxP = Math.max(maxP, profit);
    } else {
      b = s;
    }
    s++;
  }
  return maxP;
}