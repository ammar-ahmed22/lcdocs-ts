import { threeSum, ArgsType, ReturnType } from "."


describe("3Sum", () => {
  let testCases: ArgsType[] = [
    [[-1,0,1,2,-1,-4]],
    [[0, 1, 1]],
    [[0, 0, 0]]
  ]
  let results: ReturnType[] = [
    [[-1, -1, 2], [-1, 0, 1]],
    [],
    [[0, 0, 0]]
  ]
  it("has the same number of results as tests", () => {
    expect(testCases.length).toEqual(results.length);
  })

  it("solves the test cases", () => {
    for (let i = 0; i < testCases.length; i++) {
      let args = testCases[i];
      let result = results[i];
      expect(threeSum(...args).flat().sort()).toEqual(result.flat().sort());
    }
  })
  
})