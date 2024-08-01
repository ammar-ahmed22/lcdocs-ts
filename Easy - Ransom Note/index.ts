export type ArgsType = [string,string];
export type ReturnType = boolean;

export function canConstruct(ransomNote: string, magazine: string): boolean {
  const map = new Map<string, number>();
  for (let c of magazine) {
    map.set(c, (map.get(c) ?? 0) + 1);
  }

  for (let c of ransomNote) {
    if (!map.has(c)) return false;
    let count = map.get(c)!;
    count--;
    if (count < 0) return false;
    map.set(c, count);
  }

  for (let v of map.values()) {
    if (v < 0) return false;
  }
  return true;
}