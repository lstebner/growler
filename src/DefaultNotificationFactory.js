import { memo } from "./utils"
import NotificationFactory from "./NotificationFactory"
import { DefaultNotifications } from "./NotificationFactory/implementations/"

export default memo((...args) => new NotificationFactory(new DefaultNotifications(...args)))
