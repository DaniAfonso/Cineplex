function ticket() {
    this.fecha = "",
        this.hora = "",
        this.cantidad = "",
        this.precio = "",
        this.total = "",
        this.asientos = [],
        this.pel = pelicula()
}

function pelicula() {
    this.id = "",
        this.titulo = "",
        this.anio = "",
        this.duracion = "",
        this.pais = "",
        this.genero = "",
        this.sinopsis = "",
        this.img = "",
        this.horarios = []
}

function seating() {
    this.row = "",
        this.col = ""
}