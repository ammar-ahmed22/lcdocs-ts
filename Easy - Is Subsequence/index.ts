export type ArgsType = [string,string];
export type ReturnType = boolean;

export function isSubsequence(s: string, t: string): boolean {
  if (s.length > t.length) return false;
  let i = 0;
  let j = 0;
  while(j < t.length) {
    if (i >= s.length) {
      return true;
    }
    if (s[i] === t[j]) {
      i++;
    }
    j++;
  }
  return i === s.length;
}