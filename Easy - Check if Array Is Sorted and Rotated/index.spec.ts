import { check, ArgsType, ReturnType } from "."


describe("Check if Array Is Sorted and Rotated", () => {
  let testCases: ArgsType[] = [
    [[3,4,5,1,2]],
    [[2,1,3,4]],
    [[1,2,3]],
    [[3,4,5,1,1,2]]
  ]
  let results: ReturnType[] = [
    true,
    false,
    true,
    true,
  ]
  it("has the same number of results as tests", () => {
    expect(testCases.length).toEqual(results.length);
  })

  it("solves the test cases", () => {
    for (let i = 0; i < testCases.length; i++) {
      let args = testCases[i];
      let result = results[i];
      expect(check(...args)).toBe(result);
    }
  })
  
})