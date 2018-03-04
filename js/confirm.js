let pre;

$(document).ready(function () {
    inicializar();
});

function inicializar() {
    loadTickets();
    pre = jsTickets[jsTickets.length - 1];
    loadInfoFilm();

    $('#cntDescargar').click(function () {
        window.print();
    });
    
}

function loadInfoFilm() {
    $('#infoImg').attr("src", "recursos/caratulas/" + pre.pel.img);
    $('#infoTitulo').text('Título: ' + pre.pel.titulo);
    $('#infoDuracion').text('Duración: ' + pre.pel.duracion + " min");
    $('#infoFecha').text('Fecha: ' + pre.fecha);
    $('#infoHora').text('Hora: ' + pre.hora);
    $('#infoPrecio').text('Precio: ' + pre.precio + "€");
    $('#infoCantidad').text('Cantidad: ' + pre.cantidad);
    $("#cantEnt")[0].textContent = pre.asientos.length;
    $("#totalEnt")[0].textContent = pre.asientos.length * pre.precio + "€";
}