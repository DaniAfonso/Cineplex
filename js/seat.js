let asientos = [];
let cantEnt = 1;

$(document).ready(function () {
    preloaderToggle();
    inicializar();
});

function inicializar() {
    loadPreTicket();
    loadInfoFilm();
    generarAsientos();
    cargarAsientos();
    $('#btnSum').click(function () {
        changeTotal(1);
    });
    $('#btnRes').click(function () {
        changeTotal(-1);
    });
    $('#btnIrPago').click(function () {
        irPago();
    });
    initMove();
}

function generarAsientos() {
    asientos = [];
    let estado = "libre"
    for (let c = 0, x = 100; c < 20; c++ , x += 30) {
        for (let f = 0, y = 200; f < 12; f++ , y += 50) {
            //Math.round(Math.random() * 2) % 2 == 0 ? estado = "ocupado" : estado = "libre";
            if (c == 4 || c == 5 || c == 15 || c == 14) {
                //console.log("Fila pasillo");
            } else {
                asientos.push({
                    jRow: f,
                    jCol: c,
                    jX: x,
                    jY: y,
                    jEstado: estado
                });
            }
        }
    }
}

function cargarAsientos() {
    loadTickets();

    $(jsTickets).each(function (i, e) {
        let fec = $(e)[0].fecha;
        let hor = $(e)[0].hora;
        let tit = $(e)[0].pel.titulo;

        if (fec == preTicket.fecha && hor == preTicket.hora && tit == preTicket.pel.titulo) {
            $(this.asientos).each(function (j, p) {
                let r = $(this)[0].row;
                let c = $(this)[0].col;

                $(asientos).each(function (t, y) {
                    if ($(y)[0].jRow == r && $(y)[0].jCol == c)
                        asientos[t].jEstado = "ocupado";
                });
            });
        }
    });

    asientos.forEach(function (value, indice, array) {
        mostrarOcupados(value.jX, value.jY, value.jEstado, value.jRow, value.jCol);
    });
}

function mostrarOcupados(c, u, r, row, col) {
    let cont = document.getElementById("cinema");
    let svgns = "http://www.w3.org/2000/svg";
    let xlinkns = "http://www.w3.org/1999/xlink";

    let use = document.createElementNS(svgns, "use");
    use.setAttributeNS(xlinkns, "href", "#butaca");
    use.setAttribute("row", row);
    use.setAttribute("col", col);
    use.setAttribute("x", c);
    use.setAttribute("y", u);
    use.setAttribute('width', '200');
    use.setAttribute('height', '200');
    use.setAttribute("estado", r);
    r == "ocupado" ? use.setAttribute("class", "butaca ocupado") : use.setAttribute("class", "butaca noSelected");
    $(use).on({
        click: function () {
            //seleccionar(this);
        }
    });

    cont.appendChild(use);
}

function seleccionar(e) {
    if ($(e).attr("estado") == "libre") {
        if ($(e).hasClass("selected")) {
            $(e).removeClass("selected");
            $(e).addClass("noSelected");
        } else {
            if ($('.selected').length + 1 <= cantEnt) {
                $(e).addClass("selected");
                $(e).removeClass("noSelected");
            }
        }
    }
}

function guardarCambios() {
    asientos = [];
    let estadoActual;
    $("use").each(function (v, i, j) {
        if ($(i).hasClass("selected") || $(i).hasClass("ocupado")) {
            estadoActual = "ocupado";
        } else {
            estadoActual = "libre";
        }
        asientos.push({
            jX: i.getAttribute("x"),
            jY: i.getAttribute("y"),
            jEstado: estadoActual
        });
    })
}

function changeTotal(a) {
    cantEnt += (a);
    cantEnt = cantEnt < 1 ? 1 : cantEnt;
    cantEnt = cantEnt > 10 ? 10 : cantEnt;
    $('#cantEnt')[0].textContent = cantEnt;
    $('#totalEnt')[0].textContent = cantEnt * preTicket.precio + "€";
    $('#btnResultCant')[0].textContent = cantEnt;
}

function irPago() {
    let sel = $('.selected');
    if ($(sel).length == cantEnt && cantEnt <= 10) {
        $(sel).each(function (i, e) {
            let s = new seating();
            s.row = $(e).attr("row");
            s.col = $(e).attr("col");
            preTicket.asientos.push(s);
        });
        preTicket.total = $('#totalEnt')[0].textContent;
        localStorage.setItem("preTicket", JSON.stringify(preTicket));
        window.location = "./pay.html";
        console.log(preTicket);
    } else {
        toast("No has seleccionado esa cantidad de entradas.");
    }
}