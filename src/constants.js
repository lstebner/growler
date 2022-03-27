import { enumb } from "./utils"

export const POSITIONS = enumb([
  "NE",
  "SE",
  "SW",
  "NW",
])

export const EVENTS = enumb([
  "DISMISS",
])

export const DURATION = {
  INFINITE: 0,
  SHORT: 2000,
  MEDIUM: 4000,
  LONG: 10000,
}
