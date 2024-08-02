import { dailyTemperatures, ArgsType, ReturnType } from "."


describe("Daily Temperatures", () => {
  let testCases: ArgsType[] = [
    [[73,74,75,71,69,72,76,73]],
    [[30,40,50,60]],
    [[30,60,90]]
  ]
  let results: ReturnType[] = [
    [1,1,4,2,1,1,0,0],
    [1, 1, 1, 0],
    [1, 1, 0]
  ]
  it("has the same number of results as tests", () => {
    expect(testCases.length).toEqual(results.length);
  })

  it("solves the test cases", () => {
    for (let i = 0; i < testCases.length; i++) {
      let args = testCases[i];
      let result = results[i];
      expect(dailyTemperatures(...args)).toEqual(result);
    }
  })
  
})