const pcards = document.getElementById("pcards")
const rows = pcards.getElementsByClassName("row")

var index = 0

Array.from(rows)
  .sort((a, b) => a.id > b.id ? 1 : -1)
  .forEach(node => {
      if (index % 2 == 0) {
          node.classList.add("reverse")
      }
      index++
      pcards.appendChild(node)
  });
