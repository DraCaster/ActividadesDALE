var pintado = false;
var selec;
var sndOK = new Audio("../sonidos/ganaste.wav");
var sndNO = new Audio("../sonidos/error.wav");
var tabla = ['null','null','null','null'];


function checkTable(letra) {
    var tabla = $('#' + letra);
    var items = tabla.children('tbody').children('tr').find('img');
    var cont = 0;
    var padre;
    var hijo;
    if(letra == 'o0' || letra == 'o1'){
        letra = 'o';
    }
    if(letra == 'u0' || letra == 'u1'){
        letra = 'u';
    }
    
    for (var i = 0; i < items.length; i++) {
        if (items[i].dataset.letra != letra){
            hijo = document.createElement("div");
            hijo.className+="item";
            hijo.appendChild(items[i]);
            padre = document.getElementById('pos-'+items[i].dataset.pos);
            padre.appendChild(hijo);
        }
        if (items[i].dataset.letra == letra){
            cont++;
        }
    }

    //Le devuelvo la propiedad arrastrable a cada imagen
    $('.item').draggable({
                helper: 'clone'
                
            });

            $('.box-image').droppable({
                accept: '.item',
                hoverClass: 'hovering',
                drop: function(ev, ui) {
                    ui.draggable.detach();
                    $(this).append(ui.draggable);

                }
            });

   return (cont==2);
}

/*Cartelito*/

function confirmar() {
    sndOK.play();
    alertify.alert("<img src='../assets/feliz.png'> <h3>&iexcl; EXCELENTE !</h3>", function(e) {
            alertify.success("CARGANDO ...");
            setTimeout(function() {
                window.location.href = '../html/n1j4.html'; //Pasa al siguiente juego
            }, 1300);
    });
    return false
}

function alerta() {
    sndNO.play();
    alertify.alert("<img src='../assets/triste.png'> <h3> &iexcl; INTENTALO DE NUEVO ! </h3>", function() {
        //aqui introducimos lo que haremos tras cerrar la alerta.
    });
}

function enmarcar(event) {
    selec = event.target;
    if (pintado == false) {
        selec.className += " cambiarBorde";
        pintado = true;
    } else {
        $('.cambiarBorde').removeClass("cambiarBorde");
        selec.className += " cambiarBorde";
    }
}

function comprobar() {
    if (checkTable('o0') & checkTable('o1') & checkTable('u0') & checkTable('u1')) {
        confirmar();
    } else {
        alerta();
    }
}