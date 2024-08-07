import { minEatingSpeed, ArgsType, ReturnType } from "."


describe("Koko Eating Bananas", () => {
  let testCases: ArgsType[] = [
    [[3,6,7,11], 8],
    [[30,11,23,4,20], 5],
    [[30,11,23,4,20], 6]
  ]
  let results: ReturnType[] = [
    4,
    30,
    23
  ]
  it("has the same number of results as tests", () => {
    expect(testCases.length).toEqual(results.length);
  })

  it("solves the test cases", () => {
    for (let i = 0; i < testCases.length; i++) {
      let args = testCases[i];
      let result = results[i];
      expect(minEatingSpeed(...args)).toBe(result);
    }
  })
  
})