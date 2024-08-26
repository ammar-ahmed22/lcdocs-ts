import { removeNthFromEnd, ArgsType, ReturnType } from "."
import { generateListFromArray } from "./helpers"


describe("Remove Nth Node Fron End of List", () => {
  let testCases: ArgsType[] = [
    [generateListFromArray([1, 2, 3, 4, 5]), 2],
    [generateListFromArray([1]), 1],
    [generateListFromArray([1, 2]), 1]
  ]
  let results: ReturnType[] = [
    generateListFromArray([1, 2, 3, 5]),
    generateListFromArray([]),
    generateListFromArray([1])
  ]
  it("has the same number of results as tests", () => {
    expect(testCases.length).toEqual(results.length);
  })

  it("solves the test cases", () => {
    for (let i = 0; i < testCases.length; i++) {
      let args = testCases[i];
      let result = results[i];
      expect(removeNthFromEnd(...args)).toEqual(result);
    }
  })
  
})