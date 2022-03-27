import { Notification } from "./components"
import { NOTIFICATION_TYPES } from "./constants"

const typeToComponentMap = {
  [NOTIFICATION_TYPES.TOAST]: Notification,
}

export default class NotificationFactory {
  static create(notificationType, notificationOptions) {
    if (!typeToComponentMap[notificationType]) {
      console.error(`NotificationFactory doesn't understand type '${notificationType}'`)
      return null
    }

    return typeToComponentMap[notificationType](notificationOptions)
  }
}
