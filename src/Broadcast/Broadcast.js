import styles from "./Broadcast.styles.css"

import { MessageContainer } from "../components"
import NotificationFactory from "../NotificationFactory"

import { DURATION, EVENTS, NOTIFICATION_TYPES, POSITIONS } from "../constants"

export class Broadcaster {
  static instance() {
    if (!this._instance) {
      this._instance = new Broadcaster(NotificationFactory)
    }

    return this._instance
  }

  constructor(notificationFactory) {
    this.notificationFactory = notificationFactory
  }

  toast(options) {
    return this.notificationFactory.create(NOTIFICATION_TYPES.TOAST, options)
  }
}

export default function Broadcast(options) {
  const mergedOptions = Object.assign({}, Broadcast.defaultOptions, options)
  const { duration, position } = mergedOptions

  const notification = Broadcaster.instance().toast(mergedOptions)
  const messagesContainer = MessageContainer(position)

  messagesContainer.displayNotification(notification)
}

Broadcast.defaultOptions = {
  duration: DURATION.MEDIUM,
  contents: "",
  position: POSITIONS.NE,
}

