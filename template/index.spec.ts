import { twoSum } from "."

describe("TwoSum", () => {
  it("solves the first test case", () => {
    expect(twoSum([2,7,11,15], 9)).toBe([0, 1])
  })

  it("solves the second test case", () => {
    expect(twoSum([3,2,4], 6)).toBe([1, 2])
  })

  it("solves the third test case", () => {
    expect(twoSum([3,2,4], 6)).toBe([1, 2])
  })
})