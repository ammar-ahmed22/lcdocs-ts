export type ArgsType = [string];
export type ReturnType = number;

export function romanToInt(s: string): number {
  const romans: Record<string, number> = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  }

  let result = romans[s[s.length - 1]];

  for (let i = 1; i < s.length; i++) {
    let curr = s[i];
    let prev = s[i - 1];
    if (romans[prev] >= romans[curr]) {
      result += romans[prev];
    } else {
      result -= romans[prev];
    }
  }

  return result;
}