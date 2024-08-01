import { numJewelsInStones, ArgsType, ReturnType } from "."


describe("Jewels and Stones", () => {
  let testCases: ArgsType[] = [
    ["aA", "aAAbbbb"],
    ["z", "ZZ"]
  ]
  let results: ReturnType[] = [3, 0]
  it("has the same number of results as tests", () => {
    expect(testCases.length).toEqual(results.length);
  })

  it("solves the test cases", () => {
    for (let i = 0; i < testCases.length; i++) {
      let args = testCases[i];
      let result = results[i];
      expect(numJewelsInStones(...args)).toBe(result);
    }
  })
  
})