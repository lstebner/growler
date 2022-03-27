export default function enumb(keys) {
  let obj = {}

  for (let i in keys) {
    obj[i] = keys[i]
  }

  return obj
}
