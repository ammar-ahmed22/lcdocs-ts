export type ArgsType = [string[]];
export type ReturnType = string[][];

export function groupAnagrams(strs: string[]): string[][] {
  const map = new Map<string, string[]>();
  for (let str of strs) {
    let charCount = new Array(26).fill(0);
    for (let c of str) {
      charCount[c.charCodeAt(0) - 97]++;
    }
    let charCountStr = charCount.join(",");
    if (map.has(charCountStr)) {
      map.set(charCountStr, [...map.get(charCountStr)!, str])
    } else {
      map.set(charCountStr, [str]);
    }
  }
  
  let ans: string[][] = [];
  for (let value of map.values()) {
    ans.push(value);
  }
  return ans;
}