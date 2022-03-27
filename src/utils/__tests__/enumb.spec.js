import { enumb } from ".."

describe("enumb", () => {
  const values = ["ONE", "TWO", "THREE"]

  it("returns an object", () => {
    expect(typeof enumb(values)).toEqual("object")
  })

  it("has a key for every value", () => {
    expect(Object.keys(enumb(values))).toEqual(values)
  })

  it("uses incrementing values", () => {
    const enumbObject = enumb(values)
    const enumbValues = Object.values(enumbObject)
    let passed = true

    for (let i in Object.keys(enumbObject)) {
      passed = passed && enumbValues[i] === i
    }

    expect(passed).toEqual(true)
  })
})
