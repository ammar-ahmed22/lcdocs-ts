export type ArgsType = [string];
export type ReturnType = number;

export function lengthOfLongestSubstring(s: string): number {
  let max = 0;
  let l = 0;
  let r = 0;
  let set = new Set<string>();

  while(r < s.length) {
    if (!set.has(s[r])) {
      max = Math.max(max, r - l + 1)
      set.add(s[r]);
      r++;
    } else {
      set.delete(s[l]);
      l++;
    }
  }

  return max;
}