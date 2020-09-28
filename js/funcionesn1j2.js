var pintado = false;
var selec;
var sndOK = new Audio("../sonidos/ganaste.wav");
var sndNO = new Audio("../sonidos/error.wav");
var tabla = ['null','null','null','null'];

const ocultarElement = id => {
    let elem = document.getElementById(id)
    elem.classList.add("imgOcultar")
  }
  
  const quitarAnim = id => {
    let elem = document.getElementById(id)
    elem.classList.remove("pulse")
  }
  
  const animar = (id,animacion) => {
    let elem = document.getElementById(id)
    elem.classList.add(animacion)
  }

  const mostrarElemento = (id) => {
    let elem = document.getElementById(id)
    elem.classList.remove("imgOcultar")
  }

/*FUNCIONES DE LA ACTIVIDAD PRINCIPAL */
function checkTable(letra) {
    var tabla = $('#' + letra);
    var items = tabla.children('tbody').children('tr').find('img');
    var cont = 0;
    var padre;
    var hijo;
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

   return (cont==4);
}

/*Cartelito*/

function confirmar(s) {
    sndOK.play();
    alertify.alert("<img src='../assets/feliz.png'> <h4>&iexcl; EXCELENTE !</h4>", function(e) {
        if (e) {
            alertify.success("ELEGISTE '" + alertify.labels.ok + "'");
            setTimeout(function() {
                window.location.href = '../html/'+s; //Pasa al siguiente juego
            }, 1300);
        } else {
            alertify.error("ELEGISTE '" + alertify.labels.cancel + "'");
            confirmSalida();
        }
    });
    return false
}

function alerta() {
    sndNO.play();
    alertify.alert("<img src='../assets/triste.png'> <h4> &iexcl; INTENTALO DE NUEVO !</h4>", function() {
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

function comprobarR(s) {
    if (checkTable('a') & checkTable('e')) {
        confirmar(s);
    } else {
        alerta();
    }
}

/*FUNCION EXCLUSIVA DE LA ACTIVIDAD EXTRA*/

function comprobarExtra(s,cantLetras,palabra){

    if(palabra == 'auto'){
        var letras = ['a','u','t','o'];
    }
    else{
        var letras = ['a','r','o'];
    }

    var tabla = $('#a');
    var items = tabla.children('tbody').children('tr').find('img');
    var cont = 0;
    var padre;
    var hijo;
    for (var i = 0; i < items.length; i++) {
        if (items[i].dataset.letra != letras[i]){
            hijo = document.createElement("div");
            hijo.className+="item";
            hijo.appendChild(items[i]);
            padre = document.getElementById('pos-'+items[i].dataset.pos);
            padre.appendChild(hijo);
        }
        if (items[i].dataset.letra == letras[i]){
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

    if(cont==cantLetras){
        confirmar(s);
    }
    else{
        alerta();
    }


}

function cambiarValores(){
    //permite cambiar las imagenes y las letras para jugar con otra 
}

