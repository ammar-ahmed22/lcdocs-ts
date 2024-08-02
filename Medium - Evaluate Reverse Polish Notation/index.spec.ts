import { evalRPN, ArgsType, ReturnType } from "."


describe("Evaluate Reverse Polish Notation", () => {
  let testCases: ArgsType[] = [
    [["2","1","+","3","*"]],
    [["4","13","5","/","+"]],
    [["10","6","9","3","+","-11","*","/","*","17","+","5","+"]]
  ]
  let results: ReturnType[] = [9, 6, 22]
  it("has the same number of results as tests", () => {
    expect(testCases.length).toEqual(results.length);
  })

  it("solves the test cases", () => {
    for (let i = 0; i < testCases.length; i++) {
      let args = testCases[i];
      let result = results[i];
      expect(evalRPN(...args)).toBe(result);
    }
  })
  
})