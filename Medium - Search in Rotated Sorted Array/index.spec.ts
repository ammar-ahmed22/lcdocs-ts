import { search, ArgsType, ReturnType } from "."


describe("Search in Rotated Sorted Array", () => {
  let testCases: ArgsType[] = [
    [[4,5,6,7,0,1,2], 0],
    [[4,5,6,7,0,1,2], 3],
    [[1], 0]
  ]
  let results: ReturnType[] = [
    4,
    -1,
    -1
  ]
  it("has the same number of results as tests", () => {
    expect(testCases.length).toEqual(results.length);
  })

  it("solves the test cases", () => {
    for (let i = 0; i < testCases.length; i++) {
      let args = testCases[i];
      let result = results[i];
      expect(search(...args)).toBe(result);
    }
  })
  
})