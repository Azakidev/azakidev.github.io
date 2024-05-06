const arrow = document.getElementById("scroller");
const layout = document.getElementsByClassName("layout")[0];
const cards = document.getElementsByClassName("cards")[0];

function scrollhandler() {
    let opacity = window.getComputedStyle(arrow).getPropertyValue("opacity");
    if (opacity != 0) {
        layout.scrollIntoView({behavior: 'smooth' })
    }
}

function cardsscrollhandler() {
    cards.scrollIntoView({behavior: 'smooth' })
}