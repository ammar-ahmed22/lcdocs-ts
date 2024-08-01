export type ArgsType = [string[]];
export type ReturnType = void;

function swap<T = any>(arr: T[], i: number, j: number) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

export function reverseString(s: string[]): void {
  let l = 0;
  let r = s.length - 1;
  while(l < r) {
    swap(s, l, r);
    l++;
    r--;
  }
}