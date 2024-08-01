import { sortedSquares, ArgsType, ReturnType } from "."


describe("Squares of a Sorted Array", () => {
  let testCases: ArgsType[] = [
    [[-4,-1,0,3,10]],
    [[-7,-3,2,3,11]]
  ]
  let results: ReturnType[] = [
    [0,1,9,16,100],
    [4,9,9,49,121]
  ]
  it("has the same number of results as tests", () => {
    expect(testCases.length).toEqual(results.length);
  })

  it("solves the test cases", () => {
    for (let i = 0; i < testCases.length; i++) {
      let args = testCases[i];
      let result = results[i];
      expect(sortedSquares(...args)).toEqual(result);
    }
  })
  
})