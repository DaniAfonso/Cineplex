$(document).ready(function () {
    inicializar();
});

function inicializar() {
    $('.modal').modal();
    $(infoFilms).each(function (i, e) {
        $("#contFilms").append(cardReturn(e.titulo, e.sinopsis, e.img));
        let card = $(".card")[i];
        let b = $(".card")[i].children[0].children[1];
        $(b).click(function () {
            openModal(i);
        });
        card.addEventListener("mouseover", function () {
            hoverCard(this, "cardHover");
        }, true);
        card.addEventListener("mouseout", function () {
            unhoverCard(this, "cardHover");
        }, true);
    });
    $('#mAceptar').click(function () {
        saveData();
    });
    $('.datepicker').pickadate({
        selectMonths: true, // Creates a dropdown to control month
        selectYears: 15, // Creates a dropdown of 15 years to control year,
        today: 'Today',
        clear: 'Clear',
        close: 'Ok',
        closeOnSelect: true // Close upon selecting a date,
    });
}

function openModal(id) {
    $('#mTitulo').text(infoFilms[id].titulo);
    $('#mImg').attr("src", "recursos/caratulas/" + infoFilms[id].img);
    $('#mTitulo2').text('Título: ' + infoFilms[id].titulo);
    $('#mAnio').text('Año: ' + infoFilms[id].anio);
    $('#mDuracion').text('Duración: ' + infoFilms[id].duracion);
    $('#mPais').text('Páis: ' + infoFilms[id].pais);
    $('#mGenero').text('Género: ' + infoFilms[id].genero);
    $('#mSinopsis').text('Sinopsis: ' + infoFilms[id].sinopsis);
    $('#mHoras *').remove();
    $(infoFilms[id].horarios).each(function (i, e) {
        $('#mHoras').append(hourReturn(i, infoFilms[id].horarios[i]));
        //No va el listener
        $('.hora')[i].click(function () {
            console.log("click")
            $('.hora')[i].toggleClass("horaSelect")
        });
    })

    $('.modal').modal('open');
}

function hoverCard(e, c) {
    e.classList.add(c);
}

function unhoverCard(e, c) {
    e.classList.remove(c);
}

function saveData() {
    console.log($(".datepicker").val())
}