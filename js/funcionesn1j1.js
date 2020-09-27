let pintado = false; // En el juego , si se selecciona una imagen esta var se pone en true
let letraSelec = null;

const quitarAnimacion = () => {
    let element = document.getElementById("ayudabtn");
  element.classList.remove("pulse");
}

const mostrarImgPrincipal = (url,titulo) => {
 
  let tabla = document.getElementById("tabla1-1")
  tabla.classList.remove("imgOcultar")
  tabla.classList.add("tabla1-1")

  let elementImg = document.getElementById("imgj1");
  elementImg.classList.add("imgJuegosG")
  console.log('elemimg',elementImg)
  let elementTitulo = document.getElementById("tituloj1");
  elementImg.src=url;
  elementTitulo.innerHTML= titulo
}

/*Selecciona con color una imagen elegida, y comprueba que 
no haya otra seleccionada, en ese caso, la despinta, y pinta la nueva */
function enmarcar(event) {
  selec = event.target;
  if (pintado == false) {
    selec.className += " cambiarBorde";
    pintado = true;
    letraSelec = selec.id;
   
  } else {
    $(".cambiarBorde").removeClass("cambiarBorde");
    selec.className += " cambiarBorde";
    letraSelec = selec.id;
   
  }
}
var sndOK = new Audio("../sonidos/ganaste.wav");
var sndNO = new Audio("../sonidos/error.wav");

/*Cartelito*/

function confirmar(s) {
  sndOK.play();
  alertify.confirm(
    "<img src='../assets/feliz.png'> <h1><b>&iexcl; EXCELENTE ! <br>&iexcl; SIGAMOS JUGANDO ! </b></h1>",
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
    "<img src='../assets/triste.png'> <h3> &iexcl; INTENTALO DE NUEVO ! </b></h3>",
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
