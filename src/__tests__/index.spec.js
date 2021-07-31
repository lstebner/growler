import Growler from ".."
import { getByText } from "@testing-library/dom"

describe("Growler", () => {
  it("can display message", () => {
    Growler({ contents: "hello world" })
    expect(getByText(document.body, "hello world")).toBeInTheDocument()
  })
})
