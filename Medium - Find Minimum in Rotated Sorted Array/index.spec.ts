import { findMin, ArgsType, ReturnType } from "."


describe("Find Minimum in Rotated Sorted Array", () => {
  let testCases: ArgsType[] = [
    [[3,4,5,1,2]],
    [[4,5,6,7,0,1,2]],
    [[11,13,15,17]]
  ]
  let results: ReturnType[] = [
    1,
    0,
    11
  ]
  it("has the same number of results as tests", () => {
    expect(testCases.length).toEqual(results.length);
  })

  it("solves the test cases", () => {
    for (let i = 0; i < testCases.length; i++) {
      let args = testCases[i];
      let result = results[i];
      expect(findMin(...args)).toBe(result);
    }
  })
  
})