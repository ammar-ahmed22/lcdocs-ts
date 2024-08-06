import { middleNode, ArgsType, ReturnType } from "."
import { generateListFromArray } from "./helpers"


describe("Middle of Linked List", () => {
  let testCases: ArgsType[] = [
    [generateListFromArray([1,2,3,4,5])],
    [generateListFromArray([1,2,3,4,5,6])],
    [generateListFromArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15])]
  ]
  let results: ReturnType[] = [
    generateListFromArray([3, 4, 5]),
    generateListFromArray([4, 5, 6]),
    generateListFromArray([8, 9, 10, 11, 12, 13, 14, 15])
  ]
  it("has the same number of results as tests", () => {
    expect(testCases.length).toEqual(results.length);
  })

  it("solves the test cases", () => {
    for (let i = 0; i < testCases.length; i++) {
      let args = testCases[i];
      let result = results[i];
      expect(middleNode(...args)).toEqual(result);
    }
  })
  
})