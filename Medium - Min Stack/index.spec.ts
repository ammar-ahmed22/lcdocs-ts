import { MinStack, ArgsType, ReturnType } from "."


describe("Min Stack", () => {
  let testCases: ArgsType[] = [
    [["push","push","push","getMin","pop","top","getMin"], [[-2],[0],[-3],[],[],[],[]]]
  ]
  let results: ReturnType[] = [
    [null,null,null,-3,null,0,-2]
  ]
  it("has the same number of results as tests", () => {
    expect(testCases.length).toEqual(results.length);
  })

  it("solves the test cases", () => {
    for (let i = 0; i < testCases.length; i++) {
      let args = testCases[i];
      let result = results[i];
      let stack = new MinStack();
      type FuncType = "push" | "getMin" | "top" | "pop";
      for (let i = 0; i < args[0].length; i++) {
        let func = args[0][i] as FuncType;
        let arg = args[1][i][0];
        let output = stack[func](arg);
        expect(output === undefined ? null : output).toEqual(result[i]);
      }
    }
  })
  
})