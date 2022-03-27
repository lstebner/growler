import styles from "./Growler.styles.css"

import { MessageContainer, Notification } from "../components"

export default function Growler(options) {
  const mergedOptions = Object.assign({}, Growler.defaultOptions, options)
  const { duration, position } = mergedOptions
  
  const growl = document.createElement("div")
  growl.className = styles.message
  growl.innerHTML = options.contents

  const messagesContainer = MessageContainer({ position })

  messagesContainer.appendChild(growl)

  setTimeout(() => {
    messagesContainer.removeChild(growl)
  }, duration)
}

Growler.defaultOptions = {
  duration: 3000,
  contents: "",
  position: "TopRight",
}

