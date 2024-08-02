export type ArgsType = [string];
export type ReturnType = boolean;

export function isValid(s: string): boolean {
  const map: Record<string, string> = {
    "{": "}",
    "(": ")",
    "[": "]"
  };
  const stack: string[] = []
  for (let c of s) {
    if ("([{".includes(c)) {
      // opening
      stack.push(map[c]);
    } else {
      let top = stack.pop();
      if (top !== c) return false;
    }
  }

  return stack.length === 0;
}