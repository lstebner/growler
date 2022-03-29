import { NOTIFICATION_TYPES } from "../constants"

export default class NotificationFactory {
  constructor(implementation) {
    this.setImplementation(implementation)
  }

  setImplementation(value) {
    this.implementation = value
  }

  create(notificationType, notificationOptions) {
    if (!this.implementation) {
      throw new Error("NotificationFactory has no implementation to use")
    }

    let notification = null

    switch(notificationType) {
      case NOTIFICATION_TYPES.TOAST:
        notification = this.implementation.createToast(notificationOptions)
        break

      default:
        console.error(`NotificationFactory doesn't support type '${notificationType}'`)
    }

    return notification
  }
}
