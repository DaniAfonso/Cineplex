function cardReturn(titulo, descripcion, img){

    let p = '<div class="col s12 m6"> '+
                '<div class="card"> '+
                    '<div id="cardImg" class="card-image"> '+
                    '<img src=' + "recursos/caratulas/" + img + '> '+
                    '<a data-target="modalFilm" class="modal-trigger btn-floating btn-large halfway-fab waves-effect waves-light red"> '+
                        '<i class="material-icons">add</i> '+
                    '</a> '+
                    '</div> '+
                    '<div class="card-content"> '+
                    '<span class="card-title">' + titulo + '</span> '+
                    '<p>' + descripcion.substring(0, 100) + "..." + '</p> '+
                    '</div> '+
                '</div> '+
                '</div>';
    return p;
}