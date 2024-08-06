import { mergeTwoLists, ArgsType, ReturnType } from "."
import { generateListFromArray } from "./helpers"


describe("Merge Two Sorted Lists", () => {
  let testCases: ArgsType[] = [
    [generateListFromArray([1, 2, 4]), generateListFromArray([1, 3, 4])],
    [generateListFromArray([]), generateListFromArray([])],
    [generateListFromArray([]), generateListFromArray([0])]
  ]
  let results: ReturnType[] = [
    generateListFromArray([1, 1, 2, 3, 4, 4]),
    generateListFromArray([]),
    generateListFromArray([0])
  ]
  it("has the same number of results as tests", () => {
    expect(testCases.length).toEqual(results.length);
  })

  it("solves the test cases", () => {
    for (let i = 0; i < testCases.length; i++) {
      let args = testCases[i];
      let result = results[i];
      expect(mergeTwoLists(...args)).toEqual(result);
    }
  })
  
})