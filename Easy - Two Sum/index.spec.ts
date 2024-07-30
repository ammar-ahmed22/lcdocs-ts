import { twoSum, ArgsType, ReturnType } from "."


describe("Two Sum", () => {
  let testCases: ArgsType[] = [
    [[2,7,11,15], 9],
    [[3,2,4], 6],
    [[3, 3], 6]
  ]
  let results: ReturnType[] = [
    [0, 1],
    [1, 2],
    [0, 1]
  ]
  it("has the same number of results as tests", () => {
    expect(testCases.length).toEqual(results.length);
  })

  it("solves the test cases", () => {
    for (let i = 0; i < testCases.length; i++) {
      let args = testCases[i];
      let result = results[i];
      expect(twoSum(...args).sort()).toEqual(result.sort());
    }
  })
  
})