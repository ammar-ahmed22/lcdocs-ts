import { twoSum, ArgsType, ReturnType } from "."


describe("Two Sum II Input Array Is Sorted", () => {
  let testCases: ArgsType[] = [
    [[2, 7, 11, 15], 9],
    [[2, 3, 4], 6],
    [[-1, 0], -1]
  ]
  let results: ReturnType[] = [
    [1, 2],
    [1, 3],
    [1, 2]
  ]
  it("has the same number of results as tests", () => {
    expect(testCases.length).toEqual(results.length);
  })

  it("solves the test cases", () => {
    for (let i = 0; i < testCases.length; i++) {
      let args = testCases[i];
      let result = results[i];
      expect(twoSum(...args)).toEqual(result);
    }
  })
  
})