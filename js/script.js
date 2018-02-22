$(document).ready(function () {
    //alert("ready!");
    $('.modal').modal();
    $(infoFilms).each(function (i, e) {
        $("#contFilms").append(cardReturn(e.titulo, e.sinopsis, e.img));
    })
});

$('.datepicker').pickadate({
    selectMonths: true, // Creates a dropdown to control month
    selectYears: 15, // Creates a dropdown of 15 years to control year,
    today: 'Today',
    clear: 'Clear',
    close: 'Ok',
    closeOnSelect: false // Close upon selecting a date,
});

function abrir(){
    $('.modal').modal('open');
}

