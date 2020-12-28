var sndOK = new Audio("../sonidos/ganaste.wav");
var sndNO = new Audio("../sonidos/error.wav");
var cantM = 0;
var cantO = 0;
var pintado = false

function enmarcarMas(event) {
    selec = event.target;
    if (pintado == false) {
        selec.className += " cambiarBorde";
        pintado = true;
    } else {
        $('.cambiarBorde').removeClass("cambiarBorde");
        selec.className += " cambiarBorde";
    }

}

/*Cartelito*/

function confirmar() {
    sndOK.play();
    alertify.alert(
        "<img src='../assets/feliz.png'> <h3>&iexcl; EXCELENTE !</h3>",
        function () {
            alertify.success("CARGANDO...");
            setTimeout(function () {
                window.location.href = "../html/j6_1.html"; //Pasa al siguiente juego
            }, 1300);
        }
    );
    return false;
}

function alerta() {
    sndNO.play();
    alertify.alert(
        "<img src='../assets/triste.png'> <h3> &iexcl; INTENTALO DE NUEVO ! </b></h3>",
        function () {
            //aqui introducimos lo que haremos tras cerrar la alerta.
        }
    );
}

function siguiente(){
    sndOK.play();
    alertify.alert(
        "<img src='../assets/feliz.png'> <h3>&iexcl; EXCELENTE !</h3>",
        function () {
            $('#tacho').css("display", "block");
            $('#mesa').css("display", "none");
        }
    );
    return false
}

function faltanimg() {
    sndNO.play();
    alertify.alert("<img src='../assets/triste.png'> <h1><b> &iexcl; ALGO NO ESTA BIEN ! <br> &iexcl; INTENTALO DE NUEVO ! </b></h1>", function() {
        //aqui introducimos lo que haremos tras cerrar la alerta.
    });
}

function checkTableGameExtraJ6(tablaId, letras){
    let tabla = $('#' + tablaId);
    let items = tabla.children('tbody').children('tr').find('img');

    let cont = 0;
    let padre;
    let hijo;


    for (let i = 0; i < items.length; i++) {

        if (items[i].dataset.letra == letras[i]){
            cont++;
        }
        if (items[i].dataset.letra != letras[i]){
            hijo = document.createElement("div");
            hijo.className+="item";
            hijo.appendChild(items[i]);
            padre = document.getElementById('pos-'+items[i].dataset.pos);
            padre.appendChild(hijo);
        }


    }

    //Le devuelvo la propiedad arrastrable a cada imagen
    $('.item').draggable({
        helper: 'clone'
    });

    $('.box-image-rayitas').droppable({
        accept: '.item',
        hoverClass: 'hovering',
        drop: function(ev, ui) {
            ui.draggable.detach();
            $(this).append(ui.draggable);
        }
    });
    return (cont==4);

}

function checkGameExtra(s){
    let a = checkTableGameExtraJ6('tabla1',['m','a','n','o'])
    let b = checkTableGameExtraJ6('tabla2',['m','o','n','o'])
    let c = checkTableGameExtraJ6('tabla3',['m','e','s','a'])
    if(a && b && c){
        confirmar(s)
    }else{
        alerta()
    }
}