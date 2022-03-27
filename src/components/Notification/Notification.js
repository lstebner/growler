import { DURATION, EVENTS } from "../../constants"

import styles from "./Notification.styles.scss"

export default function Notification(options) {
  const mergedOptions = Object.assign({}, Notification.defaultOptions, options)
  const { contents, duration } = mergedOptions

  const element = document.createElement("div")

  element.className = styles.container
  element.innerHTML = contents

  if (duration > 0) {
    const dismiss = () => {
      element.dispatchEvent(new Event(EVENTS.DISMISS))
    }
    const dismissTimeout = setTimeout(dismiss, duration)
    // TODO: add dismiss debounce on mouseenter and resume on mouseleave
  }

  return element
}

Notification.defaultOptions = {
  duration: DURATION.MEDIUM,
  contents: "",
}
