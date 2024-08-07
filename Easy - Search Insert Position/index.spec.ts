import { searchInsert, ArgsType, ReturnType } from "."


describe("Search Insert Position", () => {
  let testCases: ArgsType[] = [
    [[1,3,5,6], 5],
    [[1,3,5,6], 2],
    [[1,3,5,6], 7]
  ]
  let results: ReturnType[] = [2, 1, 4]
  it("has the same number of results as tests", () => {
    expect(testCases.length).toEqual(results.length);
  })

  it("solves the test cases", () => {
    for (let i = 0; i < testCases.length; i++) {
      let args = testCases[i];
      let result = results[i];
      expect(searchInsert(...args)).toBe(result);
    }
  })
  
})