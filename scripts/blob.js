const blob = document.getElementById("blob");

document.body.onpointermove = event => {
    const {clientX, clientY} = event

    blob.animate({
        left: `${clientX}px`,
        top: `${clientY}px`,
    }, {duration: 3000, fill: "forwards"});

    blob.animate({
        opacity: 1,
    }, {delay: 200,duration: 6000, fill: "forwards"});
}

document.body.ontouchmove = event => {
    const {clientX, clientY} = event

    blob.animate({
        left: `${clientX}px`,
        top: `${clientY}px`,
    }, {duration: 3000, fill: "forwards"});
}