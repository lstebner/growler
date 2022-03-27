import styles from "./Broadcast.styles.css"

import { MessageContainer, Notification } from "../components"

import { DURATION, EVENTS, POSITIONS } from "../constants"

export default function Broadcast(options) {
  const mergedOptions = Object.assign({}, Broadcast.defaultOptions, options)
  const { duration, position } = mergedOptions

  const notification = Notification(mergedOptions)
  const messagesContainer = MessageContainer(position)

  messagesContainer.displayNotification(notification)
}

Broadcast.defaultOptions = {
  duration: DURATION.MEDIUM,
  contents: "",
  position: POSITIONS.NE,
}

