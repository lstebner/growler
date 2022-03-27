export default function enumb(keys) {
  let obj = {}

  for (let k of keys) {
    obj[k] = k
  }

  return obj
}
