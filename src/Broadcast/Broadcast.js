import styles from "./Broadcast.styles.css"

import { MessageContainer } from "../components"
import DefaultNotificationFactory from "../DefaultNotificationFactory"
import { memo } from "../utils"

import { DURATION, EVENTS, NOTIFICATION_TYPES, POSITIONS } from "../constants"

export class Broadcaster {
  get notificationFactory() {
    if (!this._notificationFactoryInstance) {
      this._notificationFactoryInstance = this.createNotificationFactory()
    }

    return this._notificationFactoryInstance
  }

  createNotificationFactory() {
    return DefaultNotificationFactory()
  }

  toast(options) {
    options = Object.assign({
      duration: DURATION.MEDIUM,
      contents: "",
      position: POSITIONS.NE,
    }, options)

    const messagesContainer = MessageContainer(options.position)
    const notification = this.notificationFactory.create(NOTIFICATION_TYPES.TOAST, options)

    messagesContainer.displayNotification(notification)
  }
}

export default new Broadcaster()

