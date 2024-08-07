import { searchMatrix, ArgsType, ReturnType } from "."


describe("Search a 2D Matrix", () => {
  let testCases: ArgsType[] = [
    [[[1,3,5,7],[10,11,16,20],[23,30,34,60]], 3],
    [[[1,3,5,7],[10,11,16,20],[23,30,34,60]], 13]
  ]
  let results: ReturnType[] = [
    true, false
  ]
  it("has the same number of results as tests", () => {
    expect(testCases.length).toEqual(results.length);
  })

  it("solves the test cases", () => {
    for (let i = 0; i < testCases.length; i++) {
      let args = testCases[i];
      let result = results[i];
      expect(searchMatrix(...args)).toBe(result);
    }
  })
  
})