import styles from "./Growler.styles.css"

import { MessageContainer, Notification } from "../components"

import { DURATION, EVENTS, POSITIONS } from "../constants"

export default function Growler(options) {
  const mergedOptions = Object.assign({}, Growler.defaultOptions, options)
  const { duration, position } = mergedOptions

  const notification = Notification(mergedOptions)
  const messagesContainer = MessageContainer(position)

  messagesContainer.displayNotification(notification)
}

Growler.defaultOptions = {
  duration: DURATION.MEDIUM,
  contents: "",
  position: POSITIONS.NE,
}

