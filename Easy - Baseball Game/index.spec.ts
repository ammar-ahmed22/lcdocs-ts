import { calPoints, ArgsType, ReturnType } from "."


describe("Baseball Game", () => {
  let testCases: ArgsType[] = [
    [["5","2","C","D","+"]],
    [["5","-2","4","C","D","9","+","+"]],
    [["1","C"]]
  ]
  let results: ReturnType[] = [30, 27, 0]
  it("has the same number of results as tests", () => {
    expect(testCases.length).toEqual(results.length);
  })

  it("solves the test cases", () => {
    for (let i = 0; i < testCases.length; i++) {
      let args = testCases[i];
      let result = results[i];
      expect(calPoints(...args)).toBe(result);
    }
  })
  
})