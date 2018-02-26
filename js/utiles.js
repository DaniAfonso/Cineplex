let jsTickets;
let preTicket;
let preloader = false;

function toast(m) {
    Materialize.toast(m, 3000, 'rounded')
}

function cardReturn(titulo, descripcion, img) {
    let p = '<div class="col s12 m6 l4"> ' +
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

function loadTickets() {
    let ticketsJson;
    ticketsJson = localStorage.getItem("jsTickets");
    if (ticketsJson != null) {
        jsTickets = JSON.parse(ticketsJson);
        /*
        jsVotantes.forEach(function (value, indice, array) {
            console.log(value);
        })
        */
    } else {
        jsTickets = [];
    }
}

function loadPreTicket() {
    let local;
    local = localStorage.getItem("preTicket");
    if (local != null) {
        preTicket = JSON.parse(local);
    } else {
        preTicket = [];
    }
}

function loadInfoFilm() {
    $('#infoImg').attr("src", "recursos/caratulas/" + preTicket.pel.img);
    $('#infoTitulo').text('Título: ' + preTicket.pel.titulo);
    $('#infoDuracion').text('Duración: ' + preTicket.pel.duracion + " min");
    $('#infoFecha').text('Fecha: ' + preTicket.fecha);
    $('#infoHora').text('Hora: ' + preTicket.hora);
    $('#infoPrecio').text('Precio: ' + preTicket.precio + "€");
    $('#infoCantidad').text('Cantidad: ' + preTicket.cantidad);
}

function saveReservas() {
    jsTickets.push(preTicket);
    localStorage.setItem("jsTickets", JSON.stringify(jsTickets));
}

function preloaderToggle() {
    setTimeout(function () {
            classToggle(".prelo", "none");
            classToggle("#noneCard", "none");
            classToggle("#contenedorSvg", "none");
            classToggle("#noneEntradas", "none");
            classToggle("#noneBtnEntradas", "none");
            classToggle("#noneBtnPagar", "none");
        },
        3000);
}

function classToggle(a, b) {
    $(a).toggleClass(b);
}