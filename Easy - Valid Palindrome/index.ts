export type ArgsType = [string];
export type ReturnType = boolean;

export function isPalindrome(s: string): boolean {
  let regex = /[a-zA-Z\d]/
  let l = 0;
  let r = s.length - 1;
  while (l <= r) {
    if (!regex.test(s[l])) {
      l++;
      continue;
    }

    if (!regex.test(s[r])) {
      r--;
      continue;
    }

    if (s[l].toLowerCase() !== s[r].toLowerCase()) return false;
    l++;
    r--;
  }

  return true;
}
