import { longestConsecutive, ArgsType, ReturnType } from "."


describe("Longest Consecutive Sequence", () => {
  let testCases: ArgsType[] = [
    [[100,4,200,1,3,2]],
    [[0,3,7,2,5,8,4,6,0,1]],
    [[0]]
  ]
  let results: ReturnType[] = [
    4,
    9,
    1
  ]
  it("has the same number of results as tests", () => {
    expect(testCases.length).toEqual(results.length);
  })

  it("solves the test cases", () => {
    for (let i = 0; i < testCases.length; i++) {
      let args = testCases[i];
      let result = results[i];
      expect(longestConsecutive(...args)).toBe(result);
    }
  })
  
})