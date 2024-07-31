import { productExceptSelf, ArgsType, ReturnType } from "."


describe("Product of Array Except Self", () => {
  let testCases: ArgsType[] = [
    [[1,2,3,4]],
    [[-1,1,0,-3,3]]
  ]
  let results: ReturnType[] = [
    [24,12,8,6],
    [0,0,9,0,0]
  ]
  it("has the same number of results as tests", () => {
    expect(testCases.length).toEqual(results.length);
  })

  it("solves the test cases", () => {
    for (let i = 0; i < testCases.length; i++) {
      let args = testCases[i];
      let result = results[i];
      expect(productExceptSelf(...args).toString()).toEqual(result.toString());
    }
  })
  
})