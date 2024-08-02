export type ArgsType = [string[]];
export type ReturnType = number;

function evaluate(operation: string, a: number, b: number): number {
  switch(operation) {
    case "+":
      return a + b;
    case "-":
      return b - a;
    case "*":
      return a * b;
    case "/":
      return Math.trunc(b / a);
    default:
      return 0;
  }
}

export function evalRPN(tokens: string[]): number {
  let stack: number[] = [];
  for (let token of tokens) {
    if ("+*/-".includes(token)) {
      // operand
      let a = stack.pop()!;
      let b = stack.pop()!;
      stack.push(evaluate(token, a, b))
    } else {
      stack.push(parseInt(token))
    }
  }

  return stack[stack.length - 1];
}