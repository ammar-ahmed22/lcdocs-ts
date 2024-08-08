import { findMaxAverage, ArgsType, ReturnType } from "."


describe("Maximum Average Subarray I", () => {
  let testCases: ArgsType[] = [
    [[1,12,-5,-6,50,3], 4],
    [[5], 1],
    [[-1], 1]
  ]
  let results: ReturnType[] = [
    12.75,
    5,
    -1
  ]
  it("has the same number of results as tests", () => {
    expect(testCases.length).toEqual(results.length);
  })

  it("solves the test cases", () => {
    for (let i = 0; i < testCases.length; i++) {
      let args = testCases[i];
      let result = results[i];
      expect(findMaxAverage(...args)).toBeCloseTo(result);
    }
  })
  
})