let dragging = null;
let scale = 1;
var moveX = 0;
var moveY = 0;
var moveFX = 0;
var moveFY = 0;
var backX = 0;
var backY = 0;

function initMove() {

    $('#btnMZoom').click(function () {
        mas();
    });

    $('#btnLZoom').click(function () {
        menos();
    });

    $('#contenedorSvg').on("mousedown", function (e) {
        dragging = $(e.target);
        moveX = e.pageX;
        moveY = e.pageY;
    });

    $('.butaca').on("mousedown", function (e) {
        asientoClicado = $('.translate').attr('transform');
    });

    $('.butaca').on("mouseup", function (e) {
        if (asientoClicado == $('.translate').attr('transform'))
            seleccionar($(this));
    });

    $('svg').on("touchstart", function (e) {
        var event = window.event;
        dragging = $(event.target);
        moveX = event.touches[0].pageX;
        moveY = event.touches[0].pageY;
    });

    $(document.body).on("mouseup", function (e) {
        dragging = null;
        backX = moveFX;
        backY = moveFY;
    });

    $(document.body).on("mousemove", function (e) {
        arrastrar(e.pageX, e.pageY);
    });

    $(document.body).on("touchmove", function (e) {
        var event = window.event;
        arrastrar(event.touches[0].pageX, event.touches[0].pageY);
    });

    $(document.body).on("touchend", function (e) {
        dragging = null;
        backX = moveFX;
        backY = moveFY;
    });
}

function mas() {
    scale += 0.2;
    scale = Math.round((scale * 100)) / 100;
    if (scale < 2)
        $('.scale').attr("transform", "scale(" + scale + ")");
    else
        scale = 2;
}

function menos() {
    scale -= 0.1;
    scale = Math.round((scale * 100)) / 100;
    if (scale > 1)
        $('.scale').attr("transform", "scale(" + scale + ")");
    else {
        scale = 1;
        $('.scale').attr("transform", "scale(" + 1 + ")");
        $('.translate').attr('transform', 'translate(' + '0' + ',' + '0' + ')');
    }

}

function arrastrar(ex, ey) {
    if (dragging) {
        if (scale > 1) {
            moveFX = ((ex - moveX) / scale) + backX;
            if (moveFX < -300)
                moveFX = -300;
            if (moveFX > 100)
                moveFX = 100;
            moveFY = ((ey - moveY) / scale) + backY;
            if (moveFY < -500)
                moveFY = -500;
            if (moveFY > 60)
                moveFY = 60;
                console.log("Posiciones buenas: " + moveFX + " : " + moveFY);
            $('.translate').attr('transform', 'translate(' + moveFX + ',' + moveFY + ')');
        }
    }
}