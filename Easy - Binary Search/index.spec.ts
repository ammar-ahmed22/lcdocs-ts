import { search, ArgsType, ReturnType } from "."


describe("Binary Search", () => {
  let testCases: ArgsType[] = [
    [[-1,0,3,5,9,12], 9],
    [[-1,0,3,5,9,12], 2]
  ]
  let results: ReturnType[] = [
    4, -1
  ]
  it("has the same number of results as tests", () => {
    expect(testCases.length).toEqual(results.length);
  })

  it("solves the test cases", () => {
    for (let i = 0; i < testCases.length; i++) {
      let args = testCases[i];
      let result = results[i];
      expect(search(...args)).toBe(result);
    }
  })
  
})