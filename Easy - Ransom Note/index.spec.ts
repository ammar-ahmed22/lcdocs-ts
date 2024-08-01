import { canConstruct, ArgsType, ReturnType } from "."


describe("Ransom Note", () => {
  let testCases: ArgsType[] = [
    ["a", "b"],
    ["aa", "ab"],
    ["aa", "aab"]
  ]
  let results: ReturnType[] = [
    false,
    false,
    true
  ]
  it("has the same number of results as tests", () => {
    expect(testCases.length).toEqual(results.length);
  })

  it("solves the test cases", () => {
    for (let i = 0; i < testCases.length; i++) {
      let args = testCases[i];
      let result = results[i];
      expect(canConstruct(...args)).toBe(result);
    }
  })
  
})