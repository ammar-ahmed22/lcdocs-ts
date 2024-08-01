import { groupAnagrams, ArgsType, ReturnType } from "."


describe("Group Anagrams", () => {
  let testCases: ArgsType[] = [
    [["eat","tea","tan","ate","nat","bat"]],
    [[""]],
    [["a"]]
  ]
  let results: ReturnType[] = [
    [["bat"],["nat","tan"],["ate","eat","tea"]],
    [[""]],
    [["a"]]
  ]
  it("has the same number of results as tests", () => {
    expect(testCases.length).toEqual(results.length);
  })

  it("solves the test cases", () => {
    for (let i = 0; i < testCases.length; i++) {
      let args = testCases[i];
      let result = results[i];
      console.log(groupAnagrams(...args));
      expect(groupAnagrams(...args).map(s => s.sort()).sort((a, b) => a.length - b.length)).toEqual(result.map(s => s.sort()).sort((a, b) => a.length - b.length));
    }
  })
  
})