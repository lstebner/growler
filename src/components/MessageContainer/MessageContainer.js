import { EVENTS } from "../../constants"

import styles from "./MessageContainer.styles.scss"

class MessageManager {
  constructor(position) {
    this.position = position
  }

  get domId() {
    return `messages-container__${this.position}`
  }

  get element() {
    return document.getElementById(this.domId)
  }

  get positionStyles() {
    return styles[`position-${this.position}`]
  }

  displayNotification(notification) {
    this.element.appendChild(notification)

    notification.addEventListener(EVENTS.DISMISS, () => {
      this.dismissNotification(notification)
    })
  }

  dismissNotification(notification) {
    this.element.removeChild(notification)
  }

  render() {
    let element = document.createElement("div")

    element.id = this.domId
    element.className = styles.container
    element.classList.add(this.positionStyles)

    return element
  }
}

const messageContainersRegistry = {}

function MessageContainer(position) {
  let container = messageContainersRegistry[position]

  if (!container) {
    const manager = new MessageManager(position)
    document.body.appendChild(manager.render())
    messageContainersRegistry[position] = manager

    container = manager
  }

  return container
}

export default MessageContainer
