import { memo } from ".."

describe("memo", () => {
  let fn, memoizedFn

  describe("calling", () => { 
    beforeEach(() => {
      fn = jest.fn()
      memoizedFn = memo(fn)
    })

    it("calls the memoized function", () => {
      memoizedFn()

      expect(fn).toHaveBeenCalled()
    })

    it("calls the original function for each unique set of args", () => {
      memoizedFn()
      memoizedFn(1)
      memoizedFn(1, 2)
      memoizedFn("hi")
      memoizedFn({ key: "value", pairs: 2 })

      expect(fn).toHaveBeenCalledTimes(5)
    })

    it("won't call the original function more than once if the args have not changed", () => {
      for (let i = 0; i < 10; i++) {
        memoizedFn()
      }

      expect(fn).toHaveBeenCalledTimes(1)
    })
  })

  describe("return value", () => {
    describe("no args", () => {
      it("returns the original functions return value", () => {
        const returnValue = "return"
        fn = () => returnValue
        memoizedFn = memo(fn)

        let passed = true

        for (let i = 0; i < 10; i++) {
          passed = passed && memoizedFn() === returnValue
        }

        expect(passed).toEqual(true)
      })
    })

    describe("variaying args", () => {
      let argOne = "a"
      let argTwo = "b"
      let returnValueOne = 1
      let returnValueTwo = "beta"

      beforeEach(() => {
        fn = (theArg) => {
          if (theArg === argOne) return returnValueOne
          else if (theArg === argTwo) return returnValueTwo
        }
        memoizedFn = memo(fn)
      })

      it("returns the correct value for arg one", () => {
        let passed = true

        for (let i = 0; i < 10; i++) {
          passed = passed && memoizedFn(argOne) === returnValueOne
        }

        expect(passed).toEqual(true)
      })

      it("returns the correct value for arg two", () => {
        let passed = true

        for (let i = 0; i < 10; i++) {
          passed = passed && memoizedFn(argTwo) === returnValueTwo
        }

        expect(passed).toEqual(true)
      })
    })
  })
})
