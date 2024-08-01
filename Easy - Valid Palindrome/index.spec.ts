import { isPalindrome, ArgsType, ReturnType } from "."


describe("Valid Palindrome", () => {
  let testCases: ArgsType[] = [
    ["A man, a plan, a canal: Panama"],
    ["race a car"],
    [" "]
  ]
  let results: ReturnType[] = [
    true,
    false,
    true
  ]
  it("has the same number of results as tests", () => {
    expect(testCases.length).toEqual(results.length);
  })

  it("solves the test cases", () => {
    for (let i = 0; i < testCases.length; i++) {
      let args = testCases[i];
      let result = results[i];
      console.log(args[0]);
      expect(isPalindrome(...args)).toBe(result);
    }
  })
  
})