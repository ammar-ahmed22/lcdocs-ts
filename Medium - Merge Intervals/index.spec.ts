import { merge, ArgsType, ReturnType } from "."


describe("Merge Intervals", () => {
  let testCases: ArgsType[] = [
    [[[1,3],[2,6],[8,10],[15,18]]],
    [[[1,4],[4,5]]]
  ]
  let results: ReturnType[] = [
    [[1,6],[8,10],[15,18]],
    [[1,5]]
  ]
  it("has the same number of results as tests", () => {
    expect(testCases.length).toEqual(results.length);
  })

  it("solves the test cases", () => {
    for (let i = 0; i < testCases.length; i++) {
      let args = testCases[i];
      let result = results[i];
      expect(merge(...args)).toEqual(result);
    }
  })
  
})