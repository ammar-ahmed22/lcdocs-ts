export type ArgsType = [number[]];
export type ReturnType = number[];

class Stack<T = any> {
  private stack: T[] = []
  
  isEmpty(): boolean {
    return this.stack.length === 0;
  }

  top(): T {
    return this.stack[this.stack.length - 1];
  }

  pop(): T | undefined {
    return this.stack.pop();
  }

  push(value: T) {
    this.stack.push(value);
  }
}

type TempIndex = {
  temp: number,
  index: number
}

export function dailyTemperatures(temperatures: number[]): number[] {
  const stack = new Stack<TempIndex>();
  const n = temperatures.length;
  const answer = new Array(n).fill(0);
  for (let i = 0; i < n; i++) {
    let t = temperatures[i];
    while(!stack.isEmpty() && t > stack.top().temp) {
      const { index } = stack.pop()!
      answer[index] = i - index;
    }
    stack.push({ temp: t, index: i });
  }
  return answer;
}