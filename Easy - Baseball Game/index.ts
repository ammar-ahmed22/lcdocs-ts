export type ArgsType = [string[]];
export type ReturnType = number;

export function calPoints(operations: string[]): number {
  let stack: number[] = [];
  for (let op of operations) {
    if (op === "+") {
      let a = stack[stack.length - 1] ?? 0;
      let b = stack[stack.length - 2] ?? 0;
      stack.push(a + b)
    } else if (op === "D") {
      let v = stack[stack.length - 1] ?? 0;
      stack.push(v * 2);
    } else if (op === "C") {
      stack.pop();
    } else {
      stack.push(parseInt(op));
    }
  }

  let sum = 0;
  for (let num of stack) {
    sum += num;
  }
  return sum;
}