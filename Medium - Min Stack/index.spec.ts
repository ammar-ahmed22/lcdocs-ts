import { push, ArgsType, ReturnType } from "."


describe("Min Stack", () => {
  let testCases: ArgsType[] = []
  let results: ReturnType[] = []
  it("has the same number of results as tests", () => {
    expect(testCases.length).toEqual(results.length);
  })

  it("solves the test cases", () => {
    for (let i = 0; i < testCases.length; i++) {
      let args = testCases[i];
      let result = results[i];
      expect(push(...args)).toBe(result);
    }
  })
  
})