import { lengthOfLongestSubstring, ArgsType, ReturnType } from "."


describe("Longest Substring Without Repeating Characters", () => {
  let testCases: ArgsType[] = [
    ["abcabcbb"],
    ["bbbbb"],
    ["pwwkew"]
  ]
  let results: ReturnType[] = [3, 1, 3]
  it("has the same number of results as tests", () => {
    expect(testCases.length).toEqual(results.length);
  })

  it("solves the test cases", () => {
    for (let i = 0; i < testCases.length; i++) {
      let args = testCases[i];
      let result = results[i];
      expect(lengthOfLongestSubstring(...args)).toBe(result);
    }
  })
  
})