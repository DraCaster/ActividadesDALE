let pintado = false; // En el juego , si se selecciona una imagen esta var se pone en true
let letraSelec = null;

const quitarAnimacion = () => {
    let element = document.getElementById("ayudabtn");
  element.classList.remove("pulse");

}

/*Selecciona con color una imagen elegida, y comprueba que 
no haya otra seleccionada, en ese caso, la despinta, y pinta la nueva */
function enmarcar(event) {
  selec = event.target;
  if (pintado == false) {
    selec.className += " cambiarBorde";
    pintado = true;
    letraSelec = selec.id;
    cantAct = cantAct + 1;
  } else {
    $(".cambiarBorde").removeClass("cambiarBorde");
    selec.className += " cambiarBorde";
    letraSelec = selec.id;
    cantAct = cantAct + 2;
  }
}
var sndOK = new Audio("../sonidos/ganaste.wav");
var sndNO = new Audio("../sonidos/error.wav");

/*Cartelito*/

function confirmar(s) {
  sndOK.play();
  alertify.confirm(
    "<img src='../img/feliz.jpg'> <h1><b>&iexcl; EXCELENTE ! <br>&iexcl; SIGAMOS JUGANDO ! </b></h1>",
    function (e) {
      if (e) {
        alertify.success("ELEGISTE '" + alertify.labels.ok + "'");
        setTimeout(function () {
          window.location.href = "../html/" + s + ".html"; //Pasa al siguiente juego
        }, 1300);
      } else {
        alertify.error("ELEGISTE '" + alertify.labels.cancel + "'");
        confirmSalida();
      }
    }
  );
  return false;
}

function alerta() {
  //un alert
  sndNO.play();
  alertify.alert(
    "<img src='../img/triste.jpg'> <h1><b> &iexcl; TE EQUIVOCASTE! <br> &iexcl; INTENTALO DE NUEVO ! </b></h1>",
    function () {
      //aqui introducimos lo que haremos tras cerrar la alerta.
    }
  );
}

/* Verifica que la imagen seleccionada sea la correcta */
function comprobar(s) {
  pintado = false;
  $(".cambiarBorde").removeClass("cambiarBorde"); //la imagen seleccionada se despinta
  if (letraSelec == "u") {
    confirmar(s);
  } else {
    alerta();
  }
}
