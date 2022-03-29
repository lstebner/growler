import Broadcast from "./Broadcast"
import { POSITIONS } from "./constants"

let n = 1;
const buttonsContainer = document.createElement("div")
buttonsContainer.style.display = "flex"
buttonsContainer.style.flexDirection = "column"
buttonsContainer.style.justifyContent = "center"
buttonsContainer.style.alignItems = "center"
buttonsContainer.style.height = "100vh"
buttonsContainer.style.width = "100vw"
buttonsContainer.style.rowGap = ".5em"
document.body.appendChild(buttonsContainer)

const allPositions = Object.keys(POSITIONS)

for (let position of allPositions) {
  const button = document.createElement("button")
  button.name = "broadcast_button"
  button.value = position
  button.innerText = `broadcast ${position}`
  button.addEventListener("click", function() {
    Broadcast.toast({ contents: `hello, for the ${n} time. the message is now longer to show some wrapping. wrapping cannot be avoided, that's just how life goes you know...`, position })
    n++;
  })

  buttonsContainer.appendChild(button)
}
