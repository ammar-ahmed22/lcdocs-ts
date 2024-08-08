import { longestOnes, ArgsType, ReturnType } from "."


describe("Max Consecutive Ones III", () => {
  let testCases: ArgsType[] = [
    [[1,1,1,0,0,0,1,1,1,1,0], 2],
    [[0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1], 3]
  ]
  let results: ReturnType[] = [
    6, 10
  ]
  it("has the same number of results as tests", () => {
    expect(testCases.length).toEqual(results.length);
  })

  it("solves the test cases", () => {
    for (let i = 0; i < testCases.length; i++) {
      let args = testCases[i];
      let result = results[i];
      expect(longestOnes(...args)).toBe(result);
    }
  })
  
})