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
                window.location.href = "../html/n1j7.html"; //Pasa al siguiente juego
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

function faltanimg() {
    sndNO.play();
    alertify.alert("<img src='../assets/triste.png'> <h1><b> &iexcl; ALGO NO ESTA BIEN ! <br> &iexcl; INTENTALO DE NUEVO ! </b></h1>", function() {
        //aqui introducimos lo que haremos tras cerrar la alerta.
    });
}


function comprobarJ5() {

    if (cantM == 6 & cantO == 0) {
            confirmar();
    }else{
        if(cantM < 6){
            faltanimg();
        }
        else{
            alerta();
        }
    }

}