import { isSubsequence, ArgsType, ReturnType } from "."


describe("Is Subsequence", () => {
  let testCases: ArgsType[] = [
    ["abc", "ahbgdc"],
    ["axc", "ahbgdc"]
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
      expect(isSubsequence(...args)).toBe(result);
    }
  })
  
})