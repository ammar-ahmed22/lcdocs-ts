import { maxSubArray, ArgsType, ReturnType } from "."


describe("Maximum Subarray", () => {
  let testCases: ArgsType[] = [
    [[-2,1,-3,4,-1,2,1,-5,4]],
    [[1]],
    [[5,4,-1,7,8]],
    [[-1]]
  ]
  let results: ReturnType[] = [6, 1, 23, -1]
  it("has the same number of results as tests", () => {
    expect(testCases.length).toEqual(results.length);
  })

  it("solves the test cases", () => {
    for (let i = 0; i < testCases.length; i++) {
      let args = testCases[i];
      let result = results[i];
      expect(maxSubArray(...args)).toBe(result);
    }
  })
  
})