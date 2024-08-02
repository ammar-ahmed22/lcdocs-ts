import { maxArea, ArgsType, ReturnType } from "."


describe("Container With Most Water", () => {
  let testCases: ArgsType[] = [
    [[1,8,6,2,5,4,8,3,7]],
    [[1, 1]]
  ]
  let results: ReturnType[] = [
    49,
    1
  ]
  it("has the same number of results as tests", () => {
    expect(testCases.length).toEqual(results.length);
  })

  it("solves the test cases", () => {
    for (let i = 0; i < testCases.length; i++) {
      let args = testCases[i];
      let result = results[i];
      expect(maxArea(...args)).toBe(result);
    }
  })
  
})