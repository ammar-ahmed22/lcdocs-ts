import { deleteDuplicates, ArgsType, ReturnType } from "."
import { generateListFromArray } from "../template/helpers"

describe("Remove Duplicates from Sorted List", () => {
  let testCases: ArgsType[] = [
    [generateListFromArray([1,1,2])],
    [generateListFromArray([1,1,2,3,3])]
  ]
  let results: ReturnType[] = [
    generateListFromArray([1, 2]),
    generateListFromArray([1, 2, 3])
  ]
  it("has the same number of results as tests", () => {
    expect(testCases.length).toEqual(results.length);
  })

  it("solves the test cases", () => {
    for (let i = 0; i < testCases.length; i++) {
      let args = testCases[i];
      let result = results[i];
      expect(deleteDuplicates(...args)).toEqual(result);
    }
  })
  
})