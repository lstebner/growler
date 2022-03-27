import Broadcast from ".."
import { getByText, queryByText } from "@testing-library/dom"

describe("Broadcast", () => {
  it("can display message", () => {
    Broadcast({ contents: "hello world" })
    expect(getByText(document.body, "hello world")).toBeInTheDocument()
  })

  it("is no longer present after specified duration of time", () => {
    jest.useFakeTimers()
    Broadcast({ contents: "cya", duration: 1 })

    jest.advanceTimersByTime(2)

    expect(queryByText(document.body, "cya")).not.toBeInTheDocument()
  })
})
