import Growler from "./Growler"

// below here is just to set up the demo
var n = 1;

var button = document.createElement("button")
button.name = "growl"
button.value = "growl"
button.innerText = "growl"
button.addEventListener("click", function() {
  var allPositions = ["TopRight", "TopLeft", "BottomRight", "BottomLeft"]
  var position = allPositions[Math.floor(Math.random() * allPositions.length)]

  Growler({ contents: `hello, for the ${n} time. the message is now longer to show some wrapping. wrapping cannot be avoided, that's just how life goes you know...`, position })
  n++;
})
document.body.appendChild(button)
