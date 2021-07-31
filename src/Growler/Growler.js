import styles from "./Growler.styles.css"

export default function Growler(options = {}) {
  const mergedOptions = Object.assign({}, Growler.defaultOptions, options)
  const { duration } = mergedOptions
  const growl = document.createElement("div")
  growl.className = styles.message
  growl.innerHTML = options.contents

  const messageContainerId = `growler__messages-container__${mergedOptions.position}`

  let messagesContainer = document.getElementById(messageContainerId)

  if (!messagesContainer) {
    messagesContainer = document.createElement("div")
    messagesContainer.id = messageContainerId 
    messagesContainer.className = styles.messagesContainer
    messagesContainer.classList.add(styles[`position${mergedOptions.position}`])

    document.body.appendChild(messagesContainer)
  }

  messagesContainer.appendChild(growl)

  setTimeout(() => {
    messagesContainer.removeChild(growl)
  }, duration)
}

Growler.defaultOptions = {
  autoHide: true,
  duration: 3000,
  contents: "",
  position: "TopRight",
}

