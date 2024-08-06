import { reverseList, ArgsType, ReturnType } from "."
import { generateListFromArray } from "./helpers"

describe("Reverse Linked List", () => {
  let testCases: ArgsType[] = [
    [generateListFromArray([1, 2, 3, 4, 5])],
    [generateListFromArray([1, 2])],
    [generateListFromArray([])]
  ]
  let results: ReturnType[] = [
    generateListFromArray([5, 4, 3, 2, 1]),
    generateListFromArray([2, 1]),
    generateListFromArray([])
  ]
  it("has the same number of results as tests", () => {
    expect(testCases.length).toEqual(results.length);
  })

  it("solves the test cases", () => {
    for (let i = 0; i < testCases.length; i++) {
      let args = testCases[i];
      let result = results[i];
      expect(reverseList(...args)).toEqual(result);
    }
  })
  
})