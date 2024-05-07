const blob = document.getElementById("blob");
let image = document.getElementById("image");

document.body.onpointermove = event => {
    const {clientX, clientY} = event

    blob.animate({
        left: `${clientX}px`,
        top: `${clientY}px`,
    }, {duration: 1500, fill: "forwards"});

    //Image rotation on the landing page is handled here, why? Javascript is weird

    if ( image != undefined ) {

        let rect = image.getBoundingClientRect();

        let centX = (rect.x + (rect.width / 2)),
            centY = (rect.y + (rect.height / 2));

        let wX = (clientX - centX) / document.body.clientWidth,
            wY = (clientY - centY) / document.body.clientHeight;

        let compX = Math.min(0.45, wY) *  0.5,
            compY = Math.min(0.45, wX) * -0.8,
            compZ = Math.min(0.15, wY) * -0.1;

        image.animate({
            transform: `rotate3d( ${compX}, ${compY}, ${compZ}, 15deg)`
        }, {duration: 1200, fill: "forwards"});
    }
}

document.body.ontouchmove = event => {
    const {clientX, clientY} = event

    blob.animate({
        left: `${clientX}px`,
        top: `${clientY}px`,
    }, {duration: 1500, fill: "forwards"});
}