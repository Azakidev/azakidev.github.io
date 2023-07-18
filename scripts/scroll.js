const arrow = document.getElementById("scroller");
const layout = document.getElementsByClassName("layout").item(0)

function scrollhandler() {
  let opacity = window.getComputedStyle(arrow).getPropertyValue("opacity");
  if (opacity != 0) {
    layout.scrollIntoView({behavior: 'smooth' })
  }
}