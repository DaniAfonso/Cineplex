let dia = "";

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
        $(card).on({
            mouseenter: function () {
                $(this).addClass("cardHover");
            },
            mouseleave: function () {
                $(this).removeClass("cardHover");
            }
        });
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
        dateFormat: 'yy-mm-dd',
        closeOnSelect: true // Close upon selecting a date,
    });
}

function openModal(id) {
    $('#mTitulo').attr("ident", id);
    $('#mTitulo').text(infoFilms[id].titulo);
    $('#mImg').attr("src", "recursos/caratulas/" + infoFilms[id].img);
    $('#mTitulo2').text('Título: ' + infoFilms[id].titulo);
    $('#mAnio').text('Año: ' + infoFilms[id].anio);
    $('#mDuracion').text('Duración: ' + infoFilms[id].duracion);
    $('#mPais').text('Páis: ' + infoFilms[id].pais);
    $('#mGenero').text('Género: ' + infoFilms[id].genero);
    $('#mPrecio').text('Precio: ' + calPrecio() + "€");
    $('#mSinopsis').text('Sinopsis: ' + infoFilms[id].sinopsis);
    $('#mHoras *').remove();
    $(infoFilms[id].horarios).each(function (i, e) {
        $('#mHoras').append(hourReturn(i, infoFilms[id].horarios[i]));
    });
    $('.hora').on({
        click: function () {
            $('.horaSelect').removeClass("horaSelect");
            $(this).toggleClass("horaSelect");
        }
    });
    if (existeFecha())
        $('.modal').modal('open');
}

function hoverCard(e, c) {
    e.classList.add(c);
}

function unhoverCard(e, c) {
    e.classList.remove(c);
}

function existeFecha() {
    let existe = false;
    let date = $(".datepicker").val();
    if (date.length) {
        console.log(date);
        existe = true;
        dia = date;
    } else {
        toast("No has elegido un día válido.");
    }
    return existe;
}

function calPrecio() {
    let precioEntrada = 3;
    if (dia.length)
        precioEntrada = 7;
    else
        precioEntrada = 5.43;
    return precioEntrada;
}

function recuperarPelicula(i){
    let pel = new pelicula();
    pel.titulo = infoFilms[i].titulo;
    pel.anio = infoFilms[i].anio;
    pel.duracion = infoFilms[i].duracion;
    pel.pais = infoFilms[i].pais;
    pel.genero = infoFilms[i].genero;
    pel.sinopsis = infoFilms[i].sinopsis;
    pel.img = infoFilms[i].img;
    pel.horarios = infoFilms[i].horarios;
    return pel;
}

function saveData() {
    let horaElegida = $(".horaSelect");
    if (horaElegida.length == 1) {
        let preTick = new ticket();
        preTick.fecha = dia;
        preTick.hora = $(horaElegida)[0].text;
        preTick.precio = calPrecio();
        preTick.cantidad = 1;
        preTick.pel = recuperarPelicula($('#mTitulo').attr("ident"));
        localStorage.setItem("preTicket", JSON.stringify(preTick));
        window.location = "./seating.html";
    } else {
        toast("No has elegido una hora válida.")
    }
}