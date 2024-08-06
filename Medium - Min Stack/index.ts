export type ArgsType = [string[], number[][]];
export type ReturnType = (number | null)[];

export class MinStack {
  private stack: number[] = [];
  private min: number[] = [];
  constructor() {}

  private minTop(): number {
    return this.min[this.min.length - 1];
  }

  private isMinEmpty(): boolean {
    return !this.min.length;
  }

  push(val: number): void {
    this.stack.push(val);
    if (!this.isMinEmpty()) { // min is NOT empty
      if (val <= this.minTop()) {
        this.min.push(val);
      }
    } else {
      this.min.push(val);
    }
  }

  pop(): void {
    if (this.top() === this.minTop()) {
      this.min.pop();
    }
    this.stack.pop();
  }

  top(): number {
    return this.stack[this.stack.length - 1];
  }

  getMin(): number {
    return this.minTop();
  }
}

export function push(val: number): void {

}