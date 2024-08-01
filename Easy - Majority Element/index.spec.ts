import { majorityElement, ArgsType, ReturnType } from "."


describe("Majority Element", () => {
  let testCases: ArgsType[] = [
    [[3, 2, 3]],
    [[2, 2, 1, 1, 1, 2, 2]],
    [[1,1,1,1,1,1,8]],
    [[6,5,5]]
  ]
  let results: ReturnType[] = [
    3,
    2,
    1,
    5
  ]
  it("has the same number of results as tests", () => {
    expect(testCases.length).toEqual(results.length);
  })

  it("solves the test cases", () => {
    for (let i = 0; i < testCases.length; i++) {
      let args = testCases[i];
      let result = results[i];
      expect(majorityElement(...args)).toBe(result);
    }
  })
  
})