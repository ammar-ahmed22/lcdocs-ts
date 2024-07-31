import { maxProfit, ArgsType, ReturnType } from "."


describe("Best Time To Buy And Sell Stock", () => {
  let testCases: ArgsType[] = [
    [[7,1,5,3,6,4]],
    [[7,6,4,3,1]]
  ]
  let results: ReturnType[] = [
    5,
    0
  ]
  it("has the same number of results as tests", () => {
    expect(testCases.length).toEqual(results.length);
  })

  it("solves the test cases", () => {
    for (let i = 0; i < testCases.length; i++) {
      let args = testCases[i];
      let result = results[i];
      expect(maxProfit(...args)).toBe(result);
    }
  })
  
})