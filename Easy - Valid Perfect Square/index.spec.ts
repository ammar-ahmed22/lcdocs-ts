import { isPerfectSquare, ArgsType, ReturnType } from "."


describe("Valid Perfect Square", () => {
  let testCases: ArgsType[] = [
    [16],
    [14]
  ]
  let results: ReturnType[] = [
    true,
    false
  ]
  it("has the same number of results as tests", () => {
    expect(testCases.length).toEqual(results.length);
  })

  it("solves the test cases", () => {
    for (let i = 0; i < testCases.length; i++) {
      let args = testCases[i];
      let result = results[i];
      expect(isPerfectSquare(...args)).toBe(result);
    }
  })
  
})