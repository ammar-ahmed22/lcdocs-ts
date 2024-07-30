import { isPalindrome, ArgsType, ReturnType } from "."


describe("Palindrome Number", () => {
  let testCases: ArgsType[] = []
  let results: ReturnType[] = []
  it("has the same number of results as tests", () => {
    expect(testCases.length).toEqual(results.length);
  })

  it("solves the test cases", () => {
    for (let i = 0; i < testCases.length; i++) {
      let args = testCases[i];
      let result = results[i];
      expect(isPalindrome(...args)).toBe(result);
      // Below can be used for arrays where the order does not matter
      // expect(isPalindrome(...args)).toBeEqualUnordered(result);
    }
  })
  
})