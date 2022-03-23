window.addEventListener("load", init)

function $(elem) {
    return document.querySelectorAll(elem);
}

function ID(elem) {
    return document.getElementById(elem);
}
function init() {
    sakktabla();
    sakktablaszinezes();
    for (let index = 0; index < 64; index++) {
        $("article div")[index].addEventListener("click", babu)

    }
}

function babu() {
    event.target.innerHTML = "&#9817"
    event.target.removeEventListener("click", babu)
}




var lepes = 0;

function sakktabla() {
    var txt = "";
    for (let index = 0; index < 64; index++) {
        txt += "<div></div>"
    }
    $("section")[0].innerHTML = txt
}
function sakktablaszinezes() {
    var sakkElemtomb = $("section div")
    for (let index = 0; index < 64; index++) {
        var sor = Math.floor(index / 8)
        console.log(sor);
        if (sor % 2 === 0) {
            if (index % 2 === 0) {
                sakkElemtomb[index].style.backgroundColor = "lightgray"
            }
        } else {
            if (index % 2 === 1) {
                sakkElemtomb[index].style.backgroundColor = "lightgray"
            }
        }
    }
}


