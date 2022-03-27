import constants from "../../constants"

import styles from "./MessageContainer.styles.scss"

export default function MessageContainer({ position }) {
  const positionStyles = styles[`position-${position}`]
  const containerId = `messages-container__${position}`
  let element = document.getElementById(containerId)

  if (!element) {
    element = document.createElement("div")
    element.id = containerId 
    element.className = styles.container
    element.classList.add(positionStyles)

    document.body.appendChild(element)
  }

  return element
}
