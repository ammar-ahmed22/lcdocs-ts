import { trap, ArgsType, ReturnType } from "."


describe("Trapping Rain Water", () => {
  let testCases: ArgsType[] = [
    [[0,1,0,2,1,0,1,3,2,1,2,1]],
    [[4,2,0,3,2,5]]
  ]
  let results: ReturnType[] = [6, 9]
  it("has the same number of results as tests", () => {
    expect(testCases.length).toEqual(results.length);
  })

  it("solves the test cases", () => {
    for (let i = 0; i < testCases.length; i++) {
      let args = testCases[i];
      let result = results[i];
      expect(trap(...args)).toBe(result);
    }
  })
  
})