import { romanToInt, ArgsType, ReturnType } from "."


describe("Roman To Integer", () => {
  let testCases: ArgsType[] = [
    ["III"],
    ["LVIII"],
    ["MCMXCIV"]
  ]
  let results: ReturnType[] = [
    3,
    58,
    1994
  ]
  it("has the same number of results as tests", () => {
    expect(testCases.length).toEqual(results.length);
  })

  it("solves the test cases", () => {
    for (let i = 0; i < testCases.length; i++) {
      let args = testCases[i];
      let result = results[i];
      expect(romanToInt(...args)).toBe(result);
    }
  })
  
})