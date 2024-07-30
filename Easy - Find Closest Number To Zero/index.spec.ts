import { findClosestNumber, ArgsType, ReturnType } from "."


describe("Find Closest Number To Zero", () => {
  let testCases: ArgsType[] = [
    [[-4,-2,1,4,8]],
    [[2,-1,1]]
  ]
  let results: ReturnType[] = [
    1,
    1
  ]
  it("has the same number of results as tests", () => {
    expect(testCases.length).toEqual(results.length);
  })

  it("solves the test cases", () => {
    for (let i = 0; i < testCases.length; i++) {
      let args = testCases[i];
      let result = results[i];
      expect(findClosestNumber(...args)).toBe(result);
    }
  })
  
})