let jsReservas;
let jsReserva;
let preloader = false;

function cardReturn(titulo, descripcion, img) {

    let p = '<div class="col s12 m6"> ' +
        '<div class="card z-depth-5"> ' +
        '<div id="cardImg" class="card-image"> ' +
        '<img src=' + "recursos/caratulas/" + img + '> ' +
        '<a class="btn-floating btn-large halfway-fab waves-effect waves-light red"> ' +
        '<i class="material-icons">add</i> ' +
        '</a> ' +
        '</div> ' +
        '<div class="card-content"> ' +
        '<span class="card-title">' + titulo + '</span> ' +
        '<p>' + descripcion.substring(0, 100) + "..." + '</p> ' +
        '</div> ' +
        '</div> ' +
        '</div>';
    return p;
}

function hourReturn(id, hora) {
    let b = '<a class="hora waves-effect teal lighten-5 waves-teal btn" href="#">' + hora + '</a>';
    return b;
}

function loadReservas() {
    let local;
    local = localStorage.getItem("jsReservas");
    if (local != null) {
        jsReservas = JSON.parse(local);
        /*
        jsVotantes.forEach(function (value, indice, array) {
            console.log(value);
        })
        */
    } else {
        jsReservas = [];
    }
}

function loadReserva() {
    let local;
    local = localStorage.getItem("jsReserva");
    if (local != null) {
        jsReservas = JSON.parse(local);
    } else {
        jsReservas = [];
    }
}

function saveReservas() {
    let nombre = $("#inputName").val();
    let email = $("#inputEmail").val();
    let telefono = $("#inputTelefono").val();
    let index = $("#md-body-info").attr("ident");

    jsReservas.push({
        nombre: nombre,
        email: email,
        telefono: telefono,
        voto: index
    })
    localStorage.setItem("jsReservas", JSON.stringify(jsReservas));
}

function saveReserva() {
    let nombre = $("#inputName").val();
    let email = $("#inputEmail").val();
    let telefono = $("#inputTelefono").val();
    let index = $("#md-body-info").attr("ident");

    jsReserva.push({
        nombre: nombre,
        email: email,
        telefono: telefono,
        voto: index
    })
    localStorage.setItem("jsReserva", JSON.stringify(jsReserva));
}

function preloaderToggle() {
    setTimeout(function () {
            classToggle(".prelo", "none")
        },
        3000);
}

function classToggle(a, b){
    $(a).toggleClass(b);
}