$(document).ready(function () {
    loadPreTicket();
    loadInfoFilm();
    inicializar();
});

function addEntradas() {
    preTicket.asientos.forEach(function (e, i) {
        let div = '<div class="dividir">' +
            '<p>Fila: ' + e.row + ', Columna: ' + e.col + '</p>' +
            '<p id="precEnt">' + preTicket.precio + '€</p>' +
            '</div>';
        $("#contEntradas .title").after(div);
    });
    $("#cantEnt")[0].textContent = preTicket.asientos.length;
    $("#totalEnt")[0].textContent = preTicket.asientos.length * preTicket.precio + "€";
}

function inicializar() {
    addEntradas();
}

function pagar() {
    let valido = false;
    if (preTicket != null) {
        loadTickets();
        saveReservas();
        preTicket = null;
        localStorage.setItem("preTicket", JSON.stringify(preTicket));
        valido = true;
    } else {
        valido = false;
    }
    return valido;
}