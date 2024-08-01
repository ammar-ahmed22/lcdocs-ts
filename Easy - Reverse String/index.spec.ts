import { reverseString, ArgsType, ReturnType } from "."


describe("Reverse String", () => {
  let testCases: ArgsType[] = [
    [["h","e","l","l","o"]],
    [["H","a","n","n","a","h"]]
  ]
  let results: string[][] = [
    ["o","l","l","e","h"],
    ["h","a","n","n","a","H"]
  ]
  it("has the same number of results as tests", () => {
    expect(testCases.length).toEqual(results.length);
  })

  it("solves the test cases", () => {
    for (let i = 0; i < testCases.length; i++) {
      let args = testCases[i];
      reverseString(...args);
      let result = results[i];
      expect(args[0]).toEqual(result);
    }
  })
  
})