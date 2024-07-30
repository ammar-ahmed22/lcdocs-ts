import { mergeAlternately, ArgsType, ReturnType } from "."


describe("Merge Strings Alternately", () => {
  let testCases: ArgsType[] = [
    ["abc", "pqr"],
    ["ab", "pqrs"],
    ["abcd", "pq"]
  ];
  let results: ReturnType[] = [
    "apbqcr",
    "apbqrs",
    "apbqcd"
  ];
  it("has the same number of results as tests", () => {
    expect(testCases.length).toEqual(results.length);
  })

  it("solves the test cases", () => {
    for (let i = 0; i < testCases.length; i++) {
      let args = testCases[i];
      let result = results[i];
      expect(mergeAlternately(...args)).toBe(result);
    }
  })
  
})