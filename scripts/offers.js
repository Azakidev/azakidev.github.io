const labsCardScroller = document.getElementById('labscards');
var labsCard = Math.floor(labsCardScroller.children.length / 2);
labsCardScroller.children[labsCard].classList.add('active');

const ychCardScroller = document.getElementById('ychcards');
var ychCard = Math.floor(ychCardScroller.children.length / 2);
ychCardScroller.children[ychCard].classList.add('active');

const labsLeftArrow = document.querySelector('#labscardwrapper #left');
const labsRightArrow = document.querySelector('#labscardwrapper #right');

const ychLeftArrow = document.querySelector('#ychcardwrapper #left');
const ychRightArrow = document.querySelector('#ychcardwrapper #right');

labsLeftArrow.addEventListener("click", (e) => { handleScroll(e) })
labsRightArrow.addEventListener("click", (e) => { handleScroll(e) })
ychLeftArrow.addEventListener("click", (e) => { handleScroll(e) })
ychRightArrow.addEventListener("click", (e) => { handleScroll(e) })

Array.from(labsCardScroller.children).forEach(card => {
    card.addEventListener('click', (e) => {
        swapto(e)
    })
});

Array.from(ychCardScroller.children).forEach(card => {
    card.addEventListener('click', (e) => {
        swapto(e)
    })
});

function handleScroll(event) {
    console.log(event.target)
    if (event.target == labsLeftArrow) {
        labsCardScroller.children[labsCard].classList.remove('active');
        if (labsCard - 1 < 0) {
            labsCard = labsCardScroller.children.length - 1;
        } else {
            labsCard -= 1;
        }
        labsCardScroller.children[labsCard].classList.add('active');
    }
    if (event.target == labsRightArrow) {
        labsCardScroller.children[labsCard].classList.remove('active');
        if (labsCard + 1 > labsCardScroller.children.length - 1) {
            labsCard = 0;
        } else {
            labsCard += 1;
        }
        labsCardScroller.children[labsCard].classList.add('active');
    }
    if (event.target == ychLeftArrow) {
        ychCardScroller.children[ychCard].classList.remove('active');
        if (ychCard - 1 < 0) {
            ychCard = ychCardScroller.children.length - 1;
        } else {
            ychCard -= 1;
        }
        ychCardScroller.children[ychCard].classList.add('active');
    }
    if (event.target == ychRightArrow) {
        ychCardScroller.children[ychCard].classList.remove('active');
        if (ychCard + 1 > ychCardScroller.children.length - 1) {
            ychCard = 0;
        } else {
            ychCard += 1;
        }
        ychCardScroller.children[ychCard].classList.add('active');
    }
}

function swapto(event){
    if (!event.target.parentNode.parentNode.classList.contains('active')) {
        if (labsCardScroller === event.target.parentNode.parentNode) {
            labsCardScroller.children[labsCard].classList.remove('active');
            labsCard = Array.from(event.target.parentNode.parentNode.children).indexOf(event.target.parentNode);
            labsCardScroller.children[labsCard].classList.add('active');
        } else {
            ychCardScroller.children[ychCard].classList.remove('active');
            ychCard = Array.from(event.target.parentNode.parentNode.children).indexOf(event.target.parentNode);
            ychCardScroller.children[ychCard].classList.add('active');
        }
    }
}