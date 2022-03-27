export default function enumb(keys) {
  let obj = {}

  for (let i in keys) {
    obj[keys[i]] = i
  }

  return obj
}
