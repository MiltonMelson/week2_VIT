let constrain = 20;
let mouseOverContainer = document.getElementById("ex1");
let ex1Layer = document.getElementById("ex1-layer");

let pos1 = 0,
    pos2 = 0,
    pos3 = 0,
    pos4 = 0;

function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    pos3 = e.clientX;
    pos4 = e.clientY;
}

function transforms(x, y, el) {
    let box = el.getBoundingClientRect();
    let calcX = -(y - window.innerHeight / 2) / constrain;
    let calcY = (x - window.innerWidth / 2) / constrain;

    return "perspective(200px)" +
        "   rotateX(" + calcX + "deg) " +
        "   rotateY(" + calcY + "deg) ";
};

function transformElement(el, xyEl) {
    el.style.transform = transforms.apply(null, xyEl);
}

mouseOverContainer.onmousemove = function(e) {
    let xy = [e.clientX, e.clientY];
    let position = xy.concat([ex1Layer]);

    window.requestAnimationFrame(function() {
        transformElement(ex1Layer, position);
    });
};