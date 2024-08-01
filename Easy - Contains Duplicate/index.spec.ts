import { containsDuplicate, ArgsType, ReturnType } from "."


describe("Contains Duplicate", () => {
  let testCases: ArgsType[] = [
    [[1,2,3,1]],
    [[1,2,3,4]],
    [[1,1,1,3,3,4,3,2,4,2]]
  ]
  let results: ReturnType[] = [
    true,
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
      expect(containsDuplicate(...args)).toBe(result);
    }
  })
  
})