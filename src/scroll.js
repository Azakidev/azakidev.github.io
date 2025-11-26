const arrow = document.getElementById("scroller");
const layout = document.getElementsByClassName("layout")[0];
const cards = document.getElementById("pcards");

function scrollhandler() {
    let opacity = window.getComputedStyle(arrow).getPropertyValue("opacity");
    if (opacity != 0) {
        layout.scrollIntoView({ behavior: 'smooth' })
    }
}

function cardsscrollhandler() {
    cards.scrollIntoView({ behavior: 'smooth' })
}

function ychscrollhandler() {
    document.getElementById('offerych').scrollIntoView({ behavior: 'smooth', block: 'end' })
}

function labsscrollhandler() {
    document.getElementById('offerlabs').scrollIntoView({ behavior: 'smooth', block: 'end' })
}