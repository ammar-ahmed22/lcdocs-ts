import { isValid, ArgsType, ReturnType } from "."


describe("Valid Parentheses", () => {
  let testCases: ArgsType[] = [
    ["()"],
    ["()[]{}"],
    ["(]"]
  ]
  let results: ReturnType[] = [true, true, false]
  it("has the same number of results as tests", () => {
    expect(testCases.length).toEqual(results.length);
  })

  it("solves the test cases", () => {
    for (let i = 0; i < testCases.length; i++) {
      let args = testCases[i];
      let result = results[i];
      expect(isValid(...args)).toBe(result);
    }
  })
  
})