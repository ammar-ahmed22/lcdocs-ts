import { spiralOrder, ArgsType, ReturnType } from "."


describe("Spiral Matrix", () => {
  let testCases: ArgsType[] = [
    [[[1,2,3],[4,5,6],[7,8,9]]],
    [[[1,2,3,4],[5,6,7,8],[9,10,11,12]]]
  ]
  let results: ReturnType[] = [
    [1,2,3,6,9,8,7,4,5],
    [1,2,3,4,8,12,11,10,9,5,6,7]
  ]
  it("has the same number of results as tests", () => {
    expect(testCases.length).toEqual(results.length);
  })

  it("solves the test cases", () => {
    for (let i = 0; i < testCases.length; i++) {
      let args = testCases[i];
      let result = results[i];
      expect(spiralOrder(...args)).toEqual(result);
    }
  })
  
})