import { rotate, ArgsType, ReturnType } from "."


describe("Rotate Image", () => {
  let testCases: ArgsType[] = [
    [[[1,2,3],[4,5,6],[7,8,9]]],
    [[[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]]
  ]
  let results: (number[][])[] = [
    [[7,4,1],[8,5,2],[9,6,3]],
    [[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]
  ]
  // it("has the same number of results as tests", () => {
  //   expect(testCases.length).toEqual(results.length);
  // })

  it("solves the test cases", () => {
    for (let i = 0; i < testCases.length; i++) {
      let args = testCases[i];
      let result = results[i];
      rotate(...args);
      expect(args[0]).toEqual(result);
    }
  })
  
})