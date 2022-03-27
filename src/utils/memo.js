export default function memo(sourceFunction) {
  const returnValues = new Map()

  return (...args) => {
    const key = JSON.stringify(args)

    if (returnValues.has(key) === false) {
      returnValues.set(key, sourceFunction(...args))
    }

    return returnValues.get(key)
  }
}
