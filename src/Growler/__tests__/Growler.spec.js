import Growler from ".."
import { getByText, queryByText } from "@testing-library/dom"

describe("Growler", () => {
  it("can display message", () => {
    Growler({ contents: "hello world" })
    expect(getByText(document.body, "hello world")).toBeInTheDocument()
  })

  it("is no longer present after specified duration of time", () => {
    jest.useFakeTimers()
    Growler({ contents: "cya", duration: 1 })

    jest.advanceTimersByTime(2)

    expect(queryByText(document.body, "cya")).not.toBeInTheDocument()
  })
})
