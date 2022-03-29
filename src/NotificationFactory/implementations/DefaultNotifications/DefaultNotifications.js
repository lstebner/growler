import NotificationFactoryInterface from "../../NotificationFactoryInterface"
import { Notification } from "../../../components"

export default class DefaultNotifications extends NotificationFactoryInterface {
  createToast(options) {
    return Notification(options)
  }
}
